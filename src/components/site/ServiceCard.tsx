import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Globe, Search, Bot, BarChart3, Cpu, Megaphone } from "lucide-react";

// Kept in its own module (not exported from routes/index.tsx) so
// services.tsx reusing this teaser data for the /services hub doesn't
// transitively pull in the homepage route's other module-scope data
// (PROJECTS/CASE_STUDIES, FAQS, etc.) into its own bundle.
export const SERVICES = [
  { icon: Globe, title: "Web Design & Development", desc: "Custom, responsive, and SEO-ready websites built to strengthen your brand, improve user experience, and generate qualified leads.", slug: "website-design" },
  { icon: Search, title: "SEO & Search Visibility", desc: "Technical SEO, local SEO, and content strategies designed to improve rankings and attract customers across Oman, the UAE, and the GCC.", slug: "seo" },
  { icon: Bot, title: "AI Solutions & Chatbots", desc: "Custom AI chatbots and intelligent solutions that improve customer support, capture leads, and create better digital experiences.", slug: "ai-chatbots" },
  { icon: BarChart3, title: "Analytics & Performance", desc: "Accurate tracking, dashboards, and actionable insights that help you understand performance and make better business decisions.", slug: "google-analytics" },
  { icon: Cpu, title: "AI Automation", desc: "Smart workflows and system integrations that reduce repetitive work, improve response times, and increase operational efficiency.", slug: "business-automation" },
  { icon: Megaphone, title: "Digital Marketing", desc: "Google Ads, paid campaigns, social media marketing, and conversion strategies built to generate qualified leads.", slug: "digital-marketing" },
];

export function ServiceCard({
  icon: Icon,
  title,
  desc,
  tag,
  slug,
}: {
  icon: any;
  title: string;
  desc: string;
  tag?: string;
  slug?: string;
}) {
  const cardClassName = "group relative h-full rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--gold)] hover:shadow-luxe";
  const cardContent = (
    <>
      <div className="absolute right-6 top-6 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {tag}
      </div>
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground transition-colors group-hover:bg-[color:var(--gold)] group-hover:text-[color:var(--ink)]">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-7 font-display text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground/70 group-hover:text-[color:var(--gold-deep)]">
        View Service Details <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </>
  );

  if (slug) {
    return (
      <Link to="/services/$slug" params={{ slug }} className={`block ${cardClassName}`}>
        {cardContent}
      </Link>
    );
  }

  return <div className={cardClassName}>{cardContent}</div>;
}
