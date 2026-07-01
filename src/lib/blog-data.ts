// Editorial catalog. Each post is a fully-renderable Article entity.

import workAi from "@/assets/work-ai.jpg";
import workHotel from "@/assets/work-hotel.jpg";
import workDashboard from "@/assets/work-dashboard.jpg";
import workCorporate from "@/assets/work-corporate.jpg";
import workClinic from "@/assets/work-clinic.jpg";
import workRealestate from "@/assets/work-realestate.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category:
    | "SEO"
    | "Technical SEO"
    | "Local SEO"
    | "Website Design"
    | "UX"
    | "Google Analytics"
    | "AI"
    | "Automation"
    | "Digital Marketing"
    | "Business Growth";
  date: string; // ISO
  readMinutes: number;
  image: string;
  relatedServices: string[]; // service slugs
  body: { h2: string; p: string[] }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ai-assistants-luxury-hospitality",
    title: "The honest case for AI assistants in luxury hospitality",
    excerpt:
      "Where AI genuinely improves the guest experience — and where it quietly damages your brand.",
    category: "AI",
    date: "2026-06-24",
    readMinutes: 8,
    image: workAi,
    relatedServices: ["ai-chatbots", "website-design"],
    body: [
      { h2: "Why hospitality is the wrong place for a generic chatbot",
        p: [
          "Luxury hospitality is one of the few categories where the guest expects a human standard of attention from the first touchpoint. A clumsy chatbot doesn't just answer poorly — it actively contradicts the brand promise the property has spent decades building.",
          "Most AI assistants on hotel websites today are general-purpose tools dropped into a premium context. They produce stilted answers, no understanding of the property's services, and a tone that belongs on a discount aggregator.",
        ],
      },
      { h2: "What actually works",
        p: [
          "The assistants that earn their place are trained on the property's own content — the brand book, service catalogue, restaurant menus, spa treatments, suite descriptions, and FAQs. They speak in the property's voice, in Arabic or English, and they hand off to a human the moment a request becomes nuanced.",
          "They also do work no human team can. They answer at 3:14 a.m. when a guest is comparing properties from Singapore. They qualify reservation enquiries and route them to the right team. They never forget a long-haul guest mentioned a dietary preference six weeks earlier.",
        ],
      },
      { h2: "Where to start",
        p: [
          "Start narrow. Pick the two or three conversations that genuinely move the business — direct bookings, restaurant reservations, spa enquiries — and build the assistant around those. Measure resolution and handoff rates weekly. Expand only when each conversation is clean.",
          "And measure honestly. If guests prefer to wait for a human, that's information worth acting on. The point is to improve the experience, not to deflect it.",
        ],
      },
    ],
  },
  {
    slug: "ga4-events-for-hotels",
    title: "GA4 for hotel marketers: the events that actually matter",
    excerpt:
      "A short, practical guide to the GA4 setup we use for hospitality clients.",
    category: "Google Analytics",
    date: "2026-06-17",
    readMinutes: 6,
    image: workDashboard,
    relatedServices: ["google-analytics", "seo"],
    body: [
      { h2: "Out-of-the-box GA4 isn't enough",
        p: [
          "A default GA4 install measures sessions and pageviews. For a hotel, that's most of the way to useless. The questions a marketing director actually asks are about booking intent, room types, length of stay and revenue per visitor — none of which appear in the default reports.",
        ],
      },
      { h2: "The events worth modelling",
        p: [
          "We model six events for hospitality clients: booking_widget_open, date_select, room_view, rate_view, booking_continue and booking_complete. Each carries parameters for room type, rate plan, length of stay and value.",
          "That gives a clean funnel from intent to conversion, with the dimensions you need to compare campaigns, traffic sources and audiences in a way that matches how the commercial team thinks.",
        ],
      },
      { h2: "Connecting GA4 to revenue",
        p: [
          "The final step is wiring purchases — direct, OTA where possible, and post-stay revenue — back into GA4 via measurement protocol or a server-side container. Without that, even a perfect event model misses the only metric that matters.",
        ],
      },
    ],
  },
  {
    slug: "local-seo-playbook-gcc-hospitality",
    title: "A local SEO playbook for hospitality brands in the GCC",
    excerpt:
      "How to build long-term visibility in markets where reputation, language and locality all matter.",
    category: "Local SEO",
    date: "2026-06-09",
    readMinutes: 10,
    image: workHotel,
    relatedServices: ["local-seo", "seo"],
    body: [
      { h2: "Local search behaves differently in the GCC",
        p: [
          "Search behaviour across Oman and the UAE is mobile-first, bilingual and heavily reliant on reviews — often more than in Western markets. A local SEO programme that ignores any of those three pillars under-performs by default.",
        ],
      },
      { h2: "The five pillars worth investing in",
        p: [
          "Google Business Profile, properly maintained in both languages. Citations and NAP consistency. A steady review generation engine. Locally-relevant landing pages built around neighbourhoods, not just cities. Structured data describing the property, services and reviews.",
          "Done together, these compound. Done in isolation, they barely move the local pack.",
        ],
      },
    ],
  },
  {
    slug: "what-makes-corporate-website-premium",
    title: "What actually makes a corporate website feel premium",
    excerpt:
      "It isn't typography. It isn't motion. It's something quieter — and harder to fake.",
    category: "Website Design",
    date: "2026-05-28",
    readMinutes: 7,
    image: workCorporate,
    relatedServices: ["website-design", "seo"],
    body: [
      { h2: "The premium feeling is a sum, not a feature",
        p: [
          "Premium websites don't share a typeface or a colour. What they share is discipline — fewer ideas, executed with more care. Less copy, written with more precision. Less motion, used with more intent.",
        ],
      },
      { h2: "Three things every premium site gets right",
        p: [
          "First, clarity. Within five seconds, a visitor knows who the company is, who it helps, and what the next step is. Second, calm. Generous spacing, restrained motion, no aggressive promotion. Third, speed — premium and slow do not coexist.",
        ],
      },
    ],
  },
  {
    slug: "how-specialist-clinics-grow",
    title: "How specialist clinics grow without buying every lead",
    excerpt:
      "The compounding economics of organic search, reputation, and a well-designed booking experience.",
    category: "Business Growth",
    date: "2026-05-19",
    readMinutes: 9,
    image: workClinic,
    relatedServices: ["seo", "local-seo", "ai-chatbots"],
    body: [
      { h2: "The three engines that compound",
        p: [
          "Specialist clinics grow on three things compounding over years: discoverable expertise, trusted reputation, and a frictionless booking experience. Paid acquisition can supplement each, but none can be replaced by it.",
        ],
      },
      { h2: "Where to invest first",
        p: [
          "If the booking flow is broken, fix that first — no amount of traffic survives a clunky form. Next, invest in long-form expertise content and local SEO. Reviews come naturally when the experience is good and the prompt is timely.",
        ],
      },
    ],
  },
  {
    slug: "real-estate-landing-pages-uae",
    title: "Real estate landing pages that convert above 10%",
    excerpt:
      "The five things every high-converting bilingual landing page in the UAE gets right.",
    category: "Digital Marketing",
    date: "2026-05-06",
    readMinutes: 12,
    image: workRealestate,
    relatedServices: ["website-design", "google-analytics"],
    body: [
      { h2: "Conversion is mostly about clarity",
        p: [
          "Above-average landing pages aren't more persuasive — they're more specific. They speak to one buyer, one unit type, and one objection at a time.",
        ],
      },
      { h2: "The five things they share",
        p: [
          "A specific headline, a single primary CTA, a bilingual layout that doesn't feel translated, fast-loading rich media, and a qualifying assistant — usually WhatsApp — that routes serious enquiries to the right agent immediately.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);
