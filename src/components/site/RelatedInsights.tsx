import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

// A small, data-driven reverse-link block from a service/industry page back
// to genuinely relevant blog posts (see getRelatedPostsForService/Industry
// in lib/blog-data.ts). Deliberately a compact link list rather than the
// full image-card treatment blog.tsx/blog.$slug.tsx already use elsewhere —
// this is a secondary section on a commercial page, not a blog surface.
//
// Content-only (no outer <section>/container) so it composes correctly in
// both call sites' different layout shapes: services.$slug.tsx stacks
// full-bleed <section>s, while industries.$slug.tsx nests everything inside
// one shared <Container>. Each call site wraps this appropriately and gates
// rendering on posts.length > 0, matching how each file already guards its
// other optional sections.
export function RelatedInsights({ posts }: { posts: Pick<BlogPost, "slug" | "title" | "category">[] }) {
  return (
    <>
      <p className="eyebrow">Related insights</p>
      <h2 className="mt-5 font-display text-3xl md:text-4xl font-bold tracking-tight">
        Further reading
      </h2>
      <ul className="mt-8 max-w-2xl space-y-4">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-[color:var(--gold)]"
            >
              <span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--gold-deep)]">{p.category}</span>
                <span className="mt-1 block font-display text-base font-semibold tracking-tight text-foreground group-hover:text-[color:var(--gold-deep)]">
                  {p.title}
                </span>
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--gold)]" />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
