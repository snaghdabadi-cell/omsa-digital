import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { LucideIcon } from "lucide-react";

export type AuthorityLeafStatus = "existing" | "potential";

export type AuthorityBranch = {
  id: string;
  label: string;
  icon: LucideIcon;
  leaves: { label: string; status: AuthorityLeafStatus }[];
};

// Desktop radial layout: node centres as % of a 16:10 canvas, clockwise from top-left.
// The SVG uses the same 1600×1000 coordinate space, so lines meet the cards exactly.
const POSITIONS = [
  { x: 22, y: 17 },
  { x: 78, y: 17 },
  { x: 88, y: 50 },
  { x: 78, y: 83 },
  { x: 22, y: 83 },
  { x: 12, y: 50 },
];

const STATUS_TEXT: Record<AuthorityLeafStatus, string> = {
  existing: "existing public signal",
  potential: "potential authority connection",
};

/**
 * Interactive authority map: a central entity, first-level authority areas
 * and their second-level signals, converging on search and AI discovery.
 * Designed for a dark (ink) section. Hover, focus or tap a branch to trace
 * its connection.
 */
export function AuthorityMap({
  center,
  branches,
  outcomes,
}: {
  center: string;
  branches: AuthorityBranch[];
  outcomes: string[];
}) {
  const [active, setActive] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);
  const reduced = useReducedMotion();
  const highlighted = active ?? pinned;

  const card = (b: AuthorityBranch) => (
    <BranchCard
      branch={b}
      highlighted={highlighted === b.id}
      dimmed={highlighted !== null && highlighted !== b.id}
      pinned={pinned === b.id}
      onEnter={() => setActive(b.id)}
      onLeave={() => setActive(null)}
      onToggle={() => setPinned((p) => (p === b.id ? null : b.id))}
    />
  );

  return (
    <div>
      <Legend />

      {/* Desktop: radial map */}
      <div className="relative mt-10 hidden aspect-[16/10] lg:block">
        <svg
          aria-hidden
          viewBox="0 0 1600 1000"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <circle
            cx={800}
            cy={500}
            r={210}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.08}
          />
          <circle
            cx={800}
            cy={500}
            r={330}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.05}
            strokeDasharray="2 10"
          />
          {branches.map((b, i) => {
            const p = POSITIONS[i % POSITIONS.length];
            const on = highlighted === b.id;
            return (
              <motion.line
                key={b.id}
                x1={800}
                y1={500}
                x2={p.x * 16}
                y2={p.y * 10}
                stroke={on ? "var(--gold)" : "currentColor"}
                strokeOpacity={on ? 0.9 : 0.18}
                strokeWidth={on ? 2 : 1.25}
                initial={reduced ? false : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 1.1, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  transition:
                    "stroke 0.35s ease, stroke-opacity 0.35s ease, stroke-width 0.35s ease",
                }}
              />
            );
          })}
        </svg>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Hub label={center} />
        </div>

        <ul aria-label={`${center} authority areas`}>
          {branches.map((b, i) => {
            const p = POSITIONS[i % POSITIONS.length];
            return (
              <li
                key={b.id}
                className="absolute w-[13rem] -translate-x-1/2 -translate-y-1/2 xl:w-[14.5rem]"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                {card(b)}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile / tablet: stacked map */}
      <div className="mt-10 lg:hidden">
        <div className="flex justify-center">
          <Hub label={center} />
        </div>
        <div aria-hidden className="mx-auto h-10 w-px bg-white/20" />
        <ul aria-label={`${center} authority areas`} className="grid gap-4 sm:grid-cols-2">
          {branches.map((b) => (
            <li key={b.id}>{card(b)}</li>
          ))}
        </ul>
      </div>

      {/* Convergence on discovery */}
      <div className="mt-6 flex flex-col items-center lg:mt-2">
        <div
          aria-hidden
          className="h-14 w-px bg-gradient-to-b from-white/10 to-[color:var(--gold)]"
        />
        <p className="sr-only">All authority areas ultimately connect to:</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {outcomes.map((o, i) => (
            <span key={o} className="flex items-center gap-3">
              {i > 0 && (
                <span aria-hidden className="font-display text-xl text-[color:var(--gold)]">
                  +
                </span>
              )}
              <span className="rounded-full border border-[color:var(--gold)]/60 px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.2em] text-white">
                {o}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Hub({ label }: { label: string }) {
  return (
    <div className="relative grid h-36 w-36 place-items-center rounded-full border border-[color:var(--gold)]/70 bg-[color:var(--ink)] text-center shadow-[0_0_80px_-20px_color-mix(in_oklab,var(--gold)_55%,transparent)] xl:h-40 xl:w-40">
      <span aria-hidden className="absolute inset-2 rounded-full border border-white/10" />
      <span className="font-display text-lg font-bold uppercase tracking-[0.14em] text-white">
        {label}
      </span>
    </div>
  );
}

function BranchCard({
  branch,
  highlighted,
  dimmed,
  pinned,
  onEnter,
  onLeave,
  onToggle,
}: {
  branch: AuthorityBranch;
  highlighted: boolean;
  dimmed: boolean;
  pinned: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onToggle: () => void;
}) {
  const Icon = branch.icon;
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`rounded-2xl border bg-[color:var(--ink)] p-4 transition-[border-color,opacity] duration-300 ${
        highlighted ? "border-[color:var(--gold)]/80" : "border-white/12"
      } ${dimmed ? "opacity-60" : "opacity-100"}`}
    >
      <h3>
        <button
          type="button"
          aria-pressed={pinned}
          onClick={onToggle}
          onFocus={onEnter}
          onBlur={onLeave}
          className="flex w-full items-center gap-2.5 text-start"
        >
          <Icon
            aria-hidden
            className={`h-4 w-4 shrink-0 transition-colors duration-300 ${highlighted ? "text-[color:var(--gold)]" : "text-white/60"}`}
          />
          <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white">
            {branch.label}
          </span>
        </button>
      </h3>
      <ul className="mt-3 space-y-1.5">
        {branch.leaves.map((leaf) => (
          <li key={leaf.label} className="flex items-center gap-2.5 text-sm">
            <StatusMark status={leaf.status} />
            <span className={leaf.status === "existing" ? "text-white/90" : "text-white/60"}>
              {leaf.label}
            </span>
            <span className="sr-only"> ({STATUS_TEXT[leaf.status]})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StatusMark({ status }: { status: AuthorityLeafStatus }) {
  return status === "existing" ? (
    <span aria-hidden className="h-2.5 w-2.5 shrink-0 rounded-full bg-white/85" />
  ) : (
    <span
      aria-hidden
      className="h-2.5 w-2.5 shrink-0 rounded-full border-[1.5px] border-[color:var(--gold)]"
    />
  );
}

function Legend() {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/70">
      <span className="flex items-center gap-2">
        <StatusMark status="existing" /> Existing public signals
      </span>
      <span className="flex items-center gap-2">
        <StatusMark status="potential" /> Potential authority connections
      </span>
    </div>
  );
}
