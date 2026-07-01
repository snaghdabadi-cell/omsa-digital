import { createFileRoute, notFound } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";
import { getTool } from "@/lib/content/tools";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/tools/$slug")({
  loader: ({ params }) => {
    const tool = getTool(params.slug);
    if (!tool) throw notFound();
    return { tool };
  },
  head: ({ params, loaderData }) => {
    const tool = loaderData?.tool;
    return pageMeta({
      title: tool ? `${tool.name} — OMSA Digital & AI Studio` : "Tool — OMSA Digital & AI Studio",
      description: tool?.tagline ?? "OMSA Digital & AI Studio tool.",
      path: `/tools/${params.slug}`,
    });
  },
  component: ToolPage,
});

function ToolPage() {
  const { tool } = Route.useLoaderData();
  return (
    <ComingSoon
      eyebrow="Digital tool"
      title={tool.name}
      description={tool.description}
      formLabel={`Be first to use ${tool.name}.`}
    />
  );
}
