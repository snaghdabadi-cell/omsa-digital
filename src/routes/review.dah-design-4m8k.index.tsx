import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Gem,
  Images,
  LayoutGrid,
  MapPin,
  MessageCircle,
  Newspaper,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { EvidenceDisclosure } from "@/components/prospect-review/EvidenceDisclosure";
import {
  SimpleAuthorityMap,
  type SimpleMapNode,
} from "@/components/prospect-review/SimpleAuthorityMap";
import { ReviewSignature } from "@/components/prospect-review/ReviewSignature";
import { VisualBrief } from "@/components/prospect-review/VisualBrief";
import { parseReviewLang, useReviewLang } from "@/components/prospect-review/review-lang";
import {
  DAH_COPY,
  DAH_PLAN_PATH,
  DAH_REVIEW_PATH,
  MAP_NODE_STATUS,
  type MapNodeId,
} from "@/lib/prospect-review/dah-design";
import { privateReviewHead } from "@/lib/prospect-review/meta";
import { track } from "@/lib/analytics";

// Private review for DAH Design (Dubai). Short by design: what DAH has, what
// is missing, why it matters, what OMSA would change, and a link to the plan.
// Copy and evidence live in lib/prospect-review/dah-design.ts.

export const Route = createFileRoute("/review/dah-design-4m8k/")({
  head: ({ match }) => {
    const lang = parseReviewLang(match.search.lang);
    const m = DAH_COPY[lang].meta;
    return privateReviewHead({
      title: m.reviewTitle,
      description: m.reviewDescription,
      path: DAH_REVIEW_PATH,
      lang,
    });
  },
  component: DahReviewPage,
});

const useCopy = () => DAH_COPY[useReviewLang()];

function SignatureFooter() {
  const t = useCopy();
  return <ReviewSignature preparedBy={t.ui.preparedBy} date={t.ui.date} />;
}

function DahReviewPage() {
  return (
    <>
      <Hero />
      <AlreadyHave />
      <Findings />
      <ConnectionsBand />
      <Actions />
      <Improve />
      <PlanCta />
      <AboutReview />
      <SignatureFooter />
    </>
  );
}

/** Direction-aware forward arrow. */
const Forward = ({ className = "h-4 w-4" }: { className?: string }) => (
  <ArrowRight aria-hidden className={`${className} rtl:-scale-x-100`} />
);

/* ───────────────────── HERO + VISUAL BRIEF ───────────────────── */

