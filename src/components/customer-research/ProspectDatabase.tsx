import { useMemo, useState, type ReactNode } from "react";
import {
  ChevronDown,
  ExternalLink,
  FlaskConical,
  Flag,
  Globe,
  Info,
  Mail,
  Phone,
  Quote,
  Sparkles,
} from "lucide-react";
import { FindingBlock } from "@/components/prospect-review/ReviewPrimitives";
import { COUNTRIES, PRIORITY_LABEL, displayHost, telHref } from "@/lib/customer-research/countries";
import type {
  CountryCode,
  EvidenceStatus,
  Priority,
  Prospect,
  ProspectContact,
  Segment,
} from "@/lib/customer-research/types";

// Prospect database for a research segment. Desktop: a scannable table-like
// list (business · country · core opportunity · fit · priority) where each row
// expands to the full research. Mobile: the same rows stack as cards — no
// horizontal table. Rows are native <details>, so they work before hydration.

type CountryFilter = "all" | CountryCode;

/** Score at or above which a prospect counts as "Score 9+". */
const TOP_SCORE = 9;

/** Priorities matched by the "High priority" filter. */
const HIGH_PRIORITIES: Priority[] = ["very-high", "high", "high-strategic"];

/** Segment-level presentation options shared by every card. */
interface CardOptions {
  scoring?: Segment["scoring"];
  solutionLabel?: string;
  currentCapability?: string;
  view?: Segment["view"];
}

