import { ChevronDown } from "lucide-react";

/**
 * Compact "View evidence" toggle for business-owner reviews: the plain-language
 * finding stays primary, the observed detail sits one tap away. Native
 * <details>, so it works without JS and is keyboard operable.
 */
export function EvidenceDisclosure({
  label,
  checkedOn,
  items,
}: {
  label: string;
  checkedOn: string;
  items: string[];
}) {
  return (
    <details className="group mt-6 rounded-2xl border border-border bg-muted/40 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 rounded-2xl px-5 py-3 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--gold)]">
        <span className="flex items-center gap-2.5">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
          {label}
        </span>
        <ChevronDown
          aria-hidden
          className="h-4 w-4 shrink-0 transition-transform duration-300 group-open:rotate-180"
        />
      </summary>
      <div className="space-y-3 px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-[color:var(--gold-deep)]">
          {checkedOn}
        </p>
        {items.map((item) => (
          <p key={item} className="whitespace-pre-line">
            {item}
          </p>
        ))}
      </div>
    </details>
  );
}
