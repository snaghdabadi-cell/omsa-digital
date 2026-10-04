import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  Building2,
  Compass,
  FileText,
  FolderKanban,
  Gem,
  Hammer,
  LayoutGrid,
  Lock,
  MapPin,
  Network,
  Search,
  Users,
  Waypoints,
} from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/site/Reveal";
import { AuthorityMap, type AuthorityBranch } from "@/components/prospect-review/AuthorityMap";
import { ReviewNav, type ReviewNavItem } from "@/components/prospect-review/ReviewNav";
import {
  EvidenceBadge,
  FindingBlock,
  IllustrativeNote,
  OpportunityCard,
  ReviewFinding,
  ReviewSectionHeader,
} from "@/components/prospect-review/ReviewPrimitives";
import { track } from "@/lib/analytics";
import { pageMeta } from "@/lib/seo";

// Private prospect review for Al Baraa Building Contracting. Reachable by
// direct link only: noindex, follow; not in the sitemap or any site navigation.
//
// Evidence rule for this page: every statement about Al Baraa is limited to
// the public signals OMSA reviewed (company establishment date, current
// website copy and structure, publicly presented capabilities, and public
// professional profiles of project team members). Everything else is framed
// as an OMSA observation or an illustrative example — no rankings, volumes,
// scores or AI-visibility claims.

const PATH = "/review/al-baraa-7k4m";

export const Route = createFileRoute("/review/al-baraa-7k4m")({
  head: () => {
    const base = pageMeta({
      title: "Al Baraa — Search & AI Authority Review | OMSA",
      description:
        "A private Search & AI Authority Review prepared by OMSA Digital & AI Studio for Al Baraa Building Contracting.",
      path: PATH,
      noindex: true,
    });
    return {
      ...base,
      // pageMeta's noindex is "noindex, nofollow"; this page should still pass link equity.
      meta: base.meta.map((m) => (m.name === "robots" ? { ...m, content: "noindex, follow" } : m)),
    };
  },
  component: ReviewPage,
});

const NAV: ReviewNavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "findings", label: "Findings" },
  { id: "authority-map", label: "Authority Map" },
  { id: "search", label: "Search" },
  { id: "ai", label: "AI Opportunity" },
  { id: "recommendations", label: "Recommendations" },
];

/** Source tag carried into the contact flow so leads from this review are identifiable. */
const CONTACT_HREF = "/contact?source=review-al-baraa";

function ReviewPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ReviewNav items={NAV} label="Review sections" />
      <Hero />
      <div id="overview" className="scroll-mt-16">
        <Scope />
        <CoreOpportunity />
      </div>
      <Findings />
      <AuthorityMapSection />
      <SearchLandscape />
      <AiDiscovery />
      <AdditionalObservations />
      <Recommendations />
      <Outcomes />
      <Disclaimer />
      <ClosingCta />
      <Signature />
    </div>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 lg:pt-28 lg:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-[color:var(--gold)]/10 blur-3xl"
      />
      <div className="container-luxe relative">
        <div className="grid items-end gap-14 lg:grid-cols-[1.45fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow animate-hero-eyebrow">Private strategic review</p>
            <p className="mt-10 font-display text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--gold-deep)] animate-hero-eyebrow">
              Search &amp; AI Authority Review
            </p>
            <h1 className="mt-4 font-display text-[2.6rem] font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl animate-hero-title">
              Al Baraa Building Contracting
            </h1>
            <p className="mt-7 max-w-2xl font-display text-2xl font-semibold leading-snug tracking-tight md:text-3xl animate-hero-desc">
              Turning Real-World Expertise Into{" "}
              <span className="text-gradient-gold">Search &amp; AI Authority</span>
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground animate-hero-desc">
              An independent review of how Al Baraa&apos;s expertise, services, project experience
              and market signals are represented across search and AI discovery.
            </p>
            <a
              href="#overview"
              className="group mt-10 inline-flex items-center gap-3 font-display text-sm font-semibold animate-hero-cta"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full border border-foreground/15 transition-colors duration-300 group-hover:border-[color:var(--gold)]">
                <ArrowDown
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </span>
              View the findings
            </a>
          </div>

          <aside
            aria-label="Review details"
            className="rounded-3xl border border-border bg-card p-7 shadow-luxe animate-hero-meta md:p-8"
          >
            <dl className="divide-y divide-border text-sm">
              <MetaRow term="Prepared for">Al Baraa Building Contracting</MetaRow>
              <MetaRow term="Prepared by">OMSA Digital &amp; AI Studio</MetaRow>
              <MetaRow term="Date">October 2026</MetaRow>
              <MetaRow term="Basis">
                <span className="inline-flex items-center gap-2">
                  <span className="relative flex h-2 w-2" aria-hidden>
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--gold)] opacity-50 motion-reduce:hidden" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--gold)]" />
                  </span>
                  Based on publicly available information
                </span>
              </MetaRow>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

