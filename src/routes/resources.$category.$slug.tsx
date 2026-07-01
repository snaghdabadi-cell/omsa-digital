import { createFileRoute, notFound } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";
import { getResource, RESOURCE_CATEGORIES } from "@/lib/content/resources";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/resources/$category/$slug")({
  loader: ({ params }) => {
    const r = getResource(params.slug);
    const cat = RESOURCE_CATEGORIES.find((c) => c.slug === params.category);
    if (!r || !cat) throw notFound();
    return { r, cat };
  },
  head: ({ params, loaderData }) => {
    const r = loaderData?.r;
    return pageMeta({
      title: r ? `${r.title} — OMSA Digital & AI Studio` : "Resource — OMSA Digital & AI Studio",
      description: r?.excerpt ?? "OMSA Digital & AI Studio resource.",
      path: `/resources/${params.category}/${params.slug}`,
      type: "article",
    });
  },
  component: ResourceItemPage,
});

function ResourceItemPage() {
  const { r, cat } = Route.useLoaderData();
  return (
    <ComingSoon
      eyebrow={`${cat.label}`}
      title={r.title}
      description={r.excerpt}
      formLabel="Get notified when this resource is published."
    />
  );
}
