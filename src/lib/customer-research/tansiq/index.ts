import type { ResearchProgram } from "../types";
import { SEGMENT_01_AGENCIES } from "./segment-01-agencies";
import { SEGMENT_02_CLINICS } from "./segment-02-clinics";
import { SEGMENT_03_FNB } from "./segment-03-fnb";
import { SEGMENT_04_DESIGN_EVIDENCE } from "./segment-04-design-evidence";
import { SEGMENT_05_REAL_ESTATE } from "./segment-05-real-estate";
import { SEGMENT_06_MARKET_ENTRY } from "./segment-06-market-entry";

// Tansiq customer-discovery research. Private: rendered at TANSIQ_RESEARCH.path
// with noindex, follow; not in the sitemap or site navigation.
//
// To add a segment: create segment-NN-<name>.ts exporting a Segment and append
// it to `segments`. The page picks it up via ?segment=NN.

export const TANSIQ_RESEARCH: ResearchProgram = {
  client: "Tansiq",
  title: "Tansiq Customer Intelligence",
  path: "/review/tansiq-customer-intelligence",
  prepared: "October 2026",
  markets: ["om", "ae", "qa", "sa"],
  methodology: {
    evidence: {
      title: "Observed evidence",
      body: "Information publicly visible through official websites, published services, portfolios, case studies or verified public business information.",
    },
    hypothesis: {
      title: "Research opportunity / hypothesis",
      body: "A commercially relevant opportunity inferred from the observed evidence. Hypotheses are never presented as confirmed internal company problems.",
    },
    useWording: [
      "Opportunity identified",
      "Potential use case",
      "Research indicates",
      "Could benefit from",
    ],
    avoidWording: [
      "This company struggles with…",
      "Their team cannot…",
      "They have a problem with…",
    ],
  },
  segments: [
    SEGMENT_01_AGENCIES,
    SEGMENT_02_CLINICS,
    SEGMENT_03_FNB,
    SEGMENT_04_DESIGN_EVIDENCE,
    SEGMENT_05_REAL_ESTATE,
    SEGMENT_06_MARKET_ENTRY,
  ],
};
