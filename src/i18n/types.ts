/* ═══════════════════════════════════════════════════════════
   MĽASK — the shape of the landing page copy.

   Every string on the page lives in a `Copy` object; `sk.ts` and
   `en.ts` are two fillings of this one shape, so a section added in
   one language fails to compile until the other has it too.
   Keys that are not copy — anchor hrefs, allergen keys, image URLs —
   stay out of here and are shared between the languages.
   ═══════════════════════════════════════════════════════════ */

export type Lang = 'sk' | 'en'

export type Dish = {
  name: string
  time: string
  diet: string
  cuisine: string
  pantry: string
  img: string
}

export type Recipe = { name: string; meta: string; img: string }

export type Step = { title: string; body: string }

export type AllergenKey = 'lepok' | 'laktoza' | 'orechy' | 'soja'

export type Allergen = { key: AllergenKey; label: string }

export type Ingredient = {
  name: string
  qty: string
  tag: AllergenKey | null
  alt?: string
}

export type FaqItem = { q: string; a: string }

export type Quote = {
  text: string
  initials: string
  name: string
  meta: string
  ink?: boolean
}

export type Clip = { img: string; caption: string; initials: string; handle: string }

export type QuoteKey = 'zuzana' | 'ivana' | 'martin' | 'peter' | 'rodina' | 'katka' | 'tomas'
export type ClipKey = 'lenka' | 'martin' | 'tomas' | 'zuzana'

export type Copy = {
  /** `<html lang>` and the document head. */
  meta: {
    htmlLang: string
    title: string
    description: string
  }

  skipLink: string

  nav: {
    ariaLabel: string
    links: { href: string; label: string }[]
    cta: string
    openMenu: string
    closeMenu: string
    /** Label for the SK/EN switch itself. */
    language: string
  }

  hero: {
    titleLead: string
    titleGreen: string
    titleMark: string
    lede: string
    ctaPrimary: string
    ctaSecondary: string
    scribble: string
    proof: [string, string, string]
  }

  /** The interactive swipe deck in the hero. */
  deck: {
    title: string
    ariaLabel: string
    hintIdle: string
    hintLiked: string
    hintSkipped: string
    likes: (n: number) => string
    likesSub: string
    cartLabel: string
    cartPrice: string
    cartMeta: string
    pantrySaved: string
    stampYes: string
    stampNo: string
    cardCta: string
    skipAria: string
    likeAria: string
    dishes: Dish[]
  }

  how: {
    eyebrow: string
    titleLead: string
    titleMark: string
    lede: string
    tablistAria: string
    steps: [Step, Step, Step, Step]
  }

  /** The four phone screens paired with the step list. */
  screens: {
    onboarding: {
      kicker: string
      title: string
      options: [
        { label: string; note: string },
        { label: string; note: string },
        { label: string; note: string },
      ]
      chips: [string, string, string]
      cta: string
    }
    swipe: {
      heading: string
      dish: string
      time: string
      diet: string
      pantry: string
      order: string
      stamp: string
    }
    basket: {
      heading: string
      sub: string
      /** `have` rows are struck through — they are already in the pantry. */
      rows: [
        { name: string; right: string; have?: boolean },
        { name: string; right: string; have?: boolean },
        { name: string; right: string; have?: boolean },
        { name: string; right: string; have?: boolean },
      ]
      compareLabel: string
      cheapest: string
      cheapestPrice: string
      other: string
      otherPrice: string
      cta: string
    }
    done: {
      tag: string
      title: string
      checks: [string, string]
      cta: string
    }
  }

  delivery: {
    badge: string
    titleLead: string
    titleTail: string
    lede: string
    list: [string, string, string]
    cta: string
    card: {
      title: string
      tag: string
      steps: [
        { label: string; meta: string },
        { label: string; meta: string },
        { label: string; meta: string },
        { label: string; meta: string },
      ]
      deliveryNote: string
      sum: string
      cta: string
    }
  }

  allergens: {
    eyebrow: string
    titleLead: string
    titleTail: string
    lede: string
    scribble: string
    cardLabel: string
    chipsAria: string
    list: Allergen[]
    /** Reads the number of swapped ingredients back to the visitor. */
    note: (swaps: number) => string
    miniInfo: [{ title: string; body: string }, { title: string; body: string }]
    recipe: {
      name: string
      meta: string
      ingredientsLabel: string
      cta: string
    }
    ingredients: Ingredient[]
  }

  pantry: {
    eyebrow: string
    title: string
    lede: string
    howList: [
      { strong: string; rest: string },
      { strong: string; rest: string },
      { strong: string; rest: string },
    ]
    card: {
      title: string
      updated: string
      stock: [string, string, string, string]
      more: string
      soonName: string
      soonNote: string
      missingLabel: string
      missing: [{ name: string; price: string }, { name: string; price: string }]
      suggestText: string
      suggestPrice: string
      suggestCta: string
    }
  }

  rail: {
    burstTop: string
    burstBottom: string
    eyebrow: string
    title: string
    lede: string
    ariaLabel: string
    cardCta: string
    cardGhost: string
    ctaAll: string
    recipes: Recipe[]
  }

  testimonials: {
    titleLead: string
    titleMark: string
    quotes: Record<QuoteKey, Quote>
    clips: Record<ClipKey, Clip>
    rating: {
      score: string
      count: string
    }
  }

  pricing: {
    eyebrow: string
    title: string
    lede: string
    scribble: string
    flag: string
    planName: string
    planSub: string
    price: string
    features: string[]
    cta: string
    fine: string
  }

  faq: {
    title: string
    items: FaqItem[]
  }

  waitlist: {
    badge: string
    titleLine1: string
    titleLine2: string
    titleMark: string
    lede: string
    cta: string
    fine: [string, string, string]
    artChipLabel: string
    artChipValue: string
    artChipLime: string
  }

  footer: {
    blurb: string
    columns: {
      title: string
      links: { href: string; label: string }[]
    }[]
    copyright: string
    note: string
  }
}
