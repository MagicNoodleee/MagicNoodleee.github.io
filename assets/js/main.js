/* 首页渲染。共用工具在 common.js，内容在 data.js —— 正常情况下这个文件不用动。 */
(function () {
  "use strict";

  var t = HP.t, md = HP.md, el = HP.el, nonEmpty = HP.nonEmpty, ICON = HP.ICON;
  function lang() { return HP.lang(); }

  /* ---------- 各模块渲染器 ---------- */
  var R = {

    about: function (d) {
      var f = document.createDocumentFragment();
      if (nonEmpty(d.interests)) {
        var ul = el("ul", "tags");
        d.interests.forEach(function (i) { ul.appendChild(el("li", null, t(i))); });
        f.appendChild(ul);
      }
      (d.bio || []).forEach(function (p) {
        if (nonEmpty(p)) f.appendChild(el("p", null, md(t(p))));
      });
      return f.childNodes.length ? f : null;
    },

    news: function (d) {
      if (!nonEmpty(d.items)) return null;
      var f = document.createDocumentFragment();
      var ul = el("ul", "news");
      var max = d.max || 5;
      d.items.forEach(function (n, i) {
        var li = el("li", i >= max ? "hidden" : null);
        li.appendChild(el("time", null, n.date || ""));
        li.appendChild(el("div", null, md(t(n.text))));
        ul.appendChild(li);
      });
      f.appendChild(ul);
      if (d.items.length > max) {
        var btn = el("button", "morebtn", lang() === "zh" ? "显示全部 ↓" : "Show all ↓");
        btn.type = "button";
        btn.onclick = function () {
          var open = ul.classList.toggle("open");
          ul.querySelectorAll("li").forEach(function (li, i) {
            li.classList.toggle("hidden", !open && i >= max);
          });
          btn.textContent = open
            ? (lang() === "zh" ? "收起 ↑" : "Show less ↑")
            : (lang() === "zh" ? "显示全部 ↓" : "Show all ↓");
        };
        f.appendChild(btn);
      }
      return f;
    },

    publications: function (d) {
      if (!nonEmpty(d.items)) return null;
      var f = document.createDocumentFragment();
      var fn = HP.footnotes(d.notes, (d.items || []).map(function (x) { return t(x.authors); }));
      if (fn.length) {
        f.appendChild(el("p", "pubnote", fn.map(function (x) {
          return '<span class="fn">' + x + "</span>";
        }).join("")));
      }

      var items = d.items.slice().sort(function (a, b) { return (b.year || 0) - (a.year || 0); });
      var lastYear = null;

      items.forEach(function (p) {
        if (d.groupByYear && p.year && p.year !== lastYear) {
          f.appendChild(el("div", "yearhead", String(p.year)));
          lastYear = p.year;
        }

        var row = el("div", "pub" + (p.thumb ? " has-thumb" : ""));

        if (p.thumb) {
          var img = new Image();
          img.className = "pub-thumb";
          img.src = p.thumb;
          img.alt = "";
          img.loading = "lazy";
          row.appendChild(img);
        }

        var body = el("div");

        var badges = "";
        if (nonEmpty(p.badges)) {
          badges = '<span class="badges">' + p.badges.map(function (b) {
            return '<span class="badge">' + t(b) + "</span>";
          }).join("") + "</span>";
        }
        // 标题指向本站详情页；没有 slug 的条目退回纯文本
        var titleHtml = md(t(p.title)) + HP.langSuffix(p.lang);
        if (p.slug) {
          titleHtml = '<a href="paper.html?id=' + encodeURIComponent(p.slug) + '">' +
            titleHtml + "</a>";
        }
        body.appendChild(el("div", "pub-title", titleHtml + badges));
        if (nonEmpty(p.authors)) body.appendChild(el("div", "pub-authors", HP.authorsHtml(t(p.authors))));
        if (nonEmpty(p.venue))   body.appendChild(el("div", "pub-venue", t(p.venue)));
        if (nonEmpty(p.tldr))    body.appendChild(el("div", "pub-tldr", md(t(p.tldr))));

        var links = (p.links || []).filter(function (l) { return l.url && l.url !== "#"; });
        if (links.length) {
          var box = el("div", "pub-links");
          links.forEach(function (l) {
            var a = el("a", null, t(l.label));
            HP.linkTo(a, l.url);
            box.appendChild(a);
          });
          body.appendChild(box);
        }

        row.appendChild(body);
        f.appendChild(row);
      });
      return f;
    },

    /* education / experience / teaching 共用 */
    timeline: function (d) {
      if (!nonEmpty(d.items)) return null;
      var ul = el("ul", "tl");
      d.items.forEach(function (it) {
        var li = el("li");
        li.appendChild(el("div", "period", t(it.period)));
        var b = el("div");
        if (nonEmpty(it.degree)) b.appendChild(el("div", "role", md(t(it.degree))));
        if (nonEmpty(it.org))    b.appendChild(el("div", "org", md(t(it.org))));
        if (nonEmpty(it.detail)) b.appendChild(el("div", "det", md(t(it.detail))));
        li.appendChild(b);
        ul.appendChild(li);
      });
      return ul;
    },

    awards: function (d) {
      if (!nonEmpty(d.items)) return null;
      var ul = el("ul", "awards");
      d.items.forEach(function (a) {
        var li = el("li");
        li.appendChild(el("div", "y", t(a.year)));
        li.appendChild(el("div", null, md(t(a.text))));
        ul.appendChild(li);
      });
      return ul;
    },

    service: function (d) {
      if (!nonEmpty(d.items)) return null;
      var ul = el("ul", "svc");
      d.items.forEach(function (s) {
        ul.appendChild(el("li", null,
          '<span class="k">' + t(s.key) + '</span>&nbsp;&nbsp;<span class="v">' + md(t(s.value)) + "</span>"));
      });
      return ul;
    },

    misc: function (d) {
      if (!nonEmpty(d.paragraphs)) return null;
      var f = document.createDocumentFragment();
      d.paragraphs.forEach(function (p) {
        if (nonEmpty(p)) f.appendChild(el("p", null, md(t(p))));
      });
      return f.childNodes.length ? f : null;
    }
  };

  R.education = R.timeline;
  R.experience = R.timeline;
  R.teaching = R.timeline;

  /* ---------- 主渲染 ---------- */
  function render() {
    var p = SITE.profile;
    var name = t(p.name);
    HP.chrome(name);

    /* hero */
    var hero = document.getElementById("top");
    hero.innerHTML = "";
    if (p.photo) {
      var img = new Image();
      img.className = "hero-photo";
      img.src = p.photo;
      img.alt = name;
      hero.appendChild(img);
    }
    var info = el("div");
    info.appendChild(el("h1", null, name));
    if (nonEmpty(p.title)) info.appendChild(el("p", "hero-title", t(p.title)));
    if (nonEmpty(p.affiliation)) {
      info.appendChild(el("p", "hero-affil",
        p.affiliation.filter(nonEmpty).map(function (a) { return "<span>" + md(t(a)) + "</span>"; }).join("")));
    }
    var valid = (p.links || []).filter(function (l) { return l.url && l.url !== "#"; });
    if (valid.length) {
      var lb = el("div", "hero-links");
      valid.forEach(function (l) {
        var a = el("a", null, (ICON[l.icon] || ICON.link) + "<span>" + t(l.label) + "</span>");
        HP.linkTo(a, l.url);
        lb.appendChild(a);
      });
      info.appendChild(lb);
    }
    hero.appendChild(info);

    /* sections */
    var host = document.getElementById("sections");
    var nav = document.getElementById("nav");
    host.innerHTML = "";
    nav.innerHTML = "";

    (SITE.order || []).forEach(function (key) {
      var d = SITE[key];
      var fn = R[key];
      if (!d || !fn) return;
      var content = fn(d);
      if (!content) return;

      var sec = el("section", "sec");
      sec.id = key;
      sec.appendChild(el("h2", null, t(d.label) || key));
      sec.appendChild(content);
      host.appendChild(sec);

      var a = el("a", null, t(d.navLabel) || t(d.label) || key);
      a.href = "#" + key;
      nav.appendChild(a);
    });

    /* footer */
    var f = SITE.footer || {};
    var foot = document.getElementById("footer");
    foot.innerHTML = "";
    if (nonEmpty(f.text)) foot.appendChild(el("div", null, md(t(f.text))));
    foot.appendChild(el("div", null,
      "© " + new Date().getFullYear() + " " + name + "."));
    if (f.showCredit) {
      foot.appendChild(el("div", "credit",
        lang() === "zh"
          ? '静态页面，托管于 <a href="https://pages.github.com" target="_blank" rel="noopener">GitHub Pages</a>。'
          : 'Static site hosted on <a href="https://pages.github.com" target="_blank" rel="noopener">GitHub Pages</a>.'));
    }

    /* <title> 跟随语言 */
    var base = document.title.split("—")[1];
    document.title = name + (base ? " —" + base : "");

    spy();
    HP.navHint();
  }

  /* ---------- 导航高亮 ---------- */
  var obs = null;
  function spy() {
    if (obs) obs.disconnect();
    var links = {};
    document.querySelectorAll("#nav a").forEach(function (a) { links[a.hash.slice(1)] = a; });
    obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var a = links[e.target.id];
        if (a && e.isIntersecting) {
          document.querySelectorAll("#nav a").forEach(function (x) { x.classList.remove("active"); });
          a.classList.add("active");
        }
      });
    }, { rootMargin: "-56px 0px -70% 0px" });
    document.querySelectorAll(".sec").forEach(function (s) { obs.observe(s); });
  }

  HP.init(render);
})();
