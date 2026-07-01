
# Scalable Platform Architecture for OMSA Digital & AI Studio

Goal: evolve the current marketing site into a future-proof digital headquarters without a redesign. This plan adds *architecture* — folders, data layers, route shapes, design tokens, and minimal placeholder pages — so future content/products plug in cleanly. No visual redesign.

## 1. Information architecture (route shape)

New top-level routes under `src/routes/` (file-based, dot-separated):

```text
locations.tsx                    -> /locations (index, list of markets)
locations.$city.tsx              -> /locations/muscat, /dubai, ...
industries.tsx                   -> /industries
industries.$slug.tsx             -> hospitality, real-estate, healthcare, ...
resources.tsx                    -> /resources (hub: articles, guides, tools)
resources.$category.tsx          -> /resources/guides, /templates, ...
resources.$category.$slug.tsx    -> individual resource
tools.tsx                        -> /tools (digital products hub)
tools.$slug.tsx                  -> seo-audit, website-analyzer (stubs)
authors.tsx                      -> /authors
authors.$slug.tsx                -> author profile
careers.tsx                      -> /careers
careers.$slug.tsx                -> open role
press.tsx                        -> /press
community.tsx                    -> /community (newsletter, events)
search.tsx                       -> /search (global search UI)
dashboard.tsx                    -> /dashboard (coming-soon gate)
```

Existing `services`, `case-studies`, `blog` stay; case-studies gets filter params.

## 2. Internationalization (i18n) foundation

- `src/lib/i18n/` with `config.ts` (locales: `en`, `ar`, future `fa`), `dictionary.ts` (key/value JSON per locale), `useT()` hook, `getDir(locale)` returning `ltr`/`rtl`.
- Route param strategy: keep current URLs as default English; reserve `/$locale` prefix pattern documented in `src/routes/README.md` for future locale routes (no rewrite yet — avoids breaking SEO).
- `__root.tsx`: set `<html lang>` and `dir` from a `LocaleProvider` (defaults to `en`/`ltr`).
- `styles.css`: add logical-property utilities (`ms-*`, `me-*` via Tailwind defaults) and an RTL audit utility class. Document rule: no `ml-*`/`mr-*` in new code.
- Language switcher component placed in `Navbar` (English active, Arabic shown as "Coming soon").

## 3. Content data layer (expandable without code changes)

Centralize content as typed data modules so adding entries is a one-file edit:

```text
src/lib/content/
  locations.ts        -> City[] {slug, name, country, hero, services, seo}
  industries.ts       -> Industry[]
  resources.ts        -> Resource[] {type: article|guide|template|...}
  tools.ts            -> Tool[] {slug, status: live|beta|coming-soon}
  authors.ts          -> Author[]
  careers.ts          -> Role[]
  press.ts            -> PressItem[]
  taxonomy.ts         -> shared enums (Industry, Country, Service, Tech, Goal)
```

Existing `services-data.ts`, `blog-data.ts`, `case-studies-data.ts` move under `src/lib/content/` and gain shared taxonomy fields (industry, country, service, technology, goal, result) to power case-study filters.

## 4. Case-study library with filters

`case-studies.tsx` adds search-param filters via `validateSearch` (Zod): `industry`, `country`, `service`, `tech`, `goal`. Reusable `<FilterBar />` component reads taxonomy from `taxonomy.ts`. Each card already links to `case-studies/$slug`.

## 5. Resource center & search

- `/resources` hub with category tiles and a `<ResourceCard />` component.
- `/search` page: client-side fuzzy search (Fuse.js) over a merged index built from `content/*` modules at build time (`src/lib/content/search-index.ts`).
- Sitemap and JSON-LD updated to enumerate new routes.

## 6. Design system consolidation

- `src/styles.css`: ensure all tokens (colors, spacing, radii, shadows, motion, typography scale) live as `@theme` CSS variables. Add a `tokens.md` doc under `src/components/site/`.
- New primitives in `src/components/site/`: `Section`, `Container`, `Eyebrow`, `Heading`, `Prose`, `Tag`, `Stat`, `FilterBar`, `EmptyState`, `ComingSoon`, `LocaleSwitcher`.
- Rule: pages compose primitives; no ad-hoc spacing constants.

## 7. Future-product stubs (no-redesign expansion)

Each of these ships as a polished "Coming soon" page using the `ComingSoon` primitive + email capture, so the URL, nav, sitemap, and SEO are ready today:

- `/dashboard` — client portal
- `/tools/seo-audit`, `/tools/website-analyzer`, `/tools/ai-prompt-library`
- `/community`, `/careers`, `/press`

## 8. Navigation & footer

- `Navbar`: condense top-level to `Services`, `Solutions` (mega-menu surfacing Industries + Locations + Tools), `Work`, `Resources`, `Company` (About, Careers, Press, Contact). Mobile menu mirrors the same grouping.
- `Footer`: expand to 5 columns covering every new hub; add language switcher and region selector.

## 9. SEO scale-out

- `src/lib/seo.ts`: add `localeAlternatesJsonLd`, `breadcrumbsFor(path)`, and per-template factories for Location, Industry, Resource, Author, Tool.
- `sitemap[.]xml.ts`: enumerate locations, industries, resources, tools, authors dynamically from `content/*`.
- Add `hreflang` placeholder helper (returns only `en` today, ready for `ar`).

## 10. Analytics & AI hooks (architecture only)

- `src/lib/analytics.ts`: typed `track(event, props)` wrapper, no-op by default, ready to plug GTM/GA4/PostHog.
- `src/lib/ai/` placeholder folder with `assistant.ts` interface (chat, search, recommend) — no implementation; documents the contract.

## Out of scope (explicitly)

- No visual redesign, no copy rewrite.
- No backend / Lovable Cloud enablement (dashboard and forms remain stubs).
- No actual Arabic translations — only the architecture and switcher.
- No real implementation of SEO audit / analyzer tools.

## Technical notes

- All new routes follow TanStack file-based conventions; `routeTree.gen.ts` regenerates automatically.
- Every new route defines `head()` with unique title/description/canonical/og:url and, where relevant, JSON-LD.
- All new components are typed, use existing motion + token system, and respect `prefers-reduced-motion`.
- Filters use `validateSearch` + `fallback()` from `@tanstack/zod-adapter` (already a pattern in the project conventions).

## Deliverable size

~25 new files (routes + content modules + primitives + i18n scaffold), ~6 edits (Navbar, Footer, __root, styles.css, seo.ts, sitemap). No dependency installs unless Fuse.js is approved for search (otherwise simple substring index).

Confirm and I'll build it in one pass.
