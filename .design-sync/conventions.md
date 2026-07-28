# Building with MĽASK

A small design system pulled out of the MĽASK landing page: a warm, hand-drawn
food product in grass green on neutral grey. Slovak-language product.

## Setup

No provider, no theme object, no context. Import the stylesheet once at the app
root and use the components directly:

```jsx
import '@mlask/ui/styles.css'
import { Band, Button, SectionHeading, Shell } from '@mlask/ui'
```

The stylesheet carries the tokens, the type stack and every component's styles,
and it `@import`s its own webfonts — nothing else has to be set up. Headings ask
for `Roc Grotesk` (licensed, usually absent) and land on **Archivo**; body copy is
**Inter**; the handwritten annotations are **Caveat**.

## The styling idiom

Components take **props, never class names, for their variants** — `variant`,
`tone`, `size`. For your own layout glue around them, use the CSS custom
properties. Do not invent a class vocabulary: this system has no utility classes.

Colour: `--green` (fills — buttons, icons), `--green-panel` (large green
surfaces), `--green-deep` (green text on light), `--lime` (highlights, the
primary on dark), `--orange` (hover and warnings only — never a resting state),
`--ink` (text and dark panels), `--ink-70` / `--ink-60` / `--ink-45` / `--ink-30`
(descending text emphasis), `--mint` / `--sand` / `--panel` / `--cream` (tints),
`--on-ink` (body copy on ink), `--line` / `--line-warm` / `--line-soft` (borders).

Structure: `--r-pill` (999px, every pill), `--shadow-xs`/`-sm`/`-md`/`-lg`,
`--shell` (1200px content width), `--gutter`, `--font-head`, `--font-body`.

```jsx
<div style={{ background: 'var(--mint)', borderRadius: 26, padding: 'var(--gutter)' }}>
  <Button variant="green">Objednať nákup</Button>
</div>
```

## Rules that are easy to get wrong

- **One `<Mark>` per heading.** It is a marker-pen block behind a few words; a
  second one is no longer emphasis.
- **`Band tone="green"` is the loudest surface — use it once per page.** White
  text is automatic inside it; put `Button variant="lime"` there, not `green`.
- **Decoration hides below 900px.** `Doodle` and `Scribble` are `display: none`
  under that width because they need whitespace the phone layout lacks. If a mark
  must survive on mobile, pass `keep`.
- **`Tag` describes, `Button` acts.** Nothing in `Tag`, `Chip` or `Badge` is
  clickable.
- **`Chip` is the user's own data** (diet, portions); `Tag` is the product's
  metadata (time, cuisine). They look similar on purpose and are not
  interchangeable.
- Orange is reserved for hover states and things that need attention
  (`PriceRow tone="soon"`, `Chip tone="orange"`).

## Where the truth is

`_ds/<folder>/styles.css` and its imports hold every token and class — read it
before styling anything by hand. Each component's `.prompt.md` carries its props
and usage. The `.d.ts` files are the API contract.

## A page in this system

```jsx
<Band tone="green">
  <Shell>
    <SectionHeading
      align="left"
      eyebrow="Automatická objednávka"
      title={<>Nákup vybavíme za teba. <Mark tone="white">Ty otvoríš dvere.</Mark></>}
      lede="Z receptu vieme spraviť hotovú objednávku potravín."
    />
    <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: '24px 0' }}>
      <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Tick size="lg" /> Porovnáme ceny vrátane doručenia
      </li>
    </ul>
    <Button variant="lime">Objednať prvý nákup</Button>
  </Shell>
</Band>
```
