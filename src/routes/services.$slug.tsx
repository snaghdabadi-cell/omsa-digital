import type { ReactNode } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { FaqItem } from "@/routes/index";
import {
  SERVICE_DETAILS,
  getService,
  type AnchorLink,
  type ContentLink,
  type EditorialSection,
} from "@/lib/services-data";
import {
  abs,
  breadcrumbJsonLd,
  faqJsonLd,
  pageMeta,
  serviceJsonLd,
} from "@/lib/seo";

// Resolves a ContentLink to the actual typed route. Kept as a closed switch
// so every destination this page can render is one of the app's real routes.
function ContentAnchor({
  link,
  label,
  className,
}: {
  link: ContentLink;
  label: string;
  className: string;
}) {
  switch (link.kind) {
    case "service":
      return (
        <Link to="/services/$slug" params={{ slug: link.slug }} className={className}>
          {label}
        </Link>
      );
    case "tool":
      return (
        <Link to="/tools/$slug" params={{ slug: link.slug }} className={className}>
          {label}
        </Link>
      );
    case "location":
      return (
        <Link to="/locations/$city" params={{ city: link.city }} className={className}>
          {label}
        </Link>
      );
    case "contact":
      return (
        <Link to="/contact" className={className}>
          {label}
        </Link>
      );
    case "portfolio":
      return (
        <Link to="/portfolio" className={className}>
          {label}
        </Link>
      );
    case "external":
      return (
        <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
          {label}
        </a>
      );
  }
}

// Renders body copy that optionally has one AnchorLink applied over an exact
// substring. Scoped per-paragraph so overlapping anchor words never collide.
function Linkify({ text, link }: { text: string; link?: AnchorLink }): ReactNode {
  if (!link) return text;
  const idx = text.indexOf(link.anchor);
  if (idx === -1) return text;
  const before = text.slice(0, idx);
  const after = text.slice(idx + link.anchor.length);
  return (
    <>
      {before}
      <ContentAnchor link={link.link} label={link.anchor} className="link-underline font-medium text-[color:var(--gold-deep)]" />
      {after}
    </>
  );
}

