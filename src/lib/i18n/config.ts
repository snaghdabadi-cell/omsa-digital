// Locale architecture. Phase 1 ships English only; Arabic + Persian
// are reserved here so routes, components and SEO can opt-in later
// without breaking URLs.

export const LOCALES = ["en", "ar", "fa"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_META: Record<Locale, { label: string; native: string; dir: "ltr" | "rtl"; status: "live" | "soon" }> = {
  en: { label: "English", native: "English", dir: "ltr", status: "live" },
  ar: { label: "Arabic", native: "العربية", dir: "rtl", status: "soon" },
  fa: { label: "Persian", native: "فارسی", dir: "rtl", status: "soon" },
};

export const getDir = (locale: Locale): "ltr" | "rtl" => LOCALE_META[locale].dir;

export const isLocale = (v: string): v is Locale => (LOCALES as readonly string[]).includes(v);
