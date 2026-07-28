# MĽASK Landing

Landing page for MĽASK — a recipe app that turns a swiped recipe into an
automatic grocery order (Wolt / Bolt Food / Košík).

Built with **React 19 + TypeScript + Vite**. The design, copy and stylesheet are
carried over from the original static page unchanged — only the markup and
behaviour moved into components.

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
src/data/content.ts     all copy and demo data (dishes, steps, FAQ, quotes…)
src/hooks/              useVisibleInterval, usePrefersReducedMotion
src/styles/styles.css   the original stylesheet, unchanged
public/assets/          partner logos
legacy/                 the pre-React static page, kept for reference
```

### Components

| file | section |
| --- | --- |
| `Header.tsx` | sticky navbar + mobile menu |
| `Hero.tsx` / `SwipeDeck.tsx` | hero copy and the interactive swipe deck |
| `Partners.tsx` | delivery partner logos |
| `HowItWorks.tsx` / `StepScreens.tsx` | auto-advancing 4-step tab list and its phone screens |
| `Delivery.tsx` | green band — automatic order |
| `Allergens.tsx` | allergen chips that rewrite the recipe live |
| `Pantry.tsx` | pantry band |
| `RecipeRail.tsx` | infinite recipe marquee |
| `Testimonials.tsx` | quote and video-clip mosaic |
| `Pricing.tsx` | plans with monthly/annual switch |
| `Faq.tsx` | accordion |
| `Waitlist.tsx` | signup form (client-side only, no backend yet) |
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
- The signup form has **no backend** — it validates and confirms locally.
