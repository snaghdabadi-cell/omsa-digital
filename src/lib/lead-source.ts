// Optional lead source (e.g. "audit-elnaggar-partners"), restricted to a safe slug.
const LEAD_SOURCE_PATTERN = /^[a-z0-9-]{1,60}$/;

export const parseLeadSource = (value: unknown): string | undefined =>
  typeof value === "string" && LEAD_SOURCE_PATTERN.test(value) ? value : undefined;

// Contact-CTA source tag for a city page (e.g. "location-dubai"); undefined if
// the slug can't form a valid tag, so the CTA falls back to a plain /contact.
export const locationLeadSource = (citySlug: string): string | undefined =>
  parseLeadSource(`location-${citySlug}`);
