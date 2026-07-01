import type { Industry, ServiceSlug } from "./taxonomy";

export type IndustryPage = {
  slug: string;
  name: Industry;
  tagline: string;
  description: string;
  services: ServiceSlug[];
};

export const INDUSTRY_PAGES: IndustryPage[] = [
  {
    slug: "hospitality",
    name: "Hospitality",
    tagline: "Luxury digital experiences that increase direct bookings and guest engagement.",
    description: "We build premium hotel websites, improve Google visibility, implement AI guest assistants, and create digital strategies that increase direct bookings across Oman and the UAE.",
    services: ["website-design", "seo", "ai-chatbots", "google-analytics"],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    tagline: "High-converting real estate websites designed to generate qualified buyers.",
    description: "Landing pages, AI lead qualification, CRM integrations, and SEO strategies that help developers and agencies generate more property enquiries.",
    services: ["website-design", "ai-chatbots", "google-analytics"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    tagline: "Professional healthcare websites that build trust and attract more patients.",
    description: "Medical websites, local SEO, appointment automation, AI assistants, and patient-focused digital experiences for modern clinics.",
    services: ["website-design", "local-seo", "ai-chatbots", "google-analytics"],
  },
  {
    slug: "retail",
    name: "Retail",
    tagline: "Modern e-commerce experiences that increase sales and customer loyalty.",
    description: "High-performance online stores, SEO, AI customer support, and analytics that help retail businesses grow faster across the GCC.",
    services: ["website-design", "seo", "google-analytics"],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    tagline: "Professional digital platforms that strengthen your brand and generate opportunities.",
    description: "Corporate websites, SEO, AI automation, and analytics solutions designed to improve visibility and business growth.",
    services: ["website-design", "seo", "technical-seo"],
  },
  {
    slug: "education",
    name: "Education",
    tagline: "Digital learning platforms that attract students and build credibility.",
    description: "Educational websites, SEO, AI chat assistants, and marketing systems that help schools, academies, and training centers grow online.",
    services: ["website-design", "seo", "ai-chatbots"],
  },
];

export const getIndustry = (slug: string) => INDUSTRY_PAGES.find((i) => i.slug === slug);
