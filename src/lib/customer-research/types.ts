// Data model for private customer-discovery research (/review/*-customer-intelligence).
//
// One ResearchProgram (e.g. Tansiq) holds many segments; each segment holds
// its own prospects and product opportunities. Adding Segment 02 is a new
// segment file appended to the program — the page and components are shared.
//
// Evidence discipline: `verified` is what was publicly observed; every other
// prospect field is OMSA's interpretation and must be worded as such.

export type CountryCode = "om" | "ae" | "qa" | "sa";

export type Priority =
  | "very-high"
  | "high"
  | "medium-high"
  /** High fit but larger / slower to buy, e.g. a 25-location chain. */
  | "high-strategic"
  /** Very high product opportunity, low early-sales accessibility. */
  | "strategic-stretch"
  /** Sales waves (Segment 04): sequencing, not a quality judgement. */
  | "wave-1"
  | "wave-2"
  | "wave-3"
  /** ICP tiers (Segment 05): fit to the segment definition, not a ranking. */
  | "icp-primary"
  | "icp-secondary"
  /** Commercial classification (Segment 05). */
  | "early-pilot"
  | "commercial";

/** Evidence discipline labels (Segment 04). */
export type EvidenceStatus = "verified" | "attributed" | "inferred" | "hypothesis" | "unresolved";

/** Confidence labels for research conclusions (Segment 05). */
export type ConfidenceStatus = "supported" | "inferred" | "hypothesis" | "unknown";

/** Inline copy with optional emphasis, so data files stay free of JSX. */
export type RichText = Array<string | { strong: string }>;

export type ProspectContact =
  | {
      kind: "phone";
      /** Display form exactly as researched, e.g. "+968 9718 5621". */
      number: string;
      /** Optional channel/branch label, e.g. "WhatsApp" or "Al Khoud". */
      label?: string;
    }
  | {
      kind: "email";
      address: string;
      /** Optional role / person label, e.g. "Sales" or a named public leadership contact. */
      label?: string;
    }
  | {
      kind: "website";
      /** No verified phone: point to the official website's contact channel. */ note: string;
    };

export interface Prospect {
  /** Stable id, unique within the segment. */
  id: string;
  name: string;
  country: CountryCode;
  /** Official company website only. Omitted when no official site was verified — never guessed. */
  website?: string;
  /** Additional official pages worth linking, e.g. a dedicated treatment funnel. */
  links?: { label: string; url: string }[];
  /** One contact, or several (per branch / channel). */
  contact: ProspectContact | ProspectContact[];
  /** What kind of contact the best verified route is, e.g. "Sales / B2B". */
  contactType?: string;
  /** Publicly observed evidence (official site, services, portfolio, case studies). */
  verified: string[];
  /** Status-labelled evidence items, when the research distinguishes verified / attributed / inferred. */
  evidence?: { status: EvidenceStatus; text: string; source?: string }[];
  /** Opportunity inferred from the evidence — a hypothesis, not a confirmed internal problem. */
  opportunity?: string;
  /** Recommended Tansiq solution, e.g. "Marketing Memory + Decision Intelligence". */
  solution: string;
  /** Optional vertical feature idea that emerged from this prospect. */
  featureOpportunity?: string;
  /** Omitted when the research did not supply one — never invented. */
  whyBuy?: string;
  /** Omitted when the research did not supply one — never invented. */
  outreachAngle?: string;
  /** Recommended first pilot (a recommendation, not evidence). */
  firstPilot?: string;
  /** Short research notes: evidence caveats, sourcing, sales-accessibility remarks. */
  researchNotes?: string[];
  /** Research-record flags, e.g. "Verification required" or "Qualified replacement". */
  flags?: string[];
  /** Research role, only where the research assigns one (e.g. "Strategic Validation"). */
  role?: string;
  /** The question a pilot with this business would test. */
  pilotQuestion?: string;
  /** Candidate metric concept named by the research, e.g. "Qualified Intent Rate". */
  metricConcept?: string;
  /** Pilot families this business is an example case for. */
  pilotFamilies?: string[];
  /** Product-learning focus — kept separate from sales priority. */
  learningFocus?: string;
  /** Labelled qualitative attributes, e.g. Customer potential → "Very High". */
  attributes?: { label: string; value: string }[];
  /** Source references for the record. */
  sources?: { label: string; url: string }[];
  /**
   * Primary score out of 10. Its meaning comes from `Segment.scoring`
   * (default: overall fit; Segment 03: early-sales score).
   */
  fitScore?: number;
  /** Optional second score out of 10, see `Segment.scoring.secondary`. */
  secondaryScore?: number;
  priority: Priority;
}

