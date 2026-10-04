import { motion, useReducedMotion } from "motion/react";
import type { LucideIcon } from "lucide-react";

export type SimpleMapNode = {
  id: string;
  label: string;
  icon: LucideIcon;
  /** "present" = visible and joined up; "connect" = present but weakly connected. */
  status: "present" | "connect";
};

// Node centres as % of a 16:9 canvas, clockwise from the reading-start corner.
// The SVG shares the 1600×900 coordinate space so lines meet the pills.
const POSITIONS = [
  { x: 25, y: 16 },
  { x: 75, y: 16 },
  { x: 86, y: 50 },
  { x: 75, y: 84 },
  { x: 25, y: 84 },
  { x: 14, y: 50 },
];

/**
 * Business-owner version of the Authority Map: one centre, six areas, two
 * states, three outcomes. Readable in seconds; designed for a dark section.
 * Mirrors horizontally in RTL so the first area sits at the reading start.
 */
export function SimpleAuthorityMap({
  center,
  nodes,
  outcomes,
  legend,
  leadsTo,
  rtl,
}: {
  center: string;
  nodes: SimpleMapNode[];
  outcomes: string[];
  legend: { present: string; connect: string };
  leadsTo: string;
  rtl: boolean;
}) {
  const reduced = useReducedMotion();
  const pos = (i: number) => {
    const p = POSITIONS[i % POSITIONS.length];
    return rtl ? { x: 100 - p.x, y: p.y } : p;
  };
  const statusText = (n: SimpleMapNode) =>
    n.status === "present" ? legend.present : legend.connect;

  return (
    <div>
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/75">
        <li className="flex items-center gap-2.5">
          <Mark status="present" /> {legend.present}
        </li>
        <li className="flex items-center gap-2.5">
          <Mark status="connect" /> {legend.connect}
        </li>
      </ul>

      {/* Desktop (lg+): radial */}
      <div className="relative mt-10 hidden aspect-[16/9] lg:block">
        <svg
          aria-hidden
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <circle cx={800} cy={450} r={250} fill="none" stroke="white" strokeOpacity={0.06} />
          {nodes.map((n, i) => {
            const p = pos(i);
            const connect = n.status === "connect";
            return (
              <motion.line
                key={n.id}
                x1={800}
                y1={450}
                x2={p.x * 16}
                y2={p.y * 9}
                stroke={connect ? "var(--gold)" : "white"}
                strokeOpacity={connect ? 0.85 : 0.45}
                strokeWidth={connect ? 2 : 1.5}
                strokeDasharray={connect ? "6 10" : undefined}
                // pathLength drives stroke-dasharray, so dashed lines fade in instead of drawing.
                initial={reduced ? false : connect ? { opacity: 0 } : { pathLength: 0 }}
                whileInView={connect ? { opacity: 1 } : { pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              />
            );
          })}
        </svg>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Hub label={center} />
        </div>
        <ul aria-label={center}>
          {nodes.map((n, i) => {
            const p = pos(i);
            return (
              <li
                key={n.id}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <NodePill node={n} statusText={statusText(n)} />
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile: hub over a two-column grid */}
      <div className="mt-8 lg:hidden">
        <div className="flex justify-center">
          <Hub label={center} />
        </div>
        <div aria-hidden className="mx-auto h-8 w-px bg-white/25" />
        <ul aria-label={center} className="grid grid-cols-2 gap-3">
          {nodes.map((n) => (
            <li key={n.id}>
              <NodePill node={n} statusText={statusText(n)} block />
            </li>
          ))}
        </ul>
      </div>

      {/* Convergence */}
      <div className="mt-8 flex flex-col items-center lg:mt-4">
        <div
          aria-hidden
          className="h-12 w-px bg-gradient-to-b from-white/10 to-[color:var(--gold)]"
        />
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/60">{leadsTo}</p>
        <ul className="mt-4 flex w-full flex-col items-stretch gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
          {outcomes.map((o) => (
            <li
              key={o}
              className="rounded-full border border-[color:var(--gold)]/60 px-5 py-2.5 text-center font-display text-xs font-semibold uppercase tracking-[0.18em] text-white sm:text-sm"
            >
              {o}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Hub({ label }: { label: string }) {
  return (
    <div className="relative grid h-32 w-32 place-items-center rounded-full border border-[color:var(--gold)]/70 bg-[color:var(--ink)] text-center shadow-[0_0_80px_-20px_color-mix(in_oklab,var(--gold)_55%,transparent)] lg:h-36 lg:w-36">
      <span aria-hidden className="absolute inset-2 rounded-full border border-white/10" />
      <span
        dir="ltr"
        className="px-3 font-display text-base font-bold uppercase leading-tight tracking-[0.14em] text-white"
      >
        {label}
      </span>
    </div>
  );
}

function NodePill({
  node,
  statusText,
  block,
}: {
  node: SimpleMapNode;
  statusText: string;
  block?: boolean;
}) {
  const Icon = node.icon;
  const connect = node.status === "connect";
  return (
    <div
      className={`flex items-center gap-2.5 rounded-2xl border bg-[color:var(--ink)] px-4 py-3 ${
        connect ? "border-dashed border-[color:var(--gold)]/70" : "border-white/25"
      } ${block ? "h-full w-full" : "w-max max-w-[13rem]"}`}
    >
      <Icon
        aria-hidden
        className={`h-4 w-4 shrink-0 ${connect ? "text-[color:var(--gold)]" : "text-white/80"}`}
      />
      <span className="min-w-0 text-sm font-semibold leading-snug text-white">{node.label}</span>
      <Mark status={node.status} className="ms-auto" />
      <span className="sr-only"> ({statusText})</span>
    </div>
  );
}

function Mark({ status, className = "" }: { status: "present" | "connect"; className?: string }) {
  return status === "present" ? (
    <span aria-hidden className={`h-2.5 w-2.5 shrink-0 rounded-full bg-white/90 ${className}`} />
  ) : (
    <span
      aria-hidden
      className={`h-2.5 w-2.5 shrink-0 rounded-full border-[1.5px] border-[color:var(--gold)] ${className}`}
    />
  );
}
