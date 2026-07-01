export type Role = {
  slug: string;
  title: string;
  team: "Engineering" | "Design" | "Strategy" | "Operations";
  location: string;
  type: "Full-time" | "Contract";
  status: "open" | "soon";
  summary: string;
};

export const ROLES: Role[] = [
  { slug: "senior-frontend-engineer", title: "Senior Frontend Engineer", team: "Engineering", location: "Remote · GCC time zone", type: "Full-time", status: "soon", summary: "Build premium digital systems with TanStack Start, React and modern motion design." },
  { slug: "seo-strategist", title: "SEO Strategist", team: "Strategy", location: "Muscat or Dubai", type: "Full-time", status: "soon", summary: "Lead SEO programmes for our hospitality and real estate clients across the GCC." },
  { slug: "brand-designer", title: "Brand Designer", team: "Design", location: "Remote · GCC time zone", type: "Full-time", status: "soon", summary: "Define brand systems and design languages for premium GCC businesses." },
];

export const getRole = (slug: string) => ROLES.find((r) => r.slug === slug);
