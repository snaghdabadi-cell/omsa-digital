import type { Prospect, Segment } from "../types";

// Segment 05 — GCC Real Estate Developers & Multi-Project Brokerages.
//
// Final research pass (5 October 2026) covering brief §1–40 and the §41+
// completeness / red-team gate. Research came before implementation; weak
// prospects, hypotheses and features were removed or downgraded.
//
// Evidence rules:
//   - `evidence` items are "verified" (read on the business's own official
//     website on 5 October 2026) or "attributed" (named third-party source,
//     linked in `sources`).
//   - Contacts come only from official sites' raw HTML. Unknowns stay unknown.
//   - No scores, probabilities, lead volumes, CRM stacks, budgets or internal
//     problems are stated. Hidden problems are hypotheses; Tansiq capabilities
//     are proposed. No Tansiq capability is labelled "current": the Tansiq
//     product is not in this repository and was not independently verified.
//   - Decision-maker paths describe public channels only; no personal data.
//
// (The earlier "Customer Problems & Needs" segment lives, unregistered, in
// segment-05-problems-needs.ts.)

const CHECKED = "official website, checked 5 October 2026";

const notVerified = (what = "Official contact details") =>
  ({ kind: "website", note: `${what} not verified in this research.` }) as const;

const prospect = (p: Prospect) => p;

const attrs = (o: {
  type: string;
  icp: "Primary" | "Secondary";
  potential: "Very High" | "High" | "Strategic";
  access: "High" | "Medium" | "Low" | "Stretch";
  whyNow: string;
  path: string;
  capability: string;
}) => [
  { label: "Type", value: o.type },
  { label: "ICP", value: `${o.icp} ICP` },
  { label: "Customer potential", value: o.potential },
  { label: "Early-sales accessibility", value: o.access },
  { label: "Why now", value: o.whyNow },
  { label: "Decision-maker path", value: o.path },
  { label: "Relevant capability", value: o.capability },
];

