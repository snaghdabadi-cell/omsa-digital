import type { Industry, ServiceSlug } from "./taxonomy";

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
};

export const INDUSTRY_PAGES: IndustryPage[] = [
  {
    slug: "hospitality",
    name: "Hospitality",
    tagline: "Luxury digital experiences that increase direct bookings and guest engagement.",
    description: "We build premium hotel websites, improve Google visibility, implement AI guest assistants, and create digital strategies that increase direct bookings across Oman and the UAE.",
    outcomes:
      "Hospitality businesses win or lose the booking decision long before a guest calls the front desk. A digital partner focuses on stronger direct discovery — a booking journey that's clear on mobile, local and destination search visibility that puts a property in front of travellers actually planning a stay, and multilingual guest communication that removes friction for international visitors. Where appropriate, that also means reducing dependency on third-party booking platforms by giving guests a reason to book direct. Analytics built around the actual booking and enquiry journey, paired with AI-assisted guest enquiries for common questions, gives a property a clearer picture of where interest comes from and where it's lost.",
    services: ["website-design", "seo", "ai-chatbots", "google-analytics"],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    tagline: "High-converting real estate websites designed to generate qualified buyers.",
    description: "Landing pages, AI lead qualification, CRM integrations, and SEO strategies that help developers and agencies generate more property enquiries.",
    outcomes:
      "For developers and agencies, the goal isn't more enquiries — it's more qualified ones. The priority is project and landing-page clarity that speaks to a specific buyer and unit type, structured lead capture that doesn't lose interest at the form, and local and search visibility that puts a development in front of people actually searching in that market. Automated enquiry qualification — asking the right questions before a lead reaches a sales agent — helps separate genuine interest from casual browsing, and campaign measurement shows which channels and pages are actually contributing. Where scoped, this can connect into existing CRM and workflow tools rather than replacing them.",
    services: ["website-design", "ai-chatbots", "google-analytics"],
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
