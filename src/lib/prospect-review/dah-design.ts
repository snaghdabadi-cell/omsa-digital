import type { ReviewLang } from "@/components/prospect-review/review-lang";

// Copy for the private DAH Design review (/review/dah-design-4m8k) and its
// plan page. Written for the business owner, not an SEO reader.
//
// Evidence rule: every statement about DAH is limited to what was publicly
// visible on dah-design.com (Home, About Us, Our Services, Projects). No
// rankings, traffic, search volumes, AI results, leads or follower counts.
// DAH's wider web footprint (press, awards, mentions, reviews) was NOT
// researched, so nothing here may say or imply it is missing. If the site
// changes, re-verify the `evidence` lists before sending this link again.

export const DAH_REVIEW_PATH = "/review/dah-design-4m8k";
export const DAH_PLAN_PATH = "/review/dah-design-4m8k/plan";

/** Evidence verification log (dah-design.com, raw HTML). */
export const DAH_EVIDENCE_CHECKS = {
  /** Full review of Home, About Us, Our Services and Projects. */
  siteReview: "2026-10-04",
  /** Pre-deployment recheck of the Projects page: placeholder text still present on 4 of 10 entries. */
  placeholderRecheck: "2026-10-04",
} as const;

/** Lead-source slugs carried into /contact (must match /^[a-z0-9-]{1,60}$/). */
export const DAH_SOURCE = {
  review: "review-dah-design",
  plan: "review-dah-design-plan",
} as const;

export type MapNodeId = "daria" | "projects" | "services" | "dubai" | "sectors" | "external";

/** "present" = visible and already joined up; "connect" = an opportunity to connect or strengthen. */
export const MAP_NODE_STATUS: Record<MapNodeId, "present" | "connect"> = {
  daria: "connect", // named only on About Us
  projects: "connect", // 4 of 10 entries are placeholder text; no project pages
  services: "present", // four services, each explained on Our Services
  dubai: "present", // Marina Plaza address; Dubai projects listed
  sectors: "connect", // four sectors stated, none linked to matching projects
  external: "connect", // future opportunity only — external footprint was not researched
};

export type Package = {
  id: "quick-fix" | "search-foundation" | "search-ai-foundation";
  name: string;
  price: string;
  duration: string;
  includesPrefix?: string;
  items: string[];
  explanation?: string;
};

