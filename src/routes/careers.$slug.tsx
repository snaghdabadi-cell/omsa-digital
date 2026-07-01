import { createFileRoute, notFound } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";
import { getRole } from "@/lib/content/careers";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/careers/$slug")({
  loader: ({ params }) => {
    const role = getRole(params.slug);
    if (!role) throw notFound();
    return { role };
  },
  head: ({ params, loaderData }) => {
    const r = loaderData?.role;
    return pageMeta({
      title: r ? `${r.title} — Careers | OMSA Digital & AI Studio` : "Career | OMSA Digital & AI Studio",
      description: r?.summary ?? "Career opportunity at OMSA Digital & AI Studio.",
      path: `/careers/${params.slug}`,
    });
  },
  component: RolePage,
});

function RolePage() {
  const { role } = Route.useLoaderData();
  return (
    <ComingSoon
      eyebrow={`${role.team} · ${role.location}`}
      title={role.title}
      description={`${role.summary} Applications open soon — register your interest and we'll reach out personally.`}
      formLabel="Register your interest for this role."
    />
  );
}
