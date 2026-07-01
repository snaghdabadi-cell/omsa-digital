import { createFileRoute, notFound } from "@tanstack/react-router";
import { Container, Eyebrow, Heading, Prose, Tag } from "@/components/site/Primitives";
import { getAuthor } from "@/lib/content/authors";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/authors/$slug")({
  loader: ({ params }) => {
    const author = getAuthor(params.slug);
    if (!author) throw notFound();
    return { author };
  },
  head: ({ params, loaderData }) => {
    const a = loaderData?.author;
    return pageMeta({
      title: a ? `${a.name} — OMSA Digital & AI Studio` : "Author — OMSA Digital & AI Studio",
      description: a?.bio ?? "OMSA Digital & AI Studio author profile.",
      path: `/authors/${params.slug}`,
      type: "profile",
    });
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