const en = {
  meta: {
    reviewTitle: "DAH Design — Private Review | OMSA",
    reviewDescription:
      "A short private review prepared by OMSA Digital & AI Studio for DAH Design, Dubai.",
    planTitle: "DAH Design — Recommended Plan | OMSA",
    planDescription:
      "A private first-step proposal prepared by OMSA Digital & AI Studio for DAH Design, Dubai.",
  },
  ui: {
    langLabel: "Language",
    homeLabel: "OMSA Digital & AI Studio — home",
    viewEvidence: "View evidence",
    checkedOn: "Checked on dah-design.com, 4 October 2026",
    openBrief: "Open larger view",
    briefDialogTitle: "DAH Design — visual brief",
    briefDialogHint: "Use Zoom to look closer. Press Esc to close.",
    close: "Close",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    backToReview: "Back to the review",
    date: "October 2026",
    preparedFor: "Prepared for",
    preparedBy: "Prepared by",
    dateLabel: "Date",
  },
  brief: {
    name: "DAH DESIGN",
    haveLabel: "You already have",
    have: [
      "Founder expertise",
      "Dubai projects",
      "A strong visual portfolio",
      "Residential + commercial experience",
    ],
    gap: "But some of that authority is still disconnected online.",
    oppLabel: "The opportunity",
    opp: "Turn your existing projects and expertise into clearer digital authority — so clients, search engines and AI systems can understand what DAH is genuinely strong at.",
    preparedBy: "Prepared by",
  },
  hero: {
    eyebrow: "Private review",
    title: "DAH Design",
    lines: [
      "You already have the expertise.",
      "The opportunity is making more of it discoverable.",
    ],
    support: "A short independent review prepared specifically for DAH Design.",
  },
  have: {
    title: "You already have",
    items: [
      "An identifiable founder with professional authority",
      "Dubai project experience",
      "Luxury residential experience",
      "Residential, retail, F&B and corporate capabilities",
      "A visual project portfolio",
      "A clear public contact path",
    ],
  },
  findings: {
    eyebrow: "What we found",
    title: "Three things worth fixing first",
    items: [
      {
        heading: "Some of your strongest projects are not telling their full story.",
        body: [
          "Several public project entries currently contain incomplete or placeholder descriptions.",
          "That means valuable projects can show the design visually without clearly explaining the location, project type, scope or expertise behind them.",
        ],
        evidence: [
          "4 of the 10 entries on the Projects page show standard placeholder text (“Lorem Ipsum…”) instead of a description:",
          "· Private Penthouse, W Residences\n· Private Villa, Palm Jumeirah (listed twice)\n· Luxury Lingerie Boutique",
          "All projects sit on one page; none has its own page. The location shown for each Dubai project is “Dubai, UAE”.",
        ],
      },
      {
        heading: "Daria's authority could work harder for DAH Design.",
        body: [
          "DAH clearly identifies Daria Veelenturf as Founder & Director.",
          "Her professional identity, expertise and project experience create an opportunity to strengthen the DAH Design brand itself.",
        ],
        evidence: [
          "The About Us page names Daria Veelenturf as Founder and Director, with a master's degree in architecture, over 15 years in interior design, and luxury residential work at Bvlgari Residences, W Residences and Palm Jumeirah.",
          "Her name does not appear on the Home, Our Services or Projects pages, and no project is credited to her.",
        ],
      },
      {
        heading: "Your expertise is broader than the way the website currently organises it.",
        body: [
          "DAH works across residential, F&B, retail and corporate projects.",
          "The website explains the services available, but these areas of expertise could be connected more clearly to relevant projects and Dubai locations.",
        ],
        evidence: [
          "The site names four sectors (residential, food & beverage, retail, corporate) and four services (Design Consultation, Design Project, Site Supervision, Turnkey Project).",
          "No page links a sector to its matching projects, and no food & beverage project currently appears in the portfolio.",
        ],
      },
    ],
    /** Supporting detail only — deliberately not a fourth finding. */
    technical: {
      label: "Additional technical observation",
      text: "The main pages reviewed did not expose meta descriptions or structured business/content data at the time of this review.",
    },
  },
  causal: {
    title: "What's happening today",
    strengths: ["Great projects", "Founder expertise", "Dubai experience"],
    but: "But",
    gap: "Some important connections are missing online.",
    so: "So",
    result:
      "Search engines, AI systems and potential clients receive less context about exactly where DAH Design is strongest.",
  },
  map: {
    eyebrow: "At a glance",
    title: "How DAH's strengths connect today",
    center: "DAH DESIGN",
    nodes: {
      daria: "Daria",
      projects: "Projects",
      services: "Services",
      dubai: "Dubai",
      sectors: "Sectors",
      external: "External Authority Opportunities",
    } satisfies Record<MapNodeId, string>,
    outcomes: ["Search", "AI discovery", "Client enquiries"],
    legend: { present: "Already present", connect: "Connection opportunity" },
    leadsTo: "Together, these feed",
    externalNote:
      "External authority opportunities could include relevant design publications, professional mentions, project features and legitimate client reviews. These are possible future signals; this review did not assess what already exists outside the website.",
  },
  actions: {
    eyebrow: "What we would change",
    title: "Three focused actions",
    items: [
      {
        title: "Complete your best project stories",
        body: "Turn key projects into clear case studies showing location, project type, scope and expertise.",
      },
      {
        title: "Connect Daria's expertise to DAH",
        body: "Make the relationship between founder, expertise, projects and company clearer across the site.",
      },
      {
        title: "Organise expertise around what clients look for",
        body: "Connect residential, villa, penthouse, retail, office and F&B expertise to real projects and relevant Dubai locations where supported.",
      },
    ],
  },
  improve: {
    eyebrow: "What this could improve",
    items: [
      "Clearer expertise",
      "Stronger project authority",
      "Better search discoverability",
      "Stronger brand understanding",
      "Better AI readiness",
      "More qualified project enquiries",
    ],
    note: "These are the areas the work is designed to strengthen. We don't promise specific rankings, traffic or enquiries.",
  },
  cta: {
    text: "We prepared a practical first step specifically for DAH Design.",
    button: "See Your Recommended Plan",
  },
  about: {
    title: "About this review",
    body: [
      "Prepared independently by OMSA Digital & AI Studio from DAH Design's public website, as it appeared on 4 October 2026.",
      "It does not use DAH's analytics, search data or any internal business information, and it makes no claims about DAH's current performance in search or AI tools.",
    ],
  },
  plan: {
    eyebrow: "Your recommended plan",
    title: "A low-risk first step.",
    intro: [
      "You don't need to rebuild everything at once.",
      "We recommend starting with the highest-impact authority gaps we identified in this review.",
    ],
    principle: ["Start small.", "Prove value.", "Expand only if it makes business sense."],
    recommended: "Recommended first step",
    optionalLabel: "Later, if it makes sense",
    durationLabel: "Duration",
    priceLabel: "Price",
    includesLabel: "Includes",
    /** Applies to the recommended first step only. */
    payment: { label: "Payment:", lines: ["50% to start", "50% on completion"] },
    packages: [
      {
        id: "quick-fix",
        name: "DAH Authority Quick Fix",
        price: "AED 650",
        duration: "5–7 working days",
        items: [
          "Improve 2 priority project pages",
          "Strengthen Daria → DAH founder/expertise signals",
          "Fix the most important authority connections identified in the review",
          "Provide the next-step search structure for DAH",
        ],
        explanation:
          "A small first project designed to improve the most obvious authority gaps without committing to a larger SEO engagement.",
      },
      {
        id: "search-foundation",
        name: "Search Foundation",
        price: "AED 1,150",
        duration: "About 2 weeks",
        includesPrefix: "Everything in the first step, plus:",
        items: [
          "Structure priority service/sector opportunities",
          "Improve key on-page search signals",
          "Strengthen internal relationships between projects, expertise and services",
          "Basic structured business/entity improvements",
          "Search opportunity roadmap",
        ],
      },
      {
        id: "search-ai-foundation",
        name: "Search + AI Foundation",
        price: "AED 1,750",
        duration: "3–4 weeks",
        includesPrefix: "Everything in Search Foundation, plus:",
        items: [
          "Expanded project authority structure",
          "Founder/entity optimisation",
          "AI-oriented entity relationships",
          "Content/query opportunity mapping",
          "External authority recommendations",
          "Final Search & AI roadmap",
        ],
      },
    ] satisfies Package[],
    /** Which contact route leads: the contact page (English) or WhatsApp (Arabic). */
    primaryCta: "contact" as "contact" | "whatsapp",
    contact: "Start with the first step",
    /** Shown under the contact link when the page language differs from the contact page's. */
    contactNote: "",
    whatsapp: "Message us on WhatsApp",
    whatsappText:
      "Hello OMSA, we've read the DAH Design review and would like to discuss the first step.",
    download: "Download Your Proposal",
    downloadHint: "Opens your browser's print window — choose “Save as PDF”.",
    noPromise:
      "Prices are in UAE dirhams and apply to this proposal only. We don't promise specific rankings, traffic or enquiries.",
  },
  proposal: {
    docTitle: "DAH Design — Proposal from OMSA Digital & AI Studio",
    label: "Proposal",
    date: "4 October 2026",
    for: "DAH Design, Dubai, UAE",
    attention: "Attention: Daria Veelenturf, Founder & Director",
    summaryTitle: "Review summary",
    summary: [
      "DAH already has a credible founder, Dubai project experience and a strong visual portfolio.",
      "Some of that strength is not yet joined up online: 4 of 10 project entries show placeholder text, Daria's expertise appears only on the About page, and sectors are not linked to matching projects.",
    ],
    stepTitle: "Recommended first step",
    scopeTitle: "Scope",
    optionsTitle: "Optional next steps",
    disclaimer:
      "Based on DAH Design's public website as reviewed on 4 October 2026. No specific rankings, traffic, AI results or enquiries are promised.",
    contactTitle: "OMSA Digital & AI Studio",
  },
};

