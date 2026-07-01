// Typed, no-op analytics wrapper. Ready to plug GTM/GA4/PostHog without
// touching call sites. Replace the `dispatch` body when wiring a provider.

export type AnalyticsEvent =
  | { name: "cta_click"; props: { location: string; label: string } }
  | { name: "form_submit"; props: { form: string; outcome: "success" | "error" } }
  | { name: "locale_change"; props: { from: string; to: string } }
  | { name: "search_query"; props: { query: string; results: number } }
  | { name: "tool_open"; props: { tool: string } }
  | { name: "page_view"; props: { path: string } };

type W = Window & { dataLayer?: Array<Record<string, unknown>> };

function dispatch(name: string, props: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const w = window as W;
  if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event: name, ...props });
  }
}

export function track<E extends AnalyticsEvent>(event: E["name"], props: Extract<AnalyticsEvent, { name: E["name"] }>["props"]) {
  dispatch(event, props as Record<string, unknown>);
}
