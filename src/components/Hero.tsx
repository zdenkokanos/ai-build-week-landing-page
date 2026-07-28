import { Doodle, Scribble } from './Decor'
import { SwipeDeck } from './SwipeDeck'

export function Hero() {
  return (
    <section className="hero" id="top">
      <span className="hero__blob hero__blob--mint" aria-hidden="true" />
      <span className="hero__blob hero__blob--sand" aria-hidden="true" />

      <div className="shell hero__grid">
        <div className="hero__copy">
          {/* Sits in the open pocket between the lede and the phone, curling up
              towards the app rather than hanging out in the page margin. */}
          <Doodle
            shape="loops"
            width={124}
            height={62}
            className="doodle--deep doodle--wide"
            style={{ right: '10px', top: '292px', transform: 'rotate(-7deg)' }}
          />

          <p className="pill-note">
            <span className="pill-note__tag">Novinka</span>
            Recepty z reálnych kuchárskych webov
          </p>

          <h1 className="hero__title">
            Vyber si recept.
            {/* Rotated to fan back into the headline it points at. */}
            <Doodle
              shape="lines"
              width={44}
              height={40}
              className="doodle--inline doodle--wide"
              style={{ transform: 'rotate(168deg)' }}
            />
            <br />
            <span className="t-green">Nákup dorazí</span>
            <br />
            <span className="mark">
              <span className="mark__bg" aria-hidden="true" />
              <span className="mark__t">sám domov.</span>
            </span>
          </h1>

          <p className="hero__lede">
            Odswipuješ, na čo máš dnes chuť. MĽASK poskladá nákup, odpočíta čo už máš doma a objedná
            zvyšok z Woltu či Košíka.
          </p>

          <div className="hero__actions">
            <a className="btn btn--green btn--lg" href="#waitlist">
              Vyskúšať 14 dní zadarmo
            </a>
            <a className="btn btn--white btn--lg" href="#ako">
              Ako to funguje
            </a>

            <Scribble
              className="scribble--deep scribble--margin"
              style={{ left: '-100px', bottom: '-4px', transform: 'rotate(-9deg)' }}
            >
              začni tu
            </Scribble>
            <Doodle
              shape="arrow-right"
              width={52}
              height={44}
              className="doodle--deep doodle--margin"
              style={{ left: '-60px', bottom: '34px' }}
            />
          </div>

          <ul className="hero__proof">
            <li>
              <span className="tick" aria-hidden="true">
                ✓
              </span>{' '}
              Bez karty
            </li>
            <li>
              <span className="tick" aria-hidden="true">
                ✓
              </span>{' '}
              Suroviny do 40 minút
            </li>
            <li>
              <span className="tick" aria-hidden="true">
                ✓
              </span>{' '}
              SK &amp; CZ
            </li>
          </ul>
        </div>

        <div className="hero__stage">
          <SwipeDeck />
        </div>
      </div>
    </section>
  )
}
