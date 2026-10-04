import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Clock, Download, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ReviewSignature } from "@/components/prospect-review/ReviewSignature";
import { parseReviewLang, useReviewLang } from "@/components/prospect-review/review-lang";
import {
  DAH_COPY,
  DAH_PLAN_PATH,
  DAH_REVIEW_PATH,
  DAH_SOURCE,
  type DahCopy,
  type Package,
} from "@/lib/prospect-review/dah-design";
import { privateReviewHead } from "@/lib/prospect-review/meta";
import { track } from "@/lib/analytics";
import { CONTACT, SITE_URL } from "@/lib/seo";

// Private first-step proposal for DAH Design. Not a public price list: it is
// only linked from the DAH review, and noindex, follow like the review.
// "Download" prints a prospect-specific proposal (Save as PDF) — no PDF
// library needed.

export const Route = createFileRoute("/review/dah-design-4m8k/plan")({
  head: ({ match }) => {
    const lang = parseReviewLang(match.search.lang);
    const m = DAH_COPY[lang].meta;
    return privateReviewHead({
      title: m.planTitle,
      description: m.planDescription,
      path: DAH_PLAN_PATH,
      lang,
    });
  },
  component: DahPlanPage,
});

const CONTACT_HREF = `/contact?source=${DAH_SOURCE.plan}`;
const WHATSAPP_NUMBER = CONTACT.whatsapp.replace(/\D/g, "");

