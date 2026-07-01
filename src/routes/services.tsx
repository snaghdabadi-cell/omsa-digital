import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ServiceCard, SERVICES } from "./index";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AI, SEO, Web Development & Automation | OMSA Digital & AI Studio" },
      { name: "description", content: "Comprehensive AI-powered digital growth services including web development, SEO, analytics, automation, branding and performance marketing for businesses across Oman and the GCC." },
      { property: "og:title", content: "Services — OMSA Digital & AI Studio" },
      { property: "og:description", content: "AI-driven websites, SEO, analytics and automation designed to accelerate business growth across Oman and the GCC." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const DEEP_SERVICES = [
  {
    title: "Website Design",
    summary: "A high-performance website built to convert visitors into customers.",
    items: [
      "Brand-led visual system",
      "Conversion-focused user experience",
      "CMS-ready architecture",
      "Bilingual English and Arabic",
    ],
  },
  {
    title: "SEO Strategy",
    summary: "A long-term visibility strategy that helps the right audience discover your business.",
    items: [
      "Technical SEO audits and fixes",
      "On-page and content optimization",
      "Authority building and digital PR",
      "Local SEO across Oman, UAE and GCC",
    ],
  },
  {
    title: "AI Chatbots",
    summary: "An intelligent assistant that answers questions instantly, captures leads, and improves customer experience.",
    items: [
      "Customer support assistants",
      "Lead qualification flows",
      "Booking and FAQ automation",
      "Integration with your CRM",
    ],
  },
  {
    title: "Analytics & Tracking",
    summary: "Clarity on what's working, what isn't, and what to do next.",
    items: [
      "Google Analytics 4 implementation",
      "Google Tag Manager and event tracking",
      "Search Console and reporting",
      "Custom executive dashboards",
    ],
  },
  {
    title: "Business Automation",
    summary: "Quiet workflows that remove repetitive work and free your team to focus on customers.",
    items: [
      "Workflow design and orchestration",
      "Email and WhatsApp automation",
      "Lead routing and scoring",
      "Operational reporting pipelines",
    ],
  },
  {
    title: "Digital Marketing",
    summary: "Considered campaigns engineered for predictable, profitable growth.",
    items: [
      "Growth strategy and roadmap",
      "Content and editorial programmes",
      "Paid search and social campaigns",
      "Conversion rate optimization",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-20">
        <div className="container-luxe">
          <p className="eyebrow">Services</p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.02] max-w-4xl">
            Six disciplines. <span className="text-gradient-gold">One growth system.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Strategy, design, engineering, SEO, AI and analytics — delivered under one roof by
            senior specialists, so the parts of your digital presence actually reinforce each other.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-luxe grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-muted/30">
        <div className="container-luxe">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight max-w-3xl">
            What sits <span className="text-gradient-gold">inside</span> each engagement.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl">
            Every service answers three questions: why it matters, what problem it solves, and what
            business value it creates over time.
          </p>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-2 lg:grid-cols-3">
            {DEEP_SERVICES.map((s) => (
              <div key={s.title} className="bg-background p-8">
                <h3 className="font-display text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.summary}</p>
                <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Not sure where to begin?
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-muted-foreground">
            Share your goals and current setup. We'll recommend the smallest, sharpest engagement
            that moves the metrics that actually matter to your business.
          </p>
          <Link to="/contact" className="mt-8 inline-flex btn-gold">
            Book a Strategy Call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
