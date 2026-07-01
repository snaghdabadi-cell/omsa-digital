// Centralized SEO helpers and structured-data factories.
// Keeps canonical/og:url consistent across every route.

export const SITE_URL = "https://premium-uae-growth.lovable.app";
export const SITE_NAME = "OMSA Digital & AI Studio";
export const SITE_LEGAL_NAME = "OMSA Digital & AI Studio";
export const SITE_LOCALE = "en_GB";
export const SITE_DESCRIPTION =
  "OMSA Digital & AI Studio helps businesses in Oman and the UAE grow through premium website development, SEO, AI solutions, automation, and digital marketing.";

export const CONTACT = {
  email: "omsadigitalstudio@gmail.com",
  phone: "+968 90980683",
  whatsapp: "+968 90980683",
  city: "Muscat",
  region: "Muscat",
  country: "OM",
};

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/company/aurumai-studio",
  instagram: "https://www.instagram.com/aurumai.studio",
  twitter: "https://twitter.com/aurumai_studio",
};

export const abs = (path: string) =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

/** Standard per-route head meta block — call inside head(). */
export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
}) {
  const url = abs(opts.path);
  const image = opts.image ? abs(opts.image) : undefined;
  const meta: Array<Record<string, string>> = [
    { title: opts.title },
    { name: "description", content: opts.description },
    { name: "robots", content: opts.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:type", content: opts.type ?? "website" },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: SITE_LOCALE },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: opts.title },
    { name: "twitter:description", content: opts.description },
  ];
  if (image) {
    meta.push({ property: "og:image", content: image });
    meta.push({ name: "twitter:image", content: image });
  }
  return { meta, links: [{ rel: "canonical", href: url }] };
}

/* ───────────────────── Structured data factories ───────────────────── */

export const organizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_LEGAL_NAME,
  alternateName: SITE_NAME,
  url: SITE_URL,
  logo: abs("/favicon.svg"),
  email: CONTACT.email,
  telephone: CONTACT.phone,
  description: SITE_DESCRIPTION,
  areaServed: [
    { "@type": "Country", name: "Oman" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "AdministrativeArea", name: "Gulf Cooperation Council" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Muscat",
    addressCountry: "OM",
  },
  sameAs: [SOCIAL.linkedin, SOCIAL.instagram, SOCIAL.twitter],
  knowsAbout: [
    "Website Design",
    "Search Engine Optimization",
    "Technical SEO",
    "Local SEO",
    "Google Analytics 4",
    "Conversion Rate Optimization",
    "AI Chatbots",
    "Business Automation",
    "Digital Marketing",
  ],
});

export const websiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "en-GB",
  publisher: { "@id": `${SITE_URL}/#organization` },
});

export const breadcrumbJsonLd = (items: Array<{ name: string; path: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: abs(it.path),
  })),
});

export const faqJsonLd = (items: Array<{ q: string; a: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const serviceJsonLd = (s: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.name,
  serviceType: s.serviceType ?? s.name,
  description: s.description,
  url: abs(s.path),
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: [
    { "@type": "Country", name: "Oman" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
});

export const articleJsonLd = (a: {
  title: string;
  description: string;
  path: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: a.title,
  description: a.description,
  mainEntityOfPage: abs(a.path),
  image: a.image ? abs(a.image) : undefined,
  datePublished: a.datePublished,
  dateModified: a.dateModified ?? a.datePublished,
  author: { "@type": "Organization", name: a.author ?? SITE_LEGAL_NAME },
  publisher: { "@id": `${SITE_URL}/#organization` },
});

export const caseStudyJsonLd = (c: {
  title: string;
  description: string;
  path: string;
  image?: string;
  datePublished: string;
  industry?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: c.title,
  description: c.description,
  about: c.industry,
  mainEntityOfPage: abs(c.path),
  image: c.image ? abs(c.image) : undefined,
  datePublished: c.datePublished,
  publisher: { "@id": `${SITE_URL}/#organization` },
});

/* ───────────────────── i18n helpers (architecture) ───────────────────── */

// Today only English is published. As Arabic / Persian ship, return the
// matching localized URL alternates. Used by per-route head().
export function hreflangLinks(path: string) {
  const url = abs(path);
  return [
    { rel: "alternate", hrefLang: "en", href: url },
    { rel: "alternate", hrefLang: "x-default", href: url },
  ];
}

export function breadcrumbsFor(path: string, labels: Record<string, string> = {}) {
  const parts = path.split("/").filter(Boolean);
  const items = [{ name: "Home", path: "/" }];
  let acc = "";
  for (const p of parts) {
    acc += `/${p}`;
    items.push({ name: labels[p] ?? p.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()), path: acc });
  }
  return breadcrumbJsonLd(items);
}
