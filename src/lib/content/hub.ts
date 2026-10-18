// Shared shape for the short "how customers find and choose a business" hubs
// used by industry and location pages, organised as journey stages.

// One internal link over an exact substring of hub copy. Kept to service,
// post and industry destinations (all typed routes) rather than importing the
// larger ContentLink union from services-data.ts into these lightweight catalogs.
export type HubLink = { anchor: string; kind: "service" | "post" | "industry"; slug: string };
export type HubText = { text: string; link?: HubLink };
// A stage point is plain text, or text carrying one internal link.
export type HubPoint = string | HubText;
export type HubStage = { label: string; h3: string; body: HubText; points: HubPoint[] };
export type ContentHub = { h2: string; intro: HubText[]; stages: HubStage[]; closing?: HubText };
