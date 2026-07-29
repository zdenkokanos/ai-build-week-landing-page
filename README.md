# MĽASK Landing

Landing page for MĽASK — a recipe app that turns a swiped recipe into an
automatic grocery order.

Built with **React 19 + TypeScript + Vite**.

## Two versions

`main` carries the **pre-launch** page: it makes no claim the product cannot
back yet. No third-party delivery brands (no logos, no names in the copy), no
pricing, availability stated as Slovakia only, and every call to action is a
sign-in button that is deliberately not wired up (`href="#"`).

The **full version** — partner logos and courier strip, Free/Pro pricing with
the monthly-annual switch, the e-mail waitlist form, SK & CZ availability — is
kept for when the product is ready for it:

```bash
git checkout landing-v1-full
```

It is stored twice, as an annotated tag `landing-v1-full` and as a branch
`archive/landing-v1-full`, both pushed to origin and both pointing at the same
commit. To bring a single piece of it back:

```bash
git checkout landing-v1-full -- src/components/Pricing.tsx
```

## Two languages

The page ships in Slovak and English from one codebase. Every string lives in
`src/i18n/sk.ts` and `src/i18n/en.ts`, both typed as the same `Copy` shape, so a
section added to one language does not compile until the other has it too.
Components read the current language through `useCopy()` and hold no copy of
their own.

The SK/EN switch sits in the navbar at every width. The language is picked once,
in this order:

1. `?lang=sk` / `?lang=en` in the URL
2. the visitor's earlier choice (`mlask-lang` in `localStorage`)
3. the browser language — Slovak or Czech opens in Slovak, anything else in
   English
4. Slovak

To make Slovak the default for everyone regardless of browser, drop step 3 from
`detectLang()` in `src/i18n/index.tsx`.

Switching updates `<html lang>`, the `<title>` and the meta description, and
rewrites `?lang=` so a shared link keeps the language. The English copy is a
rewrite, not a translation: same claims and the same restraint (no partner
brands, no pricing, Slovakia-only availability), with prices and numbers in
English convention — `€8.98`, `4.8`, `1,240`.

Anchor targets (`#ako`, `#donaska`, `#spajza`…) and the allergen keys stay
Slovak in both languages — they are identifiers, not copy. Photography lives in
`src/i18n/media.ts` so the two languages cannot drift to different food.

## Run locally

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:4173.

| script | what it does |
| --- | --- |
| `npm run dev` | dev server with HMR |
| `npm run build` | typecheck + production bundle into `dist/` |
| `npm run preview` | serve the built bundle |
| `npm run typecheck` | types only |

## Structure

```
index.html              Vite entry — fonts, meta, #root
src/main.tsx            React root
src/App.tsx             section order of the page
src/components/         one component per section
src/i18n/types.ts       the `Copy` shape both languages must fill
src/i18n/sk.ts          Slovak copy and demo data (dishes, steps, FAQ, quotes…)
src/i18n/en.ts          the same, in English
src/i18n/media.ts       image URLs and anchor hrefs shared by both languages
src/i18n/index.tsx      LanguageProvider, useCopy(), language detection
src/hooks/              useVisibleInterval, usePrefersReducedMotion
src/styles/app.css      the language switch; everything else is @mlask/ui
legacy/                 the pre-React static page, kept for reference
```

### Components

| file | section |
| --- | --- |
| `Header.tsx` | sticky navbar + mobile menu |
| `LanguageSwitch.tsx` | the SK/EN pill in the navbar |
| `Hero.tsx` / `SwipeDeck.tsx` | hero copy and the interactive swipe deck |
| `HowItWorks.tsx` / `StepScreens.tsx` | auto-advancing 4-step tab list and its phone screens |
| `Delivery.tsx` | green band — automatic order |
| `Allergens.tsx` | allergen chips that rewrite the recipe live |
| `Pantry.tsx` | pantry band |
| `RecipeRail.tsx` | infinite recipe marquee |
| `Testimonials.tsx` | quote and video-clip mosaic |
| `Pricing.tsx` | free-while-in-beta card with the sign-in CTA |
| `Faq.tsx` | accordion |
| `Waitlist.tsx` | closing CTA — sign-in button |
| `Footer.tsx` | footer |
| `Decor.tsx` | hand-drawn doodle/scribble layer |

### Type

| role | family |
| --- | --- |
| headings, display numbers | `Roc Grotesk` → falls back to **Archivo** |
| body copy, UI | **Inter** |
| handwritten annotations | **Caveat** |

Roc Grotesk is a licensed Fontfabric family, so it is not in the repo. The
heading stack (`--font-head` in `src/styles/styles.css`) already lists it first,
so it takes over as soon as it is available — either through an Adobe Fonts kit
`<link>` in `index.html`, or by dropping the licensed `.woff2` files into
`public/fonts/` and adding:

```css
@font-face {
  font-family: 'Roc Grotesk';
  src: url('/fonts/RocGrotesk-Medium.woff2') format('woff2');
  font-weight: 500; font-style: normal; font-display: swap;
}
@font-face {
  font-family: 'Roc Grotesk';
  src: url('/fonts/RocGrotesk-Bold.woff2') format('woff2');
  font-weight: 700 800; font-style: normal; font-display: swap;
}
```

Until then the page renders in Archivo, which shares Roc Grotesk's grotesque
proportions and x-height, so the layout does not shift when the real family
lands.

### Behaviour notes

- **Autoplays** (swipe deck, step list) only tick while their section is on
  screen and the tab is visible — `useVisibleInterval`. A manual swipe stops the
  deck autoplay for good; clicking a step only restarts its countdown.
- **Reduced motion** is respected live: with `prefers-reduced-motion: reduce`
  the autoplays never start and the exit animation collapses to 60 ms.
- The sign-in buttons in the free section and the closing CTA point at `#`: there
  is no auth yet, and nothing should look like it works when it does not.
- The swipe deck's hint is held as a state (`idle` / `liked` / `skipped`), not as
  a sentence, so a language switch mid-swipe redraws it instead of leaving the
  previous language on screen.
