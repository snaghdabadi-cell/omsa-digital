import type { Country, ServiceSlug } from "./taxonomy";

export type Location = {
  slug: string;
  city: string;
  country: Country;
  region: "GCC";
  tagline: string;
  intro: string;
  services: ServiceSlug[];
  status: "live" | "soon";
};

export const LOCATIONS: Location[] = [
  {
    slug: "muscat",
    city: "Muscat",
    country: "Oman",
    region: "GCC",
    tagline: "An AI digital growth partner for Muscat's most ambitious businesses.",
    intro: "From Qurum to Al Mouj, we help hotels, clinics, developers and retail groups build digital systems that compound for years.",
    services: ["website-design", "seo", "local-seo", "ai-chatbots", "google-analytics"],
    status: "live",
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
    intro: "From Downtown to Palm Jumeirah, we build bilingual platforms that perform in the world's most competitive market.",
    services: ["website-design", "seo", "local-seo", "ai-chatbots", "business-automation", "google-analytics"],
    status: "live",
  },
  {
    slug: "abu-dhabi",
    city: "Abu Dhabi",
    country: "UAE",
    region: "GCC",
    tagline: "Considered digital growth for Abu Dhabi's institutional and family businesses.",
    intro: "Long-term partnerships with brands building for the next decade, not the next quarter.",
    services: ["website-design", "seo", "ai-chatbots", "google-analytics"],
    status: "live",
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
    intro: "Coming soon — accepting strategy calls now.",
    services: ["website-design", "seo", "ai-chatbots"],
    status: "soon",
  },
  {
    slug: "riyadh",
    city: "Riyadh",
    country: "Saudi Arabia",
    region: "GCC",
    tagline: "Enterprise-grade digital systems for Riyadh's Vision 2030 businesses.",
    intro: "Coming soon — accepting strategy calls now.",
    services: ["website-design", "seo", "business-automation", "google-analytics"],
    status: "soon",
  },
];

export const getLocation = (slug: string) => LOCATIONS.find((l) => l.slug === slug);
