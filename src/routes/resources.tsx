import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen } from "lucide-react";
import { Container, Eyebrow, Heading, Prose } from "@/components/site/Primitives";
import { RESOURCE_CATEGORIES } from "@/lib/content/resources";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/resources")({
  head: () => pageMeta({
    title: "Resources — Guides, templates and tools for digital growth",
    description: "A growing library of guides, templates, whitepapers and downloads on SEO, AI and digital growth in the GCC.",
    path: "/resources",
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <section className="pt-40 pb-32">
      <Container>
        <Eyebrow>Resources</Eyebrow>
        <Heading as="h1" size="xl" className="mt-6 max-w-3xl">
          Considered <span className="text-gradient-gold">knowledge</span>, freely shared.
        </Heading>
        <Prose className="mt-6 max-w-2xl text-lg">
          The same playbooks, templates and frameworks we use with clients.
        </Prose>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCE_CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to="/resources/$category"
              params={{ category: c.slug }}
              className="card-lift group block rounded-3xl border border-border bg-card p-7"
            >
              <BookOpen className="h-5 w-5 text-[color:var(--gold-deep)]" />
              <h2 className="mt-4 font-display text-xl font-semibold">{c.label}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--gold-deep)]">
                Browse <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
