import { createFileRoute, Link } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => pageMeta({
    title: "Privacy Policy — OMSA Digital & AI Studio",
    description: "How OMSA Digital & AI Studio collects, uses, stores and protects your personal information when you use our website or contact us.",
    path: "/privacy",
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <article className="pt-40 pb-32">
      <div className="container-luxe max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: 29 June 2026</p>

        <div className="mt-12 space-y-10 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">Who we are</h2>
            <p className="mt-3">
              OMSA Digital & AI Studio ("we", "us", "our") is a digital growth, web design, SEO and AI automation studio based in Oman and serving businesses across the GCC.
              This page explains how we collect, use and protect your personal information. It is maintained by OMSA Digital & AI Studio to answer questions about our privacy practices.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">What we collect</h2>
            <p className="mt-3">
              Only the information you give us — your name, contact details, company, and the message you submit through the contact form — plus standard analytics events (pages viewed, source, device) collected via Google Analytics 4 and Google Tag Manager.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">How we use it</h2>
            <p className="mt-3">
              To reply to your enquiry, prepare a tailored proposal, and improve our website and content. We do not sell, rent or trade your data, and we do not add you to a list without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">Your rights</h2>
            <p className="mt-3">
              You can request access, correction or deletion of your personal data at any time by emailing
              {" "}<a className="text-[color:var(--gold-deep)] underline-offset-4 hover:underline" href="mailto:hello@aurum.ai">hello@aurum.ai</a>.
              We respond within five working days.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">Cookies</h2>
            <p className="mt-3">
              See our <Link to="/cookies" className="text-[color:var(--gold-deep)] underline-offset-4 hover:underline">Cookie Policy</Link> for the cookies and analytics we set on this website.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
