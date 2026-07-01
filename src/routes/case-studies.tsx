import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import workHotel from "@/assets/work-hotel.jpg";
import workClinic from "@/assets/work-clinic.jpg";
import workRealestate from "@/assets/work-realestate.jpg";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Real Growth for GCC Businesses" },
      { name: "description", content: "See how OMSA Digital & AI Studio helps businesses across Oman and the GCC achieve measurable growth through web design, SEO and AI automation." },
      { property: "og:title", content: "Case Studies — OMSA Digital & AI Studio" },
      { property: "og:description", content: "Strategy you can measure: real growth stories from GCC businesses." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

const CASES = [
  {
    img: workHotel,
    industry: "Hospitality",
    title: "A five-star Muscat hotel triples direct bookings",
    challenge: "The property was heavily reliant on third-party booking platforms, with weak organic visibility and no clear picture of where guests came from or why they converted.",
    strategy: "A brand-led website rebuild, full technical SEO overhaul, a bilingual content programme, and a GA4 implementation connected to a booking AI assistant.",
    execution: "Delivered over ten weeks. More than 1,200 technical SEO issues resolved, structured data added across the site, and an Arabic/English AI assistant launched for room and spa reservations.",
    metrics: [
      { k: "+312%", v: "Direct bookings" },
      { k: "+412%", v: "Organic traffic" },
      { k: "−63%", v: "Cost per booking" },
    ],
  },
  {
    img: workRealestate,
    industry: "Real Estate",
    title: "A Dubai developer reaches 11.4% landing-page conversion",
    challenge: "High monthly ad spend was producing low conversion. The landing experience felt generic, unqualified leads were overwhelming the sales team, and attribution was unclear.",
    strategy: "A custom bilingual landing page built around the buyer's decision criteria, a qualifying chatbot routed to WhatsApp, and a structured CRO programme.",
    execution: "Seven A/B variants tested over eight weeks. Lead-qualification questions embedded into the assistant flow. Real-time routing to the appropriate sales agent by language and unit type.",
    metrics: [
      { k: "11.4%", v: "Conversion rate" },
      { k: "−48%", v: "Cost per lead" },
      { k: "3.2x", v: "Sales ROI" },
    ],
  },
  {
    img: workClinic,
    industry: "Healthcare",
    title: "An Abu Dhabi clinic grows qualified patient leads by 220%",
    challenge: "An outdated website, no local SEO presence, and a manual booking process were limiting patient acquisition despite strong word-of-mouth.",
    strategy: "A conversion-focused website, a Local SEO authority programme, an AI booking assistant, and GA4 funnels mapped to the patient journey.",
    execution: "Service-page architecture aligned to high-intent search. Google Business Profile optimized and connected to a reputation engine. Real-time appointment booking inside the website.",
    metrics: [
      { k: "+220%", v: "Qualified leads" },
      { k: "+5×", v: "Google reviews" },
      { k: "92%", v: "AI auto-resolution" },
    ],
  },
];

function CaseStudiesPage() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="container-luxe">
          <p className="eyebrow">Case studies</p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.02] max-w-4xl">
            Strategy you can <span className="text-gradient-gold">measure.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Three short stories about businesses that treated their digital presence as a growth
            system — and the numbers that followed.
          </p>
        </div>
      </section>

      <section className="pb-32 space-y-10">
        <div className="container-luxe space-y-10">
          {CASES.map((c, i) => (
            <Reveal key={c.title}>
              <article className="overflow-hidden rounded-[2rem] border border-border bg-card">
                <div className="grid lg:grid-cols-2">
                  <div className={`relative ${i % 2 ? "lg:order-2" : ""}`}>
                    <img
                      src={c.img}
                      alt={c.title}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-10 lg:p-16">
                    <p className="eyebrow">{c.industry}</p>
                    <h2 className="mt-5 font-display text-3xl md:text-4xl font-bold tracking-tight">
                      {c.title}
                    </h2>

                    <div className="mt-8 space-y-5 text-sm text-muted-foreground leading-relaxed">
                      <div>
                        <div className="font-display text-foreground font-semibold">The challenge</div>
                        <p className="mt-1">{c.challenge}</p>
                      </div>
                      <div>
                        <div className="font-display text-foreground font-semibold">The strategy</div>
                        <p className="mt-1">{c.strategy}</p>
                      </div>
                      <div>
                        <div className="font-display text-foreground font-semibold">The implementation</div>
                        <p className="mt-1">{c.execution}</p>
                      </div>
                    </div>

                    <div className="mt-8 grid grid-cols-3 gap-3">
                      {c.metrics.map((m) => (
                        <div key={m.v} className="rounded-2xl bg-muted p-4">
                          <TrendingUp className="h-4 w-4 text-[color:var(--gold-deep)]" />
                          <div className="mt-3 font-display text-xl font-bold text-gradient-gold">
                            {m.k}
                          </div>
                          <p className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                            {m.v}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="container-luxe text-center">
          <Link to="/contact" className="inline-flex btn-gold">
            Start Your Growth Story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
