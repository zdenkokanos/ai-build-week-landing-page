import { Doodle, Scribble } from './Decor'
import { SwipeDeck } from './SwipeDeck'

export function Hero() {
  return (
    <section className="hero" id="top">
      <span className="hero__blob hero__blob--mint" aria-hidden="true" />
      <span className="hero__blob hero__blob--sand" aria-hidden="true" />

      <div className="shell hero__grid">
        <div className="hero__copy">
          <Doodle
            shape="loops"
            width={124}
            height={62}
            className="doodle--deep doodle--margin"
            style={{ left: '-104px', top: '88px' }}
          />
          <Doodle
            shape="lines"
            width={44}
            height={40}
            className="doodle--ink doodle--wide"
            style={{ left: '534px', top: '44px' }}
          />

          <p className="pill-note">
            <span className="pill-note__tag">Novinka</span>
            Recepty z reálnych kuchárskych webov
          </p>

          <h1 className="hero__title">
            Vyber si recept.
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
              style={{ left: '-86px', bottom: '-4px', transform: 'rotate(-9deg)' }}
            >
              začni tu
            </Scribble>
            <Doodle
              shape="arrow-right"
              width={52}
              height={44}
              className="doodle--deep doodle--margin"
              style={{ left: '-52px', bottom: '34px' }}
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
