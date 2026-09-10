// Manually invoked utility — NOT wired to any build step, deploy hook, or
// public HTTP endpoint. There is no CMS/webhook/cron in this project to
// safely attach automatic submission to, and IndexNow-on-every-request or
// IndexNow-on-every-build would risk spamming the API for no benefit — so
// this is a deliberate, human-triggered step instead: run it after a
// production deploy that changed indexable pages.
//
// What it does: fetches the LIVE production sitemap.xml (the same
// data-driven source of truth src/routes/sitemap[.]xml.ts generates, which
// already excludes noindex/"soon" location pages, API routes, and
// non-canonical variants), validates every URL, and submits the resulting
// list to IndexNow's single shared endpoint — which fans out to every
// participating search engine (currently Bing, Yandex, Seznam and Naver;
// Google does not participate in IndexNow and is unaffected either way).
//
// Usage:
//   npm run indexnow
//
// The key below is a public ownership-verification token, not a secret —
// see src/routes/f4d4e0d5a5df285a1a525571bc59290e[.]txt.ts, which serves it
// at the domain root as the protocol requires. Keep both files in sync.

import { pathToFileURL } from "node:url";

const HOST = "omsadigital.com";
const SITE_URL = `https://${HOST}`;
const INDEXNOW_KEY = "f4d4e0d5a5df285a1a525571bc59290e";
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const MAX_URLS_PER_SUBMISSION = 10000; // IndexNow protocol limit

async function fetchSitemapUrls(): Promise<string[]> {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${SITEMAP_URL}: ${res.status} ${res.statusText}`);
  }
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (urls.length === 0) {
    throw new Error("Sitemap returned zero URLs — refusing to submit an empty/broken result.");
  }
  return urls;
}

// Only accept https://omsadigital.com URLs with no querystring, deduped.
// Rejects anything else (foreign hosts, http, malformed, trailing-slash
// dupes) rather than silently letting it through. Exported for
// scripts/indexnow-submit.test.ts.
export function validateUrls(rawUrls: string[]): string[] {
  const seen = new Set<string>();
  const valid: string[] = [];
  for (const raw of rawUrls) {
    let url: URL;
    try {
      url = new URL(raw);
    } catch {
      console.warn(`Skipping malformed URL: ${raw}`);
      continue;
    }
    if (url.protocol !== "https:") {
      console.warn(`Skipping non-HTTPS URL: ${raw}`);
      continue;
    }
    if (url.hostname !== HOST) {
      console.warn(`Skipping URL for foreign host "${url.hostname}": ${raw}`);
      continue;
    }
    if (url.search || url.hash) {
      console.warn(`Skipping URL with querystring/fragment: ${raw}`);
      continue;
    }
    const normalized = url.toString();
    if (seen.has(normalized)) {
      console.warn(`Skipping duplicate URL: ${normalized}`);
      continue;
    }
    seen.add(normalized);
    valid.push(normalized);
  }
  return valid;
}

async function submit(urls: string[]): Promise<void> {
  if (urls.length === 0) {
    console.error("No valid URLs survived validation. Aborting — nothing submitted.");
    process.exit(1);
  }
  if (urls.length > MAX_URLS_PER_SUBMISSION) {
    console.error(
      `${urls.length} URLs exceeds IndexNow's ${MAX_URLS_PER_SUBMISSION}-URL limit per submission. Aborting.`,
    );
    process.exit(1);
  }

  const body = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  console.log(`IndexNow response: ${res.status} ${res.statusText}`);

  // 200 = submitted; 202 = received, key validation pending (also success).
  if (res.status === 200 || res.status === 202) {
    console.log(`Submitted ${urls.length} URL(s) to IndexNow successfully.`);
    return;
  }

  const responseText = await res.text().catch(() => "(no response body)");
  const reasons: Record<number, string> = {
    400: "Invalid request format.",
    403: `Key not found or not reachable at ${KEY_LOCATION}.`,
    422: "URLs don't match the declared host, or a key/schema mismatch.",
    429: "Too many requests — IndexNow is rate-limiting this submitter.",
  };
  console.error(`IndexNow submission failed: ${reasons[res.status] ?? "Unexpected response."}`);
  console.error(`Response body: ${responseText}`);
  process.exit(1);
}

async function main() {
  console.log(`Fetching current sitemap from ${SITEMAP_URL} ...`);
  const rawUrls = await fetchSitemapUrls();
  console.log(`Fetched ${rawUrls.length} URL(s) from the live sitemap.`);

  const validUrls = validateUrls(rawUrls);
  const skipped = rawUrls.length - validUrls.length;
  if (skipped > 0) {
    console.warn(`${skipped} URL(s) were skipped during validation — see warnings above.`);
  }
  console.log(`${validUrls.length} URL(s) passed validation and will be submitted.`);

  await submit(validUrls);
}

// Only run when executed directly (`node scripts/indexnow-submit.ts`), not
// when imported by scripts/indexnow-submit.test.ts — otherwise every test
// run would trigger a real network submission. Compared as file:// URLs
// (via pathToFileURL) rather than raw strings so this works correctly on
// Windows, where process.argv[1] uses backslashes and drive letters.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((err) => {
    console.error("IndexNow submission script failed:", err instanceof Error ? err.message : err);
    process.exit(1);
  });
}