export interface Capability {
  title: string;
  body: string;
}

export interface ProductOpportunity {
  number: string;
  title: string;
  description: string;
  /** Optional list shown under the description (e.g. memory contents, input signals). */
  items?: string[];
  itemsLabel?: string;
  /** Render items as a chain: true or "+" for combined signals, "→" for a journey, "×" for dimensions. */
  chain?: boolean | "+" | "→" | "×";
  /** Example questions the capability would answer. */
  questions?: string[];
  /** Maturity label, e.g. "Potential future feature". */
  tag?: string;
  /** Integration / privacy caveat shown under the card body. */
  note?: string;
  commercialValue?: string;
}

export interface Methodology {
  evidence: { title: string; body: string };
  hypothesis: { title: string; body: string };
  /** Public sources the evidence was drawn from. */
  evidenceSources?: string[];
  useWording: string[];
  avoidWording: string[];
  /** Internal data the research does not claim access to. */
  noAccessClaims?: string[];
  /** Score definitions, when a segment uses more than one score. */
  scores?: { name: string; measures: string[] }[];
  /** Section heading (default "How to read each prospect"). */
  title?: string;
  /** Labelled evidence levels, e.g. Verified / Attributed / Inferred / Hypothesis / Unresolved. */
  levels?: { label: string; body: string }[];
  /** Short closing note, e.g. on healthcare-data handling. */
  note?: string;
}

/** One piece of content inside a research block. */
export type BlockContent =
  | { kind: "flow"; label?: string; steps: string[]; loopBack?: string }
  | {
      kind: "columns";
      columns: {
        label?: string;
        title: string;
        body?: string;
        items?: string[];
        /** Optional heading for `items`. */
        itemsLabel?: string;
        /** Labelled rows inside the card, e.g. "Core question" → "…". */
        fields?: { term: string; detail: string }[];
        status?: ConfidenceStatus;
        tone?: "positive" | "negative" | "neutral" | "accent";
      }[];
    }
  | { kind: "stack"; layers: { title: string; items: string[] }[]; loopBack?: string }
  | { kind: "ladder"; levels: { label: string; title: string; detail: string }[] }
  | {
      kind: "list";
      label?: string;
      items: string[];
      ordered?: boolean;
      /** Render as a chain joined by "+" (combination) or "≠" (non-equivalence). */
      joiner?: "+" | "≠";
    }
  | {
      kind: "cycle";
      label?: string;
      steps: string[];
      /** Indexes of steps after which a potential loss point is marked. */
      lossAfter?: number[];
      lossLabel?: string;
      loopBack?: string;
    }
  | {
      kind: "matrix";
      /** Row labels, shared by every column. */
      rows: string[];
      columns: { label: string; title: string; status?: ConfidenceStatus; cells: string[] }[];
    }
  | { kind: "quotes"; items: string[] }
  | { kind: "pairs"; label?: string; items: { term: string; detail: string }[] }
  | { kind: "sources"; label?: string; items: { label: string; url: string }[] };

/**
 * A generic research section (Segment 04): thesis, ICP, patterns, roadmap…
 * Segments without `blocks` render none, so earlier segments are unaffected.
 */
export interface ResearchBlock {
  /** Anchor id. */
  id: string;
  /** Where it renders: before the methodology, or after the prospect database. */
  placement: "before" | "after";
  eyebrow: string;
  title: string;
  intro?: string;
  /** Status label, e.g. "Proposed direction — not current capability". */
  tag?: string;
  /** Confidence of the section's main conclusion, shown as a labelled chip. */
  status?: ConfidenceStatus;
  tone?: "light" | "muted" | "dark";
  /** Wrap the content in an expandable panel (progressive disclosure). */
  collapsible?: boolean;
  content: BlockContent[];
  note?: string;
}

