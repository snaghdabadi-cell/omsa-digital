import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { BLOG_POSTS, getPost } from "@/lib/blog-data";
import { SERVICE_DETAILS } from "@/lib/services-data";
import { abs, articleJsonLd, breadcrumbJsonLd, pageMeta } from "@/lib/seo";

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
      title: `${p.title} — OMSA Digital & AI Studio`,
      description: p.excerpt,
      path,
      image: p.image,
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
  const moreFromCategory = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== post.slug,
  ).slice(0, 3);

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
          <img
            src={post.image}
            alt={post.title}
            loading="eager"
            width={1600}
            height={900}
            className="aspect-[16/9] w-full rounded-[2rem] object-cover"
          />
        </figure>

        <div className="container-luxe mt-16 max-w-3xl space-y-12">
          {post.body.map((section: { h2: string; p: string[] }) => (
            <section key={section.h2}>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">{section.h2}</h2>
              <div className="mt-5 space-y-5 text-muted-foreground leading-relaxed">
                {section.p.map((para: string, i: number) => <p key={i}>{para}</p>)}
              </div>
            </section>
          ))}
        </div>
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

      {/* More in this category */}
      {moreFromCategory.length > 0 && (
        <section className="section-pad">
          <div className="container-luxe">
            <p className="eyebrow">Continue reading</p>
            <h2 className="mt-5 font-display text-2xl md:text-3xl font-bold tracking-tight">
              More in {post.category}
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
