import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { ScrollProgress } from "../components/site/ScrollProgress";
import { BackToTop } from "../components/site/BackToTop";
import { MobileStickyCta } from "../components/site/MobileStickyCta";
import { PageTransition } from "../components/site/PageTransition";
import { SITE_URL, organizationJsonLd, websiteJsonLd } from "../lib/seo";
import { LocaleProvider } from "../lib/i18n/LocaleProvider";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow justify-center">Error 404</p>
        <h1 className="mt-6 font-display text-6xl font-bold tracking-tight">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has moved.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-gold">Return home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-semibold tracking-tight">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try refreshing or return home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-gold !py-2.5 !px-5 text-sm"
          >
            Try again
          </button>
          <a href="/" className="btn-ghost-luxe !py-2.5 !px-5 text-sm">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "OMSA Digital & AI Studio — Web Design, SEO & AI Solutions in Oman" },
      { name: "description", content: "OMSA Digital & AI Studio builds high-performance websites, SEO strategies, AI automation, analytics, and business growth systems for companies across Oman and the GCC." },
      { name: "author", content: "OMSA Digital & AI Studio" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { httpEquiv: "content-language", content: "en" },
      { property: "og:site_name", content: "OMSA Digital & AI Studio" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_GB" },
      { property: "og:title", content: "OMSA Digital & AI Studio — Web Design, SEO & AI Solutions" },
      { property: "og:description", content: "Premium websites, SEO, AI automation, analytics, and digital growth solutions for ambitious businesses in Oman and the GCC." },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "OMSA Digital & AI Studio — Web Design, SEO & AI Solutions" },
      { name: "twitter:description", content: "Premium websites, SEO, AI automation, analytics, and digital growth solutions for ambitious businesses in Oman and the GCC." },
      { name: "theme-color", content: "#000000" },
      { name: "format-detection", content: "telephone=no" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
      children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-T5VFFSJ4');`,
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationJsonLd()),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(websiteJsonLd()),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <noscript>
        <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-T5VFFSJ4"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        />
        </noscript>

        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <LocaleProvider>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-[color:var(--ink)] focus:px-4 focus:py-2 focus:text-white focus:shadow-luxe"
        >
          Skip to main content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        <Footer />
        <BackToTop />
        <MobileStickyCta />
      </LocaleProvider>
    </QueryClientProvider>
  );
}