function DahPlanPage() {
  const lang = useReviewLang();
  const t = DAH_COPY[lang];
  const [first, ...later] = t.plan.packages;

  const printProposal = () => {
    track("cta_click", { location: "review:dah-design-plan", label: "download-proposal" });
    // The document title becomes the suggested PDF file name.
    const prev = document.title;
    document.title = t.proposal.docTitle;
    window.addEventListener("afterprint", () => (document.title = prev), { once: true });
    window.print();
  };

  return (
    <>
      <style>{"@media print { @page { size: A4; margin: 14mm; } }"}</style>

      <div className="print:hidden">
        <section className="pt-8 pb-12 md:pt-12 md:pb-16">
          <div className="container-luxe">
            <Link
              to={DAH_REVIEW_PATH}
              search={lang === "ar" ? { lang: "ar" } : {}}
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft aria-hidden className="h-4 w-4 rtl:-scale-x-100" />
              {t.ui.backToReview}
            </Link>

            <div className="mt-8 max-w-3xl">
              <p className="eyebrow animate-hero-eyebrow">{t.plan.eyebrow}</p>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl animate-hero-title">
                {t.plan.title}
              </h1>
              <div className="mt-6 space-y-2 text-lg leading-relaxed text-muted-foreground animate-hero-desc">
                {t.plan.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>

            <ol className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
              {t.plan.principle.map((step, i) => (
                <li key={step} className="flex items-center gap-3">
                  {i > 0 && (
                    <ArrowRight
                      aria-hidden
                      className="hidden h-4 w-4 text-[color:var(--gold-deep)] sm:block rtl:-scale-x-100"
                    />
                  )}
                  <span className="inline-flex items-center gap-2.5 rounded-full border border-border px-4 py-2 font-display text-sm font-semibold">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[color:var(--gold)]/15 text-xs text-[color:var(--gold-deep)]">
                      {i + 1}
                    </span>
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="first-step" className="pb-12 md:pb-16">
          <div className="container-luxe">
            <Reveal>
              <RecommendedPackage
                pkg={first}
                t={t}
                onPrint={printProposal}
                whatsappHref={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.plan.whatsappText)}`}
              />
            </Reveal>
          </div>
        </section>

        <section aria-labelledby="later-title" className="pb-16 md:pb-24">
          <div className="container-luxe">
            <h2 id="later-title" className="eyebrow">
              {t.plan.optionalLabel}
            </h2>
            <ul className="mt-6 grid gap-5 md:grid-cols-2">
              {later.map((pkg, i) => (
                <Reveal as="li" key={pkg.id} delay={i * 0.06}>
                  <LaterPackage pkg={pkg} t={t} />
                </Reveal>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              {t.plan.noPromise}
            </p>
          </div>
        </section>

        <ReviewSignature preparedBy={t.ui.preparedBy} date={t.ui.date} />
      </div>

      <PrintableProposal t={t} />
    </>
  );
}

/* ───────────────────── PACKAGES ───────────────────── */

function RecommendedPackage({
  pkg,
  t,
  onPrint,
  whatsappHref,
}: {
  pkg: Package;
  t: DahCopy;
  onPrint: () => void;
  whatsappHref: string;
}) {
  return (
    <article className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[color:var(--ink)] to-black p-5 text-white shadow-luxe sm:p-10 lg:p-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -end-32 h-96 w-96 rounded-full bg-[color:var(--gold)]/15 blur-3xl"
      />
      <div className="relative grid gap-10 lg:grid-cols-[1fr_20rem] lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--ink)]">
            {t.plan.recommended}
          </p>
          <h2
            id="first-step"
            className="mt-6 font-display text-2xl font-bold leading-snug tracking-tight sm:text-3xl"
          >
            {pkg.name}
          </h2>
          {pkg.explanation && (
            <p className="mt-4 max-w-xl leading-relaxed text-white/70">{pkg.explanation}</p>
          )}
          <h3 className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
            {t.plan.includesLabel}
          </h3>
          <ul className="mt-4 space-y-3">
            {pkg.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[color:var(--gold)]/20">
                  <Check aria-hidden className="h-3 w-3 text-[color:var(--gold)]" />
                </span>
                <span className="leading-snug text-white/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6 rounded-3xl border border-white/15 bg-white/[0.04] p-5 sm:p-6 lg:self-start">
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-white/60">
                {t.plan.priceLabel}
              </dt>
              <dd className="mt-1 whitespace-nowrap font-display text-4xl font-bold tracking-tight text-gradient-gold sm:text-5xl">
                <bdi>{pkg.price}</bdi>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-white/60">
                {t.plan.durationLabel}
              </dt>
              <dd className="mt-2 flex items-center gap-2 font-display text-base font-semibold sm:text-lg">
                <Clock aria-hidden className="h-4 w-4 shrink-0 text-[color:var(--gold)]" />
                {pkg.duration}
              </dd>
            </div>
          </dl>
          <div className="border-t border-white/10 pt-4 text-sm leading-relaxed text-white/70">
            <p className="font-medium text-white/80">{t.plan.payment.label}</p>
            <ul>
              {t.plan.payment.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            {/* Arabic leads with WhatsApp; the contact page is English-only. */}
            {t.plan.primaryCta === "whatsapp" ? (
              <>
                <WhatsAppCta href={whatsappHref} label={t.plan.whatsapp} primary />
                <ContactCta label={t.plan.contact} note={t.plan.contactNote} />
              </>
            ) : (
              <>
                <ContactCta label={t.plan.contact} note={t.plan.contactNote} primary />
                <WhatsAppCta href={whatsappHref} label={t.plan.whatsapp} />
              </>
            )}
            <button
              type="button"
              onClick={onPrint}
              aria-describedby="download-hint"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold text-[color:var(--gold)] underline-offset-4 transition-colors hover:underline"
            >
              <Download aria-hidden className="h-4 w-4" />
              {t.plan.download}
            </button>
            <p id="download-hint" className="text-center text-xs leading-relaxed text-white/50">
              {t.plan.downloadHint}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

const PRIMARY_CTA = "btn-gold min-h-14 w-full text-[0.95rem]";
const SECONDARY_CTA =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-5 text-sm font-semibold transition-colors hover:border-[color:var(--gold)]";

function ContactCta({ label, note, primary }: { label: string; note: string; primary?: boolean }) {
  return (
    <div className="flex flex-col gap-1.5">
      <a
        href={CONTACT_HREF}
        aria-describedby={note ? "contact-note" : undefined}
        onClick={() => track("cta_click", { location: "review:dah-design-plan", label: "contact" })}
        className={primary ? PRIMARY_CTA : SECONDARY_CTA}
      >
        {label}
        <ArrowRight aria-hidden className="h-4 w-4 rtl:-scale-x-100" />
      </a>
      {note && (
        <p id="contact-note" className="text-center text-xs text-white/50">
          {note}
        </p>
      )}
    </div>
  );
}

function WhatsAppCta({ href, label, primary }: { href: string; label: string; primary?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("cta_click", { location: "review:dah-design-plan", label: "whatsapp" })}
      className={primary ? PRIMARY_CTA : SECONDARY_CTA}
    >
      <MessageCircle aria-hidden className="h-4 w-4" />
      {label}
    </a>
  );
}

function LaterPackage({ pkg, t }: { pkg: Package; t: DahCopy }) {
  return (
    <article className="h-full rounded-3xl border border-border p-6 md:p-8">
      <h3 className="font-display text-xl font-bold leading-snug tracking-tight">{pkg.name}</h3>
      <dl className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-1">
        <div className="flex items-baseline gap-2">
          <dt className="sr-only">{t.plan.priceLabel}</dt>
          <dd className="font-display text-2xl font-bold tracking-tight">
            <bdi>{pkg.price}</bdi>
          </dd>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <dt className="sr-only">{t.plan.durationLabel}</dt>
          <dd className="flex items-center gap-2">
            <Clock aria-hidden className="h-4 w-4 shrink-0" />
            {pkg.duration}
          </dd>
        </div>
      </dl>
      {pkg.includesPrefix && (
        <p className="mt-6 text-sm font-medium text-foreground/80">{pkg.includesPrefix}</p>
      )}
      <ul className="mt-3 space-y-2">
        {pkg.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm leading-snug text-muted-foreground"
          >
            <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold-deep)]" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

/* ───────────────────── PRINTABLE PROPOSAL ───────────────────── */

/** Print-only, prospect-specific proposal (A4). Hidden on screen. */
function PrintableProposal({ t }: { t: DahCopy }) {
  const [first, ...later] = t.plan.packages;
  const site = SITE_URL.replace(/^https?:\/\//, "");
  return (
    <article className="hidden bg-white text-[11pt] leading-relaxed text-black [print-color-adjust:exact] print:block">
      <header className="flex items-start justify-between gap-6 border-b-2 border-[color:var(--gold)] pb-5">
        <div>
          <p className="text-[9pt] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-deep)]">
            {t.proposal.label}
          </p>
          <h1
            dir="ltr"
            className="mt-2 font-display text-[24pt] font-bold leading-none rtl:text-end"
          >
            DAH Design
          </h1>
          <p className="mt-2">{t.proposal.for}</p>
          <p className="text-[10pt] text-neutral-600">{t.proposal.attention}</p>
        </div>
        <div className="shrink-0 text-end text-[10pt]">
          <p dir="ltr" className="font-display font-bold">
            OMSA Digital &amp; AI Studio
          </p>
          <p className="mt-1 text-neutral-600">
            {t.ui.dateLabel}: {t.proposal.date}
          </p>
        </div>
      </header>

      <section className="mt-6 break-inside-avoid">
        <h2 className="font-display text-[13pt] font-bold">{t.proposal.summaryTitle}</h2>
        {t.proposal.summary.map((p) => (
          <p key={p} className="mt-2">
            {p}
          </p>
        ))}
      </section>

      <section className="mt-6 break-inside-avoid rounded-xl border border-[color:var(--gold)] p-5">
        <p className="text-[9pt] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold-deep)]">
          {t.proposal.stepTitle}
        </p>
        <h2 className="mt-1 font-display text-[15pt] font-bold">{first.name}</h2>
        <div className="mt-3 flex gap-10">
          <p>
            <span className="block text-[9pt] uppercase tracking-[0.16em] text-neutral-600">
              {t.plan.priceLabel}
            </span>
            <bdi className="font-display text-[18pt] font-bold">{first.price}</bdi>
          </p>
          <p>
            <span className="block text-[9pt] uppercase tracking-[0.16em] text-neutral-600">
              {t.plan.durationLabel}
            </span>
            <span className="font-display text-[12pt] font-semibold">{first.duration}</span>
          </p>
        </div>
        <p className="mt-3 text-[10pt] text-neutral-700">
          <span className="font-semibold">{t.plan.payment.label}</span>{" "}
          {t.plan.payment.lines.join(" · ")}
        </p>
        <h3 className="mt-4 font-semibold">{t.proposal.scopeTitle}</h3>
        <ul className="mt-1 list-disc space-y-1 ps-5">
          {first.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {first.explanation && <p className="mt-3 text-neutral-700">{first.explanation}</p>}
      </section>

      <section className="mt-6 break-inside-avoid">
        <h2 className="font-display text-[12pt] font-bold">{t.proposal.optionsTitle}</h2>
        <ul className="mt-2 space-y-1">
          {later.map((pkg) => (
            <li
              key={pkg.id}
              className="flex justify-between gap-4 border-b border-neutral-200 py-1.5"
            >
              <span>{pkg.name}</span>
              <span className="shrink-0 text-neutral-700">
                <bdi>{pkg.price}</bdi> · {pkg.duration}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-8 break-inside-avoid border-t border-neutral-300 pt-4 text-[9pt] text-neutral-600">
        <p>{t.proposal.disclaimer}</p>
        <p dir="ltr" className="mt-3 text-neutral-800 rtl:text-end">
          {t.proposal.contactTitle} · {site} · {CONTACT.publicEmail} · {CONTACT.phone}
        </p>
      </footer>
    </article>
  );
}
