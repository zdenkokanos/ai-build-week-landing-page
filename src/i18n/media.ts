/* Photography is the same in every language, so the URLs live here once and
   both dictionaries point at them. Keeps a copy edit from silently changing a
   picture — and the two languages from drifting to different food. */

export const IMG = {
  curry:      'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=70',
  cacio:      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=70',
  lentil:     'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=70',
  salmon:     'https://images.unsplash.com/photo-1560717845-968823efbee1?w=800&q=70',
  chilli:     'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=70',
  tikka:      'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=800&q=70',
} as const

/** Smaller crops for the recipe rail. */
export const IMG_RAIL = {
  bowl:       'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=70',
  chickpea:   'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=70',
  salmon:     'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=70',
  tikka:      'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=600&q=70',
  curry:      'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=70',
  pesto:      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=70',
} as const

/** Stills behind the testimonial video clips. */
export const IMG_CLIP = {
  lenka:      'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=700&q=70',
  martin:     'https://images.unsplash.com/photo-1493770348161-369560ae357d?w=700&q=70',
  tomas:      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=700&q=70',
  zuzana:     'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=700&q=70',
} as const

/** Used inside the phone screens and the closing panel. */
export const IMG_SCENE = {
  curry:      'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=700&q=70',
  lentil:     'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=700&q=70',
  pasta:      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=70',
  artCurry:   'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=70',
  artBowl:    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=70',
  artTikka:   'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=600&q=70',
} as const

/** Anchor targets stay identical in both languages — only the labels change. */
export const HREF = {
  top:      '#top',
  how:      '#ako',
  delivery: '#donaska',
  allergy:  '#alergie',
  pantry:   '#spajza',
  recipes:  '#recepty',
  free:     '#zadarmo',
  faq:      '#faq',
  waitlist: '#waitlist',
  /* There is no auth yet — the sign-in buttons deliberately go nowhere. */
  signIn:   '#',
} as const
