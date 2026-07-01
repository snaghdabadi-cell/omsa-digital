import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container, Eyebrow, Heading, Prose } from "@/components/site/Primitives";
import { getIndustry, INDUSTRY_PAGES } from "@/lib/content/industries";
import { getService } from "@/lib/services-data";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";

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
      ],
    };
  },
  component: IndustryPage,
});

function IndustryPage() {
  const { ind } = Route.useLoaderData();
  return (
    <section className="pt-40 pb-32">
      <Container>
        <Eyebrow>Industry</Eyebrow>
        <Heading as="h1" size="xl" className="mt-6 max-w-4xl">
          <span className="text-gradient-gold">{ind.name}</span>
        </Heading>
        <Prose className="mt-6 max-w-2xl text-lg">{ind.tagline}</Prose>
        <Prose className="mt-4 max-w-2xl">{ind.description}</Prose>

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

        <div className="mt-16">
          <Link to="/contact" className="btn-gold inline-flex text-sm">
            Discuss your project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
