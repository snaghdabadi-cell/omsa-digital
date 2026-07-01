// Future AI surface contract. Implementations (OpenAI, Anthropic, internal)
// will satisfy this interface so the UI never depends on a specific vendor.

export type AssistantMessage = { role: "user" | "assistant" | "system"; content: string };

export type AssistantRecommendation = { title: string; reason: string; path?: string };

export interface AssistantClient {
  chat(messages: AssistantMessage[], opts?: { locale?: string }): AsyncIterable<string>;
  search(query: string, opts?: { locale?: string }): Promise<Array<{ title: string; path: string; snippet: string }>>;
  recommend(context: { path?: string; tags?: string[] }): Promise<AssistantRecommendation[]>;
}

// Placeholder no-op client. Will be replaced once Lovable Cloud + AI Gateway
// are wired up.
export const assistant: AssistantClient = {
  async *chat() {
    yield "AI assistant coming soon.";
  },
  async search() {
    return [];
  },
  async recommend() {
    return [];
  },
};
