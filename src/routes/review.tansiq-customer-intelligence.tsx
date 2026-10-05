import { createFileRoute } from "@tanstack/react-router";
import { Lock, Sparkles } from "lucide-react";
import { ProspectDatabase } from "@/components/customer-research/ProspectDatabase";
import { ResearchBlocks } from "@/components/customer-research/ResearchBlocks";
import {
  ProductOpportunities,
  ResearchMethodology,
  SegmentConclusion,
  SegmentHero,
  SegmentOverview,
  SegmentRationale,
  SegmentStrategy,
} from "@/components/customer-research/SegmentSections";
import { ReviewSectionHeader } from "@/components/prospect-review/ReviewPrimitives";
import { ReviewSignature } from "@/components/prospect-review/ReviewSignature";
import { TANSIQ_RESEARCH } from "@/lib/customer-research/tansiq";
import type { Segment } from "@/lib/customer-research/types";
import { privateReviewHead } from "@/lib/prospect-review/meta";

// Private customer-discovery research prepared for Tansiq. Reachable by direct
// link only: noindex, follow; not in the sitemap or site navigation, and the
// root layout drops the site navbar/footer for /review/*.
//
// Research data lives in lib/customer-research/tansiq. Segments are selected
// with ?segment=NN (default: the first), so new segments need no page changes.

const program = TANSIQ_RESEARCH;

const segmentFor = (id: string | undefined): Segment =>
  program.segments.find((s) => s.id === id) ?? program.segments[0];

export const Route = createFileRoute("/review/tansiq-customer-intelligence")({
  validateSearch: (search: Record<string, unknown>): { segment?: string } =>
    typeof search.segment === "string" && program.segments.some((s) => s.id === search.segment)
      ? { segment: search.segment }
      : {},
  head: ({ match }) => {
    const segment = segmentFor(match.search.segment);
    return privateReviewHead({
      title: `${program.title} — Segment ${segment.number}: ${segment.name} | OMSA`,
      description: `Private customer-discovery research for ${program.client}: Segment ${segment.number}, ${segment.name}. ${
        segment.prospects.length > 0
          ? `${segment.prospects.length} researched prospects across Oman, UAE, Qatar and Saudi Arabia.`
          : "Problem hypotheses synthesised from earlier segments — market validation pending."
      }`,
      path: program.path,
      lang: "en",
    });
  },
  component: TansiqResearchPage,
});

function TansiqResearchPage() {
  const segment = segmentFor(Route.useSearch().segment);
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <ResearchHeader current={segment} />
      <SegmentHero program={program} segment={segment} />
      <SegmentOverview segment={segment} />
      <ResearchBlocks segment={segment} placement="before" />
      <ProductOpportunities segment={segment} />
      <SegmentStrategy segment={segment} />
      <SegmentRationale segment={segment} />
      <ResearchMethodology methodology={segment.methodology ?? program.methodology} />
      {/* Problem-hypothesis segments (e.g. Segment 05) have no prospect database. */}
      {segment.prospects.length > 0 && (
        <section
          id="prospects"
          aria-labelledby="prospects-title"
          className="scroll-mt-20 py-16 md:py-24"
        >
          <div className="container-luxe">
            <ReviewSectionHeader
              eyebrow="Prospect database"
              title={<span id="prospects-title">Researched businesses</span>}
            >
              <p>
                {segment.view?.prospectsIntro ??
                  "Each record separates what was publicly verified from the opportunity inferred from it. Expand a business to see the full research and recommended approach."}
              </p>
            </ReviewSectionHeader>
            <div className="mt-10">
              <ProspectDatabase
                prospects={segment.prospects}
                markets={program.markets}
                scoring={segment.scoring}
                solutionLabel={segment.solutionLabel}
                currentCapability={segment.currentCapability}
                view={segment.view}
              />
            </div>
          </div>
        </section>
      )}
      <ResearchBlocks segment={segment} placement="after" />
      <SegmentConclusion segment={segment} />
      <ReviewSignature
        preparedBy={`Prepared for ${program.client} by`}
        prospect={`${program.title} · Segment ${segment.number}`}
        date={program.prepared}
      />
    </div>
  );
}

const JUMP_LINKS = [
  { href: "#segment", label: "Segment" },
  { href: "#opportunities", label: "Opportunities" },
  { href: "#method", label: "Method" },
  { href: "#prospects", label: "Prospects" },
  { href: "#conclusion", label: "Conclusion" },
];

function ResearchHeader({ current }: { current: Segment }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl print:hidden">
      <div className="container-luxe flex h-16 items-center justify-between gap-4">
        <a
          href="/"
          className="flex min-h-11 shrink-0 items-center gap-2.5"
          aria-label="OMSA Digital home"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[color:var(--gold)]" aria-hidden />
          </span>
          <span className="font-display text-base font-bold tracking-tight">
            OMSA
            {/* Dropped on the narrowest phones so the segment switcher fits. */}
            <span className="text-gradient-gold max-[379px]:hidden"> Digital</span>
          </span>
        </a>
        <nav aria-label="On this page" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {(current.nav ?? JUMP_LINKS).map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="inline-flex min-h-9 items-center rounded-full px-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          {program.segments.length > 1 && <SegmentSwitcher current={current} />}
          {/* Hidden on narrow phones when the segment switcher needs the room. */}
          <span
            className={`items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-muted-foreground ${
              program.segments.length > 1 ? "hidden sm:inline-flex" : "inline-flex"
            }`}
          >
            <Lock aria-hidden className="h-3 w-3 text-[color:var(--gold-deep)]" />
            Private research
          </span>
        </div>
      </div>
    </header>
  );
}

/** Shown once a second segment exists. Plain links, so they work before hydration. */
function SegmentSwitcher({ current }: { current: Segment }) {
  return (
    <nav aria-label="Research segments">
      <ul className="flex items-center gap-0.5 rounded-full border border-border bg-muted/50 p-1 sm:gap-1">
        {program.segments.map((s, i) => (
          <li key={s.id}>
            <a
              href={i === 0 ? program.path : `${program.path}?segment=${s.id}`}
              aria-current={s.id === current.id ? "page" : undefined}
              title={s.name}
              className={`inline-flex min-h-8 items-center rounded-full px-1.5 text-xs min-[380px]:px-2.5 sm:px-3 font-semibold tabular-nums ${
                s.id === current.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s.number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
