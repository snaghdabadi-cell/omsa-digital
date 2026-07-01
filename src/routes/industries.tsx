import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container, Eyebrow, Heading, Prose } from "@/components/site/Primitives";
import { INDUSTRY_PAGES } from "@/lib/content/industries";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/industries")({
  head: () => pageMeta({
    title: "Industries we serve — Hospitality, Real Estate, Healthcare & more",
    description: "Deep specialism across hospitality, real estate, healthcare, retail and professional services in Oman and the UAE.",
    path: "/industries",
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <section className="pt-40 pb-32">
      <Container>
        <Eyebrow>Industries</Eyebrow>
        <Heading as="h1" size="xl" className="mt-6 max-w-3xl">
          Strategy with <span className="text-gradient-gold">specialism</span>.
        </Heading>
        <Prose className="mt-6 max-w-2xl text-lg">
          Every industry has its own commercial logic. Pick yours.
        </Prose>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRY_PAGES.map((i) => (
            <Link
              key={i.slug}
              to="/industries/$slug"
              params={{ slug: i.slug }}
              className="card-lift group block rounded-3xl border border-border bg-card p-7"
            >
              <Eyebrow>{i.name}</Eyebrow>
              <h2 className="mt-4 font-display text-xl font-semibold">{i.tagline}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{i.description}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--gold-deep)]">
                Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