export interface Segment {
  /** URL key, e.g. "01". */
  id: string;
  number: string;
  name: string;
  /** Customer potential, 0–100. Omitted when not yet scored — never estimated. */
  potential?: number;
  /** Optional segment score out of 10. */
  score?: number;
  /** Current comparative status, e.g. "Strong Top-5 Candidate". Not a final rank. */
  status?: string;
  /**
   * How prospect scores are labelled. Default: one "Fit" score.
   * `secondary` names a second, separately displayed score.
   */
  scoring?: { primary: string; primaryShort: string; secondary?: string };
  /** Label for the prospect's `solution` field (default "Recommended Tansiq solution"). */
  solutionLabel?: string;
  /** Current Tansiq capability relevant to every prospect in this segment. */
  currentCapability?: string;
  /** Prospect-database presentation options. */
  view?: {
    /** Hide the numeric score column and filter (no scores in the research). */
    hideScore?: boolean;
    /** Column header for `priority`, e.g. "Sales wave". */
    priorityLabel?: string;
    /** The priority toggle filter, e.g. { label: "Wave 1", values: ["wave-1"] }. */
    priorityFilter?: { label: string; values: Priority[] };
    /** Replaces the default intro above the prospect database. */
    prospectsIntro?: string;
    /** Column header for `solution` (default "Core opportunity"). */
    solutionColumn?: string;
    /** Card label for `opportunity` (default "Observed opportunity · research hypothesis"). */
    opportunityLabel?: string;
    /** Card label for `pilotQuestion` (default "Pilot question · to validate"). */
    pilotQuestionLabel?: string;
    /** Extra toggle filter on an attribute, e.g. { label: "Primary ICP", attribute: "ICP", value: "Primary" }. */
    attributeFilter?: { label: string; attribute: string; value: string };
  };
  /** Replaces the potential meter in the hero and conclusion, e.g. Research: Ready. */
  statusList?: { label: string; value: string }[];
  /** Replaces the hero's "N researched prospects · markets" line. */
  heroMeta?: string;
  /** Replaces the hero's "View prospect database" link. */
  heroCta?: { href: string; label: string };
  /** Header jump links; defaults to Segment / Opportunities / Method / Prospects / Conclusion. */
  nav?: { href: string; label: string }[];
  /** Generic research sections. */
  blocks?: ResearchBlock[];
  /** Hero copy paragraphs. */
  summary: string[];
  why?: {
    title: string;
    /** Optional lead-in shown before the journey, e.g. "Their patient journey commonly follows:". */
    lead?: string;
    /** Optional journey rendered as a step flow. */
    journey?: string[];
    intro: string;
    items: string[];
    closing: string;
  };
  /** Ideal customer profile within the segment. */
  profile?: {
    title: string;
    intro: string;
    items: string[];
    note?: string;
  };
  capabilities?: {
    title: string;
    items: Capability[];
    caveat: string;
  };
  /** Primary positioning with its journey, e.g. Patient Revenue Intelligence. */
  coreOpportunity?: {
    eyebrow: string;
    title: string;
    journey: string[];
    intro: string;
    outcomes: string[];
    closing: string;
    /** Integration caveat — what this would require before it is real. */
    caveat: string;
  };
  /** Commercial rationale: why the segment may pay. */
  rationale?: {
    title: string;
    intro: string;
    transaction: string[];
    servicesIntro: string;
    services: string[];
    weakProposition: string;
    strongProposition: string;
  };
  /** Pilot strategy: how a first sale can start small. */
  pilot?: {
    title: string;
    intro: string;
    items: string[];
    loop: string[];
    closing: string;
  };
  /** Product positioning: what Tansiq is not, and the proposed differentiation. */
  positioning?: {
    title: string;
    notIntro: string;
    notItems: string[];
    statement: string[];
  };
  /** Segment-specific methodology; falls back to the program's. */
  methodology?: Methodology;
  productOpportunities?: {
    title: string;
    label: string;
    items: ProductOpportunity[];
  };
  conclusion: {
    title: string;
    paragraphs: RichText[];
    /** Optional loop rendered as a step flow under the paragraphs. */
    loop?: string[];
    /** Note under the score explaining the status is not a final rank. */
    statusNote: string;
    /** What the research does not validate (shown under the synthesis). */
    unvalidated?: { title: string; items: string[] };
    /** Closing decision gate: a question and the action for each answer. */
    gate?: { question: string; options: { label: string; body: string }[] };
  };
  prospects: Prospect[];
}

export interface ResearchProgram {
  client: string;
  title: string;
  path: string;
  /** Month the research page was prepared, for the signature strip. */
  prepared: string;
  markets: CountryCode[];
  methodology: Methodology;
  segments: Segment[];
}
