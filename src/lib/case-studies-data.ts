import workHotel from "@/assets/work-hotel.jpg";
import workClinic from "@/assets/work-clinic.jpg";
import workRealestate from "@/assets/work-realestate.jpg";

export type CaseStudy = {
  slug: string;
  industry: string;
  location: string;
  title: string;
  excerpt: string;
  image: string;
  datePublished: string;
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
    title: "A five-star Muscat hotel triples direct bookings",
    excerpt:
      "Rebuilding a luxury hotel's digital presence to reduce dependence on OTAs and grow direct revenue.",
    image: workHotel,
    datePublished: "2026-04-10",
    challenge:
      "The property was heavily reliant on third-party booking platforms, with weak organic visibility and no clear picture of where guests came from or why they converted.",
    strategy:
      "A brand-led website rebuild, full technical SEO overhaul, a bilingual content programme, and a GA4 implementation connected to a booking AI assistant.",
    execution:
      "Delivered over ten weeks. More than 1,200 technical SEO issues resolved, structured data added across the site, and an Arabic/English AI assistant launched for room and spa reservations.",
    results:
      "Direct bookings tripled within six months, organic traffic grew over 4x, and cost per booking dropped by nearly two-thirds as direct channels overtook OTAs.",
    lessons:
      "Hospitality direct-booking growth is rarely a marketing problem alone. It's the compounding effect of search, technical excellence, and a guest experience that earns the booking once attention is captured.",
    metrics: [
      { k: "+312%", v: "Direct bookings" },
      { k: "+412%", v: "Organic traffic" },
      { k: "−63%", v: "Cost per booking" },
    ],
    relatedServices: ["website-design", "seo", "ai-chatbots", "google-analytics"],
  },
  {
    slug: "dubai-developer-landing-page",
    industry: "Real Estate",
    location: "Dubai, UAE",
    title: "A Dubai developer reaches 11.4% landing-page conversion",
    excerpt:
      "Turning a generic launch page into a qualified-lead engine for a luxury residential development.",
    image: workRealestate,
    datePublished: "2026-03-02",
    challenge:
      "High monthly ad spend was producing low conversion. The landing experience felt generic, unqualified leads overwhelmed the sales team, and attribution was unclear.",
    strategy:
      "A custom bilingual landing page built around the buyer's decision criteria, a qualifying chatbot routed to WhatsApp, and a structured CRO programme.",
    execution:
      "Seven A/B variants tested over eight weeks. Lead-qualification questions embedded into the assistant flow. Real-time routing to the appropriate sales agent by language and unit type.",
    results:
      "Conversion rate climbed to 11.4%, cost per lead fell by nearly half, and sales ROI more than tripled — driven mostly by the quality of the leads reaching the agents.",
    lessons:
      "Luxury real estate doesn't need more leads — it needs better ones. The landing page exists to filter, not to flatter.",
    metrics: [
      { k: "11.4%", v: "Conversion rate" },
      { k: "−48%", v: "Cost per lead" },
      { k: "3.2x", v: "Sales ROI" },
    ],
    relatedServices: ["website-design", "ai-chatbots", "google-analytics"],
  },
  {
    slug: "abu-dhabi-clinic-patient-acquisition",
    industry: "Healthcare",
    location: "Abu Dhabi, UAE",
    title: "An Abu Dhabi clinic grows qualified patient leads by 220%",
    excerpt:
      "A modern digital presence for a specialist clinic, rebuilt around the patient journey.",
    image: workClinic,
    datePublished: "2026-02-14",
    challenge:
      "An outdated website, no local SEO presence, and a manual booking process were limiting patient acquisition despite strong word-of-mouth.",
    strategy:
      "A conversion-focused website, a Local SEO authority programme, an AI booking assistant, and GA4 funnels mapped to the patient journey.",
    execution:
      "Service-page architecture aligned to high-intent search. Google Business Profile optimized and connected to a reputation engine. Real-time appointment booking inside the website.",
    results:
      "Qualified patient enquiries grew 220% in a single quarter. Review volume increased fivefold. The AI assistant resolves 92% of enquiries autonomously, freeing front-desk capacity.",
    lessons:
      "Specialist healthcare grows on trust signals — clear expertise, accessible booking, and recent reviews. Build for those three and acquisition compounds.",
    metrics: [
      { k: "+220%", v: "Qualified leads" },
      { k: "+5×", v: "Google reviews" },
      { k: "92%", v: "AI auto-resolution" },
    ],
    relatedServices: ["website-design", "local-seo", "ai-chatbots", "google-analytics"],
  },
];

export const getCaseStudy = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug);
