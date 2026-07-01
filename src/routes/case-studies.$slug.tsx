import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, TrendingUp } from "lucide-react";
import { CASE_STUDIES, getCaseStudy } from "@/lib/case-studies-data";
import { SERVICE_DETAILS } from "@/lib/services-data";
import { abs, breadcrumbJsonLd, caseStudyJsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ params, loaderData }) => {
    const c = loaderData?.study;
    if (!c) return { meta: [{ title: "Case study — OMSA Digital & AI Studio" }] };
    const path = `/case-studies/${params.slug}`;
    const base = pageMeta({
      title: `${c.title} — Case Study | OMSA Digital & AI Studio`,
      description: c.excerpt,
      path,
      image: c.image,
      type: "article",
    });
    return {
      ...base,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            caseStudyJsonLd({
              title: c.title,
              description: c.excerpt,
              path,
              image: c.image,
              datePublished: c.datePublished,
              industry: c.industry,
            }),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Case Studies", path: "/case-studies" },
              { name: c.title, path },
            ]),
          ),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-luxe pt-40 pb-32">
      <p className="eyebrow">Case study not found</p>
      <h1 className="mt-6 font-display text-4xl font-bold">That story isn't here.</h1>
      <Link to="/case-studies" className="btn-gold mt-8 inline-flex">All case studies</Link>
    </div>
  ),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { study } = Route.useLoaderData();
  const related = study.relatedServices
    .map((s: string) => SERVICE_DETAILS.find((d) => d.slug === s))
    .filter(Boolean) as typeof SERVICE_DETAILS;
  const moreCases = CASE_STUDIES.filter((c) => c.slug !== study.slug).slice(0, 2);

  return (
    <>
      <nav aria-label="Breadcrumb" className="pt-32 pb-2">
        <div className="container-luxe">
          <ol className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link to="/case-studies" className="hover:text-foreground">Case Studies</Link></li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-foreground line-clamp-1">{study.title}</li>
          </ol>
        </div>
      </nav>

      <article className="pt-8 pb-24">
        <header className="container-luxe max-w-4xl">
          <p className="eyebrow">{study.industry} · {study.location}</p>
          <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            {study.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{study.excerpt}</p>
        </header>

        <figure className="container-luxe mt-12">
          <img
            src={study.image}
            alt={study.title}
            loading="eager"
            width={1600}
            height={900}
            className="aspect-[16/9] w-full rounded-[2rem] object-cover"
          />
        </figure>

        {/* Metrics band */}
        <div className="container-luxe mt-12">
          <div className="grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-3">
            {study.metrics.map((m: { k: string; v: string }) => (
              <div key={m.v} className="bg-background p-8">
                <TrendingUp className="h-5 w-5 text-[color:var(--gold-deep)]" />
                <div className="mt-4 font-display text-4xl font-bold tracking-tight text-gradient-gold">{m.k}</div>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{m.v}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="container-luxe mt-16 max-w-3xl space-y-12">
          {[
            { h: "The challenge", b: study.challenge },
            { h: "The strategy", b: study.strategy },
            { h: "The execution", b: study.execution },
            { h: "The results", b: study.results },
            { h: "Business value & lessons", b: study.lessons },
          ].map((s) => (
            <section key={s.h}>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">{s.h}</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">{s.b}</p>
            </section>
          ))}
        </div>
      </article>

      {related.length > 0 && (
        <aside className="section-pad bg-muted/30">
          <div className="container-luxe">
            <p className="eyebrow">Services involved</p>
            <h2 className="mt-5 font-display text-2xl md:text-3xl font-bold tracking-tight">
              What it took, in disciplines
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/services/$slug"
                  params={{ slug: r.slug }}
                  className="group block h-full rounded-3xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-[color:var(--gold)]"
                >
                  <h3 className="font-display text-base font-semibold tracking-tight">{r.name}</h3>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-[color:var(--gold-deep)]">
                    Explore <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      )}

      {moreCases.length > 0 && (
        <section className="section-pad">
          <div className="container-luxe">
            <p className="eyebrow">More client stories</p>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {moreCases.map((m: typeof CASE_STUDIES[number]) => (
                <Link
                  key={m.slug}
                  to="/case-studies/$slug"
                  params={{ slug: m.slug }}
                  className="group block overflow-hidden rounded-[2rem] border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-luxe"
                >
                  <img src={m.image} alt={m.title} loading="lazy" width={1200} height={800} className="aspect-[3/2] w-full object-cover" />
                  <div className="p-8">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--gold-deep)]">{m.industry} · {m.location}</p>
                    <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">{m.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-pad">
        <div className="container-luxe">
          <div className="rounded-[2rem] bg-[color:var(--ink)] text-white p-10 lg:p-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Want results like this for your business?
            </h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">
              Book a free strategy call. We'll review your current setup and send back a tailored growth plan.
            </p>
            <Link to="/contact" className="mt-8 inline-flex btn-gold">
              Book a Free Strategy Call <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export const __canonical = (slug: string) => abs(`/case-studies/${slug}`);
