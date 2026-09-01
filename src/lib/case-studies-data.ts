import workHotel from "@/assets/work-hotel.jpg";
import workClinic from "@/assets/work-clinic.jpg";
import workRealestate from "@/assets/work-realestate.jpg";

// NOTE ON STATUS: none of the projects below correspond to a verified,
// named client engagement documented in this repository (no client name,
// contract reference, or independently verifiable data source exists for
// any of them). They are presented honestly as Concept Projects — realistic
// demonstrations of OMSA's approach to a category of business problem —
// rather than as completed client work. Do not add numeric outcome claims
// (%, x, revenue, leads, bookings) to this file without a verifiable source.
export type CaseStudy = {
  slug: string;
  industry: string;
  location: string;
  title: string;
  excerpt: string;
  image: string;
  datePublished: string;
  // Only set this when a case study has genuinely been revised with a known
  // date — never backfilled. Omitted, structured data falls back to
  // datePublished (see caseStudyJsonLd in lib/seo.ts).
  dateModified?: string;
  status: string; // e.g. "Concept Project" — see note above
  challenge: string;
  strategy: string;
  execution: string;
  results: string;
  lessons: string;
  metrics: { k: string; v: string }[];
  relatedServices: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "muscat-hotel-direct-bookings",
    industry: "Hospitality",
    location: "Muscat, Oman",
    title: "Direct-Booking Growth Concept — Five-Star Hotel, Muscat",
    excerpt:
      "A concept for rebuilding a luxury hotel's digital presence to reduce dependence on OTAs and strengthen direct revenue.",
    image: workHotel,
    datePublished: "2026-04-10",
    status: "Concept Project",
    challenge:
      "A property heavily reliant on third-party booking platforms, with weak organic visibility and no clear picture of where guests come from or why they convert.",
    strategy:
      "A brand-led website rebuild, a full technical SEO pass, a bilingual content programme, and a GA4 implementation connected to a booking AI assistant.",
    execution:
      "A ten-week engagement shape: technical SEO architecture across the site, structured data implementation, and a bilingual Arabic/English AI assistant for room and spa enquiries.",
    results:
      "This concept demonstrates how a brand-led rebuild, technical SEO and a connected booking assistant can work together to strengthen a property's own direct-booking channel and reduce reliance on third-party platforms.",
    lessons:
      "Hospitality direct-booking growth is rarely a marketing problem alone. It's the compounding effect of search, technical excellence, and a guest experience that earns the booking once attention is captured.",
    metrics: [
      { k: "Booking journey", v: "Rebuilt & connected to AI assistant" },
      { k: "Technical SEO", v: "Full-site architecture pass" },
      { k: "Content", v: "Bilingual Arabic/English programme" },
    ],
    relatedServices: ["website-design", "seo", "ai-chatbots", "google-analytics"],
  },
  {
    slug: "dubai-developer-landing-page",
    industry: "Real Estate",
    location: "Dubai, UAE",
    title: "Bilingual Landing-Page Concept — Dubai Development Launch",
    excerpt:
      "A concept for turning a generic launch page into a qualified-lead engine for a luxury residential development.",
    image: workRealestate,
    datePublished: "2026-03-02",
    status: "Concept Project",
    challenge:
      "High monthly ad spend producing low conversion. A generic landing experience, unqualified leads overwhelming the sales team, and unclear attribution.",
    strategy:
      "A custom bilingual landing page built around the buyer's decision criteria, a qualifying chatbot routed to WhatsApp, and a structured CRO testing programme.",
    execution:
      "An eight-week testing shape: multiple landing-page variants, lead-qualification questions embedded in the assistant flow, and routing logic to the appropriate sales agent by language and unit type.",
    results:
      "This concept demonstrates how a decision-criteria-led landing page, a WhatsApp-routed qualifying assistant and structured A/B testing can raise lead quality for a sales team, rather than simply adding more volume.",
    lessons:
      "Luxury real estate doesn't need more leads — it needs better ones. The landing page exists to filter, not to flatter.",
    metrics: [
      { k: "Landing page", v: "Buyer decision-criteria architecture" },
      { k: "Qualifying assistant", v: "WhatsApp-routed lead capture" },
      { k: "Testing", v: "Structured A/B programme" },
    ],
    relatedServices: ["website-design", "ai-chatbots", "google-analytics"],
  },
  {
    slug: "abu-dhabi-clinic-patient-acquisition",
    industry: "Healthcare",
    location: "Abu Dhabi, UAE",
    title: "Patient-Acquisition Concept — Specialist Clinic, Abu Dhabi",
    excerpt:
      "A concept for a modern digital presence built around the patient journey for a specialist clinic.",
    image: workClinic,
    datePublished: "2026-02-14",
    status: "Concept Project",
    challenge:
      "An outdated website, no local SEO presence, and a manual booking process limiting patient acquisition despite strong word-of-mouth.",
    strategy:
      "A conversion-focused website, a Local SEO programme, an AI booking assistant, and GA4 funnels mapped to the patient journey.",
    execution:
      "Service-page architecture aligned to high-intent search, an optimized Google Business Profile connected to a review-generation workflow, and appointment booking built into the website.",
    results:
      "This concept demonstrates how service pages aligned to search intent, an optimized Google Business Profile and a booking-capable AI assistant can work together to support patient discovery and free up front-desk time for clinical priorities — without suggesting AI replaces clinical judgment.",
    lessons:
      "Specialist healthcare grows on trust signals — clear expertise, accessible booking, and recent reviews. Build for those three and acquisition compounds.",
    metrics: [
      { k: "Service pages", v: "Aligned to patient search intent" },
      { k: "Google Business Profile", v: "Optimized & review workflow" },
      { k: "Booking", v: "AI-assisted appointment enquiries" },
    ],
    relatedServices: ["website-design", "local-seo", "ai-chatbots", "google-analytics"],
  },
];

export const getCaseStudy = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug);
