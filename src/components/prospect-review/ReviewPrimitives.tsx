import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

// Building blocks for private prospect review pages (/review/*). They keep a
// strict visual split between what was publicly observed (signals) and what
// OMSA infers from it (observations / opportunities).

/** Small uppercase label stating what evidence a block rests on. */
export function EvidenceBadge({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  const toneCls =
    tone === "dark"
      ? "border-white/15 text-white/70"
      : "border-border bg-background text-muted-foreground";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[0.65rem] font-medium uppercase leading-snug tracking-[0.16em] ${toneCls}`}
    >
      <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
      {children}
    </span>
  );
}

/** Section opener: eyebrow, heading and optional intro copy. */
export function ReviewSectionHeader({
  eyebrow,
  title,
  children,
  tone = "light",
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <Reveal className="max-w-3xl">
      <p className={`eyebrow ${tone === "dark" ? "!text-white/60" : ""}`}>{eyebrow}</p>
      <h2 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight md:text-5xl">
        {title}
      </h2>
      {children && (
        <div
          className={`mt-6 space-y-4 text-base leading-relaxed md:text-lg ${tone === "dark" ? "text-white/70" : "text-muted-foreground"}`}
        >
          {children}
        </div>
      )}
    </Reveal>
  );
}

/** Labelled block inside a finding. "signal" = publicly observed, "observation"/"opportunity" = OMSA's reading. */
export function FindingBlock({
  kind,
  label: labelOverride,
  children,
}: {
  kind: "signal" | "observation" | "opportunity";
  /** Replaces the default label, e.g. for a combined observation + opportunity. */
  label?: string;
  children: ReactNode;
}) {
  const label =
    labelOverride ??
    {
      signal: "Public signal",
      observation: "OMSA observation",
      opportunity: "Opportunity",
    }[kind];
  const cls = {
    signal: "border-s-2 border-foreground/70 ps-5",
    observation: "border-s-2 border-dashed border-foreground/25 ps-5",
    opportunity:
      "rounded-2xl border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/[0.06] p-5 md:p-6",
  }[kind];
  return (
    <div className={cls}>
      <p
        className={`text-[0.7rem] font-medium uppercase tracking-[0.18em] ${kind === "opportunity" ? "text-[color:var(--gold-deep)]" : "text-muted-foreground"}`}
      >
        {label}
      </p>
      <div className="mt-2 space-y-3 text-[0.975rem] leading-relaxed text-foreground/85">
        {children}
      </div>
    </div>
  );
}

/** Numbered finding with an evidence label, body blocks and an optional visual. */
export function ReviewFinding({
  number,
  title,
  evidence,
  children,
  visual,
}: {
  number: string;
  title: string;
  evidence: string;
  children: ReactNode;
  visual?: ReactNode;
}) {
  return (
    <article className="border-t border-border py-16 first:border-t-0 first:pt-0 md:py-20">
      <Reveal>
        <div className="grid gap-6 lg:grid-cols-[9rem_1fr] lg:gap-12">
          <p
            aria-hidden
            className="font-display text-5xl font-bold leading-none tracking-tight text-gradient-gold md:text-6xl"
          >
            {number}
          </p>
          <div className="min-w-0">
            <h3 className="font-display text-2xl font-bold leading-snug tracking-tight md:text-3xl">
              <span className="sr-only">{number} — </span>
              {title}
            </h3>
            <div className="mt-5">
              <EvidenceBadge>{evidence}</EvidenceBadge>
            </div>
            <div className="mt-8 grid max-w-3xl gap-6">{children}</div>
            {visual && <div className="mt-10">{visual}</div>}
          </div>
        </div>
      </Reveal>
    </article>
  );
}

/** Quiet card for an outcome or capability. */
export function OpportunityCard({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="h-full rounded-3xl border border-border bg-background p-7 transition-colors duration-300 hover:border-[color:var(--gold)]/60">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/5 text-[color:var(--gold-deep)]">
        <Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

/** Small "illustrative" caption used under examples that are not measured data. */
export function IllustrativeNote({ children }: { children: ReactNode }) {
  return <p className="text-xs leading-relaxed text-muted-foreground">{children}</p>;
}
