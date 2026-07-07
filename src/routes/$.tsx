import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/$")({
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <section className="max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-yellow-500 mb-6">
          OMSA Digital
        </p>

        <h1 className="text-7xl md:text-8xl font-bold mb-6">404</h1>

        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          Page Not Found
        </h2>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
          The page you are looking for does not exist or may have been moved.
          Return to OMSA Digital and continue exploring our premium digital
          services.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full border border-yellow-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-yellow-500 transition hover:bg-yellow-500 hover:text-black"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}