import type { ReactNode, HTMLAttributes } from "react";

export function Section({ children, className = "", ...rest }: HTMLAttributes<HTMLElement>) {
  return (
    <section className={`section-pad ${className}`} {...rest}>
      {children}
    </section>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`container-luxe ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function Heading({
  as: As = "h2",
  size = "lg",
  children,
  className = "",
}: {
  as?: "h1" | "h2" | "h3";
  size?: "xl" | "lg" | "md";
  children: ReactNode;
  className?: string;
}) {
  const sizes: Record<string, string> = {
    xl: "text-5xl md:text-7xl",
    lg: "text-4xl md:text-5xl",
    md: "text-2xl md:text-3xl",
  };
  return (
    <As className={`font-display font-bold tracking-tight leading-[1.05] ${sizes[size]} ${className}`}>
      {children}
    </As>
  );
}

export function Prose({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`text-base leading-relaxed text-muted-foreground ${className}`}>{children}</div>;
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
      {children}
    </span>
  );
}

export function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="font-display text-3xl font-bold text-gradient-gold">{k}</div>
      <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{v}</p>
    </div>
  );
}

export function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-dashed border-border p-12 text-center">
      <h3 className="font-display text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}
