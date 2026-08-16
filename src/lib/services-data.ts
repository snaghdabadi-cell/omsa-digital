// Shared catalog for the Services section.
// Each entry powers /services overview cards, /services/$slug subpages,
// the footer internal-link grid, and the sitemap.

import {
  Globe,
  Search,
  Cpu,
  MapPin,
  Bot,
  Workflow,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

// A single internal/external destination a piece of copy can link to.
// Kept as a small closed union (rather than a raw href) so every link a
// service page renders resolves through the router's typed `<Link>` and can
// be verified against real routes instead of a hand-typed string.
export type ContentLink =
  | { kind: "service"; slug: string }
  | { kind: "tool"; slug: string }
  | { kind: "location"; city: string }
  | { kind: "contact" }
  | { kind: "portfolio" }
  | { kind: "external"; href: string };

// Attaches a ContentLink to one exact substring ("anchor") of a paragraph.
// Scoped per-paragraph (not shared across a whole section) so overlapping
// anchor words (e.g. "SEO" inside "Technical SEO") never collide.
export type AnchorLink = { anchor: string; link: ContentLink };

export type EditorialParagraph = { text: string; link?: AnchorLink };
export type EditorialSubsection = { h3: string; body: string; link?: AnchorLink };

// A long-form H2 block for service pages whose approved copy goes beyond the
// standard problem/solution + benefits + process shape. Optional and unused
// by default — only populated where a service genuinely needs it.
export type EditorialSection = {
  id: string;
  eyebrow?: string;
  h2: string;
  paragraphs?: EditorialParagraph[];
  bullets?: string[];
  afterBullets?: EditorialParagraph[]; // closing paragraphs rendered after the bullet list
  subsections?: EditorialSubsection[];
};

export type ServiceDetail = {
  slug: string;
  name: string;
  short: string;
  icon: LucideIcon;
  category: "Build" | "Visibility" | "Intelligence" | "Growth" | "Insights";
  metaTitle: string;
  metaDescription: string;
  problem: string;
  solution: string;
  benefits: string[];
  process: { step: string; detail: string; link?: AnchorLink }[];
  faqs: { q: string; a: string; link?: AnchorLink }[];
  related: string[]; // slugs
  auditToolAnchor?: string; // optional contextual link label to /tools/seo-audit

  // Optional long-form page content — only set where a page's approved copy
  // needs more than the standard shape above. Every field below is additive
  // and safe to leave undefined for every other service.
  h1?: string; // overrides `name` in the page <h1> only (name still powers breadcrumbs/cards)
  heroBody?: string[]; // replaces the single `short` paragraph in the hero when present
  heroCta?: { primaryLabel: string; secondaryLabel?: string; secondaryLink?: ContentLink };
  sections?: EditorialSection[]; // rendered as a block, in order, after Problem/Solution
  benefitsEyebrow?: string;
  benefitsHeading?: string; // overrides "What you can expect"
  benefitsIntro?: string;
  postBenefitsSection?: EditorialSection; // rendered after the benefits grid
  whoForIntro?: string;
  whoFor?: { title: string; body: string }[];
  preFaqSection?: EditorialSection; // rendered after "Who this is for", before FAQ
  finalCta?: { heading: string; body: string; primaryLabel: string; secondaryLabel: string; secondaryLink: ContentLink };
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "website-design",
    name: "Website Design",
    short: "A digital platform that attracts, educates and converts visitors into customers.",
    icon: Globe,
    category: "Build",
    metaTitle: "Website Design Oman | Professional Web Design | OMSA",
    metaDescription:
      "Professional website design in Oman for businesses that need a fast, responsive and search-ready digital presence. OMSA designs strategic websites for Oman, Muscat and the GCC.",
    problem:
      "A polished homepage is not the same as an effective website. Visitors arrive with questions — what you offer, whether your business is credible, whether your service is relevant to them — and if those answers are difficult to find, visual design alone will not solve the problem.",
    solution:
      "Before deciding how a page should look, we consider what the visitor needs to understand and what the business needs the visitor to do — positioning, page hierarchy, information architecture, search visibility and conversion paths, before visual details are allowed to dominate the project.",
    h1: "Website Design in Oman Built to Turn Attention Into Business",
    heroBody: [
      "Your website should do more than make your business look established. It should make your value clear, build confidence quickly and give potential customers a reason to take the next step.",
      "OMSA Digital & AI Studio designs professional websites for businesses in Oman, Muscat and across the GCC — combining strategy, user experience, responsive design, search-friendly architecture and conversion thinking in one digital experience.",
      "Whether you are launching a new business, replacing an outdated website or strengthening an established brand, we design around a simple question:",
      "What does this website need to accomplish for the business?",
    ],
    heroCta: {
      primaryLabel: "Start Your Website Project",
      secondaryLabel: "Explore Our Work",
      secondaryLink: { kind: "portfolio" },
    },
    sections: [
      {
        id: "reality",
        eyebrow: "Where websites quietly fail",
        h2: "A Website Can Look Good and Still Fail Your Business",
        paragraphs: [
          { text: "A polished homepage is not the same as an effective website." },
          { text: "Visitors arrive with questions. They want to understand what you offer, whether your business is credible, whether your service is relevant to them and what they should do next." },
          { text: "If those answers are difficult to find, visual design alone will not solve the problem." },
        ],
        bullets: [
          "unclear positioning and messaging",
          "confusing navigation",
          "weak mobile experiences",
          "slow or unnecessarily heavy pages",
          "inconsistent visual hierarchy",
          "important services buried inside the site",
          "poor calls to action",
          "pages created without search intent in mind",
          "weak internal linking",
          "content that explains the company but not the customer's problem",
          "English and Arabic experiences that were not planned together",
        ],
      },
      {
        id: "philosophy",
        eyebrow: "Our philosophy",
        h2: "Website Design Where Strategy Comes Before Decoration",
        paragraphs: [
          { text: "OMSA approaches website design as a business system rather than a collection of attractive screens." },
          { text: "Before deciding how a page should look, we consider what the visitor needs to understand and what the business needs the visitor to do." },
          { text: "That means thinking about positioning, page hierarchy, information architecture, search visibility, user journeys and conversion paths before visual details are allowed to dominate the project." },
          { text: "The result is a website designed around purpose." },
          { text: "For a professional services company, that may mean turning expertise into trust." },
          { text: "For a local business in Muscat, it may mean helping nearby customers understand the service and make contact quickly." },
          { text: "For a growing GCC company, it may mean creating a digital foundation capable of supporting multiple services, locations, languages and future campaigns." },
          { text: "For an established company, it may mean replacing an outdated digital presence with one that better reflects the quality of the business behind it." },
        ],
      },
      {
        id: "achieve",
        eyebrow: "What it should do",
        h2: "What Professional Website Design Should Achieve",
        subsections: [
          { h3: "Make Your Business Easy to Understand", body: "Visitors should not have to investigate your website to understand what you do. We structure pages so the core offer, audience and next step become clear quickly." },
          { h3: "Build Trust Before the First Conversation", body: "Your website often shapes a prospect's first serious impression of your company. Consistent design, useful content, logical structure and clear positioning help reduce uncertainty before a customer contacts you." },
          { h3: "Create Better Paths to Conversion", body: "Calls to action should appear because they make sense within the user journey — not because every section needs another button. We design paths that move visitors naturally from discovery to evaluation and action." },
          {
            h3: "Support Organic Search",
            body: "Search visibility should be considered while the website is being structured, not added as an afterthought. Page hierarchy, internal links, headings, metadata and content relationships all influence how easily search engines can understand a site — the same foundation our SEO services build on once a site is live.",
            link: { anchor: "SEO services", link: { kind: "service", slug: "seo" } },
          },
          {
            h3: "Work Across Devices",
            body: "A website has to remain clear and usable across mobile, tablet and desktop experiences. Responsive behaviour is therefore part of the design system rather than a final adjustment, in line with Google's guidance on responsive web design.",
            link: { anchor: "responsive web design", link: { kind: "external", href: "https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing" } },
          },
          { h3: "Create a Foundation That Can Grow", body: "A good website should make future expansion easier. New services, locations, resources, campaigns and integrations should be able to fit into a coherent architecture instead of creating a disconnected collection of pages." },
        ],
      },
      {
        id: "our-services",
        eyebrow: "Our website design services",
        h2: "Our Website Design Services",
        subsections: [
          { h3: "Business Website Design", body: "Professional websites for companies that need a credible, structured digital presence capable of explaining services clearly and generating qualified enquiries." },
          { h3: "Corporate Website Design", body: "Structured digital experiences for organisations with multiple services, audiences, departments or markets where clarity and information architecture matter as much as visual presentation." },
          { h3: "Responsive Website Design", body: "Layouts and interfaces designed to adapt across screen sizes while preserving usability, hierarchy and conversion paths." },
          { h3: "Website Redesign", body: "A strategic redesign for businesses whose existing website no longer reflects their brand, services, customer expectations or growth plans." },
          { h3: "Landing Page Design", body: "Focused pages built around a specific campaign, service or conversion objective, with unnecessary distractions removed from the user journey." },
          {
            h3: "SEO-Friendly Website Architecture",
            body: "Page structures developed with crawlability, semantic relationships, internal linking and search intent in mind — the same discipline behind our Technical SEO work.",
            link: { anchor: "Technical SEO", link: { kind: "service", slug: "technical-seo" } },
          },
          { h3: "Arabic and English Website Design", body: "Bilingual website experiences planned for audiences who may interact with your business in either English or Arabic, with attention to hierarchy, usability and the different requirements of left-to-right and right-to-left interfaces." },
        ],
      },
      {
        id: "oman-gcc",
        eyebrow: "Oman & the GCC",
        h2: "Website Design for Oman — With the Wider GCC in Mind",
        paragraphs: [
          { text: "A website serving customers in Oman needs more than a generic international template with a location name added to the headline." },
          { text: "Businesses operate within a specific commercial and cultural environment. Customer expectations, language, trust signals, service areas and search behaviour can vary by market." },
          { text: "OMSA therefore designs with local relevance in mind while keeping the architecture strong enough to support expansion." },
          {
            text: "For businesses focused on Muscat, this can mean creating clear pathways between services and local intent.",
            link: { anchor: "Muscat", link: { kind: "location", city: "muscat" } },
          },
          { text: "For companies operating across Oman, it can mean structuring the website so additional locations or business areas can be introduced logically." },
          { text: "For organisations expanding into the UAE or wider GCC, it means avoiding a website architecture that has to be rebuilt every time a new market is added." },
        ],
      },
      {
        id: "bilingual",
        eyebrow: "Bilingual by design",
        h2: "English and Arabic Website Design Should Be Planned Together",
        paragraphs: [
          { text: "Adding Arabic after an English website has already been completed can create problems that go far beyond translation." },
          { text: "Navigation changes direction. Text length changes. Layout priorities can shift. Components have to work correctly in right-to-left environments. Calls to action must remain clear. And the language itself needs to sound appropriate to the audience rather than mechanically translated." },
          { text: "For businesses serving Oman and the GCC, bilingual capability should therefore be considered at the architecture and design stage." },
          { text: "OMSA can plan English and Arabic experiences as parts of the same digital system so the website remains coherent across languages." },
        ],
      },
      {
        id: "seo-alignment",
        eyebrow: "SEO alignment",
        h2: "SEO and Website Design Should Not Be Separate Conversations",
        paragraphs: [
          { text: "Many SEO problems begin long before an SEO campaign starts." },
          { text: "They begin when websites are created without a clear page hierarchy, when several services are forced onto one page, when important content is difficult to reach internally, or when design decisions make useful information inaccessible or unnecessarily difficult to discover." },
          { text: "We consider the SEO foundation during the website design process." },
        ],
        bullets: [
          "logical site architecture",
          "meaningful page hierarchy",
          "descriptive headings",
          "crawlable internal navigation",
          "contextual internal linking",
          "appropriate metadata foundations",
          "mobile usability",
          "performance awareness",
          "structured content",
          "search-intent alignment",
        ],
        afterBullets: [
          { text: "This does not mean design should be dictated by search engines." },
          { text: "It means the website should work for people without making it unnecessarily difficult for search engines to understand." },
          {
            text: "Once the architecture above is in place, it becomes the foundation a dedicated SEO programme builds on.",
            link: { anchor: "SEO", link: { kind: "service", slug: "seo" } },
          },
          {
            text: "Where a site is carrying deeper technical issues, Technical SEO work can resolve them.",
            link: { anchor: "Technical SEO", link: { kind: "service", slug: "technical-seo" } },
          },
          {
            text: "If you want a quick read on where your current site stands, our SEO Audit Tool is a useful starting point.",
            link: { anchor: "SEO Audit Tool", link: { kind: "tool", slug: "seo-audit" } },
          },
          {
            text: "For deeper background on how search engines evaluate websites, see Google Search Central.",
            link: { anchor: "Google Search Central", link: { kind: "external", href: "https://developers.google.com/search/docs/fundamentals/get-started-developers" } },
          },
        ],
      },
      {
        id: "performance",
        eyebrow: "Performance",
        h2: "Performance Is Part of the Experience",
        paragraphs: [
          { text: "A visually ambitious website should not become frustrating to use." },
          {
            text: "Images, fonts, scripts, animations and third-party integrations can all affect how quickly a page becomes useful, how stable it feels while loading, and Core Web Vitals.",
            link: { anchor: "Core Web Vitals", link: { kind: "external", href: "https://web.dev/explore/learn-core-web-vitals" } },
          },
          { text: "Performance therefore needs to be considered alongside design. We aim for thoughtful implementation decisions that balance visual quality with usability and technical efficiency rather than adding complexity simply because it looks impressive." },
          {
            text: "When performance requires deeper investigation, our Technical SEO work can identify the elements creating unnecessary friction.",
            link: { anchor: "Technical SEO", link: { kind: "service", slug: "technical-seo" } },
          },
        ],
      },
    ],
    benefits: [
      "website strategy and page planning",
      "information architecture",
      "responsive page design",
      "reusable interface components",
      "service and conversion page structures",
      "mobile experience planning",
      "English and Arabic design considerations where required",
      "SEO-conscious page architecture",
      "metadata implementation",
      "internal linking foundations",
      "technical and performance considerations",
      "contact and conversion pathways",
      "pre-launch quality checks",
    ],
    benefitsEyebrow: "What you receive",
    benefitsHeading: "What You Receive",
    benefitsIntro: "The exact scope depends on the project, but a professional OMSA website engagement can include:",
    process: [
      { step: "Discovery and Business Understanding", detail: "We begin by understanding the business, services, audiences, competitors, markets and primary goals of the website. This creates the context needed for every later decision." },
      { step: "Website Strategy and Architecture", detail: "We define the important pages, relationships between them, navigation logic and user journeys before building individual sections in isolation." },
      { step: "Content and Page Structure", detail: "Each important page is organised around what the visitor needs to understand, the questions the page should answer and the action it should encourage." },
      { step: "UX and Visual Design", detail: "The structure becomes an interface. Hierarchy, typography, spacing, components, imagery and interaction are used to communicate the brand while keeping the experience clear." },
      { step: "Responsive Implementation", detail: "The experience is adapted and tested across relevant screen sizes so important content and actions remain accessible beyond desktop." },
      { step: "SEO and Technical Foundations", detail: "Metadata, page relationships, internal links, crawlability and other relevant foundations are reviewed as part of implementation." },
      { step: "Testing and Launch Preparation", detail: "Before launch, the website should be checked for broken paths, layout problems, content errors and other issues that could weaken the experience." },
      {
        step: "Improvement After Launch",
        detail: "Launch is the beginning of real-world learning. Search data, analytics and user behaviour can reveal where the website should evolve next.",
        link: { anchor: "analytics", link: { kind: "service", slug: "google-analytics" } },
      },
    ],
    postBenefitsSection: {
      id: "vs-development",
      eyebrow: "Design vs. development",
      h2: "Website Design and Website Development Are Different — and Both Matter",
      paragraphs: [
        { text: "Website design determines how the experience should communicate, behave and guide the user." },
        { text: "Website development turns that system into a functioning digital product." },
        { text: "The distinction matters because a strong concept can still fail through poor implementation, while technically competent website development cannot rescue a website with unclear structure and weak communication." },
        { text: "OMSA treats the two disciplines as connected parts of the same outcome: a website that communicates professionally and works reliably." },
      ],
    },
    whoForIntro: "OMSA Website Design is suited to:",
    whoFor: [
      { title: "Startups", body: "Build a credible digital presence without creating a site structure that becomes restrictive as the company grows." },
      { title: "Small and Medium-Sized Businesses", body: "Turn services, expertise and local relevance into a clearer online customer journey." },
      { title: "Professional Service Firms", body: "Communicate expertise and trust through stronger positioning, service architecture and conversion pathways." },
      { title: "Established Companies", body: "Modernise an outdated website and create a digital presence more aligned with the quality and direction of the organisation." },
      { title: "Companies Expanding Across the GCC", body: "Create an architecture capable of supporting additional markets, locations, services and languages more coherently." },
    ],
    preFaqSection: {
      id: "why-different",
      eyebrow: "Why OMSA",
      h2: "Why OMSA Approaches Website Design Differently",
      paragraphs: [
        { text: "We do not begin with the question: \"What style of website do you want?\"" },
        { text: "We begin with: \"What does the business need the website to do?\"" },
        { text: "That distinction affects everything that follows." },
        { text: "It changes how pages are organised. It changes what information gets priority. It changes where calls to action appear. It changes how SEO fits into the architecture. And it changes how design decisions are evaluated." },
        { text: "A website should represent the brand. But representation is only the beginning." },
        { text: "The stronger objective is to create a digital asset that helps people discover the business, understand it, trust it and take action." },
      ],
    },
    faqs: [
      { q: "How much does website design cost in Oman?", a: "Website design costs depend on the size of the site, complexity of the user experience, content requirements, functionality, languages and integrations involved. A focused business website and a large multilingual corporate website require very different scopes. OMSA defines the requirements before recommending an appropriate project scope." },
      { q: "How long does it take to design a business website?", a: "Timelines vary according to the number of pages, content readiness, design complexity, feedback cycles and technical requirements. The project scope should be established before a reliable delivery timeline is agreed." },
      { q: "Can OMSA design Arabic and English websites?", a: "Yes. English and Arabic experiences can be planned as part of the same website architecture when bilingual delivery is required, including consideration for right-to-left interfaces and content hierarchy." },
      { q: "Will my website be mobile-friendly?", a: "Responsive behaviour is a core consideration in modern website design. Important content, navigation and conversion paths should remain usable across mobile, tablet and desktop screen sizes." },
      {
        q: "Is SEO included in website design?",
        a: "OMSA considers important SEO foundations during website planning and implementation, including site architecture, headings, metadata, internal linking, crawlability and search intent. Broader SEO campaigns, ongoing optimisation and competitive search growth may require a dedicated SEO engagement.",
        link: { anchor: "dedicated SEO", link: { kind: "service", slug: "seo" } },
      },
      { q: "Can you redesign an existing website?", a: "Yes. A redesign can address more than visual appearance. Depending on the project, it can improve positioning, information architecture, user journeys, mobile usability, content structure and the technical foundation of the existing site." },
      { q: "Do you provide website design for businesses outside Oman?", a: "Yes. OMSA is positioned to work with businesses in Oman, the UAE and the wider GCC. The website strategy can be adapted according to the markets, audiences, languages and growth plans involved." },
      { q: "What should I prepare before starting a website project?", a: "Useful starting information includes your services, target customers, business goals, existing brand materials, priority markets, required languages, examples of websites you find effective and any functionality or integrations you already know you need. If some of these are not yet defined, they can be clarified during discovery." },
    ],
    finalCta: {
      heading: "Your Website Should Earn Its Place in Your Business",
      body: "A website occupies an important position between discovery and decision. Make that position useful. If you are building a new digital presence or replacing a website that no longer represents where your business is going, OMSA can help you plan a clearer, stronger and more scalable foundation.",
      primaryLabel: "Start Your Website Project",
      secondaryLabel: "Explore SEO Services",
      secondaryLink: { kind: "service", slug: "seo" },
    },
    related: ["seo", "technical-seo", "google-analytics"],
  },
  {
    slug: "seo",
    name: "SEO Services",
    short: "Long-term visibility that consistently generates qualified traffic.",
    icon: Search,
    category: "Visibility",
    metaTitle: "SEO Services in Oman & UAE | OMSA Digital & AI Studio",
    metaDescription:
      "A serious SEO programme for ambitious businesses in Oman, the UAE and the GCC. Technical SEO, on-page, content, authority and local search delivered as one strategy.",
    problem:
      "Most SEO programmes are a checklist of tactics with no thesis. Rankings appear and disappear, traffic doesn't translate into customers, and reports never tell you what to do next.",
    solution:
      "A written SEO strategy built around your business — the keywords that actually drive revenue, the technical health your site needs, the content programme that earns trust, and the local signals that matter in Oman and the UAE.",
    benefits: [
      "Compounding organic traffic over twelve to twenty-four months",
      "Higher share of high-intent search demand",
      "Visibility in both English and Arabic search",
      "Lower dependence on paid acquisition",
      "Clear reporting against revenue, not vanity rankings",
    ],
    process: [
      { step: "Audit", detail: "Full technical, on-page, content and authority audit. Benchmark against the three competitors that matter." },
      { step: "Keyword strategy", detail: "Map demand to your funnel — informational, commercial, transactional — in English and Arabic." },
      { step: "Roadmap", detail: "A twelve-month plan with quarterly priorities, owners and expected outcomes." },
      { step: "Execution", detail: "Technical fixes, content production, on-page optimization and authority building run together each month." },
      { step: "Reporting", detail: "Monthly review against the metrics on your board pack — qualified traffic, leads and pipeline." },
    ],
    faqs: [
      { q: "Do you guarantee rankings?", a: "No responsible partner will. We commit to a transparent, technically excellent process and report against qualified traffic, leads and revenue." },
      { q: "How long until I see results?", a: "Technical and on-page improvements often move within sixty days. Content-led growth compounds from month three and accelerates from month six." },
      { q: "Do you work in Arabic?", a: "Yes. We plan and execute SEO across both languages, with native Arabic content, RTL technical setup and locale-aware structured data." },
    ],
    related: ["technical-seo", "local-seo", "google-analytics"],
    auditToolAnchor: "SEO Audit Tool",
  },
  {
    slug: "technical-seo",
    name: "Technical SEO",
    short: "A search-ready foundation that lets every other marketing investment compound.",
    icon: Cpu,
    category: "Visibility",
    metaTitle: "Technical SEO Services — Audits, Core Web Vitals & Schema",
    metaDescription:
      "Technical SEO audits, Core Web Vitals optimization, structured data and crawl architecture for premium websites in Oman, the UAE and the GCC.",
    problem:
      "Technical issues quietly cap how far any content or campaign can take you. Slow pages, broken canonicals, blocked crawls and missing schema mean Google never sees the work you're paying for.",
    solution:
      "A deep technical audit, prioritized by business impact, executed by senior engineers — followed by ongoing technical health monitoring so the foundation stays solid as the site grows.",
    benefits: [
      "Faster pages and stronger Core Web Vitals",
      "Crawl efficiency aligned to your most valuable URLs",
      "Structured data crawlers and AI search can actually parse",
      "Resilience against algorithm and platform changes",
      "A site that's safe to scale, in multiple languages",
    ],
    process: [
      { step: "Crawl audit", detail: "Full-site crawl, log analysis, index coverage review and Core Web Vitals benchmarking." },
      { step: "Prioritization", detail: "Issues ranked by revenue impact, not by tool severity score." },
      { step: "Implementation", detail: "Engineering team executes — performance, indexability, canonicals, schema, internationalization." },
      { step: "Monitoring", detail: "Ongoing alerts on indexing, schema validity and Core Web Vitals regressions." },
    ],
    faqs: [
      { q: "Will you fix things or only recommend?", a: "Both. We can deliver a written audit with priorities, or own the implementation end-to-end with our engineering team." },
      { q: "Do you support headless and modern frameworks?", a: "Yes — Next.js, TanStack Start, Astro, Shopify Hydrogen, headless WordPress and standard stacks. Technical SEO is framework-aware." },
    ],
    related: ["seo", "local-seo", "website-design"],
    auditToolAnchor: "technical SEO audit",
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    short: "Be the obvious choice when someone in Muscat, Dubai or Abu Dhabi is searching for what you do.",
    icon: MapPin,
    category: "Visibility",
    metaTitle: "Local SEO Services in Muscat, Dubai & the GCC — OMSA Digital & AI Studio",
    metaDescription:
      "Local SEO programmes for hotels, clinics, restaurants and professional services across Oman and the UAE. Map-pack visibility, reviews and locally-relevant content.",
    problem:
      "Local search drives the highest-intent traffic in any city, but most businesses leave their Google Business Profile half-configured, ignore reviews, and never publish locally-relevant content. Competitors take the map pack by default.",
    solution:
      "A focused Local SEO programme covering Google Business Profile optimization, citation consistency, reviews, locally-relevant landing pages, and structured data — built for cities and districts across Oman and the UAE.",
    benefits: [
      "Map-pack visibility in Muscat, Dubai, Abu Dhabi and beyond",
      "Higher review volume and quality, faster",
      "Locally-relevant landing pages that compete on intent",
      "Multi-location architecture ready for expansion",
      "Bilingual local presence in English and Arabic",
    ],
    process: [
      { step: "Local audit", detail: "Google Business Profile, citations, NAP consistency, reviews, local pack benchmarking." },
      { step: "Profile optimization", detail: "GBP categories, services, attributes, photos and posting cadence." },
      { step: "Local pages", detail: "City and district landing pages built around the language people actually use." },
      { step: "Reviews engine", detail: "Systematic review generation, response and reputation monitoring." },
    ],
    faqs: [
      { q: "Can you handle multiple locations?", a: "Yes. We've built location architectures from single-city brands to multi-emirate operators, with proper schema and clean URL structures per location." },
      { q: "How do you handle Arabic local search?", a: "We optimize bilingual GBP listings, dual-language schema, and locale-aware landing pages so you appear for searches in both languages." },
    ],
    related: ["seo", "technical-seo", "google-analytics"],
    auditToolAnchor: "check your SEO foundation",
  },
  {
    slug: "ai-chatbots",
    name: "AI Chatbots & Assistants",
    short: "An always-on assistant that answers questions, qualifies leads and routes the right enquiries to your team.",
    icon: Bot,
    category: "Intelligence",
    metaTitle: "AI Chatbots & Assistants for Business — OMSA Digital & AI Studio",
    metaDescription:
      "Custom AI chatbots and assistants for hotels, clinics, real estate and corporate brands across Oman and the UAE. Trained on your content, integrated with your CRM.",
    problem:
      "Generic chatbots damage premium brands — wrong answers, awkward tone, no integration. Most enquiries still wait hours for a human reply, and qualified leads slip through the gap.",
    solution:
      "Custom AI assistants trained on your own content, voiced in your own brand, integrated with your CRM, booking system or WhatsApp. Guardrails by default, fallback to a human when needed.",
    benefits: [
      "24/7 first response with brand-correct answers",
      "Qualified leads captured outside business hours",
      "Lower support load on your team",
      "Bilingual conversations in Arabic and English",
      "Measurable resolution, qualification and handoff rates",
    ],
    process: [
      { step: "Use-case mapping", detail: "Pick the two or three conversations that genuinely move the business — support, booking, lead qualification." },
      { step: "Training", detail: "Train the assistant on your content, FAQs, services and tone of voice. Define guardrails." },
      { step: "Integration", detail: "Connect to CRM, booking engine, WhatsApp or website — wherever your customers already are." },
      { step: "Launch & tune", detail: "Phased rollout with weekly review of transcripts, edge cases and improvements." },
    ],
    faqs: [
      { q: "Can it speak Arabic?", a: "Yes. We deploy bilingual assistants with native Arabic comprehension and tone, including RTL chat interfaces." },
      { q: "How do you prevent wrong answers?", a: "Assistants are constrained to your approved content, with a confidence threshold and a fallback to a human when uncertain." },
      { q: "How does it connect to my systems?", a: "Via official APIs to your CRM, booking platform, WhatsApp Business and helpdesk. No screen-scraping, no fragile workarounds." },
    ],
    related: ["business-automation", "website-design", "google-analytics"],
  },
  {
    slug: "business-automation",
    name: "Business Automation",
    short: "Quiet workflows that handle the repetitive work and free your team to focus on customers.",
    icon: Workflow,
    category: "Growth",
    metaTitle: "Business Automation in Oman & UAE — OMSA Digital & AI Studio",
    metaDescription:
      "AI-assisted business automation for operations, sales and marketing teams in Oman and the UAE. Workflow orchestration, CRM integration and AI-powered lead handling.",
    problem:
      "Operational work eats hours that should go to customers — copy-pasting between systems, manually routing leads, exporting reports, chasing approvals. The cost is hidden, but it's the largest one most teams pay.",
    solution:
      "We design and ship automations across sales, marketing and operations — from simple integrations to AI-assisted workflows that handle classification, routing and reporting without anyone touching them.",
    benefits: [
      "Hours saved per week, per team, every week",
      "Faster lead response and routing",
      "Cleaner data flowing into your CRM and dashboards",
      "Fewer human errors in critical workflows",
      "Capacity to grow without proportional headcount",
    ],
    process: [
      { step: "Process mapping", detail: "Walk through your operations with the team doing the work. Identify the most painful, repetitive flows." },
      { step: "Design", detail: "Design automations that respect existing tools — no rip-and-replace." },
      { step: "Build & integrate", detail: "Connect CRMs, spreadsheets, helpdesks, WhatsApp, email and AI services in production-grade workflows." },
      { step: "Monitor", detail: "Dashboards on workflow health, time saved and error rates, reviewed monthly." },
    ],
    faqs: [
      { q: "Will it work with our existing tools?", a: "Yes. We integrate with your CRM, helpdesk, booking engine or ERP rather than replacing them." },
      { q: "Is it safe to run unattended?", a: "Critical steps are designed with approvals, logging and rollback. We monitor errors and tune as conditions change." },
    ],
    related: ["ai-chatbots", "google-analytics", "seo"],
  },
  {
    slug: "google-analytics",
    name: "Analytics & Tracking",
    short: "Better decisions through measurable, trustworthy insights — across web, ads and customer journey.",
    icon: BarChart3,
    category: "Insights",
    metaTitle: "Google Analytics 4 (GA4) Consulting — Oman & UAE",
    metaDescription:
      "GA4, Google Tag Manager and Search Console implementation, server-side tagging, and executive dashboards for businesses in Oman and the UAE.",
    problem:
      "Decisions are made on instinct because the data isn't trusted. Tracking is partial, events are inconsistent, and dashboards never answer the actual question — where the next pound of marketing spend should go.",
    solution:
      "A clean Google Analytics 4 implementation, Tag Manager and Search Console architecture, server-side tagging where appropriate, and executive dashboards that present the metrics your leadership team actually reviews.",
    benefits: [
      "A single, trustworthy source of truth",
      "Channel and campaign attribution you can defend",
      "Conversion tracking aligned to revenue, not pageviews",
      "Privacy-first setup with proper consent handling",
      "Faster, more confident marketing decisions",
    ],
    process: [
      { step: "Measurement plan", detail: "Define the business questions, the events that answer them, and the data model that supports both." },
      { step: "Implementation", detail: "GA4, GTM, Search Console, ads conversions and server-side tagging where it improves accuracy or privacy." },
      { step: "Dashboards", detail: "Looker Studio or BI dashboards built around the conversations your leadership team actually has." },
      { step: "Quarterly review", detail: "Ongoing audits to catch drift, broken tags and changing platform requirements." },
    ],
    faqs: [
      { q: "Do you support server-side tagging?", a: "Yes. We deploy server-side GTM where it improves attribution accuracy, privacy posture, or both." },
      { q: "Can you connect ads, CRM and analytics?", a: "Yes. We connect Google Ads, Meta, CRMs and GA4 so revenue attribution survives the journey across channels and devices." },
    ],
    related: ["seo", "technical-seo", "business-automation"],
  },
];

export const getService = (slug: string) =>
  SERVICE_DETAILS.find((s) => s.slug === slug);
