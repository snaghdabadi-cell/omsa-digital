import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { Container, Eyebrow, Heading, Prose, EmptyState, Tag } from "@/components/site/Primitives";
import { searchSite } from "@/lib/content/search-index";
import { track } from "@/lib/analytics";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/search")({
  head: () => pageMeta({
    title: "Search — OMSA Digital & AI Studio",
    description: "Search services, case studies, insights, resources, tools and locations across OMSA Digital & AI Studio.",
    path: "/search",
    noindex: true,
  }),
  component: SearchPage,
});

function SearchPage() {
  const [q, setQ] = useState("");
  const results = useMemo(() => searchSite(q), [q]);

  return (
    <section className="pt-40 pb-32">
      <Container>
        <Eyebrow>Search</Eyebrow>
        <Heading as="h1" size="xl" className="mt-6 max-w-3xl">
          Find <span className="text-gradient-gold">everything</span>.
        </Heading>
        <Prose className="mt-6 max-w-2xl text-lg">
          Across services, case studies, insights, resources, tools and locations.
        </Prose>

        <div className="mt-10 relative max-w-2xl">
          <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            autoFocus
            value={q}
            onChange={(e) => {
              const v = e.target.value;
              setQ(v);
              if (v.length > 2) track("search_query", { query: v, results: searchSite(v).length });
            }}
            placeholder="Try “direct bookings”, “local SEO Muscat”, “AI assistant”…"
            className="w-full rounded-full border border-border bg-card py-4 ps-12 pe-5 text-sm shadow-luxe focus:outline-none focus:border-[color:var(--gold)]"
          />
        </div>

        <div className="mt-10">
          {q.trim().length === 0 ? null : results.length === 0 ? (
            <EmptyState title="No results" body="Try a broader search, or browse the resources hub." />
          ) : (
            <ul className="grid gap-3">
              {results.map((r) => (
                <li key={r.path}>
                  <Link to={r.path} className="card-lift block rounded-2xl border border-border bg-card p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h2 className="font-display text-lg font-semibold">{r.title}</h2>
                      <Tag>{r.type}</Tag>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{r.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </section>
  );
}
