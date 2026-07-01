import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { FaqItem } from "@/routes/index";
import { SERVICE_DETAILS, getService } from "@/lib/services-data";
import {
  abs,
  breadcrumbJsonLd,
  faqJsonLd,
  pageMeta,
  serviceJsonLd,
} from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: "Service — OMSA Digital & AI Studio" }] };
    const path = `/services/${params.slug}`;
    const base = pageMeta({
      title: s.metaTitle,
      description: s.metaDescription,
      path,
      type: "website",
    });
    return {
      ...base,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            serviceJsonLd({
              name: s.name,
              description: s.metaDescription,
              path,
              serviceType: s.name,
            }),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: s.name, path },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(faqJsonLd(s.faqs)),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-luxe pt-40 pb-32">
      <p className="eyebrow">Service not found</p>
      <h1 className="mt-6 font-display text-4xl font-bold">We don't offer that service — yet.</h1>
      <Link to="/services" className="btn-gold mt-8 inline-flex">All services</Link>
    </div>
  ),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const Icon = service.icon;
  const related = service.related
    .map((slug: string) => SERVICE_DETAILS.find((s) => s.slug === slug))
    .filter(Boolean) as typeof SERVICE_DETAILS;

  return (
    <>
      {/* Breadcrumb (visible) */}
      <nav aria-label="Breadcrumb" className="pt-32 pb-2">
        <div className="container-luxe">
          <ol className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-foreground">{service.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-8 pb-16">
        <div className="container-luxe">
          <p className="eyebrow">{service.category}</p>
          <div className="mt-6 flex items-start gap-6">
            <span className="hidden md:grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground shrink-0">
              <Icon className="h-6 w-6" />
            </span>
            <div>
              <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl">
                {service.name}
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{service.short}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Problem / Solution */}
      <section className="section-pad bg-muted/30">
        <div className="container-luxe grid gap-12 lg:grid-cols-2">
          <article>
            <p className="eyebrow">The problem</p>
            <h2 className="mt-5 font-display text-2xl md:text-3xl font-bold tracking-tight">
              Why this matters for your business
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">{service.problem}</p>
          </article>
          <article>
            <p className="eyebrow">Our approach</p>
            <h2 className="mt-5 font-display text-2xl md:text-3xl font-bold tracking-tight">
              How we solve it
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">{service.solution}</p>
          </article>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad">
        <div className="container-luxe">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
            What you can expect
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((b: string) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-6"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--gold)]" />
                <span className="text-sm text-foreground/85 leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-muted/30">
        <div className="container-luxe">
          <p className="eyebrow">How it runs</p>
          <h2 className="mt-5 font-display text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
            A clear, predictable process
          </h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.process.map((p: { step: string; detail: string }, i: number) => (
              <Reveal key={p.step} delay={i * 0.05}>
                <li className="h-full rounded-3xl border border-border bg-background p-8">
                  <span className="font-display text-4xl font-bold text-gradient-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{p.step}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.detail}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" id="faq">
        <div className="container-luxe grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-5 font-display text-3xl md:text-4xl font-bold tracking-tight">
              Frequently asked questions
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md">
              If your question isn't here, bring it to the strategy call — we'd rather discuss it openly.
            </p>
          </div>
          <div className="space-y-3">
            {service.faqs.map((f: { q: string; a: string }, i: number) => (
              <FaqItem key={f.q} item={f} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="section-pad bg-muted/30">
          <div className="container-luxe">
            <p className="eyebrow">Related services</p>
            <h2 className="mt-5 font-display text-3xl md:text-4xl font-bold tracking-tight">
              Often combined with
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((r) => {
                const RIcon = r.icon;
                return (
                  <Link
                    key={r.slug}
                    to="/services/$slug"
                    params={{ slug: r.slug }}
                    className="group block h-full rounded-3xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:border-[color:var(--gold)]"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground group-hover:bg-[color:var(--gold)] group-hover:text-[color:var(--ink)] transition-colors">
                      <RIcon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 font-display text-lg font-semibold tracking-tight">{r.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.short}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground/70 group-hover:text-[color:var(--gold-deep)]">
                      Learn more <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-pad">
        <div className="container-luxe">
          <div className="rounded-[2rem] border border-border bg-card p-10 lg:p-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Want to see what {service.name.toLowerCase()} could look like for your business?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Book a 30-minute strategy call. We'll review your current setup and send back a written plan within five working days.
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

// Keep canonical pointed at self even when route param invalid.
export const __canonical = (slug: string) => abs(`/services/${slug}`);
