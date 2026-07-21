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
  process: { step: string; detail: string }[];
  faqs: { q: string; a: string }[];
  related: string[]; // slugs
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "website-design",
    name: "Website Design",
    short: "A digital platform that attracts, educates and converts visitors into customers.",
    icon: Globe,
    category: "Build",
    metaTitle: "Premium Website Design in Oman & UAE — OMSA Digital & AI Studio",
    metaDescription:
      "Brand-led, conversion-focused website design for hotels, real estate, clinics and corporate groups across Oman, the UAE and the GCC. Built for speed, search and revenue.",
    problem:
      "Most business websites are made to look good in a slide deck, not to do commercial work. Visitors leave, search engines ignore them, and the marketing budget runs into a brand asset that doesn't generate revenue.",
    solution:
      "We design websites as commercial instruments — a precise architecture, a brand-led visual system, a conversion-focused experience, and engineering that respects Core Web Vitals from day one. Bilingual English and Arabic by default.",
    benefits: [
      "Higher conversion from existing traffic",
      "Faster pages and stronger Core Web Vitals",
      "Bilingual experience with native-quality copy",
      "Easy content management without developer dependency",
      "Built for SEO, AI search, speed and long-term growth",
    ],
    process: [
      { step: "Discovery", detail: "Business goals, decision-makers, customer journey, and what success will look like in twelve months." },
      { step: "Architecture", detail: "Sitemap, content model, and URL structure built around how your customers actually search." },
      { step: "Design", detail: "A brand-led visual system applied to every key page, with motion, type and imagery considered." },
      { step: "Build", detail: "Engineered for speed, accessibility and maintainability — SEO and analytics laid in from the first sprint." },
      { step: "Launch & optimize", detail: "A monitored release with zero downtime, then conversion experiments informed by real data." },
    ],
    faqs: [
      { q: "How long does a website project take?", a: "A premium website typically runs six to ten weeks from discovery to launch, depending on scope, content readiness and integrations." },
      { q: "Do you write the content?", a: "Yes. Strategy, structure and copywriting are handled in-house. We can also collaborate with your existing writers and brand team." },
      { q: "Is the site easy to update?", a: "Yes. We build on modern CMS platforms so your team can add content, swap images and publish pages without engineering support." },
      { q: "Will it support Arabic and English?", a: "Fully. Bilingual sites are designed with proper RTL support and locale-aware SEO from the start, not retrofitted later." },
    ],
    related: ["seo", "google-analytics", "ai-chatbots"],
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
