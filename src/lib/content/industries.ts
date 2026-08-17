import type { Industry, ServiceSlug } from "./taxonomy";

export type IndustryUseCase = { title: string; body: string };
export type IndustryFaq = { q: string; a: string };

export type IndustryPage = {
  slug: string;
  name: Industry;
  tagline: string;
  description: string;
  // Concise business-outcome positioning: how a business in this industry
  // can improve by working with a digital, SEO and AI partner. Deliberately
  // avoids promised results, invented clients, or specific figures.
  outcomes: string;
  services: ServiceSlug[];

  // Optional deeper content, populated only for the highest-value industry
  // pages (currently Hospitality and Real Estate). Every other industry
  // renders fine without these — the route treats them as optional.
  challenges?: string[];
  useCases?: IndustryUseCase[];
  // Slug of a CASE_STUDIES entry to feature as a "Concept Project" example.
  caseStudySlug?: string;
  faqs?: IndustryFaq[];
};

export const INDUSTRY_PAGES: IndustryPage[] = [
  {
    slug: "hospitality",
    name: "Hospitality",
    tagline: "Luxury digital experiences that increase direct bookings and guest engagement.",
    description: "We build premium hotel websites, improve Google visibility, implement AI guest assistants, and create digital strategies that increase direct bookings across Oman and the UAE.",
    outcomes:
      "Hospitality businesses win or lose the booking decision long before a guest calls the front desk. A digital partner focuses on stronger direct discovery — a booking journey that's clear on mobile, local and destination search visibility that puts a property in front of travellers actually planning a stay, and multilingual guest communication that removes friction for international visitors. Where appropriate, that also means reducing dependency on third-party booking platforms by giving guests a reason to book direct. Analytics built around the actual booking and enquiry journey, paired with AI-assisted guest enquiries for common questions, gives a property a clearer picture of where interest comes from and where it's lost.",
    services: ["website-design", "seo", "local-seo", "ai-chatbots", "business-automation", "google-analytics"],
    challenges: [
      "Heavy dependence on third-party booking platforms for discovery",
      "Direct-booking journeys that lose guests between interest and a completed reservation",
      "Inconsistent property information across the website, listings and social channels",
      "Guest communication that only works reliably in one language",
      "Weak visibility for local and destination search — the searches travellers actually use before they book",
      "Guest enquiries arriving across email, phone, WhatsApp and social with no shared view of them",
      "Little visibility into where the booking journey actually breaks down",
    ],
    useCases: [
      { title: "Hotel Direct-Booking Website", body: "A website built around the booking decision — property presentation, room and rate clarity, and a booking journey designed to compete with third-party platforms rather than just describe the property." },
      { title: "Resort & Destination Local SEO", body: "Local and destination-focused SEO that puts a property in front of travellers searching for the area, not just the brand name." },
      { title: "Multilingual Guest Chatbot", body: "An AI assistant that answers common guest questions — availability, amenities, policies — in more than one language, with a clear handoff to a person when a request needs one." },
      { title: "Booking Enquiry Automation", body: "Structured routing and qualification for enquiries arriving outside the booking engine, so requests reach the right team quickly instead of sitting in a shared inbox." },
      { title: "GA4 Booking-Journey Measurement", body: "Analytics built around the actual booking funnel — from arrival to enquiry to confirmed booking — so a property can see where guests are lost, not just how much traffic arrives." },
    ],
    caseStudySlug: "muscat-hotel-direct-bookings",
    faqs: [
      { q: "Can a hotel website actually reduce dependence on OTAs?", a: "A stronger direct-booking experience won't eliminate third-party platforms, but a clear, fast, trustworthy booking journey combined with local search visibility gives guests a genuine reason to book direct instead of defaulting to an OTA." },
      { q: "Is local SEO worth it for a single-property hotel?", a: "Yes, particularly for destination and \"near me\" style searches. A well-maintained Google Business Profile and location-relevant content help a property appear for the searches travellers actually use while planning or arriving." },
      { q: "Can an AI assistant handle guest enquiries in Arabic and English?", a: "Yes, where it's built on the property's own information and set up to hand off to a person for anything nuanced — availability edge cases, complaints or special requests." },
      { q: "Do we need a new website to start improving bookings?", a: "Not always. If the existing site can support a clear booking journey and local SEO foundations, improvements can start there — a rebuild is only necessary when the current site can't support those changes." },
      { q: "How is success measured for a hospitality digital project?", a: "Through analytics built around the actual booking journey — enquiry volume, booking-engine completion and where visitors drop off — rather than traffic alone." },
      { q: "Is the Muscat hotel example a real client project?", a: "No — it's a concept case study that demonstrates OMSA's approach to a realistic hospitality scenario. It's clearly labelled a Concept Project, not a verified client engagement." },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    tagline: "High-converting real estate websites designed to generate qualified buyers.",
    description: "Landing pages, AI lead qualification, CRM integrations, and SEO strategies that help developers and agencies generate more property enquiries.",
    outcomes:
      "For developers and agencies, the goal isn't more enquiries — it's more qualified ones. The priority is project and landing-page clarity that speaks to a specific buyer and unit type, structured lead capture that doesn't lose interest at the form, and local and search visibility that puts a development in front of people actually searching in that market. Automated enquiry qualification — asking the right questions before a lead reaches a sales agent — helps separate genuine interest from casual browsing, and campaign measurement shows which channels and pages are actually contributing. Where scoped, this can connect into existing CRM and workflow tools rather than replacing them.",
    services: ["website-design", "seo", "local-seo", "digital-marketing", "ai-chatbots", "google-analytics"],
    challenges: [
      "High competition for the same searches across developers and agencies",
      "Paid campaign traffic arriving with no qualification, overwhelming the sales team with low-intent leads",
      "Weak development and project landing pages that don't match what the campaign promised",
      "Property information that's unclear, outdated or inconsistent across channels",
      "No structured way to qualify a lead before it reaches an agent",
      "Buyer journeys that only work in one language in a genuinely bilingual market",
      "Enquiries arriving across forms, calls, WhatsApp and portals with no shared view of them",
      "Limited visibility into which channels and pages are actually producing genuine buyer interest",
    ],
    useCases: [
      { title: "Property Launch Landing Pages", body: "Landing pages built around a specific development and buyer decision criteria, so paid and organic traffic arrives somewhere designed to convert it, not a generic listings page." },
      { title: "Development SEO", body: "Search visibility for a specific development and its surrounding area, aligned to how buyers actually search — by project, by area and by unit type." },
      { title: "Multilingual Buyer Enquiry Chatbot", body: "An assistant that answers common buyer questions and qualifies interest in English or Arabic before routing the enquiry to a sales agent." },
      { title: "Automated Lead Routing", body: "Enquiries qualified and routed to the right agent by language, unit type or project — instead of arriving in one shared inbox for manual sorting." },
      { title: "GA4 Campaign Measurement", body: "Campaign and landing-page performance tracked through GA4, so budget decisions are based on lead quality and cost efficiency, not raw click volume." },
    ],
    caseStudySlug: "dubai-developer-landing-page",
    faqs: [
      { q: "Can you help reduce unqualified leads from paid campaigns?", a: "Yes — this is usually addressed through landing-page clarity and qualification questions built into the enquiry or chatbot flow, so a sales team spends time on genuinely interested buyers." },
      { q: "Do you build landing pages for individual property launches?", a: "Yes. Campaign-specific landing pages are typically more effective than sending traffic to a general listings page, since they can speak directly to one development and buyer profile." },
      { q: "Can enquiries be automatically routed by language or unit type?", a: "Yes, where it's scoped as part of a lead-automation setup — routing logic can direct enquiries to the right agent based on the information a buyer provides." },
      { q: "Do you work with developers and agencies outside Dubai?", a: "Yes. OMSA works with developers and agencies across Oman, the UAE and the wider GCC, adapting the strategy to each market's competition and buyer behaviour." },
      { q: "How do you measure real estate campaign performance?", a: "Through GA4 tracking connected to the actual enquiry and qualification journey — cost per qualified lead and landing-page performance, not just clicks or impressions." },
      { q: "Is the Dubai development example a real client project?", a: "No — it's a concept case study illustrating OMSA's approach to a realistic real estate scenario, clearly labelled a Concept Project rather than verified client work." },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    tagline: "Professional healthcare websites that build trust and attract more patients.",
    description: "Medical websites, local SEO, appointment automation, AI assistants, and patient-focused digital experiences for modern clinics.",
    outcomes:
      "Patients typically research before they book, and a clinic's website is often the first real impression of quality and trust. The focus is clear service information that helps patients understand what a clinic offers, local visibility for the searches that matter, and an appointment journey that's simple to complete on any device. Multilingual information supports patients who search or communicate in more than one language, and analytics built around the discovery-to-appointment journey shows where that process breaks down. AI-assisted enquiries can handle common questions and booking requests responsibly — always as support for the clinical and administrative team, never as a substitute for clinical judgment.",
    services: ["website-design", "local-seo", "ai-chatbots", "google-analytics"],
  },
  {
    slug: "retail",
    name: "Retail",
    tagline: "Modern e-commerce experiences that increase sales and customer loyalty.",
    description: "High-performance online stores, SEO, AI customer support, and analytics that help retail businesses grow faster across the GCC.",
    outcomes:
      "Retail and e-commerce growth depends on how easily a customer can find the right product and complete a purchase without friction. The focus is category and site architecture that makes product discovery intuitive, technical SEO that keeps product and category pages properly indexed and competitive in search, and conversion journeys designed around how people actually browse and buy. Analytics tracks the full path from discovery to checkout, not just traffic volume, and automation — from abandoned-cart follow-ups to customer support — helps a retailer respond consistently without adding headcount for every interaction.",
    services: ["website-design", "seo", "google-analytics"],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    tagline: "Professional digital platforms that strengthen your brand and generate opportunities.",
    description: "Corporate websites, SEO, AI automation, and analytics solutions designed to improve visibility and business growth.",
    outcomes:
      "For legal, consulting and other professional-services firms, a website's job is to convert expertise into trust before the first conversation happens. The focus is clear service architecture that helps prospective clients understand exactly what a firm handles, local SEO for the searches that bring in genuinely relevant enquiries, and lead capture designed for how professional buyers actually evaluate a firm — carefully, and usually over more than one visit. Enquiry automation can qualify and route new contacts before they reach a partner's inbox, and analytics shows which pages and channels are actually contributing to real enquiries rather than just traffic.",
    services: ["website-design", "seo", "technical-seo"],
  },
  {
    slug: "construction",
    name: "Construction",
    tagline: "Digital solutions that help construction companies win more projects and build trust.",
    description: "Professional construction websites, SEO, AI automation and lead generation systems designed for contractors, engineering firms and developers across Oman and the UAE.",
    outcomes:
      "Contractors, engineering firms and developers are often evaluated on trust and track record before a single conversation happens. The focus is a website that presents capability, project types and credentials clearly, technical SEO and local visibility for the tenders and enquiries that matter in a specific region, and structured lead-generation systems that route enquiries to the right team quickly. AI-assisted automation can help qualify project enquiries — scope, budget range, timeline — before they reach an estimator, and analytics shows which pages and channels are actually driving genuine project enquiries rather than general traffic.",
    services: ["website-design", "seo", "technical-seo", "google-analytics"],
  },
  {
    slug: "education",
    name: "Education",
    tagline: "Digital learning platforms that attract students and build credibility.",
    description: "Educational websites, SEO, AI chat assistants, and marketing systems that help schools, academies, and training centers grow online.",
    outcomes:
      "For schools, academies and training centres, a website often has to do two jobs at once: reassure parents or adult learners that a programme is credible, and make the enrolment process genuinely easy to start. The focus is clear, structured programme and course information, local and search visibility for the terms prospective students and parents actually search, and an enquiry-to-enrolment journey that doesn't lose interest in a long form. AI chat assistants can answer common admissions questions instantly, and analytics built around the enquiry journey shows which programmes, pages and channels are genuinely driving interest — not just general site traffic.",
    services: ["website-design", "seo", "ai-chatbots"],
  },
];

export const getIndustry = (slug: string) => INDUSTRY_PAGES.find((i) => i.slug === slug);
