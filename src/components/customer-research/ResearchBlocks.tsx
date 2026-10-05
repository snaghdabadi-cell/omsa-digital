import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  FlaskConical,
  RotateCcw,
  TriangleAlert,
  X,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ReviewSectionHeader } from "@/components/prospect-review/ReviewPrimitives";
import { JourneyFlow } from "@/components/customer-research/SegmentSections";
import type {
  BlockContent,
  ConfidenceStatus,
  ResearchBlock,
  Segment,
} from "@/lib/customer-research/types";

// Generic research sections (thesis, ICP, patterns, roadmap…) rendered from
// `Segment.blocks`. Segments without blocks render nothing here, so earlier
// segments are unaffected. Every block can carry a status tag, e.g.
// "Proposed direction — not current capability".

type Tone = "light" | "dark";

/** Renders the segment's blocks for one placement slot. */
export function ResearchBlocks({
  segment,
  placement,
}: {
  segment: Segment;
  placement: ResearchBlock["placement"];
}) {
  const blocks = segment.blocks?.filter((b) => b.placement === placement);
  if (!blocks?.length) return null;
  return (
    <>
      {blocks.map((b) => (
        <Block key={b.id} block={b} />
      ))}
    </>
  );
}

const SECTION_BG: Record<NonNullable<ResearchBlock["tone"]>, string> = {
  light: "bg-background",
  muted: "bg-muted/40",
  dark: "bg-[color:var(--ink)] text-white",
};

function Block({ block: b }: { block: ResearchBlock }) {
  const tone: Tone = b.tone === "dark" ? "dark" : "light";
  const dark = tone === "dark";
  const body = (
    <div className="mt-10 grid gap-10">
      {b.content.map((c, i) => (
        <Reveal key={i}>
          <Content content={c} tone={tone} />
        </Reveal>
      ))}
    </div>
  );
  return (
    <section
      id={b.id}
      aria-labelledby={`${b.id}-title`}
      className={`scroll-mt-20 py-16 md:py-20 ${SECTION_BG[b.tone ?? "light"]}`}
    >
      <div className="container-luxe">
        <ReviewSectionHeader
          tone={tone}
          eyebrow={b.eyebrow}
          title={<span id={`${b.id}-title`}>{b.title}</span>}
        >
          {b.intro && <p>{b.intro}</p>}
        </ReviewSectionHeader>
        {b.status && (
          <div className="mt-6">
            <ConfidenceChip status={b.status} tone={tone} withPhrase />
          </div>
        )}
        {b.tag && (
          <p
            className={`mt-6 inline-flex max-w-full items-start gap-2 rounded-2xl border px-3.5 py-2 text-xs font-medium leading-snug ${
              dark
                ? "border-[color:var(--gold)]/40 bg-[color:var(--gold)]/[0.08] text-white/85"
                : "border-[color:var(--gold)]/50 bg-[color:var(--gold)]/[0.07] text-foreground/85"
            }`}
          >
            <FlaskConical
              aria-hidden
              className={`mt-px h-3.5 w-3.5 shrink-0 ${dark ? "text-[color:var(--gold)]" : "text-[color:var(--gold-deep)]"}`}
            />
            {b.tag}
          </p>
        )}
        {b.collapsible ? (
          <details className="group mt-8 rounded-3xl border border-border bg-background [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 rounded-3xl px-5 py-3 text-sm font-medium text-foreground/80 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--gold)]">
              <span className="group-open:hidden">Show details</span>
              <span className="hidden group-open:inline">Hide details</span>
              <ChevronDown
                aria-hidden
                className="h-4 w-4 shrink-0 transition-transform duration-300 group-open:rotate-180"
              />
            </summary>
            <div className="px-5 pb-6 [&>div]:mt-2">{body}</div>
          </details>
        ) : (
          body
        )}
        {b.note && (
          <p
            className={`mt-8 max-w-3xl text-sm leading-relaxed ${dark ? "text-white/60" : "text-muted-foreground"}`}
          >
            {b.note}
          </p>
        )}
      </div>
    </section>
  );
}

