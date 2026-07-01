import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/community")({
  head: () => pageMeta({
    title: "Community — Newsletter, events and workshops",
    description: "Join the OMSA Digital & AI Studio community — newsletter, webinars, workshops and roundtables for ambitious GCC businesses.",
    path: "/community",
  }),
  component: () => (
    <ComingSoon
      eyebrow="Community"
      title="A community for ambitious GCC businesses."
      description="A monthly newsletter, periodic webinars and small-format workshops on AI, search and digital growth. Built slowly, with care."
      formLabel="Join the community list."
    />
  ),
});
