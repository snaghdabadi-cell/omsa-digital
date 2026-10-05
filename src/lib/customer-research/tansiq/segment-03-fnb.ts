import type { Segment } from "../types";

// Segment 03 — F&B, Cafés & Growing Food Brands.
//
// LOCKED RESEARCH DATA. Every business, website, contact and claim below comes
// from the researched brief, except where a note says it was confirmed from
// the business's own official source during implementation (2026-10-05):
//   - Haseed WhatsApp: wa.me link on the official B2B page (haseed.net/en/b2b).
//   - Kanaf consumer site: linked from the official B2B site.
//
// Deliberately NOT filled in (not supplied, and not verifiable without guessing):
//   - Segment-level customer potential, score and status.
//   - Tansiq Opportunity Scores (`secondaryScore`) for every prospect.
//   - Outreach angles and "why they may buy" lines for every prospect.
//   - Doha Roastery website/phone; Up Café website; phone numbers for Azura
//     Coffee, Sophia Café, Flat White and Cup.sa.
//
// Decision Intelligence is a PROPOSED future capability throughout — never
// describe it as current Tansiq functionality.

export const SEGMENT_03_FNB: Segment = {
  id: "03",
  number: "03",
  name: "F&B, Cafés & Growing Food Brands",
  scoring: {
    primary: "Early sales score",
    primaryShort: "Early sales",
    secondary: "Tansiq opportunity score",
  },
  solutionLabel: "Decision Intelligence opportunity · proposed",
  currentCapability:
    "AI-powered content creation and management — Tansiq's existing capability for executing the marketing content.",
  summary: [
    "This segment is attractive because F&B businesses have a continuous need for content, promotions, launches and customer engagement.",
    "However, the stronger Tansiq opportunity is not simply AI content generation. Growing F&B businesses must repeatedly decide what to promote — which product, location, customer segment, revenue stream and channel — and why now.",
  ],
  why: {
    title: "Why this segment",
    intro: "F&B has several characteristics that make it attractive:",
    items: [
      "Continuous content demand",
      "Frequent product launches and promotions",
      "Location-specific demand",
      "Seasonal demand",
      "Multiple customer occasions",
      "Multiple revenue streams",
      "Delivery platforms",
      "Ecommerce",
      "Loyalty",
      "Catering",
      "Wholesale",
      "Subscriptions",
      "Private label",
      "Multi-brand portfolios",
    ],
    closing: "This creates a strong environment for AI Content + Decision Intelligence.",
  },
  profile: {
    title: "Customer profile",
    intro: "Prioritize:",
    items: [
      "Growing local brands",
      "SMEs",
      "Specialty cafés / roasteries",
      "Approximately 2–15 locations where applicable",
      "Businesses with multiple revenue streams",
      "Businesses with accessible decision makers",
      "Businesses where a small pilot is possible",
    ],
    note: "Giant enterprises are not the primary target. One strategic / stretch prospect is retained where product fit is exceptionally strong.",
  },
  capabilities: {
    title: "Tansiq fit",
    items: [
      {
        title: "AI Content — current capability",
        body: "Tansiq can help these businesses create and manage AI-powered content today.",
      },
      {
        title: "Decision Intelligence — proposed",
        body: "With Decision Intelligence, it could also use business signals to recommend what should be promoted, to which audience and through which channel before generating the campaign.",
      },
    ],
    caveat:
      "Decision Intelligence capabilities on this page are product opportunities / proposed future capabilities — not claims about functionality that already exists in Tansiq.",
  },
  coreOpportunity: {
    eyebrow: "Decision Intelligence opportunity · proposed",
    title: "Decision Intelligence layer",
    journey: [
      "Business Signals",
      "Detect Opportunity",
      "Decide",
      "AI Create",
      "Publish",
      "Measure",
      "Learn",
      "Next Decision",
    ],
    intro: "Growing F&B businesses must repeatedly decide:",
    outcomes: [
      "What should we promote?",
      "Which product/menu item deserves attention?",
      "Which location?",
      "Which customer segment?",
      "Which revenue stream?",
      "Which channel?",
      "Why now?",
    ],
    closing:
      "Tansiq's existing AI content capabilities can execute marketing content. The proposed future differentiation is a Decision Intelligence layer that helps determine what should be marketed before AI generates the campaign.",
    caveat:
      "Proposed future capability, not current Tansiq functionality. Some business signals would require relevant business-data integrations.",
  },
  productOpportunities: {
    title: "F&B Decision Intelligence Opportunities",
    label:
      "Product opportunities / proposed future capabilities identified through customer research — not current Tansiq functionality. Requires relevant business-data integrations where applicable.",
    items: [
      {
        number: "01",
        title: "Branch Intelligence",
        tag: "Proposed future capability · integrations where applicable",
        description:
          "Determine what each branch/location should promote based on available signals.",
      },
      {
        number: "02",
        title: "Product & Menu Intelligence",
        tag: "Proposed future capability · integrations where applicable",
        description: "Identify which products/menu items deserve marketing attention.",
      },
      {
        number: "03",
        title: "Audience Intent Intelligence",
        tag: "Proposed future capability · integrations where applicable",
        description: "Differentiate audiences:",
        items: ["Consumer", "Wholesale", "Catering", "Subscription", "Corporate", "Private label"],
      },
      {
        number: "04",
        title: "Channel Intelligence",
        tag: "Proposed future capability · integrations where applicable",
        description:
          "Help determine whether the opportunity belongs to owned ordering, ecommerce, delivery marketplace, physical location or another channel.",
      },
      {
        number: "05",
        title: "Multi-Brand Intelligence",
        tag: "Proposed future capability · integrations where applicable",
        description:
          "For portfolio businesses, determine which brand deserves marketing attention.",
      },
      {
        number: "06",
        title: "Revenue-Stream Intelligence",
        tag: "Proposed future capability · integrations where applicable",
        description: "Compare revenue-stream opportunities:",
        items: [
          "Café",
          "Ecommerce",
          "Wholesale",
          "Subscription",
          "Catering",
          "Events",
          "Private label",
        ],
      },
    ],
  },
  pilot: {
    title: "Pilot strategy",
    intro:
      "Tansiq should not require full POS/CRM/loyalty integration to begin selling this concept. Early pilots can start with:",
    items: [
      "One brand",
      "One location",
      "One audience",
      "Selected products",
      "Existing campaign/content data",
      "Approximately one campaign cycle",
    ],
    loop: ["Detect", "Decide", "Create", "Publish", "Measure", "Learn"],
    closing: "More advanced integrations can be introduced later if justified.",
  },
  positioning: {
    title: "Product positioning",
    notIntro: "Do not position Tansiq as:",
    notItems: [
      "Another POS",
      "Another ordering system",
      "Another loyalty platform",
      "Another restaurant-management system",
      "Merely an AI caption generator",
    ],
    statement: [
      "Existing operational systems tell the business what happened.",
      "Tansiq can evolve toward helping the business decide what to market next — and then use AI to execute that decision.",
    ],
  },
  methodology: {
    evidence: {
      title: "Verified public evidence",
      body: "Only information publicly visible through official websites, ordering and B2B/wholesale journeys and official contact channels. Fact ≠ Opportunity.",
    },
    hypothesis: {
      title: "Observed / proposed opportunity",
      body: "Our research hypotheses and recommendations — including every Decision Intelligence opportunity and first pilot. Never presented as a verified problem inside the business.",
    },
    useWording: [
      "Opportunity identified",
      "Potential use case",
      "Research indicates",
      "Proposed future capability",
    ],
    avoidWording: [
      "This business struggles with…",
      "Their team cannot…",
      "They have a problem with…",
    ],
    scores: [
      {
        name: "Tansiq Opportunity Score",
        measures: [
          "AI content fit",
          "Decision Intelligence potential",
          "Marketing complexity",
          "Multiple audiences / channels / revenue streams",
          "Strength of the specific use case",
        ],
      },
      {
        name: "Early Sales Score",
        measures: [
          "Decision-maker accessibility",
          "Contactability",
          "Organizational complexity",
          "Likely procurement difficulty",
          "Pilot simplicity",
          "Suitability for an early-stage Tansiq sale",
        ],
      },
    ],
    note: "Tansiq Opportunity Scores were not supplied in this research round, so prospect records show the Early Sales Score only and mark the opportunity score as not yet scored. Decision Intelligence is described as a proposed capability, never as current Tansiq functionality.",
  },
  conclusion: {
    title: "Presentation summary",
    paragraphs: [
      [
        { strong: "Why this segment? " },
        "F&B businesses constantly need fresh content, but growing brands also have to decide which product, branch, offer or sales channel deserves marketing attention. This creates a strong fit for both Tansiq's current AI content capabilities and future Decision Intelligence.",
      ],
      [
        { strong: "What can Tansiq do? " },
        "Tansiq can help these businesses create and manage AI-powered content today. With Decision Intelligence, it could also use business signals to recommend what should be promoted, to which audience and through which channel before generating the campaign.",
      ],
      [
        { strong: "Our opportunity: " },
        "Branch Intelligence, Product & Menu Intelligence, Customer Intent Intelligence, Multi-Brand Intelligence and Revenue-Stream Intelligence.",
      ],
    ],
    loop: ["Decide", "AI Create", "Publish", "Measure", "Learn"],
    statusNote:
      "Segment-level customer potential, score and status were not supplied for Segment 03, so none is shown. No comparative ranking is implied.",
  },
  prospects: [
    /* ───────── Oman ───────── */
    {
      id: "historia-roastery",
      name: "Historia Roastery",
      country: "om",
      website: "https://historia.coffee/",
      contact: { kind: "phone", number: "+968 9620 2197" },
      verified: [
        "Three locations, ecommerce, café and online rewards, gift cards, wholesale / coffee commerce and delivery.",
      ],
      opportunity: "Physical Café × Ecommerce × Loyalty customer journey.",
      solution:
        "Determine which customer/product opportunity should receive marketing attention across café and ecommerce journeys.",
      firstPilot:
        "One online coffee/product category campaign targeted toward existing café/customer demand.",
      fitScore: 9.3,
      priority: "very-high",
    },
    {
      id: "boxha-coffee-roasters",
      name: "Boxha Coffee & Roasters",
      country: "om",
      website: "https://boxhacoffeeandroasters.com/",
      contact: [
        { kind: "phone", number: "+968 9593 8844" },
        { kind: "email", label: "Sales", address: "sales@boxhacoffeeandroasters.com" },
      ],
      contactType: "Sales / B2B",
      verified: [
        "Wholesale, private label, coffee roasting, B2B audiences including cafés/restaurants/hotels/offices, academy/training and ecommerce.",
      ],
      opportunity: "Multiple B2B audiences and services require different marketing priorities.",
      solution: "B2B Segment × Service Intent Intelligence",
      firstPilot:
        "Target one hospitality vertical, such as hotels, with one private-label or wholesale acquisition campaign.",
      fitScore: 9.2,
      priority: "very-high",
    },
    {
      id: "windrose-coffee",
      name: "Windrose Coffee",
      country: "om",
      website: "https://www.windrosecoffee.com/",
      contact: [
        { kind: "phone", label: "Wholesale", number: "+968 9219 0935" },
        { kind: "phone", label: "Café", number: "+968 9170 5455" },
      ],
      contactType: "Dedicated wholesale / café",
      verified: ["Specialty coffee, café, retail, wholesale, subscription and training/support."],
      opportunity:
        "Consumer, subscription and wholesale journeys require different marketing decisions.",
      solution: "Consumer × Subscription × B2B Intent Intelligence",
      firstPilot: "Subscription-growth campaign or one wholesale acquisition campaign.",
      fitScore: 9.1,
      priority: "very-high",
    },
    {
      id: "azura-coffee",
      name: "Azura Coffee",
      country: "om",
      website: "https://azura.coffee/",
      contact: {
        kind: "website",
        note: "Official phone number not verified in the current research.",
      },
      verified: [
        "Six publicly listed locations in Muscat, with different location contexts, a roastery presence and mall/location-based customer environments.",
      ],
      opportunity:
        "Different locations likely represent different occasions, audiences and product opportunities.",
      solution: "Location × Occasion × Product Intelligence",
      firstPilot: "One selected location × selected product/category campaign.",
      researchNotes: [
        "Location-specific audiences and occasions are a research hypothesis, not proven by public evidence.",
      ],
      fitScore: 8.7,
      priority: "high",
    },
    {
      id: "italian-barrista-cafe",
      name: "Italian Barrista Café / IBC",
      country: "om",
      website: "https://italianbarristacafe.com/",
      contact: [
        { kind: "phone", label: "WhatsApp", number: "+968 9747 2211" },
        { kind: "phone", label: "Call Center", number: "+968 2210 1600" },
        { kind: "email", address: "info@altoobi.com" },
      ],
      verified: [
        "25 locations currently listed on the official website.",
        "Ordering, dine-in, takeaway, delivery and promotions/events/campaign activity.",
      ],
      opportunity: "Branch × Product × Occasion × Campaign complexity.",
      solution: "Determine which branch cluster/product/occasion deserves campaign attention.",
      firstPilot: "One branch cluster × selected products × one campaign period.",
      researchNotes: [
        "Location count is stated as currently listed on the official website — a higher branch figure seen elsewhere is not treated as an uncontested fact.",
      ],
      fitScore: 7.5,
      priority: "high-strategic",
    },

    /* ───────── UAE ───────── */
    {
      id: "raw-coffee-company",
      name: "RAW Coffee Company",
      country: "ae",
      website: "https://rawcoffeecompany.com/",
      contact: [
        { kind: "phone", label: "Office / Roastery", number: "+971 4 339 5474" },
        { kind: "email", address: "info@rawcoffee.ae" },
        {
          kind: "email",
          label: "Kim Thompson — Owner & Director of Culture & Brand",
          address: "kim@rawcoffee.ae",
        },
        { kind: "email", label: "Matt Toogood — Owner & CEO", address: "matt@rawcoffee.ae" },
      ],
      contactType: "Office / roastery + public leadership contacts",
      verified: [
        "B2C coffee business with commercial/wholesale solutions, equipment/training/support, café and ecommerce.",
        "Direct public leadership contacts.",
      ],
      opportunity:
        "Different commercial customer segments require different messages and acquisition priorities.",
      solution: "B2B Customer Segment Intelligence",
      firstPilot: "One wholesale/commercial customer segment acquisition campaign.",
      fitScore: 9.4,
      priority: "very-high",
    },
    {
      id: "roast-cha-cha-chai",
      name: "ROAST × Cha Cha Chai",
      country: "ae",
      website: "https://www.roastdubai.com/",
      contact: {
        kind: "phone",
        label: "Corporate / catering WhatsApp",
        number: "+971 50 645 7762",
      },
      contactType: "Corporate / catering",
      verified: [
        "Two brands, nine points of sale, multiple products and multiple delivery platforms.",
        "Live sales/till signals publicly described; corporate/catering, event formats and additional partnership/revenue opportunities.",
      ],
      opportunity: "Brand × Product × Location × Revenue Stream complexity.",
      solution:
        "Determine which brand/product/location/revenue stream should receive the next marketing campaign.",
      firstPilot: "One brand × three selected products × one campaign.",
      fitScore: 9.1,
      priority: "very-high",
    },
    {
      id: "sophia-cafe",
      name: "Sophia Café",
      country: "ae",
      website: "https://sophiagroupdxb.com/",
      contact: {
        kind: "website",
        note: "Official phone number not verified in the current research.",
      },
      verified: [
        "Six Dubai locations and an event/catering business with an Airstream Trailer, Boutique Kiosk and Mobile Cart.",
      ],
      opportunity:
        "Marketing must potentially balance branch footfall with event/catering lead generation.",
      solution: "Branch Demand × Event/Catering Demand Intelligence",
      firstPilot: "One corporate/event service acquisition campaign.",
      fitScore: 9.0,
      priority: "very-high",
    },
    {
      id: "claro",
      name: "Claro",
      country: "ae",
      website: "https://www.clarocafe.ae/",
      contact: [
        { kind: "phone", label: "Central", number: "+971 50 597 7000" },
        { kind: "phone", label: "Catering", number: "+971 50 340 9585" },
      ],
      verified: [
        "11 locations currently listed, with presence across six emirates.",
        "Drive-thru/pickup formats, selected dine-in locations, catering and seasonal/new-product launches.",
      ],
      opportunity:
        "Geography, branch format, seasonality and product launches create multiple marketing decisions.",
      solution: "Geography × Branch Format × Season × Product Intelligence",
      firstPilot: "One seasonal product × selected branch formats/locations.",
      fitScore: 8.7,
      priority: "high",
    },
    {
      id: "seventy-six-group",
      name: "Seventy Six Group",
      country: "ae",
      website: "https://www.sevensixgroup.com/",
      contact: { kind: "phone", number: "+971 55 811 3002" },
      verified: [
        "17 delivery-first brands, 345 dishes and 21 categories, with a shared kitchen model.",
        "8,956 orders publicly reported across a six-month period.",
      ],
      opportunity: "Large menu/brand portfolio creates prioritization complexity.",
      solution: "Brand × Dish × Category × Demand Intelligence",
      firstPilot: "One virtual brand × selected dishes/categories.",
      fitScore: 8.2,
      priority: "high",
    },

    /* ───────── Qatar ───────── */
    {
      id: "up-cafe",
      name: "Up Café",
      country: "qa",
      contact: { kind: "phone", number: "+974 5999 3368" },
      verified: [
        "Direct online ordering plus Snoonu, Rafeeq and Keeta.",
        "Catering, loyalty and a specialty coffee / bakery offering.",
      ],
      opportunity:
        "Multiple ordering channels and occasions create product/channel prioritization decisions.",
      solution: "Channel × Product × Occasion Intelligence",
      firstPilot: "One product/occasion campaign across selected channels.",
      fitScore: 9.4,
      priority: "very-high",
    },
    {
      id: "frame-specialty-coffee",
      name: "FRAME Specialty Coffee",
      country: "qa",
      website: "https://frame.coffee/",
      contact: { kind: "phone", label: "Catering", number: "+974 5088 3838" },
      contactType: "Catering",
      verified: [
        "Physical branches, ecommerce and loyalty.",
        "Meeting/event capability, catering / coffee cart and a corporate event offering.",
      ],
      opportunity: "Branch, ecommerce and catering represent distinct revenue occasions.",
      solution: "Occasion × Revenue Stream Intelligence",
      firstPilot: "Corporate event/catering acquisition campaign.",
      fitScore: 9.3,
      priority: "very-high",
    },
    {
      id: "doha-roastery",
      name: "Doha Roastery",
      country: "qa",
      contact: {
        kind: "website",
        note: "Official phone number not verified in the current research.",
      },
      verified: [
        "Café/location presence, ecommerce, wholesale/B2B coffee supply and multiple customer journeys.",
      ],
      opportunity: "B2C and B2B audiences require different acquisition/content strategies.",
      solution: "B2C × B2B Demand Intelligence",
      firstPilot: "One B2B coffee-supply acquisition campaign.",
      researchNotes: [
        "No official website exists in the stored research and none could be confirmed from an official source, so the website is omitted rather than guessed.",
      ],
      fitScore: 9.0,
      priority: "very-high",
    },
    {
      id: "flat-white-specialty-coffee",
      name: "Flat White Specialty Coffee",
      country: "qa",
      website: "https://flatwhite.qa/",
      contact: {
        kind: "website",
        note: "Official phone number not verified in the current research.",
      },
      verified: [
        "Nine locations currently represented, with different location contexts and branch/menu differences.",
        "Talabat, Snoonu and Keeta.",
      ],
      opportunity: "Location, menu and customer occasion complexity.",
      solution: "Location × Menu × Occasion Intelligence",
      firstPilot: "One location-specific product/menu campaign.",
      fitScore: 8.1,
      priority: "high",
    },
    {
      id: "crave-holding",
      name: "Crave Holding",
      country: "qa",
      website: "https://craveholding.com/",
      contact: { kind: "phone", label: "Central", number: "+974 4444 0167" },
      verified: [
        "17+ brands, 14+ locations and 160+ employees publicly described.",
        "Dine-in concepts, delivery-first brands, a shared kitchen model, multiple delivery channels and additional concepts in development.",
      ],
      opportunity: "High multi-brand/channel complexity.",
      solution: "Multi-Brand × Format × Channel Intelligence",
      firstPilot: "One delivery-first brand only.",
      researchNotes: [
        "Very high product opportunity / lower early-sales accessibility. Not an easy early sale — a strategic / stretch prospect.",
      ],
      fitScore: 6.8,
      priority: "strategic-stretch",
    },

    /* ───────── Saudi Arabia ───────── */
    {
      id: "haseed",
      name: "Haseed",
      country: "sa",
      website: "https://haseed.net/",
      links: [{ label: "B2B wholesale", url: "https://haseed.net/en/b2b" }],
      contact: [
        { kind: "email", address: "cs@haseed.net" },
        { kind: "phone", label: "WhatsApp (B2B flow)", number: "+966 13 518 1895" },
      ],
      contactType: "Customer service / B2B wholesale flow",
      verified: [
        "Wholesale roasted beans, private label and monthly supply for cafés/companies.",
        "A quote-request journey with business type, city, quantity/product selection and a recurring supply option.",
      ],
      opportunity: "Different B2B intents require different acquisition strategies.",
      solution: "B2B Segment × Offer × Intent Intelligence",
      firstPilot: "One café/business segment × one wholesale offer.",
      researchNotes: [
        "WhatsApp number taken from the wa.me link on the official B2B page (haseed.net/en/b2b).",
      ],
      fitScore: 9.4,
      priority: "very-high",
    },
    {
      id: "seren",
      name: "seren",
      country: "sa",
      website: "https://www.sereneroastery.com/",
      contact: { kind: "phone", number: "+966 577 135351" },
      verified: [
        "Café, roastery, ecommerce, coffee beans, brewing equipment and wholesale.",
        "Loyalty spanning café/store, and publicly identifiable marketing leadership.",
      ],
      opportunity: "Multiple customer journeys compete for marketing attention.",
      solution: "Customer Intent → Café / Ecommerce / Wholesale Intelligence",
      firstPilot: "Compare café-visit vs ecommerce-product campaign.",
      fitScore: 9.3,
      priority: "very-high",
    },
    {
      id: "mozzn",
      name: "Mozzn",
      country: "sa",
      website: "https://mozzn.sa/",
      contact: { kind: "phone", label: "WhatsApp", number: "+966 55 007 2010" },
      verified: [
        "Consumer ecommerce, coffee products, wholesale for cafés/companies and private-label manufacturing.",
      ],
      opportunity: "Retail, wholesale and private-label demand represent distinct audiences.",
      solution: "Revenue Stream × Audience Demand Intelligence",
      firstPilot: "Private-label lead-generation campaign.",
      fitScore: 9.2,
      priority: "very-high",
    },
    {
      id: "cup-sa",
      name: "Cup.sa",
      country: "sa",
      website: "https://www.cup.sa/",
      contact: {
        kind: "website",
        note: "Official phone number not verified in the current research.",
      },
      verified: [
        "Consumer/coffee commerce, corporate supply, recurring supply and custom/branded products.",
        "Corporate hospitality and an events / quote journey.",
      ],
      opportunity: "Corporate and consumer demand require different marketing decisions.",
      solution: "Corporate Demand Intelligence",
      firstPilot: "Corporate hospitality acquisition campaign.",
      fitScore: 9.1,
      priority: "very-high",
    },
    {
      id: "kanaf-roasters",
      name: "Kanaf Roasters",
      country: "sa",
      website: "https://kanafroasters.com/",
      links: [{ label: "B2B wholesale", url: "https://b2b.kanafroasters.com/" }],
      contact: { kind: "phone", label: "B2B", number: "+966 56 922 9384" },
      contactType: "B2B",
      verified: [
        "Consumer ecommerce and a formal wholesale journey.",
        "Company / responsible-person / contact fields and a WhatsApp-connected B2B enquiry flow.",
      ],
      opportunity: "Wholesale customer acquisition can be separated from consumer marketing.",
      solution: "B2B Acquisition Intelligence",
      firstPilot: "Wholesale café acquisition campaign.",
      researchNotes: ["Consumer site confirmed via the link on the official B2B site."],
      fitScore: 8.7,
      priority: "high",
    },
  ],
};
