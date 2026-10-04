import { Outlet, createFileRoute, useLocation, useRouter } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { useEffect } from "react";
import {
  ReviewLangProvider,
  arabicFontLinks,
  langRootProps,
  parseReviewLang,
  type ReviewLang,
} from "@/components/prospect-review/review-lang";
import { DAH_COPY } from "@/lib/prospect-review/dah-design";
import { track } from "@/lib/analytics";

// Private DAH Design review — shared shell for /review/dah-design-4m8k and
// /plan. Reachable by direct link only: each child sets noindex, follow; none
// is in the sitemap or site navigation (the root layout already drops the
// site navbar/footer for /review/*).
//
// The language is in the URL (?lang=ar) so it renders server-side in the
// right direction and survives the review → plan link.

export const Route = createFileRoute("/review/dah-design-4m8k")({
  validateSearch: (search: Record<string, unknown>): { lang?: "ar" } =>
    parseReviewLang(search.lang) === "ar" ? { lang: "ar" } : {},
  head: () => ({ links: arabicFontLinks }),
  component: DahReviewLayout,
});

function DahReviewLayout() {
  const lang = parseReviewLang(Route.useSearch().lang);
  const root = langRootProps(lang);

  // The root shell renders <html lang="en">; mirror the chosen language onto
  // the document while this review is open, and hand it back on the way out.
  useEffect(() => {
    const html = document.documentElement;
    const prev = { lang: html.lang, dir: html.dir };
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    return () => {
      html.lang = prev.lang;
      html.dir = prev.dir;
    };
  }, [lang]);

  return (
    <ReviewLangProvider value={lang}>
      <div
        {...root}
        className={`min-h-screen overflow-x-clip bg-background text-foreground ${root.className ?? ""}`}
      >
        <ReviewHeader lang={lang} />
        <Outlet />
      </div>
    </ReviewLangProvider>
  );
}

function ReviewHeader({ lang }: { lang: ReviewLang }) {
  const t = DAH_COPY[lang].ui;
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl print:hidden">
      <div className="container-luxe flex h-16 items-center justify-between gap-4">
        <a
          href="/"
          className="flex min-h-11 shrink-0 items-center gap-2.5"
          aria-label={t.homeLabel}
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[color:var(--gold)]" aria-hidden />
          </span>
          <span dir="ltr" className="font-display text-base font-bold tracking-tight">
            OMSA<span className="text-gradient-gold"> Digital</span>
          </span>
        </a>
        <LanguageSwitch lang={lang} label={t.langLabel} />
      </div>
    </header>
  );
}

const LANGS: { id: ReviewLang; label: string }[] = [
  { id: "en", label: "English" },
  { id: "ar", label: "العربية" },
];

/** Two-option switch. Real links (work before hydration); swaps in place without a scroll jump. */
function LanguageSwitch({ lang, label }: { lang: ReviewLang; label: string }) {
  const router = useRouter();
  const { pathname } = useLocation();
  return (
    <nav aria-label={label}>
      <ul className="flex items-center rounded-full border border-border bg-muted/50 p-1">
        {LANGS.map((l) => {
          const current = l.id === lang;
          const href = l.id === "ar" ? `${pathname}?lang=ar` : pathname;
          return (
            <li key={l.id}>
              <a
                href={href}
                lang={l.id}
                hrefLang={l.id}
                aria-current={current ? "true" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  if (current) return;
                  track("locale_change", { from: lang, to: l.id });
                  void router.navigate({ href, replace: true, resetScroll: false });
                }}
                className={`inline-flex min-h-9 items-center rounded-full px-3.5 text-sm font-medium transition-colors duration-300 ${
                  current
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                } ${l.id === "ar" ? "font-['IBM_Plex_Sans_Arabic',sans-serif]" : "font-sans"}`}
              >
                {l.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