function MetaRow({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div className="grid gap-1 py-4 first:pt-0 last:pb-0">
      <dt className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {term}
      </dt>
      <dd className="font-medium text-foreground">{children}</dd>
    </div>
  );
}

/* ─────────────────────────── SCOPE ─────────────────────────── */

const SCOPE = [
  {
    icon: LayoutGrid,
    title: "Website architecture",
    desc: "How pages, services and content are organised and linked.",
  },
  {
    icon: Briefcase,
    title: "Service positioning",
    desc: "How capabilities are named, grouped and described.",
  },
  {
    icon: FolderKanban,
    title: "Project representation",
    desc: "How project experience is presented as evidence.",
  },
  {
    icon: MapPin,
    title: "Location signals",
    desc: "How markets and service areas are communicated.",
  },
  {
    icon: Search,
    title: "Search discoverability",
    desc: "How capabilities map to commercial search intent.",
  },
  {
    icon: Network,
    title: "AI / entity readiness",
    desc: "How clearly the business can be interpreted as an entity.",
  },
];

function Scope() {
  return (
    <section className="border-t border-border bg-muted/30 py-20 lg:py-28">
      <div className="container-luxe">
        <ReviewSectionHeader
          eyebrow="What we reviewed"
          title="Six lenses, one question: how clearly does the expertise travel online?"
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SCOPE.map(({ icon: Icon, title, desc }, i) => (
            <Reveal as="li" key={title} delay={i * 0.04}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-background p-6">
                <Icon
                  aria-hidden
                  className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--gold-deep)]"
                />
                <div>
                  <h3 className="font-display text-base font-semibold tracking-tight">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <p className="mt-10 flex max-w-3xl items-start gap-3 text-sm leading-relaxed text-foreground/80">
            <Lock aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold-deep)]" />
            <span>
              This review uses publicly available website, search and company information. No
              private analytics, Search Console, CRM or internal business data was accessed.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────── CORE OPPORTUNITY ─────────────────────── */

const PROGRESSION = [
  { label: "Real-world authority", desc: "The work, people and history behind the business." },
  { label: "Digital authority", desc: "How that experience is represented online." },
  { label: "Search authority", desc: "How search engines retrieve and connect it." },
  { label: "AI authority", desc: "How AI systems interpret and corroborate it." },
];

