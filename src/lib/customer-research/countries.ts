import type { CountryCode, Priority, ProspectContact } from "./types";

export const COUNTRIES: Record<CountryCode, { label: string; short: string }> = {
  om: { label: "Oman", short: "Oman" },
  ae: { label: "United Arab Emirates", short: "UAE" },
  qa: { label: "Qatar", short: "Qatar" },
  sa: { label: "Saudi Arabia", short: "Saudi Arabia" },
};

export const PRIORITY_LABEL: Record<Priority, string> = {
  "very-high": "Very High",
  high: "High",
  "medium-high": "Medium-High",
  "high-strategic": "High / Strategic",
  "strategic-stretch": "Strategic / Stretch",
  "wave-1": "Wave 1 · Early pilot",
  "wave-2": "Wave 2 · Follow-on",
  "wave-3": "Wave 3 · Stress test",
  "icp-primary": "Primary ICP",
  "icp-secondary": "Secondary ICP",
  "early-pilot": "Early pilot",
  commercial: "Commercial",
};

/** tel: href from a display number ("+968 9718 5621" → "tel:+96897185621"). */
export const telHref = (contact: Extract<ProspectContact, { kind: "phone" }>) =>
  `tel:${contact.number.replace(/[^\d+]/g, "")}`;

/** Bare host for display ("https://www.prism-me.com/" → "prism-me.com"). */
export const displayHost = (url: string) => new URL(url).hostname.replace(/^www\./, "");
