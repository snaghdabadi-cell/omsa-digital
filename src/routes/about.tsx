import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Compass, Globe2, HeartHandshake, Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — OMSA Digital & AI Studio" },
      { name: "description", content: "Today's businesses need more than a website. OMSA Digital & AI Studio combines strategy, premium web design, SEO, AI automation, and analytics to help ambitious companies grow across Oman and the GCC." },
      { property: "og:title", content: "About — OMSA Digital & AI Studio" },
      { property: "og:description", content: "Learn how OMSA Digital & AI Studio helps businesses build sustainable digital growth through strategy, websites, SEO, AI automation, and analytics." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-20">
        <div className="container-luxe grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">About OMSA Digital & AI Studio</p>
            <h1 className="mt-6 font-display text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Today's businesses need more than a website.
            </h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Customers research before they call. Competitors invest in search, content and AI.
            Marketing budgets are scrutinised line by line. The companies that grow are the ones
            treating their digital presence as a system — not a project.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">Our point of view</p>
            <h2 className="mt-6 font-display text-3xl md:text-4xl font-bold tracking-tight">
              Growth is what happens when the parts <span className="text-gradient-gold">work together.</span>
            </h2>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              A beautiful website without SEO is invisible. SEO without analytics is guesswork.
              Analytics without action is reporting. AI without strategy is theatre. Each is useful;
              none is enough on its own.
            </p>
            <p>
              We exist for businesses that have outgrown the agency model where design, search,
              tracking and automation live in different rooms. OMSA Digital & AI Studio brings them together — under
              one senior team — so every part of your digital presence pulls in the same direction.
            </p>
            <p>
              The outcome we work toward is rarely "a new website". It's more bookings, more
              qualified leads, lower acquisition cost, faster operations, and a brand that
              compounds in value over time.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-muted/30">
        <div className="container-luxe grid gap-12 lg:grid-cols-3">
          {[
            { icon: Compass, title: "Strategy before tactics", desc: "Every engagement begins with the business question. Channels and tools follow the strategy, not the other way around." },
            { icon: Sparkles, title: "AI applied with judgment", desc: "We use AI where it removes friction and creates leverage — for your customers and your team — not because it makes a good slide." },
            { icon: HeartHandshake, title: "A small number of partners", desc: "We work with a deliberately small portfolio of businesses so we can stay close, move quickly and remain accountable." },
          ].map((b) => (
            <Reveal key={b.title}>
              <div className="h-full rounded-3xl border border-border bg-background p-8">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <b.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{b.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe grid gap-12 lg:grid-cols-4">
          {[
            { v: 80, s: "+", l: "Businesses partnered with" },
            { v: 9, s: "yrs", l: "Combined senior experience" },
            { v: 12, s: "x", l: "Average campaign return" },
            { v: 100, s: "%", l: "Bilingual: English and Arabic" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-5xl font-bold tracking-tight text-gradient-gold">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-[color:var(--ink)] text-white">
        <div className="container-luxe grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow !text-white/60">Where we work</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Rooted in the <span className="text-gradient-gold">GCC.</span> Held to a <span className="text-gradient-gold">global standard.</span>
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Globe2, t: "Oman and the UAE", d: "Local teams in Muscat and Dubai who understand the market — language, regulation, and how decisions are made." },
              { icon: Award, t: "International craft", d: "Design and engineering standards shaped by the best technology companies in the world." },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <b.icon className="h-6 w-6 text-[color:var(--gold)]" />
                <h3 className="mt-4 font-display text-lg font-semibold">{b.t}</h3>
                <p className="mt-2 text-sm text-white/60">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe">
          <div className="rounded-[2rem] border border-border p-10 lg:p-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Tell us where you want your business to be in twelve months.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              We'll send back a clear, written strategy — the same one we'd act on ourselves.
            </p>
            <Link to="/contact" className="mt-8 inline-flex btn-gold">
              Book a Strategy Call <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