function CoreOpportunity() {
  const reduced = useReducedMotion();
  return (
    <section className="section-pad">
      <div className="container-luxe">
        <Reveal>
          <p className="eyebrow">The core opportunity</p>
          <p className="mt-8 max-w-5xl font-display text-3xl font-bold leading-[1.15] tracking-tight md:text-5xl lg:text-[3.5rem]">
            Al Baraa appears to have more real-world expertise than its current digital structure{" "}
            <span className="text-gradient-gold">fully communicates.</span>
          </p>
          <div className="mt-10 grid max-w-4xl gap-6 text-lg leading-relaxed text-muted-foreground md:grid-cols-2">
            <p>The opportunity is not to manufacture authority.</p>
            <p>
              It is to organise and connect existing expertise, services, project evidence,
              locations and people so that prospective clients, search engines and AI systems can
              understand the business more clearly.
            </p>
          </div>
        </Reveal>

        <ol className="mt-16 grid gap-0 lg:mt-20 lg:grid-cols-4">
          {PROGRESSION.map((step, i) => (
            <li
              key={step.label}
              className="relative flex gap-5 pb-10 last:pb-0 lg:block lg:pb-0 lg:pe-8"
            >
              {/* Connector: vertical on mobile, horizontal on desktop */}
              {i < PROGRESSION.length - 1 && (
                <>
                  <span
                    aria-hidden
                    className="absolute start-[0.6875rem] top-7 bottom-0 w-px bg-gradient-to-b from-[color:var(--gold)] to-[color:var(--gold)]/20 lg:hidden"
                  />
                  <motion.span
                    aria-hidden
                    className="absolute top-[0.6875rem] start-8 end-2 hidden h-px origin-left bg-gradient-to-r from-[color:var(--gold)] to-[color:var(--gold)]/25 lg:block"
                    initial={reduced ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, delay: 0.2 + i * 0.25, ease: [0.22, 1, 0.36, 1] }}
                  />
                </>
              )}
              <span
                aria-hidden
                className={`relative z-10 mt-0.5 grid h-[1.375rem] w-[1.375rem] shrink-0 place-items-center rounded-full border ${
                  i === PROGRESSION.length - 1
                    ? "border-[color:var(--gold)] bg-[color:var(--gold)]"
                    : "border-[color:var(--gold)] bg-background"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${i === PROGRESSION.length - 1 ? "bg-[color:var(--ink)]" : "bg-[color:var(--gold)]"}`}
                />
              </span>
              <div className="lg:mt-6">
                <p className="font-display text-sm font-bold uppercase tracking-[0.16em]">
                  {step.label}
                </p>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─────────────────────────── FINDINGS ─────────────────────────── */

const REFERENCED_PROJECTS = [
  { name: "Tagomago", place: "Palm Jumeirah" },
  { name: "Maison Revka", place: "Bluewaters" },
  { name: "Eugene Eugene", place: "Kempinski Mall of the Emirates" },
  { name: "Pepperoni Comedy Club", place: "One Central" },
];

/** Labels as they appear on Al Baraa's current public project page. */
const CURRENT_PROJECT_LABELS = [
  "Engineered Project",
  "Glass Works Project",
  "Gypsum Works Project",
  "Solar Energy Project",
  "Home Automation Project",
];

function Findings() {
  return (
    <section id="findings" className="section-pad scroll-mt-16 border-t border-border">
      <div className="container-luxe">
        <ReviewSectionHeader
          eyebrow="Findings"
          title="Four places where existing expertise could work harder."
        >
          <p>
            Each finding separates what was publicly observed from OMSA&apos;s reading of it. None
            of them is a ranking claim.
          </p>
        </ReviewSectionHeader>

        <div className="mt-16 md:mt-20">
          <ReviewFinding
            number="01"
            title="Company History Can Become a Stronger Authority Signal"
            evidence="Public company information + current website copy reviewed"
          >
            <FindingBlock kind="signal">
              <p>
                Public company information reviewed by OMSA references Al Baraa&apos;s establishment
                in 1984.
              </p>
            </FindingBlock>
            <FindingBlock kind="observation">
              <p>
                Some current website copy uses broader or older experience messaging rather than
                consistently turning the company&apos;s operating history into a prominent trust and
                authority signal.
              </p>
            </FindingBlock>
            <FindingBlock kind="opportunity">
              <p>
                Align company history, About content, structured company information and trust
                signals around a consistent, well-supported brand story.
              </p>
            </FindingBlock>
          </ReviewFinding>

          <ReviewFinding
            number="02"
            title="Project Experience Could Work Much Harder for Search"
            evidence="Current website + public professional profiles reviewed"
            visual={<ProjectComparison />}
          >
            <FindingBlock kind="observation">
              <p>
                The current website includes project and capability content, but much of the visible
                project structure is organised around generic project and service labels.
              </p>
            </FindingBlock>
            <FindingBlock kind="signal">
              <p>
                Al Baraa has publicly presented{" "}
                <strong className="font-semibold text-foreground">
                  Lana Lusa — Four Seasons Private Residences
                </strong>{" "}
                as one of its fit-out projects.
              </p>
            </FindingBlock>
            <FindingBlock kind="signal">
              <p>
                Public professional information associated with members of Al Baraa&apos;s project
                team also references involvement in notable hospitality and F&amp;B projects in
                Dubai.
              </p>
              <p className="text-foreground/70">
                Projects publicly referenced in professional profiles associated with Al
                Baraa&apos;s project team include:
              </p>
              <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
                {REFERENCED_PROJECTS.map((p) => (
                  <li key={p.name} className="bg-background px-5 py-4 sm:odd:last:col-span-2">
                    <span className="block font-display font-semibold tracking-tight">
                      {p.name}
                      <sup aria-hidden className="ms-0.5 text-[color:var(--gold-deep)]">
                        †
                      </sup>
                    </span>
                    <span className="mt-0.5 block text-sm text-muted-foreground">{p.place}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs leading-relaxed text-muted-foreground">
                <span aria-hidden className="text-[color:var(--gold-deep)]">
                  †{" "}
                </span>
                Project references above reflect publicly available professional information
                reviewed by OMSA and are shown as authority opportunities, not as independent
                certification of contractual scope.
              </p>
            </FindingBlock>
          </ReviewFinding>

          <ReviewFinding
            number="03"
            title="Expertise Could Be Organised More Closely Around Buyer Intent"
            evidence="Current website + official LinkedIn company description reviewed"
            visual={<IntentMatrix />}
          >
            <FindingBlock kind="signal">
              <p>
                Al Baraa publicly presents capabilities including fit-out, joinery, interior
                execution and turnkey work.
              </p>
              <p>
                Al Baraa&apos;s official LinkedIn company description states that the company has
                in-house joinery, metal and aluminium workshops.
              </p>
            </FindingBlock>
            <FindingBlock kind="opportunity">
              <p>
                A stronger search architecture could connect these capabilities with the sectors and
                locations where prospective clients actually search for providers.
              </p>
            </FindingBlock>
            <FindingBlock kind="observation" label="OMSA observation · Opportunity">
              <p>
                One differentiator surfaced prominently by specialist fit-out providers during our
                review is in-house joinery capability. Al Baraa publicly states that it already has
                an in-house joinery workshop, creating an opportunity to communicate an existing
                competitive capability more prominently within its commercial search architecture.
              </p>
            </FindingBlock>
          </ReviewFinding>

          <ReviewFinding
            number="04"
            title="A Clearer Authority Hierarchy Could Strengthen Machine Understanding"
            evidence="Structural review of the current website"
            visual={<EntityHierarchy />}
          >
            <FindingBlock kind="observation">
              <p>
                A broad service offering is not inherently a problem. The opportunity is clarity,
                not narrowing.
              </p>
            </FindingBlock>
            <FindingBlock kind="opportunity">
              <p>
                Make the relationship between the company, its services, sectors, locations,
                projects, people and evidence more explicit. Clearer entity relationships can help
                search and AI systems interpret what a business does, where it operates, what
                evidence supports its expertise and which topics it should be associated with.
              </p>
            </FindingBlock>
          </ReviewFinding>
        </div>
      </div>
    </section>
  );
}

/** Horizontal (desktop) / vertical (mobile) chain of linked concepts. */
function Chain({ items, tone = "light" }: { items: string[]; tone?: "light" | "gold" }) {
  return (
    <ol className="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center md:gap-y-3">
      {items.map((item, i) => (
        <li key={item} className="flex items-center gap-2 md:gap-3">
          {i > 0 && (
            <ArrowRight
              aria-hidden
              className="h-3.5 w-3.5 shrink-0 rotate-90 text-[color:var(--gold-deep)] md:rotate-0"
            />
          )}
          <span
            className={`inline-flex rounded-full border px-4 py-2 text-sm font-medium ${
              tone === "gold"
                ? "border-[color:var(--gold)]/50 bg-background"
                : "border-border bg-background"
            }`}
          >
            {item}
          </span>
        </li>
      ))}
    </ol>
  );
}

function ProjectComparison() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_1.6fr]">
      <div className="rounded-3xl border border-dashed border-foreground/20 p-6 md:p-7">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Current approach
        </p>
        <p className="mt-2 font-display text-lg font-semibold tracking-tight">
          Generic project / capability labels
        </p>
        <p className="mt-5 text-xs text-muted-foreground">
          Examples from Al Baraa&apos;s current public project page:
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {CURRENT_PROJECT_LABELS.map((l) => (
            <li
              key={l}
              className="rounded-full border border-border bg-muted/50 px-3.5 py-1.5 text-sm font-medium"
            >
              {l}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          These labels describe the type of work. Each could also carry the sector, location, scope
          and evidence behind the project.
        </p>
      </div>
      <div className="rounded-3xl border border-[color:var(--gold)]/50 bg-[color:var(--gold)]/[0.05] p-6 md:p-7">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[color:var(--gold-deep)]">
          Authority opportunity
        </p>
        <p className="mt-2 font-display text-lg font-semibold tracking-tight">
          Each project becomes a connected piece of evidence
        </p>
        <div className="mt-6">
          <Chain
            tone="gold"
            items={[
              "Named project",
              "Sector",
              "Service / capability",
              "Location",
              "Project evidence",
              "Relevant expertise",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

const CAPABILITIES = [
  "Hospitality Fit-Out",
  "Restaurant / F&B Fit-Out",
  "Commercial Fit-Out",
  "Joinery",
  "Turnkey Interior Execution",
];
const MARKETS = ["Dubai", "Sharjah", "UAE"];
const BUYER_SEARCHES = [
  "hospitality fit-out company Dubai",
  "restaurant fit-out contractor Dubai",
  "joinery company Dubai",
  "commercial fit-out contractor UAE",
];

function IntentMatrix() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
      <div className="rounded-3xl border border-border bg-background p-6 md:p-7">
        <EvidenceBadge>Illustrative search opportunities</EvidenceBadge>
        <table className="mt-6 w-full border-collapse text-sm">
          <caption className="sr-only">
            Illustrative combinations of capability and location that could each support an
            intent-specific page. Not rankings or search volume.
          </caption>
          <thead>
            <tr>
              <th
                scope="col"
                className="pb-3 text-start text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted-foreground"
              >
                Capability
              </th>
              {MARKETS.map((m) => (
                <th
                  key={m}
                  scope="col"
                  className="w-14 pb-3 text-center text-[0.7rem] font-medium uppercase tracking-[0.12em] text-muted-foreground sm:w-20"
                >
                  {m}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CAPABILITIES.map((c) => (
              <tr key={c} className="border-t border-border">
                <th scope="row" className="py-3.5 pe-3 text-start font-medium">
                  {c}
                </th>
                {MARKETS.map((m) => (
                  <td key={m} className="py-3.5 text-center">
                    <span
                      aria-hidden
                      className="inline-block h-2.5 w-2.5 rounded-full border-[1.5px] border-[color:var(--gold)]"
                    />
                    <span className="sr-only">
                      Potential page: {c}, {m}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Illustrative buyer searches
        </p>
        <ul className="mt-4 space-y-3">
          {BUYER_SEARCHES.map((q) => (
            <li
              key={q}
              className="border-b border-border pb-3 font-display text-base tracking-tight md:text-lg"
            >
              <span className="text-[color:var(--gold-deep)]">“</span>
              {q}
              <span className="text-[color:var(--gold-deep)]">”</span>
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <IllustrativeNote>
            Examples illustrate commercial search intent and do not represent guaranteed ranking
            opportunities or reported search volume.
          </IllustrativeNote>
        </div>
      </div>
    </div>
  );
}

const ENTITY_LAYERS = ["Services", "Sectors", "Locations", "Projects", "People", "Evidence"];

function EntityHierarchy() {
  return (
    <figure className="rounded-3xl border border-border bg-muted/30 p-6 md:p-10">
      <div className="flex flex-col items-center">
        <span className="rounded-full bg-primary px-6 py-2.5 font-display text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground">
          Company
        </span>
        <span aria-hidden className="h-8 w-px bg-[color:var(--gold)] md:h-6" />
        <div className="relative w-full max-w-3xl">
          {/* Bus line from the first to the last column centre (desktop only) */}
          <span
            aria-hidden
            className="absolute inset-x-[8.333%] top-0 hidden h-px bg-[color:var(--gold)]/50 md:block"
          />
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 md:gap-2">
            {ENTITY_LAYERS.map((l) => (
              <li key={l} className="flex flex-col items-center">
                <span aria-hidden className="hidden h-5 w-px bg-[color:var(--gold)]/50 md:block" />
                <span className="w-full rounded-full border border-border bg-background px-3 py-2 text-center text-sm font-medium">
                  {l}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
        A clearer hierarchy makes each relationship explicit — which services apply to which
        sectors, in which locations, supported by which projects, people and evidence.
      </figcaption>
    </figure>
  );
}

/* ─────────────────────── AUTHORITY MAP ─────────────────────── */

const MAP_BRANCHES: AuthorityBranch[] = [
  {
    id: "expertise",
    label: "Expertise",
    icon: Hammer,
    leaves: [
      { label: "Fit-Out", status: "existing" },
      { label: "Joinery", status: "existing" },
      { label: "Interior Execution", status: "existing" },
      { label: "Turnkey Delivery", status: "existing" },
    ],
  },
  {
    id: "sectors",
    label: "Sectors",
    icon: Building2,
    leaves: [
      { label: "Hospitality", status: "existing" },
      { label: "F&B", status: "existing" },
      { label: "Commercial Interiors", status: "potential" },
    ],
  },
  {
    id: "locations",
    label: "Locations",
    icon: MapPin,
    leaves: [
      { label: "Dubai", status: "existing" },
      { label: "Sharjah", status: "existing" },
      { label: "UAE", status: "potential" },
    ],
  },
  {
    id: "projects",
    label: "Project evidence",
    icon: FolderKanban,
    leaves: [
      { label: "Named projects", status: "existing" },
      { label: "Case studies", status: "potential" },
      { label: "Project scope", status: "potential" },
      { label: "Images / outcomes", status: "potential" },
    ],
  },
  {
    id: "people",
    label: "People",
    icon: Users,
    leaves: [
      { label: "Project leadership", status: "potential" },
      { label: "Architects", status: "potential" },
      { label: "Technical expertise", status: "potential" },
    ],
  },
  {
    id: "trust",
    label: "Trust signals",
    icon: BadgeCheck,
    leaves: [
      { label: "Operating history", status: "existing" },
      { label: "In-house joinery workshop", status: "existing" },
      { label: "In-house metal workshop", status: "existing" },
      { label: "In-house aluminium workshop", status: "existing" },
      { label: "External references", status: "potential" },
    ],
  },
];

function AuthorityMapSection() {
  return (
    <section
      id="authority-map"
      className="section-pad scroll-mt-16 bg-[color:var(--ink)] text-white"
    >
      <div className="container-luxe">
        <ReviewSectionHeader tone="dark" eyebrow="Authority map" title="Al Baraa Authority Map">
          <p>
            How the business&apos;s expertise, sectors, locations, project evidence, people and
            trust signals could connect — and ultimately support search and AI discovery.
          </p>
        </ReviewSectionHeader>
        <Reveal>
          <div className="mt-14">
            <AuthorityMap
              center="Al Baraa"
              branches={MAP_BRANCHES}
              outcomes={["Search discovery", "AI discovery"]}
            />
          </div>
        </Reveal>
        <p className="mt-12 max-w-3xl text-xs leading-relaxed text-white/60">
          “Existing public signals” are limited to the signals referenced in this review. “Potential
          authority connections” mark where relationships could be made more explicit online — not
          that the underlying capability, people or information is absent. Select a branch to trace
          its connection.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────── SEARCH LANDSCAPE ─────────────────────── */

const COMMON_STRUCTURE = [
  "Restaurant Fit-Out",
  "Hospitality Fit-Out",
  "Approvals / MEP",
  "Joinery",
  "Project examples",
  "Dubai relevance",
];
const OPPORTUNITY_FORMULA = ["Core capability", "Sector", "Location", "Project proof", "Expertise"];

function SearchLandscape() {
  return (
    <section id="search" className="section-pad scroll-mt-16">
      <div className="container-luxe">
        <ReviewSectionHeader
          eyebrow="Search landscape"
          title="How the search landscape is structured"
        >
          <p>
            During OMSA&apos;s review, search results for selected commercial fit-out queries
            surfaced providers using highly specific landing-page structures around restaurant,
            hospitality and commercial fit-out services.
          </p>
          <p>
            This demonstrates a structural pattern worth considering: competitors can make
            individual commercial capabilities easier for search engines to retrieve by giving those
            capabilities dedicated, intent-specific pages.
          </p>
        </ReviewSectionHeader>
        <div className="mt-6">
          <EvidenceBadge>Point-in-time observation · October 2026</EvidenceBadge>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-muted/30 p-7 md:p-9">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Common search-oriented structure
              </p>
              <ul className="mt-6 space-y-2">
                {COMMON_STRUCTURE.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium"
                  >
                    <FileText aria-hidden className="h-4 w-4 shrink-0 text-muted-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Individual capabilities, each with a dedicated page.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl border border-[color:var(--gold)]/50 bg-[color:var(--gold)]/[0.05] p-7 md:p-9">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[color:var(--gold-deep)]">
                Opportunity for Al Baraa
              </p>
              <ol className="mt-6 flex flex-col items-start">
                {OPPORTUNITY_FORMULA.map((item, i) => (
                  <li key={item} className="flex flex-col items-start">
                    {i > 0 && (
                      <span
                        aria-hidden
                        className="ms-4 py-1 font-display text-lg leading-none text-[color:var(--gold-deep)]"
                      >
                        +
                      </span>
                    )}
                    <span className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                The same structural idea, built around the capabilities, sectors, locations and
                project proof Al Baraa can legitimately support.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="mt-6">
          <IllustrativeNote>
            No competitor is named and no search positions, traffic or lead volumes are implied.
            Search results vary by location, date, personalisation and query.
          </IllustrativeNote>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── AI DISCOVERY ─────────────────────── */

const BUYER_QUESTIONS = [
  "Which companies specialise in hospitality fit-outs in Dubai?",
  "Which UAE contractors have experience with high-end F&B interiors?",
  "Which fit-out companies offer in-house joinery capabilities?",
];

function AiDiscovery() {
  return (
    <section id="ai" className="section-pad scroll-mt-16 border-t border-border bg-muted/30">
      <div className="container-luxe">
        <ReviewSectionHeader eyebrow="AI discovery" title="The AI discovery opportunity">
          <p>AI discovery is not simply about adding “AI keywords”.</p>
          <p>
            Modern search and AI systems benefit from clear, corroborated relationships between a
            company, its expertise, people, locations, projects and external evidence.
          </p>
        </ReviewSectionHeader>

        <div className="mt-14">
          <EvidenceBadge>Illustrative buyer questions</EvidenceBadge>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {BUYER_QUESTIONS.map((q, i) => (
              <Reveal as="li" key={q} delay={i * 0.06}>
                <div className="flex items-baseline gap-5 py-7 md:gap-8">
                  <span
                    aria-hidden
                    className="w-6 shrink-0 font-display text-sm font-semibold text-[color:var(--gold-deep)]"
                  >
                    Q{i + 1}
                  </span>
                  <p className="font-display text-xl font-semibold leading-snug tracking-tight md:text-3xl">
                    “{q}”
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal>
          <p className="mt-12 max-w-3xl text-lg leading-relaxed md:text-xl">
            For Al Baraa, the opportunity is to strengthen the digital connections between the
            answers the business can legitimately support and the evidence available online.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            This review does not assess or make any claim about whether Al Baraa currently appears
            in any specific AI product or AI-generated answer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────── ADDITIONAL OBSERVATIONS ─────────────────── */

const ADDITIONAL = [
  "The current enquiry experience could be simplified.",
  "Service naming and presentation could be standardised.",
  "Trust and project evidence could be brought closer to conversion points.",
  "The digital experience could better reflect the calibre of the company’s real-world work.",
];

function AdditionalObservations() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container-luxe">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <p className="eyebrow">Secondary</p>
            <h2 className="mt-5 font-display text-2xl font-bold tracking-tight">
              Additional observations
            </h2>
          </div>
          <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {ADDITIONAL.map((o) => (
              <li
                key={o}
                className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <span aria-hidden className="mt-2 h-1 w-3 shrink-0 bg-[color:var(--gold)]" />
                {o}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── RECOMMENDATIONS ─────────────────────── */

const PRIORITIES = [
  {
    title: "Build a commercial authority architecture",
    desc: "Connect core services, sectors and locations through dedicated, high-intent pages.",
  },
  {
    title: "Turn projects into searchable evidence",
    desc: "Develop structured project case studies that connect project, location, sector, capability and expertise.",
  },
  {
    title: "Strengthen entity & AI readiness",
    desc: "Connect company information, people, services, locations, project evidence and third-party signals into a clearer authority footprint.",
  },
];

function Recommendations() {
  return (
    <section id="recommendations" className="section-pad scroll-mt-16 border-t border-border">
      <div className="container-luxe">
        <ReviewSectionHeader eyebrow="OMSA recommendation" title="What we would prioritise" />
        <ol className="mt-14 border-t border-border">
          {PRIORITIES.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 0.06}>
              <div className="grid gap-3 border-b border-border py-10 md:grid-cols-[8rem_1fr_1.2fr] md:items-baseline md:gap-10">
                <span className="font-display text-4xl font-bold text-gradient-gold md:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-bold uppercase leading-snug tracking-[0.04em] md:text-2xl">
                  {p.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

const OUTCOMES = [
  {
    icon: Search,
    title: "Commercial Search Eligibility",
    desc: "Clearer relevance for high-intent service and sector searches.",
  },
  {
    icon: FolderKanban,
    title: "Project-Led Authority",
    desc: "Use completed work as evidence rather than leaving project value fragmented.",
  },
  {
    icon: Waypoints,
    title: "Entity Understanding",
    desc: "Create clearer relationships between Al Baraa, its expertise, people and markets.",
  },
  {
    icon: Compass,
    title: "AI Discovery Readiness",
    desc: "Make legitimate expertise easier for AI/search systems to interpret and corroborate.",
  },
  {
    icon: Gem,
    title: "Digital Trust",
    desc: "Bring the online representation closer to the quality and history of the real-world business.",
  },
];

function Outcomes() {
  return (
    <section className="pb-24 lg:pb-32">
      <div className="container-luxe">
        <ReviewSectionHeader eyebrow="Potential outcomes" title="What this could improve" />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {OUTCOMES.map((o, i) => (
            <Reveal
              as="li"
              key={o.title}
              delay={i * 0.04}
              className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}
            >
              <OpportunityCard icon={o.icon} title={o.title}>
                {o.desc}
              </OpportunityCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─────────────────────── DISCLAIMER ─────────────────────── */

function Disclaimer() {
  return (
    <section aria-labelledby="about-review" className="pb-20 lg:pb-24">
      <div className="container-luxe">
        <div className="grid gap-6 rounded-3xl border border-border p-7 md:grid-cols-[14rem_1fr] md:gap-12 md:p-10">
          <h2
            id="about-review"
            className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground"
          >
            About this review
          </h2>
          <div className="max-w-3xl space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              This independent review was prepared by OMSA Digital &amp; AI Studio using publicly
              available information observed in October 2026.
            </p>
            <p>
              It does not use Al Baraa&apos;s private analytics, Search Console, advertising data,
              CRM data or internal business information.
            </p>
            <p>
              Search results and AI-generated responses can vary by location, date, personalisation,
              system and query. Any search examples shown in this review should therefore be
              interpreted as point-in-time observations rather than permanent ranking claims.
            </p>
            <p>
              This review is intended to identify potential digital opportunities, not to make
              claims about Al Baraa&apos;s internal performance or commercial results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── CTA ─────────────────────────── */

function ClosingCta() {
  return (
    <section className="pb-24 lg:pb-32">
      <div className="container-luxe">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[color:var(--ink)] to-black p-8 text-white sm:p-12 lg:p-20">
            <div
              aria-hidden
              className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[color:var(--gold)]/15 blur-3xl"
            />
            <div className="relative max-w-3xl">
              <p className="eyebrow !text-white/60">Al Baraa already has real-world experience.</p>
              <h2 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                The opportunity is making more of that authority{" "}
                <span className="text-gradient-gold">discoverable.</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                If useful, OMSA can turn this review into a practical Search &amp; AI Authority
                roadmap covering site architecture, project authority, entity signals and commercial
                search opportunities.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={CONTACT_HREF}
                  onClick={() =>
                    track("cta_click", { location: "review:al-baraa", label: "discuss-review" })
                  }
                  className="btn-gold"
                >
                  Discuss This Review <ArrowRight aria-hidden className="h-4 w-4" />
                </a>
                <a
                  href="/"
                  onClick={() =>
                    track("cta_click", { location: "review:al-baraa", label: "visit-omsa" })
                  }
                  className="btn-ghost-luxe !border-white/20 !text-white"
                >
                  Visit OMSA <ArrowUpRight aria-hidden className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────── SIGNATURE ─────────────────────── */

const DISCIPLINES = [
  "Digital Strategy",
  "Technical SEO",
  "Semantic SEO",
  "Entity Authority",
  "AEO / GEO",
  "AI Search Visibility",
];

function Signature() {
  return (
    <footer className="bg-[color:var(--ink)] text-white">
      <div className="container-luxe py-16 md:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">
              Prepared independently by
            </p>
            <a
              href="/"
              className="mt-4 inline-block font-display text-2xl font-bold tracking-tight md:text-3xl"
            >
              OMSA<span className="text-gradient-gold"> Digital &amp; AI Studio</span>
            </a>
            <ul className="mt-6 flex max-w-xl flex-wrap gap-x-4 gap-y-2 text-sm text-white/65">
              {DISCIPLINES.map((d) => (
                <li key={d} className="flex items-center gap-2">
                  <span aria-hidden className="h-1 w-1 rounded-full bg-[color:var(--gold)]" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
            Oman{" "}
            <span aria-hidden className="text-[color:var(--gold)]">
              →
            </span>
            <span className="sr-only">to</span> UAE{" "}
            <span aria-hidden className="text-[color:var(--gold)]">
              →
            </span>
            <span className="sr-only">to</span> GCC
          </p>
        </div>
        <p className="mt-12 border-t border-white/10 pt-6 text-xs text-white/60">
          © OMSA Digital &amp; AI Studio · Private review prepared for Al Baraa Building Contracting
        </p>
      </div>
    </footer>
  );
}
