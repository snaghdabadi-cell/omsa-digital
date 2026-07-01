import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { Container, Eyebrow, Heading, Prose } from "./Primitives";
import { track } from "@/lib/analytics";
import { useState, type FormEvent } from "react";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  formLabel?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function ComingSoon({ eyebrow, title, description, formLabel = "Be the first to know when it ships.", ctaHref = "/contact", ctaLabel = "Book a strategy call" }: Props) {
  const [done, setDone] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    track("form_submit", { form: `waitlist:${eyebrow}`, outcome: "success" });
    setDone(true);
    (e.currentTarget as HTMLFormElement).reset();
    void data;
  };

  return (
    <section className="pt-40 pb-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading as="h1" size="xl" className="mt-6">
            {title}
          </Heading>
          <Prose className="mt-8 text-lg">{description}</Prose>

          <div className="mt-12 rounded-3xl border border-border bg-card p-8 text-left shadow-luxe">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
                <Sparkles className="h-4 w-4 text-[color:var(--gold)]" />
              </span>
              <p className="font-display text-sm font-semibold">{formLabel}</p>
            </div>
            <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="waitlist-email" className="sr-only">Email</label>
              <input
                id="waitlist-email"
                name="email"
                type="email"
                required
                placeholder="you@brand.com"
                className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm focus:outline-none focus:border-[color:var(--gold)]"
              />
              <button type="submit" className="btn-gold text-sm">
                {done ? "Added — thank you" : "Join the waitlist"}
              </button>
            </form>
            <p className="mt-4 text-xs text-muted-foreground">
              Prefer a conversation now? <Link to={ctaHref} className="link-underline">{ctaLabel}</Link>.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
