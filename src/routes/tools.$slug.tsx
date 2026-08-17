import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Cpu,
  Database,
  FileSearch,
  Gauge,
  Globe2,
  Layers,
  Link2,
  Rocket,
  Search,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { ComingSoon } from "@/components/site/ComingSoon";
import { FaqItem } from "@/routes/index";
import { getTool } from "@/lib/content/tools";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

const SEO_AUDIT_FAQS = [
  {
    q: "What is an SEO audit?",
    a: "An SEO audit is a structured review of the technical, on-page and architectural factors that influence how effectively a website can be discovered, interpreted and surfaced by search engines.",
  },
  {
    q: "What does an SEO audit tool check?",
    a: "Depending on the tool, an audit may evaluate crawlability, indexability, metadata, broken links, redirects, canonical URLs, structured data, internal linking, mobile usability, page performance and other technical or on-page signals.",
  },
  {
    q: "Is an SEO audit the same as an SEO score?",
    a: "No. A score can summarise certain checks, but it cannot fully explain business priority, competitive context or whether an issue actually matters to the website's growth strategy.",
  },
  {
    q: "Can an SEO audit improve rankings?",
    a: "An audit does not improve rankings by itself. It identifies weaknesses and opportunities. Improvement comes from implementing the right technical, content and authority-building changes based on those findings.",
  },
  {
    q: "How often should a website be audited?",
    a: "The right frequency depends on the size and complexity of the website. Audits are especially useful after redesigns, migrations, major content changes, unexplained organic-traffic declines or significant changes to site architecture.",
  },
  {
    q: "Does OMSA offer professional SEO audits?",
    a: "Yes. Businesses that need deeper analysis can work with OMSA on technical SEO, website architecture, content strategy and implementation planning beyond the automated checks of the upcoming tool.",
  },
];

export const Route = createFileRoute("/tools/$slug")({
  loader: ({ params }) => {
    const tool = getTool(params.slug);
    if (!tool) throw notFound();
    return { tool };
  },
  head: ({ params, loaderData }) => {
    const tool = loaderData?.tool;
    const path = `/tools/${params.slug}`;

    if (params.slug === "seo-audit") {
      const base = pageMeta({
        title: "SEO Audit Tool | Website SEO & Technical SEO Checker | OMSA",
        description:
          "Audit the SEO foundation of your website with OMSA. Understand technical SEO, crawlability, indexability, metadata, site performance and the issues that may be limiting organic growth.",
        path,
      });
      return {
        ...base,
        scripts: [
          {
            type: "application/ld+json",
            children: JSON.stringify(
              breadcrumbJsonLd([
                { name: "Home", path: "/" },
                { name: "Tools", path: "/tools" },
                { name: "SEO Audit Tool", path },
              ]),
            ),
          },
          {
            type: "application/ld+json",
            children: JSON.stringify(faqJsonLd(SEO_AUDIT_FAQS)),
          },
        ],
      };
    }

    return pageMeta({
      title: tool ? `${tool.name} — OMSA Digital & AI Studio` : "Tool — OMSA Digital & AI Studio",
      description: tool?.tagline ?? "OMSA Digital & AI Studio tool.",
      path,
      // Every tool other than SEO Audit renders as a bare ComingSoon
      // placeholder with no substantive content — keep those out of the
      // index. The SEO Audit branch above has its own pageMeta() call and
      // is intentionally left indexable since it carries real editorial
      // content explaining the framework.
      noindex: true,
    });
  },
  component: ToolPage,
});

function ToolPage() {
  const { tool } = Route.useLoaderData();

  if (tool.slug === "seo-audit") {
    return <SeoAuditToolPage />;
  }

  return (
    <ComingSoon
      eyebrow="Digital tool"
      title={tool.name}
      description={tool.description}
      formLabel={`Be first to use ${tool.name}.`}
    />
  );
}

