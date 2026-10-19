import type { Country, ServiceSlug } from "./taxonomy";
import type { ContentHub } from "./hub";

export type LocationFaq = { q: string; a: string };

export type Location = {
  slug: string;
  city: string;
  country: Country;
  region: "GCC";
  tagline: string;
  intro: string;
  services: ServiceSlug[];
  status: "live" | "soon";
  // Populated only for "live" cities with genuinely city-specific answers —
  // left undefined for "soon" cities rather than a templated placeholder.
  faqs?: LocationFaq[];
  // Slug of a CASE_STUDIES entry set in this same city, for one honest,
  // contextually relevant cross-link (never a fabricated relationship).
  relatedCaseStudySlug?: string;
  // Optional, for cities with a fuller search landing page. `h1` replaces
  // the templated heading (the city name is still highlighted within it).
  h1?: string;
  metaTitle?: string;
  metaDescription?: string; // overrides `tagline` in meta tags only
  hub?: ContentHub; // rendered after the intro
};

export const LOCATIONS: Location[] = [
  {
    slug: "muscat",
    city: "Muscat",
    country: "Oman",
    region: "GCC",
    tagline: "An AI digital growth partner for Muscat's most ambitious businesses.",
    intro: "OMSA operates from Oman and helps businesses across Muscat be found, understood and contacted through search, in Arabic, in English or in both, with websites, SEO, local search, analytics and AI working as one system. As search extends from ranked results into AI-generated answers, we build for both: the foundations traditional search still rewards, and the clear, consistent information AI systems draw on. Then we measure which searches actually turn into enquiries.",
    h1: "SEO and Digital Growth for Businesses in Muscat",
    metaTitle: "SEO & Digital Growth Agency in Muscat, Oman | OMSA",
    metaDescription:
      "SEO, local search and AI search visibility for Muscat businesses, in Arabic and English, measured by the enquiries it produces. OMSA operates from Oman.",
    services: ["website-design", "seo", "local-seo", "ai-search-visibility", "ai-chatbots", "google-analytics"],
    hub: {
      h2: "How Muscat customers find a business, and what turns that into an enquiry",
      intro: [
        {
          text: "For most local businesses, being found in Muscat comes down to a few practical things: appearing when someone searches for your service in Google Search or Maps, giving them accurate, clear information in the language they searched in, and making it easy to call, message or visit. Our SEO work for Muscat businesses is built around those steps, not around rankings for their own sake.",
          link: { anchor: "SEO work for Muscat businesses", kind: "service", slug: "seo" },
        },
      ],
      stages: [
        {
          label: "01 · Local search",
          h3: "Google Search, Maps and your Business Profile",
          body: {
            text: "When someone nearby searches for a service, map results and Google Business Profile listings are often the first thing they see. Local SEO keeps that listing accurate and relevant.",
            link: { anchor: "Local SEO", kind: "service", slug: "local-seo" },
          },
          points: [
            "A complete Business Profile with the right category, hours and contact details",
            "A map pin that leads to the right building, not just the right area",
            "The same address everywhere, down to the way and building number",
            "Area names spelled the same way everywhere, since some have more than one English spelling, such as Seeb and As Seeb",
          ],
        },
        {
          label: "02 · Arabic and English",
          h3: "Two languages, two ways of searching",
          body: {
            text: "Arabic is Oman's official language and English is widely used in business, so a Muscat business may need to be found in both. A translated page isn't always written for how people actually search in Arabic.",
            link: { anchor: "how people actually search in Arabic", kind: "post", slug: "bilingual-seo-gcc-arabic-english" },
          },
          points: [
            "Arabic wording chosen for the terms people use when they search in Arabic",
            "An Arabic registered name and an English trading name clearly tied to the same business",
            "Phone numbers, addresses and opening hours that match in both languages",
          ],
        },
        {
          label: "03 · Technical foundations",
          h3: "Pages search engines can reach and understand",
          body: {
            text: "Strong content can't help if search engines can't crawl or index it. Technical SEO removes those barriers first.",
            link: { anchor: "Technical SEO", kind: "service", slug: "technical-seo" },
          },
          points: [
            "Important pages crawlable, indexable and listed in the sitemap",
            "Arabic and English versions of each page correctly linked to each other",
            "Pages that load quickly and read clearly on a phone",
          ],
        },
        {
          label: "04 · Enquiries",
          h3: "Measuring what search actually produces",
          body: {
            text: "Traffic only matters if it leads to calls, messages, bookings or visits. Tracking those actions shows which pages and searches are worth investing in, as our guide to conversion tracking explains.",
            link: { anchor: "conversion tracking", kind: "post", slug: "sme-conversion-tracking-google-site-kit" },
          },
          points: [
            "Calls, WhatsApp clicks and form submissions tracked by page",
            "Business Profile actions, such as calls and direction requests, read alongside website data",
            "Clear limits stated wherever an enquiry can't be traced to its source",
          ],
        },
      ],
      closing: {
        text: "AI-generated answers are an emerging way to discover businesses, in Google's AI features and in assistants such as ChatGPT. Nobody can guarantee that a business will be mentioned, but clear, matching details in Arabic and English give those systems less to get wrong. If you want to know how your business is described right now, that is what our AI Search Visibility reviews examine.",
        link: { anchor: "AI Search Visibility reviews", kind: "service", slug: "ai-search-visibility" },
      },
    },
    status: "live",
    relatedCaseStudySlug: "muscat-hotel-direct-bookings",
    faqs: [
      { q: "Does OMSA work with businesses based in Muscat?", a: "Yes. OMSA operates from Oman and works with businesses across Muscat on website design, SEO, AI chatbots and analytics." },
      { q: "Should a Muscat business have its website in Arabic, English or both?", a: "It depends on who your customers are and how they search. If you serve both Arabic- and English-speaking customers, separate pages written for each language usually work better than a single translated version, with the business name, address and contact details matching exactly across both." },
      { q: "Can you tell which enquiries came from Google Search or Google Maps?", a: "Often, for actions that happen on your website or Google Business Profile, such as form submissions, call and WhatsApp clicks, direction requests and website visits. Calls dialled directly and walk-in visits can't always be traced, and we report those limits rather than estimate them." },
      { q: "Can OMSA guarantee first-page rankings in Muscat?", a: "No. Search engines decide what they show, and nobody outside them can guarantee a position. What we commit to is a clear plan, honest reporting and work focused on the searches and actions that matter to your business." },
      { q: "How does a project with OMSA typically begin?", a: "With a strategy call to understand the business, its current website and marketing setup, and its goals — followed by a written plan before any work starts." },
      { q: "Can businesses in Muscat work with OMSA remotely?", a: "Yes. Collaboration — calls, reviews and reporting — happens remotely, through video calls, phone calls and WhatsApp." },
    ],
  },
  {
    slug: "salalah",
    city: "Salalah",
    country: "Oman",
    region: "GCC",
    tagline: "Digital growth strategy for Salalah's hospitality and tourism economy.",
    intro: "Seasonal demand requires year-round visibility. We build the systems that make it happen.",
    services: ["website-design", "seo", "local-seo"],
    status: "soon",
  },
  {
    slug: "sohar",
    city: "Sohar",
    country: "Oman",
    region: "GCC",
    tagline: "Industrial-grade websites and SEO for businesses in Sohar.",
    intro: "B2B, logistics and manufacturing brands need search visibility that translates into pipeline.",
    services: ["website-design", "seo", "technical-seo"],
    status: "soon",
  },
  {
    slug: "dubai",
    city: "Dubai",
    country: "UAE",
    region: "GCC",
    tagline: "Premium digital systems for Dubai's developers, hospitality groups and clinics.",
    intro: "From Downtown to Palm Jumeirah, Dubai businesses compete for attention in one of the world's most crowded markets, and OMSA builds bilingual platforms designed to perform in it. Dubai's digital market is dense and highly competitive, so the businesses that stand out tend to be genuinely specific about who they serve — a developer, a clinic, a hospitality group — rather than speaking to everyone at once. Because the market spans Arabic and English speakers day to day, search visibility and content built to work naturally in both languages tend to reach a meaningfully wider audience.",
    h1: "Website Design, SEO and AI Search Visibility for Dubai Businesses",
    metaTitle: "Website Design, SEO & AI Search in Dubai | OMSA",
    metaDescription:
      "Bilingual website design, SEO, Local SEO and AI search visibility for Dubai businesses, delivered remotely from Oman and built around how your customers search.",
    services: ["website-design", "seo", "local-seo", "ai-chatbots", "business-automation", "google-analytics", "ai-search-visibility"],
    hub: {
      h2: "How Dubai businesses are found, compared and chosen",
      intro: [
        {
          text: "Being chosen online in Dubai rarely depends on a single channel. Your website, Google Search and Maps, AI assistants and the language a customer searches in all shape whether a business makes the shortlist. The six areas below set out how OMSA approaches each one.",
        },
      ],
      stages: [
        {
          label: "01 · Website design",
          h3: "Website design for a market that compares before it calls",
          body: {
            text: "Many Dubai customers compare several providers before making contact, often on a phone. Your website has a short window to show who you serve, why you are credible and what to do next. OMSA designs websites around that moment of decision.",
            link: { anchor: "designs websites", kind: "service", slug: "website-design" },
          },
          points: [
            "Clear service structure, so visitors quickly find what they came for",
            "Fast mobile performance, since much of that comparison happens on a phone",
            "A layout ready for both Arabic and English",
            "Enquiry paths that suit how your customers prefer to get in touch: WhatsApp, phone or form",
          ],
        },
        {
          label: "02 · SEO and Local SEO",
          h3: "SEO and Local SEO for competitive categories",
          body: {
            text: "Many Dubai service categories are competitive in search, and broad terms often favour directories, marketplaces and long-established brands. Steady progress in SEO usually comes from precision: pages built around specific services, specific customers and the areas you genuinely serve.",
            link: { anchor: "SEO", kind: "service", slug: "seo" },
          },
          points: [
            {
              text: "With a physical location: a complete, accurate Google Business Profile, managed as part of Local SEO",
              link: { anchor: "Local SEO", kind: "service", slug: "local-seo" },
            },
            "Business details that stay consistent across the web",
            "For service-area businesses: your real coverage, described honestly",
            "Technical foundations such as indexing, structured data and page speed, supporting both",
          ],
        },
        {
          label: "03 · AI search",
          h3: "Being represented accurately in AI search",
          body: {
            text: "More customers now ask tools such as ChatGPT, Gemini and Google's AI features to suggest or compare providers. Each tool gathers and presents information in its own way, and answers can vary between tools, between questions and over time. OMSA's AI Search Visibility work starts by measuring how your business currently appears in those answers.",
            link: { anchor: "AI Search Visibility", kind: "service", slug: "ai-search-visibility" },
          },
          points: [
            "Measurement in English and Arabic before anything is changed",
            "Clearer, more consistent information about your business, on your website and wherever it is listed",
            {
              text: "The approach is explained in our guide to measuring AI search visibility",
              link: { anchor: "measuring AI search visibility", kind: "post", slug: "how-to-measure-ai-search-visibility-gcc" },
            },
            "No one can guarantee placement in an AI answer, but you can improve how clearly and accurately your business is described",
          ],
        },
        {
          label: "04 · Arabic and English",
          h3: "Built for Arabic and English search",
          body: {
            text: "Dubai customers search in English, in Arabic and often in a mix of both. The same need is frequently phrased differently in each language, so a literal translation rarely matches how people actually search.",
            link: { anchor: "how people actually search", kind: "post", slug: "bilingual-seo-gcc-arabic-english" },
          },
          points: [
            "Each language planned as its own audience, not a translation of the other",
            "Properly structured pages for each language",
            "Correct right-to-left settings for Arabic",
            "Keyword research carried out separately in each language",
          ],
        },
        {
          label: "05 · Sectors",
          h3: "Sectors where this matters most",
          body: {
            text: "Our approach in Dubai is shaped by sectors where customers research carefully before getting in touch.",
          },
          points: [
            {
              text: "Real Estate: launch and project pages designed to qualify buyers, not just collect contact details",
              link: { anchor: "Real Estate", kind: "industry", slug: "real-estate" },
            },
            {
              text: "Healthcare: visibility for specialism-and-location searches, with the clarity patients look for before booking",
              link: { anchor: "Healthcare", kind: "industry", slug: "healthcare" },
            },
            {
              text: "Hospitality: search and booking journeys that support direct reservations alongside travel platforms",
              link: { anchor: "Hospitality", kind: "industry", slug: "hospitality" },
            },
            {
              text: "Professional Services: websites and search visibility that stand up to the careful research corporate buyers do before shortlisting",
              link: { anchor: "Professional Services", kind: "industry", slug: "professional-services" },
            },
          ],
        },
        {
          label: "06 · Working together",
          h3: "How remote collaboration works",
          body: {
            text: "OMSA operates from Oman and works with Dubai businesses remotely. Oman and the UAE share a time zone, so we work within the same business day as your team.",
          },
          points: [
            "A strategy call and a written plan before any work begins",
            "Reviews and reporting over video calls, phone and WhatsApp",
            "Shared documents and agreed milestones throughout",
          ],
        },
      ],
    },
    status: "live",
    relatedCaseStudySlug: "dubai-developer-landing-page",
    faqs: [
      { q: "Can OMSA work with my Dubai business remotely?", a: "Yes. OMSA operates from Oman and works with Dubai businesses remotely. Oman and the UAE share a time zone, so calls, reviews and reporting happen within the same business day, over video, phone and WhatsApp." },
      { q: "Can OMSA help my business appear in Google Maps results in Dubai?", a: "We can optimise your Google Business Profile, strengthen your local content and keep your business details consistent online. These are the foundations local visibility depends on. A Business Profile must reflect a real address or genuine service area, and no one can guarantee a specific map position." },
      { q: "Do you build bilingual Arabic and English websites for Dubai businesses?", a: "Yes. We plan Arabic and English as separate audiences, with properly structured pages for each language, a correct right-to-left layout for Arabic, and keyword research carried out in each language." },
      { q: "What is AI search visibility, and does it matter for a Dubai business?", a: "It describes how your business is represented when customers ask AI tools such as ChatGPT, Gemini or Google's AI features for recommendations. If your customers research before they get in touch, these tools can influence who makes their shortlist. We measure your current visibility first, then work on making the information about your business clearer and more consistent." },
      { q: "Can OMSA provide SEO, website design and AI automation together for a Dubai business?", a: "Yes. These services are usually more effective coordinated as one strategy rather than run separately, and that's how a Dubai engagement is typically scoped." },
      { q: "How does a Dubai project start?", a: "With a strategy call about your business, your current website and your goals. A written plan and scope follow before any work begins." },
    ],
  },
  {
    slug: "abu-dhabi",
    city: "Abu Dhabi",
    country: "UAE",
    region: "GCC",
    tagline: "Websites and search visibility for Abu Dhabi's professional firms and clinics.",
    intro: "OMSA works remotely from Oman with Abu Dhabi law firms, accounting and advisory practices, clinics and other owner-led businesses whose clients check carefully before they get in touch. For these businesses, a website has to do more than look polished. It needs to state services, qualifications and contact details accurately, in Arabic and English, and stay consistent with what search engines, maps and AI assistants show about the business. We build and maintain that foundation, and set up tracking so you can see where enquiries come from.",
    h1: "Website Design and SEO for Abu Dhabi Professional Firms and Clinics",
    metaTitle: "Website Design & SEO for Abu Dhabi Firms and Clinics | OMSA",
    metaDescription:
      "Websites, SEO and AI search visibility for Abu Dhabi law firms, advisory practices and clinics, in Arabic and English. Delivered remotely from Oman.",
    services: ["website-design", "seo", "technical-seo", "local-seo", "ai-search-visibility", "google-analytics", "ai-chatbots"],
    hub: {
      h2: "How Abu Dhabi clients check a firm or clinic before they get in touch",
      intro: [
        {
          text: "Before contacting a lawyer, an accountant or a clinic, many people look for reassurance: who the practitioners are, what the firm actually handles, whether it is licensed for that work, and how easy it is to reach. The six areas below cover where that checking happens and what OMSA does about each one.",
        },
      ],
      stages: [
        {
          label: "01 · Website design",
          h3: "Websites that answer the questions clients check first",
          body: {
            text: "For a professional firm or clinic, the website is often where a referral is verified. OMSA's website design work for Abu Dhabi practices is built around the information people look for at that point, presented clearly in both languages.",
            link: { anchor: "website design", kind: "service", slug: "website-design" },
          },
          points: [
            "Practice-area or treatment pages that explain what you do and who it is for, without overstating outcomes",
            "Profiles of partners, practitioners or doctors, with qualifications presented accurately",
            "Licensing, registration or accreditation details where your profession or regulator requires them",
            {
              text: "A redesign plan that protects existing search visibility, as covered in our guide to SEO-safe migrations and redesigns",
              link: { anchor: "SEO-safe migrations and redesigns", kind: "post", slug: "technical-seo-migrations-redesigns-gcc" },
            },
          ],
        },
        {
          label: "02 · Technical SEO and Local SEO",
          h3: "Search foundations for established practices",
          body: {
            text: "Websites that have grown over several years often carry old service pages, duplicated content, slow templates or an Arabic section search engines can't properly read. Technical SEO resolves those issues so the right pages can be found and indexed.",
            link: { anchor: "Technical SEO", kind: "service", slug: "technical-seo" },
          },
          points: [
            "Crawl and indexing checks, so important practice and service pages are actually in Google's index",
            {
              text: "A clear structure for practice areas, specialties or departments, as part of a wider SEO strategy",
              link: { anchor: "SEO strategy", kind: "service", slug: "seo" },
            },
            {
              text: "Where your practice is eligible, an accurate Google Business Profile for each location clients actually visit, managed as part of Local SEO",
              link: { anchor: "Local SEO", kind: "service", slug: "local-seo" },
            },
            "Consistent names, addresses and phone numbers for every branch or office across your listings",
          ],
        },
        {
          label: "03 · AI search",
          h3: "What AI assistants can verify about your firm",
          body: {
            text: "People may ask AI assistants such as ChatGPT, Gemini, Copilot or Google's AI features which firms or clinics to consider. These tools differ in how they gather and present information, and their answers vary, so no one can guarantee that a business will be mentioned. OMSA's AI Search Visibility work checks how your practice is currently described, and where that description is incomplete or wrong.",
            link: { anchor: "AI Search Visibility", kind: "service", slug: "ai-search-visibility" },
          },
          points: [
            "Questions tested in English and Arabic, including ones that combine a service with Abu Dhabi",
            "Inaccurate or outdated details traced back to their likely sources, such as old listings or directory entries",
            "Practitioner, service and location information made clear and consistent on your own site",
            {
              text: "Background on how discovery is changing, in our article on how customers are finding businesses in 2026",
              link: { anchor: "how customers are finding businesses in 2026", kind: "post", slug: "ai-search-business-visibility" },
            },
          ],
        },
        {
          label: "04 · Arabic and English",
          h3: "Arabic and English for every audience you serve",
          body: {
            text: "A practice may serve Arabic-speaking clients, English-speaking residents and international companies, sometimes for the same service. Each group can describe its need differently, and specialist terms don't always translate directly. We plan both languages as separate content, following our guide to bilingual SEO.",
            link: { anchor: "bilingual SEO", kind: "post", slug: "bilingual-seo-gcc-arabic-english" },
          },
          points: [
            "Arabic practice-area and treatment names checked against the terms people actually search for",
            "Legal, financial or medical terminology reviewed with your team before publishing",
            "Matching names for the firm and its practitioners in both languages",
            "Language versions properly linked, so search engines can show the right one",
          ],
        },
        {
          label: "05 · Sectors",
          h3: "Where this approach fits best in Abu Dhabi",
          body: {
            text: "These are the types of business where we expect careful, accurate search visibility to matter most. For clinics, there's more depth in our guide to SEO for clinics in the UAE.",
            link: { anchor: "SEO for clinics in the UAE", kind: "post", slug: "seo-for-clinics-uae" },
          },
          points: [
            {
              text: "Professional Services: law firms and legal consultancies, and accounting, tax and advisory practices, where clients verify expertise before making contact",
              link: { anchor: "Professional Services", kind: "industry", slug: "professional-services" },
            },
            {
              text: "Healthcare: medical, dental and aesthetic clinics, where patients compare specialty, location and insurance acceptance",
              link: { anchor: "Healthcare", kind: "industry", slug: "healthcare" },
            },
            {
              text: "Construction: engineering consultancies and architecture practices, where a website supports prequalification and tender checks as much as new enquiries",
              link: { anchor: "Construction", kind: "industry", slug: "construction" },
            },
            {
              text: "Real Estate: property management, brokerage and valuation services, where accurate listings and clearly stated service areas matter more than volume",
              link: { anchor: "Real Estate", kind: "industry", slug: "real-estate" },
            },
          ],
        },
        {
          label: "06 · Working together",
          h3: "Remote delivery from Oman, on Abu Dhabi time",
          body: {
            text: "OMSA operates from Oman and works with Abu Dhabi businesses remotely. Because Oman and the UAE share a time zone, calls and reviews happen during the same working hours as your team.",
          },
          points: [
            "A written scope agreed before work begins, with priorities and responsibilities set out clearly",
            "Content that touches on regulated topics sent to you for review and sign-off before it goes live",
            "Reporting over video calls, phone and WhatsApp, focused on enquiries rather than traffic alone",
            {
              text: "Tracking that distinguishes calls, forms and WhatsApp messages, using the approach in our guide to GA4 for professional services firms",
              link: { anchor: "GA4 for professional services firms", kind: "post", slug: "ga4-professional-services-gcc" },
            },
          ],
        },
      ],
    },
    status: "live",
    relatedCaseStudySlug: "abu-dhabi-clinic-patient-acquisition",
    faqs: [
      { q: "Does OMSA work with law firms and clinics in Abu Dhabi?", a: "Yes. OMSA operates from Oman and works with Abu Dhabi businesses remotely. The approach on this page is built for professional firms and clinics in particular: website design, technical and Local SEO, bilingual content and AI search visibility." },
      { q: "Can a law firm or clinic in Abu Dhabi use Google Business Profile?", a: "Usually, if it meets Google's eligibility guidelines. Google Business Profile is intended for businesses that serve customers in person during stated hours, such as at an office or clinic clients can visit. A registered address alone, a mailing address or a virtual office that isn't staffed during business hours isn't enough. Each location should have its own profile only if it genuinely serves clients there. We check eligibility against Google's current guidelines before making changes." },
      { q: "Are there rules about how clinics and law firms can market themselves?", a: "Often, yes. Healthcare advertising in the UAE is regulated, and many professions have conduct rules that affect what can be said publicly. We don't give legal or regulatory advice. We write cautiously, avoid promises about outcomes, and ask you to confirm any regulated wording before it's published." },
      { q: "How do you handle legal and medical terms in Arabic?", a: "We start from the terms people actually search for in Arabic, then review specialist terminology with your team, because a technically correct translation isn't always the term clients use. Arabic and English pages are kept as separate, properly linked versions, so search engines can show the right one." },
      { q: "Can you make AI assistants recommend our firm?", a: "No one can guarantee that. AI assistants vary in how they gather and present information, and their answers change. What we can do is check how your firm is currently described, correct inaccurate information where you control it, and make your services, practitioners and locations clearer and more consistent online." },
      { q: "What does a first project usually look like?", a: "We usually start with a review of your current website, your Google Business Profile and how your firm appears in search and AI tools, followed by a written plan. From there we agree priorities, which often begin with fixing inaccurate information and technical issues before any new content is written." },
    ],
  },
  {
    slug: "sharjah",
    city: "Sharjah",
    country: "UAE",
    region: "GCC",
    tagline: "Websites and search visibility for Sharjah's SMEs and professional firms.",
    intro: "OMSA works with Sharjah businesses remotely from Oman, helping small and medium-sized companies and professional firms build a website and search presence that gives prospective customers clear reasons, and easy ways, to get in touch. Often the pieces already exist (a website, a Google Business Profile, word-of-mouth referrals), but they aren't working together. We focus on the fundamentals that are usually worth getting right first: a clear, credible website, accurate local listings, content in the language your customers search in, and tracking that shows which enquiries came from search.",
    h1: "Website Design and SEO for Sharjah SMEs and Professional Firms",
    metaTitle: "Website Design & SEO for Sharjah Businesses | OMSA",
    metaDescription:
      "Websites, SEO and Local SEO for Sharjah SMEs and professional firms, in Arabic and English and focused on real enquiries. Delivered remotely from Oman.",
    services: ["website-design", "seo", "local-seo", "ai-search-visibility", "google-analytics", "business-automation"],
    hub: {
      h2: "What a Sharjah business needs to be found, trusted and contacted",
      intro: [
        {
          text: "For a small or mid-sized business, every part of its online presence has to earn its place. The six areas below focus on practical problems: a website that doesn't explain the business clearly, listings that are incomplete or inconsistent, and enquiries that can't be traced to where they came from.",
        },
      ],
      stages: [
        {
          label: "01 · Website design",
          h3: "A website that does the job of a good first meeting",
          body: {
            text: "For many SMEs and professional firms, the website is checked after a referral or a search, before anyone picks up the phone. It needs to explain what you do, who it is for and how to get in touch, without making visitors work for it. OMSA's website design work starts from those questions rather than from a template.",
            link: { anchor: "website design", kind: "service", slug: "website-design" },
          },
          points: [
            "Service pages that answer the questions prospective clients usually ask before getting in touch",
            "Accurate company details, plus licensing or accreditation information where your sector requires or expects it",
            "A site that is easy to keep up to date, so it doesn't drift out of date after launch",
            {
              text: "Design that feels considered without slowing the page down; see what makes a corporate website feel premium",
              link: { anchor: "what makes a corporate website feel premium", kind: "post", slug: "what-makes-corporate-website-premium" },
            },
          ],
        },
        {
          label: "02 · SEO and Local SEO",
          h3: "Local visibility built on accurate foundations",
          body: {
            text: "Local search results depend heavily on information a business controls: its Google Business Profile, its website and its details on other sites. The gaps we look for first are practical ones, such as incomplete profiles, inconsistent names or phone numbers, and service pages too thin to show what the business actually offers. Our Local SEO work fixes those foundations first.",
            link: { anchor: "Local SEO", kind: "service", slug: "local-seo" },
          },
          points: [
            "Where your business is eligible, a complete Google Business Profile, with categories and service areas that match how you really operate",
            "Consistent business names, addresses and phone numbers across your website and listings",
            {
              text: "Service pages built for the searches your customers use, as part of a wider SEO plan",
              link: { anchor: "SEO plan", kind: "service", slug: "seo" },
            },
            "If you also serve customers in neighbouring emirates, a service-area setup that reflects that honestly",
          ],
        },
        {
          label: "03 · AI search",
          h3: "How AI assistants describe your business",
          body: {
            text: "Some customers now ask AI assistants such as ChatGPT, Gemini or Google's AI features to recommend or compare local providers. These tools work differently from one another, and their answers can change between questions and over time, so nobody can promise a particular result. OMSA's AI Search Visibility review starts by checking how your business is currently described.",
            link: { anchor: "AI Search Visibility", kind: "service", slug: "ai-search-visibility" },
          },
          points: [
            "Answers checked in English and Arabic for the questions your customers are likely to ask",
            "Gaps and inaccuracies compared with what your website and listings actually say",
            {
              text: "A practical first step, explained in our guide to checking whether your business is visible in AI search",
              link: { anchor: "checking whether your business is visible in AI search", kind: "post", slug: "is-your-business-visible-in-ai-search-gcc" },
            },
            {
              text: "The difference between ranking on Google and being recommended by AI",
              link: { anchor: "ranking on Google and being recommended by AI", kind: "post", slug: "google-ranking-vs-ai-visibility" },
            },
          ],
        },
        {
          label: "04 · Arabic and English",
          h3: "Arabic content written for Arabic searches",
          body: {
            text: "If you serve both Arabic- and English-speaking customers, the two groups don't always search for the same service in the same way. A page translated word for word can read correctly and still miss the terms people actually use. We treat each language as its own piece of work, following the approach in our guide to bilingual SEO.",
            link: { anchor: "bilingual SEO", kind: "post", slug: "bilingual-seo-gcc-arabic-english" },
          },
          points: [
            "Arabic copy written from Arabic search terms, not translated from English",
            "Business names that match in both languages, so listings and the website clearly refer to the same company",
            "Correct right-to-left layout and language settings on every Arabic page",
            "A clear decision on which pages need both languages, rather than translating everything by default",
          ],
        },
        {
          label: "05 · Sectors",
          h3: "Sectors where these problems tend to matter most",
          body: {
            text: "The issues above show up differently from one sector to another. These are the areas where we expect them to matter most for Sharjah businesses.",
          },
          points: [
            {
              text: "Professional Services: firms whose clients check credentials and expertise online before making contact, often after a referral",
              link: { anchor: "Professional Services", kind: "industry", slug: "professional-services" },
            },
            {
              text: "Education: schools, nurseries and training centres where parents and learners compare programmes and need clear answers in more than one language",
              link: { anchor: "Education", kind: "industry", slug: "education" },
            },
            {
              text: "Retail: shops and showrooms where accurate opening hours, location details and product information decide whether someone visits",
              link: { anchor: "Retail", kind: "industry", slug: "retail" },
            },
            {
              text: "Construction: contractors and suppliers whose websites need to support tenders and procurement checks, not just look presentable",
              link: { anchor: "Construction", kind: "industry", slug: "construction" },
            },
          ],
        },
        {
          label: "06 · Working together",
          h3: "Working with OMSA from Oman",
          body: {
            text: "OMSA operates from Oman and works with Sharjah businesses remotely. Oman and the UAE share a time zone, so meetings, reviews and support happen during your normal working day.",
          },
          points: [
            "A short discovery call, then a written scope setting out what will be done, in what order and why",
            "Work prioritised around your budget, starting with the changes that matter most for your business",
            "Progress shared over video calls, phone and WhatsApp, with plain-language reporting",
            {
              text: "Measurement that shows which enquiries came from search, using the approach in our guide to SME conversion tracking",
              link: { anchor: "SME conversion tracking", kind: "post", slug: "sme-conversion-tracking-google-site-kit" },
            },
          ],
        },
      ],
    },
    status: "live",
    faqs: [
      { q: "Does OMSA work with businesses in Sharjah?", a: "Yes. OMSA operates from Oman and works with Sharjah businesses remotely, covering website design, SEO and Local SEO, AI search visibility, analytics and business automation." },
      { q: "Is SEO worth it for a small business in Sharjah?", a: "It can be, if the work is focused. For most small businesses, the sensible starting point is the fundamentals: an accurate Google Business Profile where the business is eligible, clear service pages, and tracking that shows which enquiries came from search. We start there, and only recommend larger projects once those basics are in place and being measured." },
      { q: "Do I need a physical address in Sharjah to appear in Google Maps?", a: "Not necessarily, but eligibility matters. Google Business Profile is intended for businesses that meet Google's guidelines, which generally means serving customers in person during stated hours, either at a location they can visit or at the customer's own location within a defined area. Having an address or naming a service area isn't enough on its own. If you operate from premises in Sharjah, the profile should reflect that location; if you serve customers at their premises, a service-area profile may be appropriate. We check eligibility against Google's current guidelines before making changes, and we never create listings for places you don't operate from." },
      { q: "Can you write Arabic content, or only translate it?", a: "We plan Arabic content from Arabic search terms rather than translating English pages word for word, and we check that names, contact details and terminology match across both languages. Where specialist or regulated wording is involved, we confirm it with your team before publishing." },
      { q: "How long does SEO take to show results?", a: "There is no fixed or guaranteed timeline. Some changes, such as correcting tracking, are useful as soon as they're in place because they improve what you can measure. How search visibility responds to profile, content or technical changes depends on your competition, your site's history and how search engines reassess it. We agree what to measure at the start, so progress is judged on enquiries, not on rankings alone." },
      { q: "How do we get started?", a: "Book a strategy call. We'll look at your current website, listings and goals, then send a written plan with priorities and scope before any work begins." },
    ],
  },
  {
    slug: "doha",
    city: "Doha",
    country: "Qatar",
    region: "GCC",
    tagline: "AI-powered digital growth for Doha's premium business ecosystem.",
    intro: "Qatar's hospitality, real estate and professional-services sectors are scaling quickly, and the businesses that stand out are the ones with a fast, credible digital presence.",
    services: ["website-design", "seo", "ai-chatbots"],
    status: "soon",
  },
  {
    slug: "riyadh",
    city: "Riyadh",
    country: "Saudi Arabia",
    region: "GCC",
    tagline: "Enterprise-grade digital systems for Riyadh's Vision 2030 businesses.",
    intro: "Vision 2030's giga-projects and a fast-growing enterprise sector are raising the bar for corporate websites, analytics and automation across the capital.",
    services: ["website-design", "seo", "business-automation", "google-analytics"],
    status: "soon",
  },
];

export const getLocation = (slug: string) => LOCATIONS.find((l) => l.slug === slug);
