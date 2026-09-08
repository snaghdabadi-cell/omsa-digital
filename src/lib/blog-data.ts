// Editorial catalog. Each post is a fully-renderable Article entity.

import workAi from "@/assets/work-ai.jpg";
import workHotel from "@/assets/work-hotel.jpg";
import workDashboard from "@/assets/work-dashboard.jpg";
import workCorporate from "@/assets/work-corporate.jpg";
import workClinic from "@/assets/work-clinic.jpg";
import workRealestate from "@/assets/work-realestate.jpg";
import workRestaurant from "@/assets/work-restaurant.jpg";

// Blog-scoped link types, deliberately separate from services-data.ts's
// ContentLink/AnchorLink (which has no "industry" kind and is used by the
// already-completed service-page architecture) rather than extending that
// shared type for a need specific to article body copy.
export type BlogContentLink =
  | { kind: "service"; slug: string }
  | { kind: "industry"; slug: string }
  | { kind: "location"; city: string }
  | { kind: "locations" };

// Attaches a BlogContentLink to one exact substring ("anchor") of a
// paragraph. Optional — most paragraphs are plain strings; only the ones
// carrying a natural internal link use the object form.
export type BlogAnchorLink = { anchor: string; link: BlogContentLink };
export type BlogParagraph = string | { text: string; link?: BlogAnchorLink };

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
  // Only set this when a post has genuinely been revised with a known date —
  // never backfilled for existing posts. Omitted, structured data falls back
  // to the publish date (see articleJsonLd in lib/seo.ts).
  dateModified?: string; // ISO
  readMinutes: number;
  image: string;
  relatedServices: string[]; // service slugs
  // Industry slugs, set only where the post's actual topic — not just its
  // category — genuinely matches that industry. Left unset rather than
  // guessed, same convention as relatedCaseStudySlug below. Powers the
  // "Related insights" reverse-link section on industry pages.
  relatedIndustrySlugs?: string[];
  // Slug of a CASE_STUDIES entry, set only where the post's actual topic
  // (not just its category) genuinely matches that case study's industry —
  // left unset rather than guessed for posts with no clear match.
  relatedCaseStudySlug?: string;
  body: { h2: string; p: BlogParagraph[]; bullets?: string[] }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ai-assistants-luxury-hospitality",
    title: "The honest case for AI assistants in luxury hospitality",
    excerpt:
      "Where AI genuinely improves the guest experience — and where it quietly damages your brand.",
    category: "AI",
    date: "2026-06-24",
    dateModified: "2026-09-07",
    readMinutes: 8,
    image: workAi,
    relatedServices: ["ai-chatbots", "website-design"],
    relatedCaseStudySlug: "muscat-hotel-direct-bookings",
    body: [
      { h2: "Why hospitality is the wrong place for a generic chatbot",
        p: [
          "Luxury hospitality is one of the few categories where the guest expects a human standard of attention from the first touchpoint. A clumsy chatbot doesn't just answer poorly — it actively contradicts the brand promise the property has spent decades building.",
          "Most AI assistants on hotel websites today are general-purpose tools dropped into a premium context. They produce stilted answers, no understanding of the property's services, and a tone that belongs on a discount aggregator.",
        ],
      },
      { h2: "What actually works: assistants trained on the property's own content",
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
    slug: "whatsapp-business-automation-gcc",
    title: "WhatsApp business automation for GCC enquiries: what to automate and what to leave alone",
    excerpt:
      "What WhatsApp automation can genuinely handle for a GCC business — and the moments it should always hand to a person.",
    category: "Automation",
    date: "2026-09-08",
    readMinutes: 7,
    image: workDashboard,
    relatedServices: ["business-automation", "ai-chatbots"],
    body: [
      { h2: "The enquiry channel most businesses still handle by hand",
        p: [
          "In Oman, the UAE and across the GCC, WhatsApp is often the first and most trusted channel a customer uses to reach a business — ahead of a contact form, sometimes ahead of a phone call. A property developer, a clinic, a boutique retailer or a logistics provider will typically get more serious enquiries through WhatsApp than through any other single channel. Yet most of those conversations are still handled manually: one person, or a small team, reading messages as they arrive, retyping the same answers, and losing track of who replied to what.",
          "That gap — high enquiry volume moving through a channel with no structure behind it — is where WhatsApp business automation earns its place, provided it's applied narrowly and honestly.",
        ],
      },
      { h2: "What WhatsApp enquiry automation actually is",
        p: [
          "WhatsApp business automation is the use of structured workflows, connected through the WhatsApp Business Platform, to handle parts of an incoming conversation without requiring a person to type every reply. It doesn't replace the WhatsApp conversation a customer already prefers — it adds structure behind it: routing messages to the right person, asking qualifying questions, answering common queries instantly, and making sure nothing sits unread overnight.",
          { text: "It's a subset of the same discipline used across a business's other repetitive processes — business automation applied to the specific mechanics of a WhatsApp conversation, which behaves differently from an email inbox or a web form because replies are expected in minutes, not days.",
            link: { anchor: "business automation", link: { kind: "service", slug: "business-automation" } } },
        ],
      },
      { h2: "What can genuinely be automated",
        p: [
          "The useful part of WhatsApp automation is almost always mechanical, not conversational:",
        ],
        bullets: [
          "Lead routing — sending a new enquiry to the right person or team based on what the customer typed, instead of a shared inbox everyone half-watches.",
          "Qualification — a short structured sequence that captures budget, timeline, unit type or service needed, before a human ever joins the conversation.",
          "FAQ handling — instant answers to the questions that repeat daily: opening hours, pricing ranges, availability, service areas, booking links.",
          "Notifications — alerting the right team member the moment a qualified enquiry arrives, rather than relying on someone checking the app.",
          "CRM or spreadsheet handoff — pushing a structured record of the conversation into the system the sales or operations team already works from.",
          "Follow-up logic — a scheduled, honest follow-up message for enquiries that went quiet, rather than letting a lead disappear.",
        ],
      },
      { h2: "Where automation should not replace a person",
        p: [
          "Automation should own the mechanical parts of a conversation — routing, capturing structured information, answering repeated questions — and hand off the moment a request needs judgment: a price negotiation, a complaint, a medical question, a legal or contractual detail, or anything where the customer is clearly frustrated. A GCC customer messaging a business on WhatsApp generally expects a fast, human-quality response; an automated flow that traps someone in menu options when they need a real answer does more damage than the manual process it replaced.",
          { text: "Where a conversation needs more judgment than a fixed flow can provide — understanding a free-text question and answering it in context — that's the territory a proper AI chatbot covers, rather than a rigid automation sequence; the two are complementary, not interchangeable.",
            link: { anchor: "AI chatbot", link: { kind: "service", slug: "ai-chatbots" } } },
        ],
      },
      { h2: "A practical example",
        p: [
          "Consider a mid-sized real estate brokerage fielding forty to sixty WhatsApp enquiries a day about active listings. Without automation, every message competes for the same person's attention, serious buyers wait behind casual ones, and enquiries sent after hours are often answered the next afternoon. With a scoped automation layer, an incoming message is matched to the listing it references, a short qualification sequence captures budget range and viewing timeline, the enquiry is routed to the agent who owns that listing, and a summary lands in the CRM automatically. The agent still does the actual selling — the system's job ends at getting them a qualified, structured conversation to start from.",
        ],
      },
      { h2: "Implementation considerations",
        p: [
          "Automation like this is normally built on the WhatsApp Business Platform — the API-based version of WhatsApp Business, distinct from the free WhatsApp Business App most small businesses start with — connected through an approved provider. Approval, message-template rules and per-conversation pricing are set by Meta, not by whichever team implements the automation, which is worth knowing before assuming a project can go live overnight.",
          "Consent and privacy matter here as much as anywhere else a business collects customer data. At minimum: be clear with customers about what happens to their information, avoid collecting more than the conversation actually needs, and keep enquiry data inside systems the business actually controls. This isn't legal advice, and requirements vary by jurisdiction and by the specifics of a business — one handling sensitive categories of data, such as health or financial information, should get that reviewed directly rather than relying on generic guidance.",
        ],
      },
      { h2: "Where to start",
        p: [
          "Start with the highest-volume, most repetitive part of the conversation — usually qualification or FAQ handling — and automate only that first. Measure how many conversations resolve cleanly versus how many need a human takeover, and expand from there. The goal isn't to remove the person from WhatsApp; it's to make sure the person only spends time on the parts of the conversation that actually need them.",
        ],
      },
    ],
  },
  {
    slug: "bilingual-seo-gcc-arabic-english",
    title: "Bilingual SEO for GCC websites: where Arabic and English sites go wrong",
    excerpt:
      "The technical mistakes that quietly cost bilingual GCC sites search visibility — and how to fix them properly.",
    category: "Technical SEO",
    date: "2026-09-08",
    readMinutes: 9,
    image: workCorporate,
    relatedServices: ["technical-seo", "seo"],
    body: [
      { h2: "Bilingual isn't the same as translated",
        p: [
          "Most Arabic/English websites in the GCC start as an English site with an Arabic version added afterwards — a literal translation dropped into the same template, sometimes without even flipping the layout direction. That approach usually satisfies a language requirement without doing anything for search visibility, and in a market where a meaningful share of commercial searches happen in Arabic, that's a real cost, not a cosmetic one.",
          { text: "In competitive, bilingual markets like Dubai, the sites that rank consistently in both languages treat Arabic as its own strategy from the start, not a translation bolted on afterward.",
            link: { anchor: "Dubai", link: { kind: "location", city: "dubai" } } },
          "Getting this right technically is a distinct discipline from getting it right editorially. Both matter; this article focuses on the technical side — the part that decides whether search engines can even tell the two versions of a page apart correctly.",
        ],
      },
      { h2: "hreflang: what it does, and the mistake almost everyone makes",
        p: [
          "hreflang is an HTML attribute (or sitemap entry) that tells search engines which language, and optionally which region, a page is written for, and which other URLs are its equivalent versions in other languages. Its job isn't to translate anything — it's to stop search engines guessing, and to stop them showing an English result to an Arabic searcher, or the reverse, when a better-matched version exists.",
          "The most common implementation mistake is one-directional tagging: the English page correctly points to the Arabic version, but the Arabic page doesn't point back. hreflang has to be reciprocal — every language version needs to reference every other version, including itself — or search engines are likely to ignore the whole set of annotations rather than partially trust it.",
        ],
        bullets: [
          "Every language version references every other version, including itself (a self-referencing entry).",
          "Use consistent language codes — ar for Arabic generally, ar-AE only where the content genuinely differs for the UAE specifically, not as a default habit.",
          "Point hreflang at each version's final, canonical URL — never one that redirects.",
          "Add an x-default entry only where a genuine language-neutral fallback page exists, not automatically.",
        ],
      },
      { h2: "URL structure and locale targeting",
        p: [
          "A consistent, predictable URL pattern makes this system easier to maintain and easier for search engines to trust. The common, defensible options are a subdirectory (site.com/ar/...) or a separate subdomain (ar.site.com) — subdirectories are usually the simpler choice for a business without an existing reason to split infrastructure, since they share domain authority automatically rather than needing it rebuilt separately.",
          "What causes real problems is inconsistency: some Arabic pages living under /ar/, others generated through a query parameter, and others detected purely by browser language with no distinct URL at all. If a page's language can't be reached through a stable URL, it can't be indexed, linked to, or referenced by hreflang reliably.",
        ],
      },
      { h2: "Arabic and English are not duplicate content — but common implementations accidentally create real duplicates",
        p: [
          "A properly translated Arabic page and its English equivalent are not duplicate content in any meaningful sense — they're different content in different languages serving different searchers, and treating them as interchangeable is a mistake in the other direction. Where real duplication does happen is more mundane: the same Arabic content reachable at two different URLs, with and without a trailing slash or query parameter, or an English page that's Arabic in name only because the translation was skipped and the original English text was left in place under an /ar/ URL. That second case genuinely is thin and unhelpful, and worth fixing before anything else on this list.",
        ],
      },
      { h2: "Canonical mistakes with language versions",
        p: [
          "The most damaging mistake here is a canonical tag that points across languages — an Arabic page whose canonical points at the English version. That tells search engines the Arabic page isn't the \"real\" one, and it can quietly remove it from Arabic search results entirely. Each language version should canonicalize to itself; hreflang, not canonical, is the mechanism for describing the relationship between language versions.",
        ],
      },
      { h2: "Translation quality vs SEO localization",
        p: [
          "These are two different jobs, and a business that only does one usually assumes it's covered both. Translation quality is whether the Arabic reads naturally and accurately. SEO localization is whether that Arabic content is actually built around how Arabic speakers search — which keywords, phrasing and structure they use — rather than a literal translation of English keyword targets that may not reflect real Arabic search behaviour at all.",
          "A page can be translated perfectly and still target the wrong terms, because the English keyword research was never redone in Arabic.",
        ],
      },
      { h2: "Arabic metadata and RTL details worth knowing",
        p: [
          "Title tags and meta descriptions in Arabic script often display differently in a search result than the same character count would in Latin script — worth checking in an actual preview rather than assuming English-length guidance carries over exactly. The page itself needs a correct dir=\"rtl\" and lang=\"ar\" declaration, not just visually mirrored styling, so browsers, assistive technology and search engines all interpret the page's structure and language correctly rather than guessing from the visible layout alone.",
        ],
      },
      { h2: "Internal linking between language versions",
        p: [
          "A language switcher is necessary but not sufficient. Beyond it, internal links inside the Arabic content should point to other Arabic pages, and English content to other English pages, rather than accidentally crossing between languages mid-navigation — every stray cross-language link works against the separation hreflang is trying to establish.",
          { text: "The same discipline that shapes SEO strategy generally — matching content to how people actually search — applies separately in each language, not once for both.",
            link: { anchor: "SEO strategy", link: { kind: "service", slug: "seo" } } },
        ],
      },
      { h2: "A practical technical checklist",
        p: [
          "Before treating a bilingual site as done, it's worth checking each of the following directly rather than assuming a CMS or plugin handled it correctly:",
        ],
        bullets: [
          "Every language version has a self-referencing hreflang entry, plus a matching entry pointing to each other version.",
          "URLs follow one consistent pattern — no mixed query-parameter and path-based language switching.",
          "Canonical tags never point across languages; each version canonicalizes to itself.",
          "No English content sits under an Arabic URL untranslated, or the reverse.",
          "Titles, meta descriptions and headings are written for Arabic search behaviour, not translated from English keyword targets.",
          "Every page declares the correct lang and dir attributes.",
          "Internal links stay within their own language wherever possible.",
          "The sitemap lists both language versions as separate, indexable URLs.",
        ],
      },
      { h2: "Why this is worth getting right",
        p: [
          "For a market where the same customer might search in Arabic on one visit and English on the next, this isn't an edge case worth deprioritising — it's the difference between showing up for half the addressable market or all of it.",
          { text: "Where a site's underlying architecture makes this hard to implement cleanly, that's usually a sign it needs a proper Technical SEO pass before anything else.",
            link: { anchor: "Technical SEO", link: { kind: "service", slug: "technical-seo" } } },
        ],
      },
    ],
  },
  {
    slug: "ecommerce-seo-gcc-retailers",
    title: "Ecommerce SEO for GCC retailers: the technical foundations that actually move rankings",
    excerpt:
      "The structural SEO work that actually moves rankings for online stores, from category architecture to faceted navigation.",
    category: "SEO",
    date: "2026-09-08",
    readMinutes: 9,
    image: workRestaurant,
    relatedServices: ["seo", "technical-seo"],
    relatedIndustrySlugs: ["retail"],
    body: [
      { h2: "Ecommerce SEO is a distinct discipline",
        p: [
          "This article covers ecommerce SEO specifically — the search-visibility work that applies once a store already exists on Shopify, Salla, Magento or a custom platform — not the build of the store itself.",
          { text: "For retail businesses competing in crowded categories across the GCC, structural fixes usually matter more than creative ones, because the same mistake repeated across a large catalogue compounds fast.",
            link: { anchor: "retail businesses", link: { kind: "industry", slug: "retail" } } },
          "The core SEO problem is almost always structural before it's creative: a large, fast-changing product catalogue that search engines struggle to crawl efficiently, categories that compete with each other for the same searches, and product pages that are functionally identical to a dozen competitors selling the same item.",
        ],
      },
      { h2: "Category architecture is the foundation",
        p: [
          "Category pages, not product pages, usually carry the SEO weight for broader searches — \"running shoes\" rather than one specific shoe. A shallow, logical category structure, ideally reachable within two or three clicks from the homepage, gives search engines a clear map of what the store sells and lets authority flow down to individual products. Categories that are too granular fragment that authority across dozens of near-empty pages; categories that are too broad make it hard to rank for anything specific.",
        ],
      },
      { h2: "Making product pages actually discoverable",
        p: [
          "A product page built entirely from manufacturer-supplied specifications reads identically to every other store selling the same product — nothing on the page gives a search engine, or a shopper comparing tabs, a reason to prefer this version. The pages that perform add something the spec sheet doesn't: a clear, specific description of who the product suits, how it compares to close alternatives, and answers to the questions a buyer would otherwise message customer support to ask.",
        ],
      },
      { h2: "Faceted navigation and the duplicate-URL problem",
        p: [
          "Filters and sort options — colour, size, price range, \"sort by newest\" — are essential for shoppers and genuinely risky for SEO if implemented carelessly, because each combination can generate its own indexable URL. A single category can silently produce hundreds of near-identical page variants. Left unmanaged, that spreads the category's ranking signal across too many URLs and can waste a large share of what search engines are willing to crawl on a given site.",
        ],
        bullets: [
          "Filter and sort parameters should canonicalize back to the clean category URL, unless a specific filtered view is deliberately made indexable.",
          "Parameters that only reorder existing products rarely deserve their own indexable URL at all.",
          "robots.txt and meta robots should work together, not against each other — blocking a URL from crawling while also marking it indexable sends a contradictory signal.",
        ],
      },
      { h2: "Internal linking that carries weight",
        p: [
          "Related-product and \"customers also viewed\" modules do more SEO work than most stores realise, because they create the internal links that connect individual product pages back into the category structure. Without them, a store's best-selling products can end up as functional orphans, reachable only through search or a direct link. Breadcrumbs matter for the same reason — they reinforce the category hierarchy on every single product page.",
        ],
      },
      { h2: "Product schema",
        p: [
          "Structured Product schema — price, availability, currency and reviews where genuinely collected — helps search engines display richer results and parse a page's core facts accurately regardless of how the visual design presents them. It has to stay in sync with what the page actually shows; schema claiming a product is in stock when the visible page says otherwise is exactly the kind of inconsistency that erodes trust in a site's data over time.",
        ],
      },
      { h2: "Category pages need content, not just a product grid",
        p: [
          "A category page that's nothing but a grid of products has very little for a search engine to understand it by beyond the products' own titles. A short, genuinely useful block of category-level content — what the category covers, how to choose within it, sizing or compatibility notes relevant to the whole category — gives the page something distinct to rank on, separate from the individual products inside it.",
        ],
      },
      { h2: "Handling out-of-stock products without losing rankings",
        p: [
          "An out-of-stock product page is one of the most commonly mishandled pages on a retail site. Deleting it outright, and letting it 404, throws away every link and ranking signal it had built. The better approach depends on how likely the item is to return: keep the page live with a clear \"currently unavailable\" state and genuine alternatives if it's coming back, or redirect it to the closest matching live category or product if it's gone for good. A 404 should be the last option, not the default.",
        ],
      },
      { h2: "Core Web Vitals matter more on ecommerce than almost anywhere else",
        p: [
          "Product-image-heavy pages with filters, review widgets and third-party scripts are exactly the pages most prone to slow loading and layout shift, and ecommerce is also the category where speed most directly affects revenue — a shopper mid-comparison abandons a slow page faster than one reading an article. This is worth auditing specifically on category and product templates, not just the homepage.",
        ],
      },
      { h2: "Arabic/English and local search behaviour for GCC retail",
        p: [
          "Search behaviour for GCC shoppers is heavily mobile, frequently bilingual within a single shopping journey, and increasingly comparison-driven before a purchase — the same product researched in English one session and searched again in Arabic the next. A retailer that only optimises the English catalogue is invisible to a meaningful share of that demand.",
          { text: "This connects directly to the same SEO discipline behind the wider site — category and product pages need Arabic-specific keyword targeting, not a literal translation of the English targets.",
            link: { anchor: "SEO discipline", link: { kind: "service", slug: "seo" } } },
        ],
      },
      { h2: "A practical checklist",
        p: [
          "Before assuming a store's SEO foundation is solid, it's worth checking each of the following directly:",
        ],
        bullets: [
          "Category structure is shallow, logical and mapped to real search demand, not internal org charts.",
          "Product pages include original description content, not manufacturer specs alone.",
          "Filter and sort parameters canonicalize correctly and don't leak duplicate URLs into the index.",
          "Breadcrumbs and related-product links keep every product connected to its category.",
          "Product schema matches what the page visibly shows.",
          "Category pages carry genuine category-level content, not just a product grid.",
          "Out-of-stock products are handled with a clear status or a relevant redirect, not a silent 404.",
          "Core Web Vitals are checked on category and product templates specifically.",
          "Arabic and English catalogues are targeted with separately researched keywords.",
        ],
      },
      { h2: "The fundamentals still apply",
        p: [
          { text: "None of this replaces the basics — SEO and Technical SEO still set the foundation everything else is built on.",
            link: { anchor: "Technical SEO", link: { kind: "service", slug: "technical-seo" } } },
          "What's different about ecommerce is scale: the same mistake repeated across thousands of product pages costs thousands of times more than the same mistake on a five-page brochure site.",
        ],
      },
    ],
  },
  {
    slug: "ai-admissions-assistants-gcc-schools",
    title: "AI admissions assistants for GCC schools: what to automate, and what needs a human",
    excerpt:
      "What an AI admissions assistant can genuinely handle for a GCC school — and the decisions that must always stay with a person.",
    category: "AI",
    date: "2026-09-08",
    readMinutes: 7,
    image: workAi,
    relatedServices: ["ai-chatbots"],
    relatedIndustrySlugs: ["education"],
    body: [
      { h2: "Why admissions is a high-volume, repetitive conversation",
        p: [
          "Across Oman, the UAE and the wider GCC, school admissions teams field a similar set of questions dozens of times during peak enrolment periods: fees for a specific grade, available seats, curriculum details, transport routes, sibling-discount policies and document requirements. Answering the same question by phone or email, one family at a time, is where admissions staff lose the hours they'd rather spend on the applications that actually need judgment — a scholarship case, a mid-year transfer, a special-needs accommodation.",
          "That's the gap an AI admissions assistant is built to close: not replacing the admissions team, but absorbing the repetitive first layer of enquiry so the team's time goes toward decisions, not repetition.",
        ],
      },
      { h2: "What an AI admissions assistant actually does",
        p: [
          "An AI admissions assistant is a chatbot, usually embedded on the school's website or connected to WhatsApp, trained on the school's own admissions information — fee schedules, curriculum, term dates, seat availability by grade, and application steps — so it can answer a parent's specific question immediately rather than pointing them to a generic FAQ page.",
          { text: "It's the same category of tool covered more broadly under AI chatbots — the education-specific value comes from what it's trained on and how tightly its answers are scoped to information the school has actually approved.",
            link: { anchor: "AI chatbots", link: { kind: "service", slug: "ai-chatbots" } } },
        ],
      },
      { h2: "What it can genuinely handle",
        p: [
          "For most schools, the useful ground is mechanical and factual, not judgment-based:",
        ],
        bullets: [
          "Answering repeated factual questions — fees by grade, curriculum, term dates, uniform and transport policy — instantly and consistently across every enquiry.",
          "Checking basic eligibility — age cut-offs, grade availability, whether a seat currently exists — before a family invests time in a full application.",
          "Qualifying and routing — capturing which grade, campus and intake a family is asking about, then routing the enquiry to the right admissions officer.",
          "Multilingual handling — answering in Arabic or English as the parent writes, which matters directly in a region where the same family may switch language mid-conversation.",
          "Collecting structured enquiry details — so an admissions officer opens a conversation with the context already gathered, rather than starting from zero.",
          "After-hours coverage — a family researching schools at 9 p.m. gets an accurate answer instead of waiting until the office reopens.",
        ],
      },
      { h2: "Where AI should not make the decision",
        p: [
          "Every genuine admissions decision — offering a seat, granting a scholarship or fee concession, approving a special-needs accommodation, resolving a disputed document — belongs to a person with the authority and context to make it, not an automated flow. The assistant's role ends at giving accurate information and getting the right structured enquiry to that person quickly; it should never be positioned as making or implying an admissions outcome.",
          "The same caution applies to anything sensitive about a specific child — medical information, behavioural history, custody or guardianship questions. Those conversations should route straight to a person, clearly and immediately, rather than attempt an automated answer.",
        ],
      },
      { h2: "A practical example",
        p: [
          "Consider a mid-sized private school group running two campuses across a GCC city, each with its own grade-by-grade seat availability and fee structure. During the January–March enrolment window, the admissions inbox and phone line receive the same handful of questions from hundreds of different families. An assistant scoped to that school's real fee schedule and seat data can answer \"Is there a seat in Grade 3 at the city campus this year?\" precisely, in the family's language of choice, and hand off anything beyond that — a fee negotiation, a transfer request — to the admissions team with the context already captured.",
        ],
      },
      { h2: "Implementation considerations",
        p: [
          "The assistant is only as accurate as the information it's trained on, which means fee schedules, seat availability and policy details need an owner inside the school responsible for keeping that source information current — an assistant answering from three-month-old seat data creates more frustration than it prevents.",
          "Consent and privacy considerations apply directly here, arguably more than in most commercial contexts, because the data involves minors. At minimum: be explicit with parents about what information is collected and why, avoid collecting more than admissions genuinely requires at the enquiry stage, and keep any data collected inside systems the school controls. This isn't legal advice — a school should confirm its specific obligations with whoever handles its data protection and child-safeguarding policy, since requirements vary by jurisdiction and by the school's own governance framework.",
        ],
      },
      { h2: "Where to start",
        p: [
          "Start with the questions that repeat the most during peak enrolment — fees, seat availability, application steps — and scope the assistant to answer those accurately before expanding further. Track how many conversations resolve without needing a person, and treat every unclear or sensitive question the assistant can't answer as a signal for what needs a clear handoff path, not a reason to force an automated answer.",
        ],
      },
    ],
  },
  {
    slug: "ga4-professional-services-gcc",
    title: "GA4 for professional services firms in the GCC: measuring enquiries, not just traffic",
    excerpt:
      "Why session counts don't tell a services firm anything useful — and how to configure GA4 around actual enquiries instead.",
    category: "Google Analytics",
    date: "2026-09-08",
    readMinutes: 7,
    image: workDashboard,
    relatedServices: ["google-analytics"],
    relatedIndustrySlugs: ["professional-services"],
    body: [
      { h2: "Traffic isn't the number that matters for a services firm",
        p: [
          "A law firm, consultancy, accounting practice or architecture studio doesn't sell from a shopping cart — it sells from a conversation that usually starts with an enquiry form, a phone call, or a WhatsApp message. A default GA4 setup measures sessions, pageviews and bounce rate, none of which tell a partner whether the website is actually generating qualified enquiries or just traffic that reads a few pages and leaves.",
          "The fix isn't more traffic reporting. It's configuring GA4 around the handful of actions that actually indicate someone wants to talk to the firm.",
        ],
      },
      { h2: "The events worth measuring",
        p: [
          "For most professional services firms, three categories of action carry almost all the commercial signal:",
        ],
        bullets: [
          "Enquiry form submissions — the clearest, most measurable conversion GA4 can capture directly.",
          "Phone number clicks — on mobile, a tap-to-call action is a real intent signal and is measurable as an event, even though the resulting call itself isn't visible inside GA4.",
          "WhatsApp link clicks — increasingly the first contact method in the GCC, measurable as an outbound click even though the conversation that follows happens outside the website.",
          "Meaningful page engagement — time spent on service or expertise pages that signals genuine research rather than a bounce, useful as a supporting signal, not a conversion in itself.",
        ],
      },
      { h2: "Qualified leads vs vanity traffic",
        p: [
          "A spike in sessions from a broad, unrelated keyword or a social post rarely turns into enquiries — reporting only that number to leadership creates a false sense of momentum. What tells the real story is enquiry volume and quality relative to traffic: a smaller, more targeted audience that converts into serious enquiries is worth more to a services firm than a large audience that never contacts them.",
          "GA4 supports this distinction by letting a firm mark meaningful actions — a form submission, a call click — as key events, separating them from the dozens of lower-value interactions GA4 tracks by default.",
        ],
      },
      { h2: "The limits of attribution",
        p: [
          "A professional services buying decision often spans weeks and multiple research sessions before someone actually reaches out, and GA4's default attribution can only reconstruct part of that journey — it won't capture a referral conversation that happened over lunch, or a colleague's recommendation that sent someone straight to the contact page. Treat GA4 as a measurement of what's trackable, not a complete account of how every enquiry actually originated.",
          "Server-side or offline conversion imports can close part of that gap — for example, feeding a closed deal's origin back into GA4 — but that requires a CRM connection and deliberate setup, not something GA4 does automatically out of the box.",
          "Consistent UTM tagging on outbound links — from LinkedIn posts, email signatures, directory listings, anything a firm actually controls — is a simpler, lower-effort way to preserve at least some source detail that GA4 would otherwise report as generic referral or direct traffic.",
        ],
      },
      { h2: "A practical measurement plan",
        p: [
          "Start by defining, in plain language, what a \"qualified enquiry\" actually looks like for the firm — usually a form submission with a genuine business enquiry, a call longer than a token duration, or a WhatsApp conversation that goes beyond a single message. Configure GA4's key events around exactly those actions, connect Search Console to see which queries are actually generating them, and review the numbers monthly against enquiry volume the team can verify manually, not just what the dashboard reports.",
        ],
      },
      { h2: "Privacy-aware measurement",
        p: [
          "Professional services clients are often disclosing sensitive commercial or personal information at the enquiry stage, which makes it worth being deliberate about what analytics actually captures — tracking that a form was submitted is useful; capturing the contents of that form inside an analytics tool usually isn't necessary and adds a category of data the firm then has to manage and secure. This isn't legal guidance on data protection obligations, which vary by jurisdiction — it's a practical principle: collect the minimum an analytics platform needs to prove the enquiry happened, not everything the form itself asked for.",
          { text: "A properly scoped Google Analytics setup should tell a firm's leadership whether the website is working — not become a second, less secure copy of the client intake process.",
            link: { anchor: "Google Analytics", link: { kind: "service", slug: "google-analytics" } } },
        ],
      },
      { h2: "What this replaces",
        p: [
          "None of this requires new tools beyond GA4 itself, configured correctly around the firm's actual conversion points instead of left on its default settings. The value comes from deciding, deliberately, what counts as success before configuring anything — the measurement should follow the business definition of a qualified enquiry, not the other way around.",
        ],
      },
    ],
  },
  {
    slug: "local-seo-multi-location-gcc",
    title: "Local SEO for multi-location GCC businesses: building city pages that actually rank",
    excerpt:
      "Why one shared locations page rarely works for more than one city — and the structural work that makes each one rank on its own.",
    category: "Local SEO",
    date: "2026-09-08",
    readMinutes: 8,
    image: workCorporate,
    relatedServices: ["local-seo", "seo"],
    relatedIndustrySlugs: ["retail"],
    body: [
      { h2: "Why one location page rarely works for more than one city",
        p: [
          { text: "A business operating in Muscat and Dubai, or across three or four GCC cities, can't rely on a single \"About us\" or generic locations page to rank for searches happening in each individual city — a customer searching for a service \"in Muscat\" is looking for evidence the business genuinely serves Muscat, not a paragraph mentioning it alongside four other cities. The businesses that rank consistently across multiple cities build a genuine page for each one, not a shared page wearing different city names.",
            link: { anchor: "Muscat and Dubai", link: { kind: "locations" } } },
          { text: "This is the structural half of local SEO — the part that decides whether each city even has a fair chance to compete in its own local search results, separate from content quality or reviews.",
            link: { anchor: "local SEO", link: { kind: "service", slug: "local-seo" } } },
        ],
      },
      { h2: "What a real city page needs",
        p: [
          "A city page earns its place when it says something specific to that city — the neighbourhoods or districts served, transport or delivery specifics relevant there, and language or cultural context that differs from the business's other locations. A page that's identical to the one for a different city except for a find-and-replace of the city name is easy for both users and search engines to recognise as thin, templated content, and it rarely ranks against genuinely local competitors.",
        ],
      },
      { h2: "Google Business Profile: the other half of local visibility",
        p: [
          "A city page on the website and a Google Business Profile listing for that city do different jobs, and both matter. The website page targets organic search results and gives the business room to explain itself; the Business Profile is what shows up in Google Maps and the local map-pack, driven mostly by proximity, relevance and review signals rather than website content. A multi-location business needs a separately verified, accurately maintained profile for every city it genuinely serves, not one shared profile listing multiple cities.",
        ],
      },
      { h2: "NAP and entity consistency across cities",
        p: [
          "Name, address and phone number — NAP — need to match exactly everywhere they appear: the website, each Google Business Profile, and every directory listing. A business address written three different ways across different platforms sends a small but real trust-signal problem to search engines, which use consistency across sources as one input for how much to trust a listed location.",
        ],
      },
      { h2: "The duplicate and thin-content trap",
        p: [
          "The most common mistake in multi-city SEO is generating a page per city automatically, from a template, without any city-specific substance behind it — a dozen near-identical pages differing only in a city name and a swapped phone number. Search engines are specifically tuned to recognise this pattern, and the usual outcome isn't a dozen ranking pages — it's one page ranking, if any, with the rest treated as duplicates competing against each other rather than against outside competitors.",
          "The honest fix is fewer, better pages: a genuine page for every city where the business truly operates, and no page at all for a city where it doesn't — resisting the temptation to list a city \"for SEO\" ahead of actually serving customers there.",
        ],
      },
      { h2: "Avoiding false physical-presence claims",
        p: [
          "A page claiming a city as a \"location\" should only exist where that reflects something true — a genuine service area, a real local team, or a documented way the business serves that market — not simply because ranking for that city's searches would be valuable. Overstating physical presence in a city a business doesn't actually serve is a fast way to damage trust with customers who show up expecting an office that isn't there, and it's the kind of claim worth avoiding regardless of any SEO upside.",
        ],
      },
      { h2: "Internal linking that supports multi-city SEO",
        p: [
          "Each city page should link to the specific services relevant to that market, and service pages should, where genuinely relevant, link back to the cities they're offered in — not as a mechanical requirement, but because it helps both users and search engines understand which services are actually available where. A locations hub page tying every city together gives search engines one clear entry point into the whole set, rather than leaving city pages to be discovered in isolation.",
        ],
      },
      { h2: "Local intent is different from national intent",
        p: [
          "Someone searching \"[service] near me\" or \"[service] in [city]\" is closer to a decision than someone searching the same service without a location — they've usually already narrowed their options to businesses that serve their city specifically. Content built for that intent should answer local questions directly: does this business serve my area, how quickly, and what does that look like here versus their other locations — rather than repeating the same generic pitch used sitewide.",
        ],
      },
      { h2: "A practical checklist",
        p: [
          "Before treating a multi-city setup as done, it's worth checking each of the following directly:",
        ],
        bullets: [
          "A genuine, non-templated page exists for every city actually served — and no page exists for cities not genuinely served.",
          "Each city's Google Business Profile is separately verified and actively maintained.",
          "NAP details match exactly across the website, every Business Profile, and every directory listing.",
          "City pages link to relevant services, and services link back to the cities they're offered in.",
          "No city page implies an office or physical team the business doesn't actually have.",
          "A locations hub page connects every city into one discoverable structure.",
        ],
      },
      { h2: "Why this is worth doing properly",
        p: [
          { text: "For GCC businesses genuinely operating across multiple cities, this is one of the more overlooked forms of SEO — not because it's technically difficult, but because doing it honestly takes more page-by-page effort than a templated shortcut. The businesses that invest in it properly are usually the ones still ranking in each city a year later.",
            link: { anchor: "SEO", link: { kind: "service", slug: "seo" } } },
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
    dateModified: "2026-09-07",
    readMinutes: 6,
    image: workDashboard,
    relatedServices: ["google-analytics", "seo"],
    relatedCaseStudySlug: "muscat-hotel-direct-bookings",
    body: [
      { h2: "Out-of-the-box GA4 isn't enough",
        p: [
          "A default GA4 install measures sessions and pageviews. For a hotel, that's most of the way to useless. The questions a marketing director actually asks are about booking intent, room types, length of stay and revenue per visitor — none of which appear in the default reports.",
        ],
      },
      { h2: "The events worth modelling",
        p: [
          "The six events worth modelling for a hospitality site are booking_widget_open, date_select, room_view, rate_view, booking_continue and booking_complete. Each carries parameters for room type, rate plan, length of stay and value.",
          "That gives a clean funnel from intent to conversion, with the dimensions you need to compare campaigns, traffic sources and audiences in a way that matches how the commercial team thinks.",
        ],
      },
      { h2: "Connecting GA4 to revenue",
        p: [
          "The final step is wiring purchases — direct, OTA where possible, and post-stay revenue — back into GA4 via the Measurement Protocol (GA4's API for sending events directly from a server) or a server-side container (a tag manager instance running on your own server rather than the visitor's browser). Without that, even a perfect event model misses the only metric that matters.",
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
    dateModified: "2026-09-07",
    readMinutes: 10,
    image: workHotel,
    relatedServices: ["local-seo", "seo"],
    relatedCaseStudySlug: "muscat-hotel-direct-bookings",
    body: [
      { h2: "Local search behaves differently in the GCC",
        p: [
          "Search behaviour across Oman and the UAE is mobile-first, bilingual and heavily reliant on reviews — often more than in Western markets. A local SEO programme that ignores any of those three pillars under-performs by default.",
        ],
      },
      { h2: "The five pillars worth investing in",
        p: [
          "Google Business Profile, properly maintained in both languages. Citations and NAP consistency — the business's name, address and phone number matching exactly across every directory and listing. A steady review generation engine. Locally-relevant landing pages built around neighbourhoods, not just cities. Structured data describing the property, services and reviews.",
          "Done together, these compound. Done in isolation, they barely move the local pack — the map-based three-listing result Google shows above organic results for local queries.",
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
    dateModified: "2026-09-07",
    readMinutes: 7,
    image: workCorporate,
    relatedServices: ["website-design", "seo"],
    relatedIndustrySlugs: ["professional-services"],
    body: [
      { h2: "The premium feeling is a sum, not a feature",
        p: [
          "Premium websites don't share a typeface or a colour. What they share is discipline — fewer ideas, executed with more care. Less copy, written with more precision. Less motion, used with more intent.",
        ],
      },
      { h2: "Three things every premium site gets right",
        p: [
          "First, clarity. Within five seconds, a visitor knows who the company is, who it helps, and what the next step is. Second, calm. Generous spacing, restrained motion, no aggressive promotion. Third, speed — a slow-loading page reads as careless, and carelessness is the one thing a premium brand can't afford to signal.",
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
    relatedCaseStudySlug: "abu-dhabi-clinic-patient-acquisition",
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
    title: "Real estate landing pages in the UAE: what high-converting pages get right",
    excerpt:
      "The five things every high-converting bilingual landing page in the UAE gets right.",
    category: "Digital Marketing",
    date: "2026-05-06",
    dateModified: "2026-09-07",
    readMinutes: 12,
    image: workRealestate,
    relatedServices: ["website-design", "google-analytics"],
    relatedCaseStudySlug: "dubai-developer-landing-page",
    body: [
      { h2: "Conversion is mostly about clarity",
        p: [
          "Above-average landing pages aren't more persuasive — they're more specific. They speak to one buyer, one unit type, and one objection at a time.",
        ],
      },
      { h2: "The five things they share",
        p: [
          "A specific headline, a single primary CTA, a bilingual layout that doesn't feel translated, fast-loading rich media, and a qualifying assistant — usually WhatsApp — that routes serious enquiries to the right agent immediately. Together, they remove every extra decision between a buyer landing on the page and reaching a human who can answer their specific question.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);

// The most recently published post — used as the blog hub's featured slot
// so newly published articles surface there automatically instead of a
// manually-pinned post silently going stale.
export const getFeaturedPost = () =>
  [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))[0];

// Powers the "Related insights" reverse-link section on service and
// industry pages — data-driven off relatedServices/relatedIndustrySlugs so
// it never needs manual upkeep as posts are added. Sorted newest-first and
// capped so a page never shows more than a handful of genuinely relevant
// articles.
export const getRelatedPostsForService = (slug: string, limit = 3) =>
  BLOG_POSTS.filter((p) => p.relatedServices.includes(slug))
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
    .slice(0, limit);

export const getRelatedPostsForIndustry = (slug: string, limit = 3) =>
  BLOG_POSTS.filter((p) => p.relatedIndustrySlugs?.includes(slug))
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
    .slice(0, limit);
