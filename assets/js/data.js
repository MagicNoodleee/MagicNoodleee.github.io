/* ============================================================================
 *  个人学术主页 — 内容数据文件
 *  ---------------------------------------------------------------------------
 *  你只需要改这一个文件。改完保存，双击 index.html 就能在浏览器里看到效果。
 *
 *  【双语写法】凡是需要中英两版的文字，写成 { en: "English", zh: "中文" }
 *              两边一样的（比如论文标题、会议名、人名），直接写成 "字符串" 即可。
 *
 *  【删除模块】不需要的模块，把它的 items 清空成 []，整个模块会自动隐藏。
 *
 *  【留意】所有 // 开头的都是注释，不影响页面，可以删掉。
 * ========================================================================== */

const SITE = {

  /* ---------------------------------------------------------------------- *
   *  1. 基本信息（页头）
   * ---------------------------------------------------------------------- */
  profile: {
    name: { en: "Your Name", zh: "你的名字" },

    // 职称 / 身份，例如 PhD Student、Postdoctoral Researcher、Assistant Professor
    title: { en: "Ph.D. Student", zh: "博士研究生" },

    // 院系 / 实验室（没有就删掉这两行的内容留空字符串）
    affiliation: [
      { en: "Department of Computer Science", zh: "计算机科学系" },
      { en: "University Name", zh: "某某大学" },
      { en: "XYZ Lab, advised by Prof. A. Advisor", zh: "XYZ 实验室，导师：某某教授" }
    ],

    // 头像：把你的照片放进 assets/img/ 然后把下面路径改成文件名
    // 建议正方形、不小于 600×600，jpg 或 png 都行
    photo: "assets/img/avatar.svg",

    // 顶部的链接按钮。不需要的整行删掉即可。
    // icon 可选值：mail / scholar / github / orcid / x / linkedin /
    //             cv / arxiv / researchgate / semantic / bsky / link
    links: [
      { icon: "mail",     label: "Email",          url: "mailto:your.email@university.edu" },
      { icon: "scholar",  label: "Google Scholar", url: "https://scholar.google.com/citations?user=XXXX" },
      { icon: "github",   label: "GitHub",         url: "https://github.com/MagicNoodleee" },
      { icon: "orcid",    label: "ORCID",          url: "https://orcid.org/0000-0000-0000-0000" },
      { icon: "cv",       label: "CV",             url: "assets/files/cv.pdf" },
      { icon: "x",        label: "X",              url: "https://x.com/yourhandle" },
      { icon: "linkedin", label: "LinkedIn",       url: "https://linkedin.com/in/yourhandle" }
    ],

    // 作者列表里你自己的名字用 **两个星号** 包起来，会自动加粗高亮。
    // 详见下面 publications 的写法。
  },


  /* ---------------------------------------------------------------------- *
   *  2. 模块顺序 —— 想调整顺序就改这个数组，想彻底不要某块就把它从数组里删掉
   * ---------------------------------------------------------------------- */
  order: ["about", "news", "publications", "education", "experience",
          "awards", "teaching", "service", "misc"],


  /* ---------------------------------------------------------------------- *
   *  3. 关于我
   * ---------------------------------------------------------------------- */
  about: {
    label: { en: "About", zh: "关于" },

    // 研究关键词，3–5 个最好
    interests: [
      { en: "Machine Learning", zh: "机器学习" },
      { en: "Natural Language Processing", zh: "自然语言处理" },
      { en: "Human–AI Interaction", zh: "人机交互" }
    ],

    // 自我介绍。每个字符串是一段，可以写 1–3 段。
    // 段落里可以用 **加粗**，也可以直接写 <a href="...">链接</a>。
    bio: [
      {
        en: "I am a Ph.D. student at <b>University Name</b>, advised by Prof. A. Advisor. My research focuses on ... Write 2–4 sentences here about what problem you work on and why it matters.",
        zh: "我是<b>某某大学</b>的博士研究生，导师是某某教授。我的研究方向是……在这里写 2–4 句话，说清楚你研究什么问题、为什么重要。"
      },
      {
        en: "Before that, I received my B.S. from ... I am currently looking for ... (internships / collaborations / postdoc positions). Feel free to reach out!",
        zh: "在此之前，我在……获得学士学位。目前我正在寻找……（实习 / 合作 / 教职机会），欢迎邮件联系。"
      }
    ]
  },


  /* ---------------------------------------------------------------------- *
   *  4. 动态 News —— 最新的放最上面
   * ---------------------------------------------------------------------- */
  news: {
    label: { en: "News", zh: "动态" },
    max: 5,                      // 首屏最多显示几条，超出的收起来点 "Show all" 展开
    items: [
      { date: "2026-09",
        text: { en: "One paper accepted to <b>NeurIPS 2026</b>. See you in San Diego!",
                zh: "一篇论文被 <b>NeurIPS 2026</b> 接收，圣地亚哥见！" } },
      { date: "2026-06",
        text: { en: "Started a research internship at <b>Company X</b>.",
                zh: "开始在 <b>某公司</b> 进行研究实习。" } },
      { date: "2026-03",
        text: { en: "Gave a talk at the XYZ Workshop.",
                zh: "在 XYZ Workshop 做了报告。" } }
    ]
  },


  /* ---------------------------------------------------------------------- *
   *  5. 论文发表 —— 主页的核心
   * ---------------------------------------------------------------------- *
   *  authors : 完整作者顺序，你自己的名字用 **星号** 包起来
   *            共同一作可以写成 "**Your Name***, Co-Author*, ..." 再配 note
   *  venue   : 会议 / 期刊 + 年份，例如 "NeurIPS 2026" 或 "Nature 620(7973)"
   *  year    : 数字，用来按年份分组排序
   *  badges  : 可选，["Oral"] / ["Spotlight"] / ["Best Paper Award"] / ["Under Review"]
   *  thumb   : 可选，配图路径，放 assets/img/ 下，建议 16:10 或 4:3，宽 600px 左右
   *  tldr    : 可选，一句话说明这篇论文干了什么
   *  links   : 可选，任意多个按钮
   * ---------------------------------------------------------------------- */
  publications: {
    label: { en: "Publications", zh: "论文发表" },
    note: { en: "* denotes equal contribution.", zh: "* 表示共同第一作者。" },
    groupByYear: true,          // 改成 false 就不显示年份分组
    items: [

      {
        title: "A Really Interesting Title About Something Important",
        authors: "**Your Name**, Second Author, Third Author, A. Advisor",
        venue: "Conference on Neural Information Processing Systems (NeurIPS)",
        year: 2026,
        badges: ["Oral"],
        thumb: "",              // 例如 "assets/img/pub-neurips26.png"
        tldr: { en: "One sentence on the key idea and the headline result.",
                zh: "一句话说明核心想法和主要结果。" },
        links: [
          { label: "PDF",     url: "#" },
          { label: "arXiv",   url: "#" },
          { label: "Code",    url: "#" },
          { label: "Project", url: "#" },
          { label: "Slides",  url: "#" }
        ]
      },

      {
        title: "Another Paper Title, Slightly Less Exciting But Still Good",
        authors: "First Author*, **Your Name***, A. Advisor",
        venue: "Annual Meeting of the Association for Computational Linguistics (ACL)",
        year: 2025,
        badges: [],
        thumb: "",
        tldr: { en: "", zh: "" },
        links: [
          { label: "arXiv", url: "#" },
          { label: "Code",  url: "#" }
        ]
      },

      {
        title: "An Earlier Workshop Paper",
        authors: "**Your Name**, A. Advisor",
        venue: "ICML Workshop on Something",
        year: 2024,
        badges: [],
        links: [{ label: "PDF", url: "#" }]
      }

    ]
  },


  /* ---------------------------------------------------------------------- *
   *  6. 教育背景
   * ---------------------------------------------------------------------- */
  education: {
    label: { en: "Education", zh: "教育背景" },
    items: [
      {
        period: "2022 – Present",
        degree: { en: "Ph.D. in Computer Science", zh: "计算机科学 博士" },
        org:    { en: "University Name", zh: "某某大学" },
        detail: { en: "Advisor: Prof. A. Advisor", zh: "导师：某某教授" }
      },
      {
        period: "2018 – 2022",
        degree: { en: "B.Eng. in Software Engineering", zh: "软件工程 学士" },
        org:    { en: "Another University", zh: "另一所大学" },
        detail: { en: "Thesis: title of your undergrad thesis", zh: "毕业论文：本科论文题目" }
      }
    ]
  },


  /* ---------------------------------------------------------------------- *
   *  7. 工作 / 实习经历
   * ---------------------------------------------------------------------- */
  experience: {
    label: { en: "Experience", zh: "工作经历" },
    items: [
      {
        period: "2026.06 – 2026.09",
        degree: { en: "Research Intern", zh: "研究实习生" },      // 这里放职位
        org:    { en: "Company X, Research Team", zh: "某公司 研究团队" },
        detail: { en: "Worked on ... with Mentor Name.", zh: "与某某合作，研究……" }
      }
    ]
  },


  /* ---------------------------------------------------------------------- *
   *  8. 获奖荣誉
   * ---------------------------------------------------------------------- */
  awards: {
    label: { en: "Awards & Honors", zh: "获奖荣誉" },
    items: [
      { year: "2026", text: { en: "NeurIPS Top Reviewer", zh: "NeurIPS 优秀审稿人" } },
      { year: "2025", text: { en: "University Graduate Fellowship", zh: "校级研究生奖学金" } },
      { year: "2022", text: { en: "Outstanding Graduate", zh: "优秀毕业生" } }
    ]
  },


  /* ---------------------------------------------------------------------- *
   *  9. 教学
   * ---------------------------------------------------------------------- */
  teaching: {
    label: { en: "Teaching", zh: "教学经历" },
    items: [
      { period: "Fall 2025",
        degree: { en: "Teaching Assistant", zh: "助教" },
        org:    { en: "CS 101: Introduction to Programming", zh: "CS 101：程序设计导论" },
        detail: { en: "", zh: "" } }
    ]
  },


  /* ---------------------------------------------------------------------- *
   *  10. 学术服务
   * ---------------------------------------------------------------------- */
  service: {
    label: { en: "Academic Service", zh: "学术服务" },
    items: [
      { key:   { en: "Conference Reviewer", zh: "会议审稿人" },
        value: { en: "NeurIPS 2025–2026, ICML 2026, ACL 2025",
                 zh: "NeurIPS 2025–2026、ICML 2026、ACL 2025" } },
      { key:   { en: "Journal Reviewer", zh: "期刊审稿人" },
        value: { en: "TMLR", zh: "TMLR" } },
      { key:   { en: "Organizer", zh: "组织者" },
        value: { en: "XYZ Workshop @ CVPR 2026", zh: "CVPR 2026 XYZ Workshop" } }
    ]
  },


  /* ---------------------------------------------------------------------- *
   *  11. 其他（兴趣爱好、杂项。不需要就把 paragraphs 清空成 []）
   * ---------------------------------------------------------------------- */
  misc: {
    label: { en: "Miscellaneous", zh: "其他" },
    paragraphs: [
      { en: "Outside of research I enjoy ... (delete this whole section if you don't want it).",
        zh: "研究之外，我喜欢……（不想要这块就把它删掉）。" }
    ]
  },


  /* ---------------------------------------------------------------------- *
   *  12. 页脚
   * ---------------------------------------------------------------------- */
  footer: {
    text: { en: "Last updated: September 2026.", zh: "最后更新：2026 年 9 月。" },
    showCredit: true      // 显示 "Built with ... hosted on GitHub Pages"，不想要改 false
  }

};
