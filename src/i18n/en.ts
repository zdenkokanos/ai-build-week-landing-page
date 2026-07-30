import { HREF, IMG, IMG_CLIP, IMG_RAIL } from './media'
import type { Copy } from './types'

/* ═══════════════════════════════════════════════════════════
   MĽASK — English version of the landing page.

   Written as English marketing copy rather than a word-for-word
   translation: same claims, same restraint (no partner brands, no
   pricing, Slovakia-only availability), idiomatic phrasing.
   Prices and numbers follow English convention — €8.98, 4.8, 1,240.
   ═══════════════════════════════════════════════════════════ */

export const en: Copy = {
  meta: {
    htmlLang: 'en',
    title: 'MĽASK — Pick a recipe, the groceries come to you',
    description:
      'Swipe whatever you fancy tonight. MĽASK builds the shopping list, subtracts what you already have at home and has the rest delivered. Available in Slovakia.',
  },

  skipLink: 'Skip to content',

  nav: {
    ariaLabel: 'Main navigation',
    links: [
      { href: HREF.how,      label: 'How it works' },
      { href: HREF.delivery, label: 'Ordering' },
      { href: HREF.allergy,  label: 'Allergies' },
      { href: HREF.pantry,   label: 'Pantry' },
      { href: HREF.free,     label: 'Free' },
    ],
    cta: 'Try it free',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
  },

  hero: {
    titleLead: 'Pick the recipe.',
    titleGreen: "We'll bring",
    titleMark: 'the groceries.',
    lede: "Swipe whatever you fancy tonight. MĽASK builds the shopping list, subtracts what's already in your kitchen and has the rest delivered.",
    ctaPrimary: 'Try it free',
    ctaSecondary: 'How it works',
    scribble: 'start here',
    proof: ['No card needed', 'Ingredients in 40 minutes', 'Available in Slovakia'],
  },

  deck: {
    title: 'What do you fancy?',
    ariaLabel: 'Recipe picking demo',
    hintIdle: 'Left for no, right for yes.',
    hintLiked: "Saved to tonight's picks.",
    hintSkipped: 'Fair enough — not today.',
    likes: (n) => `${n} ${n === 1 ? 'meal' : 'meals'}`,
    likesSub: "in tonight's picks",
    cartLabel: 'Basket is ready',
    cartPrice: '€8.98',
    cartMeta: 'Delivery · 25 min',
    pantrySaved: 'Pantry saved you €4.80',
    stampYes: 'YUM',
    stampNo: 'NOT TODAY',
    cardCta: 'Order the ingredients',
    skipAria: 'Not today',
    likeAria: 'Yum',
    dishes: [
      { name: 'Coconut chicken curry', time: '32 min', diet: 'dairy-free', cuisine: 'asian',        pantry: '6 of 9 ingredients at home',  img: IMG.curry },
      { name: 'Cacio e pepe pasta',    time: '18 min', diet: 'vegetarian', cuisine: 'italian',      pantry: '4 of 5 ingredients at home',  img: IMG.cacio },
      { name: 'Lentil goulash',        time: '45 min', diet: 'gluten-free', cuisine: 'home cooking', pantry: '5 of 8 ingredients at home',  img: IMG.lentil },
      { name: 'Salmon with fennel',    time: '28 min', diet: 'low carb',   cuisine: 'nordic',       pantry: '3 of 7 ingredients at home',  img: IMG.salmon },
      { name: 'Chilli sin carne',      time: '35 min', diet: 'vegan',      cuisine: 'mexican',      pantry: '6 of 8 ingredients at home',  img: IMG.chilli },
      { name: 'Chicken tikka masala',  time: '40 min', diet: 'gluten-free', cuisine: 'indian',      pantry: '5 of 10 ingredients at home', img: IMG.tikka },
    ],
  },

  how: {
    eyebrow: 'How it works',
    titleLead: 'Four steps,',
    titleMark: 'two minutes',
    lede: 'The steps advance on their own — or click any of them.',
    tablistAria: 'Steps',
    steps: [
      { title: 'Tell us who you are',  body: 'A 90-second setup: allergies, how much time you have, how many sit down to eat.' },
      { title: 'Swipe to pick a meal', body: 'Ten cards, five seconds. The AI puts up food you actually feel like today.' },
      { title: 'The basket fills itself', body: 'We subtract your pantry, match ingredients to real products and compare prices.' },
      { title: 'You tap pay',          body: "A courier is at your door in 40 minutes. You never went to the shop." },
    ],
  },

  screens: {
    onboarding: {
      kicker: 'STEP 3 / 4',
      title: 'How much time do you have on a weekday?',
      options: [
        { label: 'Under 15 minutes',  note: 'quick ones' },
        { label: '20 – 40 minutes',   note: '✓' },
        { label: 'An hour or more',   note: 'weekend' },
      ],
      chips: ['gluten-free', 'nut-free', '4 servings'],
      cta: 'Continue',
    },
    swipe: {
      heading: 'What do you fancy?',
      dish: 'Coconut curry',
      time: '32 min',
      diet: 'dairy-free',
      pantry: '6 of 9 at home',
      order: 'Order',
      stamp: 'YUM',
    },
    basket: {
      heading: 'Shopping list',
      sub: 'Lentil goulash · 4 servings',
      rows: [
        { name: 'Red lentils',    right: '250 g' },
        { name: 'Tomato paste',   right: '70 g' },
        { name: 'Onion',          right: 'at home', have: true },
        { name: 'Smoked paprika', right: 'at home', have: true },
      ],
      compareLabel: 'Basket comparison',
      cheapest: 'Cheapest',
      cheapestPrice: '€8.98',
      other: 'Next option',
      otherPrice: '€9.60',
      cta: 'Pay and deliver',
    },
    done: {
      tag: 'Courier is at the door',
      title: 'Ingredients delivered in 24 minutes',
      checks: ['Shopping logged to your pantry', 'Method broken into steps'],
      cta: 'Start cooking',
    },
  },

  delivery: {
    badge: 'Automatic ordering',
    titleLead: 'We do the shopping run.',
    titleTail: 'You just open the door.',
    lede: 'This is the whole difference from recipe apps: we can turn a recipe into a finished grocery order.',
    list: [
      'Ingredients matched to products in the shop',
      'Prices compared, delivery included',
      'You see and edit the basket before paying',
    ],
    cta: 'Order your first shop',
    card: {
      title: "Today's order",
      tag: 'in progress',
      steps: [
        { label: 'Recipe picked',      meta: 'Coconut curry' },
        { label: 'Pantry subtracted',  meta: '−€4.80' },
        { label: 'Basket filled',      meta: '3 items' },
        { label: 'Payment and delivery', meta: '' },
      ],
      deliveryNote: 'Delivery in 25 minutes',
      sum: '€8.98',
      cta: 'Pay and deliver',
    },
  },

  allergens: {
    eyebrow: 'Allergies and intolerances',
    titleLead: "Recipes don't get hidden.",
    titleTail: 'They get rewritten.',
    lede: 'Other apps hide a recipe the moment it clashes with your allergy. We swap the one ingredient — and the replacement is what lands in your basket.',
    scribble: 'try clicking',
    cardLabel: "Tick what you can't eat:",
    chipsAria: 'Allergens',
    list: [
      { key: 'lepok',   label: 'gluten' },
      { key: 'laktoza', label: 'lactose' },
      { key: 'orechy',  label: 'nuts' },
      { key: 'soja',    label: 'soy' },
    ],
    note: (swaps) => {
      if (swaps === 0) return 'The recipe is unchanged.'
      if (swaps === 1) return 'We swapped one ingredient — taste and texture stay.'
      return `We swapped ${swaps} ingredients — taste and texture stay.`
    },
    miniInfo: [
      {
        title: 'Checked before the basket',
        body: "Every product's ingredient list is checked against your profile before the order goes out.",
      },
      {
        title: 'Household profile',
        body: 'You gluten-free, your partner nut-free. One meal for everyone.',
      },
    ],
    recipe: {
      name: 'Creamy pasta with chicken',
      meta: 'varecha.sk · 25 min · 2 servings',
      ingredientsLabel: 'INGREDIENTS',
      cta: 'Get the ingredients delivered',
    },
    ingredients: [
      { name: 'Wheat penne',   qty: '250 g',   tag: 'lepok',   alt: 'Corn penne' },
      { name: 'Cream 33%',     qty: '200 ml',  tag: 'laktoza', alt: 'Oat cream' },
      { name: 'Parmesan',      qty: '60 g',    tag: 'laktoza', alt: 'Nutritional yeast' },
      { name: 'Pine nuts',     qty: '30 g',    tag: 'orechy',  alt: 'Sunflower seeds' },
      { name: 'Soy sauce',     qty: '1 tbsp',  tag: 'soja',    alt: 'Coconut aminos' },
      { name: 'Chicken breast', qty: '300 g',  tag: null },
      { name: 'Garlic',        qty: '2 cloves', tag: null },
    ],
  },

  pantry: {
    eyebrow: 'Pantry',
    title: "The app knows what's in your kitchen. You only buy what isn't.",
    lede: "We'll also nudge you about what needs using up while it's still good.",
    howList: [
      { strong: 'You shop',       rest: ' — it logs itself. Or add items by hand, or photograph the receipt.' },
      { strong: 'You cook',       rest: ' — the amounts you used come off the shelf.' },
      { strong: 'Next recipe',    rest: ' — we suggest one that finishes off what you have.' },
    ],
    card: {
      title: 'My pantry',
      updated: 'updated today',
      stock: ['Rice 1.2 kg', 'Coconut milk ×2', 'Onions ×4', 'Smoked paprika 40 g'],
      more: '+14 more',
      soonName: 'Chicken breast 500 g',
      soonNote: 'use within 2 days',
      missingLabel: "MISSING FOR TODAY'S RECIPE",
      missing: [
        { name: 'Ginger 100 g',       price: '€1.29' },
        { name: 'Coriander, a bunch', price: '€1.49' },
      ],
      suggestText: "Today we suggest coconut curry — it finishes off the chicken and the milk.",
      suggestPrice: 'Buy 2 things · €2.78',
      suggestCta: 'Order',
    },
  },

  rail: {
    burstTop: '70,000+',
    burstBottom: 'recipes',
    eyebrow: 'Real recipes',
    title: "We don't invent recipes. We take the ones people have actually cooked.",
    lede: 'The AI reads trusted Slovak and Czech cooking sites, breaks a recipe down into ingredients and amounts, and links back to the original. You can order the shop straight from any of them.',
    ariaLabel: 'Recipe examples',
    cardCta: 'Order the ingredients',
    cardGhost: 'View recipe',
    ctaAll: 'Browse all recipes',
    recipes: [
      { name: 'Chicken bowl',         meta: '25 min · high protein', img: IMG_RAIL.bowl },
      { name: 'Chickpea salad',       meta: '15 min · vegan',        img: IMG_RAIL.chickpea },
      { name: 'Salmon with fennel',   meta: '28 min · gluten-free',  img: IMG_RAIL.salmon },
      { name: 'Chicken tikka masala', meta: '40 min · indian',       img: IMG_RAIL.tikka },
      { name: 'Coconut curry',        meta: '32 min · dairy-free',   img: IMG_RAIL.curry },
      { name: 'Pesto pasta',          meta: '20 min · vegetarian',   img: IMG_RAIL.pesto },
    ],
  },

  testimonials: {
    titleLead: 'People who stopped staring into the',
    titleMark: 'fridge',
    quotes: {
      zuzana: { text: '“Coeliac disease turned cooking into logistics. Finally a recipe I don’t have to rewrite — and the shop comes with it.”', initials: 'ZK', name: 'Zuzana K.', meta: 'Bratislava · gluten-free' },
      ivana:  { text: '“I stopped cooking the same five things. The swipes show me food I’d never have searched for.”', initials: 'IM', name: 'Ivana M.', meta: 'Trnava · cooks for two' },
      martin: { text: '“I swipe on the way home from work. By the time I get there, the groceries are at the door.”', initials: 'MH', name: 'Martin H.', meta: 'Košice · cooks every day', ink: true },
      peter:  { text: '“Finally an app where I don’t write the shopping list. It writes itself.”', initials: 'PŠ', name: 'Peter Š.', meta: 'Prešov · 2 kids' },
      rodina: { text: '“Two adults, two kids, four opinions. The app turns that into one dinner and one shop — and nothing gets thrown out.”', initials: 'LP', name: 'Lenka and Peter', meta: 'Žilina · family of 4' },
      katka:  { text: '“Lactose isn’t a problem any more. The swaps genuinely taste the same.”', initials: 'KB', name: 'Katka B.', meta: 'Nitra · dairy-free' },
      tomas:  { text: '“I live alone and I hated shopping. Now exactly as much arrives as I eat.”', initials: 'TB', name: 'Tomáš B.', meta: 'Nitra · cooks for one' },
    },
    clips: {
      lenka:  { img: IMG_CLIP.lenka,  caption: "This is how a whole week's shop arrives", initials: 'LV', handle: 'lenka.cooks' },
      martin: { img: IMG_CLIP.martin, caption: 'Dinner sorted in 5 seconds. Here’s how.',  initials: 'MH', handle: 'martin.h' },
      tomas:  { img: IMG_CLIP.tomas,  caption: 'A month without setting foot in a shop',   initials: 'TB', handle: 'tomas.b' },
      zuzana: { img: IMG_CLIP.zuzana, caption: 'How I shop straight from recipes',         initials: 'ZK', handle: 'zuzana.k' },
    },
    rating: {
      score: '4.8',
      count: '1,240 reviews',
    },
  },

  pricing: {
    eyebrow: 'Free',
    title: 'Try it for free.',
    lede: "MĽASK is free for now — the whole app, no card, no commitment.",
    scribble: 'free for now',
    flag: 'The whole app',
    planName: 'MĽASK',
    planSub: 'Recipe → basket → courier.',
    price: 'Free',
    features: [
      'Unlimited swipes',
      'Allergen swaps',
      'Pantry with auto-subtract',
      'One-tap ordering',
      'Household profile',
      'Price comparison',
    ],
    cta: 'Sign in',
    fine: 'No card. Two clicks to leave.',
  },

  faq: {
    title: 'Frequently asked questions',
    items: [
      { q: 'Where do the recipes come from?',            a: 'From trusted Slovak and Czech cooking sites. The AI only reads them and breaks them down into ingredients, amounts and method — it does not invent dishes. Every recipe links back to the original and its author.' },
      { q: 'How does automatic ordering work?',          a: 'We match every ingredient to a specific product in the delivery service’s range, subtract your pantry and fill the basket. You confirm the payment and a courier brings the order to your door.' },
      { q: 'How do I know an allergy swap works?',       a: 'We choose swaps by what the ingredient does in the pan — whether it binds, thickens or adds fat — and check them against feedback from people who actually cooked the recipe.' },
      { q: 'Do I have to use a delivery service?',       a: 'No. Without one you still get a finished shopping list for the shop. The automatic basket is extra convenience, not a requirement.' },
      { q: 'Do I have to fill the pantry in by hand?',   a: 'No. A shop through MĽASK logs itself, and ingredients come off the shelf when you mark a recipe as cooked.' },
      { q: 'What does it cost?',                         a: 'Nothing so far. While we finish the app you get all of it free and without a card — just sign in. We’ll give you plenty of notice before there is any pricing.' },
    ],
  },

  waitlist: {
    badge: 'Launching autumn 2026 · Slovakia',
    titleLine1: 'Dinner is sorted',
    titleLine2: 'tonight. And you',
    titleMark: 'never left home.',
    lede: 'Sign in and start using MĽASK — free for now.',
    cta: 'Sign in',
    fine: ['No card', 'Two clicks to leave', '4.8 ★ from 1,240 people'],
    artChipLabel: 'Basket delivered in',
    artChipValue: '25 minutes',
    artChipLime: '3 recipes · 1 shop',
  },

  footer: {
    blurb:
      "For people who like cooking, but don't want to decide what every single day — and go out for it.",
    columns: [
      {
        title: 'Product',
        links: [
          { href: HREF.how,      label: 'How it works' },
          { href: HREF.delivery, label: 'Ordering' },
          { href: HREF.allergy,  label: 'Allergies' },
          { href: HREF.free,     label: 'Free' },
        ],
      },
      {
        title: 'Company',
        links: [
          { href: HREF.top,     label: 'About us' },
          { href: HREF.recipes, label: 'Recipe sources' },
          { href: HREF.faq,     label: 'Contact' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { href: HREF.privacy, label: 'Privacy' },
          { href: HREF.terms,   label: 'Terms' },
          /* Cookies are a section of the privacy policy, not a document of their own. */
          { href: HREF.privacy, label: 'Cookies' },
        ],
      },
    ],
    copyright: '© 2026 MĽASK · Bratislava',
    note: 'Recipes belong to their authors. We always link to the original.',
  },
}
