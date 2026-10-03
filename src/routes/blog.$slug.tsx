import { Fragment, type ReactNode } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Calendar, Clock, User } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Tag } from "@/components/site/Primitives";
import { FaqItem } from "@/components/site/FaqItem";
import {
  BLOG_POSTS,
  getPost,
  type BlogBlock,
  type BlogContentLink,
  type BlogParagraph,
  type BlogPost,
  type BlogTable,
} from "@/lib/blog-data";
import { SERVICE_DETAILS } from "@/lib/services-data";
import { getCaseStudy } from "@/lib/case-studies-data";
import { getAuthor } from "@/lib/content/authors";
import { abs, articleJsonLd, authorRefFromContent, breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

// Resolves a BlogContentLink to a real typed route. Mirrors the
// ContentAnchor pattern already used on service pages, scoped to this file
// since blog body copy only ever needs these three destination kinds.
function BlogContentAnchor({ link, label, className }: { link: BlogContentLink; label: string; className: string }) {
  switch (link.kind) {
    case "service":
      return <Link to="/services/$slug" params={{ slug: link.slug }} className={className}>{label}</Link>;
    case "industry":
      return <Link to="/industries/$slug" params={{ slug: link.slug }} className={className}>{label}</Link>;
    case "location":
      return <Link to="/locations/$city" params={{ city: link.city }} className={className}>{label}</Link>;
    case "locations":
      return <Link to="/locations" className={className}>{label}</Link>;
    case "external":
      return (
        <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
          {label}
        </a>
      );
    case "post":
      return <Link to="/blog/$slug" params={{ slug: link.slug }} className={className}>{label}</Link>;
    case "contact":
      return (
        <Link to="/contact" className={className}>
          {label}
        </Link>
      );
  }
}

// Light inline markup for block content only: **bold**, *italic*, `code`.
// Legacy p/bullets text never goes through this, so it renders verbatim.
const INLINE_MARKUP = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
function renderInline(text: string): ReactNode {
  const parts = text.split(INLINE_MARKUP);
  if (parts.length === 1) return text;
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4)
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    if (part.startsWith("`") && part.endsWith("`") && part.length > 2)
      return (
        <code
          key={i}
          className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground"
        >
          {part.slice(1, -1)}
        </code>
      );
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2)
      return <em key={i}>{part.slice(1, -1)}</em>;
    return part;
  });
}

// Renders one body paragraph, which is either a plain string (every existing
// post) or an object carrying AnchorLinks over exact substrings (posts that
// need natural in-text links). `rich` enables inline markup for block content.
function renderParagraph(para: BlogParagraph, rich = false): ReactNode {
  const fmt = (s: string) => (rich ? renderInline(s) : s);
  if (typeof para === "string") return fmt(para);
  const { text } = para;
  const links = [...(para.link ? [para.link] : []), ...(para.links ?? [])]
    .map((l) => ({ l, idx: text.indexOf(l.anchor) }))
    .filter((f) => f.idx !== -1)
    .sort((a, b) => a.idx - b.idx);
  if (links.length === 0) return fmt(text);
  const out: ReactNode[] = [];
  let cursor = 0;
  links.forEach(({ l, idx }, i) => {
    if (idx < cursor) return;
    out.push(<Fragment key={`t${i}`}>{fmt(text.slice(cursor, idx))}</Fragment>);
    out.push(
      <BlogContentAnchor
        key={`a${i}`}
        link={l.link}
        label={l.anchor}
        className="link-underline font-medium text-[color:var(--gold-deep)]"
      />,
    );
    cursor = idx + l.anchor.length;
  });
  out.push(<Fragment key="end">{fmt(text.slice(cursor))}</Fragment>);
  return <>{out}</>;
}

function BulletItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-foreground/85 leading-relaxed">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
      <span>{children}</span>
    </li>
  );
}

