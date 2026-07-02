import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sparkles, Search } from "lucide-react";
import { LocaleSwitcher } from "./LocaleSwitcher";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const trackStrategyCallClick = () => {
  console.log("CTA clicked");

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "contact_page_view",
  });

  console.log(window.dataLayer);
};

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/locations", label: "Locations" },
  { to: "/case-studies", label: "Work" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "Company" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled ? "py-2.5" : "py-5"
      }`}
      role="banner"
    >
      <div className="container-luxe">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled ? "glass shadow-luxe" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="OMSA Digital & AI Studio — Home">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-[12deg]">
              <Sparkles className="h-4 w-4 text-[color:var(--gold)]" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              OMSA<span className="text-gradient-gold"> Digital</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-1/2 -bottom-0.5 h-0.5 w-6 -translate-x-1/2 rounded-full bg-[color:var(--gold)]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/search" aria-label="Search" className="grid h-9 w-9 place-items-center rounded-full hairline transition-colors hover:border-[color:var(--gold)]">
              <Search className="h-4 w-4" />
            </Link>
            <LocaleSwitcher />
            <Link to="/contact" className="btn-gold !py-2.5 !px-5 text-sm" onClick={trackStrategyCallClick}>
              Book a Strategy Call
            </Link>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full hairline transition-colors hover:border-[color:var(--gold)]"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "x" : "menu"}
                initial={{ opacity: 0, rotate: -45, scale: 0.85 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.85 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="grid place-items-center"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden mt-3 rounded-3xl glass shadow-luxe p-4"
            >
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={l.to}
                      className="block px-4 py-3 rounded-2xl text-sm font-medium hover:bg-muted transition-colors"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
                <Link to="/contact" className="btn-gold mt-2" onClick={trackStrategyCallClick}>
                  Book a Strategy Call
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}