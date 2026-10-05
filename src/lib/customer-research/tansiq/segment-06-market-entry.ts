import type { Prospect, Segment } from "../types";

// Segment 06 — GCC Advisory-Led Market Entry & Corporate Services Firms.
//
// Research pass: 5 October 2026 (market, government substitutes, competitors,
// features, data, prospects, red team) completed before implementation.
//
// Evidence rules (as Segment 05):
//   - `evidence` items are "verified" (official website, read 5 October 2026)
//     or "attributed" (named third-party source, linked in `sources`).
//   - Contacts only from official sites' raw HTML. Unknowns stay unknown.
//   - No scores, probabilities, client volumes beyond the firms' own public
//     claims (labelled as such), CRM stacks, budgets or internal problems.
//   - No Tansiq capability is "verified current": the product is not in this
//     repository. Everything below is proposed.
//   - Candidates named in the brief that could not be identified from an
//     official source (HMA, KARO Oman, Shahin's Consultancy, ACT Corporate
//     Services, CSP Group) are excluded rather than guessed.

const CHECKED = "official website, checked 5 October 2026";

const notVerified = (what = "Official phone or email") =>
  ({ kind: "website", note: `${what} not verified in this research.` }) as const;

const prospect = (p: Prospect) => p;

const attrs = (o: {
  type: string;
  icp: "Primary" | "Secondary";
  potential: "Very High" | "High" | "Strategic";
  access: "High" | "Medium" | "Low" | "Stretch";
  service: string;
  whyNow: string;
  path: string;
  feature: string;
}) => [
  { label: "Type", value: o.type },
  { label: "ICP", value: `${o.icp} ICP` },
  { label: "Customer potential", value: o.potential },
  { label: "Early-sales accessibility", value: o.access },
  { label: "Service model", value: o.service },
  { label: "Why now", value: o.whyNow },
  { label: "Decision-maker path", value: o.path },
  { label: "Relevant feature", value: o.feature },
];

