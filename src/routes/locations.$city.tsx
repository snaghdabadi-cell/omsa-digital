import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Container, Eyebrow, Heading, Prose, Tag } from "@/components/site/Primitives";
import { getLocation, LOCATIONS } from "@/lib/content/locations";
import { getService } from "@/lib/services-data";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/locations/$city")({
  loader: ({ params }) => {
    const loc = getLocation(params.city);
    if (!loc) throw notFound();
    return { loc };
  },
  head: ({ params, loaderData }) => {
    const loc = loaderData?.loc ?? LOCATIONS[0];
    return {
      ...pageMeta({
        title: `AI & Digital Growth Agency in ${loc.city}, ${loc.country} | OMSA`,
        description: loc.tagline,
        path: `/locations/${params.city}`,
      }),
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([
          { name: "Locations", path: "/locations" },
          { name: loc.city, path: `/locations/${params.city}` },
        ])) },
      ],
    };
  },
  component: LocationPage,
});

function LocationPage() {
  const { loc } = Route.useLoaderData();
  return (
    <section className="pt-40 pb-32">
      <Container>
        <Eyebrow>{loc.country}</Eyebrow>
        <Heading as="h1" size="xl" className="mt-6 max-w-4xl">
          Digital Growth in <span className="text-gradient-gold">{loc.city}</span> by OMSA Digital & AI Studio.
        </Heading>
        <Prose className="mt-8 max-w-2xl text-lg">{loc.intro}</Prose>

        <div className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-[color:var(--gold)]" />
          {loc.city}, {loc.country}
          {loc.status === "soon" && <Tag>Coming soon</Tag>}
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-bold">Services available in {loc.city}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {loc.services.map((slug: string) => {
              const s = getService(slug);
              if (!s) return null;
              return (
                <Link
                  key={slug}
                  to="/services/$slug"
                  params={{ slug }}
                  className="card-lift block rounded-2xl border border-border bg-card p-6"
                >
                  <s.icon className="h-5 w-5 text-[color:var(--gold-deep)]" />
                  <div className="mt-4 font-display text-lg font-semibold">{s.name}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-card p-10">
          <h2 className="font-display text-2xl font-bold">Start in {loc.city}</h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl">
            Book a strategy call and we'll prepare a tailored plan for your market.
          </p>
          <Link to="/contact" className="btn-gold mt-6 text-sm inline-flex">
            Book a strategy call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
