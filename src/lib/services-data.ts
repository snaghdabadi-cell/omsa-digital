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
