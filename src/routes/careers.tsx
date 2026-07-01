import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Container, Eyebrow, Heading, Prose, Tag } from "@/components/site/Primitives";
import { ROLES } from "@/lib/content/careers";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/careers")({
  head: () => pageMeta({
    title: "Careers — Join OMSA Digital & AI Studio",
    description: "We're hiring strategists, designers and engineers to build the leading AI digital growth agency in the GCC.",
    path: "/careers",
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <section className="pt-40 pb-32">
      <Container>
        <Eyebrow>Careers</Eyebrow>
        <Heading as="h1" size="xl" className="mt-6 max-w-3xl">
          Build the agency you wish <span className="text-gradient-gold">existed</span>.
        </Heading>
        <Prose className="mt-6 max-w-2xl text-lg">
          We're a small, senior team building premium digital systems for the most ambitious businesses in the GCC.
          We'll grow when the right people join — not before.
        </Prose>

        <div className="mt-12 space-y-3">
          {ROLES.map((r) => (
            <Link
              key={r.slug}
              to="/careers/$slug"
              params={{ slug: r.slug }}
              className="group flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:border-[color:var(--gold)]"
            >
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="font-display text-lg font-semibold">{r.title}</h2>
                  <Tag>{r.team}</Tag>
                  {r.status === "soon" && <Tag>Soon</Tag>}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{r.summary}</p>
                <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-[color:var(--gold)]" />{r.location}</span>
                  <span>· {r.type}</span>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-[color:var(--gold)]" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