const FRAMEWORK_ITEMS = [
  {
    icon: Search,
    title: "1. Crawlability",
    body: (
      <>
        <p>
          Before a page can compete in search, search engines need to be able to discover and access it.
        </p>
        <p>
          The audit framework reviews the technical signals that influence crawling, including site architecture, robots directives, internal links, broken routes and sitemap visibility.
        </p>
        <p>
          The objective is not simply to make a website "crawlable." It is to make the important parts of the website easy to discover while keeping unnecessary or private areas out of the search index.
        </p>
      </>
    ),
  },
  {
    icon: Database,
    title: "2. Indexability",
    body: (
      <>
        <p>
          Being crawled and being indexed are not the same thing. A website can be technically accessible while still sending conflicting signals about which pages should appear in search.
        </p>
        <p>The audit examines issues such as:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>index and noindex directives</li>
          <li>canonical URLs</li>
          <li>duplicate page versions</li>
          <li>HTTP status codes</li>
          <li>soft 404 behaviour</li>
          <li>redirect chains</li>
          <li>sitemap consistency</li>
          <li>indexable placeholder or thin pages</li>
        </ul>
        <p>
          The goal is simple: the pages that matter should be eligible for search, and the pages that do not belong there should not compete with them.
        </p>
      </>
    ),
  },
  {
    icon: Cpu,
    title: "3. Technical SEO Architecture",
    body: (
      <>
        <p>
          <Link to="/services/$slug" params={{ slug: "technical-seo" }} className="link-underline font-medium text-foreground">
            Technical SEO
          </Link>{" "}
          becomes most valuable when it disappears into the architecture of a well-built website.
        </p>
        <p>The OMSA framework reviews the elements that allow search engines to interpret the site consistently, including:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>canonical implementation</li>
          <li>XML sitemap structure</li>
          <li>robots.txt configuration</li>
          <li>URL architecture</li>
          <li>redirects</li>
          <li>broken internal routes</li>
          <li>structured data</li>
          <li>page status behaviour</li>
          <li>mobile compatibility</li>
          <li>JavaScript-rendered content accessibility</li>
        </ul>
        <p>
          A technically healthy website creates fewer ambiguities for search engines and fewer unnecessary obstacles for users.
        </p>
      </>
    ),
  },
  {
    icon: FileSearch,
    title: "4. On-Page SEO Signals",
    body: (
      <>
        <p>Strong technical foundations still need strong page-level signals.</p>
        <p>The audit framework evaluates how clearly each important page communicates its purpose through elements such as:</p>
        <dl className="space-y-3">
          <div>
            <dt className="font-medium text-foreground">SEO titles</dt>
            <dd>Are they descriptive, distinctive and aligned with the page's actual search intent?</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Meta descriptions</dt>
            <dd>Do they communicate relevance and give searchers a meaningful reason to choose the result?</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Heading structure</dt>
            <dd>Does the page have a clear hierarchy, or are headings being used primarily for visual styling?</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Content relevance</dt>
            <dd>Does the page answer the questions someone with that search intent is likely to have?</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Semantic coverage</dt>
            <dd>Does the content demonstrate real depth around the subject rather than repeating one keyword?</dd>
          </div>
        </dl>
        <p>The purpose is not to optimize a page for a phrase. It is to make the page unmistakably relevant to the topic it deserves to rank for.</p>
      </>
    ),
  },
  {
    icon: Gauge,
    title: "5. Core Web Vitals & Page Experience",
    body: (
      <>
        <p>Search performance and user experience increasingly overlap.</p>
        <p>
          A page that shifts while loading, responds slowly or feels heavy on mobile can create friction long before a visitor reaches the call to action.
        </p>
        <p>
          The OMSA SEO audit framework considers key performance and experience signals alongside technical SEO so that optimization does not happen in isolation.
        </p>
        <p>Core Web Vitals provide useful indicators for evaluating real-world loading performance, responsiveness and visual stability.</p>
        <p>The goal is not to chase a perfect laboratory score. It is to identify performance problems that materially affect users, search visibility or conversion quality.</p>
      </>
    ),
  },
  {
    icon: Link2,
    title: "6. Internal Linking & Site Architecture",
    body: (
      <>
        <p>Some of the most valuable pages on a website are often surprisingly difficult to reach.</p>
        <p>A service page may exist but receive almost no contextual internal links.</p>
        <p>A location page may sit several levels deep with no meaningful relationship to relevant services.</p>
        <p>A strong article may attract traffic but fail to direct that authority toward a commercial page.</p>
        <p>The audit framework examines how information and authority move through the website. We look for:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>orphan or weakly linked pages</li>
          <li>important commercial pages with insufficient internal links</li>
          <li>broken internal links</li>
          <li>poor contextual linking</li>
          <li>shallow or confusing architecture</li>
          <li>weak relationships between services, industries, locations and content</li>
        </ul>
        <p>Internal linking should help both humans and search engines understand what matters.</p>
      </>
    ),
  },
  {
    icon: Layers,
    title: "7. Structured Data & Entity Clarity",
    body: (
      <>
        <p>A modern website should communicate not only what individual pages say, but what the business itself represents.</p>
        <p>Structured data can help search engines interpret entities and relationships more precisely when implemented correctly.</p>
        <p>The OMSA audit framework reviews the presence, relevance and consistency of appropriate schema types such as:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Organization</li>
          <li>WebSite</li>
          <li>Service</li>
          <li>BreadcrumbList</li>
          <li>Article</li>
          <li>FAQPage where appropriate</li>
        </ul>
        <p>The objective is not to add schema everywhere. It is to use structured data where it accurately describes visible, real content.</p>
      </>
    ),
  },
  {
    icon: Target,
    title: "8. Content & Search Intent Alignment",
    body: (
      <>
        <p>One of the most expensive SEO mistakes is ranking the wrong page for the wrong intent — or creating several pages that compete for the same query.</p>
        <p>The audit framework looks beyond individual keywords to evaluate whether the website's content architecture reflects how potential customers actually search. This includes reviewing:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>service-page intent</li>
          <li>informational vs commercial intent</li>
          <li>duplicate or overlapping topics</li>
          <li>thin pages</li>
          <li>missing supporting content</li>
          <li>location targeting</li>
          <li>industry relevance</li>
          <li>opportunities for topic clusters</li>
          <li>content-to-service internal linking</li>
        </ul>
        <p>SEO becomes much more powerful when every page has a clear job.</p>
      </>
    ),
  },
];

