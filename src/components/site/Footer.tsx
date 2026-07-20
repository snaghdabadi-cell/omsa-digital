import { Link } from "@tanstack/react-router";
// Footer uses plain <a> for dynamic /services/$slug-style URLs to avoid
// fighting TanStack Link's strict path typing. Static routes use <Link>.
import { Sparkles, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { SERVICE_DETAILS } from "@/lib/services-data";
import { CONTACT, SOCIAL } from "@/lib/seo";
import { LOCATIONS } from "@/lib/content/locations";
import { INDUSTRY_PAGES } from "@/lib/content/industries";
import { RESOURCE_CATEGORIES } from "@/lib/content/resources";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function Footer() {
  return (
    <footer className="mt-32 bg-[color:var(--ink)] text-white" role="contentinfo">
      <div className="container-luxe py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_repeat(5,1fr)]">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/5 border border-white/10">
                <Sparkles className="h-4 w-4 text-[color:var(--gold)]" />
              </span>
              <span className="font-display text-xl font-bold">
                OMSA<span className="text-gradient-gold"> Digital & AI Studio</span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Helping businesses across Oman, the UAE and the GCC grow through web design, SEO,
              AI automation, digital marketing, and data-driven strategy.
            </p>
            <nav aria-label="Social" className="mt-6 flex gap-2">
              {[
                { Icon: Linkedin, href: SOCIAL.linkedin, label: "LinkedIn" },
                { Icon: Instagram, href: SOCIAL.instagram, label: "Instagram" },
                { Icon: Twitter, href: SOCIAL.twitter, label: "Twitter / X" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 hover:border-[color:var(--gold)] hover:text-[color:var(--gold)] transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </nav>
            <div className="mt-6"><LocaleSwitcher /></div>
          </div>

          <FooterCol
            title="Services"
            items={SERVICE_DETAILS.slice(0, 6).map((s) => ({ label: s.name, to: `/services/${s.slug}` }))}
          />
          <FooterCol
            title="Industries"
            items={INDUSTRY_PAGES.slice(0, 6).map((i) => ({ label: i.name, to: `/industries/${i.slug}` }))}
          />
          <FooterCol
            title="Locations"
            items={LOCATIONS.slice(0, 6).map((l) => ({ label: l.city, to: `/locations/${l.slug}` }))}
          />
          <FooterCol
            title="Resources"
            items={[
              { label: "Blog", to: "/blog" },
              { label: "Case Studies", to: "/case-studies" },
              ...RESOURCE_CATEGORIES.slice(0, 4).map((c) => ({ label: c.label, to: `/resources/${c.slug}` })),
              { label: "Tools", to: "/tools" },
            ]}
          />
          <FooterCol
            title="Company"
            items={[
              { label: "About Us", to: "/about" },
              { label: "Our Services", to: "/services" },
              { label: "Our Work", to: "/portfolio" },
              { label: "Industries", to: "/industries" },
              { label: "Locations", to: "/locations" },
              { label: "Contact", to: "/contact" },
            ]}
          />
        </div>

        <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
              Stay Updated
            </h4>
            <p className="mt-4 max-w-md text-sm text-white/60">
              Get practical insights on AI, SEO, websites, and digital growth delivered straight to your inbox.
            </p>
            <form className="mt-4 flex max-w-md gap-2" onSubmit={(e) => e.preventDefault()} aria-label="Newsletter signup">
              <label htmlFor="newsletter-email" className="sr-only">Your email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Enter your email address"
                className="flex-1 rounded-full bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-[color:var(--gold)]"
              />
              <button className="btn-gold !py-2.5 !px-4 text-sm" type="submit">Subscribe</button>
            </form>
          </div>
          <address className="not-italic space-y-3 text-sm text-white/60">
            <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-[color:var(--gold)]" /> <a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a></div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-[color:var(--gold)]" /> <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-white">{CONTACT.phone}</a></div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[color:var(--gold)]" /> Muscat · Dubai · Abu Dhabi</div>
          </address>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} OMSA Digital & AI Studio. All rights reserved.</p>
          <nav aria-label="Legal" className="flex gap-6 text-xs text-white/50">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <Link to="/cookies" className="hover:text-white">Cookies</Link>
            <Link to="/search" className="hover:text-white">Search</Link>
            <Link to="/dashboard" className="hover:text-white">Client Portal</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}


function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; to: string }[];
}) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
        {title}
      </h4>
      <ul className="mt-4 space-y-3">
        {items.map((i) => (
          <li key={i.to}>
            <a href={i.to} className="text-sm text-white/60 hover:text-[color:var(--gold)] transition-colors">
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