export const SEGMENT_06_MARKET_ENTRY: Segment = {
  id: "06",
  number: "06",
  name: "GCC Advisory-Led Market Entry & Corporate Services Firms",
  status: "Conditional",
  statusList: [
    { label: "Segment verdict", value: "Conditional" },
    { label: "Research & Strategy", value: "Ready" },
    { label: "Market validation", value: "Pending" },
    { label: "Recommended next step", value: "Consultation Intelligence Audit" },
  ],
  heroMeta:
    "10 firms after verification · Saudi Arabia 4 · Oman 3 · UAE 2 · Qatar 1 · research 5 October 2026",
  heroCta: { href: "#decision", label: "Read the executive decision" },
  solutionLabel: "Tansiq opportunity · proposed",
  view: {
    hideScore: true,
    priorityLabel: "Classification",
    priorityFilter: { label: "Early pilot", values: ["early-pilot"] },
    attributeFilter: { label: "Primary ICP", attribute: "ICP", value: "Primary" },
    solutionColumn: "Tansiq opportunity",
    opportunityLabel: "Hidden problem hypothesis · to validate",
    pilotQuestionLabel: "Validation required · not knowable from public information",
    prospectsIntro:
      "10 firms survived verification from a wider discovery set. Several names supplied by earlier research could not be identified from an official source and were excluded. Each record separates observed evidence, the company-specific hypothesis, the proposed Tansiq opportunity and what still needs validating. No scores or rankings.",
  },
  nav: [
    { href: "#decision", label: "Decision" },
    { href: "#red-team", label: "Red team" },
    { href: "#prospects", label: "Prospects" },
    { href: "#features", label: "Features" },
    { href: "#pilot-design", label: "Pilot" },
  ],
  summary: [
    "The opportunity is not AI marketing for business-setup firms. The hypothesis: what advisers learn in consultations — the gap between what prospects ask for and what they actually need — may not systematically return to marketing.",
    "The research supports a Conditional verdict. Government platforms are absorbing transactional setup, which pushes private value toward advisory work — good for the thesis. But consultation data may be informal, sensitive and costly to capture, and enterprise conversation-intelligence tools already market insights to marketing teams.",
  ],
  blocks: [
    /* ═════════ before the methodology ═════════ */
    {
      id: "decision",
      placement: "before",
      eyebrow: "Executive decision",
      title: "Conditional — the thesis lives or dies on consultation data",
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
                "Conditional. Strong conceptual fit and high reuse value; data access and adviser workflow friction are unproven.",
            },
            {
              term: "Why",
              detail:
                "Advisory-first firms publicly sell consultations, scoping and eligibility checks — the stated-need vs actual-need gap is visible in their own messaging. Government digitalisation moves value toward advice. But the intelligence sits in consultants' heads, notes and calls, which may not be capturable without new reporting.",
            },
            {
              term: "Final primary ICP",
              detail:
                "Founder-led, advisory-first market-entry and corporate-services firms that book consultations, scope work individually and keep clients through compliance, residency or accounting services.",
            },
            {
              term: "Best initial market",
              detail:
                "Saudi Arabia for problem richness (new investment-registration regime, regional HQ and residency questions); Oman for an accessible first pilot. UAE only for advisory-led niches — transactional setup there is crowded and digitised.",
            },
            {
              term: "Best initial customer type",
              detail:
                "Boutique market-entry advisers where the founder still runs or reviews consultations — short decision distance.",
            },
            {
              term: "Best buying trigger",
              detail:
                "A regulatory or programme change driving new enquiry types (e.g. Saudi registration replacing licences), expansion into another GCC market, or a new service line.",
            },
            {
              term: "Strongest hidden problem",
              detail:
                "Stated need ≠ actual need: prospects arrive asking for “a company” while consultations reveal banking, residency, eligibility or sector questions that marketing may not address beforehand.",
            },
            {
              term: "Strongest Tansiq opportunity",
              detail:
                "Consultation-to-Marketing Intelligence: recurring stated-vs-actual gaps and misaligned enquiries turned into content and campaign hypotheses.",
            },
            {
              term: "Most important platform capability",
              detail:
                "Expert Conversation Intelligence — learning from expert-led conversations for marketing — reusable for clinics (Segment 02), legal and other advisory businesses.",
            },
            {
              term: "Biggest risk",
              detail:
                "Workflow / data failure: consultants will not add reporting, and existing notes are too thin or sensitive to use.",
            },
            {
              term: "First thing to validate",
              detail:
                "Whether one firm's existing enquiry forms, CRM fields or consultation notes capture stated intent and outcome consistently enough to analyse — without new reporting.",
            },
            {
              term: "What would invalidate the thesis",
              detail:
                "No usable consultation signal without new reporting; firms already feed consultation learning into content effectively; or the insights do not change any content or campaign decision.",
            },
          ],
        },
      ],
    },
    {
      id: "red-team",
      placement: "before",
      eyebrow: "Red team · evidence for and against",
      title: "What the research found",
      status: "supported",
      intro:
        "Observed facts from government, vendor and company sources. Each one moved the verdict.",
      tone: "light",
      content: [
        {
          kind: "columns",
          columns: [
            {
              label: "For · government digitalisation",
              title: "Transactional setup is being absorbed",
              body: "UAE Basher sets up a company online in about 15 minutes across 18 government departments; Saudi Arabia replaced MISA licences with registration (2025); Qatar's Single Window spans 18 agencies; Oman's Invest Easy registers online. Private value moves to complex advice.",
              status: "supported",
              tone: "positive",
            },
            {
              label: "For · public messaging",
              title: "The stated-vs-actual gap is visible",
              body: "Firms publicly sell scoping discussions, eligibility-led pathways and readiness assessments — and one lists common entry mistakes (e.g. registering before confirming eligibility, underestimating banking requirements).",
              status: "supported",
              tone: "positive",
            },
            {
              label: "Against · conversation intelligence",
              title: "Conversation → insight is partly productised",
              body: "Gong markets objection tracking, themes and messaging insight to marketing teams; HubSpot's Deal Loss Agent finds loss patterns. Differentiation must be marketing learning for advisory SMEs, not summaries.",
              status: "supported",
              tone: "negative",
            },
            {
              label: "Against · data reality",
              title: "Consultation signal may be informal",
              body: "Consultations run by phone, video, WhatsApp and in person; notes may be thin and legally or commercially sensitive. No public evidence shows how any firm records them.",
              status: "inferred",
              tone: "negative",
            },
            {
              label: "Against · market structure",
              title: "Fragmented, often small firms",
              body: "Discovery returned many small and transactional providers; advisory-first firms are fewer. Willingness to pay for marketing intelligence is unverified.",
              status: "inferred",
              tone: "accent",
            },
            {
              label: "Against · lifecycle",
              title: "Renewal tracking is already offered",
              body: "Firms advertise their own document-management, renewal-tracking and relationship-manager services — lifecycle intelligence would duplicate them.",
              status: "supported",
              tone: "accent",
            },
          ],
        },
      ],
    },
    {
      id: "icp",
      placement: "before",
      eyebrow: "ICP",
      title: "Advisory-first, consultation-led, relationship-based",
      tone: "muted",
      content: [
        {
          kind: "columns",
          columns: [
            {
              label: "Primary ICP",
              title: "Advisory-led market-entry firms",
              tone: "accent",
              items: [
                "Consultation or scoping before execution",
                "Multiple service lines (setup, banking, residency, tax, compliance)",
                "International clients across sectors",
                "Ongoing services after setup",
                "Founder-led or short decision distance",
              ],
            },
            {
              label: "Secondary ICP",
              title: "Scaled formation providers",
              tone: "positive",
              items: [
                "High enquiry volume with free consultations",
                "Downstream services (renewals, bookkeeping, tax)",
                "Enough qualification complexity to learn from",
              ],
            },
            {
              label: "Negative ICP",
              title: "Low learning value",
              tone: "negative",
              items: [
                "Pure document / PRO processing",
                "Tiny generic setup shops",
                "Government formation portals",
                "Big professional-services networks (benchmark only)",
                "Firms without verifiable official presence",
              ],
            },
          ],
        },
        {
          kind: "flow",
          label: "Typical client journey",
          steps: [
            "Market Entry",
            "Structure / Setup",
            "Licensing",
            "Residency / Workforce",
            "Banking Readiness",
            "Tax / Accounting",
            "Compliance",
            "Renewal",
            "Expansion",
          ],
        },
      ],
    },
    {
      id: "loop",
      placement: "before",
      eyebrow: "Core intelligence loop",
      title: "Turn consultation reality into marketing learning",
      status: "hypothesis",
      tag: "Positioning hypothesis — not a current capability",
      tone: "light",
      content: [
        {
          kind: "cycle",
          steps: [
            "Pre-Consultation Intent",
            "Consultation Discovery",
            "Actual Need",
            "Service Fit",
            "Outcome",
            "Reason",
            "Marketing Learning",
            "Next Content / Acquisition Decision",
          ],
          lossAfter: [2, 5],
          lossLabel: "Where consultation learning may fail to reach marketing",
          loopBack: "Back to pre-consultation messaging",
        },
        {
          kind: "quotes",
          items: [
            "Do not replace the expert. Learn from what the expert discovers.",
            "Do not create another reporting workflow. Capture intelligence from workflows that already exist.",
          ],
        },
      ],
    },
    {
      id: "hidden-problems",
      placement: "before",
      eyebrow: "Hidden problems · after red team",
      title: "Six hypotheses — three survive as product problems",
      status: "hypothesis",
      intro: "None is claimed for a specific firm without internal evidence.",
      tone: "muted",
      collapsible: true,
      content: [
        {
          kind: "columns",
          columns: [
            {
              label: "Strongest",
              title: "Stated need ≠ actual need (pre-sales knowledge gap)",
              body: "Consultations may repeatedly correct the same misunderstandings — structure, banking, residency, eligibility, timelines — that marketing could address earlier.",
              status: "hypothesis",
              tone: "accent",
            },
            {
              label: "Retained",
              title: "Consultation intelligence loss",
              body: "Questions, objections and decision criteria heard by advisers may not return to marketing in reusable form.",
              status: "hypothesis",
            },
            {
              label: "Retained",
              title: "Misaligned demand",
              body: "Wrong-jurisdiction, wrong-service, not-ready or redirected enquiries may reveal messaging, targeting or emerging-demand signals.",
              status: "hypothesis",
            },
            {
              label: "Downgraded · input",
              title: "Intent / service fit",
              body: "Pathway guidance is offered by government portals and firms' own tools — useful context, not a differentiator. Never legal or tax advice.",
              status: "inferred",
              tone: "negative",
            },
            {
              label: "Research further",
              title: "Regulatory change → marketing lag",
              body: "Major changes in 2023–2025 (e.g. Saudi registration regime) can date marketing assets — but monitoring needs human review.",
              status: "hypothesis",
            },
            {
              label: "Downgraded",
              title: "Lifecycle blindness",
              body: "Firms already advertise renewal tracking and relationship managers; this mostly duplicates CRM and their own services.",
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
      title: "Two features to validate, one platform bet, three downgrades",
      status: "hypothesis",
      tag: "All proposed — no Tansiq capability verified as current",
      tone: "light",
      content: [
        {
          kind: "matrix",
          rows: [
            "Final classification",
            "Whitespace",
            "Who uses it",
            "Decision improved",
            "Current workaround",
            "Adoption risk",
            "Must validate",
          ],
          columns: [
            {
              label: "Tier 1 · merged",
              title: "Consultation-to-Marketing Intelligence (incl. knowledge gaps)",
              status: "hypothesis",
              cells: [
                "New product opportunity",
                "Partial — Gong-type tools extract themes for enterprise sales; marketing learning for advisory SMEs is not clearly served",
                "Marketing / growth lead; founder",
                "Which content, FAQs and landing pages to create or fix before consultations",
                "Consultant memory, CRM notes, content meetings",
                "Consultants won't add reporting; notes too thin",
                "That existing notes or forms show recurring stated-vs-actual gaps",
              ],
            },
            {
              label: "Tier 1",
              title: "Misaligned Demand Intelligence",
              status: "hypothesis",
              cells: [
                "New product opportunity",
                "Partial — CRM lost-reason reports exist; wrong-fit / redirected by campaign is rarely structured",
                "Marketing; founder",
                "Which campaigns or pages attract the wrong jurisdiction, service or stage",
                "Anecdotes, CRM lost reasons",
                "Requires an outcome + reason per enquiry",
                "That a simple outcome / reason field exists or can be added in one click",
              ],
            },
            {
              label: "Platform enabler",
              title: "Expert Conversation Intelligence",
              status: "hypothesis",
              cells: [
                "Platform enabler — shared with clinics and other expert-led segments",
                "Partial — enterprise conversation intelligence exists; marketing learning from expert notes / summaries is the bet",
                "Tansiq (shared layer)",
                "Every expert-conversation-based recommendation",
                "Gong, call recorders, CRM conversation features",
                "Privacy; channel fragmentation (WhatsApp, in person)",
                "That approved summaries or notes suffice — no recordings",
              ],
            },
            {
              label: "Downgraded · input",
              title: "Investor Intent Context",
              status: "inferred",
              cells: [
                "Supporting input only",
                "Commoditised as recommendation (government portals, firms' tools)",
                "Marketing (setup)",
                "Interpreting enquiries correctly",
                "Enquiry forms, consultation booking questions",
                "Drifting into legal / jurisdiction advice",
                "Minimum intent fields on existing forms",
              ],
            },
            {
              label: "Research further",
              title: "Regulatory Change → Marketing Asset Impact",
              status: "hypothesis",
              cells: [
                "Strategic exploration → human-review support at most",
                "Not enough evidence",
                "Marketing + specialist reviewer",
                "Which published assets may need review after a change",
                "Manual content audits",
                "Liability; mostly non-machine-readable official sources",
                "Whether firms value a review-flag list enough to maintain topic mapping",
              ],
            },
            {
              label: "Do not build",
              title: "Lifecycle Opportunity Intelligence",
              status: "inferred",
              cells: [
                "Rejected for now",
                "Commoditised — CRM, renewal tracking, firms' own relationship managers",
                "—",
                "Upsell timing",
                "Firms' renewal systems, CRM automation",
                "Duplicates CRM",
                "—",
              ],
            },
          ],
        },
      ],
      note: "Rejected outright: setup advisor, jurisdiction recommender, requirements / licence guide, legal or tax AI, document processing, CRM, pipeline, lead scoring, generic chatbot, conversation summaries.",
    },
    {
      id: "government",
      placement: "after",
      eyebrow: "Government digitalisation test",
      title: "As setup goes self-service, value moves to advice",
      status: "supported",
      tone: "muted",
      collapsible: true,
      content: [
        {
          kind: "columns",
          columns: [
            {
              label: "UAE",
              title: "Basher",
              body: "Online company setup in about 15 minutes, connected to 18 federal and local departments, with a licence, chamber, establishment-card and work-permit bundle.",
            },
            {
              label: "Saudi Arabia",
              title: "Investment Law & MISA registration",
              body: "Implementing regulations issued February 2025 replace the MISA licence with registration and a National Investor Register; annual declaration reconfirmation.",
            },
            {
              label: "Qatar",
              title: "Single Window",
              body: "MOCI platform across 18 agencies; simple registrations can complete within hours; services expanded June 2023.",
            },
            {
              label: "Oman",
              title: "Invest Easy / Oman Business Platform",
              body: "Online registration with facial-recognition KYC; up to 100% foreign ownership in most activities under the 2020 Foreign Capital Investment Law.",
            },
          ],
        },
        {
          kind: "pairs",
          items: [
            {
              term: "Conclusion",
              detail:
                "Confirmed: pure transactional formation is the most exposed. Advisory value concentrates in complex cases — banking readiness, residency, sector eligibility, cross-border structure, ongoing compliance — which is where consultation intelligence is richest.",
            },
          ],
        },
      ],
    },
    {
      id: "data",
      placement: "after",
      eyebrow: "Data, workflow & privacy",
      title: "Minimum data — captured from what already exists",
      status: "inferred",
      tone: "light",
      collapsible: true,
      content: [
        {
          kind: "flow",
          label: "Minimum data model (to test)",
          steps: [
            "Lead Source",
            "Stated Intent",
            "Consultation Topic",
            "Actual Need / Fit",
            "Outcome",
            "Reason",
          ],
        },
        {
          kind: "matrix",
          rows: ["Required", "Useful", "Optional", "Likely sources", "Risk"],
          columns: [
            {
              label: "Tier 1",
              title: "Consultation-to-Marketing",
              cells: [
                "Stated intent (form / booking) + consultation topic or short note",
                "Approved consultation summary, actual-need tag",
                "Sector, origin country",
                "Booking forms, CRM notes, approved summaries",
                "Notes inconsistent; client-confidential content",
              ],
            },
            {
              label: "Tier 1",
              title: "Misaligned Demand",
              cells: [
                "Lead source + outcome (won / lost / redirected / not ready / wrong fit) + reason",
                "Service requested vs service fit",
                "Jurisdiction asked vs advised",
                "CRM stages, one-click tags, spreadsheet export",
                "Outcome not recorded for free consultations",
              ],
            },
          ],
        },
        {
          kind: "list",
          label: "Privacy requirements (specialist review needed)",
          items: [
            "Data minimisation — no client legal files",
            "Approved data sources only",
            "Role-based access",
            "Audit history",
            "Retention controls",
            "Integration security",
          ],
        },
      ],
      note: "Workflow principle: if advisers must fill long forms after each consultation, downgrade. Prefer existing fields, imports and at most one-click tags.",
    },
    {
      id: "boundary",
      placement: "after",
      eyebrow: "Product boundary",
      title: "Learn from the advisory workflow — do not replace it",
      tone: "muted",
      content: [
        {
          kind: "columns",
          columns: [
            {
              label: "Could own",
              title: "Marketing intelligence",
              tone: "accent",
              items: [
                "Context",
                "Learning & pattern detection",
                "Recommendations & experiments",
                "Organisational memory",
              ],
            },
            {
              label: "Connect to",
              title: "Existing systems",
              items: [
                "CRM",
                "Approved consultation notes / summaries",
                "Outcomes",
                "Analytics & ad platforms",
              ],
            },
            {
              label: "Do not become",
              title: "Out of scope",
              tone: "negative",
              items: [
                "Formation platform or government-service replacement",
                "CRM / lead management / PRO system",
                "Legal, tax, banking or jurisdiction adviser",
                "Compliance-management platform",
                "Generic chatbot",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "countries",
      placement: "after",
      eyebrow: "Country strategy",
      title: "Saudi for richness, Oman for access, UAE for niches, Qatar selectively",
      status: "inferred",
      tone: "light",
      content: [
        {
          kind: "matrix",
          rows: [
            "ICP density",
            "Consultation complexity",
            "Digital substitution",
            "Accessibility",
            "Scale",
            "Competitive pressure",
            "Verdict",
          ],
          columns: [
            {
              label: "Saudi Arabia",
              title: "Problem-rich",
              cells: [
                "Several advisory-first firms found",
                "High — new registration regime, regional HQ, premium residency",
                "Medium — registration simplified, operations still complex",
                "Medium",
                "High",
                "Medium",
                "Best market for the problem",
              ],
            },
            {
              label: "Oman",
              title: "Accessible pilot",
              cells: [
                "Few but clearly consultation-led firms",
                "Medium — banking, Omanisation, compliance",
                "High — Invest Easy online",
                "High",
                "Low",
                "Low",
                "Best for a first pilot — not chosen by default",
              ],
            },
            {
              label: "UAE",
              title: "Niches only",
              cells: [
                "Many firms, mostly transactional",
                "Medium — residency / banking niches",
                "Very high — Basher, free-zone portals",
                "Medium",
                "High",
                "Very high",
                "Advisory-led niches only",
              ],
            },
            {
              label: "Qatar",
              title: "Selective",
              cells: [
                "Few verified firms",
                "Medium",
                "High — Single Window",
                "Medium",
                "Low",
                "Low",
                "Selective",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "buying",
      placement: "after",
      eyebrow: "Buying committee & decision distance",
      title: "Founder buys, marketing champions, advisers supply the signal",
      status: "hypothesis",
      tone: "muted",
      collapsible: true,
      content: [
        {
          kind: "columns",
          columns: [
            { label: "Economic buyer", title: "Founder / managing partner" },
            { label: "Champion", title: "Marketing / growth lead" },
            { label: "Signal source · can block", title: "Advisers / consultants" },
            { label: "Gatekeeper (larger firms)", title: "Operations / CRM / data" },
          ],
        },
        {
          kind: "pairs",
          label: "Likely objections",
          items: [
            { term: "Advisers", detail: "“I don't have time to write notes for marketing.”" },
            {
              term: "Marketing",
              detail: "“We already know the common questions.” — test against real notes.",
            },
            {
              term: "Management",
              detail:
                "“Client information is confidential.” — answer with minimisation, not reassurance.",
            },
            { term: "IT / data", detail: "“Our CRM is customised.” — start with exports." },
          ],
        },
        {
          kind: "pairs",
          label: "Willingness-to-pay proxies (signals, not proof)",
          items: [
            {
              term: "Observed",
              detail:
                "Paid consultation offers and discounts, multiple service lines, recurring compliance and accounting services, bank partnerships, content aimed at specific investor origins.",
            },
          ],
        },
      ],
    },
    {
      id: "gtm",
      placement: "after",
      eyebrow: "GTM & outreach",
      title: "Lead with a diagnostic question",
      status: "hypothesis",
      tag: "GTM hypothesis — wording untested",
      tone: "light",
      content: [
        {
          kind: "pairs",
          items: [
            {
              term: "Hook (to test)",
              detail:
                "What are your consultations teaching you that your marketing still doesn't know?",
            },
            {
              term: "Offer",
              detail:
                "Consultation Intelligence Audit: Acquisition → Stated Intent → Consultation Discovery → Actual Need → Fit → Outcome → Marketing Gap, run on existing forms, CRM fields or approved notes.",
            },
            {
              term: "Proof needed",
              detail:
                "One content or campaign change prompted by the audit that the firm had not identified from its own meetings.",
            },
          ],
        },
        {
          kind: "quotes",
          items: [
            "We reviewed your public market-entry journey and identified a few hypotheses around what consultation outcomes may be able to teach your marketing. We'd validate them against actual enquiry and consultation outcomes before recommending changes.",
          ],
        },
        {
          kind: "list",
          label: "Never lead with",
          items: [
            "AI marketing platform",
            "Social-media automation",
            "Company-setup AI",
            "“Your leads are low quality”",
          ],
        },
      ],
    },
    {
      id: "pilot-design",
      placement: "after",
      eyebrow: "Pilot design",
      title: "3–5 advisory firms · test the thesis, not the features",
      status: "hypothesis",
      tag: "Proposed — no numeric targets",
      tone: "muted",
      content: [
        {
          kind: "flow",
          steps: [
            "Baseline",
            "Minimum Approved Data",
            "Pattern Extraction",
            "Marketing Hypothesis",
            "Content / Campaign Change",
            "Next Enquiries",
            "Decision",
          ],
        },
        {
          kind: "pairs",
          items: [
            {
              term: "Hypothesis",
              detail:
                "Existing consultation signals contain recurring stated-vs-actual gaps and misaligned demand that change marketing decisions.",
            },
            {
              term: "Input",
              detail:
                "Booking-form intent, outcome / reason fields, a sample of approved notes — no recordings.",
            },
            {
              term: "Success evidence",
              detail:
                "New actionable intelligence, a changed content or campaign decision, low adviser friction, repeat use, willingness to continue and pay.",
            },
            {
              term: "Failure signal",
              detail: "Advisers must report manually; patterns already known; no decision changes.",
            },
            {
              term: "Next decision",
              detail:
                "Supported → build the shared Expert Conversation Intelligence layer with clinics. Mixed → keep Misaligned Demand only. Failed → deprioritise.",
            },
          ],
        },
      ],
    },
    {
      id: "roadmap",
      placement: "after",
      eyebrow: "Product roadmap decision",
      title: "Build, research, connect — and not build",
      status: "inferred",
      tone: "light",
      content: [
        {
          kind: "columns",
          columns: [
            {
              label: "Build / validate soon",
              title: "Narrow",
              tone: "accent",
              items: ["Consultation-to-Marketing Intelligence", "Misaligned Demand Intelligence"],
            },
            {
              label: "Research further",
              title: "Unproven",
              tone: "positive",
              items: [
                "Expert Conversation Intelligence (shared platform)",
                "Regulatory change → asset review flags",
              ],
            },
            {
              label: "Connect / partner",
              title: "Integrate",
              items: ["CRMs", "Call / meeting tools", "Legal / tax specialists"],
            },
            {
              label: "Do not build",
              title: "Commoditised or wrong role",
              tone: "negative",
              items: [
                "Lifecycle upsell automation",
                "Jurisdiction / setup advisor",
                "Legal, tax or licence AI",
                "Conversation summaries",
                "CRM, lead scoring, chatbot",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "kill",
      placement: "after",
      eyebrow: "Kill criteria",
      title: "What would make Tansiq stop",
      status: "hypothesis",
      tone: "dark",
      content: [
        {
          kind: "columns",
          columns: [
            {
              label: "Data access",
              title: "Consultation / outcome data cannot realistically be accessed.",
              tone: "accent",
            },
            {
              label: "Workflow",
              title: "Advisers must do substantial new reporting.",
              tone: "accent",
            },
            {
              label: "Differentiation",
              title: "CRM / conversation tools already produce equivalent marketing learning.",
              tone: "accent",
            },
            {
              label: "Actionability",
              title: "Insights do not change marketing decisions.",
              tone: "accent",
            },
            {
              label: "Trust",
              title: "Consultants or marketing do not trust the intelligence.",
              tone: "accent",
            },
            {
              label: "Economic",
              title: "Value does not support willingness to pay.",
              tone: "accent",
            },
            {
              label: "Integration",
              title: "Integration burden is disproportionate.",
              tone: "accent",
            },
            {
              label: "Regulatory feature",
              title:
                "Monitoring liability / maintenance unattractive — already applied: not built.",
              tone: "accent",
            },
            {
              label: "Market",
              title: "The strongest firms do not see it as important.",
              tone: "accent",
            },
          ],
        },
      ],
    },
    {
      id: "completeness",
      placement: "after",
      eyebrow: "Research completeness",
      title: "Verified, inferred, unknown",
      status: "inferred",
      tone: "muted",
      collapsible: true,
      content: [
        {
          kind: "pairs",
          items: [
            {
              term: "Verified",
              detail:
                "Government platforms (as reported by official / reputable sources), firms' official sites, services and contacts, vendor capabilities.",
            },
            {
              term: "Inferred",
              detail: "Feature classifications, country verdicts, ICP refinement.",
            },
            {
              term: "Unknown",
              detail:
                "How any firm records consultations, notes quality, CRM stack, enquiry volumes, budget owner, willingness to pay.",
            },
            {
              term: "Excluded candidates",
              detail:
                "HMA, KARO Oman, Shahin's Consultancy, ACT Corporate Services, CSP Group (not identifiable from official sources); Landing Saudi (site content not machine-readable, evidence too thin); RAG Global Business Hub (no official website found); InCorp (official site found is its Asia-Pacific business).",
            },
            {
              term: "Saturation",
              detail:
                "Reasonable: further discovery returned transactional UAE setup firms, big professional-services networks and directories. Arabic-language search not performed.",
            },
            {
              term: "Would more desk research change the verdict?",
              detail:
                "Unlikely. The deciding evidence — whether consultation signal exists in usable form — needs firm access.",
            },
          ],
        },
        {
          kind: "sources",
          label: "Key sources",
          items: [
            {
              label: "Gulf News — UAE Basher 15-minute setup",
              url: "https://gulfnews.com/amp/story/living-in-uae%2Fask-us%2Fuae-how-to-set-up-a-business-within-15-minutes--all-you-need-to-know-1.1696863105361",
            },
            {
              label: "Clyde & Co — Saudi Investment Law implementing regulations",
              url: "https://www.clydeco.com/en/insights/2025/09/ksa-investment-law-implementing-regulations",
            },
            {
              label: "Qatar News Agency — new Single Window establishment services",
              url: "https://www.qna.org.qa/en/News-Area/News/2023-06/18/0049-a-new-set-of-services-for-establishing-companies-launched-via-the-single-window-platform",
            },
            {
              label: "OECD OPSI — Oman Business Platform",
              url: "https://oecd-opsi.org/innovations/the-oman-business-platform-2/",
            },
            {
              label: "Improvado — Gong analytics for revenue / marketing teams",
              url: "https://improvado.io/blog/gong-analytics",
            },
            {
              label: "HubSpot — Deal Loss Agent",
              url: "https://ecosystem.hubspot.com/marketplace/listing/deal-loss-agent",
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
      body: "Public evidence: Verified (official website, 5 October 2026) or Attributed (named source, linked).",
    },
    hypothesis: {
      title: "Hypothesis",
      body: "Reasonable interpretation requiring validation — never a statement about a firm's internal operations.",
    },
    levels: [
      { label: "Observed", body: "Public evidence we could check." },
      { label: "Hypothesis", body: "Requires customer validation." },
      { label: "Proposed", body: "Tansiq opportunity — not a current capability." },
      { label: "Validation required", body: "Not established." },
    ],
    useWording: ["May", "Could", "Suggests", "Worth validating", "Not publicly verified"],
    avoidWording: [
      "Their leads are low quality",
      "Their marketing doesn't understand customers",
      "Tansiq gives legal / tax advice",
      "Tansiq guarantees compliance",
    ],
    note: "Client counts and years shown are the firms' own public claims. No scores, probabilities, volumes or internal problems are stated.",
  },
  conclusion: {
    title: "Segment conclusion",
    paragraphs: [
      [
        "Advisory-led market-entry firms earn a ",
        { strong: "Conditional" },
        " place. Government digitalisation is pushing their value toward advice, and their own messaging shows the stated-vs-actual-need gap Tansiq would learn from.",
      ],
      [
        "The defensible opportunity is narrow: ",
        {
          strong:
            "help advisory-led businesses turn what experts learn in consultations into structured marketing intelligence — without adding a reporting workflow.",
        },
      ],
      [
        "The segment's biggest strategic value may be reuse: the same Expert Conversation Intelligence layer could serve clinics and other expert-led businesses. Validate data access with one accessible firm before building it.",
      ],
    ],
    statusNote:
      "Desk research supports a Conditional verdict. Consultation data quality, adviser friction and willingness to pay are unknown until firm access.",
    unvalidated: {
      title: "Not knowable from public information",
      items: [
        "How consultations are recorded",
        "Notes quality",
        "CRM stack",
        "Enquiry volume",
        "Budget owner",
        "Willingness to pay",
      ],
    },
  },
  prospects: [
    /* ───────── Oman ───────── */
    prospect({
      id: "bondoni",
      name: "Bondoni",
      country: "om",
      website: "https://www.bondoni-me.com/",
      contact: [
        { kind: "phone", number: "+968 2421 3946" },
        { kind: "email", address: "enquiries@bondoni-me.com" },
      ],
      verified: [],
      evidence: [
        {
          status: "verified",
          text: "“Book a Market Entry Consultation” (with a first-consultation discount); 10+ years, clients from 40+ countries; ongoing filings and compliance, bank and tax registration, Omanisation & HR strategy, legal compliance, a document management & renewal system.",
          source: CHECKED,
        },
        {
          status: "attributed",
          text: "Marked 10 years in April 2026, supporting 100+ companies across 35+ industries (company's figures).",
          source: "Muscat Daily, April 2026",
        },
      ],
      opportunity:
        "Clients from 40+ countries across 35+ industries entering through one consultation make it worth validating whether stated intent differs systematically by origin or sector — and whether that should shape market-specific content.",
      solution: "Origin / sector stated-vs-actual-need learning",
      pilotQuestion: "How consultations and their outcomes are recorded today.",
      attributes: attrs({
        type: "Corporate services · Muscat",
        icp: "Primary",
        potential: "Very High",
        access: "High",
        service: "Consultation-led setup + recurring compliance, HR, tax",
        whyNow: "No strong trigger; active consultation acquisition offer.",
        path: "Official phone and enquiries email.",
        feature: "Consultation-to-Marketing Intelligence",
      }),
      sources: [
        {
          label: "Muscat Daily — Bondoni marks 10 years",
          url: "https://www.muscatdaily.com/2026/04/05/bondoni-marks-10-years-of-supporting-international-businesses-in-oman/",
        },
      ],
      priority: "early-pilot",
    }),
    prospect({
      id: "monjiz",
      name: "Monjiz",
      country: "om",
      website: "https://www.monjiz.com/",
      contact: { kind: "email", address: "hello@monjiz.com" },
      verified: [],
      evidence: [
        {
          status: "verified",
          text: "Helps foreign companies establish an Oman presence and coordinates agreed work after registration; “individually scoped coordination … Start with a scoping discussion”; vendor-registration and tender-readiness work; recurring corporate requirements.",
          source: CHECKED,
        },
      ],
      opportunity:
        "Scoping before work makes it worth validating whether enquiries that fall outside agreed scope — or arrive at the wrong stage — show patterns marketing could correct.",
      solution: "Rejected / redirected demand learning from scoping",
      pilotQuestion: "Whether scoping outcomes (in scope / out of scope / not ready) are recorded.",
      attributes: attrs({
        type: "Corporate support · Oman",
        icp: "Primary",
        potential: "High",
        access: "High",
        service: "Scoping discussion → coordinated setup and post-registration support",
        whyNow: "No strong public Why-Now trigger verified.",
        path: "Official contact email.",
        feature: "Misaligned Demand Intelligence",
      }),
      priority: "early-pilot",
    }),
    prospect({
      id: "crowe-oman",
      name: "Crowe Oman",
      country: "om",
      website: "https://www.crowe.com/om",
      contact: notVerified(),
      verified: [],
      evidence: [
        {
          status: "attributed",
          text: "Marked 30 years and published the 12th edition of its “Doing Business in Oman” guide with Invest Oman.",
          source: "Crowe Oman blog",
        },
      ],
      opportunity:
        "A long-running investor guide is a large marketing asset that regulatory change can date — a benchmark for asset-review needs, not an early customer.",
      solution: "Benchmark for regulatory change → asset review",
      pilotQuestion: "Not a pilot target; useful for understanding content-maintenance practice.",
      flags: ["Benchmark — large professional-services network"],
      attributes: attrs({
        type: "Professional services network · Muscat",
        icp: "Secondary",
        potential: "Strategic",
        access: "Stretch",
        service: "Audit, tax, advisory incl. market entry",
        whyNow: "Guide updated (12th edition).",
        path: "Site behind a bot challenge — not machine-verified.",
        feature: "Regulatory Change → Asset Impact (research)",
      }),
      sources: [
        {
          label: "Crowe Oman — 30 years and guide",
          url: "https://www.crowe.com/om/blog/crowe-turns",
        },
      ],
      priority: "strategic-stretch",
    }),

    /* ───────── UAE ───────── */
    prospect({
      id: "risepoint-global",
      name: "RisePoint Global",
      country: "ae",
      website: "https://www.risepointglobal.com/",
      contact: [
        { kind: "phone", number: "+971 56 656 5621" },
        { kind: "email", address: "Info@risepointglobal.com" },
      ],
      verified: [],
      evidence: [
        {
          status: "verified",
          text: "“Start a private advisory consultation”; mainland, free-zone and offshore — “the right structure”; banking readiness; eligibility-led residency; “connect company ownership to residency”.",
          source: CHECKED,
        },
      ],
      opportunity:
        "Explicitly linking company ownership to residency makes it worth validating whether prospects arrive asking for a company when their real decision is residency or banking — a clear stated-vs-actual case.",
      solution: "Company-vs-residency intent learning",
      pilotQuestion: "Share of consultations where the actual need differs from the request.",
      attributes: attrs({
        type: "Corporate services & residency advisory · UAE",
        icp: "Primary",
        potential: "Very High",
        access: "High",
        service: "Private advisory consultation → structure, banking, residency",
        whyNow: "No strong public Why-Now trigger verified.",
        path: "Official phone and email.",
        feature: "Consultation-to-Marketing Intelligence",
      }),
      priority: "early-pilot",
    }),
    prospect({
      id: "riz-mona",
      name: "RIZ & MONA Consultancy",
      country: "ae",
      website: "https://www.rizmona.com/",
      contact: [
        { kind: "phone", number: "+971 4 558 6339" },
        { kind: "phone", label: "WhatsApp", number: "+971 54 582 1012" },
      ],
      verified: [],
      evidence: [
        {
          status: "verified",
          text: "15+ years; free consultation; company-name availability check on the homepage; bank account opening, renewals, bookkeeping and corporate tax.",
          source: CHECKED,
        },
        {
          status: "attributed",
          text: "Acquired IBGME.",
          source: "Gulf News",
        },
      ],
      opportunity:
        "A volume-oriented free-consultation funnel makes it worth validating whether misaligned demand is high — a test of the secondary ICP.",
      solution: "Free-consultation funnel misaligned-demand analysis",
      pilotQuestion:
        "Outcome recording for free consultations; impact of the IBGME acquisition on service mix.",
      attributes: attrs({
        type: "Business setup consultancy · Dubai",
        icp: "Secondary",
        potential: "High",
        access: "Medium",
        service: "Free consultation → setup + recurring bookkeeping / tax",
        whyNow: "Acquisition of IBGME (date not verified).",
        path: "Official phone and WhatsApp.",
        feature: "Misaligned Demand Intelligence",
      }),
      sources: [
        {
          label: "Gulf News — RIZ & MONA acquires IBGME",
          url: "https://gulfnews.com/business/corporate-news/riz-mona-consultancy-acquires-ibgme-1.500060811",
        },
      ],
      priority: "commercial",
    }),

    /* ───────── Qatar ───────── */
    prospect({
      id: "simplix",
      name: "Simplix Trading & Consulting",
      country: "qa",
      website: "https://simplix.qa/",
      contact: [
        { kind: "phone", number: "+974 4012 0779" },
        { kind: "phone", label: "WhatsApp", number: "+974 7716 3101" },
        { kind: "email", address: "info@simplix.qa" },
      ],
      verified: [],
      evidence: [
        {
          status: "verified",
          text: "Market entry strategy, establishment and corporate services; “86+ corporate and PRO services” through one relationship; workforce, technology and digital transformation; relationship manager and renewal tracking; under MBK Holdings.",
          source: CHECKED,
        },
      ],
      opportunity:
        "Market entry bundled with workforce and technology services makes it worth validating whether entry clients reveal cross-service needs that marketing does not yet address.",
      solution: "Cross-service intent learning from market-entry clients",
      pilotQuestion: "How market-entry consultations are recorded across service teams.",
      attributes: attrs({
        type: "Business services & market entry · Qatar",
        icp: "Primary",
        potential: "High",
        access: "Medium",
        service: "Market-entry strategy + 86+ corporate / PRO services",
        whyNow: "No strong public Why-Now trigger verified.",
        path: "Official phone, WhatsApp and email; part of a holding group.",
        feature: "Consultation-to-Marketing Intelligence",
      }),
      priority: "commercial",
    }),

    /* ───────── Saudi Arabia ───────── */
    prospect({
      id: "taqudi",
      name: "TAQUDI",
      country: "sa",
      website: "https://taqudi.com/",
      contact: [
        { kind: "email", label: "Sales", address: "sales@taqudi.com" },
        { kind: "email", address: "info@taqudi.com" },
      ],
      verified: [],
      evidence: [
        {
          status: "verified",
          text: "Saudi market-entry advisory and coordination; “Assess Your Saudi Entry”; publishes common mistakes such as “Registering an entity before confirming the activity is eligible and commercially viable” and underestimating banking / KYC requirements.",
          source: CHECKED,
        },
      ],
      opportunity:
        "Publicly naming entry mistakes makes it worth validating whether those same misconceptions recur in consultations — and whether marketing addresses them early enough.",
      solution: "Pre-sales knowledge-gap learning from assessments",
      pilotQuestion: "Whether assessment outcomes and recurring misconceptions are recorded.",
      attributes: attrs({
        type: "Market-entry advisory · Saudi Arabia",
        icp: "Primary",
        potential: "Very High",
        access: "High",
        service: "Entry assessment → coordinated roadmap (licensing, banking, workforce)",
        whyNow: "No strong public Why-Now trigger verified.",
        path: "Official sales and info emails.",
        feature: "Consultation-to-Marketing Intelligence",
      }),
      priority: "early-pilot",
    }),
    prospect({
      id: "analytix",
      name: "Analytix",
      country: "sa",
      website: "https://analytix.sa/",
      contact: [
        { kind: "phone", number: "+966 50 637 6474" },
        { kind: "email", address: "info@analytix.sa" },
      ],
      verified: [],
      evidence: [
        {
          status: "verified",
          text: "Company formation, regional headquarters, premium residency, accounting & tax; content aimed at Qatari investors expanding to Saudi Arabia; claims 2,500 companies from 14 countries across 20 industries (company's figure).",
          source: CHECKED,
        },
      ],
      opportunity:
        "Origin-specific content (e.g. for Qatari investors) makes it worth validating whether consultation outcomes differ by investor origin — and which origin pages attract misaligned demand.",
      solution: "Investor-origin content learning",
      pilotQuestion: "Whether enquiry origin and consultation outcome are linked.",
      attributes: attrs({
        type: "Corporate services · Saudi Arabia",
        icp: "Primary",
        potential: "Very High",
        access: "Medium",
        service: "Formation, RHQ, residency, accounting & tax",
        whyNow: "Cross-border content push (Qatari investors).",
        path: "Official phones and email.",
        feature: "Misaligned Demand Intelligence",
      }),
      priority: "commercial",
    }),
    prospect({
      id: "decisive-partners",
      name: "Decisive Partners",
      country: "sa",
      website: "https://www.decisive-partners.com/",
      contact: notVerified(),
      verified: [],
      evidence: [
        { status: "verified", text: "Official site with “Book a consultation”.", source: CHECKED },
        {
          status: "attributed",
          text: "Riyadh advisory arm of Decisive Group (described as 500+ professionals): market-entry advisory, MISA registration, formation and compliance for multinationals, PE / VC-backed firms and family offices.",
          source: "Clutch profile",
        },
      ],
      opportunity:
        "Serving distinct client types (multinationals, PE / VC portfolios, family offices) makes it worth validating whether each type's stated needs differ — informing segment-specific content.",
      solution: "Client-type stated-need learning",
      pilotQuestion: "Decision distance inside the group; how consultations are recorded.",
      attributes: attrs({
        type: "Corporate advisory · Riyadh",
        icp: "Primary",
        potential: "High",
        access: "Medium",
        service: "Consultation → MISA registration, formation, compliance",
        whyNow: "No strong public Why-Now trigger verified.",
        path: "Consultation booking on official site; part of a large group.",
        feature: "Consultation-to-Marketing Intelligence",
      }),
      sources: [
        { label: "Clutch — Decisive Partners", url: "https://clutch.co/profile/decisive-partners" },
      ],
      priority: "commercial",
    }),
    prospect({
      id: "astrolabs",
      name: "AstroLabs",
      country: "sa",
      website: "https://www.astrolabs.com/",
      contact: notVerified("Official sales contact"),
      verified: [],
      evidence: [
        {
          status: "verified",
          text: "Business expansion partner for Saudi Arabia and the UAE: formation, compliance management, HR, accounting & tax; 12+ years; partnership with SAB integrating setup, ecosystem access and banking.",
          source: CHECKED,
        },
      ],
      opportunity:
        "A market-entry offer bundled with banking and community access makes it worth validating which entry questions drive the bundle — at a larger organisational scale.",
      solution: "Entry-bundle intent learning (scaled)",
      pilotQuestion: "Accessible marketing decision makers; data ownership across services.",
      attributes: attrs({
        type: "Business expansion partner · Saudi Arabia & UAE",
        icp: "Primary",
        potential: "Strategic",
        access: "Low",
        service: "Formation + compliance + HR + community / banking partnerships",
        whyNow: "SAB partnership (date not verified).",
        path: "Only a product email found in site HTML.",
        feature: "Consultation-to-Marketing Intelligence",
      }),
      priority: "strategic-stretch",
    }),
  ],
};
