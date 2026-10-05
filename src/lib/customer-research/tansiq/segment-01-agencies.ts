import type { Segment } from "../types";

// Segment 01 — Marketing & Digital Agencies.
//
// LOCKED RESEARCH DATA. Every business, website, phone number and claim below
// comes from the researched brief. Do not add prospects, change numbers or
// strengthen hypotheses into facts. AIST has no verified phone number — keep
// it on the website contact channel unless one is verified from its site.

export const SEGMENT_01_AGENCIES: Segment = {
  id: "01",
  number: "01",
  name: "Marketing & Digital Agencies",
  potential: 88,
  status: "Strong Top-5 Candidate",
  summary: [
    "Marketing and digital agencies manage multiple clients, campaigns, channels and large volumes of marketing information simultaneously.",
    "Our research indicates that many established agencies already use content creation, analytics, automation, SEO and paid-media tools. Therefore, Tansiq's strongest opportunity is not to compete as another basic content-generation or scheduling platform.",
    "Instead, the opportunity is to help agencies retain marketing knowledge, learn from previous campaigns and make better decisions across clients and channels.",
  ],
  why: {
    title: "Why they could become Tansiq customers",
    intro: "Agencies repeatedly manage:",
    items: [
      "Multiple client brands",
      "Different brand voices",
      "Multiple marketing channels",
      "Campaign histories",
      "Creative performance",
      "Approvals and workflows",
      "Analytics",
      "Market-specific context",
      "Repeated strategic decisions",
    ],
    closing:
      "The larger the client portfolio becomes, the more valuable retained marketing context and decision support can become.",
  },
  capabilities: {
    title: "What Tansiq can do",
    items: [
      {
        title: "Marketing Memory",
        body: "Retain strategy, brand context, previous campaigns and marketing learnings for each client.",
      },
      {
        title: "Decision Intelligence",
        body: "Help teams determine what deserves attention next instead of only generating more content.",
      },
      {
        title: "Cross-Channel Learning",
        body: "Connect learnings from Search, Social, Paid Media, Content and Analytics.",
      },
      {
        title: "Multi-Client Intelligence",
        body: "Keep client knowledge separated while allowing agency teams to manage multiple accounts efficiently.",
      },
    ],
    caveat:
      "Positioning, not proof: these describe where Tansiq could add value. They are not claimed to solve confirmed internal problems at any prospect unless that prospect's public evidence supports it.",
  },
  productOpportunities: {
    title: "Product opportunities discovered",
    label:
      "Product opportunities identified through customer research — validation recommended before development.",
    items: [
      {
        number: "01",
        title: "Marketing Memory",
        description: "Persistent client-level memory.",
        itemsLabel: "Containing",
        items: [
          "Brand context",
          "Strategy",
          "Campaign history",
          "Previous decisions",
          "Performance learnings",
        ],
        commercialValue:
          "Reduces repeated context rebuilding and allows accumulated marketing knowledge to become reusable.",
      },
      {
        number: "02",
        title: "Creative Intelligence",
        description:
          "Use previous creative and campaign performance to identify patterns worth repeating, testing or avoiding.",
        commercialValue:
          "Moves Tansiq from content generation toward learning-driven creative decision support.",
      },
      {
        number: "03",
        title: "Opportunity Radar",
        description: "Combine signals to recommend potential next marketing opportunities.",
        itemsLabel: "Signals such as",
        items: ["Campaigns", "Seasonality", "Content", "Search", "Social", "Performance"],
        commercialValue:
          "Tansiq becomes proactive rather than waiting for the marketer to ask what to create.",
      },
      {
        number: "04",
        title: "Cross-Channel Decision Intelligence",
        description: "Turn cross-channel signals into recommended next actions.",
        itemsLabel: "Signals",
        items: ["Search", "Social", "Paid", "Content", "Analytics"],
        chain: true,
        commercialValue:
          "Helps agencies decide what to prioritize rather than simply showing more dashboards.",
      },
    ],
  },
  conclusion: {
    title: "Segment conclusion",
    paragraphs: [
      [
        "Marketing agencies are a strong potential customer segment for Tansiq because they manage multiple clients, campaigns, channels and large volumes of marketing information simultaneously.",
      ],
      [
        "Our research shows that many established agencies already use content, automation and analytics tools. Therefore, Tansiq should not compete simply as another content-generation or scheduling platform.",
      ],
      [
        "The stronger opportunity is to help agencies ",
        {
          strong:
            "remember what they have learned, understand what is working, and decide what to do next for each client",
        },
        ".",
      ],
      [
        "Marketing Memory, Creative Intelligence, Opportunity Radar and Decision Intelligence could make Tansiq significantly more valuable to this segment.",
      ],
    ],
    statusNote:
      "Not a final #1–#5 ranking: all 20 segments have not yet been comparatively scored.",
  },
  prospects: [
    /* ───────── Oman ───────── */
    {
      id: "zomorod",
      name: "Zomorod Digital Marketing & Advertising Agency",
      country: "om",
      website: "https://zomorod.agency/",
      contact: { kind: "phone", number: "+968 9718 5621" },
      verified: [
        "Multi-client marketing operation covering strategy, social media, paid advertising, SEO, Google Business Profile and content production, with visible work across multiple industries including automotive, healthcare and real estate.",
        "The agency already has its own client-facing Growth Hub/workflow capabilities.",
      ],
      opportunity:
        "Basic scheduling or approval functionality is therefore not the strongest pitch. The stronger opportunity is retaining and learning from marketing knowledge across clients and campaigns.",
      solution: "Marketing Memory + Decision Intelligence + Cross-Client Learning",
      whyBuy:
        "Tansiq could add an intelligence layer above existing execution and workflow systems rather than attempting to replace them.",
      outreachAngle:
        "Turn accumulated client campaign knowledge into reusable marketing intelligence.",
      fitScore: 9.4,
      priority: "high",
    },
    {
      id: "dgmarketing",
      name: "DGMarketing",
      country: "om",
      website: "https://dgmarketing.om/",
      contact: { kind: "phone", number: "+968 7856 7972" },
      verified: [
        "Works with 100+ companies and provides content, advertising, CRM, funnels, automation and AI sales-agent capabilities.",
        "The agency publishes lead-generation and ROAS-oriented case studies.",
      ],
      opportunity:
        "This is already a technologically advanced agency. Basic automation is therefore a weak Tansiq pitch.",
      solution: "Performance Decision Intelligence + Campaign Learning Memory",
      whyBuy:
        "A system that learns from previous campaign performance and recommends what deserves priority next could complement their existing automation stack.",
      outreachAngle:
        "Move from campaign automation to campaign learning and next-action intelligence.",
      fitScore: 9.3,
      priority: "high",
    },
    {
      id: "spectrum-solutions",
      name: "Spectrum Solutions",
      country: "om",
      website: "https://spectrumoman.com/",
      contact: { kind: "phone", number: "+968 9511 1475" },
      verified: [
        "Provides Social Media, SEO, AEO/GEO, Meta/Google advertising, performance marketing and AI-integrated marketing, with visible multi-industry work.",
      ],
      opportunity:
        "Multiple discovery and acquisition channels create a decision layer: which channel, topic or opportunity should receive attention next for each client?",
      solution: "Search + AI Search + Social Decision Intelligence",
      whyBuy:
        "Tansiq could connect signals across traditional Search, AI Search, Social and paid acquisition instead of treating them as separate activities.",
      outreachAngle:
        "Connect Search, AI Search, Social and campaign data into one next-action intelligence layer.",
      fitScore: 9.2,
      priority: "high",
    },
    {
      id: "the-growth-pillars",
      name: "The Growth Pillars",
      country: "om",
      website: "https://thegrowthpillars.com/",
      contact: { kind: "phone", number: "+968 7664 9949" },
      verified: [
        "Muscat-based marketing and advertising operation working across multiple marketing disciplines and campaign activities.",
      ],
      opportunity:
        "Multi-disciplinary execution creates an opportunity to preserve strategic context and previous campaign knowledge.",
      solution: "Client Marketing Memory + Decision Intelligence",
      whyBuy:
        "Persistent client knowledge can increase the value of accumulated campaign experience.",
      outreachAngle:
        "Preserve client strategy and campaign learning instead of rebuilding context repeatedly.",
      fitScore: 8.7,
      priority: "medium-high",
    },
    {
      id: "haffaf-digital",
      name: "Haffaf Digital Agency",
      country: "om",
      website: "https://www.haffafdigital.com/",
      contact: { kind: "phone", number: "+968 9907 7167" },
      verified: [
        "Provides Social Media Marketing, SEO, advertising, content, design, photography/video and web services, with specialist roles across Social, SEO, content and creative production.",
      ],
      opportunity:
        "Multiple specialist functions create an opportunity for shared brand context and marketing learning.",
      solution: "Brand Memory + Content Intelligence + Workflow Coordination",
      whyBuy:
        "A shared intelligence layer could help different specialists work from the same retained client context.",
      outreachAngle:
        "Give every specialist working on a client access to the same marketing memory and learnings.",
      fitScore: 8.6,
      priority: "medium-high",
    },

    /* ───────── UAE ───────── */
    {
      id: "creative-media-house",
      name: "Creative Media House",
      country: "ae",
      website: "https://creativemediahouse.ae/",
      contact: { kind: "phone", number: "+971 52 139 2606" },
      verified: [
        "Data-driven 360-degree agency working across Digital, Social, campaigns and events, with visible case studies including established brands and institutions.",
      ],
      opportunity:
        "Different client types and campaign contexts create substantial institutional marketing knowledge.",
      solution: "Multi-Client Marketing Memory + Decision Intelligence",
      whyBuy:
        "Retaining learnings across diverse client campaigns can make future planning more informed.",
      outreachAngle: "Turn campaign history across clients into reusable agency intelligence.",
      fitScore: 9.3,
      priority: "high",
    },
    {
      id: "medialinks",
      name: "Medialinks",
      country: "ae",
      website: "https://themedialinks.com/",
      contact: { kind: "phone", number: "+971 55 858 4966" },
      verified: [
        "Works across mobile growth, paid media, Social, SEO and activations and operates across UAE, Saudi Arabia and additional markets.",
      ],
      opportunity:
        "Multiple channels and markets create a strong cross-market decision problem surface.",
      solution: "Performance Decision Intelligence + Cross-Market Learning",
      whyBuy:
        "Tansiq could preserve and compare marketing learnings across markets and acquisition channels.",
      outreachAngle:
        "Convert multi-market acquisition data into repeatable next-action intelligence.",
      fitScore: 9.4,
      priority: "high",
    },
    {
      id: "prism-digital",
      name: "Prism Digital",
      country: "ae",
      website: "https://www.prism-me.com/",
      contact: { kind: "phone", number: "+971 55 850 0095" },
      verified: [
        "Works across Social Media, SEO, PPC, content and digital campaigns and tracks performance signals including engagement, traffic, conversion and ROAS.",
      ],
      opportunity:
        "A broad multi-platform environment produces many metrics but also creates a prioritisation opportunity.",
      solution: "Cross-Channel Intelligence + Marketing Memory",
      whyBuy: "Tansiq could help translate performance data into recommended marketing priorities.",
      outreachAngle: "Move from multi-channel reporting to multi-channel decision intelligence.",
      fitScore: 9.1,
      priority: "high",
    },
    {
      id: "donut-media",
      name: "Donut Media",
      country: "ae",
      website: "https://www.poweredbydonut.com/",
      contact: { kind: "phone", number: "+971 58 587 2250" },
      verified: [
        "F&B-focused agency with a large retainer portfolio covering Social Media, content, branding, WhatsApp lead generation, Google Maps and delivery-platform optimisation.",
      ],
      opportunity:
        "Repeated restaurant campaigns create valuable category-specific knowledge around offers, creatives, locations and acquisition channels.",
      solution: "F&B Marketing Intelligence + Creative Learning",
      featureOpportunity:
        "Build vertical intelligence capable of learning what types of offers, creatives and channels perform across different restaurant categories.",
      whyBuy: "Their accumulated F&B campaign knowledge could become more reusable and actionable.",
      outreachAngle:
        "Turn restaurant campaign experience into an intelligence system that learns what works by brand, offer and channel.",
      fitScore: 9.5,
      priority: "high",
    },
    {
      id: "upscale-media",
      name: "Upscale Media",
      country: "ae",
      website: "https://upscalemedia.ae/",
      contact: { kind: "phone", number: "+971 58 558 0841" },
      verified: [
        "Specialist restaurant/F&B marketing operation working across Social, digital marketing, Local SEO, delivery platforms and restaurant growth.",
      ],
      opportunity:
        "Restaurant marketing is strongly affected by seasonality, offers, local demand, delivery behaviour and channel performance.",
      solution: "Restaurant Opportunity Radar + Decision Intelligence",
      featureOpportunity:
        "Automatically identify potential campaign opportunities based on seasonality, previous performance, Search demand and restaurant-specific signals.",
      whyBuy:
        "This could strengthen their ability to proactively identify the next growth opportunity for restaurant clients.",
      outreachAngle:
        "Give every restaurant client a proactive opportunity radar rather than another content calendar.",
      fitScore: 9.2,
      priority: "high",
    },

    /* ───────── Qatar ───────── */
    {
      id: "x-qatar",
      name: "X! Qatar",
      country: "qa",
      website: "https://www.xqatar.qa/",
      contact: { kind: "phone", number: "+974 7799 3299" },
      verified: [
        "Provides Digital, Social, content, CX and production services with visible work for major brands including Qatar Airways, Baladna, Honda, Siemens and Lesha Bank.",
      ],
      opportunity:
        "A large and diverse client portfolio creates substantial multi-brand marketing knowledge.",
      solution: "Multi-Brand Marketing Memory + Decision Intelligence",
      whyBuy:
        "Tansiq could preserve learnings across large numbers of campaigns without mixing individual brand context.",
      outreachAngle:
        "Turn years of multi-brand campaign knowledge into structured, reusable intelligence.",
      fitScore: 9.6,
      priority: "high",
    },
    {
      id: "fookis-labs",
      name: "Fookis Labs",
      country: "qa",
      website: "https://www.fookislabs.com/",
      contact: { kind: "phone", number: "+974 5527 5461" },
      verified: [
        "Works across content, Social, paid search, marketing automation, analytics, CRO and multiple industries.",
      ],
      opportunity:
        "Because automation already exists, another basic automation layer offers limited differentiation.",
      solution: "Creative Intelligence + Cross-Channel Learning",
      whyBuy:
        "Tansiq could learn from creative and campaign performance and support better decisions rather than simply automate execution.",
      outreachAngle: "Make existing automation smarter by adding campaign and creative learning.",
      fitScore: 9.3,
      priority: "high",
    },
    {
      id: "digiturnal",
      name: "Digiturnal",
      country: "qa",
      website: "https://www.digiturnal.com/",
      contact: { kind: "phone", number: "+974 6660 6710" },
      verified: [
        "Works across strategy, Social Growth, analytics-led distribution, automation/systems and production.",
      ],
      opportunity:
        "Strong alignment exists between their analytics-driven approach and a system capable of recommending next actions.",
      solution: "Decision Intelligence + Marketing Learning Loop",
      whyBuy:
        "Tansiq could close the gap between analysing performance and deciding what the team should do next.",
      outreachAngle:
        "Turn analytics into a continuous strategy → execution → learning → next-action loop.",
      fitScore: 9.1,
      priority: "high",
    },
    {
      id: "sphere-qatar",
      name: "Sphere Qatar",
      country: "qa",
      website: "https://www.sphereqatar.com/",
      contact: { kind: "phone", number: "+974 4415 7089" },
      verified: [
        "Works across SEO, Social, content, campaigns, media buying, influencers and AI-related integrations.",
      ],
      opportunity:
        "The breadth of channels creates a prioritisation and knowledge-retention opportunity.",
      solution: "Marketing Memory + Campaign Decision Intelligence",
      whyBuy:
        "A unified intelligence layer could connect learning across otherwise separate marketing disciplines.",
      outreachAngle: "Connect SEO, Social, media and campaign learning into one decision layer.",
      fitScore: 8.9,
      priority: "medium-high",
    },
    {
      id: "global-hub-consulting",
      name: "Global Hub Consulting",
      country: "qa",
      website: "https://www.globalhub.qa/",
      contact: { kind: "phone", number: "+974 3014 4463" },
      verified: [
        "Works across marketing strategy, content calendars, production, AI creative, Social, advertising and monthly performance reporting.",
      ],
      opportunity:
        "Their strategy-first approach creates strong alignment with proactive recommendation and marketing-memory capabilities.",
      solution: "Strategy Memory + Decision Intelligence + Opportunity Radar",
      whyBuy:
        "Tansiq could retain strategy and performance context and recommend opportunities between reporting cycles.",
      outreachAngle:
        "Move from monthly performance reporting to continuous marketing opportunity detection.",
      fitScore: 9.0,
      priority: "high",
    },

    /* ───────── Saudi Arabia ───────── */
    {
      id: "element8",
      name: "Element8",
      country: "sa",
      website: "https://www.element8.sa/",
      contact: { kind: "phone", number: "+966 11 470 3408" },
      verified: [
        "Large digital operation with hundreds of projects and capabilities across digital marketing, platforms, automation and private AI, including enterprise and government work.",
      ],
      opportunity:
        "This is a sophisticated prospect. Basic Tansiq capabilities will not be sufficient.",
      solution: "Enterprise Decision Intelligence + Marketing Memory",
      whyBuy:
        "The potential value is an intelligence layer capable of retaining marketing context and supporting complex decisions across accounts.",
      outreachAngle: "Position Tansiq as an intelligence layer, not another execution platform.",
      fitScore: 8.8,
      priority: "medium-high",
    },
    {
      id: "chain-reaction",
      name: "Chain Reaction",
      country: "sa",
      website: "https://www.chainreaction.sa/en/",
      contact: { kind: "phone", number: "+966 55 070 1627" },
      verified: [
        "Integrated digital agency with Riyadh operations combining data, technology and marketing across multiple digital disciplines.",
      ],
      opportunity:
        "Cross-client and cross-market campaign knowledge can become reusable intelligence.",
      solution: "Cross-Market Decision Intelligence + Marketing Memory",
      whyBuy:
        "Tansiq could help institutionalise learning across clients, markets and campaign types.",
      outreachAngle: "Turn cross-market campaign experience into a persistent decision system.",
      fitScore: 9.2,
      priority: "high",
    },
    {
      id: "wisoft-solutions",
      name: "Wisoft Solutions",
      country: "sa",
      website: "https://www.wisoftsolutions.sa/en",
      contact: { kind: "phone", number: "+966 50 837 6256" },
      verified: [
        "Works across performance marketing, SEO, SMS/WhatsApp, Social, creative, web and applications.",
      ],
      opportunity:
        "Search, Social, messaging and paid performance create multiple disconnected decision inputs.",
      solution: "Cross-Channel Decision Intelligence + Campaign Memory",
      whyBuy: "Tansiq could connect these signals and preserve previous campaign learnings.",
      outreachAngle:
        "Connect Search, Social, messaging and paid performance into one next-action layer.",
      fitScore: 9.1,
      priority: "high",
    },
    {
      id: "edirect-saudi",
      name: "eDirect Saudi",
      country: "sa",
      website: "https://edirect.sa/",
      contact: { kind: "phone", number: "+966 11 261 1594" },
      verified: [
        "Riyadh operation providing Social Media, SEO, PPC, branding, e-commerce, applications and web services.",
      ],
      opportunity:
        "Multi-service delivery creates substantial client context distributed across disciplines.",
      solution: "Client Marketing Memory + Decision Intelligence",
      whyBuy:
        "Persistent client-level context can support coordination and better prioritisation across services.",
      outreachAngle:
        "Create one persistent marketing intelligence layer across every service delivered to a client.",
      fitScore: 8.9,
      priority: "medium-high",
    },
    {
      id: "aist-agency",
      name: "AIST Agency",
      country: "sa",
      website: "https://aist.sa/",
      contact: {
        kind: "website",
        note: "Use official website contact channel. No telephone number verified from the current official source.",
      },
      verified: [
        "Saudi marketing agency positioned around Social Media, content, paid campaigns, influencer marketing and AI-enabled marketing.",
      ],
      opportunity:
        "Campaign, audience and creative data can potentially become reusable decision intelligence.",
      solution: "Creative Intelligence + Decision Intelligence",
      whyBuy:
        "The strongest value proposition is helping their team learn from campaign history rather than adding another AI-generation tool.",
      outreachAngle:
        "Turn AI-assisted execution into AI-assisted marketing learning and decision-making.",
      fitScore: 8.7,
      priority: "medium-high",
    },
  ],
};
