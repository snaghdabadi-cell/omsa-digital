import { useId, useRef, useState, type MouseEvent } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Maximize2, X, ZoomIn, ZoomOut } from "lucide-react";
import { langRootProps, type ReviewLang } from "./review-lang";

export type VisualBriefContent = {
  name: string;
  haveLabel: string;
  have: string[];
  gap: string;
  oppLabel: string;
  opp: string;
  preparedBy: string;
};

export type VisualBriefLabels = {
  open: string;
  dialogTitle: string;
  dialogHint: string;
  close: string;
  zoomIn: string;
  zoomOut: string;
};

/**
 * Portrait executive snapshot for a prospect. Typography is sized in
 * container-query units, so the same card renders crisply inline and at
 * lightbox size. Tap/click (or Enter) opens the larger view.
 */
export function VisualBrief({
  content,
  labels,
  lang,
}: {
  content: VisualBriefContent;
  labels: VisualBriefLabels;
  lang: ReviewLang;
}) {
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  // Two controls open the dialog; Radix only tracks one Trigger, so return
  // focus to whichever was actually used.
  const opener = useRef<HTMLButtonElement | null>(null);
  const root = langRootProps(lang);
  const openFrom = (e: MouseEvent<HTMLButtonElement>) => {
    opener.current = e.currentTarget;
    setOpen(true);
  };

  return (
    <DialogPrimitive.Root
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) setZoomed(false);
      }}
    >
      <figure className="relative mx-auto w-full max-w-[24rem]">
        <div className="relative transition-transform duration-500 [@media(hover:hover)]:hover:-translate-y-1">
          <BriefCard content={content} />
          <button
            type="button"
            aria-haspopup="dialog"
            onClick={openFrom}
            aria-label={labels.open}
            className="absolute inset-0 cursor-zoom-in rounded-[1.75rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--gold)]"
          />
        </div>
        <figcaption className="mt-4 flex justify-center">
          <button
            type="button"
            aria-haspopup="dialog"
            onClick={openFrom}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 text-sm font-medium text-foreground/80 transition-colors hover:border-[color:var(--gold)] hover:text-foreground"
          >
            <Maximize2 aria-hidden className="h-4 w-4" />
            {labels.open}
          </button>
        </figcaption>
      </figure>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[90] bg-black/90 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          {...root}
          onCloseAutoFocus={(e) => {
            e.preventDefault();
            opener.current?.focus();
          }}
          className={`fixed inset-0 z-[95] flex flex-col outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 ${root.className ?? ""}`}
        >
          <div className="flex shrink-0 items-center justify-between gap-3 px-4 py-3 text-white sm:px-6">
            <div className="min-w-0">
              <DialogPrimitive.Title className="truncate text-sm font-semibold">
                {labels.dialogTitle}
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="hidden text-xs text-white/60 sm:block">
                {labels.dialogHint}
              </DialogPrimitive.Description>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => setZoomed((z) => !z)}
                aria-pressed={zoomed}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-white/20 px-4 text-sm font-medium transition-colors hover:border-[color:var(--gold)]"
              >
                {zoomed ? (
                  <ZoomOut aria-hidden className="h-4 w-4" />
                ) : (
                  <ZoomIn aria-hidden className="h-4 w-4" />
                )}
                {zoomed ? labels.zoomOut : labels.zoomIn}
              </button>
              <DialogPrimitive.Close
                aria-label={labels.close}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 transition-colors hover:border-[color:var(--gold)]"
              >
                <X aria-hidden className="h-5 w-5" />
              </DialogPrimitive.Close>
            </div>
          </div>
          {/* Scrolls (and pans when zoomed) inside the dialog; the page behind stays locked. */}
          <div className="min-h-0 flex-1 overflow-auto overscroll-contain px-4 pb-6 sm:px-6">
            <div
              className={`mx-auto transition-[width] duration-300 ${
                zoomed ? "w-[min(54rem,170vw)]" : "w-[min(100%,34rem,calc((100dvh-6rem)*0.75))]"
              }`}
            >
              <BriefCard content={content} />
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

function BriefCard({ content }: { content: VisualBriefContent }) {
  // The card renders twice while the lightbox is open; keep gradient ids unique.
  const glowId = `brief-glow-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  return (
    <div className="@container relative aspect-[3/4] rounded-[1.75rem] bg-[color:var(--ink)] text-white shadow-luxe">
      {/* Only the decoration is clipped, so longer copy can grow the card instead of being cut off. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.75rem]"
      >
        {/* Architectural line work: a quiet nod to plans and elevations. */}
        <svg
          aria-hidden
          viewBox="0 0 300 400"
          preserveAspectRatio="xMidYMid slice"
          className="pointer-events-none absolute inset-0 h-full w-full text-[color:var(--gold)]"
        >
          <defs>
            <radialGradient id={glowId} cx="85%" cy="8%" r="70%">
              <stop offset="0" stopColor="currentColor" stopOpacity="0.28" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="300" height="400" fill={`url(#${glowId})`} />
          <g fill="none" stroke="currentColor" strokeOpacity="0.14" strokeWidth="0.6">
            <path d="M196 0v118h104M232 118v-46h68M196 72h36" />
            <circle cx="232" cy="118" r="18" strokeDasharray="1.5 3" />
            <path d="M0 330h64v70M64 360h40v40" />
          </g>
        </svg>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[3cqw] rounded-[1.35rem] border border-[color:var(--gold)]/25"
      />

      <div className="relative flex min-h-full flex-col p-[9cqw]">
        <p
          dir="ltr"
          className="font-display text-[8.5cqw] font-bold leading-none tracking-[0.12em] [unicode-bidi:isolate] rtl:text-end"
        >
          {content.name}
        </p>
        <span aria-hidden className="mt-[4cqw] block h-px w-[14cqw] bg-[color:var(--gold)]" />

        <p className="mt-[7cqw] text-[3cqw] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
          {content.haveLabel}
        </p>
        <ul className="mt-[3cqw] space-y-[2cqw]">
          {content.have.map((h) => (
            <li key={h} className="flex items-baseline gap-[2.6cqw] text-[4.3cqw] leading-snug">
              <span
                aria-hidden
                className="h-[1.6cqw] w-[1.6cqw] shrink-0 translate-y-[-0.3cqw] rounded-full bg-[color:var(--gold)]"
              />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-[6cqw] flex items-start gap-[3cqw]">
          <span
            aria-hidden
            className="mt-[2.4cqw] block w-[8cqw] shrink-0 border-t border-dashed border-[color:var(--gold)]"
          />
          <p className="text-[3.9cqw] leading-snug text-white/70">{content.gap}</p>
        </div>

        <p className="mt-[6cqw] text-[3cqw] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
          {content.oppLabel}
        </p>
        <p className="mt-[2.5cqw] text-[4.3cqw] font-medium leading-snug">{content.opp}</p>

        <div className="mt-auto pt-[6cqw]">
          <p className="text-[2.6cqw] uppercase tracking-[0.2em] text-white/50">
            {content.preparedBy}
          </p>
          <p dir="ltr" className="mt-[1cqw] font-display text-[3.6cqw] font-semibold rtl:text-end">
            OMSA <span className="text-gradient-gold">Digital &amp; AI Studio</span>
          </p>
        </div>
      </div>
    </div>
  );
}