export const SEGMENT_05_REAL_ESTATE: Segment = {
  id: "05",
  number: "05",
  name: "GCC Real Estate Developers & Multi-Project Brokerages",
  status: "Conditional",
  statusList: [
    { label: "Segment verdict", value: "Conditional" },
    { label: "Research & Strategy", value: "Ready" },
    { label: "Market validation", value: "Pending" },
    { label: "Recommended next step", value: "Marketing Intelligence Audit" },
  ],
  heroMeta:
    "21 businesses after re-audit · UAE 9 · Oman 6 · Qatar 3 · Saudi Arabia 3 · research 5 October 2026",
  heroCta: { href: "#decision", label: "Read the executive decision" },
  solutionLabel: "Tansiq opportunity · proposed",
  view: {
    hideScore: true,
    priorityLabel: "Classification",
    priorityFilter: { label: "Early pilot", values: ["early-pilot"] },
    attributeFilter: { label: "Primary ICP", attribute: "ICP", value: "Primary" },
    solutionColumn: "Tansiq opportunity",
    opportunityLabel: "Hidden problem hypothesis · to investigate",
    pilotQuestionLabel: "Validation required · not knowable from public information",
    prospectsIntro:
      "21 businesses after re-auditing the original 20 and fresh discovery across all four markets. Country distribution follows quality, not quotas. Each record separates observed evidence, the hidden-problem hypothesis, the proposed Tansiq opportunity and what still needs validating. No scores or rankings.",
  },
  nav: [
    { href: "#decision", label: "Decision" },
    { href: "#red-team", label: "Red team" },
    { href: "#prospects", label: "Prospects" },
    { href: "#features", label: "Features" },
    { href: "#pilot-design", label: "Pilot" },
  ],
  summary: [
    "The opportunity is not to generate more property leads. The hypothesis is narrower: help real-estate marketing learn from what sales actually discovers — which demand proved commercially relevant, which did not, and why.",
    "The research supports a Conditional verdict. CRMs and ad platforms already close part of this loop, so Tansiq's role survives only as the marketing-decision layer on top of them — and only if customers' existing CRM data is usable without new data entry by sales teams.",
  ],
  blocks: [
    /* ═════════ before the methodology ═════════ */
    {
      id: "decision",
      placement: "before",
      eyebrow: "Executive decision",
      title: "Conditional — worth a narrow, evidence-led pilot",
      status: "inferred",
      tag: "Desk-research decision — market validation pending",
      tone: "dark",
      content: [
        {
          kind: "pairs",
          items: [
            {
              term: "Segment verdict",
              detail:
                "Conditional. Promising problem, but differentiation and data access are unproven.",
            },
            {
              term: "Why",
              detail:
                "Real-estate demand is high-value and launch-driven, and the market itself recognises the marketing–sales gap (a CRM vendor partnered with a Dubai agency specifically to address it). But Meta and Google already optimise on CRM lead stages, and CRMs already report and analyse lost reasons — so the remaining whitespace is the marketing-decision interpretation layer, not the loop itself.",
            },
            {
              term: "Best initial ICP",
              detail:
                "Mid-size UAE developers with frequent launches, in-house sales and active paid marketing — plus large off-plan brokerages that run their own multi-developer campaigns and see the sales outcome.",
            },
            {
              term: "Best initial market",
              detail:
                "UAE (Dubai) for evidence of differentiation; Oman as a secondary, relationship-led pilot. Oman alone was not confirmed as the best pilot market.",
            },
            {
              term: "Best buying trigger",
              detail:
                "Continued launches while absorption softens — Dubai off-plan volume fell in Q2 2026 as fee-waiver incentives returned — plus a new launch, a new buyer geography or a CRM change.",
            },
            {
              term: "Strongest hidden problem",
              detail:
                "Negative Demand Blindness: campaigns that look successful on enquiries while repeatedly attracting commercially unsuitable demand.",
            },
            {
              term: "Strongest Tansiq opportunity",
              detail:
                "Marketing-side learning from CRM outcomes and lost reasons across launches and projects — interpreted at message, audience and project level, with explainable next tests.",
            },
            {
              term: "Most important new capability",
              detail:
                "A lightweight Outcome Connector (platform enabler): read the minimum outcome signal from existing CRM exports or APIs — reusable beyond real estate.",
            },
            {
              term: "Biggest risk",
              detail:
                "Differentiation failure: the customer's CRM, its AI add-ons and ad-platform conversion pipelines may already provide equivalent learning.",
            },
            {
              term: "First thing to validate",
              detail:
                "Whether a prospect's existing CRM export links lead source, stage and lost reason well enough — and whether a marketing-side analysis of it changes a campaign decision that CRM dashboards did not.",
            },
            {
              term: "What would invalidate the thesis",
              detail:
                "Outcome data unusable without sales re-entry, or customers already getting equivalent marketing learning from CRM / ad-platform tools, or insights that do not change decisions.",
            },
          ],
        },
      ],
    },
    {
      id: "red-team",
      placement: "before",
      eyebrow: "Red team · counter-evidence",
      title: "What the research found against the thesis",
      status: "supported",
      intro:
        "These are observed facts from vendor documentation, regulators and market sources. Each one narrowed or downgraded part of the original brief.",
      tone: "light",
      content: [
        {
          kind: "columns",
          columns: [
            {
              label: "Ad platforms",
              title: "Downstream optimisation is commoditised",
              body: "Meta's Conversions API for CRM sends CRM lead stages (e.g. qualified) back to ad delivery, and Google's enhanced conversions for leads imports offline lead outcomes. “Send outcomes back to optimise ads” is not whitespace.",
              status: "supported",
              tone: "negative",
            },
            {
              label: "CRMs",
              title: "Lost-reason analytics already exists",
              body: "HubSpot's Deal Loss Agent analyses closed-lost deals for recurring patterns and objections; Salesforce Campaign Influence attributes campaigns to opportunities. Where CRMs are configured, lost-reason reporting is solved.",
              status: "supported",
              tone: "negative",
            },
            {
              label: "Regional vendors",
              title: "The gap is recognised — and targeted",
              body: "LeadSquared partnered with a Dubai agency to address “limited integration between marketing and sales systems” for developers; Sell.Do and PropCRM serve UAE / Saudi real estate. Evidence the problem exists, and that competitors address it.",
              status: "supported",
            },
            {
              label: "Conversation intelligence",
              title: "Objection extraction is available",
              body: "Tools such as ConvoZen and Specific analyse objections across calls and WhatsApp. Summarising conversations is not differentiation.",
              status: "supported",
              tone: "negative",
            },
            {
              label: "UAE channel structure",
              title: "Developer outcome data may be fragmented",
              body: "Dubai off-plan is heavily broker-sold; developers pay brokerage commissions that can reach double digits. Broker-sourced outcomes may sit in brokers' CRMs, not the developer's.",
              status: "supported",
              tone: "accent",
            },
            {
              label: "Market timing",
              title: "Hot launches reduce the pain",
              body: "Some launches sell out within hours (e.g. SAMANA's Ocean Pearl projects). When demand exceeds supply, demand-quality learning matters less — the problem is likely seasonal and launch-specific.",
              status: "supported",
              tone: "accent",
            },
          ],
        },
      ],
      note: "Net effect: the whitespace is narrower than §6 assumed — it is the marketing-decision interpretation layer, not the outcome loop itself.",
    },
    {
      id: "icp",
      placement: "before",
      eyebrow: "Refined ICP",
      title: "Mid-size launchers and multi-developer brokerages",
      tone: "muted",
      content: [
        {
          kind: "columns",
          columns: [
            {
              label: "Primary ICP",
              title: "Mid-size developers with frequent launches",
              tone: "accent",
              items: [
                "Several concurrent or serial launches",
                "In-house sales team (outcomes in their own CRM)",
                "Active paid / digital marketing with enquiry forms",
                "Multiple buyer profiles (investor / end-user, local / international)",
                "Accessible leadership — not enterprise procurement",
              ],
            },
            {
              label: "Secondary ICP",
              title: "Off-plan brokerages with their own campaigns",
              tone: "positive",
              items: [
                "Market many developers' projects",
                "Run their own paid campaigns per project",
                "Agents' outcomes recorded in the brokerage CRM",
                "International buyer marketing",
              ],
            },
            {
              label: "Deprioritize",
              title: "Lower fit for early validation",
              tone: "negative",
              items: [
                "Giga / sovereign developers (retained only as Strategic)",
                "Single master-community or single-project sellers",
                "Mostly broker-sold developers without direct outcome data",
                "Leasing-led businesses, portals, individual agents",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "hidden-problems",
      placement: "before",
      eyebrow: "Hidden-problem architecture · after red team",
      title: "Six hypotheses — two weakened",
      status: "hypothesis",
      intro: "No hypothesis is claimed for any specific prospect without internal evidence.",
      tone: "light",
      collapsible: true,
      content: [
        {
          kind: "columns",
          columns: [
            {
              label: "Strongest",
              title: "Negative Demand Blindness",
              body: "Campaigns can generate strong engagement or enquiries while repeatedly attracting commercially unsuitable demand. Ad platforms optimise silently; the marketing team may still lack the explanation.",
              status: "hypothesis",
              tone: "accent",
            },
            {
              label: "Retained",
              title: "Marketing–Sales Learning Gap",
              body: "Marketing sees campaign performance, sales sees buyer reality. Recognised by vendors — but partly solved where CRMs are configured.",
              status: "hypothesis",
            },
            {
              label: "Retained",
              title: "Portfolio Learning Gap",
              body: "Learning from one launch may improve the next, especially for serial launch brands. Not clearly productised as marketing learning.",
              status: "hypothesis",
            },
            {
              label: "Retained · narrowed",
              title: "Sales Conversation Intelligence Gap",
              body: "Objection extraction exists; turning recurring objections into message / content hypotheses tied to a project or campaign is the open question.",
              status: "hypothesis",
            },
            {
              label: "Weakened",
              title: "Lost-Reason Blindness",
              body: "CRMs already record and analyse lost reasons where configured. The gap exists only where reasons are missing, inconsistent or not visible to marketing.",
              status: "inferred",
              tone: "negative",
            },
            {
              label: "Weakened",
              title: "Buyer–Project Context Gap",
              body: "Context usually exists in CRMs and inventory systems. Tansiq should read it, not own it — an input, not a differentiator.",
              status: "inferred",
              tone: "negative",
            },
          ],
        },
      ],
    },

    /* ═════════ after the prospect database ═════════ */
    {
      id: "features",
      placement: "after",
      eyebrow: "Feature duplication & value test",
      title: "Six proposed capabilities — what survives",
      status: "hypothesis",
      tag: "All proposed — none is a verified current Tansiq capability",
      tone: "light",
      content: [
        {
          kind: "matrix",
          rows: [
            "Final classification",
            "Whitespace",
            "Who uses it",
            "Decision improved",
            "Existing workaround",
            "Main adoption risk",
            "Must validate",
          ],
          columns: [
            {
              label: "Tier 1 · retained, narrowed",
              title: "Commercial Feedback Loop",
              status: "hypothesis",
              cells: [
                "New product opportunity, built on the Outcome Connector",
                "Partial — ad-optimisation and CRM attribution are commoditised; marketing-side learning is not",
                "Marketing manager (champion); Head of Marketing",
                "Which campaigns, messages and audiences to scale, fix or stop — on qualified outcomes, not leads",
                "CRM dashboards, Meta / Google lead-stage optimisation, weekly sales meetings",
                "Duplicates CRM reporting; needs consistent lead source + stage",
                "That analysis of an existing CRM export changes a campaign decision",
              ],
            },
            {
              label: "Tier 1 · strongest",
              title: "Negative Demand Intelligence",
              status: "hypothesis",
              cells: [
                "New product opportunity",
                "Partial → possibly clear: closest substitute is lost-reason-by-campaign segmentation in CRMs",
                "Marketing manager; performance agency",
                "Which campaigns look successful but attract the wrong demand — and what to test instead",
                "Manual CRM segmentation, anecdotal sales complaints",
                "Requires disqualification reasons linked to campaign / creative",
                "That the pattern exists in real data and changes spend or messaging",
              ],
            },
            {
              label: "Tier 1 · retained, narrowed",
              title: "Sales-to-Marketing Intelligence",
              status: "hypothesis",
              cells: [
                "Capability extension hypothesis (content generation is described in prior research, not product-verified)",
                "Partial — objection extraction exists; turning it into message / content tests is the gap",
                "Marketing (consumer); Sales (signal owner)",
                "What to change in messaging, FAQs and creative per project",
                "Sales meetings, WhatsApp groups, CRM notes, conversation-intelligence tools",
                "Conversation data access and privacy; free-text quality",
                "That structured lost reasons or notes suffice without call recordings",
              ],
            },
            {
              label: "Downgraded · enabler",
              title: "Buyer & Project Context",
              status: "inferred",
              cells: [
                "Platform enabler (input), not a differentiator",
                "Commoditised as data storage — CRMs and inventory systems hold it",
                "Marketing (setup)",
                "Correct interpretation of outcomes per project and buyer type",
                "CRM fields, inventory system, project briefs",
                "Becoming a second inventory system",
                "Minimum fields needed: project, campaign → project mapping, buyer type",
              ],
            },
            {
              label: "Tier 2 · platform enabler",
              title: "Outcome Connector Framework",
              status: "hypothesis",
              cells: [
                "Platform enabler — reusable across segments (e.g. clinics, services)",
                "Not a customer-facing differentiator; a prerequisite",
                "Tansiq (internal); customer CRM admin",
                "Makes every outcome-based recommendation possible",
                "Manual exports, BI pipelines",
                "Custom CRM setups turning Tansiq into an integrator",
                "That CSV / scheduled export works for a pilot without custom engineering",
              ],
            },
            {
              label: "Rejected as product (for now)",
              title: "GCC Marketing Compliance Guard",
              status: "inferred",
              cells: [
                "Strategic exploration → human-review support or partner at most",
                "Not enough evidence of value; high maintenance",
                "Marketing / legal reviewer",
                "Whether an asset may need permit / disclosure review",
                "Regulator portals (e.g. Trakheesi permits), legal review, portals' listing checks",
                "Liability; rules differ by country / emirate and changed in 2026",
                "Whether a narrow, advisory checklist is valued enough to maintain",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "data-feasibility",
      placement: "after",
      eyebrow: "Data & integration feasibility",
      title: "Minimum data — and the minimum viable integration",
      status: "inferred",
      tone: "muted",
      collapsible: true,
      content: [
        {
          kind: "matrix",
          rows: ["Required", "Useful", "Optional", "Likely sources", "Access & privacy risk"],
          columns: [
            {
              label: "Tier 1",
              title: "Commercial Feedback Loop",
              cells: [
                "Per-enquiry campaign / source reference + outcome stage (qualified / viewing / reserved / won / lost) with dates",
                "Lost / disqualification reason, project, buyer type, budget band",
                "Value band, agent notes",
                "CRM export or read-only API; ad-platform campaign IDs / UTMs",
                "Broker-sourced deals may sit outside the developer CRM; personal data → hashed IDs or aggregates",
              ],
            },
            {
              label: "Tier 1",
              title: "Negative Demand Intelligence",
              cells: [
                "Campaign / creative reference per enquiry + qualification outcome + disqualification reason",
                "Budget band, buyer geography, project",
                "Engagement metrics",
                "CRM + ad platforms",
                "Reasons may be missing or inconsistent; mapping creative → enquiry needs naming discipline",
              ],
            },
            {
              label: "Tier 1",
              title: "Sales-to-Marketing Intelligence",
              cells: [
                "Structured lost reasons or sales notes text",
                "Objection tags from existing conversation tools",
                "Call / WhatsApp transcripts (with consent)",
                "CRM notes; existing conversation-intelligence tools",
                "Highest privacy exposure — GCC data-protection laws apply; avoid transcripts in a pilot",
              ],
            },
          ],
        },
        {
          kind: "pairs",
          label: "Integration",
          items: [
            {
              term: "Minimum viable integration",
              detail:
                "Scheduled CSV / CRM export + a campaign naming / UTM convention + optional three-option outcome label where the CRM lacks reasons. Read-only; no write-back; no custom per-client engineering.",
            },
            {
              term: "Scale-stage integration",
              detail:
                "Read-only connectors for the most common CRMs, webhooks, and reuse of the lead-stage definitions customers already send to Meta / Google.",
            },
            {
              term: "Not knowable from public information",
              detail: "Any prospect's CRM or technology stack — none is claimed on this page.",
            },
          ],
        },
      ],
    },
    {
      id: "countries",
      placement: "after",
      eyebrow: "Country strategy",
      title: "UAE to prove it, Oman to start relationships, Saudi to scale, Qatar selectively",
      status: "inferred",
      tone: "light",
      content: [
        {
          kind: "matrix",
          rows: [
            "Customer fit",
            "Marketing complexity",
            "Signal richness",
            "Competitive / tech pressure",
            "Regulatory complexity",
            "Early-sales accessibility",
            "Scale potential",
            "Verdict",
          ],
          columns: [
            {
              label: "UAE",
              title: "Prove differentiation",
              cells: [
                "Many mid-size launchers and large off-plan brokerages",
                "Highest: off-plan was about three-quarters of Dubai residential transactions in Q2 2026",
                "High, but fragmented across broker CRMs",
                "Highest — mature CRMs and regional vendors",
                "Medium — Trakheesi permit and off-plan ad disclosures",
                "Medium",
                "High",
                "Primary test market",
              ],
            },
            {
              label: "Oman",
              title: "Relationship pilot",
              cells: [
                "Fewer qualifying developers; ITC launches at an all-time high",
                "Medium — international buyers in ITCs",
                "Medium — smaller volumes",
                "Lower",
                "Medium — escrow law restricts marketing without ministry consent; new unified law",
                "High — shorter decision distance",
                "Low–medium (H1 2026 sales contracts RO 688m)",
                "Secondary pilot; brief's “best pilot” hypothesis refined",
              ],
            },
            {
              label: "Saudi Arabia",
              title: "Scale after proof",
              cells: [
                "Large developers; mid-size evidence under-explored (no Arabic-language search)",
                "High",
                "High",
                "Medium",
                "High — new REGA marketing & advertising regulation from 1 May 2026",
                "Low–medium — listed, larger organisations",
                "Very high",
                "Second wave",
              ],
            },
            {
              label: "Qatar",
              title: "Selective",
              cells: [
                "Few: master / sovereign developers dominate",
                "Medium — freehold expanded to 10 areas in 2026",
                "Low–medium (e.g. 485 transactions in July 2026)",
                "Low",
                "Medium — off-plan procedures updated January 2026",
                "Low",
                "Low",
                "Strategic only",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "compliance",
      placement: "after",
      eyebrow: "Compliance-guard feasibility",
      title: "Flag for human review — do not productise",
      status: "supported",
      tag: "Not legal advice — Tansiq cannot guarantee compliance",
      tone: "muted",
      collapsible: true,
      content: [
        {
          kind: "columns",
          columns: [
            {
              label: "UAE · Dubai",
              title: "Trakheesi permit required for property ads",
              body: "DLD requires an advertising permit; off-plan ads should show developer name, escrow account number, expected completion date and the permit number. DLD has fined companies for non-compliance. Abu Dhabi rules not reviewed.",
            },
            {
              label: "Saudi Arabia",
              title: "New marketing & advertising regulation",
              body: "REGA's Governance Regulation for Real Estate Marketing and Advertisements took effect on 1 May 2026, covering social media and platforms, with fines up to SAR 40,000.",
            },
            {
              label: "Qatar",
              title: "Off-plan regime still being set",
              body: "Aqarat (est. 2023) oversees developers; off-plan sale procedures were regulated by ministerial decision in January 2026.",
            },
            {
              label: "Oman",
              title: "Ministry consent before marketing",
              body: "The escrow law restricts advertising or marketing units before ministry consent; a new unified Real Estate Regulation Law was introduced.",
            },
          ],
        },
        {
          kind: "pairs",
          items: [
            {
              term: "Automatable",
              detail:
                "Presence checks only — e.g. “does this Dubai off-plan asset show a permit number?”",
            },
            {
              term: "Needs human / legal review",
              detail:
                "Claims, project status, eligibility, and anything country- or emirate-specific.",
            },
            {
              term: "Verdict",
              detail:
                "Reject as a product now. At most an advisory review checklist later, or a legal partner. Rules changed in three of four markets during 2026 — maintenance and liability outweigh value.",
            },
          ],
        },
      ],
    },
    {
      id: "buying",
      placement: "after",
      eyebrow: "Buying motion & objections",
      title: "Marketing champions, sales owns the data, leadership pays",
      status: "hypothesis",
      tone: "light",
      collapsible: true,
      content: [
        {
          kind: "columns",
          columns: [
            { label: "Experiences & champions", title: "Head of Marketing / marketing manager" },
            { label: "Owns outcome data · can block", title: "Sales Director" },
            { label: "Gatekeeps access", title: "CRM / IT / data owner" },
            { label: "Approves budget", title: "CEO / founder (mid-size) or CMO (larger)" },
          ],
        },
        {
          kind: "pairs",
          label: "Objections — and the condition under which Tansiq survives each",
          items: [
            {
              term: "“Our CRM already does this.”",
              detail:
                "Often true for reporting. Survives only if Tansiq interprets outcomes at message / audience / project level across launches — test against their CRM reports.",
            },
            {
              term: "“Our agents won't enter more data.”",
              detail:
                "Accept it. Use existing CRM fields and exports; if a pilot needs duplicate entry, downgrade the opportunity.",
            },
            {
              term: "“We have Meta, Google, portals and analytics.”",
              detail:
                "Do not duplicate performance reporting; only add downstream commercial context.",
            },
            {
              term: "“Sales and marketing meet every week.”",
              detail:
                "Value must be memory and pattern detection across launches that meetings do not retain.",
            },
            {
              term: "Data sensitivity",
              detail:
                "Requirements: role-based access, audit history, data minimisation, aggregated / hashed outcome signals.",
            },
          ],
        },
      ],
    },
    {
      id: "gtm",
      placement: "after",
      eyebrow: "GTM & outreach",
      title: "Lead with a diagnostic, not with AI content",
      status: "hypothesis",
      tag: "GTM hypothesis — wording untested",
      tone: "muted",
      content: [
        {
          kind: "pairs",
          items: [
            {
              term: "Offer",
              detail:
                "Real Estate Marketing Intelligence Audit: review one export of enquiries, stages and reasons against campaigns and projects — show where feedback stops and any negative-demand patterns.",
            },
            {
              term: "Hook (to test)",
              detail:
                "You may not need more leads. You may need better learning from the leads you already generate.",
            },
            { term: "Likely champion", detail: "Head of Marketing / performance marketing lead." },
            { term: "Likely blocker", detail: "Sales Director (data ownership) and CRM / IT." },
            {
              term: "Proof needed",
              detail:
                "One decision changed by the audit that the customer's CRM dashboards did not surface.",
            },
            {
              term: "WTP proxies (signals, not proof)",
              detail:
                "Frequent launches, active paid acquisition with enquiry forms, broker commissions that make each sale costly, existing CRM / agency investment.",
            },
          ],
        },
        {
          kind: "quotes",
          items: [
            "We reviewed your public project and buyer journey and identified a few hypotheses around project-level demand quality that could be validated against actual sales outcomes.",
          ],
        },
        {
          kind: "list",
          label: "Never say",
          items: [
            "“Your marketing has a lead-quality problem”",
            "“Your CRM is disconnected from marketing”",
            "Any claim about internal operations based on public research",
          ],
        },
      ],
    },
    {
      id: "pilot-design",
      placement: "after",
      eyebrow: "Pilot design",
      title: "3–5 businesses · test the thesis, not the features",
      status: "hypothesis",
      tag: "Proposed — no numeric targets",
      tone: "light",
      content: [
        {
          kind: "flow",
          steps: [
            "Baseline",
            "Project / Buyer Context",
            "Marketing Activity",
            "Enquiry",
            "Sales Feedback",
            "Outcome / Lost Reason",
            "Learning",
            "Next Marketing Test",
          ],
        },
        {
          kind: "pairs",
          items: [
            {
              term: "Hypothesis",
              detail:
                "Downstream sales outcomes contain recurring patterns that change marketing decisions beyond standard CRM and campaign analytics.",
            },
            {
              term: "Input",
              detail:
                "One CRM export (source, stage, reason, project), campaign naming map, project list. No transcripts.",
            },
            {
              term: "Intervention",
              detail:
                "Tansiq-assisted analysis — human-assisted at first — producing observation → interpretation → confidence → next test, per project.",
            },
            {
              term: "Observable support",
              detail:
                "A marketing decision changed (spend, audience, message, project priority) that the customer says their CRM reports did not prompt; repeated use across a second launch.",
            },
            {
              term: "Failure signal",
              detail:
                "Data unusable without re-entry; insights already visible in CRM; no decision changes; sales will not engage.",
            },
            {
              term: "Next decision",
              detail:
                "Supported → build the Outcome Connector MVP. Mixed → narrow to Negative Demand only. Failed → deprioritise the segment.",
            },
          ],
        },
      ],
    },
    {
      id: "roadmap",
      placement: "after",
      eyebrow: "Product roadmap impact",
      title: "What to build, research, connect — and not build",
      status: "inferred",
      tone: "muted",
      content: [
        {
          kind: "columns",
          columns: [
            {
              label: "Build / validate soon",
              title: "Narrow and reusable",
              tone: "accent",
              items: [
                "Outcome Connector MVP (CSV / export, read-only)",
                "Negative Demand Intelligence",
                "Commercial Feedback Loop as marketing learning",
              ],
            },
            {
              label: "Research further",
              title: "Promising, unproven",
              tone: "positive",
              items: [
                "Sales-to-Marketing Intelligence from notes / reasons",
                "Cross-launch portfolio memory",
                "Brokerage multi-developer variant",
              ],
            },
            {
              label: "Connect / partner",
              title: "Integrate, don't rebuild",
              items: [
                "CRMs and developer sales platforms",
                "Meta / Google conversion pipelines",
                "Conversation-intelligence tools",
                "Legal / compliance partners",
              ],
            },
            {
              label: "Do not build",
              title: "Commoditised or wrong role",
              tone: "negative",
              items: [
                "Lead scoring, pipeline, agent assignment",
                "Inventory, listings, reservations",
                "Ad-platform outcome optimisation",
                "Conversation summarisation",
                "Productised compliance guarantee",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "kill",
      placement: "after",
      eyebrow: "Kill criteria & validation questions",
      title: "What would make Tansiq stop",
      status: "hypothesis",
      tone: "dark",
      content: [
        {
          kind: "columns",
          columns: [
            {
              label: "Data failure",
              title: "Customers cannot or will not provide usable outcome signals.",
              tone: "accent",
            },
            {
              label: "Workflow failure",
              title: "Sales must do substantial duplicate entry.",
              tone: "accent",
            },
            {
              label: "Differentiation failure",
              title: "CRM / ad-platform tools already provide equivalent marketing learning.",
              tone: "accent",
            },
            {
              label: "Actionability failure",
              title: "Insights do not change marketing decisions.",
              tone: "accent",
            },
            {
              label: "Integration failure",
              title: "Integrations are too custom for the likely value.",
              tone: "accent",
            },
            {
              label: "Adoption failure",
              title: "Marketing and sales do not trust or use the intelligence.",
              tone: "accent",
            },
            {
              label: "Economic failure",
              title: "Valued, but not enough to pay for the product and integration cost.",
              tone: "accent",
            },
            {
              label: "Compliance failure",
              title:
                "Regulatory monitoring liability outweighs benefit — already applied: guard rejected.",
              tone: "accent",
            },
          ],
        },
        {
          kind: "list",
          ordered: true,
          label: "Questions only customers can answer",
          items: [
            "Are lost / disqualification reasons recorded consistently?",
            "Can marketing and sales data be linked per enquiry?",
            "How much demand arrives via brokers outside the developer CRM?",
            "Will sales permit the feedback loop?",
            "Is the intelligence materially different from CRM reporting?",
            "Who owns the budget and who controls data access?",
            "Is it valuable enough to pay for?",
          ],
        },
      ],
    },
    {
      id: "completeness",
      placement: "after",
      eyebrow: "Research completeness",
      title: "Verified, inferred, unknown — and what changed",
      status: "inferred",
      tone: "light",
      collapsible: true,
      content: [
        {
          kind: "pairs",
          items: [
            {
              term: "Verified",
              detail:
                "Official websites, projects and contacts for retained prospects; vendor capabilities (Meta, Google, HubSpot, Salesforce, LeadSquared); regulator requirements as reported; market figures as reported.",
            },
            {
              term: "Inferred",
              detail:
                "Whitespace narrowing, ICP refinement, country verdicts, feature classifications.",
            },
            {
              term: "Unknown",
              detail:
                "Every prospect's CRM, data quality, broker share, lost-reason discipline, budget owner and willingness to pay.",
            },
            {
              term: "Weakened / rejected",
              detail:
                "Lost-Reason Blindness and Buyer–Project Context weakened; Compliance Guard rejected as product; Buyer & Project Context downgraded to enabler; “Oman as best pilot market” refined.",
            },
            {
              term: "Removed prospects",
              detail:
                "Muscat Bay, Savills Oman, Hamptons Oman, Ezdan, JMJ Group Holding, Sumou, Dar Al Majd — see final report reasons.",
            },
            {
              term: "Contradictions",
              detail:
                "Dubai off-plan share reported as ~76% (Q2 2026) and 70–80% month-on-month — consistent. Fast sell-outs coexist with softer quarterly volume — timing-dependent, recorded rather than resolved. Vendor case-study uplift claims not used.",
            },
            {
              term: "Saturation",
              detail:
                "Reasonable for UAE and Oman: further searches returned enterprises, duplicates or single projects. Saudi mid-size developers under-explored — no Arabic-language search.",
            },
            {
              term: "Would more desk research change the verdict?",
              detail:
                "Unlikely to change “Conditional”. The deciding evidence — CRM data quality and decision impact — needs customer access, not more desk research.",
            },
          ],
        },
        {
          kind: "sources",
          label: "Key sources",
          items: [
            {
              label: "Meta — Conversions API for CRM",
              url: "https://developers.facebook.com/docs/marketing-api/conversions-api/conversion-leads-integration",
            },
            {
              label: "Google Ads — offline conversion imports",
              url: "https://support.google.com/google-ads/answer/10029210",
            },
            {
              label: "HubSpot — Deal Loss Agent",
              url: "https://ecosystem.hubspot.com/marketplace/listing/deal-loss-agent",
            },
            {
              label: "TradeArabia — LeadSquared & PIXL for developers",
              url: "https://www.tradearabia.com/News/331410/LeadSquared-PIXL-Global-to-deliver-developer-ready-solutions",
            },
            {
              label: "DLD — fines for advertising non-compliance",
              url: "https://dubailand.gov.ae/en/news-media/dld-fines-10-real-estate-companies-and-warns-another-30-for-not-adhering-to-advertising-requirements/",
            },
            {
              label: "Middle East Briefing — REGA advertising rules",
              url: "https://www.middleeastbriefing.com/news/?p=6286",
            },
            {
              label: "Gulf News — Dubai off-plan broker commissions",
              url: "https://gulfnews.com/amp/story/business%2Fproperty%2Fdubai-offplan-property-sales-commissions-hit-highs-of-10-12---and-even-15-on-bulk-deals-1.1698637470257",
            },
            {
              label: "Oliva — Dubai market report 2026 (DLD data)",
              url: "https://joinoliva.com/en/data-center/dubai-property-market-report/2026",
            },
            {
              label: "Oman Observer — Oman property transactions H1 2026",
              url: "https://www.omanobserver.om/article/1193653/business/property/oman-property-transactions-reach-ro143bn-amid-regional-tensions",
            },
            {
              label: "Times of Oman — ITC developments at all-time high",
              url: "https://timesofoman.com/article/175781-itc-developments-across-oman-at-an-all-time-high-says-expert",
            },
            {
              label: "Trowers — escrow laws in Oman",
              url: "https://trowers.com/insights/2023/june/escrow-laws-in-the-sultanate-of-oman",
            },
            {
              label: "Pinsent Masons — Qatar freehold expansion",
              url: "https://www.pinsentmasons.com/out-law/news/qatar-expands-foreign-real-estate-ownership",
            },
          ],
        },
      ],
    },
  ],
  methodology: {
    title: "How to read this research",
    evidence: {
      title: "Observed",
      body: "Public evidence: Verified (official website, 5 October 2026) or Attributed (named third-party source, linked).",
    },
    hypothesis: {
      title: "Hypothesis",
      body: "A reasonable interpretation requiring validation — never a statement about a company's internal operations.",
    },
    levels: [
      { label: "Observed", body: "Public evidence we could check." },
      { label: "Hypothesis", body: "Reasonable interpretation; requires validation." },
      { label: "Proposed", body: "Tansiq product / GTM opportunity — not a current capability." },
      { label: "Unknown", body: "Not established; validation required." },
    ],
    useWording: ["May", "Could", "Suggests", "Worth validating", "Not publicly verified"],
    avoidWording: [
      "Their marketing and sales systems are disconnected",
      "Their leads are poor",
      "Tansiq improves conversion",
      "Tansiq ensures compliance",
    ],
    note: "No scores, probabilities, lead volumes, CRM stacks, budgets or internal problems are stated. Customer potential and early-sales accessibility are qualitative labels.",
  },
  conclusion: {
    title: "Segment conclusion",
    paragraphs: [
      [
        "Real estate earns a ",
        { strong: "Conditional" },
        " place. The problem is plausible and commercially meaningful, and the market recognises the marketing–sales gap — but ad platforms and CRMs already close much of the loop.",
      ],
      [
        "Tansiq's defensible role, if any, is narrow: ",
        {
          strong:
            "help real-estate marketing learn from what sales discovers — especially demand that looks successful but is commercially wrong — using data customers already have.",
        },
      ],
      [
        "Run a Marketing Intelligence Audit with 3–5 UAE launchers or brokerages (plus one Oman relationship) before building anything beyond a minimal Outcome Connector.",
      ],
    ],
    statusNote:
      "Desk research supports a Conditional verdict. CRM data quality, decision impact and willingness to pay are unknown until customer access.",
    unvalidated: {
      title: "Not knowable from public information",
      items: [
        "CRM / tool stack",
        "Lost-reason discipline",
        "Broker vs direct share",
        "Decision impact",
        "Budget owner",
        "Willingness to pay",
      ],
    },
  },
  prospects: [
    /* ───────── Oman ───────── */
    prospect({
      id: "wujha",
      name: "Wujha Real Estate",
      country: "om",
      website: "https://www.wujha.com/",
      contact: notVerified(),
      verified: [],
      evidence: [
        {
          status: "attributed",
          text: "Muscat developer with a 15-project portfolio; Uptown Muscat planned in six phases — first phase Ivy Town (447 residences) launched May 2024; Central 7 commercial project.",
          source: "Company press release (Zawya) and Metropolitan coverage",
        },
        {
          status: "attributed",
          text: "Signed with a B2B consultancy to showcase projects in Egypt — an international buyer push.",
          source: "Invest-Gate",
        },
      ],
      opportunity:
        "A six-phase community selling to local and international buyers makes it reasonable to test whether each phase's enquiry outcomes and lost reasons inform how the next phase is marketed — and which buyer geography converts.",
      solution: "Phase-to-phase and buyer-geography learning for Uptown Muscat",
      pilotQuestion:
        "How enquiries from Egypt and other markets are recorded and whether outcomes reach marketing.",
      attributes: attrs({
        type: "Developer · Muscat",
        icp: "Primary",
        potential: "Very High",
        access: "High",
        whyNow: "Phased launches and an international showcase; no 2026-dated launch verified.",
        path: "Chair and CEO named in company press; contact path via official site (not machine-readable).",
        capability: "Portfolio learning · Commercial Feedback Loop",
      }),
      researchNotes: [
        "Official site is a JavaScript app — its content could not be machine-verified.",
      ],
      sources: [
        {
          label: "Zawya — Wujha unveils Uptown Muscat and Central 7",
          url: "https://www.zawya.com/en/press-release/companies-news/wujha-real-estate-development-has-unveiled-two-landmark-projects-iykag5rv",
        },
        {
          label: "Invest-Gate — Oman developer to showcase projects in Egypt",
          url: "https://invest-gate.me/news/oman-developer-inks-deal-with-b2b-consultancy-to-showcase-projects-in-egypt/",
        },
      ],
      priority: "early-pilot",
    }),
    prospect({
      id: "maysan-properties",
      name: "Maysan Properties",
      country: "om",
      website: "https://www.maysanproperties.com/",
      contact: [
        { kind: "phone", number: "+968 2449 7055" },
        { kind: "phone", label: "WhatsApp", number: "+968 9281 0622" },
        { kind: "email", address: "info@maysanproperties.com" },
      ],
      verified: [],
      evidence: [
        {
          status: "verified",
          text: "Projects listed: Maysan Square (Duqm), The Residences 1, Rose Village, Orchid Residences.",
          source: CHECKED,
        },
        {
          status: "attributed",
          text: "Maysan Square is a five-phase, 20-building business district within an ITC in the Duqm Special Economic Zone; a Muscat Hills plot agreement is also reported.",
          source: "Gulf Construction Online / OPAZ",
        },
      ],
      opportunity:
        "Selling a Duqm business-district ITC alongside Muscat residential projects suggests distinct buyer bases — worth testing whether outcome learning differs by location and buyer type.",
      solution: "Duqm vs Muscat buyer-outcome learning",
      pilotQuestion: "Current sales activity per project and whether lost reasons are recorded.",
      attributes: attrs({
        type: "Developer · Muscat & Duqm",
        icp: "Primary",
        potential: "High",
        access: "High",
        whyNow: "No strong public Why-Now trigger verified.",
        path: "CEO publicly profiled (Forbes Middle East); official phone, WhatsApp and email.",
        capability: "Commercial Feedback Loop · Buyer & Project Context (input)",
      }),
      sources: [
        {
          label: "OPAZ — first phase of Maysan Square Duqm",
          url: "https://opaz.gov.om/en/media-center/news/2021/launch-of-the-first-phase-of-maysan-square-duqm",
        },
      ],
      priority: "commercial",
    }),
    prospect({
      id: "al-abrar",
      name: "Al Abrar Real Estate",
      country: "om",
      website: "https://alabrarrealestate.com/",
      contact: { kind: "phone", label: "Phone / WhatsApp", number: "+968 7926 0007" },
      verified: [],
      evidence: [
        {
          status: "verified",
          text: "Founded 2008; promotes Hay Al Wafaa and invites enquiries to “schedule a viewing”.",
          source: CHECKED,
        },
        {
          status: "attributed",
          text: "Hay Al Wafa in Sultan Haitham City: 1,800 units in phases, first phase 375 units.",
          source: "Times of Oman",
        },
      ],
      opportunity:
        "A large phased community with viewing-led sales makes it reasonable to test whether viewing outcomes and lost reasons from phase one should shape marketing of later phases.",
      solution: "Phase-one viewing outcomes → later-phase marketing",
      pilotQuestion: "Whether viewing outcomes are recorded against the enquiry source.",
      attributes: attrs({
        type: "Developer · Sultan Haitham City",
        icp: "Primary",
        potential: "High",
        access: "High",
        whyNow: "Phase-one delivery reported for 2026 — later phases to market.",
        path: "Official phone / WhatsApp; part of a family business group (attributed).",
        capability: "Commercial Feedback Loop",
      }),
      researchNotes: [
        "Essentially one large community plus a reported Duqm MOU — multi-project fit to confirm.",
      ],
      sources: [
        {
          label: "Times of Oman — first phase of Hay Al Wafa launched",
          url: "https://timesofoman.com/article/142757-first-phase-of-hay-al-wafa-project-in-sultan-haitham-city-launched",
        },
      ],
      priority: "commercial",
    }),
    prospect({
      id: "leo-development",
      name: "LEO Development",
      country: "om",
      contact: notVerified(),
      verified: [],
      evidence: [
        {
          status: "attributed",
          text: "Launched Vistal at Al Mouj Muscat (Victoria Swarovski-endorsed branded residences) and signed with Rove for Rove Home Muscat Expressway; projects in Muscat and Duqm reported at $780m.",
          source: "Oman Observer, June–July 2026; TradeArabia",
        },
      ],
      opportunity:
        "Two differently positioned branded launches (luxury Vistal vs urban Rove Home) make it reasonable to test whether each brand attracts distinct buyers and which demand progresses.",
      solution: "Branded-launch buyer and demand-quality learning",
      pilotQuestion: "Official contact route, and whether sales are in-house or brokered.",
      flags: ["Official website not verified"],
      attributes: attrs({
        type: "Developer (UK-based) · Muscat & Duqm",
        icp: "Primary",
        potential: "High",
        access: "Medium",
        whyNow: "Rove partnership and new projects announced June 2026.",
        path: "No official contact found; access via announced partners not verified.",
        capability: "Negative Demand Intelligence · Commercial Feedback Loop",
      }),
      sources: [
        {
          label: "Oman Observer — LEO Development and Rove partnership",
          url: "https://www.omanobserver.om/article/1183810/business/leo-development-announces-strategic-partnership-with-rove",
        },
        {
          label: "TradeArabia — LEO unveils debut Rove project in Oman",
          url: "https://www.tradearabia.com/News/388916/UK-developer-LEO-unveils-debut-Rove-lifestyle-project-in-Oman/CONS",
        },
      ],
      priority: "commercial",
    }),
    prospect({
      id: "muriya",
      name: "Muriya",
      country: "om",
      website: "https://www.muriya.om/",
      contact: notVerified(),
      verified: [],
      evidence: [
        {
          status: "verified",
          text: "Presents “Freehold Property in Oman — Jebel Sifah & Hawana Salalah”.",
          source: CHECKED,
        },
        {
          status: "attributed",
          text: "Partnership of Orascom Development and OMRAN Group; Amazi residential phase at Hawana Salalah reported near completion for handover Q1 2027; hotel expansion planned.",
          source: "Oman Observer, September 2026",
        },
      ],
      opportunity:
        "Two coastal destinations selling freehold to international buyers make it reasonable to test whether outcome learning from one destination informs the other.",
      solution: "Cross-destination buyer learning",
      pilotQuestion:
        "How enquiries are handled across the two destinations and who owns marketing.",
      attributes: attrs({
        type: "Developer · Jebel Sifah & Hawana Salalah",
        icp: "Primary",
        potential: "High",
        access: "Medium",
        whyNow: "Amazi handover approaching; expansion announced September 2026.",
        path: "JV structure (Orascom / OMRAN) — decision distance likely longer; contacts not in site HTML.",
        capability: "Portfolio learning",
      }),
      sources: [
        {
          label: "Oman Observer — Muriya expansion",
          url: "https://www.omanobserver.om/article/1195551/business/tourism/muriya-plans-1000-room-hotel-expansion-across-oman",
        },
      ],
      priority: "commercial",
    }),
    prospect({
      id: "al-mouj-muscat",
      name: "Al Mouj Muscat",
      country: "om",
      website: "https://www.almouj.com/",
      contact: [
        { kind: "phone", label: "Toll-free", number: "800-77776" },
        { kind: "phone", label: "WhatsApp", number: "+968 2453 4444" },
        { kind: "email", address: "customerservice@almouj.com" },
      ],
      verified: [],
      evidence: [
        {
          status: "verified",
          text: "Seven residential projects named (e.g. Zunairah, Golf Beach Residences, Azura Beach Residences III & IV), with residency messaging.",
          source: CHECKED,
        },
        {
          status: "attributed",
          text: "Azura Beach Residences III and IV launched February 2026, described as the final chapter of its coastal residential offering; third-party branded projects (e.g. Vistal) launch inside Al Mouj.",
          source: "Industry coverage via web search; Oman Observer",
        },
      ],
      opportunity:
        "Several concurrent residential products inside one destination make it reasonable to test whether each product attracts distinct buyers — though a maturing pipeline may limit recurring launches.",
      solution: "Product-level demand-quality learning",
      pilotQuestion: "How many launches remain, and how outcomes are recorded per product.",
      attributes: attrs({
        type: "Master developer · Muscat",
        icp: "Primary",
        potential: "High",
        access: "Medium",
        whyNow: "Azura Beach Residences III & IV launched Feb 2026.",
        path: "Official toll-free, WhatsApp and email.",
        capability: "Commercial Feedback Loop",
      }),
      researchNotes: ["Red team: “final chapter” wording suggests fewer future coastal launches."],
      priority: "commercial",
    }),

    /* ───────── UAE ───────── */
    prospect({
      id: "imtiaz-developments",
      name: "Imtiaz Developments",
      country: "ae",
      website: "https://imtiaz.ae/",
      contact: [
        { kind: "phone", label: "Toll-free / WhatsApp", number: "+971 800 468429" },
        { kind: "email", address: "info@imtiaz.ae" },
      ],
      verified: [],
      evidence: [
        {
          status: "verified",
          text: "Serial launch brand: Cove by Imtiaz, Cove Editions I–6, Cove Grand, Cove Boulevard, Beach Walk Residence I & II, ENRE Residence.",
          source: CHECKED,
        },
        {
          status: "attributed",
          text: "40+ active projects; ranked among Dubai's top developers by sales and top four by number of launches.",
          source: "Gulf Business, 2026",
        },
      ],
      opportunity:
        "Successive editions of the same product line make it unusually testable whether demand quality and lost reasons from one edition should change how the next is marketed.",
      solution: "Edition-to-edition launch learning (Cove series)",
      pilotQuestion:
        "Whether in-house sales record lost reasons per edition, and broker vs direct share.",
      attributes: attrs({
        type: "Developer · Dubai",
        icp: "Primary",
        potential: "Very High",
        access: "Medium",
        whyNow: "Among Dubai's most frequent launchers (2026 ranking).",
        path: "Official toll-free, WhatsApp and email; leadership visible in company press.",
        capability: "Negative Demand Intelligence · Portfolio learning",
      }),
      sources: [
        {
          label: "Gulf Business — Imtiaz Developments (2026 list)",
          url: "https://www.gulfbusiness.com/en/2026/lists/top-50-iconic-companies-in-mena-region/imtiaz-developments/",
        },
      ],
      priority: "early-pilot",
    }),
    prospect({
      id: "ellington-properties",
      name: "Ellington Properties",
      country: "ae",
      website: "https://ellingtonproperties.ae/",
      contact: [
        { kind: "phone", label: "Toll-free", number: "+971 800 8288" },
        { kind: "phone", label: "Office", number: "+971 4 278 0888" },
        { kind: "phone", label: "WhatsApp", number: "+971 4 454 0823" },
      ],
      verified: [],
      evidence: [
        {
          status: "verified",
          text: "50+ design-led residential projects named; “Register Your Interest” and brochure forms.",
          source: CHECKED,
        },
        {
          status: "attributed",
          text: "Agreement with RAK Properties for a beachfront project on Hayat Island, Ras Al Khaimah — entry into a new emirate.",
          source: "Industry coverage via web search",
        },
      ],
      opportunity:
        "Entering Ras Al Khaimah with a design-led brand built in Dubai makes it reasonable to test whether Dubai buyer learning transfers — or whether RAK demand behaves differently.",
      solution: "Dubai → RAK buyer-transfer learning",
      pilotQuestion:
        "Whether registered-interest leads are tracked to viewing / reservation outcomes.",
      attributes: attrs({
        type: "Developer · Dubai & RAK",
        icp: "Primary",
        potential: "Very High",
        access: "Medium",
        whyNow: "New-emirate expansion (RAK) — date not verified.",
        path: "Official toll-free, office and WhatsApp lines.",
        capability: "Portfolio learning · Commercial Feedback Loop",
      }),
      priority: "early-pilot",
    }),
    prospect({
      id: "danube-properties",
      name: "Danube Properties",
      country: "ae",
      website: "https://danubeproperties.com/",
      contact: [
        { kind: "phone", label: "Phone / WhatsApp", number: "+971 800 5757" },
        { kind: "email", label: "Sales", address: "enquiry@danubeproperties.ae" },
      ],
      verified: [],
      evidence: [
        {
          status: "verified",
          text: "35+ projects; “1% monthly payment plan … up to 80 months”; enquiry form asks budget, unit type and purchase timeline.",
          source: CHECKED,
        },
      ],
      opportunity:
        "A payment-plan-led proposition plus a form that captures budget and timeline makes it reasonable to test whether some campaigns attract demand that later fails on budget or timing.",
      solution: "Budget / timeline-fit negative-demand analysis",
      pilotQuestion: "Whether captured budget / timeline are joined to outcomes and campaigns.",
      attributes: attrs({
        type: "Developer · Dubai",
        icp: "Primary",
        potential: "Very High",
        access: "Low",
        whyNow: "Recurring launches (e.g. Serenz) — dates not verified.",
        path: "Official sales email and toll-free line; large brand — decision distance likely long.",
        capability: "Negative Demand Intelligence",
      }),
      priority: "commercial",
    }),
    prospect({
      id: "samana-developers",
      name: "SAMANA Developers",
      country: "ae",
      website: "https://samanadevelopers.com/",
      contact: [
        { kind: "phone", label: "Toll-free", number: "+971 800 726262" },
        { kind: "phone", label: "WhatsApp", number: "+971 56 520 4129" },
        { kind: "email", address: "clientrelations@samanadevelopers.com" },
      ],
      verified: [],
      evidence: [
        {
          status: "verified",
          text: "30+ SAMANA projects; one prominent proposition: “Pay just 20% now and 80% on handover”.",
          source: CHECKED,
        },
        {
          status: "attributed",
          text: "Ocean Pearl 1 and 2 on Dubai Islands reported sold out in two hours.",
          source: "TravelDailyNews",
        },
      ],
      opportunity:
        "A useful red-team case: where launches sell out, test whether demand-quality learning matters at all — and whether it matters more for slower projects in the same portfolio.",
      solution: "Fast vs slow project demand-quality comparison",
      pilotQuestion: "Which projects sell slowly, and whether their lost reasons differ.",
      attributes: attrs({
        type: "Developer · Dubai",
        icp: "Primary",
        potential: "High",
        access: "Medium",
        whyNow: "Frequent launches; sell-outs may reduce urgency.",
        path: "Official toll-free, WhatsApp and client-relations email.",
        capability: "Negative Demand Intelligence",
      }),
      sources: [
        {
          label: "TravelDailyNews — SAMANA waterfront projects sell out",
          url: "https://www.traveldailynews.com/real-estate/samana-developers-039-first-waterfront-projects-sell-out-in-just-two-hours/",
        },
      ],
      priority: "commercial",
    }),
    prospect({
      id: "iman-developers",
      name: "IMAN Developers",
      country: "ae",
      website: "https://imandevelopers.com/",
      contact: [
        { kind: "phone", number: "800 4626" },
        { kind: "email", address: "customerservice@imandevelopers.com" },
      ],
      verified: [],
      evidence: [
        {
          status: "verified",
          text: "18 projects named, many in an Oxford-branded series (Oxford Residence, Terraces, Gardens, Cove…); enquiry form captures property type.",
          source: CHECKED,
        },
      ],
      opportunity:
        "A branded series in one community makes it reasonable to test whether outcomes from earlier Oxford projects should change positioning of later ones.",
      solution: "Series learning within one community",
      pilotQuestion: "Sales structure and how outcomes are recorded.",
      attributes: attrs({
        type: "Developer · Dubai",
        icp: "Primary",
        potential: "High",
        access: "Medium",
        whyNow: "No strong public Why-Now trigger verified.",
        path: "Official phone and customer-service email.",
        capability: "Portfolio learning",
      }),
      priority: "commercial",
    }),
    prospect({
      id: "binghatti",
      name: "Binghatti",
      country: "ae",
      website: "https://www.binghatti.com/",
      contact: { kind: "phone", label: "Toll-free / WhatsApp", number: "+971 800 15" },
      verified: [],
      evidence: [
        {
          status: "verified",
          text: "Branded luxury (Bugatti Residences, Mercedes-Benz Places, Burj Binghatti Jacob & Co) alongside Binghatti City.",
          source: CHECKED,
        },
        {
          status: "attributed",
          text: "Launch events held abroad (e.g. Istanbul, Giza) for Dubai projects.",
          source: "Industry coverage via web search",
        },
      ],
      opportunity:
        "Ultra-luxury branded and broader-market products, marketed internationally, make buyer-segment demand-quality learning relevant — at enterprise scale.",
      solution: "Segment-level demand quality across branded and core lines",
      pilotQuestion: "Accessible marketing decision makers and procurement route.",
      attributes: attrs({
        type: "Developer · Dubai",
        icp: "Primary",
        potential: "Strategic",
        access: "Stretch",
        whyNow: "International launch events.",
        path: "Official toll-free line only; large organisation.",
        capability: "Negative Demand Intelligence",
      }),
      priority: "strategic-stretch",
    }),
    prospect({
      id: "driven-properties",
      name: "Driven Properties",
      country: "ae",
      website: "https://www.drivenproperties.com/",
      contact: [
        { kind: "phone", label: "WhatsApp", number: "+971 800 776655" },
        { kind: "email", label: "Abu Dhabi", address: "info.auh@drivenproperties.com" },
      ],
      verified: [],
      evidence: [
        {
          status: "verified",
          text: "Off-plan projects across Dubai and Abu Dhabi developers; a “For Developers” offering; daily transaction data pages.",
          source: CHECKED,
        },
        {
          status: "verified",
          text: "Contact addresses for operations in Spain, Japan and Egypt published on the site.",
          source: CHECKED,
        },
      ],
      opportunity:
        "A brokerage marketing many developers' projects to international buyers sees the outcome its own agents record — a credible place to test multi-developer negative-demand learning.",
      solution: "Multi-developer, multi-geography demand-quality learning",
      pilotQuestion:
        "Whether agent outcomes and lost reasons are recorded per campaign and project.",
      attributes: attrs({
        type: "Off-plan brokerage · UAE + international",
        icp: "Secondary",
        potential: "Very High",
        access: "Medium",
        whyNow: "International office footprint — expansion date not verified.",
        path: "Official WhatsApp and regional emails.",
        capability: "Negative Demand Intelligence · Sales-to-Marketing Intelligence",
      }),
      priority: "early-pilot",
    }),
    prospect({
      id: "allsopp-allsopp",
      name: "Allsopp & Allsopp",
      country: "ae",
      website: "https://www.allsoppandallsopp.com/",
      contact: notVerified("Official phone or email (a WhatsApp channel is linked)"),
      verified: [],
      evidence: [
        {
          status: "verified",
          text: "“Off Plan Investments” section; founded 2008; describes “hundreds of professionally trained, industry-regulated property experts” (company's description).",
          source: CHECKED,
        },
      ],
      opportunity:
        "A large agent team selling off-plan for multiple developers makes it reasonable to test whether recurring agent-heard objections should change project marketing.",
      solution: "Agent objections → off-plan messaging tests",
      pilotQuestion: "How agent feedback is captured and who in marketing sees it.",
      attributes: attrs({
        type: "Brokerage · Dubai",
        icp: "Secondary",
        potential: "High",
        access: "Medium",
        whyNow: "No strong public Why-Now trigger verified.",
        path: "WhatsApp channel only in site HTML.",
        capability: "Sales-to-Marketing Intelligence",
      }),
      priority: "commercial",
    }),
    prospect({
      id: "betterhomes",
      name: "betterhomes",
      country: "ae",
      website: "https://www.bhomes.com/",
      contact: notVerified(),
      verified: [],
      evidence: [
        {
          status: "verified",
          text: "“40 years of expertise”; off-plan sections by area; market commentary (“off-plan held the market steady”).",
          source: CHECKED,
        },
      ],
      opportunity:
        "A long-established brokerage publishing its own market reading makes it reasonable to test whether its outcome data could inform which off-plan areas and buyer types to market.",
      solution: "Area-level off-plan demand-quality learning",
      pilotQuestion: "Data ownership between head office and agents.",
      attributes: attrs({
        type: "Brokerage · UAE",
        icp: "Secondary",
        potential: "High",
        access: "Low",
        whyNow: "No strong public Why-Now trigger verified.",
        path: "No contact found in site HTML.",
        capability: "Commercial Feedback Loop",
      }),
      priority: "commercial",
    }),

    /* ───────── Qatar ───────── */
    prospect({
      id: "qatar-sothebys-realty",
      name: "Qatar Sotheby's International Realty",
      country: "qa",
      website: "https://www.qatarsothebysrealty.com/",
      contact: { kind: "phone", label: "WhatsApp", number: "+974 6661 5818" },
      verified: [],
      evidence: [
        {
          status: "verified",
          text: "Luxury properties for sale and rent, e.g. The Pearl and West Bay.",
          source: CHECKED,
        },
        {
          status: "attributed",
          text: "Operated by Qatar Real Estate Partners, distributing Qatari Diar projects and brokering for other developers.",
          source: "Business press, via web search",
        },
      ],
      opportunity:
        "Distributing a sovereign developer's projects plus others makes it reasonable to test whether agent outcomes inform which projects to market to which freehold buyers.",
      solution: "Agent outcomes → project-to-buyer matching for marketing",
      pilotQuestion: "Volume of developer projects marketed and how outcomes are recorded.",
      attributes: attrs({
        type: "Brokerage · Doha",
        icp: "Secondary",
        potential: "High",
        access: "Medium",
        whyNow: "Freehold areas expanded in 2026.",
        path: "Official WhatsApp.",
        capability: "Sales-to-Marketing Intelligence",
      }),
      priority: "commercial",
    }),
    prospect({
      id: "udc-qatar",
      name: "United Development Company (UDC)",
      country: "qa",
      website: "https://udcqatar.com/",
      contact: { kind: "email", address: "info@udcqatar.com" },
      verified: [],
      evidence: [
        {
          status: "verified",
          text: "Master developer of The Pearl Island and Gewan Island; publishes quarterly results.",
          source: CHECKED,
        },
      ],
      opportunity:
        "Two island communities make cross-community buyer learning relevant — but as a listed master developer it is an enterprise motion.",
      solution: "Cross-community buyer learning (enterprise)",
      pilotQuestion: "Whether residential sales are in-house and who owns marketing.",
      attributes: attrs({
        type: "Master developer · Doha",
        icp: "Primary",
        potential: "Strategic",
        access: "Low",
        whyNow: "No strong public Why-Now trigger verified.",
        path: "General email; listed-company channels.",
        capability: "Portfolio learning",
      }),
      priority: "strategic-stretch",
    }),
    prospect({
      id: "qatari-diar",
      name: "Qatari Diar",
      country: "qa",
      website: "https://www.qataridiar.com/",
      contact: [{ kind: "phone", label: "WhatsApp (as linked)", number: "6600 8088" }],
      verified: [],
      evidence: [
        { status: "verified", text: "Features Lusail and other projects.", source: CHECKED },
        {
          status: "attributed",
          text: "Owned by Qatar Investment Authority; residential towers at The Seef, Lusail, with freehold ownership.",
          source: "Business press and Lusail.com coverage, via web search",
        },
      ],
      opportunity:
        "Large residential portfolio — learning value is high but access is enterprise / sovereign.",
      solution: "Portfolio outcome learning (sovereign scale)",
      pilotQuestion: "Accessible decision makers and procurement route.",
      attributes: attrs({
        type: "Sovereign developer · Lusail",
        icp: "Primary",
        potential: "Strategic",
        access: "Stretch",
        whyNow: "Freehold expansion 2026.",
        path: "WhatsApp link on site shows no country code (66008088).",
        capability: "Portfolio learning",
      }),
      priority: "strategic-stretch",
    }),

    /* ───────── Saudi Arabia ───────── */
    prospect({
      id: "retal",
      name: "Retal Urban Development",
      country: "sa",
      website: "https://retal.com.sa/",
      contact: [
        { kind: "phone", label: "Toll-free", number: "800 303 0888" },
        { kind: "phone", label: "WhatsApp", number: "+966 800 303 0888" },
      ],
      verified: [],
      evidence: [
        {
          status: "verified",
          text: "12 residential projects; “Register Your Interest” form captures city, lead source and channel.",
          source: CHECKED,
        },
        {
          status: "attributed",
          text: "June 2026: SAR 1.9bn Almalqa fund where Retal oversees marketing and sales; May 2026: SAR 3.1bn development in Oman.",
          source: "Enterprise AM",
        },
      ],
      opportunity:
        "Already capturing lead source and channel at registration makes it unusually feasible to test whether that source is joined to outcomes — across Riyadh, the Eastern Province and a new Oman market.",
      solution: "Lead source → outcome learning across regions",
      pilotQuestion: "Whether captured lead source is linked to downstream outcomes today.",
      attributes: attrs({
        type: "Developer · Riyadh, Eastern Province (+ Oman)",
        icp: "Primary",
        potential: "Very High",
        access: "Low",
        whyNow: "New Riyadh fund (June 2026) and Oman expansion (May 2026).",
        path: "Official toll-free / WhatsApp; listed-company channels.",
        capability: "Commercial Feedback Loop · Outcome Connector",
      }),
      sources: [
        {
          label: "Enterprise AM — Retal Riyadh mixed-use fund",
          url: "https://enterpriseam.com/ksa/2026/06/04/retal-takes-over-sar-1-9-bn-riyadh-mixed-use/",
        },
        {
          label: "Enterprise AM — Retal goes regional with Omani development",
          url: "https://enterpriseam.com/ksa/2026/05/12/retal-goes-regional-with-sar-3-1-bn-omani-development/",
        },
      ],
      priority: "commercial",
    }),
    prospect({
      id: "rafal",
      name: "Rafal Real Estate",
      country: "sa",
      website: "https://www.rafal.com.sa/",
      contact: { kind: "email", address: "info@rafal.com.sa" },
      verified: [],
      evidence: [
        {
          status: "verified",
          text: "Nine projects named (e.g. Tilal Khuzam, Alegria, Burj Rafal); enquiry form.",
          source: CHECKED,
        },
      ],
      opportunity:
        "A mix of tower and community projects in Riyadh makes it reasonable to test whether each project type needs different qualification and messaging.",
      solution: "Project-type demand-quality learning",
      pilotQuestion: "Which projects are in active sale and how enquiries are qualified.",
      attributes: attrs({
        type: "Developer · Riyadh",
        icp: "Primary",
        potential: "High",
        access: "Medium",
        whyNow: "No strong public Why-Now trigger verified.",
        path: "Official email only.",
        capability: "Commercial Feedback Loop",
      }),
      priority: "commercial",
    }),
    prospect({
      id: "dar-al-arkan",
      name: "Dar Al Arkan",
      country: "sa",
      website: "https://www.daralarkan.com/",
      contact: [
        { kind: "phone", label: "Toll-free", number: "800 123 3333" },
        { kind: "phone", label: "WhatsApp", number: "+966 800 123 3333" },
        { kind: "email", address: "info@alarkan.com" },
      ],
      verified: [],
      evidence: [
        {
          status: "verified",
          text: "Official toll-free, WhatsApp and email channels.",
          source: CHECKED,
        },
        {
          status: "attributed",
          text: "Through its international arm, projects in Qatar (Les Vagues, Qetaifan Island North) and Oman (AIDA, with OMRAN).",
          source: "Dar Global / PR Newswire",
        },
      ],
      opportunity:
        "Selling across Saudi Arabia, Qatar and Oman makes cross-market learning relevant — at enterprise scale.",
      solution: "Cross-market outcome learning (enterprise)",
      pilotQuestion: "Accessible marketing decision makers and procurement route.",
      attributes: attrs({
        type: "Developer · Saudi + GCC",
        icp: "Primary",
        potential: "Strategic",
        access: "Stretch",
        whyNow: "Multi-country launches.",
        path: "Official toll-free / WhatsApp / email; large listed group.",
        capability: "Portfolio learning",
      }),
      sources: [
        {
          label: "Dar Global — Les Vagues by Elie Saab, Qetaifan Island North",
          url: "https://darglobal.co.uk/dar-al-arkan-global-launches-sales-of-the-most-premium-residential-address-in-qatar-les-vagues-by-elie-saab-with-views-of-lusail-skyline-and-the-sea-at-qetaifan-island-north",
        },
      ],
      priority: "strategic-stretch",
    }),
  ],
};
