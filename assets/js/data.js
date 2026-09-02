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
    name: { en: "Lianxiang Cui", zh: "崔廉相" },

    title: { en: "Project Researcher (Postdoc)", zh: "特任研究员（博士后）" },

    affiliation: [
      { en: "International Research Center for Neurointelligence (IRCN)",
        zh: "国际神经智能研究中心（IRCN）" },
      { en: "The University of Tokyo", zh: "东京大学" }
      // ★TODO 如果想写导师/课题组，在这里加一行，例如：
      // { en: "Aihara Laboratory", zh: "合原实验室" }
    ],

    photo: "assets/img/avatar.jpg",

    links: [
      { icon: "mail",     label: "Email",          url: "mailto:lxcui@g.ecc.u-tokyo.ac.jp" },
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
    /* 作者串里的标记（写在名字后面即可，会自动出现对应脚注；没用到的脚注不显示）
         *  通讯作者      例：Yi-Mu Du*, Chang-Pu Sun*
         †  同等贡献      例：**Lianxiang Cui**†, Co-First Author†
       自己的名字用 **两个星号** 包住加粗，和上面两个标记可以叠加，
       例如你既是共同一作又是通讯：**Lianxiang Cui**†*                        */
    notes: {
      corresponding: { en: "* Corresponding author.",          zh: "* 通讯作者。" },
      equal:         { en: "† Equal contribution.",            zh: "† 同等贡献。" }
    },
    groupByYear: true,

    /* slug     = 详情页地址 paper.html?id=<slug>，改了会让旧链接失效，尽量别动
       abstract = 详情页显示的摘要（英文；想要中文写成 { en:..., zh:... } 也行）
       bibtex   = 详情页的引用块，用 String.raw`` 包住，反斜杠不会被转义    */
    items: [

      {
        slug: "optimal-memory-encoding",
        title: "Optimal Memory Encoding Through Fluctuation-Response Structure",
        authors: "**Lianxiang Cui***, Kohei Nakajima, Kazuyuki Aihara",
        venue: { en: "arXiv preprint arXiv:2603.21666", zh: "arXiv 预印本 arXiv:2603.21666" },
        year: 2026,
        badges: [{ en: "Preprint", zh: "预印本" }],
        tldr: { en: "Optimal input encoding in physical reservoir computing is a geometric problem set by the system's fluctuation–response structure.",
                zh: "物理储备池计算中的最优输入编码是一个几何问题，由系统的涨落—响应结构决定。" },
        abstract: "Physical reservoir computing exploits the intrinsic dynamics of physical systems for information processing, while keeping the internal dynamics fixed and training only linear readouts; yet the role of input encoding remains poorly understood. We show that optimal input encoding is a geometric problem governed by the system's fluctuation-response structure. By measuring steady-state fluctuations and linear response, we derive an analytical criterion for the input direction that maximizes task-specific linear memory under a fixed power constraint, termed Response-based Optimal Memory Encoding (ROME). Backpropagation-based encoder optimization is shown to be equivalent to ROME, revealing a trade-off between task-dependent feature mixing and intrinsic noise. We apply ROME to various reservoir platforms, including spin-wave waveguides and spiking neural networks, demonstrating effective encoder design across physical and neuromorphic reservoirs, even in non-differentiable systems.",
        links: [
          { label: "arXiv", url: "https://arxiv.org/abs/2603.21666" },
          { label: "PDF", url: "https://arxiv.org/pdf/2603.21666" }
        ],
        bibtex: String.raw`@article{cui2026optimal,
  title   = {Optimal Memory Encoding Through Fluctuation-Response Structure},
  author  = {Cui, Lianxiang and Nakajima, Kohei and Aihara, Kazuyuki},
  journal = {arXiv preprint arXiv:2603.21666},
  year    = {2026}
}`
      },

      {
        slug: "capacity-time-tradeoff",
        title: "Capacity-Time Trade-off in Highly Reliable Quantum Memory",
        authors: "Miao-Miao Yi, **Lianxiang Cui**, Yi-Mu Du*, Chang-Pu Sun*",
        venue: "Physical Review A 113 (6), 062613, 2026",
        year: 2026,
        badges: [],
        tldr: { en: "An EIT storage model with both coupling and detuning disorder, and what it implies for reliable quantum memory.",
                zh: "同时考虑耦合无序与失谐无序的电磁诱导透明存储模型，及其对可靠量子存储的启示。" },
        abstract: "Reliable quantum storage in practice relies on precise calibration of key parameters, notably the global detuning, while inevitably being subject to the combined influence of multiple disorder sources. In this work, a comprehensive model for an Electromagnetically induced transparency (EIT) protocol is considered, in which coupling disorder and detuning disorder are incorporated simultaneously. After quantitatively analyzing the control dynamics, a highly precise phase-detuning relation to improve calibration accuracy is obtained. Building on this result, a Berry-phase-based control strategy is proposed to mitigate the degradation caused by the global detuning. We further reveal that there exists a joint effect simultaneously induced by different disorder sources, which can substantially reshape the decoherence. Finally, an effective notion of storage capacity is introduced and a general time-capacity relation is obtained, providing guidance for subsequent experimental optimization and device design.",
        links: [
          { label: { en: "Journal", zh: "期刊页" }, url: "https://link.aps.org/doi/10.1103/3337-c42d" },
          { label: "arXiv", url: "https://arxiv.org/abs/2512.24245" }
        ],
        bibtex: String.raw`@article{yi2026capacity,
  title     = {Capacity-time trade-off in highly reliable quantum memory},
  author    = {Yi, Miao-Miao and Cui, Lian-Xiang and Du, Yi-Mu and Sun, Chang-Pu},
  journal   = {Physical Review A},
  volume    = {113},
  number    = {6},
  pages     = {062613},
  year      = {2026},
  publisher = {American Physical Society},
  doi       = {10.1103/3337-c42d}
}`
      },

      {
        slug: "quantum-reliability-sensing",
        title: "On Quantum Reliability Characterizing Systematic Errors in Quantum Sensing",
        authors: "**Lianxiang Cui**, Yi-Mu Du*, Chang-Pu Sun*",
        venue: "Journal of Reliability Science and Engineering 1 (1), 015004, 2025",
        year: 2025,
        badges: [],
        tldr: { en: "Evaluating a quantum sensor's performance from apparent data alone, without access to the true value.",
                zh: "在无法获知真值的情况下，仅凭表观数据评估量子传感器的性能。" },
        abstract: "Quantum sensing utilize quantum effects, such as entanglement and coherence, to measure physical signals. The performance of a sensing process is characterized by error which requires comparison to a true value. However, in practice, such a true value might be inaccessible. In this study, we utilize quantum reliability as a metric to evaluate quantum sensor's performance based solely on the apparatus itself, without any prior knowledge of true value. We derive a general relationship among reliability, sensitivity, and systematic error, and demonstrate this relationship using a typical quantum sensing process. That is to measure magnetic fields (as a signal) by a spin-$1/2$ particle and using the Stern-Gerlach apparatus to read out the signal information. Our findings illustrate the application of quantum reliability in quantum sensing, opening new perspectives for reliability analysis in quantum systems.",
        links: [
          { label: { en: "Journal", zh: "期刊页" }, url: "https://iopscience.iop.org/article/10.1088/3050-2454/ada8ac" },
          { label: "arXiv", url: "https://arxiv.org/abs/2410.20759" }
        ],
        bibtex: String.raw`@article{cui2025quantum,
  title   = {On quantum reliability characterizing systematic errors in quantum sensing},
  author  = {Cui, Lian-Xiang and Du, Yi-Mu and Sun, Chang-Pu},
  journal = {Journal of Reliability Science and Engineering},
  volume  = {1},
  number  = {1},
  pages   = {015004},
  year    = {2025},
  doi     = {10.1088/3050-2454/ada8ac}
}`
      },

      {
        slug: "quantum-vicsek",
        // 注意：arXiv 最新版标题已改为 "Quantum Analog of..."，Google Scholar 上还是旧的 "Quantum Vicsek Model"
        title: "Quantum Analog of Vicsek Model for Active Matter",
        authors: "Hong Yuan, **Lianxiang Cui**, Letian Chen, Chang-Pu Sun*",
        venue: { en: "arXiv preprint arXiv:2407.09860", zh: "arXiv 预印本 arXiv:2407.09860" },
        year: 2024,
        badges: [{ en: "Preprint", zh: "预印本" }],
        tldr: { en: "An overdamped spin-1/2 ensemble whose spontaneous magnetization produces flocking; reduces to Vicsek in the classical limit.",
                zh: "过阻尼自旋 1/2 系综的自发磁化诱导集群有序相，经典极限下退化为 Vicsek 模型。" },
        abstract: "We propose a quantum model consisting of an ensemble of overdamped spin$-1/2$ particles with ferromagnetic couplings, driven by a radially homogeneous magnetic field. The spontaneous magnetization of the spin components breaks the $SO(3)$ (or $SO(2)$) symmetry, inducing an ordered phase of flocking. Our model converges to the Vicsek model in the classical limit and corresponds to the Toner-Tu model in the continuous limit. Our investigation not only elucidates the intrinsic connection between these two models, but also introduces new opportunities for exploring the mechanisms underlying flocking order and correlations at the quantum level, which maybe pave the way for a new field of research -- the quantum active matter.",
        links: [
          { label: "arXiv", url: "https://arxiv.org/abs/2407.09860" },
          { label: "PDF", url: "https://arxiv.org/pdf/2407.09860" }
        ],
        bibtex: String.raw`@article{yuan2024quantum,
  title   = {Quantum Analog of Vicsek Model for Active Matter},
  author  = {Yuan, Hong and Cui, Lian-Xiang and Chen, Letian and Sun, Chang-Pu},
  journal = {arXiv preprint arXiv:2407.09860},
  year    = {2024}
}`
      },

      {
        slug: "reliability-classical-to-quantum",
        title: { en: "The Scientific Research of Reliability: from Classical to Quantum",
                 zh: "可靠性的科学探索：从经典到量子" },
        authors: "Yi-Mu Du, **Lianxiang Cui**, Xue-Fei Guan, Chang-Pu Sun*",
        venue: { en: "Physics (Wuli) 53 (3), 147–156, 2024", zh: "《物理》53 (3), 147–156, 2024" },
        year: 2024,
        badges: [{ en: "Review", zh: "综述" }],
        tldr: null,
        abstract: { en: "As a measure of a system's ability to function stably, reliability is very important for engineering and technology. In recent years, with the interconnection of physics, information theory and statistics, the research of reliability is gradually developing into a new science. Meanwhile, with the development of quantum technology, quantum devices based on coherence will be greatly embedded in traditional equipment and systems. This not only brings both challenges and opportunities for the research of reliability methodology, but also links reliability engineering with quantum physics and stimulates innovation in the interdisciplinary fields. The first part of this article describes the crossover from reliability engineering to science. In the second part, the basic concepts and logic of quantum reliability are interpreted from a reliability engineering perspective, emphasizing that the consistent quantum theory is a natural language for the statistics of the lifetime of quantum devices. Finally, in conjunction with the primary challenge confronting current cutting-edge quantum technologies, i.e. decoherence, we look forward to the potential applications of reliability engineering in quantum technology.",
                    zh: "作为设备稳定服役能力的一种衡量，可靠性对工程技术发展和创新十分重要。基于物理、信息论和统计方法的耦合，可靠性研究正逐步发展并有望成为一门新的科学。同时随着量子技术的发展，量子相干器件及设备将会被大量地植入到传统装备系统中。这不仅给可靠性自身的研究带来新的机遇和挑战，也会使量子物理和可靠性研究交叉起来，导致交叉领域思想上的原始创新。文章首先介绍可靠性研究从工程向科学迈进的历程，然后从可靠性工程需求的视角介绍量子可靠性的基本概念和逻辑，强调量子自洽历史对寿命统计的内在描述，最后结合目前量子技术所面临的退相干挑战，展望可靠性工程对量子技术的潜在应用。" },
        links: [
          { label: { en: "Journal", zh: "期刊页" }, url: "https://wuli.iphy.ac.cn/article/doi/10.7693/wl20240301" },
          { label: "PDF", url: "assets/files/Du-Wuli2024-reliability.pdf" }
        ],
        bibtex: String.raw`@article{du2024scientific,
  title   = {The scientific research of reliability: from classical to quantum},
  author  = {Du, Yi-Mu and Cui, Lian-Xiang and Guan, Xue-Fei and Sun, Chang-Pu},
  journal = {Physics},
  volume  = {53},
  number  = {3},
  pages   = {147--156},
  year    = {2024},
  doi     = {10.7693/wl20240301}
}`
      },

      {
        slug: "esrel-2024-quantum-networks",
        title: "Quantum Reliability and Its Application in Quantum Networks",
        authors: "**Lianxiang Cui**",
        venue: { en: "ESREL 2024, Collection of Extended Abstracts, 155–156",
                 zh: "ESREL 2024 扩展摘要集, 155–156" },
        year: 2024,
        badges: [{ en: "Extended Abstract", zh: "扩展摘要" }],
        tldr: { en: "A reliability-assessment model of a quantum network: EPR-pair channels with entanglement purification as the redundancy mechanism.",
                zh: "量子网络的可靠性评估模型：以纠缠纯化作为冗余机制的 EPR 对信道。" },
        // 这是扩展摘要，本身没有单独的 Abstract 段。下面用的是原文结尾的总结段（你自己写的），
        // 想换成投稿时的摘要直接替换即可。
        abstract: "Illustrated by the quantum network, we show how quantum reliability theory can analyze the reliability loss governed by quantum dynamics instead of classical stochastic process. Quantum reliability establishing a solid groundwork for analyzing the reliability of quantum devices. In future quantum engineering applications, quantum reliability will serve as a vital measure, enabling the evaluation and optimization of quantum devices' design. As this captivating journey unfolds, the alliance between quantum reliability and cutting-edge quantum technologies will shape a future of unparalleled reliability and innovation.",
        links: [
          { label: "PDF", url: "assets/files/Cui-ESREL2024-quantum-reliability.pdf" }
        ],
        bibtex: String.raw`@inproceedings{cui2024quantum,
  title     = {Quantum Reliability and Its Application in Quantum Networks},
  author    = {Cui, Lian-Xiang},
  booktitle = {Advances in Reliability, Safety and Security: ESREL 2024 Collection of Extended Abstracts},
  pages     = {155--156},
  year      = {2024}
}`
      },

      {
        slug: "quantum-reliability",
        title: "Quantum Reliability",
        authors: "**Lianxiang Cui**, Yi-Mu Du*, Chang-Pu Sun*",
        venue: "Physical Review Letters 131 (16), 160203, 2023",
        year: 2023,
        badges: [],
        tldr: { en: "Introduces a metric for quantum reliability and its loss, for assessing increasingly complex quantum devices.",
                zh: "提出量子可靠性及其损失的度量，用于评估日益复杂的量子器件。" },
        abstract: "Quantum technology has led to increasingly sophisticated and complex quantum devices. Assessing their reliability (quantum reliability) is an important issue. Although reliability theory for classical devices has been well developed in industry and technology, a suitable metric on quantum reliability and its loss has not been systematically investigated. Since reliability-loss depends on the process, quantum fidelity does not always fully depict it. This study provides a metric of quantum reliability by shifting the focus from state-distinguishing to trajectory-distinguishing. In contrast to the conventional notion of classical reliability, which is evaluated using probabilistic measurements of binary logical variables, quantum reliability is grounded in the quantum probability amplitude or wave function. This research provides a universal framework for reliability theory encompassing both classical and quantum devices. It offers a new perspective on quantum engineering by elucidating how intensely the real quantum process a device undergoes influences its performance.",
        links: [
          { label: { en: "Journal", zh: "期刊页" }, url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.131.160203" },
          { label: "arXiv", url: "https://arxiv.org/abs/2305.08461" }
        ],
        bibtex: String.raw`@article{cui2023quantum,
  title     = {Quantum Reliability},
  author    = {Cui, Lian-Xiang and Du, Yi-Mu and Sun, Chang-Pu},
  journal   = {Physical Review Letters},
  volume    = {131},
  number    = {16},
  pages     = {160203},
  year      = {2023},
  publisher = {American Physical Society},
  doi       = {10.1103/PhysRevLett.131.160203}
}`
      },

      {
        slug: "system-reliability-time-varying",
        title: "On System Reliability for Time-Varying Structure",
        authors: "**Lianxiang Cui**, Yi-Mu Du*, Chang-Pu Sun*",
        venue: "Reliability Engineering & System Safety 234, 109146, 2023",
        year: 2023,
        badges: [],
        tldr: { en: "Aging of multi-state systems when the structure function itself varies with time.",
                zh: "当结构函数本身随时间变化时，多状态系统的老化行为。" },
        abstract: "In reliability theory, the aging of a multi-state system is dominated by both the components and the corresponding structure functions. In previous studies, structures are usually assumed to be static, and thus the time-independent structure functions are utilized. However, due to the complex nature of aging, the structure could also vary with time, which may lead to unsatisfactory assessment reliability with the static structure-based analysis. The current investigation provides a universal approach to assessing the reliability of complex systems with time-varying structures. An open-system model is introduced to broaden the logic method of the system reliability. The analysis of open-system model implies that structure functions are probabilistically described by the time-varying structure distributions, which are the fine graining of the conditional probabilistic tables (CPTs) of the Bayesian networks. The aging of components and the time-varying structures are integrated into a probabilistic graphical model together, which is put forth to assess the time-varying reliability of complex systems. A general algorithm based on expectation–maximization (EM) for various dynamic processes for components and system structures is obtained. Two specific processes, e.g., Markov and Weibull, are studied in detail. Three examples are presented to illustrate the proposed approach and give a deeper understanding of time-varying structures.",
        links: [
          { label: { en: "Journal", zh: "期刊页" }, url: "https://www.sciencedirect.com/science/article/pii/S0951832023000613" }
        ],
        bibtex: String.raw`@article{cui2023system,
  title     = {On system reliability for time-varying structure},
  author    = {Cui, Lian-Xiang and Du, Yi-Mu and Sun, Chang-Pu},
  journal   = {Reliability Engineering \& System Safety},
  volume    = {234},
  pages     = {109146},
  year      = {2023},
  publisher = {Elsevier},
  doi       = {10.1016/j.ress.2023.109146}
}`
      },

      {
        slug: "bell-inequality-nobel-2022",
        title: { en: "Quantum Violation of Bell's Inequality and Its Experimental Test — on the Nobel Prize in Physics 2022",
                 zh: "贝尔不等式的量子违背及其实验检验——兼议2022年诺贝尔物理学奖" },
        authors: "**Lianxiang Cui**, Kang Xu, Peng Zhang, Chang-Pu Sun*",
        venue: { en: "Physics (Wuli) 52 (1), 1–17, 2023", zh: "《物理》52 (1), 1–17, 2023" },
        year: 2023,
        badges: [{ en: "Invited Article", zh: "特约专稿" }],
        tldr: null,
        abstract: { en: "The Nobel Prize in Physics 2022 was awarded to Alain Aspect, John F. Clauser and Anton Zeilinger, for experiments with entangled photons, establishing the violation of Bell inequalities and pioneering quantum information science. Bell's inequality plays an indispensable role in the foundations of quantum mechanics and quantum information; its violation directly reveals the nonlocal nature of quantum mechanics.",
                    zh: "2022年诺贝尔物理学奖授予法国、美国和奥地利的三位科学家阿兰·阿斯佩、约翰·弗朗西斯·克劳泽和安东·塞林格，以表彰他们利用纠缠光子实验检验贝尔不等式以及在开拓量子信息科学方面做出的卓越贡献。贝尔不等式在量子力学基本问题和量子信息研究中都有着不可或缺的地位，它的违背直接揭示了量子力学的基本特征——量子非定域性。文章在讲清楚基本科学概念的基础上，简要介绍了贝尔不等式理论的建立及验证其违背的实验研究的科学历程。为了解决EPR佯谬，基于玻姆的定域隐变量理论，约翰·贝尔提出了关于纠缠态上的关联测量满足的基本不等式——贝尔不等式。他还发现，量子力学关于关联的计算结果违背贝尔不等式，可以在类空距离上展现出“鬼魅”的长程量子关联。这种长程关联看似有超光速的“超距作用”，但这只是人们明显或潜在地使用了“波包塌缩假设”。EPR文章明显地采用这个假设推断远方客体共存的物理实在要素，由此对量子力学完备性提出质疑。文章评述了阿斯佩、克劳泽和塞林格荣获诺贝尔物理学奖的关于贝尔不等式违背的判定性实验，介绍了华人物理学家在纠缠态和贝尔不等式研究方面的基础性贡献，包括早年吴健雄利用正负电子湮灭产生EPR光子的先驱性实验，李政道和杨振宁关于产生两个中性K介子K⁰—K̄⁰形成EPR态的建议，史砚华、欧泽宇、彭堃墀等利用非线性光学晶体，包括陈创天等人发现的非线性光学晶体，产生纠缠光子对的原创性工作。" },
        links: [
          { label: { en: "Journal", zh: "期刊页" }, url: "https://wuli.iphy.ac.cn/article/doi/10.7693/wl20230101" },
          { label: "PDF", url: "assets/files/Cui-Wuli2023-bell-inequality.pdf" }
        ],
        bibtex: String.raw`@article{cui2023bell,
  title   = {Quantum violation of Bell's inequality and its experimental test---on the Nobel Prize in Physics 2022},
  author  = {Cui, Lian-Xiang and Xu, Kang and Zhang, Peng and Sun, Chang-Pu},
  journal = {Physics},
  volume  = {52},
  number  = {1},
  pages   = {1--17},
  year    = {2023},
  doi     = {10.7693/wl20230101}
}`
      },

      {
        slug: "blockchain-time-bank",
        title: "Construction of Elderly Mutual Aid Time Bank Based on Blockchain",
        authors: "**Lianxiang Cui**, Kehong Yuan, Xiaoyu Zhao, Larry Y. D. Mou",
        venue: "IEEE International Conference on Mobile Data Management (MDM), 462–466, 2019",
        year: 2019,
        badges: [],
        tldr: null,
        abstract: "With the increase of the aging population, the old-age care industry faces new challenges. Mutual support for the elderly as a new model of old-age care has attracted much attention. Although Time Banks have provided a mutual assistance pension solution, still, there are some problems. This paper combines the blockchain with the time bank to build a blockchain time bank, and solves the problems faced by the current time banks. At the same time, the article innovates the mutual help pension model and broadens the user base and participating institutions, which makes the pension system more complete and rich.",
        links: [
          { label: "IEEE Xplore", url: "https://ieeexplore.ieee.org/document/8788806" }
        ],
        bibtex: String.raw`@inproceedings{cui2019construction,
  title        = {Construction of elderly mutual aid time bank based on blockchain},
  author       = {Cui, Lianxiang and Yuan, Kehong and Zhao, Xiaoyu and Mou, Larry Y. D.},
  booktitle    = {2019 20th IEEE International Conference on Mobile Data Management (MDM)},
  pages        = {462--466},
  year         = {2019},
  organization = {IEEE},
  doi          = {10.1109/MDM.2019.000-1}
}`
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
    navLabel: { en: "Awards", zh: "获奖" },   // 导航栏用短的，正文标题仍用 label
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
