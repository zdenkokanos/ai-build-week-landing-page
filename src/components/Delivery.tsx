import { CourierBike } from './CourierBike'
import { Doodle } from '@mlask/ui'
import { useCopy } from '../i18n'

export function Delivery() {
  const c = useCopy().delivery

  return (
    <section className="band band--green" id="donaska">
      <span className="band__blob" aria-hidden="true" />

      <Doodle
        shape="spark"
        width={34}
        height={34}
        className="doodle--lime doodle--wide"
        style={{ left: '66px', top: '74px' }}
      />
      {/* Moved off the bottom-right corner — the courier sketch lives there now. */}
      <Doodle
        shape="wave"
        width={132}
        height={20}
        className="doodle--white doodle--thin doodle--wide"
        style={{ left: '320px', bottom: '52px' }}
      />
      <Doodle
        shape="fork"
        width={34}
        height={30}
        className="doodle--lime doodle--wide"
        style={{ left: '40px', bottom: '132px' }}
      />

      <div className="shell band__grid">
        <div className="band__copy">
          <span className="badge badge--lime">{c.badge}</span>
          <h2 className="band__title">
            {c.titleLead}
            <br />
            {c.titleTail}
          </h2>
          <p className="band__lede">{c.lede}</p>
          <ul className="band__list">
            {c.list.map((item) => (
              <li key={item}>
                <span className="tick tick--lime" aria-hidden="true">
                  ✓
                </span>{' '}
                {item}
              </li>
            ))}
          </ul>
          <a className="btn btn--lime" href="#waitlist">
            {c.cta}
          </a>
        </div>

        <div className="band__side">
          <div className="order-card">
            <div className="order-card__head">
              <span className="order-card__title">{c.card.title}</span>
              <span className="tag tag--mint">{c.card.tag}</span>
            </div>
            <div className="order-card__steps">
              {c.card.steps.map((st, i) => {
                /* Everything but the last step is already done. */
                const todo = i === c.card.steps.length - 1
                return (
                  <div className={`ostep${todo ? ' ostep--todo' : ''}`} key={st.label}>
                    <span className={`ostep__dot${todo ? '' : ' ostep__dot--done'}`}>
                      {todo ? i + 1 : '✓'}
                    </span>
                    <span className="ostep__label">{st.label}</span>
                    {st.meta && <span className="ostep__meta">{st.meta}</span>}
                  </div>
                )
              })}
            </div>
            <div className="order-card__total">
              <span className="t-green bold small">{c.card.deliveryNote}</span>
              <span className="order-card__sum">{c.card.sum}</span>
            </div>
            <div className="scr__cta scr__cta--green">{c.card.cta}</div>
          </div>

          <CourierBike />
        </div>
      </div>
    </section>
  )
}
