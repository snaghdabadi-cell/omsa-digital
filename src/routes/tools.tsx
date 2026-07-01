import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Wrench } from "lucide-react";
import { Container, Eyebrow, Heading, Prose, Tag } from "@/components/site/Primitives";
import { TOOLS } from "@/lib/content/tools";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/tools")({
  head: () => pageMeta({
    title: "Free digital tools — SEO audit, analyzer and more",
    description: "Free, focused tools for marketers, founders and operators across the GCC. Audits, analyzers, calculators and templates.",
    path: "/tools",
  }),
  component: ToolsPage,
});

function ToolsPage() {
  return (
    <section className="pt-40 pb-32">
      <Container>
        <Eyebrow>Tools</Eyebrow>
        <Heading as="h1" size="xl" className="mt-6 max-w-3xl">
          Useful, free, <span className="text-gradient-gold">opinionated</span>.
        </Heading>
        <Prose className="mt-6 max-w-2xl text-lg">
          A growing set of tools we build for our own work and share publicly.
        </Prose>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((t) => (
            <Link
              key={t.slug}
              to="/tools/$slug"
              params={{ slug: t.slug }}
              className="card-lift group block rounded-3xl border border-border bg-card p-7"
            >
              <div className="flex items-center justify-between">
                <Wrench className="h-5 w-5 text-[color:var(--gold-deep)]" />
                <Tag>{t.status === "live" ? "Live" : t.status === "beta" ? "Beta" : "Soon"}</Tag>
              </div>
              <h2 className="mt-4 font-display text-xl font-semibold">{t.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{t.tagline}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--gold-deep)]">
                Open <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
