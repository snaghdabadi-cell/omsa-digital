export type Author = {
  slug: string;
  name: string;
  // Schema.org entity type this byline actually represents. "Organization"
  // for the shared editorial identity below (it IS OMSA, not a distinct
  // entity); "Person" is reserved for when a real named individual is
  // credited — never inferred from the name string, set explicitly per entry.
  type: "Organization" | "Person";
  role: string;
  bio: string;
  expertise: string[];
  social?: { linkedin?: string; twitter?: string };
};

export const AUTHORS: Author[] = [
  {
    slug: "omsa-editorial",
    name: "OMSA Digital & AI Studio Editorial",
    type: "Organization",
    role: "Editorial team",
    bio: "Strategists, engineers and designers writing about digital growth, AI and the GCC market.",
    expertise: ["Digital Strategy", "AI", "SEO", "Analytics"],
  },
];

export const getAuthor = (slug: string) => AUTHORS.find((a) => a.slug === slug);
