import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Container, Eyebrow, Heading, Prose, EmptyState, Tag } from "@/components/site/Primitives";
import { RESOURCE_CATEGORIES, getResourcesByCategory, type ResourceCategory } from "@/lib/content/resources";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/resources/$category")({
  loader: ({ params }) => {
    const cat = RESOURCE_CATEGORIES.find((c) => c.slug === params.category);
    if (!cat) throw notFound();
    return { cat, items: getResourcesByCategory(params.category as ResourceCategory) };
  },
  head: ({ params, loaderData }) => {
    const cat = loaderData?.cat ?? RESOURCE_CATEGORIES[0];
    return pageMeta({
      title: `${cat.label} — AI, SEO & Digital Growth Resources | OMSA Digital & AI Studio`,
      description: cat.description,
      path: `/resources/${params.category}`,
    });
  },
  component: ResourceCategoryPage,
});

function ResourceCategoryPage() {
  const { cat, items } = Route.useLoaderData();
  return (
    <section className="pt-40 pb-32">
      <Container>
        <Eyebrow>Resources / {cat.label}</Eyebrow>
        <Heading as="h1" size="xl" className="mt-6 max-w-3xl">
          {cat.label}
        </Heading>
        <Prose className="mt-6 max-w-2xl text-lg">{cat.description}</Prose>

        <div className="mt-12">
          {items.length === 0 ? (
            <EmptyState title="In production" body="The first releases are on the way. Subscribe via the footer to be notified." />
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((r: { slug: string; title: string; excerpt: string; status: "live" | "soon" }) => (
                <li key={r.slug}>
                  <Link
                    to="/resources/$category/$slug"
                    params={{ category: cat.slug, slug: r.slug }}
                    className="card-lift block rounded-3xl border border-border bg-card p-7"
                  >
                    <div className="flex items-center justify-between">
                      <Tag>{cat.label}</Tag>
                      {r.status === "soon" && <Tag>Soon</Tag>}
                    </div>
                    <h2 className="mt-4 font-display text-lg font-semibold">{r.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{r.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </section>
  );
}
