import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Container, Eyebrow, Heading, Prose } from "@/components/site/Primitives";
import { LOCATIONS } from "@/lib/content/locations";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/locations")({
  head: () => pageMeta({
    title: "Locations — OMSA Digital & AI Studio in Oman, UAE & the GCC",
    description: "Discover OMSA Digital & AI Studio locations serving businesses across Muscat, Dubai, Abu Dhabi and the GCC with AI, SEO, web development and digital growth services.",
    path: "/locations",
  }),
  component: LocationsPage,
});

function LocationsPage() {
  return (
    <section className="pt-40 pb-32">
      <Container>
        <Eyebrow>Locations</Eyebrow>
        <Heading as="h1" size="xl" className="mt-6 max-w-3xl">
          Built for the <span className="text-gradient-gold">GCC</span>.
        </Heading>
        <Prose className="mt-6 max-w-2xl text-lg">
          A growing network of city-specific practices, each with local services, case studies and contact information.
        </Prose>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((l) => (
            <Link
              key={l.slug}
              to="/locations/$city"
              params={{ city: l.slug }}
              className="card-lift group block rounded-3xl border border-border bg-card p-7"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-[color:var(--gold)]" />
                  {l.country}
                </span>
                {l.status === "soon" && (
                  <span className="rounded-full bg-muted px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">Soon</span>
                )}
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold">{l.city}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{l.tagline}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--gold-deep)]">
                Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
