import { createContext, useContext, type CSSProperties } from "react";

// Language handling for bilingual prospect reviews (/review/*). The language
// lives in the URL (?lang=ar) so the server renders the right direction and
// font straight away and the choice carries across pages of one review.

export type ReviewLang = "en" | "ar";

export const ARABIC_FONT_HREF =
  "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap";

/** Head links that load the Arabic face; add to a bilingual review's head(). */
export const arabicFontLinks = [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" as const },
  { rel: "stylesheet", href: ARABIC_FONT_HREF },
];

export const parseReviewLang = (v: unknown): ReviewLang => (v === "ar" ? "ar" : "en");

const AR_STACK = "'IBM Plex Sans Arabic', ui-sans-serif, system-ui, sans-serif";

/**
 * Attributes for any element that roots a language subtree — the page itself,
 * and portalled content such as dialogs, which sit outside the page wrapper.
 *
 * Arabic: swaps both font tokens (Poppins/Inter have no Arabic glyphs) and
 * removes letter-spacing, which breaks up joined Arabic script. Elements
 * marked dir="ltr" (Latin wordmarks) keep their tracking.
 */
export function langRootProps(lang: ReviewLang) {
  if (lang === "en") return { lang: "en", dir: "ltr" as const };
  return {
    lang: "ar",
    dir: "rtl" as const,
    style: {
      "--font-sans": AR_STACK,
      "--font-display": AR_STACK,
      fontFamily: AR_STACK,
    } as CSSProperties,
    className:
      "[&_.font-display]:[font-family:var(--font-display)] [&_.font-sans]:[font-family:var(--font-sans)] [&_:not([dir=ltr])]:tracking-normal",
  };
}

const ReviewLangCtx = createContext<ReviewLang>("en");

export const ReviewLangProvider = ReviewLangCtx.Provider;

export const useReviewLang = () => useContext(ReviewLangCtx);
