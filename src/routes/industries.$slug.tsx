import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container, Eyebrow, Heading, Prose, Tag } from "@/components/site/Primitives";
import { FaqItem } from "@/routes/index";
import { getIndustry, INDUSTRY_PAGES } from "@/lib/content/industries";
import { getService } from "@/lib/services-data";
import { getCaseStudy } from "@/lib/case-studies-data";
import { pageMeta, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const ind = getIndustry(params.slug);
    if (!ind) throw notFound();
    return { ind };
  },
  head: ({ params, loaderData }) => {
    const ind = loaderData?.ind ?? INDUSTRY_PAGES[0];
    return {
      ...pageMeta({
        title: `${ind.name} — AI & Digital Growth Solutions | OMSA`,
        description: ind.description,
        path: `/industries/${params.slug}`,
      }),
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([
          { name: "Industries", path: "/industries" },
          { name: ind.name, path: `/industries/${params.slug}` },
        ])) },
        ...(ind.faqs && ind.faqs.length > 0
          ? [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(ind.faqs)) }]
          : []),
      ],
    };
  },
  component: IndustryPage,
});

function IndustryPage() {
  const { ind } = Route.useLoaderData();
  const caseStudy = ind.caseStudySlug ? getCaseStudy(ind.caseStudySlug) : undefined;

  return (
    <section className="pt-40 pb-32">
      <Container>
        <Eyebrow>Industry</Eyebrow>
        <Heading as="h1" size="xl" className="mt-6 max-w-4xl">
          <span className="text-gradient-gold">{ind.name}</span>
        </Heading>
        <Prose className="mt-6 max-w-2xl text-lg">{ind.tagline}</Prose>
        <Prose className="mt-4 max-w-2xl">{ind.description}</Prose>

        <div className="mt-16 max-w-3xl">
          <h2 className="font-display text-2xl font-bold">How OMSA helps {ind.name.toLowerCase()} businesses grow</h2>
          <Prose className="mt-5">{ind.outcomes}</Prose>
        </div>

        {ind.challenges && ind.challenges.length > 0 && (
          <div className="mt-16 max-w-3xl">
            <h2 className="font-display text-2xl font-bold">Common {ind.name.toLowerCase()} business challenges</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {ind.challenges.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-foreground/85 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-16">
          <h2 className="font-display text-2xl font-bold">Recommended services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ind.services.map((slug: string) => {
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

        {ind.useCases && ind.useCases.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold">{ind.name} use cases</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ind.useCases.map((u) => (
                <div key={u.title} className="rounded-2xl border border-border bg-background p-6">
                  <h3 className="font-display text-base font-semibold tracking-tight">{u.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{u.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {caseStudy && (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold">Related concept case study</h2>
            <Link
              to="/case-studies/$slug"
              params={{ slug: caseStudy.slug }}
              className="card-lift mt-6 block rounded-2xl border border-border bg-card p-6 sm:flex sm:items-center sm:justify-between sm:gap-6"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <Tag>{caseStudy.status}</Tag>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">{caseStudy.location}</span>
                </div>
                <div className="mt-3 font-display text-lg font-semibold">{caseStudy.title}</div>
                <p className="mt-2 text-sm text-muted-foreground max-w-xl">{caseStudy.excerpt}</p>
              </div>
              <span className="mt-4 inline-flex shrink-0 items-center gap-1 text-sm font-medium text-[color:var(--gold-deep)] sm:mt-0">
                Read the concept case study <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        )}

        {ind.faqs && ind.faqs.length > 0 && (
          <div className="mt-16 max-w-3xl">
            <h2 className="font-display text-2xl font-bold">{ind.name} FAQs</h2>
            <div className="mt-6 space-y-3">
              {ind.faqs.map((f, i) => (
                <FaqItem key={f.q} item={f} defaultOpen={i === 0} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-16">
          <Link to="/contact" className="btn-gold inline-flex text-sm">
            Discuss your project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