export type DahCopy = typeof en;

// Arabic: professional, approachable UAE business Arabic — plain words for
// technical ideas, no marketing or search jargon.
// "DAH Design" is written with a no-break space (\u00a0) so the Latin name never splits
// across lines inside right-to-left text (or strands "لـ" at a line end).
const ar: DahCopy = {
  meta: {
    reviewTitle: "DAH\u00a0Design — مراجعة خاصة | OMSA",
    reviewDescription:
      "مراجعة خاصة ومختصرة أعدّتها OMSA Digital & AI Studio لـ\u00a0DAH\u00a0Design في دبي.",
    planTitle: "DAH\u00a0Design — الخطة المقترحة | OMSA",
    planDescription:
      "عرض خاص للخطوة الأولى أعدّته OMSA Digital & AI Studio لـ\u00a0DAH\u00a0Design في دبي.",
  },
  ui: {
    langLabel: "اللغة",
    homeLabel: "OMSA Digital & AI Studio — الصفحة الرئيسية",
    viewEvidence: "عرض التفاصيل",
    checkedOn: "تمّت المراجعة على موقع dah-design.com بتاريخ 4 أكتوبر 2026",
    openBrief: "عرض بحجم أكبر",
    briefDialogTitle: "DAH\u00a0Design — الملخص المصوّر",
    briefDialogHint: "استخدموا زر التكبير لرؤية التفاصيل، واضغطوا Esc للإغلاق.",
    close: "إغلاق",
    zoomIn: "تكبير",
    zoomOut: "تصغير",
    backToReview: "الرجوع إلى المراجعة",
    date: "أكتوبر 2026",
    preparedFor: "أُعدّ لـ",
    preparedBy: "إعداد",
    dateLabel: "التاريخ",
  },
  brief: {
    name: "DAH DESIGN",
    haveLabel: "عندكم بالفعل",
    have: [
      "خبرة واضحة لمؤسِّسة الشركة",
      "مشاريع في دبي",
      "أعمال قوية بصرياً",
      "خبرة في المشاريع السكنية والتجارية",
    ],
    gap: "لكنّ جزءاً من هذه القوة ما زال غير مترابط بشكل واضح على الإنترنت.",
    oppLabel: "الفرصة",
    opp: "نرتّب مشاريعكم وخبرتكم بطريقة أوضح، حتى يفهم العميل ومحركات البحث وأنظمة الذكاء الاصطناعي بسرعة أين تتميّز DAH\u00a0Design فعلاً.",
    preparedBy: "إعداد",
  },
  hero: {
    eyebrow: "مراجعة خاصة",
    title: "DAH\u00a0Design",
    lines: ["الخبرة موجودة بالفعل.", "والفرصة أن نجعلها أوضح وأسهل في الوصول إليها."],
    support: "مراجعة مختصرة ومستقلة أعددناها خصيصاً لـ\u00a0DAH\u00a0Design.",
  },
  have: {
    title: "عندكم بالفعل",
    items: [
      "مؤسِّسة معروفة باسمها ولها حضور مهني",
      "خبرة في مشاريع داخل دبي",
      "خبرة في المشاريع السكنية الراقية",
      "خبرة في المشاريع السكنية والتجارية والمطاعم والمحلات",
      "معرض أعمال واضح",
      "وسيلة مباشرة للتواصل",
    ],
  },
  findings: {
    eyebrow: "ما لاحظناه",
    title: "ثلاث نقاط تستحق أن نبدأ بها",
    items: [
      {
        heading: "بعض أقوى مشاريعكم لا تحكي قصتها كاملة.",
        body: [
          "بعض المشاريع المعروضة على الموقع حالياً وصفها غير مكتمل.",
          "قد يكون المشروع قوياً بصرياً، لكن الموقع لا يوضّح بشكل كافٍ مكان المشروع ونوعه ونطاق العمل والخبرة التي كانت وراءه.",
        ],
        evidence: [
          "4 من أصل 10 مشاريع في صفحة المشاريع يظهر فيها نص تجريبي مؤقت (Lorem Ipsum) بدلاً من وصف المشروع:",
          "· Private Penthouse, W Residences\n· Private Villa, Palm Jumeirah (مكرّر مرتين)\n· Luxury Lingerie Boutique",
          "جميع المشاريع معروضة في صفحة واحدة، ولا توجد صفحة خاصة لأي مشروع. والموقع المذكور لكل مشاريع دبي هو «Dubai, UAE» فقط.",
        ],
      },
      {
        heading: "خبرة داريا يمكن أن تقوّي اسم DAH\u00a0Design أكثر.",
        body: [
          "يوضّح الموقع أن داريا فيلينتورف هي مؤسِّسة الشركة ومديرتها.",
          "ربط خبرتها ومشاريعها بشكل أقوى باسم الشركة يساعد العملاء ومحركات البحث على فهم خبرة DAH\u00a0Design بشكل أوضح.",
        ],
        evidence: [
          "تذكر صفحة «من نحن» داريا فيلينتورف بصفتها المؤسِّسة والمديرة، وتشير إلى حصولها على ماجستير في العمارة، وخبرة تزيد على 15 عاماً في التصميم الداخلي، ومشاريع سكنية راقية في Bvlgari Residences و W Residences ونخلة جميرا.",
          "لا يظهر اسمها في الصفحة الرئيسية ولا في صفحتي الخدمات والمشاريع، ولا يُنسب إليها أي مشروع بالاسم.",
        ],
      },
      {
        heading: "خبرتكم أوسع من الطريقة التي يعرضها بها الموقع حالياً.",
        body: [
          "تعمل DAH\u00a0Design في المشاريع السكنية والمطاعم والمحلات والمكاتب.",
          "يوضّح الموقع الخدمات المتوفرة، لكن يمكن ربط كل مجال بشكل أوضح بالمشاريع والمناطق المرتبطة به داخل دبي.",
        ],
        evidence: [
          "يذكر الموقع أربعة مجالات (السكني، والمطاعم والمقاهي، والمحلات، والمكاتب والشركات) وأربع خدمات (استشارة التصميم، ومشروع التصميم، والإشراف على التنفيذ، والتسليم الكامل).",
          "لا توجد صفحة تربط أي مجال بالمشاريع الخاصة به، ولا يظهر حالياً أي مشروع لمطعم أو مقهى في معرض الأعمال.",
        ],
      },
    ],
    technical: {
      label: "ملاحظة تقنية إضافية",
      text: "الصفحات الرئيسية التي راجعناها لم يظهر فيها وصف مخصص لنتائج البحث أو بيانات منظّمة تساعد محركات البحث على فهم محتوى الموقع بشكل أوضح وقت إجراء هذه المراجعة.",
    },
  },
  causal: {
    title: "ما الذي يحدث حالياً؟",
    strengths: ["مشاريع قوية", "خبرة واضحة للمؤسِّسة", "خبرة في دبي"],
    but: "لكن",
    gap: "بعض الروابط المهمة بين هذه المعلومات غير واضحة على الموقع.",
    so: "والنتيجة",
    result:
      "يحصل العميل ومحركات البحث وأنظمة الذكاء الاصطناعي على معلومات أقل عن المجالات التي تتميّز فيها DAH\u00a0Design فعلاً.",
  },
  map: {
    eyebrow: "نظرة سريعة",
    title: "كيف ترتبط نقاط قوة DAH\u00a0Design حالياً",
    center: "DAH DESIGN",
    nodes: {
      daria: "داريا",
      projects: "المشاريع",
      services: "الخدمات",
      dubai: "دبي",
      sectors: "المجالات",
      external: "فرص تقوية المصداقية خارج الموقع",
    },
    outcomes: ["نتائج البحث", "إجابات الذكاء الاصطناعي", "استفسارات العملاء"],
    legend: { present: "موجود بالفعل", connect: "فرصة للربط والتقوية" },
    leadsTo: "وكلها معاً تصبّ في",
    externalNote:
      "فرص تقوية المصداقية خارج الموقع قد تشمل: الظهور في منصات ومجلات التصميم المناسبة، وإشارات مهنية موثوقة، ونشر المشاريع في مصادر مناسبة، وتقييمات حقيقية من العملاء. هذه فرص محتملة للمستقبل، ولم تشمل هذه المراجعة تقييم ما هو موجود منها حالياً خارج الموقع.",
  },
  actions: {
    eyebrow: "ما الذي سنغيّره",
    title: "ثلاث خطوات واضحة",
    items: [
      {
        title: "نكمّل قصص أهم مشاريعكم",
        body: "نحوّل المشاريع المهمة إلى صفحات واضحة تشرح الموقع ونوع المشروع ونطاق العمل والخبرة المستخدمة.",
      },
      {
        title: "نربط خبرة داريا باسم DAH\u00a0Design بشكل أقوى",
        body: "نوضّح العلاقة بين المؤسِّسة وخبرتها ومشاريعها واسم الشركة في مختلف صفحات الموقع.",
      },
      {
        title: "نرتّب خبرتكم حسب ما يبحث عنه العميل",
        body: "نربط مجالات خبرتكم بالمشاريع الحقيقية والمناطق المناسبة داخل دبي، فقط عندما تكون المعلومة مدعومة فعلاً.",
      },
    ],
  },
  improve: {
    eyebrow: "ما الذي يمكن أن يتحسّن",
    items: [
      "خبرة أوضح للعميل",
      "قوة أكبر للمشاريع على الإنترنت",
      "فرصة أفضل للظهور في نتائج البحث",
      "فهم أوضح لاسم الشركة وتخصصها",
      "جاهزية أفضل للظهور في إجابات الذكاء الاصطناعي",
      "استفسارات أقرب لنوعية المشاريع المناسبة لكم",
    ],
    note: "هذه هي الجوانب التي يركّز عليها العمل، ولا نَعِد بترتيب معيّن في نتائج البحث أو بعدد محدد من الزيارات أو الاستفسارات.",
  },
  cta: {
    text: "جهّزنا لكم خطوة أولى عملية ومناسبة لـ\u00a0DAH\u00a0Design.",
    button: "اطّلعوا على الخطة المقترحة لكم",
  },
  about: {
    title: "عن هذه المراجعة",
    body: [
      "أعدّتها OMSA Digital & AI Studio بشكل مستقل، بالاعتماد على موقع DAH\u00a0Design العام كما كان بتاريخ 4 أكتوبر 2026.",
      "لم نستخدم أي بيانات داخلية أو إحصائيات خاصة بالشركة، ولا نقدّم أي حكم على أداء DAH\u00a0Design الحالي في نتائج البحث أو في أدوات الذكاء الاصطناعي.",
    ],
  },
  plan: {
    eyebrow: "الخطة المقترحة لكم",
    title: "خطوة أولى بسيطة وبتكلفة منخفضة.",
    intro: [
      "لا تحتاجون إلى تغيير كل شيء من البداية.",
      "نقترح أن نبدأ بأهم النقاط التي وجدناها في المراجعة، ثم نقرّر معاً إن كانت هناك حاجة إلى التوسّع.",
    ],
    principle: ["نبدأ بخطوة صغيرة.", "نرى النتيجة.", "ونتوسّع فقط إذا كان ذلك مناسباً لكم."],
    recommended: "الخطوة الأولى المقترحة",
    optionalLabel: "لاحقاً، إذا كان ذلك مناسباً",
    durationLabel: "المدة",
    priceLabel: "السعر",
    includesLabel: "يشمل",
    payment: { label: "الدفع:", lines: ["50٪ عند بدء العمل", "50٪ عند إتمام العمل"] },
    packages: [
      {
        id: "quick-fix",
        name: "ترتيب أهم نقاط الظهور الرقمي لـ\u00a0DAH\u00a0Design",
        price: "650 درهم",
        duration: "من 5 إلى 7 أيام عمل",
        items: [
          "تحسين صفحتين من أهم صفحات المشاريع",
          "ربط خبرة داريا باسم DAH\u00a0Design بشكل أوضح",
          "تحسين أهم الروابط بين الشركة وخبرتها ومشاريعها",
          "تسليم خطة مختصرة للخطوة التالية لتحسين الظهور في نتائج البحث",
        ],
        explanation:
          "مشروع أول صغير نبدأ فيه بأوضح النقاط التي تحتاج إلى تحسين، دون الدخول مباشرة في مشروع كبير أو طويل.",
      },
      {
        id: "search-foundation",
        name: "تأسيس ظهور أقوى في نتائج البحث",
        price: "1,150 درهم",
        duration: "حوالي أسبوعين",
        includesPrefix: "يشمل الخطوة الأولى، بالإضافة إلى:",
        items: [
          "ترتيب أهم الخدمات والمجالات التي تستحق الظهور بشكل أوضح",
          "تحسين أهم عناصر الصفحات لمحركات البحث",
          "ربط المشاريع والخدمات والخبرة داخل الموقع بشكل أفضل",
          "تنظيم معلومات الشركة بطريقة أوضح لمحركات البحث",
          "خطة مختصرة لفرص الظهور القادمة",
        ],
      },
      {
        id: "search-ai-foundation",
        name: "تأسيس الظهور في البحث وإجابات الذكاء الاصطناعي",
        price: "1,750 درهم",
        duration: "من 3 إلى 4 أسابيع",
        includesPrefix: "يشمل الخطة السابقة، بالإضافة إلى:",
        items: [
          "تطوير طريقة عرض المشاريع وربطها بخبرة الشركة",
          "تقوية ارتباط اسم المؤسِّسة باسم الشركة وتخصصها",
          "تنظيم المعلومات بحيث تكون أوضح لأنظمة الذكاء الاصطناعي",
          "تحديد أهم المواضيع والأسئلة التي يبحث عنها العملاء",
          "توصيات لتقوية حضور الشركة خارج موقعها",
          "خطة نهائية لتطوير الظهور في البحث والذكاء الاصطناعي",
        ],
      },
    ],
    primaryCta: "whatsapp",
    contact: "تواصلوا معنا",
    contactNote: "صفحة التواصل متوفرة باللغة الإنجليزية.",
    whatsapp: "تواصلوا معنا على واتساب",
    whatsappText: "مرحباً OMSA، اطّلعنا على مراجعة DAH\u00a0Design ونودّ مناقشة الخطوة الأولى.",
    download: "تحميل العرض الخاص بكم",
    downloadHint: "ستُفتح نافذة الطباعة في المتصفح، ثم اختاروا «حفظ كملف PDF».",
    noPromise:
      "الأسعار بالدرهم الإماراتي وخاصة بهذا العرض فقط، ولا نَعِد بترتيب معيّن في نتائج البحث أو بعدد محدد من الزيارات أو الاستفسارات.",
  },
  proposal: {
    docTitle: "DAH\u00a0Design — عرض من OMSA Digital & AI Studio",
    label: "عرض خاص",
    date: "4 أكتوبر 2026",
    for: "DAH\u00a0Design، دبي، الإمارات",
    attention: "إلى: داريا فيلينتورف، المؤسِّسة والمديرة",
    summaryTitle: "ملخص المراجعة",
    summary: [
      "لدى DAH\u00a0Design مؤسِّسة ذات خبرة واضحة، ومشاريع في دبي، ومعرض أعمال قوي بصرياً.",
      "لكنّ جزءاً من هذه القوة ما زال غير مترابط على الإنترنت: 4 من أصل 10 مشاريع يظهر فيها نص تجريبي مؤقت بدلاً من الوصف، وخبرة داريا تظهر فقط في صفحة «من نحن»، والمجالات غير مربوطة بالمشاريع الخاصة بها.",
    ],
    stepTitle: "الخطوة الأولى المقترحة",
    scopeTitle: "نطاق العمل",
    optionsTitle: "خطوات اختيارية لاحقاً",
    disclaimer:
      "يعتمد هذا العرض على موقع DAH\u00a0Design العام كما راجعناه بتاريخ 4 أكتوبر 2026، ولا نَعِد بترتيب معيّن في نتائج البحث أو بعدد محدد من الزيارات أو الاستفسارات أو بنتائج في أدوات الذكاء الاصطناعي.",
    contactTitle: "OMSA Digital & AI Studio",
  },
};

export const DAH_COPY: Record<ReviewLang, DahCopy> = { en, ar };
