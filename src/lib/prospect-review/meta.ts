import type { ReviewLang } from "@/components/prospect-review/review-lang";
import { pageMeta } from "@/lib/seo";

/**
 * Head block for a private prospect page: reachable by direct link only, so
 * it is noindex — but "follow" (pageMeta's noindex is "noindex, nofollow").
 */
export function privateReviewHead(opts: {
  title: string;
  description: string;
  path: string;
  lang: ReviewLang;
}) {
  const base = pageMeta({
    title: opts.title,
    description: opts.description,
    path: opts.path,
    noindex: true,
  });
  return {
    ...base,
    meta: base.meta.map((m) => {
      if (m.name === "robots") return { ...m, content: "noindex, follow" };
      if (opts.lang === "ar" && "property" in m && m.property === "og:locale")
        return { ...m, content: "ar_AE" };
      return m;
    }),
  };
}
