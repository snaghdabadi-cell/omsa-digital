// Shared shape for the short "how customers find and choose a business" hubs
// used by industry and location pages, organised as journey stages.

// One internal link over an exact substring of hub copy. Kept to service and
// post destinations (both typed routes) rather than importing the larger
// ContentLink union from services-data.ts into these lightweight catalogs.
export type HubLink = { anchor: string; kind: "service" | "post"; slug: string };
export type HubText = { text: string; link?: HubLink };
export type HubStage = { label: string; h3: string; body: HubText; points: string[] };
export type ContentHub = { h2: string; intro: HubText[]; stages: HubStage[]; closing?: HubText };
