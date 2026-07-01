import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Clock } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import workAi from "@/assets/work-ai.jpg";
import workHotel from "@/assets/work-hotel.jpg";
import workDashboard from "@/assets/work-dashboard.jpg";
import workCorporate from "@/assets/work-corporate.jpg";
import workClinic from "@/assets/work-clinic.jpg";
import workRealestate from "@/assets/work-realestate.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — OMSA Digital & AI Studio Blog" },
      { name: "description", content: "Expert insights on web design, SEO, AI automation, Google Analytics, and digital growth strategies for businesses in Oman and the GCC." },
      { property: "og:title", content: "Insights — OMSA Digital & AI Studio Blog" },
      { property: "og:description", content: "Practical articles, case studies, and expert guides on websites, SEO, AI automation, analytics, and digital marketing." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const CATEGORIES = ["All", "SEO", "AI", "Digital Marketing", "Google Analytics", "Website Design", "Automation", "Business Growth"];

const POSTS = [
  { img: workAi, cat: "AI", title: "The honest case for AI assistants in luxury hospitality", date: "Jun 24, 2026", read: "8 min", excerpt: "Where AI genuinely improves the guest experience — and where it quietly damages your brand." },
  { img: workDashboard, cat: "Google Analytics", title: "GA4 for hotel marketers: the events that actually matter", date: "Jun 17, 2026", read: "6 min", excerpt: "A short, practical guide to the GA4 setup we use for hospitality clients." },
  { img: workHotel, cat: "SEO", title: "A local SEO playbook for hospitality brands in the GCC", date: "Jun 09, 2026", read: "10 min", excerpt: "How to build long-term visibility in markets where reputation, language and locality all matter." },
  { img: workCorporate, cat: "Website Design", title: "What actually makes a corporate website feel premium", date: "May 28, 2026", read: "7 min", excerpt: "It isn't typography. It isn't motion. It's something quieter — and harder to fake." },
  { img: workClinic, cat: "Business Growth", title: "How specialist clinics grow without buying every lead", date: "May 19, 2026", read: "9 min", excerpt: "The compounding economics of organic search, reputation, and a well-designed booking experience." },
  { img: workRealestate, cat: "Digital Marketing", title: "Real estate landing pages that convert above 10%", date: "May 06, 2026", read: "12 min", excerpt: "The five things every high-converting bilingual landing page in the UAE gets right." },
];

function BlogPage() {
  const featured = POSTS[0];
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="container-luxe">
          <p className="eyebrow">Insights</p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.02] max-w-4xl">
            Practical writing for <span className="text-gradient-gold">operators and owners.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Short, considered essays on AI, SEO, analytics, website design and growth — written to
            help you make better decisions, not to sell you a service.
          </p>
          <div className="mt-10 flex flex-wrap gap-2">
            {CATEGORIES.map((c, i) => (
              <button
                key={c}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                  i === 0
                    ? "border-[color:var(--gold)] bg-[color:var(--gold)] text-[color:var(--ink)]"
                    : "border-border hover:border-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-luxe">
          <Reveal>
            <article className="group grid overflow-hidden rounded-[2rem] border border-border bg-card lg:grid-cols-[1.2fr_1fr]">
              <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src={featured.img}
                  alt={featured.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="rounded-full bg-[color:var(--gold)]/15 text-[color:var(--gold-deep)] px-2.5 py-1 normal-case tracking-wide">
                    Featured · {featured.cat}
                  </span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {featured.read}</span>
                </div>
                <h2 className="mt-6 font-display text-3xl md:text-4xl font-bold tracking-tight">
                  {featured.title}
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  {featured.excerpt} A practical guide to deploying AI in five-star environments
                  without diluting the brand voice your guests recognise.
                </p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--gold-deep)]">
                  Read the article <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-luxe grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.slice(1).map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-luxe">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    <span className="text-[color:var(--gold-deep)]">{p.cat}</span>
                    <span>·</span>
                    <span>{p.date}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {p.read}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--gold)]" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
