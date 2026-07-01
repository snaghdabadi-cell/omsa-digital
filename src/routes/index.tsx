import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Search,
  Bot,
  BarChart3,
  Cpu,
  Megaphone,
  Globe,
  Quote,
  Star,
  Plus,
  Minus,
  CheckCircle2,
  LineChart,
  Layers,
  Zap,
  ShieldCheck,
  Smartphone,
  HeartHandshake,
  MessageSquare,
  Code2,
  TrendingUp,
  Workflow,
  Users,
  MousePointerClick,
  Target,
  Rocket,
  Gauge,
  Lock,
  Brain,
  Compass,
} from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
import workHotel from "@/assets/work-hotel.jpg";
import workRestaurant from "@/assets/work-restaurant.jpg";
import workRealestate from "@/assets/work-realestate.jpg";
import workClinic from "@/assets/work-clinic.jpg";
import workCorporate from "@/assets/work-corporate.jpg";
import workDashboard from "@/assets/work-dashboard.jpg";
import workAi from "@/assets/work-ai.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { pageMeta, faqJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => {
    const base = pageMeta({
      title: "OMSA Digital & AI Studio — Digital Growth Systems for Businesses in Oman & the GCC",
      description: "OMSA Digital & AI Studio builds AI-powered digital growth systems including websites, SEO, analytics, automation and business intelligence for companies across Oman and the GCC.",
      path: "/",
    });
    return {
      ...base,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(faqJsonLd(FAQS)),
        },
      ],
    };
  },
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Pillars />
      <GrowthSystem />
      <Services />
      <Stats />
      <Portfolio />
      <CaseStudy />
      <WhyUs />
      <Process />
      <Testimonials />
      <Objections />
      <Faq />
      <CtaBanner />
    </>
  );
}

