# OMSA Digital & AI Studio Design Tokens

All visual decisions resolve to tokens defined in `src/styles.css`. Components
must consume tokens via Tailwind utilities (`text-foreground`, `bg-card`,
`border-border`, `text-[color:var(--gold)]`) — never hardcoded hex.

## Color

| Token | Use |
| --- | --- |
| `--background` / `--foreground` | Page surface and primary text |
| `--card` / `--card-foreground` | Elevated surfaces (panels, cards) |
| `--muted` / `--muted-foreground` | Quiet UI, captions, helper text |
| `--primary` / `--primary-foreground` | Filled primary actions, brand mark |
| `--gold`, `--gold-soft`, `--gold-deep` | Brand accent — never the entire surface |
| `--ink` | True black for footer / hero overlays |
| `--border`, `--input`, `--ring` | Outline tokens |
| `--destructive` | Error states only |

## Type

- Display: `Poppins` via `--font-display` (h1–h6, eyebrows, headings).
- Body: `Inter` via `--font-sans`.
- Scale lives in `@theme` — never override font-size with arbitrary px.

## Radii

`--radius` = `0.875rem`. Steps: `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`.

## Shadow

- `--shadow-luxe` — universal elevation for premium surfaces.
- `--shadow-gold` — reserved for primary gold CTAs and gold focus states.

## Motion

- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` for all premium transitions.
- Durations: 0.18s (icon morphs), 0.35s (hover), 0.5s (cards/layout), 0.7s+ (image zoom).
- Always respect `prefers-reduced-motion` — global guard in `styles.css`.

## RTL & i18n

- Use logical properties (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`) — never `ml-*` / `mr-*` / `left-*` / `right-*` in new code.
- `<html dir>` is controlled by `LocaleProvider`; never set it manually.

## Primitives

`Section`, `Container`, `Eyebrow`, `Heading`, `Prose`, `Tag`, `Stat`,
`EmptyState`, `ComingSoon`, `LocaleSwitcher`, `FilterBar` —
import from `@/components/site/Primitives` and friends. Pages compose
primitives; ad-hoc spacing constants are not allowed.
