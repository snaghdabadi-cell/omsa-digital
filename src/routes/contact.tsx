import { createFileRoute } from "@tanstack/react-router";
import { Calendar, CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone, Send, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Start a Conversation About Growth" },
      { name: "description", content: "Tell us about your business. We'll send back a tailored digital growth strategy within five working days — whether we end up working together or not." },
      { property: "og:title", content: "Contact — OMSA Digital & AI Studio" },
      { property: "og:description", content: "Start a conversation about your business growth." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(160),
  company: z.string().trim().max(120).optional(),
  budget: z.string().max(60).optional(),
  message: z.string().trim().min(10, "Tell us a little more").max(2000),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse(Object.fromEntries(fd));
    if (!result.success) {
      const eobj: Record<string, string> = {};
      result.error.issues.forEach((i) => (eobj[i.path[0] as string] = i.message));
      setErrors(eobj);
      return;
    }
    setErrors({});
    setSent(true);
  };

  return (
    <>
      <section className="pt-40 pb-12">
        <div className="container-luxe">
          <p className="eyebrow">Start a conversation</p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.02] max-w-4xl">
            Let's talk about your <span className="text-gradient-gold">business growth.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Tell us where your business is today and where you want it to be. We'll send back a
            tailored growth strategy within five working days — whether we end up working together
            or not.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-luxe grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="rounded-[2rem] border border-border bg-card p-8 lg:p-12 space-y-5"
              noValidate
            >
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Takes under 90 seconds · Reply within 1 working day
              </p>
              <Field label="Full name" name="name" error={errors.name} />
              <Field label="Work email" name="email" type="email" error={errors.email} />
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Company" name="company" error={errors.company} />
                <SelectField
                  label="Indicative budget (optional)"
                  name="budget"
                  options={["Not sure yet", "Under $10k", "$10k – $25k", "$25k – $75k", "$75k+"]}
                />
              </div>
              <Field
                label="What are you trying to achieve?"
                name="message"
                textarea
                error={errors.message}
                hint="A sentence or two is enough — we'll bring the questions to the call."
              />

              {sent && (
                <div className="rounded-2xl border border-[color:var(--gold)] bg-[color:var(--gold)]/10 p-4 text-sm text-[color:var(--gold-deep)]">
                  Thank you — we'll be in touch within one working day.
                </div>
              )}

              <button type="submit" className="btn-gold w-full sm:w-auto">
                Request a Strategy Call <Send className="h-4 w-4" />
              </button>

              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-[color:var(--gold-deep)]" />
                Your details stay private. We never share, sell or add you to a list.
              </p>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-border bg-card p-8">
                <p className="eyebrow">What happens next</p>
                <ol className="mt-6 space-y-5">
                  {[
                    { icon: Clock, t: "Within one working day", d: "A senior strategist reviews your enquiry and replies personally — no bots, no junior gatekeeper." },
                    { icon: Calendar, t: "We book a 30-minute call", d: "A focused conversation about your business, your customers and where growth is currently leaking." },
                    { icon: CheckCircle2, t: "A tailored plan in 5 working days", d: "You receive a written growth plan with priorities, timeline and an indicative investment — yours to keep either way." },
                  ].map(({ icon: Icon, t, d }) => (
                    <li key={t} className="flex gap-4">
                      <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[color:var(--gold)]/10 text-[color:var(--gold-deep)]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="font-display font-semibold tracking-tight">{t}</div>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <ContactCard icon={Mail} label="Email" value="hello@aurum.ai" href="mailto:hello@aurum.ai" />
              <ContactCard icon={Phone} label="Phone" value="+968 9000 0000" href="tel:+96890000000" />
              <ContactCard
                icon={MessageCircle}
                label="WhatsApp"
                value="Send us a message"
                href="https://wa.me/96890000000"
                accent
              />
              <ContactCard icon={MapPin} label="Studios" value="Muscat, Oman · Dubai, UAE" />

              <div className="overflow-hidden rounded-[2rem] border border-border">
                <iframe
                  title="OMSA Digital & AI Studio – Muscat office location"
                  src="https://www.google.com/maps?q=Muscat&output=embed"
                  width="100%"
                  height="320"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", textarea, error, hint,
}: { label: string; name: string; type?: string; textarea?: boolean; error?: string; hint?: string }) {
  const cls =
    "w-full rounded-2xl border bg-background px-4 py-3.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-[color:var(--gold)] transition-colors";
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} rows={5} className={`mt-2 ${cls} ${error ? "border-destructive" : "border-input"}`} />
      ) : (
        <input name={name} type={type} className={`mt-2 ${cls} ${error ? "border-destructive" : "border-input"}`} />
      )}
      {hint && !error && <span className="mt-1.5 block text-xs text-muted-foreground/80">{hint}</span>}
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3.5 text-sm focus:outline-none focus:border-[color:var(--gold)]"
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}

function ContactCard({
  icon: Icon, label, value, href, accent,
}: { icon: any; label: string; value: string; href?: string; accent?: boolean }) {
  const inner = (
    <div className={`flex items-center gap-4 rounded-2xl border p-5 transition-colors ${
      accent
        ? "border-[color:var(--gold)] bg-[color:var(--gold)]/8 hover:bg-[color:var(--gold)]/15"
        : "border-border bg-card hover:border-foreground/30"
    }`}>
      <span className={`grid h-12 w-12 place-items-center rounded-xl ${
        accent ? "bg-[color:var(--gold)] text-[color:var(--ink)]" : "bg-primary text-primary-foreground"
      }`}>
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
        <div className="mt-1 font-display font-semibold truncate">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
