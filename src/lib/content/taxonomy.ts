// Shared taxonomy used by case studies, resources, industries and tools.
// Add a value here once and every filter, sitemap and schema picks it up.

export const INDUSTRIES = [
  "Hospitality",
  "Real Estate",
  "Healthcare",
  "Retail",
  "Professional Services",
  "Construction",
  "Education",
  "Finance",
  "Government",
] as const;
export type Industry = (typeof INDUSTRIES)[number];

export const COUNTRIES = ["Oman", "UAE", "Qatar", "Saudi Arabia", "Bahrain", "Kuwait"] as const;
export type Country = (typeof COUNTRIES)[number];

export const SERVICES = [
  "website-design",
  "seo",
  "technical-seo",
  "local-seo",
  "ai-chatbots",
  "business-automation",
  "google-analytics",
] as const;
export type ServiceSlug = (typeof SERVICES)[number];

export const TECHNOLOGIES = [
  "TanStack Start",
  "Next.js",
  "Shopify",
  "WordPress",
  "GA4",
  "GTM",
  "OpenAI",
  "WhatsApp Business",
  "HubSpot",
] as const;
export type Technology = (typeof TECHNOLOGIES)[number];

export const BUSINESS_GOALS = [
  "Direct Bookings",
  "Qualified Leads",
  "Brand Awareness",
  "Operational Efficiency",
  "Patient Acquisition",
  "Pipeline Growth",
] as const;
export type BusinessGoal = (typeof BUSINESS_GOALS)[number];
