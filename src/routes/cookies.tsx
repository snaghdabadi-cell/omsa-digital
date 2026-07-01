import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/cookies")({
  head: () => pageMeta({
    title: "Cookie Policy — OMSA Digital & AI Studio",
    description: "Learn how OMSA Digital & AI Studio uses cookies and analytics technologies to improve your experience and measure website performance.",
    path: "/cookies",
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <article className="pt-40 pb-32">
      <div className="container-luxe max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tight">Cookie Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: 29 June 2026</p>

        <div className="mt-12 space-y-10 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">What we set</h2>
            <p className="mt-3">
              We set a small number of essential cookies for site functionality and, with your consent, analytics cookies via Google Analytics 4 and Google Tag Manager to understand how the site is used and to improve it.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">How to opt out</h2>
            <p className="mt-3">
              You can disable cookies in your browser at any time. Doing so will not affect your ability to read content on this site, but it may limit form submissions and rich-media features.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">Contact</h2>
            <p className="mt-3">
              For questions about cookies or analytics, write to <a className="text-[color:var(--gold-deep)] underline-offset-4 hover:underline" href="mailto:hello@aurum.ai">hello@aurum.ai</a>.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
