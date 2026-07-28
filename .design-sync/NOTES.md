# design-sync notes — @mlask/ui

## What this package is

`packages/ui` was extracted from the MĽASK landing page during the first sync
(2026-07-28). The page is the only consumer: it imports the stylesheet from
`@mlask/ui/styles.css` and pulls primitives from `@mlask/ui`. The stylesheet is
the DS's, not the app's — there is exactly one copy, in `packages/ui/src/`.

- Build: `npm run build -w @mlask/ui` (plain `tsc`, emits `dist/*.js` + `*.d.ts`).
- The app resolves `@mlask/ui` two ways: the npm workspace symlink for type
  resolution, and a Vite alias to `packages/ui/src` so edits hot-reload. The
  converter bundles `packages/ui/dist/index.js` — always rebuild the package
  before re-syncing, or the bundle ships stale components.

## Gotchas worth knowing

- **Decoration hides itself below 900px.** `styles.css` has
  `@media (max-width: 900px) { .doodle, .scribble, .emoji-float, .reaction, .burst { display: none } }`
  with `.deco-keep { display: block }` as the escape hatch. Preview cards render
  narrower than that, so the first Doodle/Scribble cards came out empty. Fixed by
  surfacing the escape hatch as a real prop (`keep`) rather than fighting the
  media query — the previews pass `keep`.
- **Fonts are imported by the stylesheet, not the host page.** The landing page
  loads them via `<link>` in `index.html`; that left `[FONT_MISSING]` on the first
  validate, because nothing built from the DS would get the right type. `styles.css`
  now opens with the Google Fonts `@import`, which is what makes the DS
  self-sufficient. The page's `<link>` is redundant but harmless (same URL, cached).
- **Roc Grotesk is licensed and cannot ship.** It is first in `--font-head` and
  falls through to Archivo, which is what actually renders. If a licence is bought,
  add `@font-face` rules to `packages/ui/src/styles.css` — nothing else changes.
- `Card` maps its three tones onto page-flavoured class names (`order-card`,
  `pantry-card`, `suggest`). The CSS is generic; only the names are historical.

## Known render warns

- `[RENDER_SKIPPED]` — expected, not a regression. Playwright/chromium was
  declined at first sync (~200MB), so `package-validate.mjs` runs with
  `--no-render-check` and `package-capture.mjs` is never run.
- `[FONT_REMOTE]` — expected since the font `@import` landed. Families load at
  runtime from the font host.

## How previews were verified without playwright

Cards were served with `.ds-sync/storybook/http-serve.mjs` and opened in the
agent's own browser pane, one card at a time plus the `.review.html` overview,
and checked visually. There are therefore **no** `.render-check.json` entries and
no `.grade.json` files — the grade lifecycle never ran. A future sync that
installs playwright gets machine verification and proper grades for free.

## Re-sync risks

- **The app can drift from the DS.** Only `Hero.tsx` was refactored onto the
  primitives (Button, Mark, Tick); the other sections still write the classes by
  hand. If someone edits a class in `styles.css`, the primitives and the page can
  disagree without anything failing. Refactoring the rest is the fix.
- **Preview content is Slovak copy pulled from the live page.** If the page's copy
  changes, the cards still show the old wording — they are compositions, not
  imports, so nothing warns.
- **Unsplash images in previews** (Tag, Avatar, PhoneFrame) are hotlinked. If those
  URLs die, those cells render an empty box.
- **The font `@import` is network-dependent at render time.** An offline or
  CSP-restricted environment falls back to system fonts with no warning.
- `.design-sync/config.json` `overrides` exist purely for card presentation
  (`cardMode`, `viewport`). They do not affect what the design agent imports.
