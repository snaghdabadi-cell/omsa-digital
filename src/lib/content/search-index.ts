import { SERVICE_DETAILS } from "@/lib/services-data";
import { BLOG_POSTS } from "@/lib/blog-data";
import { CASE_STUDIES } from "@/lib/case-studies-data";
import { LOCATIONS } from "./locations";
import { INDUSTRY_PAGES } from "./industries";
import { RESOURCES } from "./resources";
import { TOOLS } from "./tools";

export type SearchEntry = {
  type: "Service" | "Article" | "Case Study" | "Location" | "Industry" | "Resource" | "Tool";
  title: string;
  excerpt: string;
  path: string;
  haystack: string;
};

export const SEARCH_INDEX: SearchEntry[] = [
  ...SERVICE_DETAILS.map((s) => ({ type: "Service" as const, title: s.name, excerpt: s.short, path: `/services/${s.slug}`, haystack: `${s.name} ${s.short} ${s.metaDescription}`.toLowerCase() })),
  ...BLOG_POSTS.map((p) => ({ type: "Article" as const, title: p.title, excerpt: p.excerpt, path: `/blog/${p.slug}`, haystack: `${p.title} ${p.excerpt} ${p.category}`.toLowerCase() })),
  ...CASE_STUDIES.map((c) => ({ type: "Case Study" as const, title: c.title, excerpt: c.excerpt, path: `/case-studies/${c.slug}`, haystack: `${c.title} ${c.excerpt} ${c.industry} ${c.location}`.toLowerCase() })),
  ...LOCATIONS.map((l) => ({ type: "Location" as const, title: `${l.city}, ${l.country}`, excerpt: l.tagline, path: `/locations/${l.slug}`, haystack: `${l.city} ${l.country} ${l.tagline}`.toLowerCase() })),
  ...INDUSTRY_PAGES.map((i) => ({ type: "Industry" as const, title: i.name, excerpt: i.tagline, path: `/industries/${i.slug}`, haystack: `${i.name} ${i.tagline} ${i.description}`.toLowerCase() })),
  ...RESOURCES.map((r) => ({ type: "Resource" as const, title: r.title, excerpt: r.excerpt, path: `/resources/${r.category}/${r.slug}`, haystack: `${r.title} ${r.excerpt} ${r.category}`.toLowerCase() })),
  ...TOOLS.map((t) => ({ type: "Tool" as const, title: t.name, excerpt: t.tagline, path: `/tools/${t.slug}`, haystack: `${t.name} ${t.tagline} ${t.description}`.toLowerCase() })),
];

export function searchSite(query: string, limit = 25): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const tokens = q.split(/\s+/).filter(Boolean);
  return SEARCH_INDEX
    .map((e) => ({ e, score: tokens.reduce((s, t) => s + (e.haystack.includes(t) ? 1 : 0), 0) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.e);
}
