import { useState } from "react";
import { Globe, Check } from "lucide-react";
import { LOCALES, LOCALE_META } from "@/lib/i18n/config";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { track } from "@/lib/analytics";

export function LocaleSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-full hairline px-3 py-2 text-xs font-medium hover:border-[color:var(--gold)] transition-colors"
      >
        <Globe className="h-3.5 w-3.5" />
        <span className="uppercase tracking-wider">{locale}</span>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-44 rounded-2xl border border-border bg-popover p-2 shadow-luxe z-50"
          onMouseLeave={() => setOpen(false)}
        >
          {LOCALES.map((l) => {
            const meta = LOCALE_META[l];
            const active = l === locale;
            const disabled = meta.status === "soon";
            return (
              <li key={l}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  disabled={disabled}
                  onClick={() => {
                    if (disabled) return;
                    track("locale_change", { from: locale, to: l });
                    setLocale(l);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors ${
                    disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-muted"
                  } ${active ? "text-foreground" : "text-muted-foreground"}`}
                >
                  <span className="flex items-center gap-2">
                    <span>{meta.native}</span>
                    {disabled && <span className="text-[10px] uppercase tracking-wider text-muted-foreground">soon</span>}
                  </span>
                  {active && <Check className="h-3.5 w-3.5 text-[color:var(--gold)]" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
