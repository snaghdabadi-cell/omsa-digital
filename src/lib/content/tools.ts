export type Tool = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: "live" | "beta" | "soon";
};

export const TOOLS: Tool[] = [
  {
    slug: "seo-audit",
    name: "SEO Audit Tool",
    tagline: "A free, instant audit of your website's SEO foundation.",
    description: "Enter a URL and receive a prioritised report on technical health, on-page signals and Core Web Vitals.",
    status: "soon",
  },
  {
    slug: "website-analyzer",
    name: "Website Analyzer",
    tagline: "Benchmark your website against the best in your category.",
    description: "Performance, accessibility, SEO and conversion signals scored against industry leaders.",
    status: "soon",
  },
  {
    slug: "ai-prompt-library",
    name: "AI Prompt Library",
    tagline: "Battle-tested prompts for marketing, ops and customer experience.",
    description: "A curated library of prompts used by our team across hospitality, real estate and healthcare clients.",
    status: "soon",
  },
  {
    slug: "marketing-templates",
    name: "Marketing Templates",
    tagline: "Briefs, calendars, audit and report templates.",
    description: "The same templates we use internally, free to adapt to your team.",
    status: "soon",
  },
  {
    slug: "business-calculators",
    name: "Business Calculators",
    tagline: "ROI, CAC and lifetime-value calculators tailored to the GCC.",
    description: "Decision-grade calculators for marketers, founders and CFOs.",
    status: "soon",
  },
];

export const getTool = (slug: string) => TOOLS.find((t) => t.slug === slug);
