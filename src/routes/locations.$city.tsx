import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { Container, Eyebrow, Heading, Prose, Tag } from "@/components/site/Primitives";
import { FaqItem } from "@/routes/index";
import { getLocation, LOCATIONS } from "@/lib/content/locations";
import { getService } from "@/lib/services-data";
import { getCaseStudy } from "@/lib/case-studies-data";
import { pageMeta, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/locations/$city")({
  loader: ({ params }) => {
    const loc = getLocation(params.city);
    if (!loc) throw notFound();
    return { loc };
  },
  head: ({ params, loaderData }) => {
    const loc = loaderData?.loc ?? LOCATIONS[0];
    return {
      ...pageMeta({
        title: `AI & Digital Growth Agency in ${loc.city}, ${loc.country} | OMSA`,
        description: loc.tagline,
        path: `/locations/${params.city}`,
        // "soon" locations are not yet an active market — keep them out of
        // the index until there's substantive, city-specific content live.
        noindex: loc.status === "soon",
      }),
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([
          { name: "Locations", path: "/locations" },
          { name: loc.city, path: `/locations/${params.city}` },
        ])) },
        // FAQPage schema only exists where the page also renders the same
        // FAQs visibly (live cities with real, city-specific answers) — see
        // the FAQ section in LocationPage below.
        ...(loc.faqs && loc.faqs.length > 0
          ? [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(loc.faqs)) }]
          : []),
      ],
    };
  },
  component: LocationPage,
});

function LocationPage() {
  const { loc } = Route.useLoaderData();
  const relatedCaseStudy = loc.relatedCaseStudySlug ? getCaseStudy(loc.relatedCaseStudySlug) : undefined;
  return (
    <section className="pt-40 pb-32">
      <Container>
        <Eyebrow>{loc.country}</Eyebrow>
        <Heading as="h1" size="xl" className="mt-6 max-w-4xl">
          Digital Growth in <span className="text-gradient-gold">{loc.city}</span> by OMSA Digital & AI Studio.
        </Heading>
        <Prose className="mt-8 max-w-2xl text-lg">{loc.intro}</Prose>

        <div className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-[color:var(--gold)]" />
          {loc.city}, {loc.country}
          {loc.status === "soon" && <Tag>Coming soon</Tag>}
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-bold">Services available in {loc.city}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {loc.services.map((slug: string) => {
              const s = getService(slug);
              if (!s) return null;
              return (
                <Link
                  key={slug}
                  to="/services/$slug"
                  params={{ slug }}
                  className="card-lift block rounded-2xl border border-border bg-card p-6"
                >
                  <s.icon className="h-5 w-5 text-[color:var(--gold-deep)]" />
                  <div className="mt-4 font-display text-lg font-semibold">{s.name}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                </Link>
              );
            })}
          </div>
        </div>

        {relatedCaseStudy && (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold">Related concept case study</h2>
            <Link
              to="/case-studies/$slug"
              params={{ slug: relatedCaseStudy.slug }}
              className="card-lift mt-6 block rounded-2xl border border-border bg-card p-6 sm:flex sm:items-center sm:justify-between sm:gap-6"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <Tag>{relatedCaseStudy.status}</Tag>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">{relatedCaseStudy.location}</span>
                </div>
                <div className="mt-3 font-display text-lg font-semibold">{relatedCaseStudy.title}</div>
                <p className="mt-2 text-sm text-muted-foreground max-w-xl">{relatedCaseStudy.excerpt}</p>
              </div>
              <span className="mt-4 inline-flex shrink-0 items-center gap-1 text-sm font-medium text-[color:var(--gold-deep)] sm:mt-0">
                Read the concept case study <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        )}

        {loc.faqs && loc.faqs.length > 0 && (
          <div className="mt-16 max-w-3xl">
            <h2 className="font-display text-2xl font-bold">{loc.city} FAQs</h2>
            <div className="mt-6 space-y-3">
              {loc.faqs.map((f, i) => (
                <FaqItem key={f.q} item={f} defaultOpen={i === 0} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 rounded-3xl border border-border bg-card p-10">
          <h2 className="font-display text-2xl font-bold">Start in {loc.city}</h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl">
            Book a strategy call and we'll prepare a tailored plan for your market.
          </p>
          <Link to="/contact" className="btn-gold mt-6 text-sm inline-flex">
            Book a strategy call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
