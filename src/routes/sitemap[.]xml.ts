import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_URL } from "@/lib/seo";
import { SERVICE_DETAILS } from "@/lib/services-data";
import { BLOG_POSTS } from "@/lib/blog-data";
import { CASE_STUDIES } from "@/lib/case-studies-data";
import { LOCATIONS } from "@/lib/content/locations";
import { INDUSTRY_PAGES } from "@/lib/content/industries";
import { RESOURCE_CATEGORIES, RESOURCES } from "@/lib/content/resources";
import { TOOLS } from "@/lib/content/tools";
import { AUTHORS } from "@/lib/content/authors";
import { ROLES } from "@/lib/content/careers";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "daily";
  priority?: string;
  lastmod?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticEntries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/industries", changefreq: "monthly", priority: "0.85" },
          { path: "/locations", changefreq: "monthly", priority: "0.85" },
          { path: "/portfolio", changefreq: "monthly", priority: "0.8" },
          { path: "/case-studies", changefreq: "monthly", priority: "0.8" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          { path: "/resources", changefreq: "weekly", priority: "0.7" },
          { path: "/tools", changefreq: "monthly", priority: "0.7" },
          { path: "/authors", changefreq: "monthly", priority: "0.5" },
          { path: "/careers", changefreq: "monthly", priority: "0.5" },
          { path: "/press", changefreq: "monthly", priority: "0.4" },
          { path: "/community", changefreq: "monthly", priority: "0.5" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
        ];

        const entries: SitemapEntry[] = [
          ...staticEntries,
          ...SERVICE_DETAILS.map((s) => ({ path: `/services/${s.slug}`, changefreq: "monthly" as const, priority: "0.85" })),
          ...INDUSTRY_PAGES.map((i) => ({ path: `/industries/${i.slug}`, changefreq: "monthly" as const, priority: "0.75" })),
          ...LOCATIONS.map((l) => ({ path: `/locations/${l.slug}`, changefreq: "monthly" as const, priority: "0.75" })),
          ...BLOG_POSTS.map((p) => ({ path: `/blog/${p.slug}`, changefreq: "monthly" as const, priority: "0.6", lastmod: p.date })),
          ...CASE_STUDIES.map((c) => ({ path: `/case-studies/${c.slug}`, changefreq: "monthly" as const, priority: "0.75", lastmod: c.datePublished })),
          ...RESOURCE_CATEGORIES.map((c) => ({ path: `/resources/${c.slug}`, changefreq: "monthly" as const, priority: "0.6" })),
          ...RESOURCES.map((r) => ({ path: `/resources/${r.category}/${r.slug}`, changefreq: "monthly" as const, priority: "0.5" })),
          ...TOOLS.map((t) => ({ path: `/tools/${t.slug}`, changefreq: "monthly" as const, priority: "0.6" })),
          ...AUTHORS.map((a) => ({ path: `/authors/${a.slug}`, changefreq: "monthly" as const, priority: "0.4" })),
          ...ROLES.map((r) => ({ path: `/careers/${r.slug}`, changefreq: "monthly" as const, priority: "0.4" })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${SITE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ].filter(Boolean).join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
