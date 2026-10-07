import type { Country, ServiceSlug } from "./taxonomy";
import type { ContentHub } from "./hub";

export type LocationFaq = { q: string; a: string };

export type Location = {
  slug: string;
  city: string;
  country: Country;
  region: "GCC";
  tagline: string;
  intro: string;
  services: ServiceSlug[];
  status: "live" | "soon";
  // Populated only for "live" cities with genuinely city-specific answers —
  // left undefined for "soon" cities rather than a templated placeholder.
  faqs?: LocationFaq[];
  // Slug of a CASE_STUDIES entry set in this same city, for one honest,
  // contextually relevant cross-link (never a fabricated relationship).
  relatedCaseStudySlug?: string;
  // Optional, for cities with a fuller search landing page. `h1` replaces
  // the templated heading (the city name is still highlighted within it).
  h1?: string;
  metaTitle?: string;
  metaDescription?: string; // overrides `tagline` in meta tags only
  hub?: ContentHub; // rendered after the intro
};

export const LOCATIONS: Location[] = [
  {
    slug: "muscat",
    city: "Muscat",
    country: "Oman",
    region: "GCC",
    tagline: "An AI digital growth partner for Muscat's most ambitious businesses.",
    intro: "Muscat is OMSA's home market. We help businesses across the city be found, understood and contacted through search, in Arabic, in English or in both, with websites, SEO, local search, analytics and AI working as one system. As search extends from ranked results into AI-generated answers, we build for both: the foundations traditional search still rewards, and the clear, consistent information AI systems draw on. Then we measure which searches actually turn into enquiries.",
    h1: "SEO and Digital Growth for Businesses in Muscat",
    metaTitle: "SEO & Digital Growth Agency in Muscat, Oman | OMSA",
    metaDescription:
      "SEO, local search and AI search visibility for Muscat businesses, in Arabic and English, measured by the enquiries it produces. OMSA is based in Muscat.",
    services: ["website-design", "seo", "local-seo", "ai-search-visibility", "ai-chatbots", "google-analytics"],
    hub: {
      h2: "How Muscat customers find a business, and what turns that into an enquiry",
      intro: [
        {
          text: "For most local businesses, being found in Muscat comes down to a few practical things: appearing when someone searches for your service in Google Search or Maps, giving them accurate, clear information in the language they searched in, and making it easy to call, message or visit. Our SEO work for Muscat businesses is built around those steps, not around rankings for their own sake.",
          link: { anchor: "SEO work for Muscat businesses", kind: "service", slug: "seo" },
        },
      ],
      stages: [
        {
          label: "01 · Local search",
          h3: "Google Search, Maps and your Business Profile",
          body: {
            text: "When someone nearby searches for a service, map results and Google Business Profile listings are often the first thing they see. Local SEO keeps that listing accurate and relevant.",
            link: { anchor: "Local SEO", kind: "service", slug: "local-seo" },
          },
          points: [
            "A complete Business Profile with the right category, hours and contact details",
            "A map pin that leads to the right building, not just the right area",
            "The same address everywhere, down to the way and building number",
            "Area names spelled the same way everywhere, since some have more than one English spelling, such as Seeb and As Seeb",
          ],
        },
        {
          label: "02 · Arabic and English",
          h3: "Two languages, two ways of searching",
          body: {
            text: "Arabic is Oman's official language and English is widely used in business, so a Muscat business may need to be found in both. A translated page isn't always written for how people actually search in Arabic.",
            link: { anchor: "how people actually search in Arabic", kind: "post", slug: "bilingual-seo-gcc-arabic-english" },
          },
          points: [
            "Arabic wording chosen for the terms people use when they search in Arabic",
            "An Arabic registered name and an English trading name clearly tied to the same business",
            "Phone numbers, addresses and opening hours that match in both languages",
          ],
        },
        {
          label: "03 · Technical foundations",
          h3: "Pages search engines can reach and understand",
          body: {
            text: "Strong content can't help if search engines can't crawl or index it. Technical SEO removes those barriers first.",
            link: { anchor: "Technical SEO", kind: "service", slug: "technical-seo" },
          },
          points: [
            "Important pages crawlable, indexable and listed in the sitemap",
            "Arabic and English versions of each page correctly linked to each other",
            "Pages that load quickly and read clearly on a phone",
          ],
        },
        {
          label: "04 · Enquiries",
          h3: "Measuring what search actually produces",
          body: {
            text: "Traffic only matters if it leads to calls, messages, bookings or visits. Tracking those actions shows which pages and searches are worth investing in, as our guide to conversion tracking explains.",
            link: { anchor: "conversion tracking", kind: "post", slug: "sme-conversion-tracking-google-site-kit" },
          },
          points: [
            "Calls, WhatsApp clicks and form submissions tracked by page",
            "Business Profile actions, such as calls and direction requests, read alongside website data",
            "Clear limits stated wherever an enquiry can't be traced to its source",
          ],
        },
      ],
      closing: {
        text: "AI-generated answers are an emerging way to discover businesses, in Google's AI features and in assistants such as ChatGPT. Nobody can guarantee that a business will be mentioned, but clear, matching details in Arabic and English give those systems less to get wrong. If you want to know how your business is described right now, that is what our AI Search Visibility reviews examine.",
        link: { anchor: "AI Search Visibility reviews", kind: "service", slug: "ai-search-visibility" },
      },
    },
    status: "live",
    relatedCaseStudySlug: "muscat-hotel-direct-bookings",
    faqs: [
      { q: "Does OMSA work with businesses based in Muscat?", a: "Yes. Muscat is OMSA's home market, and we work directly with businesses across the city on website design, SEO, AI chatbots and analytics." },
      { q: "Should a Muscat business have its website in Arabic, English or both?", a: "It depends on who your customers are and how they search. If you serve both Arabic- and English-speaking customers, separate pages written for each language usually work better than a single translated version, with the business name, address and contact details matching exactly across both." },
      { q: "Can you tell which enquiries came from Google Search or Google Maps?", a: "Often, for actions that happen on your website or Google Business Profile, such as form submissions, call and WhatsApp clicks, direction requests and website visits. Calls dialled directly and walk-in visits can't always be traced, and we report those limits rather than estimate them." },
      { q: "Can OMSA guarantee first-page rankings in Muscat?", a: "No. Search engines decide what they show, and nobody outside them can guarantee a position. What we commit to is a clear plan, honest reporting and work focused on the searches and actions that matter to your business." },
      { q: "How does a project with OMSA typically begin?", a: "With a strategy call to understand the business, its current website and marketing setup, and its goals — followed by a written plan before any work starts." },
      { q: "Can businesses in Muscat work with OMSA remotely?", a: "Yes. Most of the collaboration — calls, reviews and reporting — happens remotely, with in-person meetings arranged when useful." },
    ],
  },
  {
    slug: "salalah",
    city: "Salalah",
    country: "Oman",
    region: "GCC",
    tagline: "Digital growth strategy for Salalah's hospitality and tourism economy.",
    intro: "Seasonal demand requires year-round visibility. We build the systems that make it happen.",
    services: ["website-design", "seo", "local-seo"],
    status: "soon",
  },
  {
    slug: "sohar",
    city: "Sohar",
    country: "Oman",
    region: "GCC",
    tagline: "Industrial-grade websites and SEO for businesses in Sohar.",
    intro: "B2B, logistics and manufacturing brands need search visibility that translates into pipeline.",
    services: ["website-design", "seo", "technical-seo"],
    status: "soon",
  },
  {
    slug: "dubai",
    city: "Dubai",
    country: "UAE",
    region: "GCC",
    tagline: "Premium digital systems for Dubai's developers, hospitality groups and clinics.",
    intro: "From Downtown to Palm Jumeirah, we build bilingual platforms that perform in the world's most competitive market. Dubai's digital market is dense and highly competitive, so the businesses that stand out tend to be genuinely specific about who they serve — a developer, a clinic, a hospitality group — rather than speaking to everyone at once. Because the market spans Arabic and English speakers day to day, search visibility and content built to work naturally in both languages tend to reach a meaningfully wider audience.",
    services: ["website-design", "seo", "local-seo", "ai-chatbots", "business-automation", "google-analytics"],
    status: "live",
    relatedCaseStudySlug: "dubai-developer-landing-page",
    faqs: [
      { q: "Does OMSA work with businesses in Dubai?", a: "Yes. OMSA works with businesses in Dubai on website design, SEO, AI chatbots, business automation and analytics." },
      { q: "What digital services does OMSA provide for Dubai businesses?", a: "For Dubai, that typically includes website design, SEO and Local SEO, AI chatbots, business automation and Google Analytics — services chosen based on what the business actually needs, not a generic package." },
      { q: "Can OMSA provide SEO, website design and AI automation together for a Dubai business?", a: "Yes. These services are usually more effective coordinated as one strategy rather than run separately, and that's how a Dubai engagement is typically scoped." },
      { q: "Can businesses in Dubai work with OMSA remotely?", a: "Yes. Most of the day-to-day collaboration happens remotely, with meetings arranged as needed." },
    ],
  },
  {
    slug: "abu-dhabi",
    city: "Abu Dhabi",
    country: "UAE",
    region: "GCC",
    tagline: "Considered digital growth for Abu Dhabi's institutional and family businesses.",
    intro: "Long-term partnerships with brands building for the next decade, not the next quarter. Institutional and family-owned businesses here are often evaluated on credibility as much as capability, so a website and search presence need to read as considered and established rather than rushed. That same credibility should carry through to how the business is found — SEO, AI chatbots and analytics working together as one digital marketing approach, built for both traditional search and the AI-driven tools institutional buyers increasingly use to research and shortlist a company. Corporate and professional-services organisations in particular benefit from clear, bilingual information that holds up to scrutiny from local and international audiences alike.",
    services: ["website-design", "seo", "ai-chatbots", "google-analytics"],
    status: "live",
    relatedCaseStudySlug: "abu-dhabi-clinic-patient-acquisition",
    faqs: [
      { q: "Does OMSA work with businesses in Abu Dhabi?", a: "Yes. OMSA works with Abu Dhabi businesses on website design, SEO, AI chatbots and analytics." },
      { q: "What digital services does OMSA provide for Abu Dhabi businesses?", a: "For Abu Dhabi, that typically includes website design, SEO, AI chatbots and Google Analytics, scoped around the business's actual goals rather than a fixed package." },
      { q: "Does OMSA provide AI-supported SEO and digital marketing for Abu Dhabi businesses?", a: "Yes. For Abu Dhabi, we combine SEO, AI chatbots and analytics as the core of that work, with digital marketing support added where a business's goals call for it — scoped to help the company be found and evaluated well by both traditional search and the AI-driven tools increasingly used to research a business before making contact." },
      { q: "Can businesses in Abu Dhabi work with OMSA remotely?", a: "Yes. Most collaboration happens remotely, with in-person meetings arranged when useful." },
    ],
  },
  {
    slug: "sharjah",
    city: "Sharjah",
    country: "UAE",
    region: "GCC",
    tagline: "Bilingual digital systems for Sharjah's heritage and modern businesses.",
    intro: "Arabic-first content and search strategy for brands serving a culturally precise audience.",
    services: ["website-design", "seo", "local-seo"],
    status: "soon",
  },
  {
    slug: "doha",
    city: "Doha",
    country: "Qatar",
    region: "GCC",
    tagline: "AI-powered digital growth for Doha's premium business ecosystem.",
    intro: "Qatar's hospitality, real estate and professional-services sectors are scaling quickly, and the businesses that stand out are the ones with a fast, credible digital presence.",
    services: ["website-design", "seo", "ai-chatbots"],
    status: "soon",
  },
  {
    slug: "riyadh",
    city: "Riyadh",
    country: "Saudi Arabia",
    region: "GCC",
    tagline: "Enterprise-grade digital systems for Riyadh's Vision 2030 businesses.",
    intro: "Vision 2030's giga-projects and a fast-growing enterprise sector are raising the bar for corporate websites, analytics and automation across the capital.",
    services: ["website-design", "seo", "business-automation", "google-analytics"],
    status: "soon",
  },
];

export const getLocation = (slug: string) => LOCATIONS.find((l) => l.slug === slug);
