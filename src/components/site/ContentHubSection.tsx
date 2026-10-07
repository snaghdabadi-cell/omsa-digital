import { Link } from "@tanstack/react-router";
import type { ContentHub, HubText } from "@/lib/content/hub";

// Renders hub copy with its optional single internal link over an exact
// substring, resolved through the router's typed routes.
function HubCopy({ text, link }: HubText) {
  const idx = link ? text.indexOf(link.anchor) : -1;
  if (!link || idx === -1) return <>{text}</>;
  const className = "link-underline font-medium text-[color:var(--gold-deep)]";
  return (
    <>
      {text.slice(0, idx)}
      {link.kind === "service" ? (
        <Link to="/services/$slug" params={{ slug: link.slug }} className={className}>
          {link.anchor}
        </Link>
      ) : (
        <Link to="/blog/$slug" params={{ slug: link.slug }} className={className}>
          {link.anchor}
        </Link>
      )}
      {text.slice(idx + link.anchor.length)}
    </>
  );
}

// Journey-stage hub shared by industry and location pages.
export function ContentHubSection({ hub }: { hub: ContentHub }) {
  return (
    <div className="mt-16">
      <h2 className="font-display text-2xl font-bold max-w-3xl">{hub.h2}</h2>
      <div className="mt-5 max-w-3xl space-y-4">
        {hub.intro.map((p) => (
          <p key={p.text} className="text-base leading-relaxed text-muted-foreground">
            <HubCopy {...p} />
          </p>
        ))}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {hub.stages.map((s) => (
          <div key={s.h3} className="rounded-2xl border border-border bg-card p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-deep)]">{s.label}</p>
            <h3 className="mt-3 font-display text-base font-semibold tracking-tight">{s.h3}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              <HubCopy {...s.body} />
            </p>
            <ul className="mt-4 space-y-2">
              {s.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2.5 text-sm text-foreground/85 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {hub.closing && (
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          <HubCopy {...hub.closing} />
        </p>
      )}
    </div>
  );
}
