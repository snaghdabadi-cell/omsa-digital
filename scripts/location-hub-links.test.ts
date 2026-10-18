// Deterministic, dependency-free checks for content-hub internal links on
// location and industry pages. ContentHubSection renders a link only when its
// anchor is an exact substring of the copy; otherwise the text renders without
// the link and nothing fails. This test makes that failure visible, and checks
// that service and industry targets exist. Uses only Node's built-in
// node:assert, matching the other scripts/*.test.ts files.
//
// Run with: node scripts/location-hub-links.test.ts

import assert from "node:assert/strict";
import type { ContentHub, HubText } from "../src/lib/content/hub.ts";
import { LOCATIONS } from "../src/lib/content/locations.ts";
import { INDUSTRY_PAGES } from "../src/lib/content/industries.ts";
import { SERVICES } from "../src/lib/content/taxonomy.ts";

let passed = 0;
function check(name: string, fn: () => void) {
  try {
    fn();
    passed++;
    console.log(`ok — ${name}`);
  } catch (err) {
    console.error(`FAIL — ${name}`);
    console.error(err instanceof Error ? err.message : err);
    process.exitCode = 1;
  }
}

// Every piece of hub copy that can carry a link.
function hubTexts(hub: ContentHub): HubText[] {
  return [
    ...hub.intro,
    ...hub.stages.flatMap((s) => [s.body, ...s.points.filter((p): p is HubText => typeof p !== "string")]),
    ...(hub.closing ? [hub.closing] : []),
  ];
}

const industrySlugs = new Set(INDUSTRY_PAGES.map((i) => i.slug));
const serviceSlugs = new Set<string>(SERVICES);

const pages = [
  ...LOCATIONS.map((l) => ({ name: `/locations/${l.slug}`, hub: l.hub })),
  ...INDUSTRY_PAGES.map((i) => ({ name: `/industries/${i.slug}`, hub: i.hub })),
].filter((p): p is { name: string; hub: ContentHub } => Boolean(p.hub));

check("at least one hub exists to test", () => {
  assert.ok(pages.length > 0);
});

for (const { name, hub } of pages) {
  for (const t of hubTexts(hub)) {
    if (!t.link) continue;
    const { anchor, kind, slug } = t.link;
    check(`${name}: "${anchor}" appears in its copy`, () => {
      assert.ok(t.text.includes(anchor), `anchor not found in: ${t.text}`);
    });
    if (kind === "service") {
      check(`${name}: service "${slug}" exists`, () => assert.ok(serviceSlugs.has(slug)));
    }
    if (kind === "industry") {
      check(`${name}: industry "${slug}" exists`, () => assert.ok(industrySlugs.has(slug)));
    }
  }
}

console.log(`\n${passed} passed${process.exitCode ? ", with failures" : ""}`);
