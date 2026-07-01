import { createFileRoute } from "@tanstack/react-router";
import { Container, Eyebrow, Heading, Prose, EmptyState } from "@/components/site/Primitives";
import { PRESS } from "@/lib/content/press";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/press")({
  head: () => pageMeta({
    title: "Press & Awards — OMSA Digital & AI Studio",
    description: "Media mentions, awards, interviews and speaking engagements from the OMSA Digital & AI Studio team.",
    path: "/press",
  }),
  component: PressPage,
});

function PressPage() {
  return (
    <section className="pt-40 pb-32">
      <Container>
        <Eyebrow>Press</Eyebrow>
        <Heading as="h1" size="xl" className="mt-6 max-w-3xl">
          Press, awards and <span className="text-gradient-gold">conversations</span>.
        </Heading>
        <Prose className="mt-6 max-w-2xl text-lg">
          Media coverage, awards and speaking engagements as we share them.
        </Prose>

        <div className="mt-12">
          {PRESS.length === 0 ? (
            <EmptyState title="Building the archive" body="Press mentions, awards and interviews will appear here as they happen." />
          ) : null}
        </div>
      </Container>
    </section>
  );
}
