import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/dashboard")({
  head: () => pageMeta({
    title: "Client Dashboard — OMSA Digital & AI Studio",
    description: "A unified workspace for OMSA Digital & AI Studio clients — projects, reports, invoices and communication in one place.",
    path: "/dashboard",
    noindex: true,
  }),
  component: () => (
    <ComingSoon
      eyebrow="Client portal"
      title="One workspace for every client engagement."
      description="Project status, SEO and analytics reports, invoices, meetings, documents and direct communication — coming soon."
      formLabel="Existing client? Get early access."
      ctaLabel="Contact your account lead"
    />
  ),
});
