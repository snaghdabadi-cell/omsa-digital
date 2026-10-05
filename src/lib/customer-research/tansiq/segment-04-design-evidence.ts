import type { Prospect, Segment } from "../types";

// Segment 04 — Design, Architecture & Evidence Intelligence.
//
// A product-discovery segment: the 20 businesses are a research portfolio for
// pattern discovery and product-hypothesis generation, not a ranked lead list.
//
// LOCKED RESEARCH DATA. Theses, pilot questions, waves, pilot families,
// learning priorities and flags come from the research brief.
//
// Deliberately NOT filled in:
//   - Websites, contacts and verified facts for 19 of 20 businesses. The stored
//     research holds prospect-level facts for DAH Design only (dah-design.com,
//     checked 4 October 2026). Generic names (ALIGN, Nexus, Interno, ONE A,
//     Alcove…) are not looked up by guesswork.
//   - Numeric scores of any kind, a 1–20 ranking, outreach angles, company size.
//   - Research roles, except where the brief assigns one (ONE A, Nebras Aljoaib).
//
// Everything about the intelligence model, claim permission, signal hierarchy,
// metrics and roadmap is a PROPOSED direction — never current Tansiq capability.

const NOT_VERIFIED_CONTACT = {
  kind: "website",
  note: "Official contact details not verified in stored research.",
} as const;

const prospect = (p: Omit<Prospect, "verified" | "contact"> & Partial<Prospect>): Prospect => ({
  verified: [],
  contact: NOT_VERIFIED_CONTACT,
  ...p,
});

