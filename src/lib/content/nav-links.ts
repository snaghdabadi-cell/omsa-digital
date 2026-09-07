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

// All 7 of INDUSTRY_PAGES — every industry page is live/indexable (none are
// noindexed or placeholder), so all of them belong in the footer.
export const INDUSTRY_NAV_LINKS = [
  { name: "Hospitality", slug: "hospitality" },
  { name: "Real Estate", slug: "real-estate" },
  { name: "Healthcare", slug: "healthcare" },
  { name: "Retail", slug: "retail" },
  { name: "Professional Services", slug: "professional-services" },
  { name: "Construction", slug: "construction" },
  { name: "Education", slug: "education" },
];

// The 6 Oman/UAE LOCATIONS (both "live" and "soon" status — Salalah/Sohar/
// Sharjah are "soon" but already followed this precedent before this file
// existed). Deliberately NOT including Doha (Qatar) or Riyadh (Saudi
// Arabia): both are also "soon"/noindexed, but promoting them into the
// site-wide footer would be the first place Qatar/Saudi Arabia appear in
// primary navigation, ahead of the Organization schema's own areaServed
// (Oman, UAE, GCC-as-a-region only — see organizationJsonLd in lib/seo.ts)
// and the site description. That's a bigger claim about where OMSA
// currently operates than the rest of the site makes. They remain reachable
// (and correctly noindexed) via the /locations hub.
export const LOCATION_NAV_LINKS = [
  { name: "Muscat", slug: "muscat" },
  { name: "Salalah", slug: "salalah" },
  { name: "Sohar", slug: "sohar" },
  { name: "Dubai", slug: "dubai" },
  { name: "Abu Dhabi", slug: "abu-dhabi" },
  { name: "Sharjah", slug: "sharjah" },
];