// Semantic, horizontally scrollable table. The scroll container (not the
// page) absorbs overflow on small screens; the min-width keeps columns
// readable instead of crushing them.
function ArticleTable({ table }: { table: BlogTable }) {
  return (
    <div
      role="region"
      aria-label={table.label}
      tabIndex={0}
      className="overflow-x-auto rounded-2xl border border-border bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)]"
    >
      <table
        className="w-full border-collapse text-left text-sm"
        style={{ minWidth: `${table.head.length * 130}px` }}
      >
        <caption className="sr-only">{table.label}</caption>
        <thead>
          <tr className="border-b border-border bg-muted/40">
            {table.head.map((h) => (
              <th
                key={h}
                scope="col"
                className="px-4 py-3 align-bottom text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--gold-deep)]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, r) => (
            <tr key={r} className="border-b border-border last:border-0">
              {row.map((cell, c) =>
                c === 0 ? (
                  <th
                    key={c}
                    scope="row"
                    className="px-4 py-3 align-top font-medium text-foreground"
                  >
                    {renderInline(cell)}
                  </th>
                ) : (
                  <td key={c} className="px-4 py-3 align-top text-muted-foreground leading-relaxed">
                    {renderInline(cell)}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderBlock(block: BlogBlock, key: number): ReactNode {
  switch (block.type) {
    case "p":
      return <p key={key}>{renderParagraph(block.content, true)}</p>;
    case "h3":
      return (
        <h3
          key={key}
          className="pt-5 font-display text-xl md:text-2xl font-semibold tracking-tight text-foreground"
        >
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={key} className="grid gap-3 sm:grid-cols-2">
          {block.items.map((item, i) => (
            <BulletItem key={i}>{renderParagraph(item, true)}</BulletItem>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={key} className="space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-foreground/85 leading-relaxed">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[color:var(--gold)] font-display text-xs font-semibold text-[color:var(--gold-deep)]">
                {i + 1}
              </span>
              <span className="pt-0.5">{renderParagraph(item, true)}</span>
            </li>
          ))}
        </ol>
      );
    case "table":
      return <ArticleTable key={key} table={block.table} />;
  }
}

// Curated companions when a post sets relatedPostSlugs; otherwise the
// existing same-category list.
function continueReading(post: BlogPost) {
  const curated = (post.relatedPostSlugs ?? [])
    .map((s) => getPost(s))
    .filter((p): p is BlogPost => !!p && p.slug !== post.slug);
  if (curated.length > 0) return { heading: "Related insights", posts: curated.slice(0, 3) };
  const sameCategory = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== post.slug,
  );
  return { heading: `More in ${post.category}`, posts: sameCategory.slice(0, 3) };
}

// Every current post is written under the same shared editorial identity, so
// the author is resolved once here rather than duplicating an `author` field
// across every BlogPost entry (see AUTHORS in lib/content/authors.ts).
const POST_AUTHOR = getAuthor("omsa-editorial")!;

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    const p = loaderData?.post;
    if (!p) return { meta: [{ title: "Article — OMSA Digital & AI Studio" }] };
    const path = `/blog/${params.slug}`;
    const base = pageMeta({
      title: p.metaTitle ?? `${p.title} — OMSA Digital & AI Studio`,
      description: p.metaDescription ?? p.excerpt,
      path,
      image: p.image,
      imageWidth: p.imageWidth,
      imageHeight: p.imageHeight,
      imageAlt: p.imageAlt ?? p.title,
      ogTitle: p.ogTitle,
      ogDescription: p.ogDescription,
      type: "article",
    });
    return {
      ...base,
      meta: [
        ...base.meta,
        { property: "article:published_time", content: p.date },
        { property: "article:section", content: p.category },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            articleJsonLd({
              title: p.title,
              description: p.excerpt,
              path,
              image: p.image,
              datePublished: p.date,
              dateModified: p.dateModified,
              author: authorRefFromContent(POST_AUTHOR),
            }),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Insights", path: "/blog" },
              { name: p.title, path },
            ]),
          ),
        },
        ...(p.faqs && p.faqs.length > 0
          ? [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(p.faqs)) }]
          : []),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-luxe pt-40 pb-32">
      <p className="eyebrow">Article not found</p>
      <h1 className="mt-6 font-display text-4xl font-bold">That article doesn't exist.</h1>
      <Link to="/blog" className="btn-gold mt-8 inline-flex">All articles</Link>
    </div>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = post.relatedServices
    .map((s: string) => SERVICE_DETAILS.find((d) => d.slug === s))
    .filter(Boolean) as typeof SERVICE_DETAILS;
  const relatedCaseStudy = post.relatedCaseStudySlug ? getCaseStudy(post.relatedCaseStudySlug) : undefined;
  const { heading: moreHeading, posts: moreFromCategory } = continueReading(post);

  return (
    <>
      <nav aria-label="Breadcrumb" className="pt-32 pb-2">
        <div className="container-luxe">
          <ol className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link to="/blog" className="hover:text-foreground">Insights</Link></li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-foreground line-clamp-1">{post.title}</li>
          </ol>
        </div>
      </nav>

      <article className="pt-8 pb-24">
        <header className="container-luxe max-w-3xl">
          <p className="eyebrow">{post.category}</p>
          <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            {post.title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">{post.excerpt}</p>
          <div className="mt-6 flex items-center gap-5 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" />
              By{" "}
              <Link to="/authors/$slug" params={{ slug: POST_AUTHOR.slug }} className="hover:text-foreground">
                {POST_AUTHOR.name}
              </Link>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readMinutes} min read
            </span>
          </div>
        </header>

        <figure className="container-luxe mt-12">
          {/* Constrains displayed width (not height) on larger screens so the
              hero reads as a contained editorial image rather than a
              near-full-screen banner — the full 16:9 frame stays intact,
              just smaller, instead of cropping the image to fit a capped
              height. Below xl (1280px), container-luxe's own width already
              lands at or under this cap, so nothing changes there. */}
          <div className="xl:max-w-[960px] xl:mx-auto">
            <img
              src={post.image}
              alt={post.imageAlt ?? post.title}
              loading="eager"
              fetchPriority="high"
              width={1600}
              height={900}
              className="aspect-[16/9] w-full rounded-[2rem] object-cover"
            />
          </div>
        </figure>

        <div className="container-luxe mt-16 max-w-3xl space-y-12">
          {post.intro && post.intro.length > 0 && (
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              {post.intro.map((para, i) => (
                <p key={i}>{renderParagraph(para, true)}</p>
              ))}
            </div>
          )}
          {post.body.map((section) => (
            <section key={section.h2}>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">{section.h2}</h2>
              {section.p && section.p.length > 0 && (
                <div className="mt-5 space-y-5 text-muted-foreground leading-relaxed">
                  {section.p.map((para, i) => (
                    <p key={i}>{renderParagraph(para)}</p>
                  ))}
                </div>
              )}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground/85 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {section.blocks && section.blocks.length > 0 && (
                <div className="mt-5 space-y-5 text-muted-foreground leading-relaxed">
                  {section.blocks.map((block, i) => renderBlock(block, i))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* FAQ */}
        {post.faqs && post.faqs.length > 0 && (
          <div className="container-luxe mt-16 max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
              Frequently asked questions
            </h2>
            <div className="mt-6 space-y-3">
              {post.faqs.map((f, i) => (
                <FaqItem key={f.q} item={f} defaultOpen={i === 0} />
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Related services (internal linking) */}
      {related.length > 0 && (
        <aside className="section-pad bg-muted/30">
          <div className="container-luxe">
            <p className="eyebrow">Relevant services</p>
            <h2 className="mt-5 font-display text-2xl md:text-3xl font-bold tracking-tight">
              How we apply this in practice
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/services/$slug"
                  params={{ slug: r.slug }}
                  className="group block h-full rounded-3xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:border-[color:var(--gold)]"
                >
                  <h3 className="font-display text-lg font-semibold tracking-tight">{r.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--gold-deep)]">
                    Explore service <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      )}

      {/* Related concept case study (internal linking) */}
      {relatedCaseStudy && (
        <aside className="section-pad">
          <div className="container-luxe">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="eyebrow">Related concept case study</h2>
              {relatedCaseStudy.relatedLocationSlug && (
                <Link
                  to="/locations/$city"
                  params={{ city: relatedCaseStudy.relatedLocationSlug }}
                  className="link-underline text-xs font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground"
                >
                  {relatedCaseStudy.location}
                </Link>
              )}
            </div>
            <Link
              to="/case-studies/$slug"
              params={{ slug: relatedCaseStudy.slug }}
              className="card-lift mt-6 block rounded-2xl border border-border bg-card p-6 sm:flex sm:items-center sm:justify-between sm:gap-6"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <Tag>{relatedCaseStudy.status}</Tag>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">{relatedCaseStudy.industry}</span>
                </div>
                <div className="mt-3 font-display text-lg font-semibold">{relatedCaseStudy.title}</div>
                <p className="mt-2 text-sm text-muted-foreground max-w-xl">{relatedCaseStudy.excerpt}</p>
              </div>
              <span className="mt-4 inline-flex shrink-0 items-center gap-1 text-sm font-medium text-[color:var(--gold-deep)] sm:mt-0">
                Read the concept case study <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </aside>
      )}

      {/* More in this category */}
      {moreFromCategory.length > 0 && (
        <section className="section-pad">
          <div className="container-luxe">
            <p className="eyebrow">Continue reading</p>
            <h2 className="mt-5 font-display text-2xl md:text-3xl font-bold tracking-tight">
              {moreHeading}
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {moreFromCategory.map((m, i) => (
                <Reveal key={m.slug} delay={i * 0.05}>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: m.slug }}
                    className="group block h-full rounded-3xl border border-border bg-card overflow-hidden transition-all hover:-translate-y-1 hover:shadow-luxe"
                  >
                    <img src={m.image} alt={m.title} loading="lazy" width={1200} height={750} className="aspect-[16/10] w-full object-cover" />
                    <div className="p-6">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--gold-deep)]">{m.category}</p>
                      <h3 className="mt-3 font-display text-base font-semibold tracking-tight">{m.title}</h3>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-pad">
        <div className="container-luxe">
          <div className="rounded-[2rem] bg-[color:var(--ink)] text-white p-10 lg:p-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Want to apply these ideas to your business?
            </h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">
              Book a free strategy call. We'll review your current setup and send back a tailored plan within five working days.
            </p>
            <Link to="/contact" className="mt-8 inline-flex btn-gold">
              Book a Free Strategy Call <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export const __canonical = (slug: string) => abs(`/blog/${slug}`);
