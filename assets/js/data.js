/* ============================================================================
 *  个人学术主页 — 内容数据文件
 *  ---------------------------------------------------------------------------
 *  内容已根据你的 Google Scholar 主页填好。带 ★TODO 的地方是 Scholar 上没有的
 *  信息，需要你补充；把 url 设成 "#" 的链接不会显示，填上真实地址就会出现。
 *
 *  【双语写法】{ en: "English", zh: "中文" }；中英一致的直接写字符串。
 *  【删除模块】把 items 清空成 []，整个模块自动隐藏。
 * ========================================================================== */

const SITE = {

  /* ---------------------------------------------------------------------- *
   *  1. 基本信息
   * ---------------------------------------------------------------------- */
  profile: {
    name: { en: "Lian-Xiang Cui", zh: "崔廉相" },

    title: { en: "Project Researcher (Postdoc)", zh: "特任研究员（博士后）" },

    affiliation: [
      { en: "International Research Center for Neurointelligence (IRCN)",
        zh: "国际神经智能研究中心（IRCN）" },
      { en: "The University of Tokyo", zh: "东京大学" }
      // ★TODO 如果想写导师/课题组，在这里加一行，例如：
      // { en: "Aihara Laboratory", zh: "合原实验室" }
    ],

    // ★TODO 把你的照片放进 assets/img/（Scholar 上那张就很好），然后改这里的文件名
    photo: "assets/img/avatar.svg",

    links: [
      // ★TODO 填上你的邮箱（Scholar 显示认证域名是 g.ecc.u-tokyo.ac.jp）
      { icon: "mail",     label: "Email",          url: "#" },
      { icon: "scholar",  label: "Google Scholar", url: "https://scholar.google.com/citations?user=N9KJH88AAAAJ" },
      { icon: "github",   label: "GitHub",         url: "https://github.com/MagicNoodleee" },
      // 下面几个填上真实地址就会自动显示，留 "#" 则隐藏
      { icon: "orcid",    label: "ORCID",          url: "#" },
      { icon: "cv",       label: "CV",             url: "#" },   // PDF 放 assets/files/cv.pdf
      { icon: "x",        label: "X",              url: "#" },
      { icon: "linkedin", label: "LinkedIn",       url: "#" }
    ]
  },


  /* ---------------------------------------------------------------------- *
   *  2. 模块顺序
   * ---------------------------------------------------------------------- */
  order: ["about", "news", "publications", "education", "experience",
          "awards", "teaching", "service"],


  /* ---------------------------------------------------------------------- *
   *  3. 关于
   * ---------------------------------------------------------------------- */
  about: {
    label: { en: "About", zh: "关于" },

    interests: [
      { en: "Quantum Reliability",        zh: "量子可靠性" },
      { en: "Complex Systems",            zh: "复杂系统" },
      { en: "Quantum Information",        zh: "量子信息" },
      { en: "Physical Reservoir Computing", zh: "物理储备池计算" }
    ],

    // ★TODO 这段是我根据你论文摘要写的，请按自己的口径修改
    bio: [
      {
        en: "I am a postdoctoral researcher at the <b>International Research Center for Neurointelligence (IRCN)</b>, The University of Tokyo. My work sits at the interface of quantum physics, reliability theory, and complex systems. I introduced <b>quantum reliability</b> as a metric for how coherent devices degrade, and used it to characterize systematic errors in quantum sensing and the capacity–time trade-off in quantum memory.",
        zh: "我目前在<b>东京大学国际神经智能研究中心（IRCN）</b>做博士后研究。我的工作处在量子物理、可靠性理论与复杂系统的交叉地带：提出用<b>量子可靠性</b>刻画相干器件的退化过程，并以此分析量子传感中的系统误差、以及量子存储中的容量—时间权衡。"
      },
      {
        en: "More recently I have been studying how physical systems encode and retain information — showing that optimal input encoding in physical reservoir computing is a geometric problem governed by the system's fluctuation–response structure.",
        zh: "近期我关注物理系统如何编码与保持信息，指出物理储备池计算中的最优输入编码本质上是一个几何问题，由系统的涨落—响应结构所决定。"
      }
    ]
  },


  /* ---------------------------------------------------------------------- *
   *  4. 动态（下面几条是按你论文的实际发表时间生成的）
   * ---------------------------------------------------------------------- */
  news: {
    label: { en: "News", zh: "动态" },
    max: 4,
    items: [
      { date: "2026-06",
        text: { en: "Our paper on the capacity–time trade-off in highly reliable quantum memory is published in <b>Physical Review A</b>.",
                zh: "关于高可靠量子存储中容量—时间权衡的论文发表于 <b>Physical Review A</b>。" } },
      { date: "2026-03",
        text: { en: "New preprint: <i>Optimal Memory Encoding Through Fluctuation-Response Structure</i> is on arXiv.",
                zh: "新预印本 <i>Optimal Memory Encoding Through Fluctuation-Response Structure</i> 已上传 arXiv。" } },
      { date: "2026-03",
        text: { en: "Received the <b>Excellent Poster Award</b> at the Workshop of the Mechanism on Brain and Mind (JNNS).",
                zh: "在「脑与心智的机制」研讨会（日本神经网络学会）获<b>优秀海报奖</b>。" } },
      { date: "2025-01",
        text: { en: "Paper on quantum reliability and systematic errors in quantum sensing published in <b>Journal of Reliability Science and Engineering</b>.",
                zh: "关于量子传感中系统误差的论文发表于 <b>Journal of Reliability Science and Engineering</b>。" } },
      { date: "2024-06",
        text: { en: "Presented <i>Quantum Reliability and Its Application in Quantum Networks</i> at <b>ESREL 2024</b>.",
                zh: "在 <b>ESREL 2024</b> 报告 <i>Quantum Reliability and Its Application in Quantum Networks</i>。" } },
      { date: "2023-10",
        text: { en: "<i>Quantum Reliability</i> is published in <b>Physical Review Letters</b>.",
                zh: "<i>Quantum Reliability</i> 发表于 <b>Physical Review Letters</b>。" } }
    ]
  },


  /* ---------------------------------------------------------------------- *
   *  5. 论文发表（10 篇，取自你的 Google Scholar，链接均已核对）
   * ---------------------------------------------------------------------- */
  publications: {
    label: { en: "Publications", zh: "论文发表" },
    note: { en: "", zh: "" },
    groupByYear: true,
    items: [

      {
        title: "Optimal Memory Encoding Through Fluctuation-Response Structure",
        authors: "**Lianxiang Cui**, Kohei Nakajima, Kazuyuki Aihara",
        venue: { en: "arXiv preprint arXiv:2603.21666", zh: "arXiv 预印本 arXiv:2603.21666" },
        year: 2026,
        badges: ["Preprint"],
        tldr: { en: "Optimal input encoding in physical reservoir computing is a geometric problem set by the system's fluctuation–response structure.",
                zh: "物理储备池计算中的最优输入编码是一个几何问题，由系统的涨落—响应结构决定。" },
        links: [
          { label: "arXiv", url: "https://arxiv.org/abs/2603.21666" }
        ]
      },

      {
        title: "Capacity-Time Trade-off in Highly Reliable Quantum Memory",
        authors: "Miao-Miao Yi, **Lian-Xiang Cui**, Yi-Mu Du, Chang-Pu Sun",
        venue: "Physical Review A 113 (6), 062613, 2026",
        year: 2026,
        badges: [],
        tldr: { en: "An EIT storage model with both coupling and detuning disorder, and what it implies for reliable quantum memory.",
                zh: "同时考虑耦合无序与失谐无序的电磁诱导透明存储模型，及其对可靠量子存储的启示。" },
        links: [
          { label: { en: "Journal", zh: "期刊页" }, url: "https://link.aps.org/doi/10.1103/3337-c42d" }
        ]
      },

      {
        title: "On Quantum Reliability Characterizing Systematic Errors in Quantum Sensing",
        authors: "**Lian-Xiang Cui**, Yi-Mu Du, Chang-Pu Sun",
        venue: "Journal of Reliability Science and Engineering 1 (1), 015004, 2025",
        year: 2025,
        badges: [],
        tldr: { en: "Evaluating a quantum sensor's performance from apparent data alone, without access to the true value.",
                zh: "在无法获知真值的情况下，仅凭表观数据评估量子传感器的性能。" },
        links: [
          { label: { en: "Journal", zh: "期刊页" }, url: "https://iopscience.iop.org/article/10.1088/3050-2454/ada8ac" }
        ]
      },

      {
        title: "Quantum Vicsek Model for Active Matter",
        authors: "Hong Yuan, **Lian-Xiang Cui**, Letian Chen, Chang-Pu Sun",
        venue: { en: "arXiv preprint arXiv:2407.09860", zh: "arXiv 预印本 arXiv:2407.09860" },
        year: 2024,
        badges: ["Preprint"],
        tldr: { en: "An overdamped spin-1/2 ensemble whose spontaneous magnetization produces flocking; reduces to Vicsek in the classical limit.",
                zh: "过阻尼自旋 1/2 系综的自发磁化诱导集群有序相，经典极限下退化为 Vicsek 模型。" },
        links: [
          { label: "arXiv", url: "https://arxiv.org/abs/2407.09860" }
        ]
      },

      {
        // ★TODO 这是中文期刊《物理》的文章，我没能抓到中文原标题，
        //        建议把 zh 换成中文原题
        title: { en: "The Scientific Research of Reliability: from Classical to Quantum",
                 zh: "The Scientific Research of Reliability: from Classical to Quantum" },
        authors: "Yi-Mu Du, **Lian-Xiang Cui**, Xue-Fei Guan, Chang-Pu Sun",
        venue: { en: "Physics (Wuli) 53 (3), 147–156, 2024", zh: "《物理》53 (3), 147–156, 2024" },
        year: 2024,
        badges: [{ en: "Review", zh: "综述" }],
        links: [
          { label: { en: "Journal", zh: "期刊页" }, url: "https://wuli.iphy.ac.cn/article/doi/10.7693/wl20240301" }
        ]
      },

      {
        title: "Quantum Reliability and Its Application in Quantum Networks",
        authors: "**Lian-Xiang Cui**",
        venue: { en: "European Safety and Reliability Conference (ESREL 2024)",
                 zh: "欧洲安全与可靠性会议（ESREL 2024）" },
        year: 2024,
        badges: [{ en: "Conference Talk", zh: "会议报告" }],
        links: []
      },

      {
        title: "Quantum Reliability",
        authors: "**Lian-Xiang Cui**, Yi-Mu Du, Chang-Pu Sun",
        venue: "Physical Review Letters 131 (16), 160203, 2023",
        year: 2023,
        badges: [],
        tldr: { en: "Introduces a metric for quantum reliability and its loss, for assessing increasingly complex quantum devices.",
                zh: "提出量子可靠性及其损失的度量，用于评估日益复杂的量子器件。" },
        links: [
          { label: { en: "Journal", zh: "期刊页" }, url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.131.160203" }
        ]
      },

      {
        title: "On System Reliability for Time-Varying Structure",
        authors: "**Lian-Xiang Cui**, Yi-Mu Du, Chang-Pu Sun",
        venue: "Reliability Engineering & System Safety 234, 109146, 2023",
        year: 2023,
        badges: [],
        tldr: { en: "Aging of multi-state systems when the structure function itself varies with time.",
                zh: "当结构函数本身随时间变化时，多状态系统的老化行为。" },
        links: [
          { label: { en: "Journal", zh: "期刊页" }, url: "https://www.sciencedirect.com/science/article/pii/S0951832023000613" }
        ]
      },

      {
        // ★TODO 同上，中文原标题需要你补
        title: { en: "Quantum Violation of Bell's Inequality and Its Experimental Test — on the Nobel Prize in Physics 2022",
                 zh: "Quantum Violation of Bell's Inequality and Its Experimental Test — on the Nobel Prize in Physics 2022" },
        authors: "**Lian-Xiang Cui**, Kang Xu, Peng Zhang, Chang-Pu Sun",
        venue: { en: "Physics (Wuli) 52 (1), 1–17, 2023", zh: "《物理》52 (1), 1–17, 2023" },
        year: 2023,
        badges: [{ en: "Review", zh: "综述" }],
        links: [
          { label: { en: "Journal", zh: "期刊页" }, url: "https://wuli.iphy.ac.cn/article/doi/10.7693/wl20230101" }
        ]
      },

      {
        title: "Construction of Elderly Mutual Aid Time Bank Based on Blockchain",
        // ★TODO Scholar 上第四作者显示为 "YD Larry"，我没敢猜，请改成正确写法
        authors: "**Lianxiang Cui**, Kehong Yuan, Xiaoyu Zhao, YD Larry",
        venue: "IEEE International Conference on Mobile Data Management (MDM), 462–466, 2019",
        year: 2019,
        badges: [],
        links: [
          { label: "IEEE Xplore", url: "https://ieeexplore.ieee.org/document/8788806" }
        ]
      }

    ]
  },


  /* ---------------------------------------------------------------------- *
   *  6. 教育背景  ★TODO —— Scholar 上没有这些信息，需要你填
   *     填好后把下面的示例取消注释（删掉 // ），这一节就会出现在页面上
   * ---------------------------------------------------------------------- */
  education: {
    label: { en: "Education", zh: "教育背景" },
    items: [
      // {
      //   period: "2021 – 2025",
      //   degree: { en: "Ph.D. in Physics", zh: "物理学 博士" },
      //   org:    { en: "Graduate School of China Academy of Engineering Physics", zh: "中国工程物理研究院研究生院" },
      //   detail: { en: "Advisor: Prof. Chang-Pu Sun", zh: "导师：孙昌璞 教授" }
      // },
      // {
      //   period: "2017 – 2020",
      //   degree: { en: "M.S. in ...", zh: "……硕士" },
      //   org:    { en: "Tsinghua University", zh: "清华大学" },
      //   detail: { en: "", zh: "" }
      // }
    ]
  },


  /* ---------------------------------------------------------------------- *
   *  7. 工作经历  ★TODO
   * ---------------------------------------------------------------------- */
  experience: {
    label: { en: "Experience", zh: "工作经历" },
    items: [
      // {
      //   period: "2025 – Present",
      //   degree: { en: "Postdoctoral Researcher", zh: "博士后研究员" },
      //   org:    { en: "IRCN, The University of Tokyo", zh: "东京大学 IRCN" },
      //   detail: { en: "With Prof. Kazuyuki Aihara and Prof. Kohei Nakajima", zh: "合作导师：合原一幸 教授、中嶋浩平 教授" }
      // }
    ]
  },


  /* ---------------------------------------------------------------------- *
   *  8. 获奖荣誉  ★TODO
   * ---------------------------------------------------------------------- */
  awards: {
    label: { en: "Awards & Honors", zh: "获奖荣誉" },
    items: [
      { year: "2026",
        text: { en: "<b>Excellent Poster Award</b>, Workshop of the Mechanism on Brain and Mind, Japanese Neural Network Society (JNNS)",
                zh: "<b>优秀海报奖</b>，「脑与心智的机制」研讨会，日本神经网络学会（JNNS）" } }
      // 再加就照上面的格式往下写：
      // { year: "2024", text: { en: "Some Award", zh: "某某奖" } }
    ]
  },


  /* ---------------------------------------------------------------------- *
   *  9. 教学  ★TODO
   * ---------------------------------------------------------------------- */
  teaching: {
    label: { en: "Teaching", zh: "教学经历" },
    items: [
      // { period: "2024", degree: { en: "Teaching Assistant", zh: "助教" },
      //   org: { en: "Course name", zh: "课程名" }, detail: { en: "", zh: "" } }
    ]
  },


  /* ---------------------------------------------------------------------- *
   *  10. 学术服务  ★TODO
   * ---------------------------------------------------------------------- */
  service: {
    label: { en: "Academic Service", zh: "学术服务" },
    navLabel: { en: "Service", zh: "服务" },
    items: [
      // { key: { en: "Reviewer", zh: "审稿人" },
      //   value: { en: "Physical Review Letters, Reliability Engineering & System Safety", zh: "……" } }
    ]
  },


  /* ---------------------------------------------------------------------- *
   *  11. 页脚
   * ---------------------------------------------------------------------- */
  footer: {
    text: { en: "Last updated: September 2026.", zh: "最后更新：2026 年 9 月。" },
    showCredit: true
  }

};
