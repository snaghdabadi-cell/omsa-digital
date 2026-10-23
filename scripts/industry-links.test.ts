// Deterministic, dependency-free checks for the industry <-> location and
// industry <-> service cross-links. An industry page links to each city in
// its `locationSlugs`, and service pages list the industries that recommend
// them; these checks keep both honest: only live (indexable) cities, only
// cities whose own page already features that industry, and only real
// services. Uses only Node's built-in node:assert, matching the other
// scripts/*.test.ts files.
//
// Run with: node scripts/industry-links.test.ts

import assert from "node:assert/strict";
import { INDUSTRY_PAGES } from "../src/lib/content/industries.ts";
import { LOCATIONS } from "../src/lib/content/locations.ts";
import { LOCATION_NAV_LINKS } from "../src/lib/content/nav-links.ts";
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

const serviceSlugs = new Set<string>(SERVICES);

for (const ind of INDUSTRY_PAGES) {
  for (const slug of ind.locationSlugs ?? []) {
    check(`/industries/${ind.slug} -> /locations/${slug} is live and in the footer list`, () => {
      const loc = LOCATIONS.find((l) => l.slug === slug);
      assert.ok(loc, `unknown location "${slug}"`);
      assert.equal(loc.status, "live", `"${slug}" is a noindexed "soon" city`);
      assert.ok(LOCATION_NAV_LINKS.some((l) => l.slug === slug), `"${slug}" missing from LOCATION_NAV_LINKS`);
    });
    check(`/locations/${slug} already features ${ind.slug}`, () => {
      const loc = LOCATIONS.find((l) => l.slug === slug)!;
      const viaHub = JSON.stringify(loc).includes(`"kind":"industry","slug":"${ind.slug}"`);
      const viaCaseStudy = !!ind.caseStudySlug && loc.relatedCaseStudySlug === ind.caseStudySlug;
      assert.ok(viaHub || viaCaseStudy, `the ${slug} page doesn't link to ${ind.slug}; not a genuine relationship`);
    });
  }
  check(`/industries/${ind.slug}: every recommended service exists`, () => {
    for (const s of ind.services) assert.ok(serviceSlugs.has(s), `unknown service "${s}"`);
  });
  if (ind.h1) {
    check(`/industries/${ind.slug}: h1 contains the industry name`, () => {
      assert.ok(ind.h1!.includes(ind.name), `"${ind.h1}" doesn't contain "${ind.name}"`);
    });
  }
}

check("LOCATION_NAV_LINKS lists only live cities", () => {
  for (const l of LOCATION_NAV_LINKS) {
    assert.equal(LOCATIONS.find((x) => x.slug === l.slug)?.status, "live", `"${l.slug}" is not live`);
  }
});

console.log(`\n${passed} passed`);
