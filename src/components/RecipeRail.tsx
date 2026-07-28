import { useRef } from 'react'
import { RECIPES } from '../data/content'

/* Duplicated once so the -50% keyframe loops seamlessly. */
const TRACK = [...RECIPES, ...RECIPES]

/* Hovering eases the rail down rather than freezing it, so a card the visitor
   is reaching for stays reachable without the strip looking broken.
   updatePlaybackRate retimes the running animation instead of restarting it,
   which a CSS animation-duration swap cannot do without jumping. */
const SLOW_RATE = 0.2

export function RecipeRail() {
  const trackRef = useRef<HTMLDivElement>(null)

  const setRate = (rate: number) => {
    trackRef.current?.getAnimations().forEach((a) => a.updatePlaybackRate(rate))
  }

  return (
    <section className="section-rail" id="recepty">
      <span className="burst" style={{ right: '96px', top: '96px', transform: 'rotate(-12deg)' }} aria-hidden="true">
        <svg viewBox="0 0 100 100">
          <path d="M50 0 59.8 13.3 75 6.7 76.9 23.1 93.3 25 86.7 40.2 100 50 86.7 59.8 93.3 75 76.9 76.9 75 93.3 59.8 86.7 50 100 40.2 86.7 25 93.3 23.1 76.9 6.7 75 13.3 59.8 0 50 13.3 40.2 6.7 25 23.1 23.1 25 6.7 40.2 13.3Z" />
        </svg>
        <span className="burst__t">
          stále
          <br />
          nové
        </span>
      </span>

      <div className="shell">
        <span className="eyebrow eyebrow--orange">Reálne recepty</span>
        <h2 className="section__title section__title--left section__title--wide">
          Recepty nevymýšľame. Berieme tie, ktoré niekto naozaj uvaril.
        </h2>
        <p className="section__lede section__lede--left section__lede--wide">
          AI číta overené SK a CZ kuchárske weby, recept rozloží na suroviny a gramáže a odkáže na
          originál. Z každého vieš rovno objednať nákup.
        </p>
      </div>

      <div
        className="rail"
        aria-label="Ukážky receptov"
        onMouseEnter={() => setRate(SLOW_RATE)}
        onMouseLeave={() => setRate(1)}
      >
        <div className="rail__track" ref={trackRef}>
          {TRACK.map((r, i) => (
            <div className="rcard" key={i} aria-hidden={i >= RECIPES.length ? true : undefined}>
              <div className="rcard__img" style={{ backgroundImage: `url(${r.img})` }} />
              <div className="rcard__body">
                <div>
                  <div className="rcard__name">{r.name}</div>
                  <div className="rcard__meta">{r.meta}</div>
                </div>
                <div className="rcard__actions">
                  <a className="rcard__primary" href="#waitlist">
                    Objednať ingrediencie
                  </a>
                  <a className="rcard__ghost" href="#waitlist">
                    Zobraziť recept
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rail__cta">
        <a className="btn btn--white" href="#waitlist">
          Zobraziť všetky recepty
        </a>
      </div>
    </section>
  )
}
