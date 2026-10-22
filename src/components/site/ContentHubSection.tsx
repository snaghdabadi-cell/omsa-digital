import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import type { ContentHub, HubLink, HubText } from "@/lib/content/hub";

function HubAnchor({ link }: { link: HubLink }) {
  const className = "link-underline font-medium text-[color:var(--gold-deep)]";
  switch (link.kind) {
    case "service":
      return <Link to="/services/$slug" params={{ slug: link.slug }} className={className}>{link.anchor}</Link>;
    case "industry":
      return <Link to="/industries/$slug" params={{ slug: link.slug }} className={className}>{link.anchor}</Link>;
    case "location":
      return <Link to="/locations/$city" params={{ city: link.slug }} className={className}>{link.anchor}</Link>;
    case "post":
      return <Link to="/blog/$slug" params={{ slug: link.slug }} className={className}>{link.anchor}</Link>;
  }
}

// Renders hub copy with its internal links over exact substrings, resolved
// through the router's typed routes. Anchors that aren't found are skipped.
function HubCopy({ text, link, links }: HubText) {
  const placed = (link ? [link] : (links ?? []))
    .map((l) => ({ l, idx: text.indexOf(l.anchor) }))
    .filter((p) => p.idx !== -1)
    .sort((a, b) => a.idx - b.idx);
  if (placed.length === 0) return <>{text}</>;
  const out: ReactNode[] = [];
  let cursor = 0;
  for (const { l, idx } of placed) {
    if (idx < cursor) continue; // overlapping anchor
    out.push(text.slice(cursor, idx), <HubAnchor key={idx} link={l} />);
    cursor = idx + l.anchor.length;
  }
  out.push(text.slice(cursor));
  return <>{out}</>;
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
                <li key={typeof pt === "string" ? pt : pt.text} className="flex items-start gap-2.5 text-sm text-foreground/85 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
                  {/* Linked points are wrapped so text and link stay one flex item. */}
                  {typeof pt === "string" ? pt : <span><HubCopy {...pt} /></span>}
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
