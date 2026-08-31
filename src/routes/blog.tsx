import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Clock } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { BLOG_POSTS } from "@/lib/blog-data";
import { isLeafMatch, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/blog")({
  head: ({ matches, match }) => {
    const meta = pageMeta({
      title: "Insights — OMSA Digital & AI Studio Blog",
      description: "Expert insights on web design, SEO, AI automation, Google Analytics, and digital growth strategies for businesses in Oman and the GCC.",
      path: "/blog",
    });
    return isLeafMatch(matches, match) ? meta : { ...meta, links: [] };
  },
  component: BlogPage,
});

const CATEGORIES = ["All", "SEO", "AI", "Digital Marketing", "Google Analytics", "Website Design", "Automation", "Business Growth"];

const formatPostDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

function BlogPage() {
  const isLeaf = useRouterState({ select: (s) => s.matches.at(-1)?.routeId === Route.id });
  if (!isLeaf) return <Outlet />;

  const featured = BLOG_POSTS[0];
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
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              aria-label={`Read article: ${featured.title}`}
              className="group grid overflow-hidden rounded-[2rem] border border-border bg-card lg:grid-cols-[1.2fr_1fr]"
            >
              <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src={featured.image}
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
                    Featured · {featured.category}
                  </span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {featured.readMinutes} min</span>
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
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-luxe grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.slice(1).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                aria-label={`Read article: ${p.title}`}
                className="group block h-full overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-luxe"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    <span className="text-[color:var(--gold-deep)]">{p.category}</span>
                    <span>·</span>
                    <span>{formatPostDate(p.date)}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {p.readMinutes} min</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--gold)]" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
