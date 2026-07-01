export type ResourceCategory = "guides" | "checklists" | "templates" | "downloads" | "whitepapers" | "videos" | "glossary";

export const RESOURCE_CATEGORIES: { slug: ResourceCategory; label: string; description: string }[] = [
  { slug: "guides", label: "Guides", description: "Long-form playbooks on SEO, AI and digital growth." },
  { slug: "checklists", label: "Checklists", description: "Practical pre-launch, audit and optimisation checklists." },
  { slug: "templates", label: "Templates", description: "Plug-and-play templates for briefs, audits and reports." },
  { slug: "downloads", label: "Downloads", description: "Toolkits and reference assets you can keep." },
  { slug: "whitepapers", label: "Whitepapers", description: "Considered research on AI, search and the GCC market." },
  { slug: "videos", label: "Videos", description: "Short, focused conversations on growth and technology." },
  { slug: "glossary", label: "Glossary", description: "Plain-English definitions of the terms that matter." },
];

export type Resource = {
  slug: string;
  category: ResourceCategory;
  title: string;
  excerpt: string;
  status: "live" | "soon";
};

export const RESOURCES: Resource[] = [
  { slug: "pre-launch-website-checklist", category: "checklists", title: "The pre-launch website checklist", excerpt: "Forty-two items every premium website should pass before going live.", status: "soon" },
  { slug: "seo-audit-template", category: "templates", title: "SEO audit template for SMEs", excerpt: "A practical template covering technical, on-page, content and authority.", status: "soon" },
  { slug: "ga4-events-playbook", category: "guides", title: "GA4 events playbook for hospitality", excerpt: "The six events worth modelling — and how to wire them to revenue.", status: "soon" },
  { slug: "ai-readiness-whitepaper", category: "whitepapers", title: "AI readiness in GCC businesses 2026", excerpt: "Where AI is genuinely improving outcomes — and where it isn't.", status: "soon" },
];

export const getResource = (slug: string) => RESOURCES.find((r) => r.slug === slug);
export const getResourcesByCategory = (cat: ResourceCategory) => RESOURCES.filter((r) => r.category === cat);
