// Small, footer-only mirror of the {name, slug} pairs used for internal
// linking. The full catalogs (services-data.ts, industries.ts, locations.ts)
// carry long-form editorial copy for their own routes and are intentionally
// NOT imported here — Footer renders on every route via the root layout, so
// importing the full catalogs there would ship that entire editorial payload
// (150+ KB) into the shared bundle for every single page. Keep in sync with
// the source catalogs when a slug/name changes or a service/industry/city is
// added or removed.

export const SERVICE_NAV_LINKS = [
  { name: "Website Design", slug: "website-design" },
  { name: "SEO Services", slug: "seo" },
  { name: "Technical SEO", slug: "technical-seo" },
  { name: "Local SEO", slug: "local-seo" },
  { name: "AI Chatbots & Assistants", slug: "ai-chatbots" },
  { name: "Business Automation", slug: "business-automation" },
  { name: "Analytics & Tracking", slug: "google-analytics" },
  { name: "Digital Marketing", slug: "digital-marketing" },
];

// First 6 of INDUSTRY_PAGES, matching the previous INDUSTRY_PAGES.slice(0, 6).
export const INDUSTRY_NAV_LINKS = [
  { name: "Hospitality", slug: "hospitality" },
  { name: "Real Estate", slug: "real-estate" },
  { name: "Healthcare", slug: "healthcare" },
  { name: "Retail", slug: "retail" },
  { name: "Professional Services", slug: "professional-services" },
  { name: "Construction", slug: "construction" },
];

// First 6 of LOCATIONS, matching the previous LOCATIONS.slice(0, 6).
export const LOCATION_NAV_LINKS = [
  { name: "Muscat", slug: "muscat" },
  { name: "Salalah", slug: "salalah" },
  { name: "Sohar", slug: "sohar" },
  { name: "Dubai", slug: "dubai" },
  { name: "Abu Dhabi", slug: "abu-dhabi" },
  { name: "Sharjah", slug: "sharjah" },
];
