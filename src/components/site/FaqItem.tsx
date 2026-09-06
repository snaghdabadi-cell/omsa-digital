import { Plus, Minus } from "lucide-react";
import { useId, useState, type ReactNode } from "react";

// Kept in its own module (not exported from routes/index.tsx) so the other
// route files that reuse it for their own FAQ sections don't transitively
// pull in the homepage route's module-scope data (PROJECTS/CASE_STUDIES,
// SERVICES, FAQS, etc.) into their own bundles.
export function FaqItem({ item, defaultOpen = false }: { item: { q: string; a: ReactNode }; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const answerId = useId();
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={answerId}
        className="flex w-full items-center justify-between gap-6 p-6 text-left"
      >
        <span className="font-display text-base md:text-lg font-semibold tracking-tight">{item.q}</span>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      {/* Answer is always rendered (not conditionally mounted) so it's present
          in server-rendered HTML for plain-text extraction; the grid-rows
          transition — not conditional JSX — controls its visible/collapsed
          state, and it handles any answer length without a guessed max-height. */}
      <div
        id={answerId}
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 -mt-2 text-sm text-muted-foreground leading-relaxed">
            {item.a}
          </div>
        </div>
      </div>
    </div>
  );
}
