export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  social?: { linkedin?: string; twitter?: string };
};

export const AUTHORS: Author[] = [
  {
    slug: "omsa-editorial",
    name: "OMSA Digital & AI Studio Editorial",
    role: "Editorial team",
    bio: "Strategists, engineers and designers writing about digital growth, AI and the GCC market.",
    expertise: ["Digital Strategy", "AI", "SEO", "Analytics"],
  },
];

export const getAuthor = (slug: string) => AUTHORS.find((a) => a.slug === slug);
