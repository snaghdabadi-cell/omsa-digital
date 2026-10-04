import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { useScrollProgress } from "@/hooks/use-scroll-state";

export type ReviewNavItem = { id: string; label: string };

/**
 * Understated sticky header for prospect review pages: OMSA mark, in-page
 * section links with the current section highlighted, and a hairline
 * reading-progress bar.
 */
export function ReviewNav({ items, label }: { items: ReviewNavItem[]; label: string }) {
  const progress = useScrollProgress();
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const targets = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;
    // A section is "current" once it crosses the upper third of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-30% 0px -65% 0px" },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [items]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="container-luxe flex h-16 items-center gap-6">
        <a
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="OMSA Digital & AI Studio — home"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[color:var(--gold)]" aria-hidden />
          </span>
          <span className="hidden font-display text-base font-bold tracking-tight sm:inline">
            OMSA<span className="text-gradient-gold"> Digital</span>
          </span>
        </a>
        <nav
          aria-label={label}
          className="-me-5 min-w-0 flex-1 overflow-x-auto md:me-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {/* ms-auto + w-max (not justify-end) so overflow stays scrollable on small screens */}
          <ul className="ms-auto flex w-max items-center gap-1 whitespace-nowrap pe-5 md:pe-0">
            {items.map((item) => {
              const current = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={current ? "location" : undefined}
                    className={`inline-block rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-300 ${
                      current
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div aria-hidden className="absolute inset-x-0 bottom-[-1px] h-px">
        <div
          className="h-full origin-left bg-[color:var(--gold)]"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </header>
  );
}
