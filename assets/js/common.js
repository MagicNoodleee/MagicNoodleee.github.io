/* 首页和论文详情页共用的工具：双语、主题、图标、顶栏。
   正常情况下你不需要动这个文件 —— 改内容请改 data.js。 */
var HP = (function () {
  "use strict";

  function store(k, v) {
    try {
      if (v === undefined) return localStorage.getItem("hp:" + k);
      localStorage.setItem("hp:" + k, v);
    } catch (e) { /* 隐私模式：忽略 */ }
    return null;
  }

  /* ---------- 语言 ---------- */
  var lang = store("lang") || (/^zh/i.test(navigator.language || "") ? "zh" : "en");

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

  /* url 为空或 "#" 视为未填写，不渲染 */
  function liveLinks(links) {
    return (links || []).filter(function (l) { return l.url && l.url !== "#"; });
  }

  /* 外链、以及本站的 PDF，都开新标签，避免把人带离主页 */
  function opensNewTab(url) {
    return /^https?:/.test(url) || /\.pdf($|[?#])/i.test(url);
  }

  function linkTo(a, url) {
    a.href = url;
    if (opensNewTab(url)) { a.target = "_blank"; a.rel = "noopener"; }
    return a;
  }

  function extAttrs(url) {
    return opensNewTab(url) ? ' target="_blank" rel="noopener"' : "";
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

  /* ---------- 主题 ---------- */
  function applyTheme(mode) {
    var btn = document.getElementById("themeBtn");
    if (mode) document.documentElement.setAttribute("data-theme", mode);
    else document.documentElement.removeAttribute("data-theme");
    var dark = mode === "dark" ||
      (!mode && window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (btn) btn.innerHTML = dark ? SUN : MOON;
  }

  /* ---------- 顶栏导航装不下时右缘淡出 ---------- */
  function navHint() {
    var n = document.getElementById("nav");
    if (!n) return;
    n.classList.toggle("is-scrollable", n.scrollWidth > n.clientWidth + 1);
  }

  /* ---------- 启动：套用主题、首次渲染、接上两个切换按钮 ---------- */
  function init(render) {
    var saved = store("theme");
    applyTheme(saved === "dark" || saved === "light" ? saved : null);
    render();

    var lb = document.getElementById("langBtn");
    if (lb) lb.onclick = function () {
      lang = lang === "zh" ? "en" : "zh";
      store("lang", lang);
      render();
    };

    var tb = document.getElementById("themeBtn");
    if (tb) tb.onclick = function () {
      var cur = document.documentElement.getAttribute("data-theme");
      var next = cur === "dark" ? "light" : cur === "light" ? "dark"
        : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "light" : "dark");
      store("theme", next);
      applyTheme(next);
    };

    window.addEventListener("resize", navHint);
  }

  /* 每次渲染都要做的顶栏杂务 */
  function chrome(name) {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    var slot = document.querySelector('[data-slot="navname"]');
    if (slot) slot.textContent = name;
    var lb = document.getElementById("langBtn");
    if (lb) lb.textContent = lang === "zh" ? "EN" : "\u4e2d";
  }

  return {
    store: store, t: t, md: md, el: el, nonEmpty: nonEmpty,
    liveLinks: liveLinks, extAttrs: extAttrs, linkTo: linkTo,
    ICON: ICON, applyTheme: applyTheme, navHint: navHint,
    init: init, chrome: chrome,
    lang: function () { return lang; }
  };
})();
