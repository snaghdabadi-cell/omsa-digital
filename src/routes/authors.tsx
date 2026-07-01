import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, Eyebrow, Heading, Prose, Tag } from "@/components/site/Primitives";
import { AUTHORS } from "@/lib/content/authors";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/authors")({
  head: () => pageMeta({
    title: "Authors — OMSA Digital & AI Studio",
    description: "Meet the strategists, designers and AI specialists behind OMSA Digital & AI Studio.",
    path: "/authors",
  }),
  component: AuthorsPage,
});

function AuthorsPage() {
  return (
    <section className="pt-40 pb-32">
      <Container>
        <Eyebrow>Authors</Eyebrow>
        <Heading as="h1" size="xl" className="mt-6 max-w-3xl">
          The people behind the <span className="text-gradient-gold">work</span>.
        </Heading>
        <Prose className="mt-6 max-w-2xl text-lg">Strategists, engineers and designers working across hospitality, real estate and healthcare in the GCC.</Prose>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AUTHORS.map((a) => (
            <Link
              key={a.slug}
              to="/authors/$slug"
              params={{ slug: a.slug }}
              className="card-lift block rounded-3xl border border-border bg-card p-7"
            >
              <Eyebrow>{a.role}</Eyebrow>
              <h2 className="mt-4 font-display text-xl font-semibold">{a.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{a.bio}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {a.expertise.map((e) => <Tag key={e}>{e}</Tag>)}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