export const SEGMENT_04_DESIGN_EVIDENCE: Segment = {
  id: "04",
  number: "04",
  name: "Design, Architecture & Evidence Intelligence",
  status: "Research & Strategy Ready · Market Validation Pending",
  solutionLabel: "Research thesis · hypothesis",
  view: {
    hideScore: true,
    priorityLabel: "Sales wave",
    solutionColumn: "Research thesis",
    priorityFilter: { label: "Wave 1", values: ["wave-1"] },
    prospectsIntro:
      "A research portfolio for pattern discovery and product-hypothesis generation — not a ranked lead list. Sales waves and product-learning value are shown separately, and no numeric scores were assigned.",
  },
  nav: [
    { href: "#thesis", label: "Thesis" },
    { href: "#method", label: "Method" },
    { href: "#prospects", label: "Prospects" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#conclusion", label: "Conclusion" },
  ],
  summary: [
    "Tansiq's strongest opportunity is not simply helping GCC businesses create more AI content. It is helping them connect business goals, relevant buyers, verified evidence and commercial outcomes so they can learn what to test next — and why.",
    "This segment is a product-discovery study as much as a prospect list: 20 businesses in the design and architecture space, used to investigate where Tansiq could create value beyond generic AI content generation. Findings are research hypotheses, not validated product claims.",
  ],
  blocks: [
    /* ───────── before the methodology ───────── */
    {
      id: "thesis",
      placement: "before",
      eyebrow: "Research thesis",
      title: "AI generation should not be the first step",
      tag: "Research-backed proposed product direction — not current capability",
      tone: "light",
      content: [
        {
          kind: "flow",
          label: "Current execution model",
          steps: ["Brand", "Create", "Publish", "Measure"],
        },
        {
          kind: "flow",
          label: "Proposed evolution",
          steps: [
            "Objective",
            "Buyer",
            "Evidence",
            "Create",
            "Publish",
            "Commercial Signal",
            "Learn",
            "Recommend",
          ],
        },
        {
          kind: "flow",
          label: "Proposed intelligence sequence",
          steps: [
            "Business Objective",
            "Buyer",
            "Need",
            "Relevant Offer",
            "Verified Evidence",
            "Claim Permission",
            "AI Message",
            "Channel + CTA",
            "Commercial Signal",
            "Outcome",
            "Learning",
            "Next Test / Recommendation",
            "Human Decision",
          ],
        },
      ],
      note: "Framed as an extension of Tansiq's existing marketing execution foundation — not a judgement that the current product is inadequate.",
    },
    {
      id: "research-method",
      placement: "before",
      eyebrow: "Research method",
      title: "Pattern discovery, not market sizing",
      tone: "muted",
      content: [
        {
          kind: "pairs",
          items: [
            { term: "Scope", detail: "4 GCC markets · 20 businesses · 5 per country." },
            {
              term: "Objective",
              detail:
                "Pattern discovery + product hypothesis generation — not statistical market sizing. The 20 businesses do not statistically represent GCC SMEs.",
            },
            {
              term: "Accessibility",
              detail:
                "Intentionally part of the logic: a theoretically perfect company Tansiq cannot realistically reach may be less useful for early validation than a slightly smaller but accessible business.",
            },
          ],
        },
        {
          kind: "list",
          label: "Selection logic",
          items: [
            "Reachable decision maker",
            "SME / founder-led or closely managed structure",
            "Existing commercial proof",
            "Observable marketing presence",
            "Clear service / product offering",
            "Measurable or potentially measurable customer journey",
            "Enough maturity to test marketing intelligence",
            "Not excessively enterprise-complex for an early pilot",
          ],
        },
      ],
    },
    {
      id: "icp",
      placement: "before",
      eyebrow: "Ideal customer profile",
      title:
        "Not too early to have evidence. Not too complex to require enterprise infrastructure.",
      intro:
        "The strongest early-customer profile identified by the research: an accessible GCC business with real commercial proof, a specific growth objective, an existing marketing presence and enough outcome visibility for Tansiq to learn what is working.",
      tone: "light",
      content: [
        {
          kind: "columns",
          columns: [
            {
              label: "ICP",
              title: "Important dimensions",
              tone: "positive",
              items: [
                "Commercial objective clarity",
                "Evidence strength",
                "Decision-maker accessibility",
                "Existing marketing activity",
                "Outcome visibility",
                "Organizational complexity",
                "Execution capacity",
              ],
            },
            {
              label: "Anti-ICP",
              title: "Lower fit for early validation",
              tone: "negative",
              items: [
                "No meaningful commercial proof",
                "Unclear / unvalidated offer",
                "Only wants viral / follower growth",
                "Enterprise-level integration / procurement complexity",
                "No willingness to label or communicate outcomes",
                "No growth priority",
                "Extremely low execution capacity",
              ],
            },
          ],
        },
      ],
      note: "Anti-ICP patterns mean lower fit for early validation — not permanently unsuitable. The ICP is not simply “GCC SMEs” or “interior design companies”: design businesses are the research environment, not necessarily the long-term vertical boundary.",
    },
    {
      id: "readiness",
      placement: "before",
      eyebrow: "Proposed qualification concept",
      title: "Marketing Intelligence Readiness",
      tag: "Proposed framework — not an existing Tansiq score",
      tone: "muted",
      content: [
        {
          kind: "list",
          ordered: true,
          items: [
            "Do they know what they want to grow?",
            "Do they know who they want more of?",
            "Do they have evidence of what they do well?",
            "Can they identify meaningful enquiries / outcomes?",
            "Can someone tell us whether an outcome was valuable?",
          ],
        },
        {
          kind: "list",
          label: "Proposed qualification framework — dimensions, not prospect scores",
          items: [
            "Commercial Objective",
            "Evidence",
            "Decision-maker Access",
            "Marketing Activity",
            "Outcome Visibility",
            "Organizational Complexity",
          ],
        },
      ],
      note: "No prospect-level scores exist in the stored research, so none are assigned.",
    },

    /* ───────── after the prospect database ───────── */
    {
      id: "patterns",
      placement: "after",
      eyebrow: "Cross-market patterns",
      title: "What repeated across the four markets",
      intro: "Patterns identified across the research portfolio — not causal proof.",
      tone: "light",
      content: [
        {
          kind: "columns",
          columns: [
            {
              label: "Core",
              title: "High-confidence research patterns",
              tone: "accent",
              items: [
                "Business Objective should precede generation",
                "Buyer and Buyer Need are different objects",
                "Offer selection should precede message generation",
                "Evidence selection matters",
                "Evidence ownership / entity attribution matters",
                "Claim permission matters",
                "Content quality is not the same as commercial quality",
                "Outcomes must be business-defined",
                "Learning is more valuable than reporting alone",
                "Recommendations should be explainable",
                "SME data will often be small-N",
                "Human feedback itself can become useful business context",
                "Founder-led structures can be advantageous for early validation",
              ],
            },
            {
              label: "Selective",
              title: "Promising — validate selectively",
              tone: "neutral",
              items: [
                "Buyer-stage intelligence",
                "Offline conversion journeys",
                "Technical evidence intelligence",
                "Commission-fit optimisation",
                "Multi-market capability selection",
              ],
            },
            {
              label: "Exploratory",
              title: "Not roadmap commitments",
              tone: "negative",
              items: [
                "Creative IP commercialisation engine",
                "Predictive revenue intelligence",
                "Autonomous strategy",
                "Automatic entity resolution",
                "Automatic contradiction resolution",
                "Advanced multi-touch attribution",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "evidence-intelligence",
      placement: "after",
      eyebrow: "Evidence intelligence · proposed",
      title: "Evidence truth alone is not enough",
      intro:
        "Proposed claim-permission levels: whether something is true and whether it may be said publicly are different questions.",
      tag: "Proposed product/research framework — Tansiq does not currently implement P1–P5",
      tone: "muted",
      content: [
        {
          kind: "ladder",
          levels: [
            { label: "P1", title: "Direct claim allowed", detail: "Strong direct evidence." },
            { label: "P2", title: "Attributed claim only", detail: "Must remain attributed." },
            {
              label: "P3",
              title: "Person attribution only",
              detail: "Founder / team experience must not become company history.",
            },
            {
              label: "P4",
              title: "Internal hypothesis only",
              detail: "Useful for strategy / research but not public marketing copy.",
            },
            {
              label: "P5",
              title: "Blocked / conflict",
              detail: "Conflicting, unresolved or insufficient evidence.",
            },
          ],
        },
        {
          kind: "quotes",
          items: [
            "“Founder has 15 years of experience” does not automatically mean “Company has 15 years of experience.”",
          ],
        },
        {
          kind: "list",
          ordered: true,
          label: "Context completeness — for important evidence, ask",
          items: [
            "Is it supported?",
            "Who does it belong to?",
            "Would removing the context materially change its meaning?",
          ],
        },
      ],
    },
    {
      id: "provenance",
      placement: "after",
      eyebrow: "Data provenance · proposed",
      title: "Not all data should be treated equally",
      tag: "Proposed model — the lifecycle below is not claimed to exist in production",
      tone: "muted",
      collapsible: true,
      content: [
        {
          kind: "columns",
          columns: [
            { label: "USER", title: "Provided / confirmed by the business", tone: "accent" },
            { label: "OWNED", title: "Extracted from the business's owned channels" },
            { label: "EXTERNAL", title: "Third-party evidence" },
            { label: "INFERRED", title: "AI / research inference", tone: "negative" },
          ],
        },
        {
          kind: "columns",
          columns: [
            { label: "FACT", title: "Supported evidence", tone: "positive" },
            { label: "HYPOTHESIS", title: "Needs validation", tone: "neutral" },
          ],
        },
        {
          kind: "flow",
          label: "Proposed learning lifecycle",
          steps: [
            "Detected",
            "Verified",
            "Used",
            "Tested",
            "Supported / Rejected / Inconclusive",
            "Learned",
          ],
        },
      ],
    },
    {
      id: "model",
      placement: "after",
      eyebrow: "Proposed Tansiq intelligence model",
      title: "From context to learning — with humans in control",
      tag: "Proposed direction — not current product capability",
      tone: "dark",
      content: [
        {
          kind: "stack",
          layers: [
            { title: "Context layer", items: ["Objective", "Buyer", "Need", "Offer"] },
            {
              title: "Evidence layer",
              items: [
                "Projects",
                "Expertise",
                "Products",
                "Proof",
                "Entity attribution",
                "Permission",
              ],
            },
            {
              title: "Execution layer",
              items: ["Message", "Creative", "Channel", "CTA", "Schedule"],
            },
            {
              title: "Signal layer",
              items: ["Exposure", "Engagement", "Intent", "Enquiry", "Qualification", "Outcome"],
            },
            {
              title: "Intelligence layer",
              items: ["Pattern", "Confidence", "Recommendation", "Next Test"],
            },
            { title: "Human control", items: ["Approve", "Modify", "Reject", "Correct"] },
          ],
          loopBack: "Back to Context",
        },
        {
          kind: "quotes",
          items: [
            "The intelligence comes from the relationships between objective, buyer, offer, evidence and outcome — not from any one object alone.",
          ],
        },
      ],
    },
    {
      id: "signals",
      placement: "after",
      eyebrow: "Commercial signal hierarchy",
      title: "Beyond engagement-only measurement",
      tag: "Proposed measurement model — Tansiq is not claimed to track all six levels",
      tone: "light",
      content: [
        {
          kind: "ladder",
          levels: [
            { label: "L0", title: "Exposure", detail: "Impressions / Reach" },
            { label: "L1", title: "Engagement", detail: "Likes / Saves / Comments / Shares" },
            {
              label: "L2",
              title: "Intent",
              detail: "Profile visit / Website visit / CTA / Message",
            },
            {
              label: "L3",
              title: "Commercial response",
              detail: "Enquiry / Booking request / Consultation / Showroom intent",
            },
            {
              label: "L4",
              title: "Qualified opportunity",
              detail: "Right buyer / project / budget / market / timing",
            },
            {
              label: "L5",
              title: "Business outcome",
              detail: "Proposal / Sale / Won project / Revenue",
            },
          ],
        },
        {
          kind: "pairs",
          label: "Candidate early metric — a proposed pilot metric, not an official KPI",
          items: [
            {
              term: "Qualified Outcome Rate",
              detail:
                "The proportion of trackable responses that match the valuable outcome defined by the business.",
            },
          ],
        },
        {
          kind: "list",
          label: "Supporting measurement concepts (proposed)",
          items: [
            "Objective Alignment",
            "Qualified Response Rate",
            "Proposal / Booking / Consultation Progression",
            "Recommendation Adoption",
            "Learning Velocity",
          ],
        },
      ],
    },
    {
      id: "recommendations",
      placement: "after",
      eyebrow: "Explainable recommendations · proposed",
      title: "Observation → Interpretation → Confidence → Recommendation → Next test",
      tag: "Proposed format and controls — not claimed to exist in the current product",
      tone: "muted",
      collapsible: true,
      content: [
        {
          kind: "pairs",
          label: "Proposed recommendation structure — with an illustrative example",
          items: [
            {
              term: "Observation",
              detail:
                "What happened? e.g. 3 of the last 4 qualified opportunities followed hospitality-focused content.",
            },
            {
              term: "Interpretation",
              detail:
                "What might it mean? e.g. Hospitality evidence may currently align better with the desired project mix.",
            },
            {
              term: "Confidence",
              detail: "How strong is the evidence? e.g. Moderate — small sample.",
            },
            {
              term: "Recommendation",
              detail:
                "What should be considered next? e.g. Continue testing hospitality-focused content.",
            },
            {
              term: "Next test",
              detail:
                "How should the hypothesis be tested? e.g. Compare final imagery against process / execution evidence.",
            },
          ],
        },
        {
          kind: "list",
          label: "Proposed human-control checkpoints",
          items: [
            "Objective approval",
            "Evidence approval",
            "Claim approval where necessary",
            "Recommendation decision",
            "Outcome qualification",
          ],
        },
        {
          kind: "quotes",
          items: ["AI recommends. Evidence grounds. Outcomes teach. Humans remain in control."],
        },
        {
          kind: "list",
          label: "Recommended AI stop conditions — stop, ask or flag when",
          items: [
            "The business objective is unknown",
            "Evidence conflicts",
            "Entity ownership is ambiguous",
            "A performance claim lacks support",
            "Data is insufficient for a meaningful recommendation",
            "The recommendation would create a major strategic / business consequence",
          ],
        },
      ],
      note: "The example is illustrative, not a statistically supported finding.",
    },
    {
      id: "roadmap",
      placement: "after",
      eyebrow: "Product opportunity",
      title: "What to build now — and what not yet",
      tag: "Proposed sequencing — not a committed roadmap",
      tone: "light",
      content: [
        {
          kind: "columns",
          columns: [
            {
              label: "Now",
              title: "Foundation",
              tone: "accent",
              items: [
                "Active Objective",
                "Priority Buyer",
                "Priority Offer",
                "Business-defined Outcome",
                "Lightweight Evidence Library",
                "Evidence approval / permission",
                "Campaign identity / tagging",
                "Manual outcome labeling",
              ],
            },
            {
              label: "Next",
              title: "Validate",
              tone: "positive",
              items: [
                "Experiment comparison",
                "Learning history",
                "Explainable recommendations",
                "Recommendation feedback",
              ],
            },
            {
              label: "Later",
              title: "If validated",
              tone: "neutral",
              items: [
                "Evidence graph",
                "CRM integrations",
                "Richer attribution",
                "Cross-market intelligence",
              ],
            },
            {
              label: "Not yet",
              title: "Deliberately excluded",
              tone: "negative",
              items: [
                "Autonomous strategy",
                "Predictive revenue",
                "Full CRM",
                "Complex AI lead scoring",
                "Advanced multi-touch attribution",
                "Automatic contradiction resolution",
              ],
            },
          ],
        },
        {
          kind: "quotes",
          items: [
            "Do not automate what we have not yet learned how customers decide.",
            "Earn the right to automate.",
          ],
        },
        {
          kind: "list",
          ordered: true,
          label: "Recommended sequence",
          items: [
            "Validate the data",
            "Validate the learning",
            "Validate the recommendation",
            "Only then automate",
          ],
        },
      ],
      note: "Recommendation generation may initially be human-assisted during pilots.",
    },
    {
      id: "pilots",
      placement: "after",
      eyebrow: "Pilot strategy",
      title: "Five pilot families",
      tone: "muted",
      content: [
        {
          kind: "columns",
          columns: [
            {
              label: "Qualified Intent Pilot",
              title: "Which marketing themes attract better-fit opportunities?",
              body: "Example cases: Studio Echelle, Anne Design House, Shai Designs.",
            },
            {
              label: "Evidence Selection Pilot",
              title: "Which proof type generates stronger commercial response?",
              body: "Example cases: BIVA, OTILÌA, Studio Twelve.",
            },
            {
              label: "Offer Fit Pilot",
              title:
                "Which service / capability should be foregrounded for a specific buyer / objective?",
              body: "Example cases: RAZ Group, Nexus, ONE A.",
            },
            {
              label: "Commercial Journey Pilot",
              title: "Can marketing activity be connected to meaningful downstream outcomes?",
              body: "Example cases: Anne Design House, Muscat Collections.",
            },
            {
              label: "Learning Loop Pilot",
              title: "Can Tansiq turn outcome feedback into a useful next experiment?",
              body: "Use the strongest 3–5 pilot accounts.",
            },
          ],
        },
        {
          kind: "list",
          ordered: true,
          label: "Early pilot success tests whether",
          items: [
            "The business can define a meaningful objective",
            "Evidence structure is useful",
            "The business will label outcomes",
            "Tansiq can surface an understandable pattern",
            "The recommendation is perceived as useful",
            "The business acts on the recommendation",
            "The next test produces additional learning",
          ],
        },
      ],
      note: "Success is not defined as “AI generated good captions.”",
    },
    {
      id: "waves",
      placement: "after",
      eyebrow: "Sales priority waves",
      title: "Who to test with first",
      intro: "Sequencing for validation — not a mathematical ranking.",
      tone: "light",
      content: [
        {
          kind: "columns",
          columns: [
            {
              label: "Wave 1",
              title: "Early pilot candidates",
              tone: "accent",
              items: [
                "Studio Echelle",
                "Anne Design House",
                "RAZ Group",
                "ALIGN",
                "DAH Design",
                "Nexus",
                "Shai Designs",
                "Muscat Collections",
              ],
            },
            {
              label: "Wave 2",
              title: "Follow-on validation",
              tone: "neutral",
              items: [
                "OTILÌA",
                "BIVA",
                "Studio Twelve",
                "Alcove",
                "Roaa Zaki Design Studio",
                "Interno — only after verification",
              ],
            },
            {
              label: "Wave 3",
              title: "Strategic stress tests",
              tone: "neutral",
              items: ["ZuriSpace", "MoodbyTEAL", "ONE A", "Conmarble", "SMAD", "Nebras Aljoaib"],
            },
          ],
        },
      ],
      note: "Wave 3 does not mean poor business quality — it means higher validation complexity or more strategic / research-oriented use.",
    },
    {
      id: "learning",
      placement: "after",
      eyebrow: "Product-learning priority",
      title: "What each case could teach",
      intro:
        "Kept separate from the sales waves: high learning value does not imply early sales priority.",
      tone: "muted",
      content: [
        {
          kind: "pairs",
          items: [
            { term: "Studio Echelle", detail: "Qualified intent" },
            { term: "Anne Design House", detail: "Content → proposal" },
            { term: "Muscat Collections", detail: "Online → offline" },
            { term: "RAZ Group", detail: "Objective → capability" },
            { term: "Conmarble", detail: "Technical evidence" },
            { term: "MoodbyTEAL", detail: "AI commoditisation" },
            { term: "ZuriSpace", detail: "Mature marketing" },
            { term: "ONE A", detail: "Multi-market complexity" },
          ],
        },
      ],
    },
    {
      id: "white-space",
      placement: "after",
      eyebrow: "Competitive white space",
      title: "Table stakes vs proposed differentiation",
      tag: "Differentiation hypothesis — not proven uniqueness or a defensible moat",
      tone: "light",
      content: [
        {
          kind: "columns",
          columns: [
            {
              label: "Table stakes",
              title: "Not durable differentiation",
              tone: "neutral",
              items: [
                "AI text generation",
                "Image generation",
                "Calendar",
                "Scheduling",
                "Publishing",
                "Basic analytics",
                "Generic AI recommendations",
                "Arabic content alone",
              ],
            },
            {
              label: "Differentiation hypothesis",
              title: "The combination",
              tone: "accent",
              items: [
                "GCC Context",
                "Verified Business Evidence",
                "Commercial Outcome Learning",
                "Explainable Next-Test Intelligence",
              ],
            },
          ],
        },
        {
          kind: "quotes",
          items: ["Decision Intelligence alone is not sufficient differentiation."],
        },
        {
          kind: "list",
          label: "Avoid positioning Tansiq merely as",
          items: [
            "AI Marketing Platform",
            "Decision Intelligence Platform",
            "Arabic AI Marketing Platform",
          ],
        },
        {
          kind: "pairs",
          label: "Recommended positioning direction — hypothesis",
          items: [
            {
              term: "Evidence-Grounded Marketing Intelligence for GCC Businesses",
              detail:
                "Tansiq could connect business goals, verified evidence, AI-powered marketing execution and commercial learning to help businesses understand what to test next — and why.",
            },
            {
              term: "Possible supporting line",
              detail: "From AI marketing execution to evidence-grounded commercial learning.",
            },
          ],
        },
      ],
      note: "A research positioning direction only — Tansiq's current public positioning is unchanged.",
    },
    {
      id: "moat",
      placement: "after",
      eyebrow: "Potential long-term moat · future-looking",
      title: "Accumulated business learning",
      intro:
        "Over time, Tansiq could potentially retain customer-specific knowledge about the items below. It does not exist today and is not yet a moat.",
      tone: "muted",
      collapsible: true,
      content: [
        {
          kind: "list",
          items: [
            "Priority buyers",
            "Strategic offers",
            "Approved evidence",
            "Rejected recommendations",
            "Outcome patterns",
            "Business constraints",
            "Successful / unsuccessful experiments",
          ],
        },
        {
          kind: "pairs",
          items: [
            {
              term: "Possible future concept",
              detail: "Customer-Specific Intelligence Graph.",
            },
          ],
        },
      ],
    },
    {
      id: "risks",
      placement: "after",
      eyebrow: "Risks & guardrails",
      title: "When evidence is weak, say less — not invent more",
      tone: "light",
      content: [
        {
          kind: "list",
          items: [
            "False attribution",
            "AI hallucination",
            "Founder / company evidence confusion",
            "Small sample sizes",
            "Overautomation",
            "Product bloat",
            "Stale business context",
            "Privacy",
            "False confidence",
            "Hypothesis presented as fact",
          ],
        },
      ],
    },
  ],
  methodology: {
    evidence: {
      title: "Verified / evidence-backed",
      body: "Directly supported by research. In this segment, prospect-level facts exist in stored research for DAH Design only.",
    },
    hypothesis: {
      title: "Hypothesis",
      body: "Requires customer / pilot validation. Every research thesis and pilot question below is a hypothesis — never a confirmed customer pain point.",
    },
    levels: [
      { label: "Verified", body: "Directly supported by research." },
      { label: "Attributed", body: "A claim made by the company or another identified source." },
      { label: "Inferred", body: "Our analysis based on observed evidence." },
      { label: "Hypothesis", body: "Requires customer / pilot validation." },
      { label: "Unresolved", body: "Insufficient or conflicting evidence." },
    ],
    useWording: [
      "Proposed",
      "Research suggests",
      "Product opportunity",
      "Could enable",
      "Candidate intelligence layer",
      "To validate",
      "Hypothesis",
      "Recommended next step",
    ],
    avoidWording: [
      "The company struggles to communicate its services",
      "First in GCC",
      "Unique in GCC",
      "Only platform",
      "Predicts revenue",
      "Knows the best strategy",
      "Autonomous marketing strategy",
    ],
    note: "Example of the discipline — observed: “Company offers several services.” Allowed hypothesis: “The company may benefit from clearer buyer-to-offer prioritisation.” Not allowed without direct evidence: “The company struggles to communicate its services.”",
  },
  conclusion: {
    title: "Final recommendation",
    paragraphs: [
      ["The research does not conclude that Tansiq needs more generative features."],
      [
        "Instead, it identifies a product hypothesis: ",
        {
          strong:
            "Tansiq could become more valuable by connecting active business objectives, relevant buyers, verified evidence, marketing execution and commercially meaningful outcomes — then using that history to recommend the next useful test with transparent confidence.",
        },
      ],
      [{ strong: "AI recommends. Evidence grounds. Outcomes teach. Humans remain in control." }],
      [
        "The intelligence comes from the relationships between objective, buyer, offer, evidence and outcome — not from any one object alone.",
      ],
    ],
    statusNote:
      "Desk research supports product hypotheses. No segment-level potential score was supplied, and no comparative ranking is implied.",
    unvalidated: {
      title: "Not validated by desk research — requires interviews and pilots",
      items: [
        "Willingness to pay",
        "Actual customer pain",
        "Product-market fit",
        "Causal revenue impact",
        "Recommendation usefulness",
        "Adoption",
        "Retention",
      ],
    },
  },
  prospects: [
    /* ───────── Oman ───────── */
    prospect({
      id: "align",
      name: "ALIGN",
      country: "om",
      solution: "Market Expansion → Relevant Proof",
      pilotQuestion:
        "Which existing proof best supports the next market the business wants to enter?",
      priority: "wave-1",
    }),
    prospect({
      id: "nexus",
      name: "Nexus",
      country: "om",
      solution: "Buyer → Relevant Discipline → Proof",
      pilotQuestion:
        "Does buyer-specific capability selection generate more relevant enquiries than generic company-level marketing?",
      pilotFamilies: ["Offer Fit Pilot"],
      priority: "wave-1",
    }),
    prospect({
      id: "muscat-collections",
      name: "Muscat Collections",
      country: "om",
      solution: "Digital Marketing → Consultation → Showroom → Commercial Outcome",
      pilotQuestion:
        "Can marketing themes be connected to consultation/showroom intent rather than only digital engagement?",
      pilotFamilies: ["Commercial Journey Pilot"],
      learningFocus: "Online → offline",
      priority: "wave-1",
    }),
    prospect({
      id: "biva",
      name: "BIVA",
      country: "om",
      solution: "Design Decision → Commercial Evidence",
      pilotQuestion:
        "Does decision/process evidence generate stronger commercial response than final-result-only content?",
      pilotFamilies: ["Evidence Selection Pilot"],
      priority: "wave-2",
    }),
    prospect({
      id: "interno",
      name: "Interno",
      country: "om",
      solution: "Buyer Stage → Evidence Asset",
      pilotQuestion: "Does stage-matched evidence outperform one-size-fits-all content?",
      flags: ["Verification required"],
      researchNotes: [
        "Research record not yet verified — Wave 2 only after verification. A research annotation, not a business judgement.",
      ],
      priority: "wave-2",
    }),

    /* ───────── UAE ───────── */
    prospect({
      id: "anne-design-house",
      name: "Anne Design House",
      country: "ae",
      solution: "Content → Intent → Proposal",
      pilotQuestion:
        "Which content themes are associated with opportunities that progress toward proposals?",
      pilotFamilies: ["Qualified Intent Pilot", "Commercial Journey Pilot"],
      learningFocus: "Content → proposal",
      priority: "wave-1",
    }),
    prospect({
      id: "dah-design",
      name: "DAH Design",
      country: "ae",
      website: "https://dah-design.com/",
      contact: {
        kind: "website",
        note: "Official contact details not captured in stored research — use the official website.",
      },
      evidence: [
        {
          status: "verified",
          text: "The About Us page names Daria Veelenturf as Founder & Director.",
          source: "dah-design.com, checked 4 October 2026",
        },
        {
          status: "attributed",
          text: "Master's degree in architecture, over 15 years in interior design and luxury residential work at Bvlgari Residences, W Residences and Palm Jumeirah — attributed to the founder (person attribution), not to the company.",
          source: "dah-design.com About Us, checked 4 October 2026",
        },
        {
          status: "verified",
          text: "Dubai address (Marina Plaza) and Dubai projects listed; all projects sit on one page, with none on its own page.",
          source: "dah-design.com, checked 4 October 2026",
        },
      ],
      solution: "Founder Expertise → Company Authority",
      pilotQuestion:
        "Can founder expertise support company-level authority without creating attribution errors?",
      researchNotes: [
        "A live example of the context-completeness principle: the founder's 15 years must not be presented as the company's 15 years.",
      ],
      priority: "wave-1",
    }),
    prospect({
      id: "otilia",
      name: "OTILÌA",
      country: "ae",
      solution: "Rich Evidence → Buyer-Specific Narrative",
      pilotQuestion: "Which evidence matters to which buyer?",
      pilotFamilies: ["Evidence Selection Pilot"],
      priority: "wave-2",
    }),
    prospect({
      id: "zurispace",
      name: "ZuriSpace",
      country: "ae",
      solution: "Mature Content → Commercial Outcome",
      pilotQuestion:
        "Can Tansiq create additional value when content production itself is not the primary bottleneck?",
      learningFocus: "Mature marketing",
      priority: "wave-3",
    }),
    prospect({
      id: "moodbyteal",
      name: "MoodbyTEAL",
      country: "ae",
      solution: "AI Execution → Decision Intelligence",
      pilotQuestion: "What value remains when AI generation itself is increasingly commoditized?",
      learningFocus: "AI commoditisation",
      priority: "wave-3",
    }),

    /* ───────── Qatar ───────── */
    prospect({
      id: "studio-echelle",
      name: "Studio Echelle",
      country: "qa",
      solution: "Content → Qualified Project Intent",
      pilotQuestion:
        "Which marketing themes attract the project types, budgets and timelines the studio actually wants?",
      metricConcept: "Qualified Intent Rate",
      pilotFamilies: ["Qualified Intent Pilot"],
      learningFocus: "Qualified intent",
      priority: "wave-1",
    }),
    prospect({
      id: "studio-twelve",
      name: "Studio Twelve",
      country: "qa",
      solution: "Desired Market → Proof Exposure",
      pilotQuestion:
        "Can changing which proof is foregrounded influence the mix of commercial interest?",
      pilotFamilies: ["Evidence Selection Pilot"],
      priority: "wave-2",
    }),
    prospect({
      id: "one-a",
      name: "ONE A",
      country: "qa",
      role: "Strategic Validation",
      solution: "Market × Buyer × Capability",
      pilotQuestion:
        "Which capability combination should be emphasized for a specific buyer in a specific market?",
      pilotFamilies: ["Offer Fit Pilot"],
      learningFocus: "Multi-market complexity",
      researchNotes: ["Treat as higher-complexity strategic validation."],
      priority: "wave-3",
    }),
    prospect({
      id: "conmarble",
      name: "Conmarble",
      country: "qa",
      solution: "Technical Evidence → Buyer Education → Commercial Intent",
      pilotQuestion:
        "Can technical product evidence be transformed into buyer-specific commercial education without oversimplifying or inventing claims?",
      learningFocus: "Technical evidence",
      priority: "wave-3",
    }),
    prospect({
      id: "smad",
      name: "SMAD",
      country: "qa",
      solution: "Buyer Need → Relevant Design Proof",
      pilotQuestion:
        "Does need-led content attract more relevant prospects than category-led project content?",
      flags: ["Qualified replacement"],
      researchNotes: [
        "The original Qatar #5 was not recovered; SMAD is a qualified replacement. A research annotation, not a business judgement.",
      ],
      priority: "wave-3",
    }),

    /* ───────── Saudi Arabia ───────── */
    prospect({
      id: "raz-group",
      name: "RAZ Group",
      country: "sa",
      solution: "Explicit Growth Objective → Capability Stack",
      pilotQuestion: "Which capability combination best supports the active growth objective?",
      pilotFamilies: ["Offer Fit Pilot"],
      learningFocus: "Objective → capability",
      priority: "wave-1",
    }),
    prospect({
      id: "alcove",
      name: "Alcove",
      country: "sa",
      solution: "Lead Volume → Desired Commission Fit",
      pilotQuestion: "Which narratives attract projects the studio actually wants to accept?",
      metricConcept: "Commission Fit Rate",
      priority: "wave-2",
    }),
    prospect({
      id: "roaa-zaki-design-studio",
      name: "Roaa Zaki Design Studio",
      country: "sa",
      solution: "Project Evidence → Revenue Path",
      pilotQuestion:
        "Which evidence from the same project generates interest in different commercial offers?",
      priority: "wave-2",
    }),
    prospect({
      id: "shai-designs",
      name: "Shai Designs",
      country: "sa",
      solution: "Sector-Specific Proof → Lead Mix",
      pilotQuestion: "Does sector-specific evidence change the sector mix of incoming enquiries?",
      pilotFamilies: ["Qualified Intent Pilot"],
      priority: "wave-1",
    }),
    prospect({
      id: "nebras-aljoaib",
      name: "Nebras Aljoaib",
      country: "sa",
      role: "Exploratory",
      solution: "Creative IP → Multiple Commercial Expressions",
      pilotQuestion:
        "Can one piece of creative expertise support different commercial or authority paths?",
      flags: ["Qualified replacement"],
      researchNotes: [
        "The original Saudi #5 was not recovered; Nebras Aljoaib is a qualified replacement. Treat as exploratory. A research annotation, not a business judgement.",
      ],
      priority: "wave-3",
    }),
  ],
};