function Label({ children, tone }: { children: string; tone: Tone }) {
  return (
    <p
      className={`text-[0.7rem] font-medium uppercase tracking-[0.18em] ${tone === "dark" ? "text-white/60" : "text-muted-foreground"}`}
    >
      {children}
    </p>
  );
}

/** Static class lists so Tailwind can see them. */
const COLUMN_GRID: Record<number, string> = {
  1: "",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 xl:grid-cols-4",
  5: "md:grid-cols-2 xl:grid-cols-3",
};

function Content({ content: c, tone }: { content: BlockContent; tone: Tone }) {
  const dark = tone === "dark";
  switch (c.kind) {
    case "flow":
      return (
        <div>
          {c.label && <Label tone={tone}>{c.label}</Label>}
          <div className={c.label ? "mt-3" : ""}>
            <JourneyFlow steps={c.steps} label={c.label ?? "Flow"} tone={tone} />
          </div>
          {c.loopBack && <LoopBack text={c.loopBack} tone={tone} />}
        </div>
      );

    case "columns":
      return (
        <ul className={`grid gap-4 ${COLUMN_GRID[Math.min(c.columns.length, 5)]}`}>
          {c.columns.map((col) => (
            <li key={col.title} className={`rounded-3xl border p-6 ${columnTone(col.tone, dark)}`}>
              {col.label && (
                <p
                  className={`text-[0.7rem] font-semibold uppercase tracking-[0.18em] ${
                    col.tone === "accent"
                      ? dark
                        ? "text-[color:var(--gold)]"
                        : "text-[color:var(--gold-deep)]"
                      : dark
                        ? "text-white/60"
                        : "text-muted-foreground"
                  }`}
                >
                  {col.label}
                </p>
              )}
              <p className="mt-2 font-display text-lg font-semibold leading-snug tracking-tight">
                {col.title}
              </p>
              {col.status && (
                <div className="mt-3">
                  <ConfidenceChip status={col.status} tone={tone} />
                </div>
              )}
              {col.body && (
                <p
                  className={`mt-2 text-sm leading-relaxed ${dark ? "text-white/70" : "text-muted-foreground"}`}
                >
                  {col.body}
                </p>
              )}
              {col.fields && (
                <dl className="mt-4 space-y-3">
                  {col.fields.map((f) => (
                    <div key={f.term}>
                      <dt
                        className={`text-[0.65rem] font-medium uppercase tracking-[0.16em] ${dark ? "text-white/55" : "text-muted-foreground"}`}
                      >
                        {f.term}
                      </dt>
                      <dd className="mt-0.5 text-sm leading-relaxed">{f.detail}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {col.itemsLabel && col.items && (
                <p
                  className={`mt-5 text-[0.65rem] font-medium uppercase tracking-[0.16em] ${dark ? "text-white/55" : "text-muted-foreground"}`}
                >
                  {col.itemsLabel}
                </p>
              )}
              {col.items && (
                <ul
                  className={`${col.itemsLabel ? "mt-2" : "mt-4"} space-y-2 text-sm leading-snug`}
                >
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ItemMark tone={col.tone} dark={dark} />
                      <span
                        className={
                          col.tone === "negative"
                            ? dark
                              ? "text-white/60"
                              : "text-muted-foreground"
                            : ""
                        }
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      );

    case "stack":
      return (
        <div>
          <ol className="grid gap-2">
            {c.layers.map((layer, i) => (
              <li key={layer.title}>
                {i > 0 && (
                  <ArrowDown
                    aria-hidden
                    className={`mx-auto mb-2 h-4 w-4 ${dark ? "text-[color:var(--gold)]" : "text-[color:var(--gold-deep)]"}`}
                  />
                )}
                <div
                  className={`grid gap-3 rounded-2xl border p-4 md:grid-cols-[12rem_minmax(0,1fr)] md:items-center md:p-5 ${
                    dark ? "border-white/10 bg-white/[0.03]" : "border-border bg-card"
                  }`}
                >
                  <p className="font-display text-base font-semibold tracking-tight">
                    {layer.title}
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {layer.items.map((item) => (
                      <li
                        key={item}
                        className={`rounded-full border px-3 py-1 text-xs ${dark ? "border-white/15 text-white/85" : "border-border"}`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
          {c.loopBack && <LoopBack text={c.loopBack} tone={tone} />}
        </div>
      );

    case "ladder":
      return (
        <ol className="grid gap-2">
          {c.levels.map((lvl, i) => (
            <li
              key={lvl.label}
              className={`grid grid-cols-[3rem_minmax(0,1fr)] items-start gap-4 rounded-2xl border p-4 md:grid-cols-[3.5rem_14rem_minmax(0,1fr)] md:items-center ${
                dark ? "border-white/10 bg-white/[0.03]" : "border-border bg-card"
              }`}
            >
              <span
                className="grid h-10 w-10 place-items-center rounded-xl font-display text-sm font-bold tabular-nums text-[color:var(--ink)]"
                style={{
                  background: `color-mix(in oklab, var(--gold) ${20 + (i * 70) / Math.max(c.levels.length - 1, 1)}%, transparent)`,
                }}
              >
                {lvl.label}
              </span>
              <div className="md:contents">
                <p className="font-display text-base font-semibold tracking-tight">{lvl.title}</p>
                <p
                  className={`mt-1 text-sm leading-relaxed md:mt-0 ${dark ? "text-white/70" : "text-muted-foreground"}`}
                >
                  {lvl.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      );

    case "list":
      return (
        <div>
          {c.label && <Label tone={tone}>{c.label}</Label>}
          {c.joiner ? (
            <ul className={`flex flex-wrap items-center gap-x-2 gap-y-2 ${c.label ? "mt-3" : ""}`}>
              {c.items.map((item, i) => (
                <li key={item} className="flex items-center gap-2">
                  {i > 0 && (
                    <span
                      aria-hidden
                      className={`font-display text-lg font-bold ${dark ? "text-[color:var(--gold)]" : "text-[color:var(--gold-deep)]"}`}
                    >
                      {c.joiner}
                    </span>
                  )}
                  {i > 0 && (
                    <span className="sr-only">
                      {c.joiner === "+" ? "plus" : "is not the same as"}
                    </span>
                  )}
                  <span
                    className={`rounded-full border px-3.5 py-1.5 text-sm font-medium ${dark ? "border-white/15" : "border-border bg-card"}`}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          ) : c.ordered ? (
            <ol className={`grid gap-2 sm:grid-cols-2 ${c.label ? "mt-3" : ""}`}>
              {c.items.map((item, i) => (
                <li
                  key={item}
                  className={`flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm leading-snug ${
                    dark ? "border-white/10" : "border-border bg-card"
                  }`}
                >
                  <span
                    aria-hidden
                    className="font-display text-sm font-bold tabular-nums text-[color:var(--gold-deep)]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          ) : (
            <ul className={`flex flex-wrap gap-2 ${c.label ? "mt-3" : ""}`}>
              {c.items.map((item) => (
                <li
                  key={item}
                  className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm ${
                    dark ? "border-white/15 text-white/85" : "border-border bg-card"
                  }`}
                >
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      );

    case "cycle":
      return (
        <div>
          {c.label && <Label tone={tone}>{c.label}</Label>}
          <ol
            className={`flex flex-col items-stretch gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-1.5 sm:gap-y-3 ${c.label ? "mt-3" : ""}`}
          >
            {c.steps.map((step, i) => {
              const loss = i > 0 && c.lossAfter?.includes(i - 1);
              return (
                <li
                  key={step}
                  className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-1.5"
                >
                  {i > 0 &&
                    (loss ? (
                      <span
                        className="ms-4 flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--gold-deep)] sm:ms-0"
                        title={c.lossLabel}
                      >
                        <span
                          aria-hidden
                          className="h-4 border-s-2 border-dashed border-[color:var(--gold-deep)] sm:h-0 sm:w-5 sm:border-s-0 sm:border-t-2"
                        />
                        <TriangleAlert aria-hidden className="h-3.5 w-3.5" />
                        <span className="sm:sr-only">{c.lossLabel}</span>
                      </span>
                    ) : (
                      <ArrowRight
                        aria-hidden
                        className="ms-4 h-3.5 w-3.5 rotate-90 text-[color:var(--gold-deep)] sm:ms-0 sm:rotate-0"
                      />
                    ))}
                  <span
                    className={`rounded-full border px-3.5 py-1.5 text-sm font-medium ${
                      dark ? "border-white/15" : "border-border bg-card"
                    }`}
                  >
                    {step}
                  </span>
                </li>
              );
            })}
          </ol>
          {c.lossLabel && (
            <p
              className={`mt-4 flex items-center gap-2 text-xs ${dark ? "text-white/60" : "text-muted-foreground"}`}
            >
              <TriangleAlert aria-hidden className="h-3.5 w-3.5 text-[color:var(--gold-deep)]" />
              {c.lossLabel} — where the research asks whether context may lose fidelity (not
              observed everywhere)
            </p>
          )}
          {c.loopBack && <LoopBack text={c.loopBack} tone={tone} />}
        </div>
      );

    case "matrix":
      return (
        <div>
          {/* Desktop: a real table, hypotheses as columns. */}
          <div className="hidden overflow-hidden rounded-3xl border border-border bg-card lg:block">
            <table className="w-full table-fixed border-collapse text-sm">
              <caption className="sr-only">Validation matrix</caption>
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="w-44 p-4 text-start" />
                  {c.columns.map((col) => (
                    <th key={col.title} scope="col" className="p-4 text-start align-top">
                      <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-deep)]">
                        {col.label}
                      </span>
                      <span className="mt-1 block font-display text-lg font-semibold tracking-tight">
                        {col.title}
                      </span>
                      {col.status && (
                        <span className="mt-2 block">
                          <ConfidenceChip status={col.status} tone="light" />
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.rows.map((row, r) => (
                  <tr
                    key={row}
                    className={`border-b border-border last:border-b-0 ${r === c.rows.length - 1 ? "bg-muted/50" : ""}`}
                  >
                    <th
                      scope="row"
                      className="p-4 text-start align-top text-[0.7rem] font-medium uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      {row}
                    </th>
                    {c.columns.map((col) => (
                      <td
                        key={col.title}
                        className="p-4 align-top leading-relaxed text-foreground/85"
                      >
                        {col.cells[r]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Mobile / tablet: one card per hypothesis. */}
          <div className="grid gap-4 lg:hidden">
            {c.columns.map((col) => (
              <section key={col.title} className="rounded-3xl border border-border bg-card p-5">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-deep)]">
                  {col.label}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold tracking-tight">
                  {col.title}
                </h3>
                {col.status && (
                  <div className="mt-2">
                    <ConfidenceChip status={col.status} tone="light" />
                  </div>
                )}
                <dl className="mt-4 space-y-3">
                  {c.rows.map((row, r) => (
                    <div
                      key={row}
                      className={r === c.rows.length - 1 ? "rounded-xl bg-muted/60 p-3" : ""}
                    >
                      <dt className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                        {row}
                      </dt>
                      <dd className="mt-0.5 text-sm leading-relaxed">{col.cells[r]}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            ))}
          </div>
        </div>
      );

    case "sources":
      return (
        <div>
          {c.label && <Label tone={tone}>{c.label}</Label>}
          <ul className={`grid gap-1.5 text-sm sm:grid-cols-2 ${c.label ? "mt-3" : ""}`}>
            {c.items.map((src) => (
              <li key={src.url}>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-start gap-1.5 underline underline-offset-2 ${
                    dark
                      ? "text-white/80 decoration-white/30 hover:text-white"
                      : "text-foreground/80 decoration-foreground/25 hover:text-foreground"
                  }`}
                >
                  <ArrowRight aria-hidden className="mt-1 h-3 w-3 shrink-0 -rotate-45" />
                  {src.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      );

    case "quotes":
      return (
        <div className="grid gap-4">
          {c.items.map((q) => (
            <blockquote
              key={q}
              className="max-w-3xl border-s-2 border-[color:var(--gold)] ps-5 font-display text-xl font-semibold leading-snug tracking-tight md:text-2xl"
            >
              {q}
            </blockquote>
          ))}
        </div>
      );

    case "pairs":
      return (
        <div>
          {c.label && <Label tone={tone}>{c.label}</Label>}
          <dl
            className={`grid gap-px overflow-hidden rounded-2xl border ${dark ? "border-white/10 bg-white/10" : "border-border bg-border"} ${c.label ? "mt-3" : ""}`}
          >
            {c.items.map((pair) => (
              <div
                key={pair.term}
                className={`grid gap-1 p-4 md:grid-cols-[16rem_minmax(0,1fr)] md:gap-6 ${dark ? "bg-[color:var(--ink)]" : "bg-card"}`}
              >
                <dt className="font-display text-sm font-semibold tracking-tight">{pair.term}</dt>
                <dd
                  className={`text-sm leading-relaxed ${dark ? "text-white/75" : "text-foreground/80"}`}
                >
                  {pair.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      );
  }
}

const CONFIDENCE: Record<ConfidenceStatus, { label: string; phrase: string }> = {
  supported: { label: "Supported", phrase: "Research indicates" },
  inferred: { label: "Inferred", phrase: "Research suggests" },
  hypothesis: { label: "Hypothesis", phrase: "We hypothesize" },
  unknown: { label: "Unknown", phrase: "Not yet validated" },
};

/** Labelled confidence state, so readers never infer confidence from wording alone. */
function ConfidenceChip({
  status,
  tone,
  withPhrase = false,
}: {
  status: ConfidenceStatus;
  tone: Tone;
  withPhrase?: boolean;
}) {
  const dark = tone === "dark";
  const solid = status === "supported";
  return (
    <span
      className={`inline-flex flex-wrap items-center gap-x-1.5 rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] ${
        solid
          ? dark
            ? "bg-white text-[color:var(--ink)]"
            : "bg-primary text-primary-foreground"
          : status === "unknown"
            ? `border border-dashed ${dark ? "border-white/40 text-white/80" : "border-foreground/40 text-foreground/75"}`
            : `border ${dark ? "border-white/30 text-white/85" : "border-foreground/30 text-foreground/80"}`
      }`}
    >
      <span className="sr-only">Confidence: </span>
      {CONFIDENCE[status].label}
      {withPhrase && (
        <span className="font-medium normal-case tracking-normal opacity-75">
          · {CONFIDENCE[status].phrase}
          {status === "unknown" ? "" : "…"}
        </span>
      )}
    </span>
  );
}

function columnTone(
  tone: "positive" | "negative" | "neutral" | "accent" | undefined,
  dark: boolean,
): string {
  if (tone === "accent")
    return dark
      ? "border-[color:var(--gold)]/40 bg-[color:var(--gold)]/[0.06]"
      : "border-[color:var(--gold)]/50 bg-[color:var(--gold)]/[0.05]";
  if (tone === "negative")
    return dark ? "border-dashed border-white/20" : "border-dashed border-foreground/25";
  return dark ? "border-white/10 bg-white/[0.03]" : "border-border bg-card";
}

function ItemMark({
  tone,
  dark,
}: {
  tone: "positive" | "negative" | "neutral" | "accent" | undefined;
  dark: boolean;
}) {
  if (tone === "positive")
    return (
      <Check aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[color:var(--gold-deep)]" />
    );
  if (tone === "negative")
    return (
      <X
        aria-hidden
        className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${dark ? "text-white/50" : "text-muted-foreground"}`}
      />
    );
  return (
    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
  );
}

function LoopBack({ text, tone }: { text: string; tone: Tone }) {
  return (
    <p
      className={`mt-4 inline-flex items-center gap-2 text-sm font-medium ${tone === "dark" ? "text-[color:var(--gold)]" : "text-[color:var(--gold-deep)]"}`}
    >
      <RotateCcw aria-hidden className="h-4 w-4" />
      {text}
    </p>
  );
}
