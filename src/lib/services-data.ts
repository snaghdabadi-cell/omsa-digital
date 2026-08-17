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
      "Professional SEO services for businesses in Oman, the UAE and the GCC — technical, content and search-intent strategy built to grow qualified organic traffic.",
    problem:
      "Search visibility only matters if it leads somewhere. Many businesses either don't appear for the searches that matter, or attract visitors who never convert — because rankings, traffic and enquiries were never connected as one system.",
    solution:
      "A coordinated SEO strategy that connects search demand to relevant visibility, qualified visitors and business enquiries — covering technical foundations, on-page and content work, site architecture, local relevance and clear measurement, built for how people actually search in Oman, the UAE and the wider GCC.",
    h1: "SEO Services That Turn Search Visibility Into Business Growth",
    heroBody: [
      "Ranking for the right terms is only useful if it brings the right visitors — people who understand what you offer and are ready to act. OMSA builds SEO programmes around that outcome, not around rankings in isolation.",
      "We work across the parts of SEO that actually move a business forward: technical foundations that make a site easy to crawl and understand, content and on-page work that matches real search intent, site architecture that connects it all, and measurement that shows what organic search is actually contributing.",
      "For businesses in Oman, Muscat, the UAE and the wider GCC, that means building visibility in the markets and languages your customers actually search in — without treating every page as a generic, one-size-fits-all template.",
    ],
    heroCta: {
      primaryLabel: "Start Your SEO Strategy",
      secondaryLabel: "Run a Free SEO Audit",
      secondaryLink: { kind: "tool", slug: "seo-audit" },
    },
    sections: [
      {
        id: "beyond-rankings",
        eyebrow: "Why SEO matters",
        h2: "SEO Is More Than Rankings",
        paragraphs: [
          { text: "Rankings are a means, not the objective. A page that ranks well but never generates a qualified enquiry hasn't actually done its job." },
          { text: "A professional SEO programme should connect search demand to relevant visibility, qualified visitors, a useful website experience and, ultimately, enquiries and business opportunities." },
          { text: "In practice, that chain breaks in familiar ways." },
        ],
        bullets: [
          "Important pages never appear for the searches that matter",
          "Traffic arrives but carries little or no commercial intent",
          "Pages are technically inaccessible to search engines",
          "Weak content architecture leaves topics thin or scattered",
          "Poor local visibility in Oman, the UAE or the wider GCC",
          "Similar pages compete with each other instead of the competition",
          "Weak internal linking hides important pages from users and search engines",
          "No clear way to see what organic search actually contributes to the business",
        ],
      },
      {
        id: "our-strategy",
        eyebrow: "Our approach",
        h2: "An Integrated SEO Strategy",
        paragraphs: [
          { text: "SEO is often sold as a list of separate tasks — a little keyword research, a few blog posts, some technical fixes. Treated that way, none of it compounds." },
          { text: "OMSA builds SEO as one coordinated strategy, where each part of the work supports the others:" },
        ],
        bullets: [
          "Business and search opportunity analysis",
          "Technical SEO foundations",
          "Keyword and search-intent research",
          "Site and content architecture",
          "On-page optimization",
          "Content strategy",
          "Internal linking",
          "Local search, where relevant",
          "Structured data, where appropriate",
          "Measurement and continuous improvement",
        ],
        afterBullets: [
          { text: "None of these deliver much value in isolation. Technical fixes without the right content have nothing to support. Content without technical accessibility may never be seen. Keyword research without site architecture has nowhere useful to live. Treating SEO as one connected system is what allows the work to compound." },
        ],
      },
      {
        id: "seo-services",
        eyebrow: "Our SEO services",
        h2: "Our SEO Services",
        subsections: [
          { h3: "SEO Audits", body: "A structured review of technical, structural, content and search-visibility issues, prioritized by what will actually move the business forward. Our SEO Audit Tool is a useful first look at where your site currently stands.", link: { anchor: "SEO Audit Tool", link: { kind: "tool", slug: "seo-audit" } } },
          { h3: "Keyword & Search Intent Research", body: "We identify how your prospective customers actually search, and separate informational, commercial and transactional opportunities so content and pages can be built around real intent." },
          { h3: "On-Page SEO", body: "Titles, descriptions, headings, page relevance and semantic coverage — refined so each page clearly signals what it's about, to both visitors and search engines." },
          { h3: "Technical SEO", body: "Crawlability, indexability, site architecture, canonicalization, structured data and performance foundations. For sites with deeper technical issues, this is handled through a dedicated Technical SEO engagement.", link: { anchor: "dedicated Technical SEO engagement", link: { kind: "service", slug: "technical-seo" } } },
          { h3: "Content Strategy & Optimization", body: "We build topic coverage around real audience questions and buying journeys, rather than publishing content simply to increase page count." },
          { h3: "Local SEO", body: "For businesses competing geographically — in Muscat, across Oman, or in the UAE — Local SEO and map-pack visibility often matter as much as national rankings.", link: { anchor: "Local SEO", link: { kind: "service", slug: "local-seo" } } },
          { h3: "Internal Linking & Site Architecture", body: "Internal linking helps both users and search engines understand hierarchy, relationships and which pages matter most on your site." },
          { h3: "SEO Measurement", body: "We track organic landing-page performance and connect it to meaningful business outcomes, often through the same Google Analytics 4 implementation used across the business.", link: { anchor: "Google Analytics 4 implementation", link: { kind: "service", slug: "google-analytics" } } },
        ],
      },
      {
        id: "oman-uae-gcc",
        eyebrow: "Oman, UAE & the GCC",
        h2: "SEO for Oman, UAE and GCC Businesses",
        paragraphs: [
          { text: "Search behaviour, competition, location and customer expectations can differ meaningfully across GCC markets — a strategy built for one city or country doesn't automatically transfer to another." },
          { text: "A business focused on Muscat has different local competition and search patterns to one competing across Dubai or the wider UAE. Search happens in both English and Arabic, often with different intent and phrasing in each.", link: { anchor: "Muscat", link: { kind: "location", city: "muscat" } } },
          { text: "Where genuinely useful, this can mean building dedicated local landing pages for specific service areas — without duplicating near-identical content across multiple locations purely to occupy more URLs." },
          { text: "The right regional approach depends on where your customers actually are, not on listing every GCC country on every page." },
        ],
      },
      {
        id: "search-intent",
        eyebrow: "Search intent",
        h2: "SEO Built Around Search Intent",
        paragraphs: [
          { text: "Not every search means the same thing, even when the keyword looks similar. Someone researching a topic, someone comparing providers and someone ready to enquire are all searching differently — and expect a different kind of page." },
          { text: "We plan content and pages around that distinction: informational searches, commercial investigation, direct service searches, local searches and branded searches each call for a different page type and experience." },
          { text: "Matching intent correctly is what allows a page to genuinely satisfy the visitor who lands on it — which is also what search engines are ultimately trying to reward." },
        ],
      },
      {
        id: "technical-content-authority",
        eyebrow: "How it fits together",
        h2: "Technical Foundations, Content and Authority — Together",
        paragraphs: [
          { text: "SEO is no longer a matter of keywords and backlinks alone. Sustainable visibility depends on technical foundations that make a site accessible, content that's genuinely relevant to what people are searching for, a site architecture that connects it all, and a level of trust search engines can recognise." },
          { text: "Strong content on a technically broken site struggles to be found. A technically flawless site with thin or irrelevant content has nothing worth ranking. Neither works without a website experience people actually find useful." },
          { text: "OMSA coordinates all three, rather than treating them as separate workstreams handled in isolation." },
        ],
      },
      {
        id: "ai-search",
        eyebrow: "Modern search",
        h2: "AI Search and Modern Search Visibility",
        paragraphs: [
          { text: "Search is evolving beyond a simple list of blue links. Google's AI-powered search experiences and AI assistants such as ChatGPT and Perplexity increasingly synthesise answers from multiple sources rather than sending every visitor to a single page." },
          { text: "We can't promise inclusion in any AI-generated answer or assistant response — no credible partner can. What we can do is build content and sites the way these systems are understood to favour: clearly structured, genuinely useful, entity-aware, contextually complete and technically accessible." },
          { text: "A site with strong architecture, clear headings and well-organised content remains the strongest foundation for visibility, whether the searcher is reading a results page or an AI-generated summary." },
        ],
      },
    ],
    benefitsEyebrow: "What you receive",
    benefitsHeading: "What You Receive",
    benefitsIntro: "The exact scope depends on your website and goals, but a professional OMSA SEO engagement can include:",
    benefits: [
      "SEO audit with prioritized findings",
      "Search opportunity and competitor research",
      "Keyword and search-intent mapping",
      "Technical SEO recommendations",
      "On-page optimization",
      "Content recommendations and topic planning",
      "Internal linking recommendations",
      "Structured data recommendations, where appropriate",
      "Local SEO recommendations, where applicable",
      "A measurement framework tied to business outcomes",
      "A prioritized SEO roadmap",
    ],
    process: [
      { step: "Discovery & Business Goals", detail: "We start with your business, services, audiences and objectives, so the strategy is built around outcomes that matter — not a generic checklist." },
      { step: "Website & Search Audit", detail: "A full review of technical health, on-page quality, content and current search visibility establishes where you stand today." },
      { step: "Search Opportunity Research", detail: "We research how your prospective customers actually search, and where the gap is between demand and your current visibility." },
      { step: "SEO Strategy & Prioritization", detail: "Findings are turned into a prioritized plan — the issues and opportunities most likely to move the business forward, addressed first." },
      { step: "Technical & On-Page Implementation", detail: "Technical fixes and on-page optimization are implemented, coordinated with our Technical SEO work where deeper issues exist.", link: { anchor: "Technical SEO", link: { kind: "service", slug: "technical-seo" } } },
      { step: "Content & Internal Linking", detail: "Content is built around real search intent and connected through internal linking that reflects site hierarchy and relevance." },
      { step: "Measurement", detail: "We track organic performance against meaningful outcomes — qualified traffic and enquiries — not vanity ranking positions.", link: { anchor: "organic performance", link: { kind: "service", slug: "google-analytics" } } },
      { step: "Continuous Improvement", detail: "SEO is not a one-time project. Search behaviour, competition and your business change, so the strategy is reviewed and adjusted accordingly." },
    ],
    whoForIntro: "OMSA SEO Services are suited to:",
    whoFor: [
      { title: "SMEs and Growing Businesses", body: "Build organic visibility without relying solely on the ongoing cost of paid acquisition." },
      { title: "Established Businesses", body: "Strengthen or rebuild visibility for a site that no longer reflects the business's current position or market." },
      { title: "Professional Service Companies", body: "Turn expertise and credibility into search visibility for the terms your prospective clients actually search." },
      { title: "Businesses Competing Locally", body: "Compete effectively in Muscat, Dubai and other cities where local visibility drives enquiries." },
      { title: "Businesses Expanding Across the GCC", body: "Build a search strategy that can extend into new markets without starting from zero each time." },
      { title: "Sites With Traffic but Few Enquiries", body: "Diagnose why visitors arrive but rarely convert, and rebuild the journey around genuine search intent." },
    ],
    preFaqSection: {
      id: "why-omsa",
      eyebrow: "Why OMSA",
      h2: "Why Businesses Choose OMSA for SEO",
      paragraphs: [
        { text: "OMSA works across websites, SEO, analytics and AI as one connected discipline — which matters, because most SEO problems don't live in isolation." },
        { text: "We build strategy around your business objectives first, then coordinate the technical, content and measurement work needed to support it." },
        { text: "That means clear prioritization instead of an unfocused task list, and search practices built for how search actually works today, not outdated tactics." },
        { text: "We work with the regional context of Oman, the UAE and the GCC in mind, without treating every page as a copy-pasted template across markets." },
        { text: "And we don't promise guaranteed rankings or fabricated results. What we commit to is a transparent, technically sound process and honest reporting on what's working." },
      ],
    },
    faqs: [
      { q: "What do SEO services include?", a: "A professional SEO engagement typically includes a technical and content audit, keyword and search-intent research, on-page optimization, content strategy, internal linking and measurement — coordinated as one strategy rather than delivered as separate tasks." },
      { q: "How long does SEO take?", a: "Technical and on-page improvements can show measurable movement within a few months, while content-led growth and competitive rankings typically build over six to twelve months and continue compounding beyond that. Timelines depend on your starting position and competition." },
      { q: "Can you guarantee first-page rankings?", a: "No responsible SEO provider can guarantee specific rankings — search engines control their own results, and anyone promising guaranteed positions isn't being straightforward with you. We commit to a transparent, technically sound process and honest reporting on progress." },
      { q: "Do you provide SEO services in Oman and UAE?", a: "Yes. OMSA works with businesses across Oman, Muscat, the UAE and the wider GCC, building SEO strategies around the search behaviour and competition specific to each market." },
      { q: "What is the difference between SEO and Technical SEO?", a: "SEO is the broader strategy — technical foundations, content, on-page optimization, local relevance and measurement working together. Technical SEO focuses specifically on how easily search engines can crawl, render and index your website.", link: { anchor: "Technical SEO", link: { kind: "service", slug: "technical-seo" } } },
      { q: "Do I need ongoing SEO?", a: "Search behaviour, competition and algorithms change continuously, and most meaningful organic growth compounds over time rather than arriving from a single project. Ongoing SEO is generally more effective than a one-off engagement, though the right cadence depends on your market and goals." },
      { q: "Can you optimize an existing website?", a: "Yes. Most SEO engagements start with an existing site. We audit what's currently in place and build a prioritized plan to strengthen it, rather than starting from scratch unless a rebuild is genuinely warranted." },
      { q: "How do you measure SEO performance?", a: "We track organic visibility, qualified traffic and enquiries against a measurement framework tied to your actual business objectives — not just keyword rankings or overall traffic volume." },
    ],
    finalCta: {
      heading: "Ready to Turn Search Visibility Into Business Growth?",
      body: "Understanding where your organic search opportunities and obstacles actually lie is the first step. Let's review your current visibility and identify what should be prioritized.",
      primaryLabel: "Start Your SEO Strategy",
      secondaryLabel: "Run a Free SEO Audit",
      secondaryLink: { kind: "tool", slug: "seo-audit" },
    },
    related: ["technical-seo", "local-seo", "google-analytics"],
    auditToolAnchor: "SEO Audit Tool",
  },
  {
    slug: "technical-seo",
    name: "Technical SEO",
    short: "A search-ready foundation that lets every other marketing investment compound.",
    icon: Cpu,
    category: "Visibility",
    metaTitle: "Technical SEO Services in Oman & UAE | OMSA",
    metaDescription:
      "Technical SEO services for businesses in Oman, the UAE and the GCC — crawlability, indexing, Core Web Vitals and structured data built for stronger search visibility.",
    problem:
      "Even strong content underperforms when search engines can't efficiently crawl, render or index a website. Technical issues are often invisible to visitors but quietly cap how far any other SEO or marketing investment can go.",
    solution:
      "A structured Technical SEO audit that identifies and prioritizes the issues actually limiting your search visibility — crawlability, indexing, site architecture, structured data and performance — followed by clear implementation guidance.",
    h1: "Technical SEO Services for Stronger Search Foundations",
    heroBody: [
      "A polished website with excellent content can still underperform in search if search engines struggle to crawl, render, understand or index it. Technical SEO is the discipline of finding and removing those barriers.",
      "OMSA's Technical SEO work covers crawlability, indexation, site architecture, canonicalization, structured data, Core Web Vitals and JavaScript rendering — the foundations that determine whether the rest of your SEO and content investment can actually be seen.",
      "For businesses in Oman, the UAE and the wider GCC running modern, JavaScript-driven websites, getting these foundations right matters more, not less.",
    ],
    heroCta: {
      primaryLabel: "Request a Technical SEO Review",
      secondaryLabel: "Run a Free SEO Audit",
      secondaryLink: { kind: "tool", slug: "seo-audit" },
    },
    sections: [
      {
        id: "business-problem",
        eyebrow: "Why it matters",
        h2: "When Technical SEO Becomes a Business Problem",
        paragraphs: [
          { text: "Technical SEO issues rarely look dramatic day to day. They show up as a slow decline in visibility, pages that never quite rank, or a migration that quietly lost the traffic a site used to have." },
          { text: "In practice, that can mean:" },
        ],
        bullets: [
          "Important pages that were never indexed",
          "The wrong pages appearing in search results",
          "Duplicate URLs splitting relevance across multiple pages",
          "Crawl budget wasted on low-value pages",
          "Slow-loading pages and weak Core Web Vitals",
          "Broken or inconsistent redirects",
          "Traffic lost after a migration or redesign",
          "Conflicting canonical signals",
          "JavaScript content search engines can't render",
          "Incorrect robots directives blocking useful pages",
          "Structured data errors or missing markup",
          "A site architecture that leaves important pages hard to find",
        ],
      },
      {
        id: "technical-audits",
        eyebrow: "Technical SEO audits",
        h2: "Technical SEO Audits",
        paragraphs: [
          { text: "A professional technical audit looks well beyond what an automated scanner can flag on its own." },
        ],
        bullets: [
          "Crawl accessibility and indexability",
          "HTTP status codes and redirect chains",
          "Canonicalization and duplicate URL patterns",
          "Robots directives and XML sitemaps",
          "Site architecture and internal linking",
          "Structured data implementation",
          "Page performance and Core Web Vitals",
          "Mobile usability",
          "JavaScript rendering behaviour",
          "HTTPS and security signals",
          "Search Console signals, where access is available",
        ],
        afterBullets: [
          { text: "Our SEO Audit Tool is a useful starting point for a quick read on where a site stands, but it isn't a substitute for a full technical audit — it's designed to flag likely issues, not replace the deeper review a professional engagement provides.", link: { anchor: "SEO Audit Tool", link: { kind: "tool", slug: "seo-audit" } } },
        ],
      },
      {
        id: "crawl-index",
        eyebrow: "Foundations",
        h2: "Crawlability and Indexability",
        paragraphs: [
          { text: "Crawlability is whether search engines can reach and read a page. Indexability is whether that page is then eligible to appear in search results. A site can be crawlable but not indexable, or indexable but never actually crawled — both quietly limit visibility." },
          { text: "The signals that control this include robots.txt, robots meta directives, canonical tags, XML sitemap discovery, HTTP status codes and how internal links guide crawlers around a site." },
          { text: "A common and costly mistake is an accidental noindex directive or a blocked path left over from staging — pages built correctly but never given the chance to appear in search." },
        ],
      },
      {
        id: "architecture",
        eyebrow: "Site structure",
        h2: "Site Architecture and Internal Linking",
        paragraphs: [
          { text: "How a site is structured affects far more than navigation. It shapes which pages search engines find easily, how page relationships and hierarchy are understood, and how internal authority is distributed across a site." },
          { text: "A shallow, logical structure with clear internal linking generally outperforms a deep structure where important pages are several clicks from the homepage — for users and search engines alike." },
          { text: "This is closely connected to the broader SEO strategy, since architecture decisions affect how content and keyword targeting can be organised.", link: { anchor: "broader SEO strategy", link: { kind: "service", slug: "seo" } } },
        ],
      },
      {
        id: "canonicalization",
        eyebrow: "Duplicate control",
        h2: "Canonicalization and Duplicate URL Control",
        paragraphs: [
          { text: "Near-identical content is often reachable through more than one URL — with and without trailing slashes, with tracking parameters, across HTTP and HTTPS, or across www and non-www versions of a domain. Left unmanaged, this splits relevance across multiple URLs instead of consolidating it." },
          { text: "Canonical tags tell search engines which version is the preferred one — but they're a signal, not an absolute command. Consistent internal linking, redirects and sitemap entries pointing to the same canonical version give that signal far more weight." },
          { text: "Parameterized URLs from filters, tracking or sorting need the same discipline, or a site can end up competing with its own pages in search results." },
        ],
      },
      {
        id: "structured-data",
        eyebrow: "Structured data",
        h2: "Structured Data and Schema.org Markup",
        paragraphs: [
          { text: "Structured data uses the Schema.org vocabulary, typically implemented as JSON-LD, to describe a page's content and entities in a format search engines can read directly rather than infer.", link: { anchor: "Schema.org vocabulary", link: { kind: "external", href: "https://schema.org/" } } },
          { text: "Correct markup can make a page eligible for enhanced search features — it does not guarantee them, and it does not directly improve rankings. We implement and validate schema accurately, and avoid markup that doesn't reflect what's genuinely on the page." },
          { text: "Duplicate or conflicting schema across a site is a common and avoidable problem, and we check for it as part of every technical engagement." },
        ],
      },
      {
        id: "core-web-vitals",
        eyebrow: "Performance",
        h2: "Core Web Vitals and Website Performance",
        paragraphs: [
          { text: "Core Web Vitals measure real-world user experience: Largest Contentful Paint (how quickly the main content loads), Interaction to Next Paint (how responsive the page feels) and Cumulative Layout Shift (how visually stable it is while loading).", link: { anchor: "Core Web Vitals", link: { kind: "external", href: "https://web.dev/explore/learn-core-web-vitals" } } },
          { text: "In practical terms, this means how fast a page becomes useful, how quickly it responds to a tap or click, and whether content jumps around while loading — all of which affect both user experience and search performance." },
          { text: "We review image and resource optimization, JavaScript cost and rendering performance as part of every technical engagement, rather than chasing a synthetic score in isolation." },
        ],
      },
      {
        id: "javascript-seo",
        eyebrow: "Modern web applications",
        h2: "JavaScript SEO for Modern Web Applications",
        paragraphs: [
          { text: "Modern websites increasingly render content with JavaScript rather than serving complete HTML from the server. That's a legitimate way to build a fast, interactive site — but it introduces SEO considerations that a traditional static site doesn't have." },
          { text: "We review how content is rendered and discovered — server-side rendering versus client-side rendering, whether links are crawlable in the initial HTML, how metadata and structured data are delivered, and how canonical signals behave across routes." },
          { text: "This is a genuine area of focus for OMSA, since we build modern web applications ourselves and understand these considerations from both the development and search sides." },
        ],
      },
      {
        id: "migrations",
        eyebrow: "Site changes",
        h2: "Website Migrations and Technical Changes",
        paragraphs: [
          { text: "Domain changes, platform migrations, redesigns and URL restructuring are some of the highest-risk moments in technical SEO — visibility built up over years can be lost within days if the technical details aren't handled correctly." },
          { text: "A careful migration includes complete redirect mapping, updated canonical tags, revised internal linking, an updated XML sitemap, and close monitoring of indexation and rankings through Search Console after launch." },
          { text: "No migration is entirely risk-free, but most of the damage that occurs during migrations is avoidable with proper planning and post-launch monitoring." },
        ],
      },
      {
        id: "oman-uae-gcc",
        eyebrow: "Oman, UAE & GCC",
        h2: "Technical SEO for Oman, UAE and GCC Websites",
        paragraphs: [
          { text: "Businesses operating across Oman, the UAE and the wider GCC often need to support English and Arabic content, and sometimes multiple locations or service areas, within one coherent technical structure." },
          { text: "That raises specific technical questions: how English and Arabic content are architected, whether location pages add genuine value or create thin, duplicated content, and whether the URL structure stays consistent and indexable as the site grows." },
          { text: "hreflang tags are sometimes assumed to be necessary whenever multiple countries are mentioned. In practice, they're only needed when genuinely separate language or regional versions of a page exist — adding them without that need adds complexity without benefit." },
        ],
      },
    ],
    benefitsEyebrow: "What you receive",
    benefitsHeading: "What You Receive",
    benefitsIntro: "The exact scope depends on your website and platform, but a professional OMSA Technical SEO engagement can include:",
    benefits: [
      "A prioritized technical SEO audit",
      "Crawl and indexation findings",
      "Canonical and redirect recommendations",
      "Robots.txt and XML sitemap review",
      "Site architecture findings",
      "Structured data recommendations",
      "Core Web Vitals and performance findings",
      "Internal linking findings",
      "Implementation guidance for your development team",
      "Post-fix validation and monitoring recommendations",
    ],
    process: [
      { step: "Technical Discovery", detail: "We review your current site, hosting environment, platform and any known technical concerns before the audit begins." },
      { step: "Crawl & Indexation Analysis", detail: "A full-site crawl combined with indexation data identifies what search engines can actually reach and what they've chosen to index." },
      { step: "Architecture & URL Review", detail: "Site structure, internal linking, canonicalization and URL patterns are reviewed for consistency and crawl efficiency." },
      { step: "Performance & Rendering Review", detail: "Core Web Vitals, page performance and JavaScript rendering behaviour are assessed against real user experience." },
      { step: "Structured Data Review", detail: "Existing schema is validated for accuracy, and gaps or conflicts are identified and documented." },
      { step: "Prioritization by Impact", detail: "Findings are ranked by likely business impact, not by a generic severity score, so the highest-value fixes come first." },
      { step: "Implementation / Developer Guidance", detail: "We can implement fixes directly or provide clear, developer-ready guidance for your existing team." },
      { step: "Validation & Monitoring", detail: "Fixes are validated post-implementation, with monitoring in place to catch regressions before they affect visibility." },
    ],
    postBenefitsSection: {
      id: "vs-seo",
      eyebrow: "Choosing the right service",
      h2: "Technical SEO vs. General SEO",
      paragraphs: [
        { text: "Technical SEO covers accessibility, crawling, rendering, indexing and the technical signals that determine whether search engines can properly read your site." },
        { text: "Broader SEO builds on that foundation — combining it with search strategy, content, on-page optimization, local relevance and measurement aimed at business outcomes.", link: { anchor: "Broader SEO", link: { kind: "service", slug: "seo" } } },
        { text: "If your site has known technical concerns — a recent migration, indexation problems, a slow or JavaScript-heavy build — Technical SEO is the right starting point. If you're looking for a complete, ongoing search growth strategy, our SEO Services engagement covers Technical SEO as one part of a wider programme." },
      ],
    },
    whoForIntro: "OMSA Technical SEO is suited to:",
    whoFor: [
      { title: "Websites With Indexation Problems", body: "Pages that should be appearing in search but aren't — or pages appearing that shouldn't be." },
      { title: "Large or Growing Websites", body: "Sites where architecture, crawl efficiency and internal linking need active management as page count increases." },
      { title: "Modern JavaScript Applications", body: "Sites built with client-side or hybrid rendering, where rendering and crawlability need specific attention." },
      { title: "Websites After a Migration", body: "Sites that have recently changed domain, platform or URL structure and need technical validation." },
      { title: "Sites With Unexplained Visibility Declines", body: "Organic traffic or rankings have dropped and the cause isn't obvious from the surface." },
      { title: "Businesses Preparing a Major Site Change", body: "A redesign, replatform or restructuring is planned, and the technical risk needs to be managed proactively." },
    ],
    preFaqSection: {
      id: "why-omsa",
      eyebrow: "Why OMSA",
      h2: "Why OMSA for Technical SEO",
      paragraphs: [
        { text: "Technical SEO sits at the intersection of web development and search — which is exactly where OMSA works. We build modern websites and web applications ourselves, so we understand the technical trade-offs from the inside, not only from an audit checklist." },
        { text: "That understanding extends into site architecture, structured data, analytics and how modern, JavaScript-driven applications actually get discovered and indexed.", link: { anchor: "analytics", link: { kind: "service", slug: "google-analytics" } } },
        { text: "We prioritize findings by business impact rather than generic tool severity scores, and we're direct about what a fix will and won't change — no inflated claims about guaranteed ranking improvements." },
      ],
    },
    faqs: [
      { q: "What is Technical SEO?", a: "Technical SEO is the practice of making sure search engines can efficiently crawl, render, understand and index your website — covering site architecture, crawlability, indexability, structured data, performance and related foundations." },
      { q: "How is Technical SEO different from SEO?", a: "Technical SEO focuses specifically on the technical accessibility of a site. Broader SEO builds on that foundation with search strategy, content, on-page optimization, local relevance and measurement.", link: { anchor: "Broader SEO", link: { kind: "service", slug: "seo" } } },
      { q: "How do I know if my website has technical SEO problems?", a: "Common signs include declining organic traffic without an obvious cause, pages that never get indexed, slow load times, a recent migration or redesign, or a site built with heavy client-side JavaScript. A technical audit is the reliable way to confirm what's actually happening." },
      { q: "Can technical SEO improve rankings?", a: "Technical SEO removes barriers that prevent search engines from properly crawling, rendering and indexing your content, which is often a precondition for ranking well. It works alongside content and on-page SEO rather than replacing them." },
      { q: "Do you work with JavaScript websites?", a: "Yes. We regularly review and build modern, JavaScript-driven web applications, and understand the specific crawling and rendering considerations they introduce." },
      { q: "What is included in a technical SEO audit?", a: "A technical audit typically covers crawlability, indexability, status codes, redirects, canonicalization, robots directives, XML sitemaps, site architecture, structured data, performance, Core Web Vitals and mobile usability." },
      { q: "How often should technical SEO be reviewed?", a: "For most active websites, a full review every six to twelve months is reasonable, with closer monitoring around major changes such as migrations, redesigns or significant content additions." },
      { q: "Do you provide Technical SEO services in Oman and UAE?", a: "Yes. OMSA provides Technical SEO services for businesses across Oman, Muscat, the UAE and the wider GCC, including sites that need English and Arabic technical architecture." },
    ],
    finalCta: {
      heading: "Remove the Technical Barriers Holding Your Site Back",
      body: "A strong website can still underperform in search if search engines can't properly crawl, render or index it. Let's identify what's actually limiting your visibility and what should be fixed first.",
      primaryLabel: "Request a Technical SEO Review",
      secondaryLabel: "Run a Free SEO Audit",
      secondaryLink: { kind: "tool", slug: "seo-audit" },
    },
    related: ["seo", "local-seo", "website-design"],
    auditToolAnchor: "technical SEO audit",
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    short: "Be the obvious choice when someone in Muscat, Dubai or Abu Dhabi is searching for what you do.",
    icon: MapPin,
    category: "Visibility",
    metaTitle: "Local SEO Services in Oman & UAE | OMSA Digital & AI Studio",
    metaDescription:
      "Local SEO services for businesses in Oman, Muscat, the UAE and the GCC — Google Business Profile, local visibility and location-relevant content built for real customers.",
    problem:
      "A business can deliver excellent service and still lose local customers — not because of quality, but because a competitor is simply easier to find when someone searches nearby, in Google Search or on the map.",
    solution:
      "A structured Local SEO programme that connects your Google Business Profile, website signals, local content and technical foundations into one consistent local presence — built around where you actually operate, not a generic template with a city name inserted.",
    h1: "Local SEO Services That Help Customers Find Your Business",
    heroBody: [
      "When someone searches for a service near them, they rarely look past the first few results — in Google Search or on the map. If your business doesn't appear there, it doesn't matter how good the service actually is.",
      "OMSA builds Local SEO around your actual footprint: your Google Business Profile, your website's local signals, your service areas and the content that helps both customers and search engines understand where and how you operate.",
      "For businesses across Oman, Muscat, the UAE and the wider GCC, that means building genuine local relevance — not a template with a city name inserted into an otherwise generic page.",
    ],
    heroCta: {
      primaryLabel: "Improve Your Local Visibility",
      secondaryLabel: "Run a Free SEO Audit",
      secondaryLink: { kind: "tool", slug: "seo-audit" },
    },
    sections: [
      {
        id: "local-visibility-problem",
        eyebrow: "Why it matters",
        h2: "Local Visibility Is a Business Problem",
        paragraphs: [
          { text: "A business can deliver excellent service and still lose local customers — not because of quality, but because a competitor is simply easier to find when it matters." },
          { text: "That gap shows up in familiar ways:" },
        ],
        bullets: [
          "Competitors consistently appear first in local results",
          "The business doesn't appear for the searches that actually bring in customers",
          "The Google Business Profile is incomplete or out of date",
          "The website carries weak or inconsistent location signals",
          "Location pages are thin, duplicated or unhelpful",
          "Business details are inconsistent across the web",
          "Reviews are unmanaged or rarely responded to",
          "Important local pages are difficult for search engines to crawl or index",
          "The website never clearly explains where services are actually available",
        ],
        afterBullets: [
          { text: "Each of these is fixable — but only once it's identified as part of a coordinated local strategy, rather than treated as a one-off tweak." },
        ],
      },
      {
        id: "how-local-seo-works",
        eyebrow: "How it works",
        h2: "How Local SEO Works",
        paragraphs: [
          { text: "Local SEO is often reduced to \"add the city name to the page.\" In practice, it's a system of signals that reinforce each other:" },
        ],
        bullets: [
          "Local search demand",
          "Website relevance",
          "Google Business Profile",
          "Geographic signals",
          "Local content",
          "Business information consistency",
          "Reputation and reviews",
          "Technical SEO",
          "Structured data, where appropriate",
          "Measurement",
        ],
        afterBullets: [
          { text: "None of these work well in isolation. A complete Google Business Profile with a weak website still underperforms. Strong local content without consistent business information confuses both customers and search engines. Local SEO works when these signals point in the same direction." },
        ],
      },
      {
        id: "local-seo-services",
        eyebrow: "Our Local SEO services",
        h2: "Our Local SEO Services",
        subsections: [
          { h3: "Local SEO Audit", body: "A review of your current local visibility, website signals, Google Business Profile and technical obstacles that may be limiting how easily customers can find you." },
          { h3: "Google Business Profile Optimization", body: "We work through your business categories, services, business information, photos and profile completeness. A well-maintained profile supports local visibility — it isn't a guarantee of a specific map-pack position." },
          { h3: "Local Keyword & Search Intent Research", body: "We identify how customers actually search within a geographic context — service queries, service-plus-location queries, near-me intent, branded searches and informational local searches all call for different handling." },
          { h3: "Local Landing Page Strategy", body: "Dedicated location or service-area pages are useful when they offer genuine value and real geographic relevance — for example, a page built around your presence in Muscat — rather than duplicated pages built purely to add city names.", link: { anchor: "Muscat", link: { kind: "location", city: "muscat" } } },
          { h3: "Local On-Page SEO", body: "Titles, headings, service relevance, geographic context, internal links and business information are refined so each page clearly communicates what you offer and where." },
          { h3: "Local Citations & Business Information", body: "We review consistency of your core business details — name, address, phone number and category — across the platforms that matter. Consistency supports trust signals; it isn't a shortcut that mass directory submissions can replace." },
          { h3: "Review & Reputation Signals", body: "Authentic customer reviews and a responsive review process support local trust and visibility over time. We do not use fake or purchased reviews, and we don't recommend any provider who does." },
          { h3: "Local Technical SEO", body: "Crawlability, indexability, location-page architecture, canonicalization, structured data, mobile usability and performance — the technical foundations local visibility depends on. Where deeper technical issues exist, this connects directly to our Technical SEO work.", link: { anchor: "Technical SEO", link: { kind: "service", slug: "technical-seo" } } },
          { h3: "Local SEO Measurement", body: "We track local visibility, organic landing-page performance, Google Business Profile interactions where data is available, and enquiries — often through the same analytics setup used across the rest of the business.", link: { anchor: "analytics setup", link: { kind: "service", slug: "google-analytics" } } },
        ],
      },
      {
        id: "oman-muscat",
        eyebrow: "Oman & Muscat",
        h2: "Local SEO for Oman and Muscat",
        paragraphs: [
          { text: "Muscat is OMSA's home market, which shapes how we approach Local SEO for Omani businesses.", link: { anchor: "Muscat", link: { kind: "location", city: "muscat" } } },
          { text: "The right strategy depends on how your business actually operates — a single physical location in Muscat needs a different approach to a business serving customers across multiple areas of Oman, or one taking enquiries nationwide regardless of location." },
          { text: "We build the strategy around your real service coverage, rather than adding location pages for areas you don't genuinely serve." },
        ],
      },
      {
        id: "uae-dubai",
        eyebrow: "UAE & Dubai",
        h2: "Local SEO for UAE and Dubai",
        paragraphs: [
          { text: "Commercial districts in the UAE, particularly in Dubai, tend to be considerably more competitive than equivalent categories in Oman — which usually means visibility needs sharper differentiation and more precise local relevance, not just more content." },
          { text: "That can mean tighter service-area targeting, a more complete Google Business Profile, and location-specific content that genuinely reflects how and where you operate, rather than a broad claim to serve \"the UAE\" without local specificity." },
          { text: "OMSA is based in Oman; where a UAE engagement is scoped, the strategy is built around your actual service area and business presence rather than an assumed local address." },
        ],
      },
      {
        id: "english-arabic-local",
        eyebrow: "English & Arabic",
        h2: "English and Arabic Local Search",
        paragraphs: [
          { text: "Customers in Oman, the UAE and the wider GCC search in both English and Arabic, and often phrase the same need differently in each language rather than using a direct translation." },
          { text: "Local content should reflect that — localized to how people actually search and speak, not mechanically translated from an English original." },
          { text: "Business and location information also needs to stay consistent across both languages, since inconsistent details between an English and Arabic listing can undermine the trust signals Local SEO depends on." },
          { text: "We don't automatically recommend duplicate translated pages for every location — that decision should be based on genuine audience need and how your business actually operates, not assumed as a default." },
        ],
      },
    ],
    benefitsEyebrow: "What you receive",
    benefitsHeading: "What You Receive",
    benefitsIntro: "The exact scope depends on your business and locations, but a professional OMSA Local SEO engagement can include:",
    benefits: [
      "A local SEO audit",
      "Local keyword and search-intent research",
      "Google Business Profile recommendations",
      "Location-page recommendations",
      "Local on-page optimization",
      "A business-information consistency review",
      "Technical local SEO findings",
      "Structured data recommendations, where appropriate",
      "Internal linking recommendations",
      "Review and reputation guidance",
      "A measurement framework",
      "A prioritized action roadmap",
    ],
    process: [
      { step: "Business & Location Discovery", detail: "We start with how your business actually operates — physical locations, service areas and the customers you're trying to reach." },
      { step: "Local Visibility Audit", detail: "A review of your current local search presence, website signals and technical foundations establishes where you stand today." },
      { step: "Local Search Research", detail: "We research how customers in your area actually search, and where the gap is between that demand and your current visibility." },
      { step: "Google Business Profile Review", detail: "Categories, services, business information and profile completeness are assessed against what's genuinely accurate and useful." },
      { step: "Website & Location Optimization", detail: "On-page content, location pages and internal linking are optimized to reflect real geographic relevance." },
      { step: "Local Authority & Reputation Signals", detail: "We review review-generation and response practices, and the consistency of your business information across the platforms that matter." },
      { step: "Tracking & Measurement", detail: "We put a measurement framework in place so local performance can be assessed against real enquiries, not just visibility.", link: { anchor: "measurement framework", link: { kind: "service", slug: "google-analytics" } } },
      { step: "Continuous Improvement", detail: "Local search results shift as competitors change their own presence — the strategy is reviewed and adjusted accordingly." },
    ],
    postBenefitsSection: {
      id: "vs-seo",
      eyebrow: "Choosing the right service",
      h2: "Local SEO vs. General SEO",
      paragraphs: [
        { text: "Local SEO focuses heavily on geographic relevance — local discovery, Google Business Profile, local intent and location-specific signals that determine whether nearby customers find you." },
        { text: "Broader SEO covers technical foundations, content, site architecture and both informational and commercial search demand across your full organic visibility, not only local searches.", link: { anchor: "Broader SEO", link: { kind: "service", slug: "seo" } } },
        { text: "Most businesses with a physical presence or defined service area benefit from both working together. If your priority is being found by nearby customers, start with Local SEO. If you need broader organic growth across informational and commercial searches, our SEO Services engagement is the wider programme." },
        { text: "Where the underlying site also has crawlability, indexing or performance issues, that's addressed through Technical SEO.", link: { anchor: "Technical SEO", link: { kind: "service", slug: "technical-seo" } } },
      ],
    },
    whoForIntro: "OMSA Local SEO is suited to:",
    whoFor: [
      { title: "Professional Service Businesses", body: "Law firms, consultancies and agencies that depend on being found by clients searching within a specific area." },
      { title: "Local Service Companies", body: "Businesses that operate from a physical location and rely on nearby customers finding them." },
      { title: "Service-Area Businesses", body: "Companies that travel to customers across a defined region rather than operating from a single storefront." },
      { title: "SMEs and Growing Businesses", body: "Businesses competing against larger players for local visibility, without a large marketing budget to match." },
      { title: "Clinics and Healthcare Providers", body: "Practices where local trust and easy discovery directly affect patient enquiries." },
      { title: "Hospitality Businesses", body: "Hotels, restaurants and venues where local and near-me searches drive a meaningful share of demand." },
      { title: "Businesses Expanding Into New GCC Locations", body: "Companies opening in a new city or emirate that need a local presence built correctly from the start." },
    ],
    preFaqSection: {
      id: "why-omsa",
      eyebrow: "Why OMSA",
      h2: "Why OMSA for Local SEO",
      paragraphs: [
        { text: "OMSA works across websites, SEO and analytics as one connected discipline, which matters for Local SEO because the strongest local presence depends on signals from all three working together, not a Google Business Profile treated in isolation." },
        { text: "We build strategy around your actual footprint — the locations and service areas you genuinely operate in — rather than a generic template applied to every city in the GCC." },
        { text: "We're based in Oman, which gives us direct, practical familiarity with the local market rather than a purely remote, generic approach." },
        { text: "And we don't promise specific map-pack positions or guaranteed rankings. What we commit to is a transparent process and a local presence built on accurate, consistent information." },
      ],
    },
    faqs: [
      { q: "What is Local SEO?", a: "Local SEO is the practice of improving how easily your business is found in geographically relevant searches — including Google Maps, the local map pack and \"near me\" style searches — by optimizing your Google Business Profile, website and local content." },
      { q: "How is Local SEO different from SEO?", a: "Local SEO focuses specifically on geographic relevance and local discovery. Broader SEO covers technical foundations, content and organic visibility across informational and commercial searches beyond local intent.", link: { anchor: "Broader SEO", link: { kind: "service", slug: "seo" } } },
      { q: "How can Local SEO help my business in Oman?", a: "For businesses serving Muscat or other areas of Oman, Local SEO helps ensure you appear when nearby customers search for the services you offer, rather than losing that visibility to competitors with a stronger local presence." },
      { q: "Can you optimize my Google Business Profile?", a: "Yes. We review and optimize business categories, services, business information and profile completeness. A well-maintained profile supports local visibility, though we don't guarantee a specific map-pack position." },
      { q: "How long does Local SEO take?", a: "Some improvements, such as Google Business Profile completeness, can show effects within weeks. Competitive local rankings and sustained visibility typically build over several months, depending on your market and competition." },
      { q: "Can you guarantee Google Maps rankings?", a: "No responsible provider can guarantee specific map-pack or ranking positions — Google controls its own results. We commit to a transparent, technically sound process focused on the signals that genuinely influence local visibility." },
      { q: "Do I need separate pages for every location?", a: "Only where each location offers genuine value and real geographic relevance. Dedicated location pages built purely to duplicate content across cities can do more harm than good — the right structure depends on how your business actually operates." },
      { q: "Do you provide Local SEO services for UAE businesses?", a: "Yes. OMSA works with businesses across the UAE, including Dubai, building Local SEO strategies around each business's actual service area and presence." },
    ],
    finalCta: {
      heading: "Be Findable When Local Customers Are Ready to Act",
      body: "Local search is often the moment a prospective customer decides who to contact. Let's review your current local visibility and identify what's genuinely holding it back.",
      primaryLabel: "Improve Your Local Visibility",
      secondaryLabel: "Run a Free SEO Audit",
      secondaryLink: { kind: "tool", slug: "seo-audit" },
    },
    related: ["seo", "technical-seo", "google-analytics"],
    auditToolAnchor: "SEO Audit Tool",
  },
  {
    slug: "ai-chatbots",
    name: "AI Chatbots & Assistants",
    short: "An always-on assistant that answers questions, qualifies leads and routes the right enquiries to your team.",
    icon: Bot,
    category: "Intelligence",
    metaTitle: "AI Chatbot Development in Oman & UAE | OMSA Digital",
    metaDescription:
      "Custom AI chatbots for businesses in Oman, the UAE and the GCC — built around your content, customers and workflows, with integrations scoped to your systems.",
    problem:
      "Repetitive customer questions, slow response times and enquiries arriving outside business hours put pressure on teams that are already stretched — and leads often arrive without enough information to act on quickly.",
    solution:
      "A custom AI chatbot designed around your actual business — approved content, real customer questions and the workflows you already use — rather than a generic chat widget dropped onto a website.",
    h1: "AI Chatbots Built Around Your Business, Customers and Workflows",
    heroBody: [
      "A generic chat widget can answer generic questions. A chatbot that's actually useful to your business needs to understand your services, reflect your tone, and know when to hand a conversation to a person.",
      "OMSA designs AI chatbots around your real business information, the questions your customers actually ask, and the workflows already running behind your website — support, lead capture, qualification and routing.",
      "The outcome we design for is straightforward: faster responses, easier access to information, better-qualified leads and fewer repetitive enquiries landing on your team — not AI for its own sake.",
    ],
    heroCta: {
      primaryLabel: "Talk to Us About an AI Chatbot",
    },
    sections: [
      {
        id: "conversations-dont-scale",
        eyebrow: "Why it matters",
        h2: "When Customer Conversations Don't Scale",
        paragraphs: [
          { text: "The same handful of questions get asked over and over. Response times slip during busy periods. Enquiries that arrive outside business hours wait until the next working day. And leads sometimes reach your team without enough information to act on quickly." },
          { text: "None of this reflects a lack of effort — it's what happens when customer conversations depend entirely on people being available at the right moment." },
        ],
        bullets: [
          "Repetitive questions consuming team time",
          "Slow response times during busy periods",
          "Enquiries arriving outside business hours",
          "Teams repeatedly searching for the same information",
          "Leads arriving without enough qualification detail",
          "Information fragmented across documents, people and systems",
          "Inconsistent answers depending on who responds",
          "Website visitors leaving without finding what they needed",
        ],
      },
      {
        id: "capabilities",
        eyebrow: "What it can do",
        h2: "What an AI Chatbot Can Do",
        paragraphs: [
          { text: "Depending on how it's scoped, an AI chatbot can:" },
        ],
        bullets: [
          "Answer common questions accurately",
          "Guide visitors to the right service or page",
          "Explain services or products in plain language",
          "Collect lead information",
          "Qualify enquiries against criteria that matter to your business",
          "Route requests to the right team or process",
          "Search your approved business knowledge for an answer",
          "Assist a support team rather than replace it",
          "Trigger workflows through integrations, where scoped",
          "Escalate a conversation to a human when appropriate",
        ],
        afterBullets: [
          { text: "What a specific chatbot actually supports depends on the implementation, the data sources connected to it, the integrations scoped, and your business requirements — not every chatbot automatically does everything on this list." },
        ],
      },
      {
        id: "custom-development",
        eyebrow: "Our approach",
        h2: "Custom AI Chatbot Development",
        paragraphs: [
          { text: "A chatbot dropped onto a website without strategy tends to produce generic, sometimes unhelpful answers — which damages trust rather than building it." },
          { text: "OMSA designs chatbots around:" },
        ],
        bullets: [
          "Business objectives",
          "Real user intent",
          "Approved knowledge sources",
          "Conversation design",
          "Escalation rules",
          "Integrations, where scoped",
          "Security and privacy considerations",
          "Measurement",
          "Continuous improvement",
        ],
        afterBullets: [
          { text: "That's the difference between a chatbot that represents your business well and a chat widget that technically works but doesn't actually help anyone." },
        ],
      },
      {
        id: "customer-support",
        eyebrow: "Customer support",
        h2: "AI Chatbots for Customer Support",
        paragraphs: [
          { text: "For support use cases, a chatbot can typically handle frequently asked questions, service information, basic troubleshooting and policy or information lookups — then categorize and route anything it can't resolve." },
          { text: "Not every conversation should be automated. Sensitive requests, complaints and high-stakes decisions generally need human review, and a well-designed chatbot is built to recognize that and hand off rather than attempt an answer it isn't equipped to give." },
          { text: "AI is not infallible, and a responsible implementation plans for its limits rather than assuming it will always get things right." },
        ],
      },
      {
        id: "lead-generation",
        eyebrow: "Lead generation",
        h2: "AI Chatbots for Lead Generation",
        paragraphs: [
          { text: "A chatbot can engage website visitors in real time, identify what they're actually looking for, and collect the contact and qualification information your sales process needs." },
          { text: "Asking the right qualifying questions — rather than a generic contact form — can help route enquiries to the right person with useful context already attached, though the effect on conversion varies by business and isn't something we'll promise a specific number for." },
          { text: "Where a lead needs to trigger a workflow — a CRM entry, a notification, a follow-up sequence — that connects directly into your broader automation setup.", link: { anchor: "broader automation setup", link: { kind: "service", slug: "business-automation" } } },
        ],
      },
      {
        id: "knowledge-based",
        eyebrow: "Grounded in your content",
        h2: "Knowledge-Based AI Assistants",
        paragraphs: [
          { text: "A chatbot is only as useful as what it's allowed to know. We ground assistants in approved business information — website content, FAQs, service details, internal documentation and policies where appropriate — rather than letting it improvise." },
          { text: "The goal of grounding is more relevant, more controlled answers. It reduces the risk of the assistant inventing information, though no responsible provider can claim that risk is eliminated entirely." },
          { text: "That makes source quality, permissions, keeping information current, thorough testing and clear fallback behaviour genuinely important parts of the build — not optional extras." },
        ],
      },
      {
        id: "website-chatbots",
        eyebrow: "On your website",
        h2: "Website AI Chatbots",
        paragraphs: [
          { text: "Where a chatbot lives on your website, how it's placed and how it behaves matters as much as what it can answer — visitors judge it within the first exchange or two." },
          { text: "We consider placement, mobile usability, conversation flow, lead capture, page context where relevant, human handoff, and how its performance is measured." },
          { text: "A chatbot doesn't require a full website redesign to add — it can be scoped as its own project on your existing site, or planned alongside broader website work.", link: { anchor: "broader website work", link: { kind: "service", slug: "website-design" } } },
        ],
      },
      {
        id: "integrations-automation",
        eyebrow: "Integrations & automation",
        h2: "Chatbot Integrations and Business Automation",
        paragraphs: [
          { text: "Depending on your requirements, a chatbot can connect to a CRM, email, lead systems, scheduling tools, internal databases, APIs or analytics platforms. Which integrations make sense depends entirely on your systems and the project scope — we don't assume a fixed set of connections before understanding what you actually use." },
          { text: "Conversation can become the front end of a larger workflow: a customer asks a question, intent is identified, information is collected, the request is categorized, a business workflow is triggered, and your team receives it already structured." },
          { text: "That kind of automation is designed with oversight in place, not as a fully unattended process — where deeper workflow needs exist, that's the territory our Business Automation work covers.", link: { anchor: "Business Automation", link: { kind: "service", slug: "business-automation" } } },
        ],
      },
      {
        id: "english-arabic-chatbots",
        eyebrow: "English & Arabic",
        h2: "English and Arabic AI Chatbots",
        paragraphs: [
          { text: "For businesses in Oman, the UAE and the wider GCC, customers may reach out in English, Arabic, or a mix of both — and expect the conversation to make sense in either." },
          { text: "That requires the assistant to understand business terminology and context in both languages, not just perform a literal translation. We don't claim perfect handling of every dialect or expression — language models vary in how well they perform across languages, and multilingual capability needs to be designed, tested and evaluated for your specific use case rather than assumed by default." },
        ],
      },
      {
        id: "oman-uae-gcc-chatbots",
        eyebrow: "Oman, UAE & GCC",
        h2: "AI Chatbots for Oman, UAE and GCC Businesses",
        paragraphs: [
          { text: "Customers across Oman, the UAE and the wider GCC increasingly expect a fast digital response, mobile-first interactions, and service information available outside standard business hours." },
          { text: "A chatbot can help meet that expectation — handling initial enquiries, providing information and capturing leads while your team is unavailable — without claiming to replace the judgment a person brings to a genuinely complex conversation." },
          { text: "We don't have regional adoption figures to quote, and we won't invent them. What we can offer is a chatbot built around how your specific customers actually reach out." },
        ],
      },
      {
        id: "human-ai-workflows",
        eyebrow: "Human + AI",
        h2: "Human + AI Workflows",
        paragraphs: [
          { text: "The strongest chatbot implementations aren't the ones that try to automate everything — they're the ones that clearly define what the AI should handle and exactly when a human needs to take over." },
          { text: "That includes rules for uncertainty, sensitive requests, complaints, complex sales conversations and high-value enquiries, along with clear permissions for what the assistant is and isn't allowed to do." },
          { text: "We treat AI as part of a designed service workflow — not a replacement for human judgment where judgment is actually needed." },
        ],
      },
      {
        id: "security-responsible-ai",
        eyebrow: "Security & responsibility",
        h2: "AI Chatbot Security and Responsible Implementation",
        paragraphs: [
          { text: "A chatbot should only be connected to the data it genuinely needs, with knowledge sources and access permissions deliberately controlled rather than left broad by default." },
          { text: "That includes decisions about conversation logging, minimizing unnecessary data exposure, thorough testing before launch, clear fallback behaviour when the assistant is uncertain, and a defined path to human escalation." },
          { text: "We can't offer absolute security guarantees or legal compliance guarantees — no implementation can responsibly promise that. What we can commit to is designing with these considerations addressed deliberately, including any requirements specific to the platform or vendor involved." },
        ],
      },
    ],
    benefitsEyebrow: "What you receive",
    benefitsHeading: "What You Receive",
    benefitsIntro: "The exact scope depends on your use case, but a professional OMSA AI chatbot engagement can include:",
    benefits: [
      "A chatbot use-case strategy",
      "Conversation architecture and intent mapping",
      "Knowledge-source planning",
      "Chatbot implementation",
      "Website integration",
      "Workflow or API integration, where scoped",
      "Lead capture configuration, where scoped",
      "Human handoff logic",
      "Testing and guardrails",
      "Deployment support",
      "Measurement recommendations",
      "Documentation, where appropriate",
    ],
    process: [
      { step: "Business & Use-Case Discovery", detail: "We start with the conversations that actually matter to your business — support, lead qualification, information delivery — rather than trying to automate everything at once." },
      { step: "Conversation & User Intent Mapping", detail: "We map the real questions and intents your customers bring, and design conversation flows around them." },
      { step: "Knowledge & Data Planning", detail: "We identify the approved content and information sources the assistant should draw from, and how they'll stay current." },
      { step: "Chatbot Architecture", detail: "We define how the assistant is structured — knowledge retrieval, guardrails, escalation logic and integration points." },
      { step: "Development & Integration", detail: "The assistant is built and connected to your website and, where scoped, your CRM or other systems." },
      { step: "Testing & Guardrails", detail: "We test conversations, edge cases and fallback behaviour before launch, and set boundaries on what the assistant will and won't attempt." },
      { step: "Deployment", detail: "A phased rollout lets us monitor real conversations early and adjust before full launch." },
      { step: "Measurement & Improvement", detail: "We review performance against the goals it was built for, and refine the assistant as real conversations reveal gaps.", link: { anchor: "performance", link: { kind: "service", slug: "google-analytics" } } },
    ],
    postBenefitsSection: {
      id: "vs-rule-based",
      eyebrow: "Choosing the right approach",
      h2: "AI Chatbots vs. Basic Rule-Based Chatbots",
      paragraphs: [
        { text: "A basic rule-based chatbot follows predefined flows and fixed options — reliable and predictable, but limited to the exact paths it was built for." },
        { text: "An AI chatbot interprets natural language, understands context and draws on a knowledge base to respond more flexibly — which makes it better suited to open-ended questions a fixed flow can't anticipate." },
        { text: "Rule-based logic still has its place — for deterministic actions, compliance-sensitive flows and structured qualification steps where a predictable path matters more than flexibility. In practice, the strongest implementation often combines both, rather than treating them as competing options." },
      ],
    },
    whoForIntro: "OMSA AI Chatbots are suited to:",
    whoFor: [
      { title: "Service Businesses", body: "Companies fielding frequent, similar questions from prospective and existing customers." },
      { title: "Professional Firms", body: "Businesses where clients expect a fast, informed first response before a human conversation begins." },
      { title: "SMEs and Startups", body: "Teams that need to extend their availability without proportionally growing headcount." },
      { title: "Ecommerce Businesses", body: "Sites where product and order questions are frequent and often repetitive." },
      { title: "Hospitality Businesses", body: "Hotels and venues fielding enquiries about availability, services and bookings outside normal hours." },
      { title: "Support-Heavy Businesses", body: "Teams where a meaningful share of enquiries are repetitive and could be resolved without human intervention." },
      { title: "Businesses Generating Website Leads", body: "Companies that want to engage and qualify visitors in the moment, rather than relying solely on a static contact form." },
    ],
    preFaqSection: {
      id: "why-omsa",
      eyebrow: "Why OMSA",
      h2: "Why OMSA for AI Chatbots",
      paragraphs: [
        { text: "OMSA works at the intersection of AI, websites, automation and analytics — which matters, because a chatbot that isn't connected to the rest of your digital presence and workflows tends to become an isolated tool nobody quite trusts." },
        { text: "We don't add AI because it's fashionable. Every chatbot we design is built to solve a defined business or customer-experience problem — and if a simpler solution genuinely fits better, that's what we'll recommend." },
        { text: "We work with the practical context of Oman, the UAE and the GCC in mind, including bilingual conversation needs where they matter to your customers." },
        { text: "And we don't make claims we can't stand behind — no promises of guaranteed ROI, no claim of perfect AI accuracy, and no positioning ourselves as \"the leading AI company\" when that's not a claim anyone can substantiate." },
      ],
    },
    faqs: [
      { q: "What is an AI chatbot?", a: "An AI chatbot is a conversational assistant that uses natural-language understanding to interpret what a visitor is asking and respond based on approved business information, rather than following only a fixed set of predefined options." },
      { q: "How is an AI chatbot different from a basic chatbot?", a: "A basic rule-based chatbot follows predefined flows and fixed options. An AI chatbot interprets natural language and context, and can draw on a knowledge base to handle a wider range of questions — though rule-based logic still has a place for structured, deterministic steps." },
      { q: "Can an AI chatbot use information from my business?", a: "Yes. We ground chatbots in your approved content — website information, FAQs, service details and internal documentation where appropriate — so answers reflect your actual business rather than generic information." },
      { q: "Can the chatbot capture and qualify leads?", a: "Yes, when scoped for it. The chatbot can ask relevant qualifying questions, collect contact information and route enquiries to your team with useful context attached." },
      { q: "Can AI chatbots work in English and Arabic?", a: "Yes, when designed and tested for it. Multilingual conversations need to be built and evaluated for your specific use case — language models don't perform identically across every language or dialect, so this isn't something we assume by default." },
      { q: "Can a chatbot integrate with our existing systems?", a: "Depending on the project scope, a chatbot can integrate with your CRM, email, scheduling tools, internal databases or other systems through their APIs. The right integrations depend on what you actually use, which we scope during discovery rather than assuming in advance." },
      { q: "Will an AI chatbot replace our customer support team?", a: "No. A well-designed chatbot handles repetitive and well-defined questions, and is built to escalate to a human for sensitive, complex or high-value conversations. It's designed to support your team, not replace the judgment they bring." },
      { q: "How long does AI chatbot development take?", a: "Timelines depend on scope, the integrations required, the knowledge sources involved and the amount of testing needed. We can give you a realistic estimate once we understand what you're trying to accomplish." },
    ],
    finalCta: {
      heading: "Find Out Where Conversational AI Actually Helps Your Business",
      body: "Identify which conversations are repetitive, which enquiries should be automated, where customers struggle to get information, and which workflows could genuinely benefit from conversational AI. Let's work through it together.",
      primaryLabel: "Talk to Us About an AI Chatbot",
      secondaryLabel: "Explore Business Automation",
      secondaryLink: { kind: "service", slug: "business-automation" },
    },
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
