import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Brain,
  Compass,
  FlaskConical,
  Layers,
  Network,
  Plus,
  ShieldCheck,
  Target,
  UsersRound,
  X,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { FindingBlock, ReviewSectionHeader } from "@/components/prospect-review/ReviewPrimitives";
import { COUNTRIES } from "@/lib/customer-research/countries";
import type {
  Methodology,
  ProductOpportunity,
  ResearchProgram,
  RichText,
  Segment,
} from "@/lib/customer-research/types";

// Reusable sections for one customer-research segment. Every component takes
// its copy from the Segment / ResearchProgram data, so a new segment renders
// with no page changes.

/* ───────────────────── shared bits ───────────────────── */

function Rich({ parts }: { parts: RichText }) {
  return (
    <>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          part
        ) : (
          <strong key={i} className="font-semibold text-foreground">
            {part.strong}
          </strong>
        ),
      )}
    </>
  );
}

/** Step flow ("A → B → C"). Wraps on narrow screens; the last step is highlighted. */
export function JourneyFlow({
  steps,
  label,
  tone = "light",
}: {
  steps: string[];
  label: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <ol aria-label={label} className="flex flex-wrap items-center gap-x-1.5 gap-y-2">
      {steps.map((step, i) => {
        const last = i === steps.length - 1;
        return (
          <li key={`${step}-${i}`} className="flex items-center gap-1.5">
            {i > 0 && (
              <ArrowRight
                aria-hidden
                className={`h-3.5 w-3.5 shrink-0 ${dark ? "text-[color:var(--gold)]" : "text-[color:var(--gold-deep)]"}`}
              />
            )}
            <span
              className={`rounded-full border px-3 py-1.5 text-sm font-medium ${
                last
                  ? "border-[color:var(--gold)] bg-[color:var(--gold)]/15"
                  : dark
                    ? "border-white/15 text-white/85"
                    : "border-border bg-card"
              }`}
            >
              {step}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

/** Customer-potential meter: big percentage, gold bar and status badge. */
export function PotentialMeter({
  potential,
  status,
  statusLabel,
  score,
  tone = "dark",
}: {
  /** Omitted when the segment has not been scored: shows "Not yet scored", never an estimate. */
  potential?: number;
  status?: string;
  /** Optional segment score out of 10, shown under the bar. */
  score?: number;
  /** Optional caption above the status badge, e.g. "Current status". */
  statusLabel?: string;
  tone?: "dark" | "light";
}) {
  const reduced = useReducedMotion();
  const dark = tone === "dark";
  return (
    <div
      className={`rounded-3xl border p-6 md:p-7 ${dark ? "border-white/10 bg-white/[0.04]" : "border-border bg-card"}`}
    >
      <p
        className={`text-[0.7rem] font-medium uppercase tracking-[0.18em] ${dark ? "text-white/60" : "text-muted-foreground"}`}
      >
        Customer potential
      </p>
      {potential === undefined ? (
        <p
          className={`mt-3 font-display text-2xl font-semibold tracking-tight ${dark ? "text-white/80" : "text-foreground/80"}`}
        >
          Not yet scored
        </p>
      ) : (
        <>
          <p className="mt-3 font-display text-6xl font-bold leading-none tracking-tight tabular-nums md:text-7xl">
            <span className="text-gradient-gold">{potential}%</span>
          </p>
          <div
            role="meter"
            aria-label="Customer potential"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={potential}
            className={`mt-5 h-2 overflow-hidden rounded-full ${dark ? "bg-white/10" : "bg-muted"}`}
          >
            <motion.div
              className="h-full rounded-full bg-[image:var(--gradient-gold)]"
              initial={reduced ? false : { width: 0 }}
              whileInView={{ width: `${potential}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              style={reduced ? { width: `${potential}%` } : undefined}
            />
          </div>
        </>
      )}
      {score !== undefined && (
        <p
          className={`mt-5 flex items-baseline justify-between gap-3 border-t pt-4 ${dark ? "border-white/10" : "border-border"}`}
        >
          <span
            className={`text-[0.7rem] font-medium uppercase tracking-[0.18em] ${dark ? "text-white/60" : "text-muted-foreground"}`}
          >
            Segment score
          </span>
          <span className="font-display text-2xl font-bold tabular-nums">
            {score.toFixed(1)}
            <span
              className={`text-sm font-medium ${dark ? "text-white/50" : "text-muted-foreground"}`}
            >
              /10
            </span>
          </span>
        </p>
      )}
      {status && statusLabel && (
        <p
          className={`mt-5 text-[0.7rem] font-medium uppercase tracking-[0.18em] ${dark ? "text-white/60" : "text-muted-foreground"}`}
        >
          {statusLabel}
        </p>
      )}
      {status && (
        <p
          className={`${statusLabel ? "mt-2" : "mt-5"} inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${
            dark
              ? "border-[color:var(--gold)]/50 text-[color:var(--gold)]"
              : "border-[color:var(--gold)]/60 text-[color:var(--gold-deep)]"
          }`}
        >
          <BadgeCheck aria-hidden className="h-3.5 w-3.5" />
          {status}
        </p>
      )}
    </div>
  );
}

/** Labelled status rows (e.g. Research: Ready · Validation: Pending), used instead of the meter. */
export function StatusCard({
  items,
  tone = "dark",
}: {
  items: { label: string; value: string }[];
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";
  return (
    <dl
      className={`divide-y rounded-3xl border p-2 ${dark ? "divide-white/10 border-white/10 bg-white/[0.04]" : "divide-border border-border bg-card"}`}
    >
      {items.map((it, i) => (
        <div
          key={it.label}
          className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-4 py-4"
        >
          <dt
            className={`text-[0.7rem] font-medium uppercase tracking-[0.18em] ${dark ? "text-white/60" : "text-muted-foreground"}`}
          >
            {it.label}
          </dt>
          <dd
            className={`font-display text-xl font-bold tracking-tight ${i === 0 ? "text-gradient-gold" : ""}`}
          >
            {it.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function DecisionGate({ gate }: { gate: NonNullable<Segment["conclusion"]["gate"]> }) {
  return (
    <Reveal className="mt-10">
      <div className="rounded-3xl bg-[color:var(--ink)] p-6 text-white md:p-8">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[color:var(--gold)]">
          The decision question
        </p>
        <p className="mt-3 font-display text-2xl font-bold leading-snug tracking-tight md:text-3xl">
          {gate.question}
        </p>
        <dl className="mt-6 grid gap-3 sm:grid-cols-3">
          {gate.options.map((o) => (
            <div key={o.label} className="rounded-2xl border border-white/15 p-4">
              <dt className="font-display text-lg font-semibold text-[color:var(--gold)]">
                {o.label}
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-white/80">{o.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Reveal>
  );
}

/* ───────────────────── HERO ───────────────────── */

export function SegmentHero({ program, segment }: { program: ResearchProgram; segment: Segment }) {
  const [lead, ...rest] = segment.summary;
  const marketNames = program.markets.map((m) => COUNTRIES[m].short).join(" · ");
  return (
    <section className="relative overflow-hidden bg-[color:var(--ink)] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -end-40 h-[30rem] w-[30rem] rounded-full bg-[color:var(--gold)]/15 blur-3xl"
      />
      <div className="container-luxe relative py-14 md:py-20 lg:py-24">
        <p className="eyebrow animate-hero-eyebrow !text-[color:var(--gold)]">{program.title}</p>
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end lg:gap-16">
          <div className="min-w-0">
            <h1 className="animate-hero-title">
              <span className="block font-display text-5xl font-bold leading-none tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                Segment <span className="text-gradient-gold">{segment.number}</span>
              </span>
              <span className="mt-4 block font-display text-2xl font-semibold leading-tight tracking-tight text-white/90 sm:text-3xl lg:text-4xl">
                {segment.name}
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl animate-hero-desc">
              {lead}
            </p>
            <div className="mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-white/65 animate-hero-desc">
              {rest.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="animate-hero-cta">
            {segment.statusList ? (
              <StatusCard items={segment.statusList} />
            ) : (
              <PotentialMeter
                potential={segment.potential}
                status={segment.status}
                score={segment.score}
              />
            )}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium uppercase leading-relaxed tracking-[0.16em] text-white/60">
            {segment.heroMeta ?? (
              <>
                <span className="text-white">{segment.prospects.length} researched prospects</span>{" "}
                · {program.markets.length} GCC markets · {marketNames}
              </>
            )}
          </p>
          <a
            href={segment.heroCta?.href ?? "#prospects"}
            className="group inline-flex min-h-11 items-center gap-3 font-display text-sm font-semibold"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition-colors duration-300 group-hover:border-[color:var(--gold)]">
              <ArrowDown aria-hidden className="h-4 w-4" />
            </span>
            {segment.heroCta?.label ?? "View prospect database"}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── SEGMENT INTELLIGENCE ───────────────────── */

const CAPABILITY_ICONS: LucideIcon[] = [Brain, Compass, Network, Layers];

export function SegmentOverview({ segment }: { segment: Segment }) {
  const { why, capabilities, coreOpportunity: core } = segment;
  // Segments built from research blocks (e.g. Segment 04) have no overview.
  if (!why) return null;
  return (
    <section id="segment" aria-labelledby="segment-title" className="scroll-mt-20 py-16 md:py-24">
      <div className="container-luxe">
        <ReviewSectionHeader
          eyebrow="Segment intelligence"
          title={<span id="segment-title">{why.title}</span>}
        >
          <p>{why.lead ?? why.intro}</p>
        </ReviewSectionHeader>
        {why.journey && (
          <>
            <Reveal className="mt-8">
              <JourneyFlow steps={why.journey} label="Patient journey" />
            </Reveal>
            <Reveal>
              <p className="mt-10 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {why.intro}
              </p>
            </Reveal>
          </>
        )}
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {why.items.map((item, i) => (
            <Reveal as="li" key={item} delay={i * 0.03}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
                {item}
              </span>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <p className="mt-8 max-w-3xl border-s-2 border-[color:var(--gold)] ps-5 font-display text-xl font-semibold leading-snug tracking-tight md:text-2xl">
            {why.closing}
          </p>
        </Reveal>

        {segment.profile && <CustomerProfile profile={segment.profile} />}

        {core && <CoreOpportunity core={core} />}

        {capabilities && (
          <div className="mt-20">
            <Reveal>
              <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                {capabilities.title}
              </h3>
            </Reveal>
            <ul
              className={`mt-8 grid gap-4 sm:grid-cols-2 ${capabilities.items.length >= 4 ? "lg:grid-cols-4" : ""}`}
            >
              {capabilities.items.map((c, i) => {
                const Icon = CAPABILITY_ICONS[i % CAPABILITY_ICONS.length];
                return (
                  <Reveal as="li" key={c.title} delay={i * 0.05}>
                    <div className="h-full rounded-3xl border border-border bg-card p-6 transition-colors duration-300 hover:border-[color:var(--gold)]/60">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--gold)]/10 text-[color:var(--gold-deep)]">
                        <Icon aria-hidden className="h-[1.1rem] w-[1.1rem]" />
                      </span>
                      <h4 className="mt-5 font-display text-lg font-semibold tracking-tight">
                        {c.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
            <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted-foreground">
              {capabilities.caveat}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function CustomerProfile({ profile }: { profile: NonNullable<Segment["profile"]> }) {
  return (
    <Reveal className="mt-20">
      <h3 className="flex items-center gap-2.5 font-display text-2xl font-bold tracking-tight md:text-3xl">
        <UsersRound aria-hidden className="h-6 w-6 text-[color:var(--gold-deep)]" />
        {profile.title}
      </h3>
      <p className="mt-4 text-base text-muted-foreground">{profile.intro}</p>
      <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {profile.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium"
          >
            <BadgeCheck
              aria-hidden
              className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold-deep)]"
            />
            {item}
          </li>
        ))}
      </ul>
      {profile.note && (
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {profile.note}
        </p>
      )}
    </Reveal>
  );
}

function CoreOpportunity({ core }: { core: NonNullable<Segment["coreOpportunity"]> }) {
  return (
    <Reveal className="mt-20">
      <div className="rounded-3xl border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/[0.05] p-6 md:p-10">
        <p className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[color:var(--gold-deep)]">
          <Target aria-hidden className="h-4 w-4" />
          {core.eyebrow}
        </p>
        <h3 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
          {core.title}
        </h3>
        <div className="mt-8">
          <JourneyFlow steps={core.journey} label={`${core.title} journey`} />
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
          <div>
            <p className="text-base leading-relaxed text-foreground/85">{core.intro}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {core.outcomes.map((o) => (
                <li
                  key={o}
                  className="rounded-full border border-border bg-background px-3 py-1 text-sm"
                >
                  {o}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-display text-lg font-semibold leading-snug">{core.closing}</p>
          </div>
          <p className="self-start rounded-2xl border border-dashed border-foreground/25 bg-background p-4 text-sm leading-relaxed text-muted-foreground">
            <FlaskConical
              aria-hidden
              className="me-2 inline h-4 w-4 align-[-3px] text-[color:var(--gold-deep)]"
            />
            {core.caveat}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

/* ───────────────────── COMMERCIAL RATIONALE ───────────────────── */

/** "Why this segment may pay" — renders only when the segment provides a rationale. */
export function SegmentRationale({ segment }: { segment: Segment }) {
  const r = segment.rationale;
  if (!r) return null;
  return (
    <section
      id="rationale"
      aria-labelledby="rationale-title"
      className="scroll-mt-20 py-16 md:py-24"
    >
      <div className="container-luxe">
        <ReviewSectionHeader
          eyebrow="Commercial rationale"
          title={<span id="rationale-title">{r.title}</span>}
        >
          <p>{r.intro}</p>
        </ReviewSectionHeader>
        <Reveal className="mt-8">
          <JourneyFlow steps={r.transaction} label="Commercial transaction" />
        </Reveal>
        <Reveal>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {r.servicesIntro}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {r.services.map((s) => (
              <li
                key={s}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
              >
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <Reveal>
            <div className="h-full rounded-3xl border border-border p-6">
              <p className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                <X aria-hidden className="h-3.5 w-3.5" />
                Not the proposition
              </p>
              <p className="mt-3 font-display text-xl font-semibold text-muted-foreground line-through decoration-foreground/30">
                “{r.weakProposition}”
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="h-full rounded-3xl bg-[color:var(--ink)] p-6 text-white">
              <p className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[color:var(--gold)]">
                <BadgeCheck aria-hidden className="h-3.5 w-3.5" />
                The stronger proposition
              </p>
              <p className="mt-3 font-display text-xl font-semibold leading-snug">
                “{r.strongProposition}”
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── PILOT STRATEGY + POSITIONING ───────────────────── */

/** Pilot strategy and product positioning — renders only when the segment provides them. */
export function SegmentStrategy({ segment }: { segment: Segment }) {
  const { pilot, positioning } = segment;
  if (!pilot && !positioning) return null;
  return (
    <section id="pilot" aria-labelledby="pilot-title" className="scroll-mt-20 py-16 md:py-24">
      <div className="container-luxe">
        {pilot && (
          <>
            <ReviewSectionHeader
              eyebrow="Go-to-market"
              title={<span id="pilot-title">{pilot.title}</span>}
            >
              <p>{pilot.intro}</p>
            </ReviewSectionHeader>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {pilot.items.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
                >
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
                  {item}
                </li>
              ))}
            </ul>
            <Reveal className="mt-8">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                The goal
              </p>
              <div className="mt-3">
                <JourneyFlow steps={pilot.loop} label="Pilot loop" />
              </div>
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {pilot.closing}
              </p>
            </Reveal>
          </>
        )}
        {positioning && (
          <div
            className={`grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] ${pilot ? "mt-16" : ""}`}
          >
            <Reveal>
              <div className="h-full rounded-3xl border border-border p-6">
                <p className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  <X aria-hidden className="h-3.5 w-3.5" />
                  {positioning.notIntro}
                </p>
                <ul className="mt-4 space-y-2">
                  {positioning.notItems.map((item) => (
                    <li
                      key={item}
                      className="font-display text-base font-semibold text-muted-foreground line-through decoration-foreground/30"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="h-full rounded-3xl bg-[color:var(--ink)] p-6 text-white md:p-8">
                <p className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[color:var(--gold)]">
                  <BadgeCheck aria-hidden className="h-3.5 w-3.5" />
                  {positioning.title}
                </p>
                <div className="mt-4 space-y-3 font-display text-xl font-semibold leading-snug">
                  {positioning.statement.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}

/* ───────────────────── PRODUCT OPPORTUNITIES ───────────────────── */

export function ProductOpportunities({ segment }: { segment: Segment }) {
  const { productOpportunities: po } = segment;
  if (!po) return null;
  return (
    <section
      id="opportunities"
      aria-labelledby="opportunities-title"
      className="scroll-mt-20 bg-[color:var(--ink)] py-16 text-white md:py-24"
    >
      <div className="container-luxe">
        <ReviewSectionHeader
          tone="dark"
          eyebrow="Product research"
          title={<span id="opportunities-title">{po.title}</span>}
        />
        <Reveal>
          <p className="mt-6 inline-flex max-w-full items-start gap-2.5 rounded-2xl border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/[0.08] px-4 py-3 text-sm leading-snug text-white/85">
            <FlaskConical
              aria-hidden
              className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]"
            />
            {po.label}
          </p>
        </Reveal>
        <ol className="mt-10 grid gap-5 md:grid-cols-2">
          {po.items.map((o, i) => (
            <Reveal as="li" key={o.number} delay={i * 0.06}>
              <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
                <div className="flex items-baseline gap-4">
                  <span
                    aria-hidden
                    className="font-display text-4xl font-bold leading-none text-gradient-gold"
                  >
                    {o.number}
                  </span>
                  <h3 className="font-display text-xl font-bold tracking-tight md:text-2xl">
                    <span className="sr-only">{o.number} — </span>
                    {o.title}
                  </h3>
                </div>
                {o.tag && (
                  <p className="mt-4 inline-flex w-fit rounded-full border border-white/15 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-white/60">
                    {o.tag}
                  </p>
                )}
                <p className="mt-5 text-[0.975rem] leading-relaxed text-white/75">
                  {o.description}
                </p>
                {o.items && (
                  <div className="mt-4">
                    {o.itemsLabel && (
                      <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-white/50">
                        {o.itemsLabel}
                      </p>
                    )}
                    <ul className="mt-2 flex flex-wrap items-center gap-1.5">
                      {o.items.map((item, j) => (
                        <li key={item} className="flex items-center gap-1.5">
                          {o.chain && j > 0 && <ChainMark chain={o.chain} />}
                          <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/85">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {o.questions && (
                  <div className="mt-5">
                    <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-white/50">
                      Potential questions
                    </p>
                    <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-white/80">
                      {o.questions.map((q) => (
                        <li key={q} className="flex gap-2">
                          <span aria-hidden className="text-[color:var(--gold)]">
                            ?
                          </span>
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {o.note && (
                  <p className="mt-5 border-s-2 border-dashed border-white/25 ps-3 text-xs leading-relaxed text-white/60">
                    {o.note}
                  </p>
                )}
                {o.commercialValue && (
                  <div className="mt-auto pt-6">
                    <div className="rounded-2xl border border-[color:var(--gold)]/30 p-4">
                      <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[color:var(--gold)]">
                        Commercial value
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/85">
                        {o.commercialValue}
                      </p>
                    </div>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ChainMark({ chain }: { chain: NonNullable<ProductOpportunity["chain"]> }) {
  if (chain === true || chain === "+")
    return <Plus aria-hidden className="h-3 w-3 text-[color:var(--gold)]" />;
  if (chain === "→") return <ArrowRight aria-hidden className="h-3 w-3 text-[color:var(--gold)]" />;
  return <X aria-hidden className="h-3 w-3 text-[color:var(--gold)]" />;
}

/* ───────────────────── RESEARCH INTEGRITY ───────────────────── */

export function ResearchMethodology({ methodology: m }: { methodology: Methodology }) {
  return (
    <section
      id="method"
      aria-labelledby="method-title"
      className="scroll-mt-20 bg-muted/40 py-16 md:py-20"
    >
      <div className="container-luxe">
        <Reveal className="max-w-3xl">
          <p className="eyebrow flex items-center gap-2">
            <ShieldCheck aria-hidden className="h-4 w-4 text-[color:var(--gold-deep)]" />
            Research integrity
          </p>
          <h2
            id="method-title"
            className="mt-5 font-display text-2xl font-bold tracking-tight md:text-3xl"
          >
            {m.title ?? "How to read each prospect"}
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-background p-6">
              <FindingBlock kind="signal" label={m.evidence.title}>
                <p>{m.evidence.body}</p>
                {m.evidenceSources && (
                  <ul className="flex flex-wrap gap-1.5">
                    {m.evidenceSources.map((src) => (
                      <li
                        key={src}
                        className="rounded-full border border-border px-2.5 py-0.5 text-xs text-foreground/75"
                      >
                        {src}
                      </li>
                    ))}
                  </ul>
                )}
              </FindingBlock>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="h-full rounded-3xl border border-border bg-background p-6">
              <FindingBlock kind="observation" label={m.hypothesis.title}>
                <p>{m.hypothesis.body}</p>
              </FindingBlock>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
            <WordingList title="Language used" items={m.useWording} positive />
            <WordingList
              title="Language avoided unless publicly evidenced"
              items={m.avoidWording}
            />
          </div>
        </Reveal>
        {m.levels && (
          <Reveal>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
              {m.levels.map((lvl) => (
                <li key={lvl.label} className="rounded-2xl border border-border bg-background p-4">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-deep)]">
                    {lvl.label}
                  </p>
                  <p className="mt-1.5 text-sm leading-snug text-foreground/80">{lvl.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
        {m.noAccessClaims && (
          <Reveal>
            <div className="mt-6 text-sm">
              <WordingList
                title="No access claimed to internal data such as"
                items={m.noAccessClaims}
              />
            </div>
          </Reveal>
        )}
        {m.scores && (
          <Reveal>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {m.scores.map((sc) => (
                <div key={sc.name} className="rounded-3xl border border-border bg-background p-6">
                  <p className="font-display text-lg font-semibold tracking-tight">{sc.name}</p>
                  <p className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    Measures
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {sc.measures.map((x) => (
                      <li
                        key={x}
                        className="rounded-full border border-border px-2.5 py-0.5 text-xs text-foreground/75"
                      >
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        )}
        {m.note && (
          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted-foreground">{m.note}</p>
        )}
      </div>
    </section>
  );
}

function WordingList({
  title,
  items,
  positive = false,
}: {
  title: string;
  items: string[];
  positive?: boolean;
}) {
  return (
    <div>
      <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
        {title}
      </p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {items.map((w) => (
          <li
            key={w}
            className={`rounded-full border px-3 py-1 text-xs ${
              positive
                ? "border-[color:var(--gold)]/50 text-foreground"
                : "border-border text-muted-foreground line-through decoration-foreground/30"
            }`}
          >
            {w}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ───────────────────── CONCLUSION ───────────────────── */

export function SegmentConclusion({ segment }: { segment: Segment }) {
  const c = segment.conclusion;
  return (
    <section
      id="conclusion"
      aria-labelledby="conclusion-title"
      className="scroll-mt-20 py-16 md:py-24"
    >
      <div className="container-luxe">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
          <div className="min-w-0">
            <ReviewSectionHeader
              eyebrow={`Segment ${segment.number}`}
              title={<span id="conclusion-title">{c.title}</span>}
            />
            <Reveal>
              <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-foreground/80 md:text-lg">
                {c.paragraphs.map((parts, i) => (
                  <p key={i}>
                    <Rich parts={parts} />
                  </p>
                ))}
              </div>
            </Reveal>
            {c.loop && (
              <Reveal className="mt-8">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Core loop
                </p>
                <div className="mt-3">
                  <JourneyFlow steps={c.loop} label="Core loop" />
                </div>
              </Reveal>
            )}
            {c.gate && <DecisionGate gate={c.gate} />}
          </div>
          <Reveal className="lg:pt-16">
            {segment.statusList ? (
              <StatusCard items={segment.statusList} tone="light" />
            ) : (
              <PotentialMeter
                potential={segment.potential}
                status={segment.status}
                statusLabel="Current status"
                score={segment.score}
                tone="light"
              />
            )}
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{c.statusNote}</p>
            {c.unvalidated && (
              <div className="mt-6 rounded-2xl border border-dashed border-foreground/25 p-4">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  {c.unvalidated.title}
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {c.unvalidated.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-foreground/75"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