const PRIORITY_TIERS = [
  { title: "Critical", body: "Issues that can prevent crawling, indexing or correct page interpretation." },
  { title: "High Priority", body: "Issues materially limiting visibility, authority or important commercial pages." },
  { title: "Growth Opportunities", body: "Improvements that can strengthen relevance, internal authority, content coverage or competitive positioning." },
  { title: "Lower-Priority Enhancements", body: "Useful refinements that should not distract the business from higher-impact work." },
];

const PERSONAS = [
  { icon: Briefcase, title: "Business Owners", body: "Understand whether your website has fundamental SEO weaknesses before committing more budget to advertising or content." },
  { icon: Users, title: "Marketing Teams", body: "Identify structural issues that may be limiting the performance of campaigns, landing pages and organic content." },
  { icon: Building2, title: "SMEs", body: "Prioritise SEO work according to business impact rather than trying to fix every warning an SEO tool produces." },
  { icon: Rocket, title: "Startups", body: "Build a stronger technical and content foundation before website complexity grows." },
  { icon: Globe2, title: "Established GCC Businesses", body: "Evaluate whether an existing website is technically and strategically prepared to compete across Oman, the UAE and wider regional search markets." },
];

const NEXT_STEPS = [
  "Technical SEO",
  "Website Development",
  "Website Performance Optimisation",
  "Content Strategy",
  "Internal Linking",
  "Structured Data",
  "Local SEO",
  "Search-focused Landing Pages",
  "Website Architecture",
  "Analytics and Measurement",
];

function SeoAuditToolPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="pt-32 pb-2">
        <div className="container-luxe">
          <ol className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link to="/tools" className="hover:text-foreground">Tools</Link></li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-foreground">SEO Audit Tool</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-8 pb-16">
        <div className="container-luxe max-w-3xl">
          <p className="eyebrow">Digital tool</p>
          <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            SEO Audit Tool for Websites That Need More Than a Score
          </h1>

          <div className="mt-6 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>Your website can look excellent and still be almost invisible to search engines.</p>
            <p>A polished interface does not guarantee a healthy SEO foundation.</p>
            <p>
              Behind every website that consistently earns organic visibility is a technical system that search engines can crawl, understand and trust: clear architecture, intentional metadata, correct indexation signals, efficient internal linking, strong page experience and content that communicates exactly what the business is about.
            </p>
            <p>The OMSA SEO Audit Tool is being developed to make that foundation easier to understand.</p>
            <p>Rather than reducing your website to another unexplained score, the tool is designed around a more useful question:</p>
            <p className="font-display text-xl text-foreground">
              "What is preventing this website from reaching its full search potential — and what should be fixed first?"
            </p>
          </div>

          <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[color:var(--gold-deep)]" />
            Tool in development
          </span>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#framework" className="btn-gold">
              Explore the SEO Audit Framework <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/contact" className="btn-ghost-luxe">
              Request a Professional SEO Audit
            </Link>
          </div>
        </div>
      </header>

      {/* Better questions */}
      <section className="section-pad bg-muted/30">
        <div className="container-luxe max-w-3xl">
          <p className="eyebrow">Philosophy</p>
          <h2 className="mt-5 font-display text-3xl md:text-4xl font-bold tracking-tight">
            A Better SEO Audit Starts With Better Questions
          </h2>
          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <p>Most websites do not have one SEO problem.</p>
            <p>They have a collection of small structural weaknesses that reinforce one another.</p>
            <p>A page may have excellent copy but weak internal links.</p>
            <p>A technically fast website may accidentally block important pages from indexation.</p>
            <p>A service page may be indexable but poorly connected to the rest of the website.</p>
            <p>A beautiful redesign may introduce redirect problems, duplicate metadata or inconsistent canonical URLs.</p>
            <p>This is why a serious website SEO audit should not simply ask:</p>
            <p className="font-display text-foreground">"Is this page optimized?"</p>
            <p>It should ask:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Can search engines discover it?</li>
              <li>Can they crawl it efficiently?</li>
              <li>Can they understand what it represents?</li>
              <li>Can they identify the preferred version?</li>
              <li>Does the page provide a strong experience?</li>
              <li>Is it connected intelligently to the rest of the website?</li>
              <li>And does it deserve to compete for the searches the business actually wants?</li>
            </ul>
            <p>That is the philosophy behind the OMSA audit framework.</p>
          </div>
        </div>
      </section>

      {/* Framework */}
      <section id="framework" className="section-pad scroll-mt-24">
        <div className="container-luxe">
          <p className="eyebrow">The framework</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
            What the OMSA SEO Audit Framework Evaluates
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {FRAMEWORK_ITEMS.map((item) => (
              <article key={item.title} className="rounded-3xl border border-border bg-card p-8">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{item.title}</h3>
                <div className="mt-3 space-y-3 text-sm text-muted-foreground leading-relaxed [&_ul]:mt-1">
                  {item.body}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What you should receive */}
      <section className="section-pad bg-muted/30">
        <div className="container-luxe">
          <p className="eyebrow">Prioritisation</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
            What You Should Receive From a Useful SEO Audit
          </h2>
          <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
            A professional audit should not leave you with a 70-page document full of warnings and no idea where to begin. The useful output is prioritisation. A strong audit should distinguish between:
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRIORITY_TIERS.map((tier) => (
              <div key={tier.title} className="rounded-2xl border border-border bg-background p-6">
                <h3 className="font-display text-base font-semibold tracking-tight">{tier.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{tier.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-muted-foreground leading-relaxed">
            Because finding problems is easy. Knowing which problem deserves attention first is where strategy begins.
          </p>
        </div>
      </section>

      {/* Tool vs professional */}
      <section className="section-pad">
        <div className="container-luxe max-w-3xl">
          <p className="eyebrow">Tool vs. strategist</p>
          <h2 className="mt-5 font-display text-3xl md:text-4xl font-bold tracking-tight">
            SEO Audit Tool vs. Professional SEO Audit
          </h2>
          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <p>An automated SEO checker is useful for identifying patterns quickly.</p>
            <p>
              A{" "}
              <Link to="/services/$slug" params={{ slug: "seo" }} className="link-underline font-medium text-foreground">
                professional SEO audit
              </Link>{" "}
              goes further.
            </p>
            <p>Tools can detect that a canonical exists. A strategist asks whether it points to the right page.</p>
            <p>A crawler can report that a service page has three internal links. A strategist asks whether the page is commercially important enough to deserve stronger internal support.</p>
            <p>An automated system can flag duplicate titles. A strategist asks whether the underlying website architecture is causing several pages to compete for the same search intent.</p>
            <p>The OMSA SEO Audit Tool is being developed to make automated analysis more useful and actionable.</p>
            <p>For websites with significant organic-growth goals, migrations, complex architectures or competitive markets, human analysis still matters.</p>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="section-pad bg-muted/30">
        <div className="container-luxe">
          <p className="eyebrow">Who it's for</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
            Who This SEO Audit Is For
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PERSONAS.map((p) => (
              <div key={p.title} className="rounded-3xl border border-border bg-background p-7">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What the tool will not do */}
      <section className="section-pad">
        <div className="container-luxe max-w-3xl">
          <p className="eyebrow">Transparency</p>
          <h2 className="mt-5 font-display text-3xl md:text-4xl font-bold tracking-tight">
            What the Tool Will Not Do
          </h2>
          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <p>Transparency matters.</p>
            <p>The OMSA SEO Audit Tool is designed to support diagnosis and prioritisation.</p>
            <p>It is not intended to promise rankings, replace Search Console data, manufacture backlinks or reduce SEO strategy to a single score.</p>
            <p>
              A website's organic performance can be influenced by technical implementation, content quality, competition, authority, search demand, brand signals and many other factors.
            </p>
            <p>No legitimate SEO tool can guarantee a ranking position.</p>
            <p>The purpose of an audit is to create clarity.</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>What is working?</li>
              <li>What is creating friction?</li>
              <li>What should be fixed?</li>
              <li>What can wait?</li>
              <li>Where is the largest opportunity?</li>
            </ul>
            <p>That is the information that leads to better decisions.</p>
          </div>
        </div>
      </section>

      {/* From audit to action */}
      <section className="section-pad bg-muted/30">
        <div className="container-luxe max-w-3xl">
          <p className="eyebrow">Next steps</p>
          <h2 className="mt-5 font-display text-3xl md:text-4xl font-bold tracking-tight">
            From Audit to Action
          </h2>
          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <p>Finding an SEO issue has almost no value if nobody knows how to resolve it.</p>
            <p>That is why OMSA approaches audits as the beginning of an improvement process rather than the final deliverable.</p>
            <p>Depending on what the analysis reveals, the next step may involve:</p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {NEXT_STEPS.map((step) => {
                if (step === "Local SEO") {
                  return (
                    <li key={step} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
                      <Link to="/services/$slug" params={{ slug: "local-seo" }} className="link-underline text-foreground">
                        {step}
                      </Link>
                    </li>
                  );
                }
                if (step === "Website Development") {
                  return (
                    <li key={step} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
                      <Link to="/services/$slug" params={{ slug: "website-design" }} className="link-underline text-foreground">
                        {step}
                      </Link>
                    </li>
                  );
                }
                return (
                  <li key={step} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
                    {step}
                  </li>
                );
              })}
            </ul>
            <p>The recommendation should follow the evidence. Not the other way around.</p>
          </div>
        </div>
      </section>

      {/* Clarity, not theatre */}
      <section className="section-pad">
        <div className="container-luxe max-w-3xl">
          <p className="eyebrow">Our philosophy</p>
          <h2 className="mt-5 font-display text-3xl md:text-4xl font-bold tracking-tight">
            Built for Businesses That Want Clarity, Not SEO Theatre
          </h2>
          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <p>SEO can become unnecessarily complicated.</p>
            <p>Dashboards fill with scores. Reports grow longer. Teams accumulate recommendations. Yet the question leadership actually needs answered remains surprisingly simple:</p>
            <p className="font-display text-xl text-foreground">"What should we do next?"</p>
            <p>The OMSA SEO Audit Tool is being developed around that question.</p>
            <p>Not to produce more noise.</p>
            <p>To turn technical signals into a clearer picture of what is holding a website back — and where meaningful improvement can begin.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-muted/30" id="faq">
        <div className="container-luxe grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-5 font-display text-3xl md:text-4xl font-bold tracking-tight">
              Frequently asked questions
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md">
              If your question isn't here, bring it to the strategy call — we'd rather discuss it openly.
            </p>
          </div>
          <div className="space-y-3">
            {SEO_AUDIT_FAQS.map((f, i) => (
              <FaqItem key={f.q} item={f} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-pad">
        <div className="container-luxe">
          <div className="rounded-[2rem] border border-border bg-card p-10 lg:p-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight max-w-2xl mx-auto">
              Your Website Does Not Need More SEO Noise. It Needs a Clearer Diagnosis.
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-muted-foreground leading-relaxed">
              If organic growth matters to your business, start by understanding the foundation beneath your rankings. Get a structured view of the technical issues, content gaps and search opportunities that deserve attention first.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-gold">
                Request an SEO Audit <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services/$slug" params={{ slug: "technical-seo" }} className="btn-ghost-luxe">
                Explore Technical SEO Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
