/* 论文详情页 paper.html?id=<slug>。内容取自 data.js 的 publications。 */
(function () {
  "use strict";

  var t = HP.t, md = HP.md, el = HP.el, nonEmpty = HP.nonEmpty;
  function lang() { return HP.lang(); }

  var TXT = {
    back:     { en: "All publications", zh: "返回论文列表" },
    abstract: { en: "Abstract",  zh: "摘要" },
    cite:     { en: "Cite",      zh: "引用" },
    copy:     { en: "Copy",      zh: "复制" },
    copied:   { en: "Copied",    zh: "已复制" },
    notfound: { en: "Publication not found.", zh: "没有找到这篇论文。" },
    home:     { en: "Go to homepage", zh: "回到主页" },
    prev:     { en: "Newer", zh: "更新的" },
    next:     { en: "Older", zh: "更早的" }
  };

  function slugParam() {
    var m = /[?&]id=([^&]+)/.exec(location.search);
    return m ? decodeURIComponent(m[1]) : "";
  }

  /* 按年份倒序排的列表，用来做上一篇/下一篇 */
  function ordered() {
    return (SITE.publications.items || []).slice()
      .sort(function (a, b) { return (b.year || 0) - (a.year || 0); });
  }

  function render() {
    var name = t(SITE.profile.name);
    HP.chrome(name);

    var host = document.getElementById("paper");
    var list = ordered();
    var slug = slugParam();
    var idx  = list.findIndex(function (p) { return p.slug === slug; });
    var p    = list[idx];

    host.innerHTML = "";

    if (!p) {
      host.appendChild(el("div", "sec", "<h2>404</h2><p>" + t(TXT.notfound) +
        ' <a href="index.html">' + t(TXT.home) + "</a></p>"));
      document.title = "Not found — " + name;
      return;
    }

    /* 返回链接 */
    var back = el("a", "backlink", "← " + t(TXT.back));
    back.href = "index.html#publications";
    host.appendChild(back);

    /* 标题 + 徽章 */
    var badges = "";
    if (nonEmpty(p.badges)) {
      badges = '<span class="badges">' + p.badges.map(function (b) {
        return '<span class="badge">' + t(b) + "</span>";
      }).join("") + "</span>";
    }
    host.appendChild(el("h1", "paper-title", md(t(p.title)) + badges));

    /* 作者 / 出处 */
    if (nonEmpty(p.authors)) host.appendChild(el("div", "paper-authors", md(t(p.authors))));
    if (nonEmpty(p.venue))   host.appendChild(el("div", "paper-venue", t(p.venue)));

    /* 这篇标了通讯作者才显示脚注（去掉 **加粗** 后仍含 * 即为标了） */
    var note = SITE.publications.note;
    if (nonEmpty(note) && /\*/.test(String(t(p.authors)).replace(/\*\*(.+?)\*\*/g, "$1"))) {
      host.appendChild(el("div", "paper-note", t(note)));
    }

    /* 链接按钮 */
    var links = HP.liveLinks(p.links);
    if (links.length) {
      var box = el("div", "paper-links");
      links.forEach(function (l) {
        var a = el("a", null, t(l.label));
        HP.linkTo(a, l.url);
        box.appendChild(a);
      });
      host.appendChild(box);
    }

    /* 摘要 */
    if (nonEmpty(p.abstract)) {
      var sec = el("section", "paper-sec");
      sec.appendChild(el("h2", null, t(TXT.abstract)));
      sec.appendChild(el("p", "paper-abstract", md(t(p.abstract))));
      host.appendChild(sec);
    }

    /* BibTeX + 复制 */
    if (nonEmpty(p.bibtex)) {
      var cite = el("section", "paper-sec");
      var head = el("div", "cite-head");
      head.appendChild(el("h2", null, t(TXT.cite)));
      var btn = el("button", "copybtn", t(TXT.copy));
      btn.type = "button";
      btn.onclick = function () {
        var done = function () {
          btn.textContent = t(TXT.copied);
          btn.classList.add("ok");
          setTimeout(function () {
            btn.textContent = t(TXT.copy);
            btn.classList.remove("ok");
          }, 1600);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(p.bibtex).then(done, fallback);
        } else { fallback(); }
        function fallback() {
          var ta = document.createElement("textarea");
          ta.value = p.bibtex;
          ta.style.cssText = "position:fixed;opacity:0";
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand("copy"); done(); } catch (e) { /* 放弃 */ }
          document.body.removeChild(ta);
        }
      };
      head.appendChild(btn);
      cite.appendChild(head);
      var pre = el("pre", "bibtex");
      pre.appendChild(el("code", null, ""));
      pre.firstChild.textContent = p.bibtex;   // 用 textContent，避免 HTML 注入
      cite.appendChild(pre);
      host.appendChild(cite);
    }

    /* 上一篇 / 下一篇 */
    var nav = el("nav", "paper-pager");
    var prev = list[idx - 1], next = list[idx + 1];
    if (prev && prev.slug) {
      var a1 = el("a", "pager-prev",
        '<span class="pager-dir">← ' + t(TXT.prev) + '</span><span class="pager-t">' +
        md(t(prev.title)) + "</span>");
      a1.href = "paper.html?id=" + encodeURIComponent(prev.slug);
      nav.appendChild(a1);
    } else { nav.appendChild(el("span")); }
    if (next && next.slug) {
      var a2 = el("a", "pager-next",
        '<span class="pager-dir">' + t(TXT.next) + ' →</span><span class="pager-t">' +
        md(t(next.title)) + "</span>");
      a2.href = "paper.html?id=" + encodeURIComponent(next.slug);
      nav.appendChild(a2);
    }
    host.appendChild(nav);

    /* 顶栏导航：放一个回主页各章节的链接 */
    var top = document.getElementById("nav");
    top.innerHTML = "";
    (SITE.order || []).forEach(function (key) {
      var d = SITE[key];
      if (!d) return;
      var has = (d.items && d.items.length) || (d.bio && d.bio.length) ||
                (d.paragraphs && d.paragraphs.length);
      if (!has) return;
      var a = el("a", null, t(d.navLabel) || t(d.label) || key);
      a.href = "index.html#" + key;
      top.appendChild(a);
    });
    HP.navHint();

    /* 页头标题与描述 */
    var plain = t(p.title).replace(/\*\*/g, "");
    document.title = plain + " — " + name;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", (t(p.abstract) || plain).slice(0, 200));

    /* 页脚 */
    var f = SITE.footer || {};
    var foot = document.getElementById("footer");
    foot.innerHTML = "";
    foot.appendChild(el("div", null, "© " + new Date().getFullYear() + " " + name + "."));
    if (f.showCredit) {
      foot.appendChild(el("div", "credit",
        lang() === "zh"
          ? '静态页面，托管于 <a href="https://pages.github.com" target="_blank" rel="noopener">GitHub Pages</a>。'
          : 'Static site hosted on <a href="https://pages.github.com" target="_blank" rel="noopener">GitHub Pages</a>.'));
    }
  }

  HP.init(render);
})();
