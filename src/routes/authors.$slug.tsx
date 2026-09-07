import { createFileRoute, notFound } from "@tanstack/react-router";
import { Container, Eyebrow, Heading, Prose, Tag } from "@/components/site/Primitives";
import { getAuthor } from "@/lib/content/authors";
import { authorEntityRef, authorRefFromContent, pageMeta, webPageJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/authors/$slug")({
  loader: ({ params }) => {
    const author = getAuthor(params.slug);
    if (!author) throw notFound();
    return { author };
  },
  head: ({ params, loaderData }) => {
    const a = loaderData?.author;
    const path = `/authors/${params.slug}`;
    const base = pageMeta({
      title: a ? `${a.name} — OMSA Digital & AI Studio` : "Author — OMSA Digital & AI Studio",
      description: a?.bio ?? "OMSA Digital & AI Studio author profile.",
      path,
      type: "profile",
    });
    if (!a) return base;

    // "Organization" authors ARE the existing Organization entity (already
    // fully defined site-wide by organizationJsonLd() in __root.tsx) — this
    // page's WebPage just points `about` at that same @id rather than
    // restating a second, competing Organization object. A "Person" author
    // doesn't exist anywhere else in the graph, so their entity is defined
    // here in full, from the same content record used to render the page.
    const authorRef = authorRefFromContent(a);
    const entity = authorEntityRef(authorRef);
    return {
      ...base,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            webPageJsonLd({ path, name: a.name, description: a.bio, about: entity }),
          ),
        },
        ...(authorRef.type === "Person"
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify({ "@context": "https://schema.org", ...entity }),
              },
            ]
          : []),
      ],
    };
  },
  component: AuthorPage,
});

function AuthorPage() {
  const { author } = Route.useLoaderData();
  return (
    <section className="pt-40 pb-32">
      <Container>
        <Eyebrow>{author.role}</Eyebrow>
        <Heading as="h1" size="xl" className="mt-6">{author.name}</Heading>
        <Prose className="mt-6 max-w-2xl text-lg">{author.bio}</Prose>
        <div className="mt-6 flex flex-wrap gap-2">
          {author.expertise.map((e: string) => <Tag key={e}>{e}</Tag>)}
        </div>
      </Container>
    </section>
  );
}
