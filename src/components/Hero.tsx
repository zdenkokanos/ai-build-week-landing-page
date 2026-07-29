import { Button, Doodle, Mark, Scribble, Tick } from '@mlask/ui'
import { useCopy } from '../i18n'
import { SwipeDeck } from './SwipeDeck'

export function Hero() {
  const c = useCopy().hero

  return (
    <section className="hero" id="top">
      <span className="hero__blob hero__blob--mint" aria-hidden="true" />
      <span className="hero__blob hero__blob--sand" aria-hidden="true" />

      <div className="shell hero__grid">
        <div className="hero__copy">
          <h1 className="hero__title">
            {c.titleLead}
            {/* Rotated to fan back into the headline it points at. */}
            <Doodle
              shape="lines"
              width={44}
              height={40}
              className="doodle--inline doodle--wide"
              style={{ transform: 'rotate(168deg)' }}
            />
            <br />
            <span className="t-green">{c.titleGreen}</span>
            <br />
            <Mark>{c.titleMark}</Mark>
          </h1>

          <p className="hero__lede">{c.lede}</p>

          <div className="hero__actions">
            <Button variant="green" size="lg" href="#waitlist">
              {c.ctaPrimary}
            </Button>
            <Button variant="white" size="lg" href="#ako">
              {c.ctaSecondary}
            </Button>

            <Scribble
              className="scribble--deep scribble--margin"
              style={{ left: '-100px', bottom: '-4px', transform: 'rotate(-9deg)' }}
            >
              {c.scribble}
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
            {c.proof.map((p) => (
              <li key={p}>
                <Tick /> {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__stage">
          <SwipeDeck />
        </div>
      </div>
    </section>
  )
}
