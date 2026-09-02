/* 渲染逻辑。正常情况下你不需要动这个文件 —— 改内容请改 data.js。 */
(function () {
  "use strict";

  /* ---------- 语言 ---------- */
  var lang = store("lang") || (/^zh/i.test(navigator.language || "") ? "zh" : "en");

  function store(k, v) {
    try {
      if (v === undefined) return localStorage.getItem("hp:" + k);
      localStorage.setItem("hp:" + k, v);
    } catch (e) { /* private mode: ignore */ }
    return null;
  }

  /* 取双语字段：字符串原样返回，{en,zh} 取当前语言 */
  function t(v) {
    if (v == null) return "";
    if (typeof v === "string") return v;
    return v[lang] || v.en || v.zh || "";
  }

  /* **加粗** -> <strong>；其余 HTML 原样保留（内容是你自己写的） */
  function md(s) {
    return String(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  }

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function nonEmpty(v) {
    if (v == null) return false;
    if (Array.isArray(v)) return v.length > 0;
    return String(t(v)).trim() !== "";
  }

  /* ---------- 图标 ---------- */
  var ICON = {
    mail:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2.5"/><path d="m3 7.5 9 5.5 9-5.5"/></svg>',
    link:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19"/><path d="M12 2.5c2.6 3 3.9 6.2 3.9 9.5S14.6 18.5 12 21.5c-2.6-3-3.9-6.2-3.9-9.5S9.4 5.5 12 2.5z"/></svg>',
    cv:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2.5H7A2 2 0 0 0 5 4.5v15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-11z"/><path d="M14 2.5v6h5"/><path d="M9 13h6M9 17h4"/></svg>',
    github:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',
    scholar: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.84 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.16 4.44L24 9.5 12 0z"/></svg>',
    orcid:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM7.37 4.38c.53 0 .95.43.95.95s-.42.95-.95.95a.95.95 0 0 1-.95-.95c0-.52.42-.95.95-.95zm-.72 3.04h1.44v10.04H6.65V7.42zm3.56 0h3.9c3.71 0 5.34 2.65 5.34 5.02 0 2.58-2.02 5.02-5.32 5.02h-3.92V7.42zm1.44 1.3v7.45h2.3c3.27 0 4.02-2.49 4.02-3.72 0-2.02-1.28-3.72-4.1-3.72h-2.22z"/></svg>',
    x:       '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23zm-1.16 17.52h1.83L7.08 4.13H5.12z"/></svg>',
    linkedin:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z"/></svg>'
  };
  ICON.arxiv = ICON.cv;
  ICON.researchgate = ICON.link;
  ICON.semantic = ICON.link;
  ICON.bsky = ICON.link;

  var SUN  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.4M12 19.6V22M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2 12h2.4M19.6 12H22M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7"/></svg>';
  var MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 14.4A8.6 8.6 0 0 1 9.6 3.5a8.6 8.6 0 1 0 10.9 10.9z"/></svg>';

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
        var btn = el("button", "morebtn", lang === "zh" ? "显示全部 ↓" : "Show all ↓");
        btn.type = "button";
        btn.onclick = function () {
          var open = ul.classList.toggle("open");
          ul.querySelectorAll("li").forEach(function (li, i) {
            li.classList.toggle("hidden", !open && i >= max);
          });
          btn.textContent = open
            ? (lang === "zh" ? "收起 ↑" : "Show less ↑")
            : (lang === "zh" ? "显示全部 ↓" : "Show all ↓");
        };
        f.appendChild(btn);
      }
      return f;
    },

    publications: function (d) {
      if (!nonEmpty(d.items)) return null;
      var f = document.createDocumentFragment();
      if (nonEmpty(d.note)) f.appendChild(el("p", "pubnote", t(d.note)));

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
        // 标题指向第一个有效链接（links 里的第一条），没有链接就是纯文本
        var primary = (p.links || []).filter(function (l) { return l.url && l.url !== "#"; })[0];
        var titleHtml = md(t(p.title));
        if (primary) {
          titleHtml = '<a href="' + primary.url + '"' +
            (/^https?:/.test(primary.url) ? ' target="_blank" rel="noopener"' : '') +
            '>' + titleHtml + "</a>";
        }
        body.appendChild(el("div", "pub-title", titleHtml + badges));
        if (nonEmpty(p.authors)) body.appendChild(el("div", "pub-authors", md(t(p.authors))));
        if (nonEmpty(p.venue))   body.appendChild(el("div", "pub-venue", t(p.venue)));
        if (nonEmpty(p.tldr))    body.appendChild(el("div", "pub-tldr", md(t(p.tldr))));

        var links = (p.links || []).filter(function (l) { return l.url && l.url !== "#"; });
        if (links.length) {
          var box = el("div", "pub-links");
          links.forEach(function (l) {
            var a = el("a", null, t(l.label));
            a.href = l.url;
            if (/^https?:/.test(l.url)) { a.target = "_blank"; a.rel = "noopener"; }
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
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

    var p = SITE.profile;
    var name = t(p.name);

    document.querySelector('[data-slot="navname"]').textContent = name;
    document.getElementById("langBtn").textContent = lang === "zh" ? "EN" : "中";

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
        a.href = l.url;
        if (/^https?:/.test(l.url)) { a.target = "_blank"; a.rel = "noopener"; }
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
        lang === "zh"
          ? '静态页面，托管于 <a href="https://pages.github.com" target="_blank" rel="noopener">GitHub Pages</a>。'
          : 'Static site hosted on <a href="https://pages.github.com" target="_blank" rel="noopener">GitHub Pages</a>.'));
    }

    /* <title> 跟随语言 */
    var base = document.title.split("—")[1];
    document.title = name + (base ? " —" + base : "");

    spy();
    navHint();
  }

  /* ---------- 导航装不下时显示淡出提示 ---------- */
  function navHint() {
    var n = document.getElementById("nav");
    n.classList.toggle("is-scrollable", n.scrollWidth > n.clientWidth + 1);
  }
  window.addEventListener("resize", navHint);

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

  /* ---------- 主题 ---------- */
  function applyTheme(mode) {
    var btn = document.getElementById("themeBtn");
    if (mode) document.documentElement.setAttribute("data-theme", mode);
    else document.documentElement.removeAttribute("data-theme");
    var dark = mode === "dark" ||
      (!mode && window.matchMedia("(prefers-color-scheme: dark)").matches);
    btn.innerHTML = dark ? SUN : MOON;
  }

  /* ---------- 启动 ---------- */
  var saved = store("theme");
  applyTheme(saved === "dark" || saved === "light" ? saved : null);
  render();

  document.getElementById("langBtn").onclick = function () {
    lang = lang === "zh" ? "en" : "zh";
    store("lang", lang);
    render();
  };

  document.getElementById("themeBtn").onclick = function () {
    var cur = document.documentElement.getAttribute("data-theme");
    var next = cur === "dark" ? "light" : cur === "light" ? "dark"
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "light" : "dark");
    store("theme", next);
    applyTheme(next);
  };
})();
