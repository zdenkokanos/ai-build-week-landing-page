import { Doodle, Scribble } from '@mlask/ui'
import { useCopy } from '../i18n'

/* No plans and no prices while the product is still being finished — the whole
   app is open, and the only action is signing in. */
export function Pricing() {
  const c = useCopy().pricing

  return (
    <section className="shell section section--pricing" id="zadarmo">
      <header className="section__head section__head--tight">
        <span className="eyebrow">{c.eyebrow}</span>
        <h2 className="section__title">{c.title}</h2>
        <p className="section__lede">{c.lede}</p>

        <Scribble
          className="scribble--deep doodle--wide"
          style={{ right: '-118px', bottom: '10px', transform: 'rotate(7deg)' }}
        >
          {c.scribble}
        </Scribble>
        <Doodle
          shape="arrow-left"
          width={50}
          height={44}
          className="doodle--deep doodle--wide"
          style={{ right: '-40px', bottom: '48px' }}
        />
      </header>

      <div className="plans plans--single">
        <div className="plan plan--pro">
          <span className="plan__flag">{c.flag}</span>
          <div>
            <h3 className="plan__name">{c.planName}</h3>
            <p className="plan__sub plan__sub--on-ink">{c.planSub}</p>
          </div>
          <p className="plan__price plan__price--lime">{c.price}</p>
          <div className="plan__feats plan__feats--two">
            {c.features.map((f) => (
              <span key={f}>
                <b className="t-lime">✓</b> {f}
              </span>
            ))}
          </div>
          <a className="btn btn--lime plan__cta" href="#">
            {c.cta}
          </a>
          <p className="plan__fine">{c.fine}</p>
        </div>
      </div>
    </section>
  )
}
