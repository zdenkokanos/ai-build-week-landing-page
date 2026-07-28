import { Button, Doodle, Mark, Scribble, Tick } from '@mlask/ui'
import { SwipeDeck } from './SwipeDeck'

export function Hero() {
  return (
    <section className="hero" id="top">
      <span className="hero__blob hero__blob--mint" aria-hidden="true" />
      <span className="hero__blob hero__blob--sand" aria-hidden="true" />

      <div className="shell hero__grid">
        <div className="hero__copy">
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
            <Mark>sám domov.</Mark>
          </h1>

          <p className="hero__lede">
            Odswipuješ, na čo máš dnes chuť. MĽASK poskladá nákup, odpočíta čo už máš doma a zvyšok
            objedná z donášky.
          </p>

          <div className="hero__actions">
            <Button variant="green" size="lg" href="#waitlist">
              Vyskúšať zadarmo
            </Button>
            <Button variant="white" size="lg" href="#ako">
              Ako to funguje
            </Button>

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
              <Tick /> Bez karty
            </li>
            <li>
              <Tick /> Suroviny do 40 minút
            </li>
            <li>
              <Tick /> Dostupné na Slovensku
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
