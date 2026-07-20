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
              Trusted Digital Growth Partner for Businesses Across Oman & the GCC
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-[-0.03em]"
            >
              Custom Websites, SEO &{" "}
              <span className="text-gradient-gold">
                  AI Solutions Built for Business Growth
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed"
            >
              We build high-performing websites, data-driven SEO strategies,
              AI automation, and digital growth solutions that help businesses attract
              more customers, generate qualified leads, and achieve sustainable growth across Oman, the UAE, and the GCC.
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
                <Link to="/services" className="btn-ghost-luxe">
                  Explore Our Services
                </Link>
              </div>
              <p className="text-xs text-muted-foreground">
                Free Consultation • No Commitment • Tailored Digital Growth Strategy
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 flex items-center gap-6 text-sm text-muted-foreground"
            >
            
          </motion.div>

          {/* Floating UI cards */}
          <div className="relative h-[520px] hidden md:block">
            <FloatingCard
              className="left-0 top-6"
              delay={0}
              icon={<BarChart3 className="h-5 w-5" />}
              label="Analytics"
              value="Real-Time"
              caption="Performance insights"
            />
            <FloatingCard
              className="right-4 top-32"
              delay={0.4}
              icon={<Search className="h-5 w-5" />}
              label="Technical SEO"
              value="SEO-Ready"
              caption="Optimized foundations"
              accent
            />
            <FloatingCard
              className="left-10 top-[260px]"
              delay={0.8}
              icon={<Bot className="h-5 w-5" />}
              label="AI Chatbot"
              value="24 / 7"
              caption="Automated customer support"
            />
            <FloatingCard
              className="right-0 bottom-8"
              delay={1.2}
              icon={<Cpu className="h-5 w-5" />}
              label="Automation"
              value="Scalable"
              caption="Streamlined workflows"
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
    "Professional Services", "Healthcare", "Real Estate", "Hospitality",
    "Retail", "Construction", "Manufacturing", "Education", "Startups", "SMEs",
  ];
  return (
    <section className="border-y border-border bg-muted/30">
      <div className="container-luxe py-8">
        <p className="text-center text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Trusted by Growing Businesses Across Oman, UAE & the GCC
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
    title: "Website Development",
    headline: "Custom websites engineered to generate leads and build trust.",
    desc: "We design and develop high-performance business websites optimized for user experience, search engines, conversions, and long-term business growth across Oman, the UAE, and the GCC.",
    items: [
      "Custom Website Design",
      "Responsive Website Development",
      "Corporate & Business Websites",
      "Landing Pages & Conversion Optimization",
      "Core Web Vitals & Technical Performance",
    ],
  },
  {
    tag: "02 — Grow",
    icon: TrendingUp,
    title: "SEO & Digital Growth",
    headline: "Increase visibility, traffic, and qualified leads.",
    desc: "We combine technical SEO, local SEO, content strategy, conversion optimization, and analytics to help your business achieve sustainable organic growth across Oman, the UAE, and the GCC.",
    items: [
      "Technical & On-Page SEO",
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
    headline: "Automate repetitive work and scale your business with AI.",
    desc: "We build AI chatbots, workflow automation, and custom AI solutions that reduce manual tasks, improve customer experience, and help your team work faster and smarter.",
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
            <p className="eyebrow">Our Digital Growth Framework</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Build. <span className="text-gradient-gold">Grow.</span> Automate.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-lg">
            We combine high-performance website development, SEO, and AI automation into one connected digital growth system.
            Every service is designed to increase visibility, generate qualified leads, improve conversions, and help your business scale faster.
            No disconnected marketing. Just one strategy that delivers measurable business growth.
        </p>

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
  { icon: Users, label: "Potential Customers", note: "Discover your business" },
  { icon: Globe, label: "Professional Website", note: "Build trust instantly" },
  { icon: Search, label: "SEO", note: "Increase search visibility" },
  { icon: BarChart3, label: "Analytics", note: "Measure every interaction" },
  { icon: Bot, label: "AI Chatbot", note: "Convert visitors into leads" },
  { icon: Workflow, label: "Automation", note: "Eliminate repetitive work" },
  { icon: MousePointerClick, label: "Qualified Leads", note: "Generate more opportunities" },
  { icon: Rocket, label: "Business Growth", note: "Scale revenue continuously" },
];

function GrowthSystem() {
  return (
    <section className="section-pad bg-[color:var(--ink)] text-white relative overflow-hidden">
      <div aria-hidden className="absolute -top-40 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full bg-[color:var(--gold)]/10 blur-3xl" />
      <div className="container-luxe relative">
        <div className="max-w-3xl">
          <p className="eyebrow !text-white/60">Our Digital Growth System</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Connect every stage of your <span className="text-gradient-gold">digital growth journey.</span>
          </h2>
          <p className="mt-6 text-white/60 max-w-xl">
            Modern business growth requires more than just a website or SEO.
            We connect website development, search visibility, AI automation, analytics, and lead generation into one scalable growth system.
            Every stage supports the next, helping your business attract more customers, increase conversions, and grow consistently.
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
  { icon: Globe, title: "Web Design & Development", desc: "Custom, responsive, and SEO-ready websites built to strengthen your brand, improve user experience, and generate qualified leads." },
  { icon: Search, title: "SEO & Search Visibility", desc: "Technical SEO, local SEO, and content strategies designed to improve rankings and attract customers across Oman, the UAE, and the GCC." },
  { icon: Bot, title: "AI Solutions & Chatbots", desc: "Custom AI chatbots and intelligent solutions that improve customer support, capture leads, and create better digital experiences." },
  { icon: BarChart3, title: "Analytics & Performance", desc: "Accurate tracking, dashboards, and actionable insights that help you understand performance and make better business decisions." },
  { icon: Cpu, title: "AI Automation", desc: "Smart workflows and system integrations that reduce repetitive work, improve response times, and increase operational efficiency." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Google Ads, social media marketing, branding, and conversion strategies built to increase visibility, leads, and revenue." },
];

function Services() {
  return (
    <section className="section-pad" id="services">
      <div className="container-luxe">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Our Services</p>
            <Reveal as="h2" className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Digital solutions designed to <span className="text-gradient-gold">build, grow, and automate.</span>
            </Reveal>
          </div>
          <Reveal className="max-w-md text-muted-foreground">
            From website development and SEO to AI automation and digital marketing,
            every service works together to strengthen your brand, generate leads, and support sustainable business growth.
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
  tag?: string;
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
        View Service Details <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </div>
  );
}

/* ────────────────────────── STATS ────────────────────────── */
function Stats() {
  const stats = [
    { value: 13, suffix: "+", label: "Digital services" },
    { value: 3, suffix: "", label: "Target markets" },
    { value: 24, suffix: "/7", label: "AI chatbot availability" },
    { value: 1, suffix: "", label: "Connected growth system" },
  ];
  return (
    <section className="section-pad bg-[color:var(--ink)] text-white">
      <div className="container-luxe">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow !text-white/60">Built for Modern Growth</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Digital expertise that <span className="text-gradient-gold">supports every stage of your growth.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md">
            From strategy and website development to SEO, AI automation, and analytics,
            our connected services help businesses build stronger digital foundations and scale with confidence.
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
  { img: workHotel, title: "Luxury hotel digital growth", category: "Hospitality · SEO", services: ["Technical SEO", "Local SEO", "Content"], result: "+312% direct bookings" },
  { img: workRestaurant, title: "Restaurant lead generation website", category: "F&B · Website", services: ["Website design", "Local SEO"], result: "+58% reservations" },
  { img: workRealestate, title: "Luxury real estate landing page", category: "Real Estate · CRO", services: ["Landing page", "CRO"], result: "11.4% conversion rate" },
  { img: workClinic, title: "Healthcare patient acquisition", category: "Healthcare · Web", services: ["Website", "GA4"], result: "+220% qualified leads" },
  { img: workCorporate, title: "Corporate website transformation", category: "Corporate · Web", services: ["Design", "SEO"], result: "+180% inbound enquiries" },
  { img: workAi, title: "AI customer support chatbot", category: "AI · Service", services: ["AI chatbot", "Automation"], result: "92% queries auto-resolved" },
  { img: workDashboard, title: "Marketing analytics dashboard", category: "Analytics", services: ["GA4", "Looker"], result: "Single source of truth" },
  { img: workDashboard, title: "GA4 & GTM implementation", category: "Analytics · Tracking", services: ["GA4", "GTM", "Events"], result: "Full-funnel visibility" },
  { img: workAi, title: "Business workflow automation", category: "AI · Operations", services: ["AI", "Workflows"], result: "38 hours / week reclaimed" },
];

function Portfolio() {
  return (
    <section className="section-pad" id="portfolio">
      <div className="container-luxe">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Featured Projects</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Real business solutions for <span className="text-gradient-gold">growing brands.</span>
            </h2>
          </div>
          <Link to="/portfolio" className="btn-ghost-luxe text-sm">
            View All Projects <ArrowUpRight className="h-4 w-4" />
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
    quote: "OMSA Digital transformed our online presence with a strategy that combined website development, SEO, and conversion optimization. Within months, we saw a significant increase in qualified enquiries and direct bookings.",
    name: "Layla Al-Harthy",
    role: "Marketing Director, five-star hotel · Muscat",
  },
  {
    quote: "Their team understands business goals before talking about design. From technical SEO to analytics and AI automation, every recommendation delivered measurable value for our company.",
    name: "Omar Bin Saeed",
    role: "Founder, real estate group · Dubai",
  },
  {
    quote: "The new website and AI-powered workflows streamlined patient enquiries, reduced administrative workload, and created a much better experience for both our staff and patients.",
    name: "Dr. Aisha Mansoor",
    role: "Medical Director · Abu Dhabi",
  },
];

function Testimonials() {
  return (
    <section className="section-pad bg-[color:var(--ink)] text-white">
      <div className="container-luxe">
        <div className="max-w-2xl">
          <p className="eyebrow !text-white/60">Client Success Stories</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Trusted by businesses <span className="text-gradient-gold">across Oman, UAE and the GCC.</span>
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
  { q: "What digital marketing and AI services do you offer?", a: "We provide website design and development, ecommerce solutions, SEO, Local SEO, Technical SEO, AI automation, AI chatbots, AI solutions, Google Ads, social media marketing, branding, analytics, and digital growth strategy." },
  { q: "How long does it take to design and develop a website?", a: "Most business websites are completed within four to eight weeks, depending on project complexity, content readiness, required integrations, and feedback turnaround." },
  { q: "How long does SEO take to deliver results?", a: "SEO is a long-term growth strategy. Initial improvements may appear within three to six months, while stronger rankings, organic traffic, and qualified leads develop over time based on competition, website condition, content quality, and ongoing optimization." },
  { q: "Can you build bilingual English and Arabic websites?", a: "Yes. We design, develop, and optimize fully bilingual English and Arabic websites with proper RTL support, localized SEO, and a seamless experience for users across Oman, the UAE, and the wider GCC." },
  { q: "What can an AI chatbot do for my business?", a: "An AI chatbot can answer customer questions 24/7, qualify leads, book appointments, recommend services, collect enquiries, and integrate with your CRM or business systems to automate repetitive tasks while improving customer experience." },
  { q: "How is pricing structured?", a: "Every project is quoted based on your business goals, required features, integrations, content, and growth strategy. After a free consultation, we provide a transparent proposal tailored to your needs with no hidden costs." },
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
            <p className="eyebrow">Frequently Asked Questions</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Get clear answers before <span className="text-gradient-gold">starting your project.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Everything you need to know about our services, timelines, SEO, AI solutions, pricing, and working process.
            </p>
            <Link to="/contact" className="mt-8 inline-flex btn-ghost-luxe">
              Book a Free Strategy Call <MessageSquare className="h-4 w-4" />
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
            <p className="eyebrow !text-white/60">Ready to Grow?</p>
            <h2 className="mt-6 font-display text-4xl md:text-6xl font-bold tracking-tight">
              Let's build a stronger <span className="text-gradient-gold">digital future for your business.</span>
            </h2>
            <p className="mt-6 text-lg text-white/70 max-w-xl">
              Tell us about your goals, challenges, and growth priorities.
              We will recommend the right combination of website, SEO, AI, automation, and digital marketing solutions.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">
                Book a Free Strategy Call <ArrowRight className="h-4 w-4" />
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
