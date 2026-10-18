// Deterministic, dependency-free checks that every city page's contact-CTA
// source tag ("location-<slug>") is accepted by the client-side
// parseLeadSource validation AND by the server-side check in src/server.ts,
// so the tag survives from the CTA link through form submission into the
// notification email. Uses only Node's built-in node:assert, matching
// scripts/indexnow-submit.test.ts.
//
// Run with: node scripts/location-lead-source.test.ts

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { LOCATIONS } from "../src/lib/content/locations.ts";
import { locationLeadSource, parseLeadSource } from "../src/lib/lead-source.ts";

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

// The server re-validates `source` with its own inline regex; read it from the
// source so a future drift between client and server validation fails here.
const serverSource = readFileSync(new URL("../src/server.ts", import.meta.url), "utf8");
const serverMatch = serverSource.match(/data\.source === "string" && \/(.+?)\/\.test\(data\.source\)/);
const serverPattern = serverMatch ? new RegExp(serverMatch[1]) : undefined;

check("server.ts source validation regex is found", () => {
  assert.ok(serverPattern, "could not locate the source regex in src/server.ts");
});

for (const loc of LOCATIONS) {
  check(`${loc.slug}: produces location-${loc.slug}`, () => {
    assert.equal(locationLeadSource(loc.slug), `location-${loc.slug}`);
  });
  check(`${loc.slug}: accepted by parseLeadSource (round-trip via ?source=)`, () => {
    const source = locationLeadSource(loc.slug)!;
    const fromUrl = new URLSearchParams(`source=${encodeURIComponent(source)}`).get("source");
    assert.equal(parseLeadSource(fromUrl), source);
  });
  check(`${loc.slug}: accepted by the server-side check`, () => {
    assert.ok(serverPattern?.test(locationLeadSource(loc.slug)!));
  });
}

check("invalid slugs produce no source tag", () => {
  assert.equal(locationLeadSource("Abu Dhabi"), undefined);
  assert.equal(locationLeadSource("dubai<script>"), undefined);
  assert.equal(locationLeadSource("x".repeat(60)), undefined);
});

console.log(`\n${passed} passed${process.exitCode ? ", with failures" : ""}`);
