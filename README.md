# MĽASK Landing

Static landing page for MĽASK — a recipe app that turns a swiped recipe into an
automatic grocery order (Wolt / Bolt Food / Košík).

No build step, no dependencies. Plain HTML/CSS/JS.

## Files

- `index.html` — markup
- `styles.css` — all styles, incl. responsive breakpoints
- `app.js` — swipe deck, step demo, allergen swaps, pricing toggle, FAQ, signup form
- `assets/` — partner logos
- `MLASK Landing v2.dc.html`, `support.js` — original Claude Design Composer source this was built from

## Run locally

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173.
