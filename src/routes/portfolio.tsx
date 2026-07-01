import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { PROJECTS, ProjectCard } from "./index";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — AI & Digital Growth Projects | OMSA Digital & AI Studio" },
      { name: "description", content: "Explore AI, SEO, analytics, automation and website projects delivered by OMSA Digital & AI Studio for businesses across Oman and the GCC." },
      { property: "og:title", content: "Portfolio — OMSA Digital & AI Studio" },
      { property: "og:description", content: "Real AI-powered digital growth projects delivering measurable business results across Oman and the GCC." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="container-luxe">
          <p className="eyebrow">Portfolio</p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.02] max-w-4xl">
            Work measured in <span className="text-gradient-gold">business outcomes.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            A selection of recent engagements across hospitality, real estate, healthcare, food and
            beverage, professional services and corporate groups — each one approached as a
            business problem, not a design brief.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-luxe grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title + i} delay={(i % 3) * 0.05}>
              <ProjectCard {...p} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
