import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { DEFAULT_LOCALE, getDir, isLocale, type Locale } from "./config";

type Ctx = { locale: Locale; setLocale: (l: Locale) => void; dir: "ltr" | "rtl" };
const LocaleCtx = createContext<Ctx>({ locale: DEFAULT_LOCALE, setLocale: () => {}, dir: "ltr" });

const STORAGE_KEY = "aurum.locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && isLocale(stored)) setLocaleState(stored);
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = locale;
    document.documentElement.dir = getDir(locale);
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch {}
  };

  return <LocaleCtx.Provider value={{ locale, setLocale, dir: getDir(locale) }}>{children}</LocaleCtx.Provider>;
}

export const useLocale = () => useContext(LocaleCtx);
