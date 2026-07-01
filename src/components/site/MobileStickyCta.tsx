import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function MobileStickyCta() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/contact") return null;

  return (
    <div
      className={`lg:hidden fixed inset-x-4 bottom-4 z-40 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Link
        to="/contact"
        className="flex items-center justify-between gap-3 rounded-full glass shadow-luxe border border-[color:var(--gold)]/30 px-5 py-3.5"
      >
        <span className="flex flex-col leading-tight">
          <span className="font-display text-sm font-semibold">Book a free strategy call</span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            30 minutes · No obligation
          </span>
        </span>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--gold)] text-[color:var(--ink)]">
          <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </div>
  );
}
