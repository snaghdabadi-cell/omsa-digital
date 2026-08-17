import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Tag } from "@/components/site/Primitives";
import { CASE_STUDIES } from "@/lib/case-studies-data";
import { abs, isLeafMatch } from "@/lib/seo";

export const Route = createFileRoute("/case-studies")({
  head: ({ matches, match }) => ({
    meta: [
      { title: "Case Studies — Concept Work for GCC Businesses" },
      { name: "description", content: "Concept case studies from OMSA Digital & AI Studio showing how we approach digital growth challenges for businesses across Oman and the GCC through web design, SEO and AI automation." },
      { property: "og:title", content: "Case Studies — OMSA Digital & AI Studio" },
      { property: "og:description", content: "Concept case studies: how OMSA approaches growth problems for GCC businesses." },
      { property: "og:url", content: abs("/case-studies") },
    ],
    links: isLeafMatch(matches, match) ? [{ rel: "canonical", href: abs("/case-studies") }] : [],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  const isLeaf = useRouterState({ select: (s) => s.matches.at(-1)?.routeId === Route.id });
  if (!isLeaf) return <Outlet />;

  return (
    <>
      <section className="pt-40 pb-16">
        <div className="container-luxe">
          <p className="eyebrow">Case studies</p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.02] max-w-4xl">
            Strategy you can <span className="text-gradient-gold">see.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Three concept case studies showing how OMSA approaches real business problems — in
            hospitality, real estate and healthcare — through website design, SEO and AI automation.
          </p>
        </div>
      </section>

      <section className="pb-32 space-y-10">
        <div className="container-luxe space-y-10">
          {CASE_STUDIES.map((c, i) => (
            <Reveal key={c.slug}>
              <Link
                to="/case-studies/$slug"
                params={{ slug: c.slug }}
                aria-label={`Read case study: ${c.title}`}
                className="block overflow-hidden rounded-[2rem] border border-border bg-card"
              >
                <div className="grid lg:grid-cols-2">
                  <div className={`relative ${i % 2 ? "lg:order-2" : ""}`}>
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-10 lg:p-16">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="eyebrow">{c.industry}</p>
                      <Tag>{c.status}</Tag>
                    </div>
                    <h2 className="mt-5 font-display text-3xl md:text-4xl font-bold tracking-tight">
                      {c.title}
                    </h2>

                    <div className="mt-8 space-y-5 text-sm text-muted-foreground leading-relaxed">
                      <div>
                        <div className="font-display text-foreground font-semibold">The challenge</div>
                        <p className="mt-1">{c.challenge}</p>
                      </div>
                      <div>
                        <div className="font-display text-foreground font-semibold">The strategy</div>
                        <p className="mt-1">{c.strategy}</p>
                      </div>
                      <div>
                        <div className="font-display text-foreground font-semibold">The implementation</div>
                        <p className="mt-1">{c.execution}</p>
                      </div>
                    </div>

                    <div className="mt-8 grid grid-cols-3 gap-3">
                      {c.metrics.map((m) => (
                        <div key={m.v} className="rounded-2xl bg-muted p-4">
                          <TrendingUp className="h-4 w-4 text-[color:var(--gold-deep)]" />
                          <div className="mt-3 font-display text-lg font-bold text-gradient-gold">
                            {m.k}
                          </div>
                          <p className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                            {m.v}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="container-luxe text-center">
          <Link to="/contact" className="inline-flex btn-gold">
            Start Your Growth Story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
