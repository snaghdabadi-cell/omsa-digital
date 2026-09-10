import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// IndexNow ownership-verification key file, served at the domain root per
// the IndexNow protocol (https://www.indexnow.org/documentation). This key
// is a public verification token by design, not a secret — its only job is
// to prove control of the domain when scripts/indexnow-submit.ts notifies
// IndexNow-participating search engines about updated URLs. The filename
// itself IS the key; keep this file's name and its content identical, and
// keep both in sync with INDEXNOW_KEY in scripts/indexnow-submit.ts.
const INDEXNOW_KEY = "f4d4e0d5a5df285a1a525571bc59290e";

export const Route = createFileRoute("/f4d4e0d5a5df285a1a525571bc59290e.txt")({
  server: {
    handlers: {
      GET: async () =>
        new Response(INDEXNOW_KEY, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=86400",
          },
        }),
    },
  },
});