export function ProspectDatabase({
  prospects,
  markets,
  scoring,
  solutionLabel,
  currentCapability,
  view,
}: {
  prospects: Prospect[];
  markets: CountryCode[];
} & CardOptions) {
  const cardOptions: CardOptions = { scoring, solutionLabel, currentCapability, view };
  const priorityFilter = view?.priorityFilter ?? {
    label: "High priority",
    values: HIGH_PRIORITIES,
  };
  const [country, setCountry] = useState<CountryFilter>("all");
  const [highOnly, setHighOnly] = useState(false);
  const [topOnly, setTopOnly] = useState(false);
  const [attrOnly, setAttrOnly] = useState(false);
  const attrFilter = view?.attributeFilter;
  const [open, setOpen] = useState<Set<string>>(() => new Set());

  const visible = useMemo(
    () =>
      prospects.filter(
        (p) =>
          (country === "all" || p.country === country) &&
          (!highOnly || priorityFilter.values.includes(p.priority)) &&
          (!topOnly || (p.fitScore ?? 0) >= TOP_SCORE) &&
          (!attrOnly ||
            !attrFilter ||
            (p.attributes ?? []).some(
              (a) => a.label === attrFilter.attribute && a.value.startsWith(attrFilter.value),
            )),
      ),
    [prospects, country, highOnly, topOnly, priorityFilter.values, attrOnly, attrFilter],
  );

  const groups = markets
    .map((code) => ({ code, items: visible.filter((p) => p.country === code) }))
    .filter((g) => g.items.length > 0);

  const allOpen = visible.length > 0 && visible.every((p) => open.has(p.id));
  const toggleAll = () =>
    setOpen((prev) => {
      const next = new Set(prev);
      for (const p of visible) {
        if (allOpen) next.delete(p.id);
        else next.add(p.id);
      }
      return next;
    });
  const setRowOpen = (id: string, isOpen: boolean) =>
    setOpen((prev) => {
      if (prev.has(id) === isOpen) return prev;
      const next = new Set(prev);
      if (isOpen) next.add(id);
      else next.delete(id);
      return next;
    });

  const countryOptions: { id: CountryFilter; label: string; count: number }[] = [
    { id: "all", label: "All", count: prospects.length },
    ...markets.map((code) => ({
      id: code,
      label: COUNTRIES[code].short,
      count: prospects.filter((p) => p.country === code).length,
    })),
  ];

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-4 md:p-5 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filter by country" className="flex flex-wrap gap-2">
          {countryOptions.map((o) => (
            <FilterButton key={o.id} pressed={country === o.id} onClick={() => setCountry(o.id)}>
              {o.label}
              <span
                className={`tabular-nums text-xs ${country === o.id ? "text-primary-foreground/60" : "text-muted-foreground"}`}
              >
                {o.count}
              </span>
            </FilterButton>
          ))}
        </div>
        <div role="group" aria-label="Refine" className="flex flex-wrap gap-2">
          <FilterButton pressed={highOnly} onClick={() => setHighOnly((v) => !v)} variant="toggle">
            {priorityFilter.label}
          </FilterButton>
          {attrFilter && (
            <FilterButton
              pressed={attrOnly}
              onClick={() => setAttrOnly((v) => !v)}
              variant="toggle"
            >
              {attrFilter.label}
            </FilterButton>
          )}
          {!view?.hideScore && (
            <FilterButton pressed={topOnly} onClick={() => setTopOnly((v) => !v)} variant="toggle">
              {scoring?.primaryShort ?? "Score"} {TOP_SCORE}+
            </FilterButton>
          )}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p aria-live="polite" className="text-sm text-muted-foreground">
          Showing{" "}
          <span className="font-semibold text-foreground tabular-nums">{visible.length}</span> of{" "}
          <span className="tabular-nums">{prospects.length}</span> researched prospects
        </p>
        {visible.length > 0 && (
          <button
            type="button"
            onClick={toggleAll}
            className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            <ChevronDown
              aria-hidden
              className={`h-4 w-4 transition-transform duration-300 ${allOpen ? "rotate-180" : ""}`}
            />
            {allOpen ? "Collapse all" : "Expand all"}
          </button>
        )}
      </div>

      {groups.length === 0 ? (
        <div className="mt-6 rounded-3xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
          No prospects match these filters.
        </div>
      ) : (
        <div className="mt-4 space-y-10">
          {groups.map((g) => (
            <section key={g.code} aria-labelledby={`market-${g.code}`}>
              <div className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
                <h3
                  id={`market-${g.code}`}
                  className="font-display text-xl font-bold tracking-tight md:text-2xl"
                >
                  {COUNTRIES[g.code].label}
                </h3>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {g.items.length} {g.items.length === 1 ? "prospect" : "prospects"}
                </p>
              </div>
              <TableHead
                scoreLabel={scoring?.primaryShort}
                hideScore={view?.hideScore}
                solutionColumn={view?.solutionColumn}
                priorityLabel={view?.priorityLabel}
              />
              <ul className="mt-3 space-y-3 lg:mt-0">
                {g.items.map((p) => (
                  <li key={p.id}>
                    <ProspectCard
                      {...cardOptions}
                      prospect={p}
                      open={open.has(p.id)}
                      onToggle={(isOpen) => setRowOpen(p.id, isOpen)}
                    />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

function FilterButton({
  pressed,
  onClick,
  children,
  variant = "segment",
}: {
  pressed: boolean;
  onClick: () => void;
  children: ReactNode;
  variant?: "segment" | "toggle";
}) {
  const on =
    variant === "segment"
      ? "border-primary bg-primary text-primary-foreground"
      : "border-[color:var(--gold)] bg-[color:var(--gold)]/10 text-foreground";
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors duration-200 ${
        pressed
          ? on
          : "border-border bg-background text-foreground/75 hover:border-foreground/30 hover:text-foreground"
      }`}
    >
      {variant === "toggle" && (
        <span
          aria-hidden
          className={`h-1.5 w-1.5 rounded-full ${pressed ? "bg-[color:var(--gold)]" : "bg-foreground/25"}`}
        />
      )}
      {children}
    </button>
  );
}

/** Desktop row grid, shared by the column header and each row summary. */
const ROW_GRID =
  "lg:grid lg:grid-cols-[minmax(0,1.25fr)_7.5rem_minmax(0,1.6fr)_5rem_8rem_1.25rem] lg:items-center lg:gap-6";

/** Row grid without the score column (segments with no numeric scores). */
const ROW_GRID_NO_SCORE =
  "lg:grid lg:grid-cols-[minmax(0,1.1fr)_7rem_minmax(0,1.6fr)_11.5rem_1.25rem] lg:items-center lg:gap-6";

function TableHead({
  scoreLabel = "Fit",
  hideScore,
  solutionColumn = "Core opportunity",
  priorityLabel = "Priority",
}: {
  scoreLabel?: string;
  hideScore?: boolean;
  solutionColumn?: string;
  priorityLabel?: string;
}) {
  return (
    <div
      aria-hidden
      className={`hidden px-5 py-3 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-muted-foreground ${hideScore ? ROW_GRID_NO_SCORE : ROW_GRID}`}
    >
      <span>Business</span>
      <span>Country</span>
      <span>{solutionColumn}</span>
      {!hideScore && <span>{scoreLabel}</span>}
      <span>{priorityLabel}</span>
      <span />
    </div>
  );
}

export function FitScore({ score, label = "Fit score" }: { score: number; label?: string }) {
  const top = score >= TOP_SCORE;
  return (
    <span
      className={`inline-flex items-baseline gap-0.5 rounded-full border px-2.5 py-1 font-display text-sm font-bold tabular-nums ${
        top
          ? "border-[color:var(--gold)]/60 bg-[color:var(--gold)]/10"
          : "border-border bg-background"
      }`}
    >
      <span className="sr-only">{label} </span>
      {score.toFixed(1)}
      <span className="text-[0.7rem] font-medium text-muted-foreground">/10</span>
    </span>
  );
}

export function PriorityBadge({
  priority,
  srLabel = "Priority",
}: {
  priority: Priority;
  srLabel?: string;
}) {
  const high =
    priority === "high" ||
    priority === "high-strategic" ||
    priority === "wave-1" ||
    priority === "icp-primary" ||
    priority === "commercial";
  const veryHigh = priority === "very-high" || priority === "early-pilot";
  const stretch = priority === "strategic-stretch" || priority === "wave-3";
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] ${
        veryHigh
          ? "bg-[image:var(--gradient-gold)] text-[color:var(--ink)]"
          : high
            ? "bg-primary text-primary-foreground"
            : stretch
              ? "border border-dashed border-foreground/40 text-foreground/80"
              : "border border-foreground/20 text-foreground/80"
      }`}
    >
      <span
        aria-hidden
        className={`h-1.5 w-1.5 rounded-full ${veryHigh ? "bg-[color:var(--ink)]" : high ? "bg-[color:var(--gold)]" : "bg-[color:var(--gold-deep)]/60"}`}
      />
      <span className="sr-only">{srLabel}: </span>
      {PRIORITY_LABEL[priority]}
    </span>
  );
}

export function ProspectCard({
  prospect: p,
  open,
  onToggle,
  scoring,
  solutionLabel = "Recommended Tansiq solution",
  currentCapability,
  view,
}: {
  prospect: Prospect;
  open: boolean;
  onToggle: (open: boolean) => void;
} & CardOptions) {
  const country = COUNTRIES[p.country].short;
  const scoreLabel = scoring?.primary ?? "Fit score";
  const score = view?.hideScore ? undefined : p.fitScore;
  const priorityLabel = view?.priorityLabel ?? "Priority";
  return (
    <details
      open={open}
      onToggle={(e) => onToggle(e.currentTarget.open)}
      className="group rounded-2xl border border-border bg-card transition-colors duration-300 open:border-[color:var(--gold)]/50 open:shadow-luxe hover:border-foreground/25 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary
        className={`relative cursor-pointer list-none rounded-2xl p-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--gold)] ${view?.hideScore ? ROW_GRID_NO_SCORE : ROW_GRID}`}
      >
        {/* Business */}
        <div className="flex items-start justify-between gap-3 lg:block">
          <h4 className="min-w-0 font-display text-base font-semibold leading-snug tracking-tight md:text-lg lg:text-base">
            {p.name}
          </h4>
          <ChevronDown
            aria-hidden
            className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180 lg:hidden"
          />
          {p.flags && (
            <span className="mt-1.5 hidden flex-wrap gap-1.5 lg:flex">
              {p.flags.map((f) => (
                <FlagChip key={f}>{f}</FlagChip>
              ))}
            </span>
          )}
        </div>
        {/* Country */}
        <p className="hidden text-sm text-muted-foreground lg:block">{country}</p>
        {/* Core opportunity */}
        <p className="mt-2 text-sm leading-snug text-foreground/80 lg:mt-0">{p.solution}</p>
        {/* Mobile badge row */}
        <div className="mt-3 flex flex-wrap items-center gap-2 lg:hidden">
          <span className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
            {country}
          </span>
          {score !== undefined && <FitScore score={score} label={scoreLabel} />}
          <PriorityBadge priority={p.priority} srLabel={priorityLabel} />
          {p.flags?.map((f) => (
            <FlagChip key={f}>{f}</FlagChip>
          ))}
        </div>
        {/* Desktop score + priority */}
        {!view?.hideScore && (
          <div className="hidden lg:block">
            {score !== undefined && <FitScore score={score} label={scoreLabel} />}
          </div>
        )}
        <div className="hidden lg:block">
          <PriorityBadge priority={p.priority} srLabel={priorityLabel} />
        </div>
        <ChevronDown
          aria-hidden
          className="hidden h-4 w-4 text-muted-foreground transition-transform duration-300 group-open:rotate-180 lg:block"
        />
        <span className="sr-only">{open ? "Hide research" : "Show full research"}</span>
      </summary>

      {/* overflow-wrap:anywhere lets long slash-joined terms wrap inside narrow cards. */}
      <div className="border-t border-border px-5 pb-6 pt-6 [overflow-wrap:anywhere] md:px-6">
        {scoring?.secondary && (
          <dl className="mb-8 grid gap-3 sm:grid-cols-2">
            <ScoreTile label={scoring.primary} score={p.fitScore} />
            <ScoreTile label={scoring.secondary} score={p.secondaryScore} />
          </dl>
        )}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
          {/* Evidence → interpretation */}
          <div className="grid content-start gap-6">
            {p.evidence ? (
              <FindingBlock kind="signal" label="Evidence · status-labelled">
                <ul className="space-y-3">
                  {p.evidence.map((e) => (
                    <li key={e.text}>
                      <EvidenceChip status={e.status} />
                      <p className="mt-1">{e.text}</p>
                      {e.source && (
                        <p className="mt-0.5 text-xs text-muted-foreground">Source: {e.source}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </FindingBlock>
            ) : (
              <FindingBlock kind="signal" label="What we verified · public evidence">
                {p.verified.length > 0 ? (
                  p.verified.map((v) => <p key={v}>{v}</p>)
                ) : (
                  <p className="text-muted-foreground">
                    No prospect-level facts in stored research yet — verification pending.
                  </p>
                )}
              </FindingBlock>
            )}
            {p.opportunity && (
              <FindingBlock
                kind="observation"
                label={view?.opportunityLabel ?? "Observed opportunity · research hypothesis"}
              >
                <p>{p.opportunity}</p>
              </FindingBlock>
            )}
            {p.featureOpportunity && (
              <FindingBlock kind="observation" label="Feature opportunity · validation recommended">
                <p>{p.featureOpportunity}</p>
              </FindingBlock>
            )}
            {p.researchNotes && (
              <div className="rounded-2xl border border-border bg-muted/40 p-4">
                <p className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  <Info aria-hidden className="h-3.5 w-3.5 text-[color:var(--gold-deep)]" />
                  Research notes
                </p>
                <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-foreground/75">
                  {p.researchNotes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </div>
            )}
            {p.sources && (
              <div>
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Sources
                </p>
                <ul className="mt-2 space-y-1 text-sm">
                  {p.sources.map((src) => (
                    <li key={src.url}>
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-start gap-1.5 text-foreground/80 underline decoration-foreground/25 underline-offset-2 hover:text-foreground"
                      >
                        <ExternalLink aria-hidden className="mt-1 h-3 w-3 shrink-0" />
                        {src.label}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Recommendation */}
          <div className="grid content-start gap-6">
            <FindingBlock kind="opportunity" label={solutionLabel}>
              <p className="font-display text-lg font-semibold leading-snug text-foreground">
                {p.solution}
              </p>
            </FindingBlock>
            {p.pilotQuestion && (
              <Field
                icon={FlaskConical}
                label={view?.pilotQuestionLabel ?? "Pilot question · to validate"}
              >
                {p.pilotQuestion}
              </Field>
            )}
            {p.attributes && (
              <dl className="grid gap-3 sm:grid-cols-2">
                {p.attributes.map((a) => (
                  <MiniField key={a.label} label={a.label}>
                    {a.value}
                  </MiniField>
                ))}
              </dl>
            )}
            {(p.role || p.metricConcept || p.pilotFamilies || p.learningFocus) && (
              <dl className="grid gap-3 sm:grid-cols-2">
                {p.role && <MiniField label="Research role">{p.role}</MiniField>}
                {p.metricConcept && (
                  <MiniField label="Candidate metric · proposed">{p.metricConcept}</MiniField>
                )}
                {p.pilotFamilies && (
                  <MiniField label="Example case in">{p.pilotFamilies.join(" · ")}</MiniField>
                )}
                {p.learningFocus && (
                  <MiniField label="Product-learning focus">{p.learningFocus}</MiniField>
                )}
              </dl>
            )}
            {p.firstPilot && (
              <div>
                <p className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  <FlaskConical aria-hidden className="h-3.5 w-3.5 text-[color:var(--gold-deep)]" />
                  First pilot · recommendation
                </p>
                <p className="mt-2 text-[0.975rem] leading-relaxed text-foreground/85">
                  {p.firstPilot}
                </p>
              </div>
            )}
            {currentCapability && (
              <div>
                <p className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  <Sparkles aria-hidden className="h-3.5 w-3.5 text-[color:var(--gold-deep)]" />
                  Tansiq current capability
                </p>
                <p className="mt-2 text-[0.975rem] leading-relaxed text-foreground/85">
                  {currentCapability}
                </p>
              </div>
            )}
            {p.whyBuy && (
              <div>
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Why they may buy
                </p>
                <p className="mt-2 text-[0.975rem] leading-relaxed text-foreground/85">
                  {p.whyBuy}
                </p>
              </div>
            )}
            {p.outreachAngle && (
              <div className="rounded-2xl bg-[color:var(--ink)] p-5 text-white">
                <p className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white/60">
                  <Quote aria-hidden className="h-3.5 w-3.5 text-[color:var(--gold)]" />
                  Recommended outreach angle
                </p>
                <p className="mt-2 font-display text-base font-semibold leading-snug md:text-lg">
                  {p.outreachAngle}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Public business contact */}
        <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-border bg-muted/40 p-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Public business contact
            </p>
            {p.contactType && (
              <p className="mt-1 text-xs text-muted-foreground">Contact type: {p.contactType}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            {p.website ? (
              <ExternalPill
                href={p.website}
                label={displayHost(p.website)}
                srLabel="official website"
              />
            ) : (
              <ContactNote>Official website not verified in this research</ContactNote>
            )}
            {p.links?.map((l) => (
              <ExternalPill key={l.url} href={l.url} label={l.label} srLabel="official page" />
            ))}
            {(Array.isArray(p.contact) ? p.contact : [p.contact]).map((c, i) => (
              <ContactItem key={i} contact={c} />
            ))}
          </div>
        </div>
      </div>
    </details>
  );
}

const PILL =
  "inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-background px-4 text-sm font-medium transition-colors hover:border-[color:var(--gold)]";

function ExternalPill({ href, label, srLabel }: { href: string; label: string; srLabel: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={PILL}>
      <Globe aria-hidden className="h-4 w-4 text-[color:var(--gold-deep)]" />
      <span className="break-all">{label}</span>
      <ExternalLink aria-hidden className="h-3.5 w-3.5 text-muted-foreground" />
      <span className="sr-only">({srLabel}, opens in a new tab)</span>
    </a>
  );
}

function ContactNote({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-start gap-2 px-1 text-sm leading-snug text-muted-foreground sm:max-w-xs">
      <Info aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold-deep)]" />
      {children}
    </p>
  );
}

function FlagChip({ children }: { children: string }) {
  return (
    <span className="inline-flex max-w-full items-center gap-1 rounded-full border border-dashed border-[color:var(--gold-deep)]/60 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--gold-deep)]">
      <Flag aria-hidden className="h-3 w-3 shrink-0" />
      {children}
    </span>
  );
}

const EVIDENCE_LABEL: Record<EvidenceStatus, string> = {
  verified: "Verified",
  attributed: "Attributed",
  inferred: "Inferred",
  hypothesis: "Hypothesis",
  unresolved: "Unresolved",
};

function EvidenceChip({ status }: { status: EvidenceStatus }) {
  const strong = status === "verified";
  return (
    <span
      className={`inline-flex rounded-full px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] ${
        strong
          ? "bg-primary text-primary-foreground"
          : "border border-foreground/25 text-foreground/75"
      }`}
    >
      {EVIDENCE_LABEL[status]}
    </span>
  );
}

function Field({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Info;
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        <Icon aria-hidden className="h-3.5 w-3.5 text-[color:var(--gold-deep)]" />
        {label}
      </p>
      <p className="mt-2 text-[0.975rem] leading-relaxed text-foreground/85">{children}</p>
    </div>
  );
}

function MiniField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-muted/40 px-4 py-3">
      <dt className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-medium leading-snug">{children}</dd>
    </div>
  );
}

function ScoreTile({ label, score }: { label: string; score?: number }) {
  return (
    <div className="flex items-baseline justify-between gap-3 rounded-2xl border border-border bg-muted/40 px-4 py-3">
      <dt className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </dt>
      <dd className="font-display text-lg font-bold tabular-nums">
        {score === undefined ? (
          <span className="text-sm font-medium text-muted-foreground">Not yet scored</span>
        ) : (
          <>
            {score.toFixed(1)}
            <span className="text-xs font-medium text-muted-foreground">/10</span>
          </>
        )}
      </dd>
    </div>
  );
}

function ContactItem({ contact }: { contact: ProspectContact }) {
  if (contact.kind === "website") return <ContactNote>{contact.note}</ContactNote>;
  if (contact.kind === "email")
    return (
      <a
        href={`mailto:${contact.address}`}
        className="inline-flex min-h-11 flex-wrap items-center gap-x-2 gap-y-0.5 rounded-2xl border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:border-[color:var(--gold)]"
      >
        <Mail aria-hidden className="h-4 w-4 shrink-0 text-[color:var(--gold-deep)]" />
        {contact.label && <span className="text-muted-foreground">{contact.label}</span>}
        <span className="break-all">{contact.address}</span>
      </a>
    );
  return (
    <a href={telHref(contact)} className={`${PILL} tabular-nums`}>
      <Phone aria-hidden className="h-4 w-4 text-[color:var(--gold-deep)]" />
      {contact.label && <span className="text-muted-foreground">{contact.label}</span>}
      <span dir="ltr" className="whitespace-nowrap">
        {contact.number}
      </span>
    </a>
  );
}
