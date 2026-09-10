// Deterministic, dependency-free checks for the URL-validation logic in
// indexnow-submit.ts. The repo has no test framework (no jest/vitest), and
// this is a single small CLI utility — not a reason to introduce one, per
// the project's "minimum new dependencies" convention. Uses only Node's
// built-in node:assert.
//
// Run with: node scripts/indexnow-submit.test.ts

import assert from "node:assert/strict";
import { validateUrls } from "./indexnow-submit.ts";

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

check("accepts a valid https://omsadigital.com URL", () => {
  const result = validateUrls(["https://omsadigital.com/"]);
  assert.deepEqual(result, ["https://omsadigital.com/"]);
});

check("accepts multiple distinct valid URLs", () => {
  const result = validateUrls([
    "https://omsadigital.com/about",
    "https://omsadigital.com/services/seo",
  ]);
  assert.deepEqual(result, [
    "https://omsadigital.com/about",
    "https://omsadigital.com/services/seo",
  ]);
});

check("rejects a foreign host (cannot be used to submit competitor/external URLs)", () => {
  const result = validateUrls(["https://example.com/"]);
  assert.deepEqual(result, []);
});

check("rejects a malformed URL instead of throwing", () => {
  const result = validateUrls(["not a url"]);
  assert.deepEqual(result, []);
});

check("rejects non-HTTPS URLs", () => {
  const result = validateUrls(["http://omsadigital.com/"]);
  assert.deepEqual(result, []);
});

check("rejects URLs with a querystring", () => {
  const result = validateUrls(["https://omsadigital.com/?page_id=13"]);
  assert.deepEqual(result, []);
});

check("deduplicates identical URLs", () => {
  const result = validateUrls([
    "https://omsadigital.com/about",
    "https://omsadigital.com/about",
  ]);
  assert.deepEqual(result, ["https://omsadigital.com/about"]);
});

check("mixed batch: keeps only the valid, deduplicated, same-host URLs", () => {
  const result = validateUrls([
    "https://omsadigital.com/blog",
    "https://evil-example.com/blog",
    "https://omsadigital.com/blog",
    "not a url",
    "http://omsadigital.com/insecure",
    "https://omsadigital.com/contact?utm_source=x",
  ]);
  assert.deepEqual(result, ["https://omsadigital.com/blog"]);
});

console.log(`\n${passed} check(s) passed.`);
if (process.exitCode) {
  console.error("Some checks failed.");
} else {
  console.log("All checks passed.");
}