function Hero() {
  const lang = useReviewLang();
  const t = DAH_COPY[lang];
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 lg:pt-20 lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -end-40 h-[28rem] w-[28rem] rounded-full bg-[color:var(--gold)]/10 blur-3xl"
      />
      <div className="container-luxe relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_24rem] lg:gap-20">
          <div>
            <p className="eyebrow animate-hero-eyebrow">{t.hero.eyebrow}</p>
            <h1
              dir="ltr"
              className="mt-6 font-display text-5xl font-bold leading-none tracking-[-0.03em] sm:text-6xl lg:text-7xl animate-hero-title rtl:text-end"
            >
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-xl font-display text-2xl font-semibold leading-snug tracking-tight md:text-3xl animate-hero-desc">
              {t.hero.lines[0]} <span className="text-gradient-gold">{t.hero.lines[1]}</span>
            </p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground animate-hero-desc">
              {t.hero.support}
            </p>
            <a
              href="#have"
              className="group mt-8 hidden items-center gap-3 font-display text-sm font-semibold animate-hero-cta lg:inline-flex"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full border border-foreground/15 transition-colors duration-300 group-hover:border-[color:var(--gold)]">
                <ArrowDown aria-hidden className="h-4 w-4" />
              </span>
              {t.have.title}
            </a>
          </div>
          <div className="animate-hero-cta">
            <VisualBrief
              lang={lang}
              content={t.brief}
              labels={{
                open: t.ui.openBrief,
                dialogTitle: t.ui.briefDialogTitle,
                dialogHint: t.ui.briefDialogHint,
                close: t.ui.close,
                zoomIn: t.ui.zoomIn,
                zoomOut: t.ui.zoomOut,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── YOU ALREADY HAVE ───────────────────── */

const HAVE_ICONS: LucideIcon[] = [UserRound, MapPin, Gem, LayoutGrid, Images, MessageCircle];

function AlreadyHave() {
  const t = useCopy();
  return (
    <section
      id="have"
      aria-labelledby="have-title"
      className="scroll-mt-20 border-t border-border py-16 md:py-24"
    >
      <div className="container-luxe">
        <Reveal>
          <h2 id="have-title" className="eyebrow">
            {t.have.title}
          </h2>
        </Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.have.items.map((item, i) => {
            const Icon = HAVE_ICONS[i];
            return (
              <Reveal as="li" key={item} delay={i * 0.04}>
                <div className="flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[color:var(--gold)]/10 text-[color:var(--gold-deep)]">
                    <Icon aria-hidden className="h-5 w-5" />
                  </span>
                  <span className="font-display text-base font-semibold leading-snug">{item}</span>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ───────────────────── WHAT WE FOUND ───────────────────── */

function Findings() {
  const t = useCopy();
  return (
    <section aria-labelledby="findings-title" className="bg-muted/40 py-16 md:py-24">
      <div className="container-luxe">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t.findings.eyebrow}</p>
          <h2
            id="findings-title"
            className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl"
          >
            {t.findings.title}
          </h2>
        </Reveal>
        <ol className="mt-10 grid gap-5 lg:grid-cols-3">
          {t.findings.items.map((f, i) => (
            <Reveal as="li" key={f.heading} delay={i * 0.06}>
              <article className="flex h-full flex-col rounded-3xl border border-border bg-background p-6 md:p-8">
                <p
                  aria-hidden
                  className="font-display text-4xl font-bold leading-none text-gradient-gold"
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 font-display text-xl font-bold leading-snug tracking-tight">
                  {f.heading}
                </h3>
                <div className="mt-4 space-y-3 text-[0.975rem] leading-relaxed text-muted-foreground">
                  {f.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <div className="mt-auto">
                  <EvidenceDisclosure
                    label={t.ui.viewEvidence}
                    checkedOn={t.ui.checkedOn}
                    items={f.evidence}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
        <div className="mt-6 max-w-2xl">
          <EvidenceDisclosure
            label={t.findings.technical.label}
            checkedOn={t.ui.checkedOn}
            items={[t.findings.technical.text]}
          />
        </div>
      </div>
    </section>
  );
}

/* ───────────── WHAT'S HAPPENING TODAY + AUTHORITY MAP ───────────── */

const MAP_ICONS: Record<MapNodeId, LucideIcon> = {
  daria: UserRound,
  projects: Images,
  services: Briefcase,
  dubai: MapPin,
  sectors: LayoutGrid,
  external: Newspaper,
};

function ConnectionsBand() {
  const lang = useReviewLang();
  const t = DAH_COPY[lang];
  const nodes: SimpleMapNode[] = (Object.keys(MAP_ICONS) as MapNodeId[]).map((id) => ({
    id,
    label: t.map.nodes[id],
    icon: MAP_ICONS[id],
    status: MAP_NODE_STATUS[id],
  }));

  return (
    <section className="bg-[color:var(--ink)] py-16 text-white md:py-24">
      <div className="container-luxe">
        {/* Cause → effect, in three beats */}
        <section aria-labelledby="today-title">
          <Reveal>
            <h2 id="today-title" className="eyebrow !text-white/60">
              {t.causal.title}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1.2fr] lg:items-stretch">
            <Reveal className="rounded-3xl border border-white/15 p-6">
              <ul className="space-y-2">
                {t.causal.strengths.map((s, i) => (
                  <li key={s}>
                    {i > 0 && (
                      <span
                        aria-hidden
                        className="block font-display text-lg leading-none text-[color:var(--gold)]"
                      >
                        +
                      </span>
                    )}
                    <span className="font-display text-lg font-semibold">{s}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Beat label={t.causal.but} />
            <Reveal
              delay={0.08}
              className="rounded-3xl border border-dashed border-[color:var(--gold)]/60 p-6"
            >
              <p className="text-lg leading-snug text-white/85">{t.causal.gap}</p>
            </Reveal>
            <Beat label={t.causal.so} />
            <Reveal delay={0.16} className="rounded-3xl bg-white/[0.06] p-6">
              <p className="text-lg leading-snug">{t.causal.result}</p>
            </Reveal>
          </div>
        </section>

        <section aria-labelledby="map-title" className="mt-20 md:mt-28">
          <Reveal className="max-w-2xl">
            <p className="eyebrow !text-white/60">{t.map.eyebrow}</p>
            <h2
              id="map-title"
              className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl"
            >
              {t.map.title}
            </h2>
          </Reveal>
          <div className="mt-8">
            <SimpleAuthorityMap
              center={t.map.center}
              nodes={nodes}
              outcomes={t.map.outcomes}
              legend={t.map.legend}
              leadsTo={t.map.leadsTo}
              rtl={lang === "ar"}
            />
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-white/60">
            {t.map.externalNote}
          </p>
        </section>
      </div>
    </section>
  );
}

/** Connector between causal beats: arrow down on mobile, forward on desktop. */
function Beat({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-3 py-1 lg:flex-col lg:py-0">
      <span className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold)]">
        {label}
      </span>
      <ArrowDown aria-hidden className="h-4 w-4 text-[color:var(--gold)] lg:hidden" />
      <Forward className="hidden h-4 w-4 text-[color:var(--gold)] lg:block" />
    </div>
  );
}

/* ───────────────────── WHAT WE WOULD CHANGE ───────────────────── */

function Actions() {
  const t = useCopy();
  return (
    <section aria-labelledby="actions-title" className="py-16 md:py-24">
      <div className="container-luxe">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t.actions.eyebrow}</p>
          <h2
            id="actions-title"
            className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl"
          >
            {t.actions.title}
          </h2>
        </Reveal>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {t.actions.items.map((a, i) => (
            <Reveal as="li" key={a.title} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-border p-6 md:p-7">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold leading-snug tracking-tight">
                  {a.title}
                </h3>
                <p className="mt-3 text-[0.975rem] leading-relaxed text-muted-foreground">
                  {a.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ───────────────────── WHAT THIS COULD IMPROVE ───────────────────── */

function Improve() {
  const t = useCopy();
  return (
    <section aria-labelledby="improve-title" className="pb-16 md:pb-24">
      <div className="container-luxe">
        <div className="rounded-3xl border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/[0.05] p-6 md:p-10">
          <h2 id="improve-title" className="eyebrow">
            {t.improve.eyebrow}
          </h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.improve.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <BadgeCheck
                  aria-hidden
                  className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--gold-deep)]"
                />
                <span className="font-display text-base font-semibold leading-snug">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">{t.improve.note}</p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── CTA TO PLAN ───────────────────── */

function PlanCta() {
  const lang = useReviewLang();
  const t = DAH_COPY[lang];
  return (
    <section className="pb-16 md:pb-24">
      <div className="container-luxe">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[color:var(--ink)] to-black p-8 text-white sm:p-12 lg:p-16">
            <div
              aria-hidden
              className="absolute -top-32 -end-32 h-96 w-96 rounded-full bg-[color:var(--gold)]/15 blur-3xl"
            />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <p className="max-w-2xl font-display text-2xl font-bold leading-snug tracking-tight md:text-4xl">
                {t.cta.text}
              </p>
              <Link
                to={DAH_PLAN_PATH}
                search={lang === "ar" ? { lang: "ar" } : {}}
                onClick={() =>
                  track("cta_click", { location: "review:dah-design", label: "see-plan" })
                }
                className="btn-gold min-h-14 w-full shrink-0 text-base sm:w-auto"
              >
                {t.cta.button} <Forward />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────── ABOUT ───────────────────── */

function AboutReview() {
  const t = useCopy();
  return (
    <section aria-labelledby="about-title" className="pb-16 md:pb-20">
      <div className="container-luxe">
        <div className="grid gap-4 rounded-3xl border border-border p-6 md:grid-cols-[14rem_1fr] md:gap-12 md:p-8">
          <h2
            id="about-title"
            className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground"
          >
            {t.about.title}
          </h2>
          <div className="max-w-3xl space-y-2 text-sm leading-relaxed text-muted-foreground">
            {t.about.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
