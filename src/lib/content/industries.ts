import type { Industry, ServiceSlug } from "./taxonomy";
import type { ContentHub } from "./hub";

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
  hub?: ContentHub; // rendered after the outcomes paragraph
  metaTitle?: string; // overrides the default "<name> — AI & Digital Growth Solutions | OMSA"
  metaDescription?: string; // overrides `description` in meta tags only
  // Optional closing CTA; defaults to "Discuss your project" -> plain /contact.
  // `source` must satisfy parseLeadSource (lib/lead-source.ts).
  cta?: { text?: string; label: string; source?: string };
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
    metaTitle: "Healthcare & Clinic SEO in Oman and the UAE | OMSA",
    metaDescription:
      "How patients find, trust and book a clinic, and what clinics in Oman and the UAE can do about treatments, doctors, insurance, Arabic search and bookings.",
    services: ["website-design", "seo", "local-seo", "ai-search-visibility", "ai-chatbots", "google-analytics"],
    hub: {
      h2: "How patients find, trust and book a clinic",
      intro: [
        { text: "Choosing a clinic is rarely one search. Patients pair a treatment or specialty with a location, check the doctor, look for reasons to trust the clinic, confirm practical details such as insurance, and then try to book. We think about it in four stages: Search, Trust, Decision and Booking. Patients drop out at each stage for reasons that usually have nothing to do with the quality of care: information that is missing, out of date or contradictory." },
        {
          text: "For the UAE in detail, including insurance-network searches, doctor profiles and healthcare advertising standards, see our guide to how patients find, evaluate and choose a clinic in the UAE.",
          link: { anchor: "how patients find, evaluate and choose a clinic in the UAE", kind: "post", slug: "seo-for-clinics-uae" },
        },
      ],
      stages: [
        {
          label: "01 · Search",
          h3: "Being found for the right treatment, place and language",
          body: {
            text: "Most clinic searches pair a need with a place, often in Google Maps first, and in Arabic as well as English. This is where clinic SEO does most of its work.",
            link: { anchor: "clinic SEO", kind: "service", slug: "seo" },
          },
          points: [
            "Treatment and specialty pages that use the words patients search with",
            "An accurate Google Business Profile for every branch",
            "Arabic pages written for Arabic searches, not translated word for word",
          ],
        },
        {
          label: "02 · Trust",
          h3: "Making doctors and facts verifiable",
          body: { text: "Health is a high-stakes topic, so patients look for information they can check. Details that differ between the website, Google and directories undermine trust quickly." },
          points: [
            "Doctor profiles linked to the treatments and branches they actually provide",
            "Titles and credentials that match what the health authority has licensed",
            "Clinical content reviewed and dated by a named clinician",
            "No guarantees, superlatives or patient stories used without consent",
          ],
        },
        {
          label: "03 · Decision",
          h3: "Answering the practical questions",
          body: { text: "Before booking, patients want to know whether the clinic works with their insurance, which branch suits them and when they can be seen." },
          points: [
            "Insurance details patients can confirm for the branch they plan to visit",
            "Which doctors are available at which branch",
            "Treatment FAQs built from the questions reception actually receives",
          ],
        },
        {
          label: "04 · Booking",
          h3: "Turning a decision into a measurable appointment",
          body: {
            text: "A patient who has decided should be able to book in one step, and the clinic should be able to see which journeys produce appointments. Setting up that measurement is part of our analytics work.",
            link: { anchor: "analytics work", kind: "service", slug: "google-analytics" },
          },
          points: [
            "Call, WhatsApp and booking actions on every treatment, doctor and branch page",
            "Booking routes that work on mobile and in Arabic",
            "Calls, WhatsApp messages and form requests measured by branch, without recording anything about a patient's health",
          ],
        },
      ],
      closing: {
        text: "AI assistants and Google's AI features increasingly summarise which clinics offer a treatment in an area. Nobody can guarantee that a clinic will be named or cited, but accurate, consistent information about its doctors, treatments, branches and insurance makes correct representation more likely. Our AI Search Visibility reviews check how a clinic is actually described, in English and Arabic.",
        link: { anchor: "AI Search Visibility reviews", kind: "service", slug: "ai-search-visibility" },
      },
    },
    challenges: [
      "Patients researching a clinic online before deciding whether to trust it enough to book",
      "Appointment booking that's difficult to complete outside phone calls during clinic hours",
      "Service and specialism information that's unclear or scattered across the website",
      "Local visibility that lags for the searches patients actually use — condition, specialism and location together",
      "Patient communication that only works reliably in one language",
      "Doctor, branch and contact details that differ between the website, Google profiles and directories",
      "Accepted insurance that patients can't easily confirm for a specific branch",
    ],
    caseStudySlug: "abu-dhabi-clinic-patient-acquisition",
    faqs: [
      { q: "Can an AI assistant handle patient enquiries safely?", a: "It can handle common, non-clinical questions — hours, services, appointment availability — and should always hand off to clinic staff for anything involving clinical judgment or urgent care. It's built as support for the team, not a substitute for it." },
      { q: "Is local SEO worth it for a single clinic?", a: "Yes, particularly for \"near me\" and specialism-plus-location searches. A well-maintained Google Business Profile combined with clear service pages helps a clinic appear for the searches patients actually use before booking." },
      { q: "Do we need a new website to start improving patient bookings?", a: "Not always — if the existing site can support a clearer appointment journey and local SEO foundations, improvements can often start there rather than a full rebuild." },
      { q: "How is success measured for a healthcare digital project?", a: "Through analytics built around the discovery-to-appointment journey — enquiry volume and where the process breaks down — rather than traffic alone." },
      { q: "Can you guarantee our clinic will rank on Google or appear in AI answers?", a: "No. Search engines and AI platforms decide what they show, and no one outside them can guarantee a ranking, a citation or a recommendation. What we can do is make accurate information about the clinic easier for patients and search systems to find and interpret, then measure whether patient enquiries improve." },
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    tagline: "Modern e-commerce experiences that increase sales and customer loyalty.",
    description: "High-performance online stores, SEO, AI customer support, and analytics that help retail businesses grow faster across the GCC.",
    outcomes:
      "Retail and e-commerce growth depends on how easily a customer can find the right product and complete a purchase without friction. The focus is category and site architecture that makes product discovery intuitive, technical SEO that keeps product and category pages properly indexed and competitive in search, and conversion journeys designed around how people actually browse and buy. Analytics tracks the full path from discovery to checkout, not just traffic volume, and automation — from abandoned-cart follow-ups to customer support — helps a retailer respond consistently without adding headcount for every interaction.",
    services: ["website-design", "seo", "google-analytics"],
    challenges: [
      "Customers unable to find the right product quickly, especially on mobile",
      "Category and product pages that aren't properly indexed or competitive in search",
      "Checkout journeys with unnecessary friction between browsing and purchase",
      "Abandoned carts with no consistent follow-up",
      "Limited visibility into which channels and pages actually drive purchases, not just traffic",
    ],
    faqs: [
      { q: "What's the first thing to fix for an underperforming online store?", a: "Usually site architecture and technical SEO — if product and category pages aren't properly indexed and easy to navigate, no amount of traffic will convert well." },
      { q: "Is automation useful for a smaller retail business?", a: "Yes, particularly abandoned-cart follow-ups and routine customer-support questions — it lets a small team respond consistently without needing to staff up for every interaction." },
      { q: "How do you measure whether an online store is actually improving?", a: "Through analytics that follow the full path from discovery to checkout, not just traffic volume, so decisions are based on where customers actually drop off." },
      { q: "Do you work with an existing e-commerce platform or only build new ones?", a: "Both — if the current platform can support clearer product and category architecture along with technical SEO improvements, upgrades can often start there rather than a full replatform." },
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    tagline: "SEO, websites and enquiry tracking for accounting, tax, legal, audit and consulting firms in Oman and the UAE.",
    description: "Clients of professional services firms usually search for a specific need, then check whether the firm behind the result is qualified to handle it. We build the service pages, local visibility and measurement that support that decision.",
    metaTitle: "Professional Services SEO & Websites in Oman and the UAE | OMSA",
    metaDescription:
      "SEO, websites and enquiry tracking for accounting, tax, legal, audit and consulting firms in Oman and the UAE, built around how clients verify expertise.",
    outcomes:
      "For accounting, tax, legal, audit and consulting firms, a website's job is to turn expertise into trust before the first conversation happens. Prospective clients usually arrive with a specific need, such as a Corporate Tax registration, a VAT return, a statutory audit, a commercial contract or a market-entry question, and they judge a firm on whether it clearly handles that need, who would handle it and whether its credentials can be checked. The focus is a service architecture that matches those needs, local visibility for the offices a firm actually operates, content written for both English and Arabic searches, and lead capture designed for how professional buyers evaluate a firm: carefully, and usually over more than one visit. Measurement then shows which pages and channels produce relevant enquiries rather than just traffic.",
    services: ["website-design", "seo", "local-seo", "ai-search-visibility", "technical-seo", "google-analytics"],
    hub: {
      h2: "What different professional services firms need from search",
      intro: [
        { text: "Professional services buyers rarely search for a \"firm\". They search for a problem, a regulation or a deadline, often with a place attached, and then check whether the firm behind the result is qualified to help. How that plays out differs by type of firm, and so do the places where websites most often fall short." },
        {
          text: "For accounting and tax practices in particular, our guide to SEO for accounting firms in the UAE works through Corporate Tax, VAT, audit and e-invoicing service pages in detail.",
          link: { anchor: "SEO for accounting firms in the UAE", kind: "post", slug: "seo-for-accounting-firms-uae" },
        },
      ],
      stages: [
        {
          label: "01 · Accounting & Tax Firms",
          h3: "Service pages that match the obligation the client is dealing with",
          body: { text: "Clients of accounting and tax practices usually search for a specific obligation, such as Corporate Tax registration, VAT filing or e-invoicing readiness, rather than for \"accounting services\". A single services page can't answer those questions precisely enough." },
          points: [
            "Separate pages for Corporate Tax, VAT, bookkeeping and e-invoicing support, where the firm genuinely provides each",
            "A clear statement of who each service is for, such as SMEs, free zone companies or groups",
            "Regulatory references linked to the Ministry of Finance or Federal Tax Authority, with a last-reviewed date",
            "Arabic pages that use the tax terms clients and official sources actually use, not word-for-word translations",
          ],
        },
        {
          label: "02 · Legal Services",
          h3: "Practice areas explained in the client's terms",
          body: { text: "People looking for a lawyer usually describe a situation, such as an employment dispute, a commercial contract or a company setup, rather than a practice-area name. They also need to know where a firm is able to act for them." },
          points: [
            "Practice-area pages that describe the kinds of matters handled, without promising outcomes",
            "An accurate statement of the jurisdictions and courts the firm works in",
            "Lawyer profiles with verifiable qualifications, admissions and languages",
            "Content checked against the advertising and conduct rules of the firm's licensing authority",
          ],
        },
        {
          label: "03 · Audit & Advisory",
          h3: "Credentials buyers can verify before they shortlist",
          body: { text: "Audit and advisory work is often bought by finance teams, boards or investors who shortlist carefully. They look for the registrations an engagement depends on, relevant sector experience and the people who would lead the work." },
          points: [
            "Audit services presented alongside the registrations they rely on, stated exactly as registered",
            "Partner and team profiles that show qualifications and sector focus",
            "Sector pages only where the firm has real experience to describe",
            "Key service information kept on indexable pages rather than only in PDFs or gated downloads",
          ],
        },
        {
          label: "04 · Business Consulting",
          h3: "Showing a method, not a list of buzzwords",
          body: { text: "Consulting firms compete on how they think. Generic pages about \"strategy\" and \"transformation\" give a buyer nothing to evaluate; a concrete description of the problems handled and how an engagement runs does." },
          points: [
            "Service pages organised around client problems, such as market entry, restructuring or process improvement",
            "A described engagement process: discovery, deliverables, typical timeline and who is involved",
            "Articles that answer questions clients actually ask, written or reviewed by the consultants themselves",
            {
              text: "Bilingual content for markets where decision-makers search in Arabic as well as English",
              link: { anchor: "Bilingual content", kind: "post", slug: "bilingual-seo-gcc-arabic-english" },
            },
          ],
        },
        {
          label: "05 · Search Visibility & Trust",
          h3: "Being found, and being consistent wherever you're found",
          body: {
            text: "Before contacting a firm, most buyers check it in more than one place: Google Search, Google Maps, directories, LinkedIn and, increasingly, AI assistants. Details that differ between them weaken trust. This is where Local SEO and broader search work meet.",
            link: { anchor: "Local SEO", kind: "service", slug: "local-seo" },
          },
          points: [
            "An accurate Google Business Profile for each office the firm actually operates",
            "Firm name, address, licence details and partner names consistent across the website, profiles and directories",
            {
              text: "A periodic check of how AI assistants describe the firm, in English and Arabic",
              link: { anchor: "how AI assistants describe the firm", kind: "service", slug: "ai-search-visibility" },
            },
            "No rankings, outcomes or \"best firm\" claims the firm can't substantiate",
          ],
        },
        {
          label: "06 · Qualified Enquiry Tracking",
          h3: "Measuring enquiries that fit the firm, not just traffic",
          body: {
            text: "A professional services firm needs relevant enquiries, not a high visit count. Measurement should show which pages and channels produce them, without recording confidential details. Our guide to GA4 for professional services firms explains the approach.",
            link: { anchor: "GA4 for professional services firms", kind: "post", slug: "ga4-professional-services-gcc" },
          },
          points: [
            "Form submissions, calls, WhatsApp clicks and email clicks tracked by landing page",
            "Enquiry forms that ask about the service, type of entity and timing, so fit can be judged before the first call",
            "Source information passed into the inbox or CRM, where the firm's systems allow it",
            {
              text: "Analytics configured so client names and matter details never reach GA4",
              link: { anchor: "Analytics configured", kind: "service", slug: "google-analytics" },
            },
          ],
        },
      ],
      closing: {
        text: "OMSA operates from Oman and works with firms across Muscat and the UAE, including Dubai, Abu Dhabi, Sharjah and Al Ain, remotely. Each location page describes how search works in that market.",
        links: [
          { anchor: "Muscat", kind: "location", slug: "muscat" },
          { anchor: "Dubai", kind: "location", slug: "dubai" },
          { anchor: "Abu Dhabi", kind: "location", slug: "abu-dhabi" },
          { anchor: "Sharjah", kind: "location", slug: "sharjah" },
          { anchor: "Al Ain", kind: "location", slug: "al-ain" },
        ],
      },
    },
    challenges: [
      "A single \"Our Services\" page that lists tax, audit and advisory work without explaining any of it",
      "Enquiries that don't show whether a prospective client is a good fit before the first call",
      "Regulatory content that goes out of date when a deadline passes or a rule changes",
      "Partner credentials and registrations that clients can't easily verify",
      "Arabic pages translated from English rather than written for Arabic searches",
      "Office details that differ between the website, Google Business Profile and directories",
      "No clear way to see which pages or channels produce genuine client enquiries",
    ],
    faqs: [
      { q: "How long does SEO take for a professional services firm?", a: "There's no fixed timeline. Fixes to technical issues or a Google Business Profile can be reflected relatively quickly once search engines process them, while visibility for competitive service searches usually builds over months. It depends on the firm's starting point, its competition and how much genuinely useful content it can publish. Tracking enquiries along the way shows whether the work is heading in the right direction." },
      { q: "Should an accounting firm have separate pages for Corporate Tax, VAT and e-invoicing?", a: "Usually, where the firm genuinely provides each service and clients look for them separately. Each page can then explain who the service is for, what the engagement involves and which official requirements it relates to. Thin pages created for every keyword variation are harder to keep accurate and add little for clients." },
      { q: "Can enquiry forms be set up to qualify prospective clients before a call?", a: "Yes — the right qualifying questions can be built into a form or chatbot flow so a partner's time is spent on genuinely relevant enquiries." },
      { q: "Do you write the service content yourselves or work from what we provide?", a: "Both are possible, depending on how much existing material accurately reflects the firm's expertise. Either way, anything that states a tax, legal or regulatory position should be reviewed and approved by the firm's own qualified professionals before it's published." },
      { q: "Do you provide tax, accounting or legal advice?", a: "No. OMSA works on websites, search visibility and measurement. Statements about tax, legal or regulatory requirements on a firm's website should come from, and be approved by, the firm itself." },
      { q: "Is local SEO relevant for a firm that serves clients regionally, not just locally?", a: "It can still matter for firms with a physical office or a specific service area, alongside broader SEO for clients searching beyond that area." },
      { q: "Can you guarantee our firm will rank on Google or appear in AI answers?", a: "No. Search engines and AI platforms decide what they show, and no one outside them can guarantee a ranking, a citation or a recommendation. What we can do is make accurate information about the firm easier for clients and search systems to find and interpret, then measure whether relevant enquiries improve." },
    ],
    cta: {
      text: "A Search Visibility Review looks at how your firm appears in Google Search, Google Maps and AI assistants, in English and Arabic, and where the path from search to enquiry breaks down.",
      label: "Request a Search Visibility Review",
      source: "industry-professional-services",
    },
  },
  {
    slug: "construction",
    name: "Construction",
    tagline: "Digital solutions that help construction companies win more projects and build trust.",
    description: "Professional construction websites, SEO, AI automation and lead generation systems designed for contractors, engineering firms and developers across Oman and the UAE.",
    outcomes:
      "Contractors, engineering firms and developers are often evaluated on trust and track record before a single conversation happens. The focus is a website that presents capability, project types and credentials clearly, technical SEO and local visibility for the tenders and enquiries that matter in a specific region, and structured lead-generation systems that route enquiries to the right team quickly. AI-assisted automation can help qualify project enquiries — scope, budget range, timeline — before they reach an estimator, and analytics shows which pages and channels are actually driving genuine project enquiries rather than general traffic.",
    services: ["website-design", "seo", "technical-seo", "google-analytics"],
    challenges: [
      "A website that doesn't clearly present capability, project types or credentials",
      "Tenders and enquiries missed because of weak local and technical search visibility",
      "Project and case-study pages that are outdated or difficult to maintain",
      "Enquiries arriving with unclear scope, budget or timeline before reaching an estimator",
      "Limited visibility into which channels are producing genuine project enquiries versus general traffic",
    ],
    faqs: [
      { q: "What matters most for a construction company's website?", a: "Clear presentation of capability, project types and credentials, combined with technical SEO so the site is actually found for the tenders and searches that matter in a specific region." },
      { q: "Can enquiries be qualified before reaching an estimator?", a: "Yes — scope, budget range and timeline can be captured upfront through a structured form or automated qualification step, so estimators spend time on genuinely viable projects." },
      { q: "How important is technical SEO compared to general SEO for construction firms?", a: "Both matter, but technical SEO tends to matter more early on — if a site has crawl or indexing issues, content and local visibility improvements won't be seen by search engines in the first place." },
      { q: "Is this a one-time project or ongoing work?", a: "It depends on the goal — a technical foundation and initial content are typically a defined project, while search visibility and lead generation tend to benefit from ongoing attention." },
    ],
  },
  {
    slug: "education",
    name: "Education",
    tagline: "Digital learning platforms that attract students and build credibility.",
    description: "Educational websites, SEO, AI chat assistants, and marketing systems that help schools, academies, and training centers grow online.",
    outcomes:
      "For schools, academies and training centres, a website often has to do two jobs at once: reassure parents or adult learners that a programme is credible, and make the enrolment process genuinely easy to start. The focus is clear, structured programme and course information, local and search visibility for the terms prospective students and parents actually search, and an enquiry-to-enrolment journey that doesn't lose interest in a long form. AI chat assistants can answer common admissions questions instantly, and analytics built around the enquiry journey shows which programmes, pages and channels are genuinely driving interest — not just general site traffic.",
    services: ["website-design", "seo", "ai-chatbots"],
    challenges: [
      "Programme and course information that's unclear or hard to compare",
      "An enrolment journey that loses interest partway through a long form",
      "Admissions questions arriving by phone or email with no faster alternative",
      "Local and search visibility that lags for the specific programmes prospective students search for",
      "Limited visibility into which programmes and pages are actually driving enquiries",
    ],
    faqs: [
      { q: "Can an AI assistant actually help with admissions?", a: "Yes, for common questions — programme details, fees, deadlines, application steps — with a clear handoff to admissions staff for anything requiring judgment or a personal conversation." },
      { q: "How specific should programme pages be?", a: "Specific enough that a prospective student or parent can tell exactly what a programme covers and who it's for — generic descriptions tend to lose interest faster than concrete ones." },
      { q: "Is local SEO relevant for schools and training centres?", a: "Yes, particularly for location-plus-programme searches — families and adult learners often search for a specific course type near them." },
      { q: "How is success measured for an education digital project?", a: "Through the enquiry-to-enrolment journey — which programmes and pages are actually driving genuine interest, not just overall site traffic." },
    ],
  },
];

export const getIndustry = (slug: string) => INDUSTRY_PAGES.find((i) => i.slug === slug);

// Reverse lookup for the industry<->case-study relationship already encoded
// by `caseStudySlug` above — used to link a case study or location page back
// to whichever industry page actually features that case study, without a
// second, separately-maintained mapping that could drift out of sync.
export const getIndustryByCaseStudySlug = (slug: string) =>
  INDUSTRY_PAGES.find((i) => i.caseStudySlug === slug);
