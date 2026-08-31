import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { PROJECTS, ProjectCard } from "./index";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/portfolio")({
  head: () => pageMeta({
    title: "Portfolio — Concept Projects & Internal Products | OMSA Digital & AI Studio",
    description: "Concept case studies, internal products and demonstration projects from OMSA Digital & AI Studio — AI, SEO, automation and website design work for the GCC.",
    path: "/portfolio",
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
            Work shaped around <span className="text-gradient-gold">business outcomes.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            A mix of concept case studies, OMSA's own internal products and demonstration projects
            across hospitality, real estate, healthcare and beyond — each one approached as a
            business problem, not a design brief, and labelled honestly below.
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