/* ────────────────────────── OBJECTIONS ────────────────────────── */
function Objections() {
  const items = [
    {
      icon: ShieldCheck,
      title: "What if we don't see results?",
      desc: "Every engagement is built around KPIs you approve in writing — qualified leads, bookings, revenue per visitor. If a tactic isn't moving the number, we change it. No long lock-ins, no recovery clauses.",
    },
    {
      icon: Layers,
      title: "Will this work with our existing systems?",
      desc: "Yes. We integrate with your CRM, PMS, booking engine, EMR or ERP rather than replacing them. Your tools stay, the workflows around them get smarter.",
    },
    {
      icon: Zap,
      title: "How disruptive is the project to our team?",
      desc: "Minimal. A single point of contact, weekly 30-minute reviews, and we handle the heavy lifting. Most clients spend two to three hours a week with us during build, then much less.",
    },
    {
      icon: Smartphone,
      title: "Is AI safe to use in our industry?",
      desc: "We deploy AI inside guardrails — your data, your tone of voice, your approved answers. Healthcare, real estate and finance clients have been live for over a year without an incident.",
    },
    {
      icon: TrendingUp,
      title: "How quickly do we see returns?",
      desc: "Conversion and analytics improvements land within the first 60 days. SEO compounds from month three. AI assistants typically pay for themselves within a single quarter.",
    },
    {
      icon: HeartHandshake,
      title: "What happens after launch?",
      desc: "We stay. Ongoing optimization, monthly reporting, technical support and a roadmap reviewed every quarter — your business changes, and the system evolves with it.",
    },
  ];

  return (
    <section className="section-pad bg-muted/30">
      <div className="container-luxe">
        <div className="max-w-2xl">
          <p className="eyebrow">Before you ask</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tight">
            The questions every <span className="text-gradient-gold">serious business asks first.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl">
            Honest answers to the concerns that come up in every first call. If yours isn't here,
            bring it to the strategy call — we'd rather discuss it openly.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.05}>
              <div className="h-full rounded-3xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:border-[color:var(--gold)]">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/5 text-[color:var(--gold-deep)]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 lg:pt-44 pb-24 lg:pb-32">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="AI-powered web design, SEO and digital marketing agency in Oman and UAE"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-[0.15]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background" />
      </div>

      {/* Floating orbs */}
      <div aria-hidden className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-[color:var(--gold)]/10 blur-3xl" />
      <div aria-hidden className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-[color:var(--gold)]/10 blur-3xl" />

      <div className="container-luxe relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              AI Digital Growth Agency · Oman · UAE · GCC
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-[-0.03em]"
            >
              Accelerate your business with{" "}
              <span className="text-gradient-gold">AI, SEO & Automation.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed"
            >
              We build premium websites, SEO strategies, AI solutions, and business
              automation systems that help companies generate more leads, increase
              revenue, and scale faster across Oman, the UAE, and the GCC.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-col gap-3"
            >
              <div className="flex flex-wrap items-center gap-4">
                <Link to="/contact" className="btn-gold">
                  Book a Free Strategy Call <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/case-studies" className="btn-ghost-luxe">
                  See Client Results
                </Link>
              </div>
              <p className="text-xs text-muted-foreground">
                30 minutes · No obligation · Tailored growth plan within 5 working days
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 flex items-center gap-6 text-sm text-muted-foreground"
            >
              <div className="flex -space-x-2">
                {["#C9A227", "#1a1a1a", "#999", "#444"].map((c, i) => (
                  <span
                    key={i}
                    style={{ background: c }}
                    className="h-9 w-9 rounded-full ring-2 ring-background"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-foreground">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[color:var(--gold)] text-[color:var(--gold)]" />
                  ))}
                  <span className="ml-2 font-semibold">5.0</span>
                </div>
                <p className="mt-0.5 text-xs">Trusted by leading brands across the GCC</p>
              </div>
            </motion.div>
          </div>

          {/* Floating UI cards */}
          <div className="relative h-[520px] hidden md:block">
            <FloatingCard
              className="left-0 top-6"
              delay={0}
              icon={<BarChart3 className="h-5 w-5" />}
              label="Analytics"
              value="+412%"
              caption="Organic traffic · 90d"
            />
            <FloatingCard
              className="right-4 top-32"
              delay={0.4}
              icon={<Search className="h-5 w-5" />}
              label="SEO Score"
              value="98 / 100"
              caption="Technical audit"
              accent
            />
            <FloatingCard
              className="left-10 top-[260px]"
              delay={0.8}
              icon={<Bot className="h-5 w-5" />}
              label="AI Chatbot"
              value="24 / 7"
              caption="Replies in 0.6s"
            />
            <FloatingCard
              className="right-0 bottom-8"
              delay={1.2}
              icon={<Cpu className="h-5 w-5" />}
              label="Automation"
              value="38 hrs / wk"
              caption="Saved per team"
              accent
            />
            {/* center orb */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-56 rounded-full bg-gradient-to-br from-[color:var(--gold-soft)] via-[color:var(--gold)] to-[color:var(--gold-deep)] shadow-gold"
            >
              <div className="absolute inset-3 rounded-full bg-[color:var(--ink)] grid place-items-center">
                <Sparkles className="h-10 w-10 text-[color:var(--gold)]" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingCard({
  className = "",
  delay = 0,
  icon,
  label,
  value,
  caption,
  accent,
}: {
  className?: string;
  delay?: number;
  icon: React.ReactNode;
  label: string;
  value: string;
  caption: string;
  accent?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.4 + delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute w-56 rounded-2xl glass shadow-luxe p-5 animate-float-slow ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center justify-between">
        <span
          className={`grid h-9 w-9 place-items-center rounded-full ${
            accent ? "bg-[color:var(--gold)] text-[color:var(--ink)]" : "bg-primary text-primary-foreground"
          }`}
        >
          {icon}
        </span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      </div>
      <div className="mt-4 font-display text-2xl font-bold tracking-tight">{value}</div>
      <p className="mt-1 text-xs text-muted-foreground">{caption}</p>
    </motion.div>
  );
}

/* ─────────────────────── TRUST STRIP ─────────────────────── */
function TrustStrip() {
  const items = [
    "Luxury Hotels", "Real Estate", "Restaurants", "Medical Clinics",
    "Corporate", "Law Firms", "Construction", "Retail", "Luxury Brands", "SMBs",
  ];
  return (
    <section className="border-y border-border bg-muted/30">
      <div className="container-luxe py-8">
        <p className="text-center text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Partnering with operators across the GCC
        </p>
        <div className="mt-6 overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap font-display text-lg font-semibold text-foreground/40">
            {[...items, ...items].map((i, idx) => (
              <span key={idx} className="flex items-center gap-12">
                {i}
                <span className="h-1 w-1 rounded-full bg-[color:var(--gold)]" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── PILLARS ────────────────────────── */
const PILLARS = [
  {
    tag: "01 — Build",
    icon: Code2,
    title: "Build",
    headline: "A digital foundation worthy of your brand.",
    desc: "Your website is the first room a customer walks into. We design and engineer it as a precise commercial asset — clear, fast, and built to turn quiet visitors into real business.",
    items: [
      "Premium website design",
      "Conversion-focused landing pages",
      "Corporate and brand websites",
      "Considered UX and UI architecture",
      "Performance and Core Web Vitals",
    ],
  },
  {
    tag: "02 — Grow",
    icon: TrendingUp,
    title: "Grow",
    headline: "Long-term visibility, measured in revenue.",
    desc: "Search, content, conversion and analytics — wired together so the right audience finds you, understands you, and chooses you. Compounding visibility, not short-term tricks.",
    items: [
      "Technical and on-page SEO",
      "Local SEO for Oman, UAE and GCC",
      "Google Analytics 4 and GTM",
      "Conversion rate optimization",
      "Content and growth strategy",
    ],
  },
  {
    tag: "03 — Automate",
    icon: Workflow,
    title: "Automate",
    headline: "Quiet AI working in the background of your business.",
    desc: "Custom AI assistants, integrations and workflows that handle support, qualify leads, and remove the repetitive work — so your team can focus on the customers and decisions that matter.",
    items: [
      "AI chatbots and assistants",
      "Business process automation",
      "CRM and tooling integration",
      "Workflow orchestration",
      "AI-assisted lead qualification",
    ],
  },
];

function Pillars() {
  return (
    <section className="section-pad" id="pillars">
      <div className="container-luxe">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <p className="eyebrow">Three pillars</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tight">
              One studio. <span className="text-gradient-gold">Three engines</span> of growth.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-lg">
            We don't sell websites in isolation. Build, Grow and Automate are designed as a single
            system — so every part of your digital presence supports the others, and growth becomes
            a process rather than a campaign.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-[2rem] border border-border bg-card p-10 transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--gold)] hover:shadow-luxe">
                <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[color:var(--gold)]/0 blur-3xl transition-all duration-700 group-hover:bg-[color:var(--gold)]/15" />
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--gold-deep)]">
                    {p.tag}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground transition-colors group-hover:bg-[color:var(--gold)] group-hover:text-[color:var(--ink)]">
                    <p.icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="mt-10 font-display text-4xl font-bold tracking-tight">{p.title}</h3>
                <p className="mt-3 font-display text-lg text-foreground/80 leading-snug">
                  {p.headline}
                </p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <ul className="mt-8 space-y-3 border-t border-border pt-6">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
                      <span className="text-foreground/80">{it}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── GROWTH SYSTEM ─────────────────────── */
const GROWTH_FLOW = [
  { icon: Users, label: "Visitor", note: "Discovers your brand" },
  { icon: Globe, label: "Website", note: "Earns their attention" },
  { icon: Search, label: "SEO", note: "Brings the right traffic" },
  { icon: BarChart3, label: "Analytics", note: "Reveals what works" },
  { icon: Bot, label: "AI assistant", note: "Engages and answers" },
  { icon: Workflow, label: "Automation", note: "Routes and follows up" },
  { icon: MousePointerClick, label: "Leads", note: "Become real opportunities" },
  { icon: Rocket, label: "Growth", note: "Compounds into revenue" },
];

function GrowthSystem() {
  return (
    <section className="section-pad bg-[color:var(--ink)] text-white relative overflow-hidden">
      <div aria-hidden className="absolute -top-40 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full bg-[color:var(--gold)]/10 blur-3xl" />
      <div className="container-luxe relative">
        <div className="max-w-3xl">
          <p className="eyebrow !text-white/60">The digital growth system</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Eight connected stages. <span className="text-gradient-gold">One business outcome.</span>
          </h2>
          <p className="mt-6 text-white/60 max-w-xl">
            Design, search, analytics, AI, and automation rarely fail in isolation — they fail when
            they're disconnected. We connect them, so attention turns into traffic, traffic turns
            into leads, and leads turn into measurable revenue.
          </p>
        </div>

        <div className="mt-20">
          {/* Connecting line */}
          <div className="relative">
            <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/50 to-transparent lg:block" />
            <ol className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
              {GROWTH_FLOW.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.05}>
                  <li className="relative flex flex-col items-center text-center">
                    <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-[color:var(--ink)] transition-all duration-500 hover:border-[color:var(--gold)] hover:bg-white/[0.04]">
                      <s.icon className="h-5 w-5 text-[color:var(--gold)]" />
                    </span>
                    <div className="mt-4 text-[10px] uppercase tracking-[0.18em] text-white/50">
                      Stage {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-1.5 font-display text-base font-semibold tracking-tight">
                      {s.label}
                    </div>
                    <p className="mt-1 text-[11px] text-white/55 leading-relaxed">{s.note}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── SERVICES ────────────────────────── */
export const SERVICES = [
  { icon: Globe, title: "Premium Website Development", desc: "High-performance websites designed to convert visitors into customers while delivering exceptional speed, user experience, and SEO performance.", tag: "Build" },
  { icon: Search, title: "SEO & Organic Growth", desc: "Technical SEO, content strategy, and local optimization that improve rankings, increase qualified traffic, and generate long-term business growth.", tag: "Visibility" },
  { icon: Bot, title: "AI Business Solutions", desc: "Custom AI assistants and intelligent automation that improve customer experience, reduce workload, and increase operational efficiency.", tag: "AI" },
  { icon: BarChart3, title: "Analytics & Conversion Tracking", desc: "GA4, Tag Manager, Search Console, and dashboards that show exactly where leads come from and how users convert.", tag: "Clarity" },
  { icon: Cpu, title: "Business Automation", desc: "Smart workflows and integrations that reduce manual work, improve response time, and help your team operate more efficiently.", tag: "Efficiency" },
  { icon: Megaphone, title: "Digital Marketing Strategy", desc: "Clear marketing strategies built around visibility, content, lead generation, and sustainable business growth.", tag: "Growth" },
];

function Services() {
  return (
    <section className="section-pad" id="services">
      <div className="container-luxe">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">What we do</p>
            <Reveal as="h2" className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Six disciplines, <span className="text-gradient-gold">one growth system.</span>
            </Reveal>
          </div>
          <Reveal className="max-w-md text-muted-foreground">
            Each service solves a specific business problem. Together, they form a coherent system
            that attracts, converts and retains the customers you actually want.
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({
  icon: Icon,
  title,
  desc,
  tag,
}: {
  icon: any;
  title: string;
  desc: string;
  tag: string;
}) {
  return (
    <div className="group relative h-full rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--gold)] hover:shadow-luxe">
      <div className="absolute right-6 top-6 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {tag}
      </div>
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground transition-colors group-hover:bg-[color:var(--gold)] group-hover:text-[color:var(--ink)]">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-7 font-display text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground/70 group-hover:text-[color:var(--gold-deep)]">
        Explore solutions <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </div>
  );
}

/* ────────────────────────── STATS ────────────────────────── */
function Stats() {
  const stats = [
    { value: 80, suffix: "+", label: "Businesses partnered with" },
    { value: 412, suffix: "%", label: "Average organic traffic growth" },
    { value: 38, suffix: "hrs", label: "Operational hours saved per week" },
    { value: 12, suffix: "x", label: "Average return on marketing spend" },
  ];
  return (
    <section className="section-pad bg-[color:var(--ink)] text-white">
      <div className="container-luxe">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow !text-white/60">Measured, not assumed</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tight">
              We measure success the way <span className="text-gradient-gold">you measure your business.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md">
            Bookings, qualified leads, revenue per visitor, cost per acquisition. The metrics on
            your board pack, not the ones that only flatter a dashboard.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-[color:var(--ink)] p-8 lg:p-10">
              <div className="font-display text-5xl lg:text-6xl font-bold tracking-tight text-gradient-gold">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-4 text-sm text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── PORTFOLIO ────────────────────────── */
export const PROJECTS = [
  { img: workHotel, title: "Five-star Muscat hotel — search and bookings", category: "Hospitality · SEO", services: ["Technical SEO", "Local SEO", "Content"], result: "+312% direct bookings" },
  { img: workRestaurant, title: "Fine-dining restaurant — new digital home", category: "F&B · Website", services: ["Website design", "Local SEO"], result: "+58% reservations" },
  { img: workRealestate, title: "Luxury developer — high-intent landing page", category: "Real Estate · CRO", services: ["Landing page", "CRO"], result: "11.4% conversion rate" },
  { img: workClinic, title: "Specialist medical clinic — patient acquisition", category: "Healthcare · Web", services: ["Website", "GA4"], result: "+220% qualified leads" },
  { img: workCorporate, title: "Corporate group — brand and inbound rebuild", category: "Corporate · Web", services: ["Design", "SEO"], result: "+180% inbound enquiries" },
  { img: workAi, title: "AI customer support assistant", category: "AI · Service", services: ["AI chatbot", "Automation"], result: "92% queries auto-resolved" },
  { img: workDashboard, title: "Marketing intelligence dashboard", category: "Analytics", services: ["GA4", "Looker"], result: "Single source of truth" },
  { img: workDashboard, title: "GA4 and Tag Manager implementation", category: "Analytics · Tracking", services: ["GA4", "GTM", "Events"], result: "Full-funnel visibility" },
  { img: workAi, title: "Operations automation system", category: "AI · Operations", services: ["AI", "Workflows"], result: "38 hours / week reclaimed" },
];

function Portfolio() {
  return (
    <section className="section-pad" id="portfolio">
      <div className="container-luxe">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Considered work for <span className="text-gradient-gold">considered businesses.</span>
            </h2>
          </div>
          <Link to="/portfolio" className="btn-ghost-luxe text-sm">
            See the Results <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.slice(0, 6).map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <ProjectCard {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectCard({
  img, title, category, services, result,
}: { img: string; title: string; category: string; services: string[]; result: string }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-luxe">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          width={1200}
          height={900}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{category}</p>
        <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">{title}</h3>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {services.map((s) => (
            <span key={s} className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-foreground/70">
              {s}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <span className="text-sm font-semibold text-[color:var(--gold-deep)]">{result}</span>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--gold)]" />
        </div>
      </div>
    </article>
  );
}

/* ────────────────────── CASE STUDY (feature) ────────────────────── */
function CaseStudy() {
  return (
    <section className="section-pad">
      <div className="container-luxe">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[color:var(--ink)] to-[#1a1a1a] text-white">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="relative">
              <img
                src={workHotel}
                alt="Luxury Hotel case study"
                loading="lazy"
                width={1200}
                height={900}
                className="h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[color:var(--ink)]/60" />
            </div>
            <div className="p-10 lg:p-16">
              <p className="eyebrow !text-white/60">Featured Success Story · Hospitality</p>
              <h3 className="mt-6 font-display text-3xl md:text-4xl font-bold tracking-tight">
                How a luxury hotel increased <span className="text-gradient-gold">direct bookings by 47%</span>
              </h3>
              <p className="mt-5 text-white/70">
                The hotel relied heavily on OTAs and had limited organic visibility.
                We redesigned the website, implemented technical SEO,
                created multilingual content, connected GA4 and AI automation,
                and optimized the booking journey to increase direct reservations
                while reducing dependency on third-party booking platforms.
                </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { k: "+47%", v: "Direct bookings" },
                  { k: "+185%", v: "Organic traffic" },
                  { k: "-32%", v: "Cost per booking" },
                ].map((m) => (
                  <div key={m.v} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="font-display text-xl font-bold text-gradient-gold">{m.k}</div>
                    <p className="mt-1 text-[11px] uppercase tracking-wider text-white/60">{m.v}</p>
                  </div>
                ))}
              </div>

              <Link to="/case-studies" className="mt-10 inline-flex btn-gold">
                Explore the Full Case Study <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── WHY US ────────────────────────── */
function WhyUs() {
  const items = [
    { icon: Compass, title: "Strategy First", desc: "Every project starts with a business strategy, competitor research, and a clear growth roadmap." },
    { icon: LineChart, title: "Data-Driven Decisions", desc: "SEO, analytics, and performance insights guide every improvement we make." },
    { icon: Brain, title: "AI That Delivers", desc: "Practical AI solutions that automate tasks, improve customer experience, and save valuable time." },
    { icon: Workflow, title: "Business Automation", desc: "Automated workflows that reduce repetitive work and increase operational efficiency." },
    { icon: Search, title: "Long-Term SEO Growth", desc: "Technical SEO, high-quality content, and continuous optimization for sustainable rankings." },
    { icon: Gauge, title: "Fast & Optimized Websites", desc: "Modern websites designed for speed, performance, security, and higher conversion rates." },
    { icon: Lock, title: "Transparent Process", desc: "Clear communication, regular progress updates, and complete transparency from start to finish." },
    { icon: HeartHandshake, title: "Long-Term Partnership", desc: "We focus on building lasting relationships and supporting your business growth beyond launch." },
  ];
  return (
    <section className="section-pad bg-muted/30">
      <div className="container-luxe">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <p className="eyebrow">Why businesses choose Apex AI Labs</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Why ambitious businesses choose <span className="text-gradient-gold">one trusted partner.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-lg">
            Businesses across Oman and the UAE choose Apex AI Labs because
            strategy, website development, SEO, AI automation, and analytics
            are delivered by one expert team. This creates faster execution, stronger results, 
            and a consistent digital growth system.
          </p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group bg-background p-8 transition-colors hover:bg-card">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/5 text-[color:var(--gold-deep)] group-hover:bg-[color:var(--gold)] group-hover:text-[color:var(--ink)] transition-colors">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── PROCESS ────────────────────────── */
const PROCESS = [
  { t: "Discovery", d: "Understand the business, the customer, and what success actually looks like." },
  { t: "Research", d: "Audit competitors, search demand, behaviour, and the gaps worth pursuing." },
  { t: "Strategy", d: "A written plan — positioning, priorities, channels, and a 12-month roadmap." },
  { t: "Design", d: "Brand-led interfaces shaped around how your customers actually decide." },
  { t: "Development", d: "Engineered for speed, accessibility, and long-term maintainability." },
  { t: "SEO", d: "Technical, on-page, content and local SEO laid in from the first sprint." },
  { t: "Analytics", d: "GA4, Tag Manager, Search Console and dashboards built around real KPIs." },
  { t: "AI & automation", d: "Assistants and workflows that take repetitive work off your team's plate." },
  { t: "Testing", d: "QA, conversion experiments and performance audits before anything ships." },
  { t: "Launch", d: "A calm, monitored release with zero downtime and a clear handover." },
  { t: "Optimization", d: "Continuous improvement informed by data, not by trends." },
];

function Process() {
  return (
    <section className="section-pad">
      <div className="container-luxe">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">How we work</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tight">
              A consulting framework. <span className="text-gradient-gold">Not a checklist.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Eleven defined stages from discovery to continuous improvement — so you know what's
            happening, why it's happening, and what it's worth.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.04}>
              <div className="group relative h-full rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-[color:var(--gold)]">
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl font-bold text-gradient-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <CheckCircle2 className="h-5 w-5 text-[color:var(--gold)] opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── TESTIMONIALS ────────────────────────── */
export const TESTIMONIALS = [
  {
    quote: "They treated our website as a business problem, not a design exercise. Direct bookings tripled within six months and we finally see where every guest comes from.",
    name: "Layla Al-Harthy",
    role: "Marketing Director, five-star hotel · Muscat",
  },
  {
    quote: "OMSA Digital & AI Studio became a true strategic partner for our business. Their SEO, analytics, automation and AI solutions work together as one growth system, delivering measurable results month after month.",
    name: "Omar Bin Saeed",
    role: "Founder, real estate group · Dubai",
  },
  {
    quote: "Calm, considered and quietly effective. The clinic runs more smoothly, our patients have a better experience, and the numbers speak for themselves.",
    name: "Dr. Aisha Mansoor",
    role: "Medical Director · Abu Dhabi",
  },
];

function Testimonials() {
  return (
    <section className="section-pad bg-[color:var(--ink)] text-white">
      <div className="container-luxe">
        <div className="max-w-2xl">
          <p className="eyebrow !text-white/60">In their words</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tight">
            The businesses we <span className="text-gradient-gold">grow alongside.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
                <Quote className="h-7 w-7 text-[color:var(--gold)]" />
                <blockquote className="mt-6 text-white/85 leading-relaxed">
                  "{t.quote}"
                </blockquote>
                <div className="mt-6 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-[color:var(--gold)] text-[color:var(--gold)]" />
                  ))}
                </div>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[color:var(--gold-soft)] to-[color:var(--gold-deep)] font-display font-bold text-[color:var(--ink)]">
                    {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </span>
                  <div>
                    <div className="font-display font-semibold">{t.name}</div>
                    <div className="text-xs text-white/60">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── FAQ ────────────────────────── */
export const FAQS = [
  { q: "Where are you based and who do you work with?", a: "Our team works between Muscat and Dubai with businesses across Oman, the UAE, and the wider GCC — hospitality groups, real estate developers, clinics, professional services firms, restaurants and growing companies that take their digital presence seriously." },
  { q: "How long does a typical website project take?", a: "A premium website project usually runs six to ten weeks from discovery to launch, depending on scope, content readiness and integrations. SEO, analytics and AI engagements are ongoing partnerships." },
  { q: "Do you guarantee SEO rankings?", a: "No responsible partner will. We commit to a transparent, technically excellent process and to reporting against the outcomes that matter to your business — qualified traffic, leads and revenue, not vanity positions." },
  { q: "Can you work in Arabic and English?", a: "Yes. We design, write and optimize fully bilingual experiences with native-quality copy, proper RTL support, and locale-aware SEO across both languages." },
  { q: "What does an AI chatbot engagement look like?", a: "We start with the use cases — support, booking, lead qualification — train the assistant on your own content and brand voice, integrate it with your stack, and launch a branded experience that typically goes live in three to four weeks." },
  { q: "How is pricing structured?", a: "Fixed-scope investments for websites and audits, and clear monthly retainers for SEO, content, ads and AI automation. Every proposal lists deliverables, KPIs and what success looks like." },
  { q: "Do you handle analytics and tracking?", a: "Yes. Google Analytics 4, Tag Manager, Search Console, event tracking, server-side tagging and custom dashboards are standard parts of every engagement." },
  { q: "Can you handle paid media alongside SEO?", a: "Yes. We run integrated growth programmes — SEO for compounding long-term visibility, paid media for short-term acceleration — measured together in a single dashboard." },
  { q: "Where does AI actually create value for my business?", a: "In four places: customer-facing assistants, content and operations workflows, internal reporting, and personalization. We apply it where it earns its place." },
  { q: "How do we start a conversation?", a: "Book a 30-minute strategy call. We'll discuss your business, review your current digital footprint, and send a tailored proposal within five working days." },
];

function Faq() {
  return (
    <section className="section-pad" id="faq">
      <div className="container-luxe">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">Questions, answered</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Practical answers, before the <span className="text-gradient-gold">first call.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              If your question isn't here, write to us — we respond within one working day.
            </p>
            <Link to="/contact" className="mt-8 inline-flex btn-ghost-luxe">
              Let's Talk <MessageSquare className="h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <FaqItem key={f.q} item={f} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaqItem({ item, defaultOpen = false }: { item: { q: string; a: string }; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-6 p-6 text-left"
      >
        <span className="font-display text-base md:text-lg font-semibold tracking-tight">{item.q}</span>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6 -mt-2 text-sm text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-1">
          {item.a}
        </div>
      )}
    </div>
  );
}

/* ────────────────────────── CTA BANNER ────────────────────────── */
function CtaBanner() {
  return (
    <section className="section-pad">
      <div className="container-luxe">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[color:var(--ink)] to-black p-10 lg:p-20 text-white">
          <div aria-hidden className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[color:var(--gold)]/20 blur-3xl" />
          <div aria-hidden className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[color:var(--gold)]/10 blur-3xl" />
          <div className="relative max-w-3xl">
            <p className="eyebrow !text-white/60">Start the conversation</p>
            <h2 className="mt-6 font-display text-4xl md:text-6xl font-bold tracking-tight">
              Let's build your <span className="text-gradient-gold">growth system.</span>
            </h2>
            <p className="mt-6 text-lg text-white/70 max-w-xl">
              Tell us where you want your business to be in twelve months. We'll send back a
              tailored strategy you can act on — whether we end up working together or not.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">
                Get Your Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn-ghost-luxe !border-white/20 !text-white">
                Explore Our Services
              </Link>
            </div>
            <p className="mt-5 text-xs text-white/50">
              Free consultation • No obligation • Personalized growth roadmap
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
