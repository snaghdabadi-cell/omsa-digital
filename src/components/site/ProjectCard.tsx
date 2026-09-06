import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import workRestaurant from "@/assets/work-restaurant.jpg";
import workCorporate from "@/assets/work-corporate.jpg";
import workDashboard from "@/assets/work-dashboard.jpg";
import { CASE_STUDIES } from "@/lib/case-studies-data";

// Kept in its own module (not exported from routes/index.tsx) so
// portfolio.tsx reusing this data for the /portfolio page doesn't
// transitively pull in the homepage route's other module-scope data
// (SERVICES, FAQS, etc.) into its own bundle.

// A deliberately small, honestly-labelled mix: three concept case studies
// (sourced directly from CASE_STUDIES so title/image/slug can never drift
// from the real case-study pages), one genuine OMSA internal product, and
// two clearly-labelled concept projects. No item claims a verified client
// relationship or a fabricated performance number.
type PortfolioLink =
  | { kind: "case-study"; slug: string }
  | { kind: "tool"; slug: string };

type Project = {
  img: string;
  title: string;
  category: string;
  services: string[];
  status: string;
  link?: PortfolioLink;
};

export const PROJECTS: Project[] = [
  {
    img: CASE_STUDIES[0].image,
    title: CASE_STUDIES[0].title,
    category: `${CASE_STUDIES[0].industry} · Concept Case Study`,
    services: ["Technical SEO", "Local SEO", "AI Booking Assistant"],
    status: "Concept Project",
    link: { kind: "case-study", slug: CASE_STUDIES[0].slug },
  },
  {
    img: CASE_STUDIES[1].image,
    title: CASE_STUDIES[1].title,
    category: `${CASE_STUDIES[1].industry} · Concept Case Study`,
    services: ["Landing Page", "CRO", "AI Qualifying Assistant"],
    status: "Concept Project",
    link: { kind: "case-study", slug: CASE_STUDIES[1].slug },
  },
  {
    img: CASE_STUDIES[2].image,
    title: CASE_STUDIES[2].title,
    category: `${CASE_STUDIES[2].industry} · Concept Case Study`,
    services: ["Website", "Local SEO", "GA4"],
    status: "Concept Project",
    link: { kind: "case-study", slug: CASE_STUDIES[2].slug },
  },
  {
    img: workDashboard,
    title: "OMSA SEO Audit Tool",
    category: "OMSA Internal Product",
    services: ["Technical SEO", "On-Page Review", "Prioritisation Framework"],
    status: "In Development",
    link: { kind: "tool", slug: "seo-audit" },
  },
  {
    img: workCorporate,
    title: "Persian Professional Services Website Concept",
    category: "Professional Services · Concept",
    services: ["Bilingual Architecture", "Technical SEO", "Lead Capture"],
    status: "Concept Project",
  },
  {
    img: workRestaurant,
    title: "Persian Local Business SEO Concept",
    category: "Local Business · Concept",
    services: ["Local Landing Pages", "Structured Data", "Search Visibility"],
    status: "Concept Project",
  },
];

export function ProjectCard({
  img, title, category, services, status, link,
}: { img: string; title: string; category: string; services: string[]; status: string; link?: PortfolioLink }) {
  const cardClass = "group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-luxe";
  const content = (
    <>
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          width={1200}
          height={900}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{category}</p>
        <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">{title}</h3>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {services.map((s) => (
            <span key={s} className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-foreground/70">
              {s}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <span className="text-sm font-semibold text-[color:var(--gold-deep)]">{status}</span>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--gold)]" />
        </div>
      </div>
    </>
  );

  if (link?.kind === "case-study") {
    return (
      <Link to="/case-studies/$slug" params={{ slug: link.slug }} className={`block ${cardClass}`}>
        {content}
      </Link>
    );
  }
  if (link?.kind === "tool") {
    return (
      <Link to="/tools/$slug" params={{ slug: link.slug }} className={`block ${cardClass}`}>
        {content}
      </Link>
    );
  }
  return <article className={cardClass}>{content}</article>;
}