function EditorialSectionBlock({ section, muted }: { section: EditorialSection; muted?: boolean }) {
  const cardClass = muted
    ? "rounded-3xl border border-border bg-background p-8"
    : "rounded-3xl border border-border bg-card p-8";
  return (
    <section className={`section-pad${muted ? " bg-muted/30" : ""}`}>
      <div className="container-luxe">
        {section.eyebrow && <p className="eyebrow">{section.eyebrow}</p>}
        <h2 className={`font-display text-3xl md:text-4xl font-bold tracking-tight max-w-3xl${section.eyebrow ? " mt-5" : ""}`}>
          {section.h2}
        </h2>
        {section.paragraphs && section.paragraphs.length > 0 && (
          <div className="mt-6 max-w-3xl space-y-4">
            {section.paragraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                <Linkify text={p.text} link={p.link} />
              </p>
            ))}
          </div>
        )}
        {section.bullets && section.bullets.length > 0 && (
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 max-w-3xl">
            {section.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-foreground/85 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
                {b}
              </li>
            ))}
          </ul>
        )}
        {section.afterBullets && section.afterBullets.length > 0 && (
          <div className="mt-6 max-w-3xl space-y-4">
            {section.afterBullets.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                <Linkify text={p.text} link={p.link} />
              </p>
            ))}
          </div>
        )}
        {section.subsections && section.subsections.length > 0 && (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {section.subsections.map((sub) => (
              <div key={sub.h3} className={cardClass}>
                <h3 className="font-display text-lg font-semibold tracking-tight">{sub.h3}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  <Linkify text={sub.body} link={sub.link} />
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    // `icon` is a component reference (LucideIcon), not serializable data —
    // keeping it out of loaderData is what actually gets dehydrated/streamed
    // to the client for hydration. The component re-derives it locally below
    // from the static SERVICE_DETAILS import instead, which needs no
    // serialization since it's identical on server and client.
    const { icon: _icon, ...serializableService } = service;
    return { service: serializableService };
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
  const Icon = getService(service.slug)!.icon;
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
                {service.h1 ?? service.name}
              </h1>
              {service.heroBody && service.heroBody.length > 0 ? (
                <div className="mt-6 max-w-2xl space-y-4">
                  {service.heroBody.map((p: string, i: number) => (
                    <p key={i} className="text-lg text-muted-foreground leading-relaxed">{p}</p>
                  ))}
                </div>
              ) : (
                <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{service.short}</p>
              )}
              {service.heroCta && (
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link to="/contact" className="btn-gold">
                    {service.heroCta.primaryLabel} <ArrowRight className="h-4 w-4" />
                  </Link>
                  {service.heroCta.secondaryLabel && service.heroCta.secondaryLink && (
                    <ContentAnchor
                      link={service.heroCta.secondaryLink}
                      label={service.heroCta.secondaryLabel}
                      className="btn-ghost-luxe"
                    />
                  )}
                </div>
              )}
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
            {service.auditToolAnchor && (
              <p className="mt-4 text-sm text-muted-foreground">
                Want a clearer starting point?{" "}
                <Link to="/tools/$slug" params={{ slug: "seo-audit" }} className="link-underline font-medium text-[color:var(--gold-deep)]">
                  {service.auditToolAnchor}
                </Link>
                .
              </p>
            )}
          </article>
        </div>
      </section>

      {/* Editorial sections (optional, long-form pages only) */}
      {service.sections?.map((section: EditorialSection, i: number) => (
        <EditorialSectionBlock key={section.id} section={section} muted={i % 2 === 0} />
      ))}

      {/* Benefits */}
      <section className="section-pad">
        <div className="container-luxe">
          {service.benefitsEyebrow && <p className="eyebrow">{service.benefitsEyebrow}</p>}
          <h2 className={`font-display text-3xl md:text-4xl font-bold tracking-tight max-w-2xl${service.benefitsEyebrow ? " mt-5" : ""}`}>
            {service.benefitsHeading ?? "What you can expect"}
          </h2>
          {service.benefitsIntro && (
            <p className="mt-5 max-w-2xl text-muted-foreground">{service.benefitsIntro}</p>
          )}
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

      {service.postBenefitsSection && (
        <EditorialSectionBlock section={service.postBenefitsSection} />
      )}

      {/* Process */}
      <section className="section-pad bg-muted/30">
        <div className="container-luxe">
          <p className="eyebrow">How it runs</p>
          <h2 className="mt-5 font-display text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
            A clear, predictable process
          </h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.process.map((p: { step: string; detail: string; link?: AnchorLink }, i: number) => (
              <Reveal key={p.step} delay={i * 0.05}>
                <li className="h-full rounded-3xl border border-border bg-background p-8">
                  <span className="font-display text-4xl font-bold text-gradient-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{p.step}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    <Linkify text={p.detail} link={p.link} />
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Who this is for */}
      {service.whoFor && service.whoFor.length > 0 && (
        <section className="section-pad bg-muted/30">
          <div className="container-luxe">
            <p className="eyebrow">Who this is for</p>
            <h2 className="mt-5 font-display text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
              Who This Service Is For
            </h2>
            {service.whoForIntro && (
              <p className="mt-5 max-w-md text-muted-foreground">{service.whoForIntro}</p>
            )}
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {service.whoFor.map((w: { title: string; body: string }) => (
                <div key={w.title} className="rounded-3xl border border-border bg-background p-8">
                  <h3 className="font-display text-lg font-semibold tracking-tight">{w.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.preFaqSection && (
        <EditorialSectionBlock section={service.preFaqSection} />
      )}

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
            {service.faqs.map((f: { q: string; a: string; link?: AnchorLink }, i: number) => (
              <FaqItem
                key={f.q}
                item={{ q: f.q, a: <Linkify text={f.a} link={f.link} /> }}
                defaultOpen={i === 0}
              />
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
              {service.finalCta?.heading ??
                `Want to see what ${service.name.toLowerCase()} could look like for your business?`}
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              {service.finalCta?.body ??
                "Book a 30-minute strategy call. We'll review your current setup and send back a written plan within five working days."}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="inline-flex btn-gold">
                {service.finalCta?.primaryLabel ?? "Book a Free Strategy Call"} <ArrowRight className="h-4 w-4" />
              </Link>
              {service.finalCta && (
                <ContentAnchor
                  link={service.finalCta.secondaryLink}
                  label={service.finalCta.secondaryLabel}
                  className="btn-ghost-luxe"
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Keep canonical pointed at self even when route param invalid.
export const __canonical = (slug: string) => abs(`/services/${slug}`);
