import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => pageMeta({
    title: "Terms of Service — OMSA Digital & AI Studio",
    description: "The terms that apply to using the OMSA Digital & AI Studio website and engaging our services.",
    path: "/terms",
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <article className="pt-40 pb-32">
      <div className="container-luxe max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: 29 June 2026</p>

        <div className="mt-12 space-y-10 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">Use of this website</h2>
            <p className="mt-3">
              By using aurum.ai you accept these terms. We reserve the right to update them; the latest version will always be published on this page.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">Engagements</h2>
            <p className="mt-3">
              Specific scopes, deliverables, timelines and fees for any engagement are agreed in writing in a separate Statement of Work and Master Services Agreement. Nothing on this website constitutes a binding offer.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">Intellectual property</h2>
            <p className="mt-3">
              All content on this website — including copy, visual design, code, and structured data — is the intellectual property of OMSA Digital & AI Studio. You may share or quote excerpts with proper attribution, but you may not reproduce or republish the content in full without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">Limitation of liability</h2>
            <p className="mt-3">
              The content of this website is provided in good faith but without warranty. Specific commercial commitments are set out in our signed agreements with clients.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
