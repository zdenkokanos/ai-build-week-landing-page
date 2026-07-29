import { Doodle } from '@mlask/ui'
import { useCopy } from '../i18n'

/* Only what needs attention gets a row; the stock itself is chips, so the card
   reads at a glance instead of like a spreadsheet. */
export function Pantry() {
  const c = useCopy().pantry

  return (
    <section className="band band--sand" id="spajza">
      <span className="emoji-float deco-keep deco-spajza-veg" style={{ animationDelay: '.4s' }} aria-hidden="true">
        🥕
      </span>
      <span className="emoji-float deco-keep deco-spajza-garlic" aria-hidden="true">
        🧄
      </span>
      <Doodle
        shape="squiggle"
        width={120}
        height={16}
        className="doodle--deep doodle--thin doodle--wide"
        style={{ right: '150px', top: '64px' }}
      />

      <div className="shell pantry">
        <div>
          <span className="eyebrow">{c.eyebrow}</span>
          <h2 className="section__title section__title--left">{c.title}</h2>
          <p className="section__lede section__lede--left">{c.lede}</p>

          <ol className="how-list">
            {c.howList.map((item, i) => (
              <li key={item.strong}>
                <span className="how-list__n">{i + 1}</span>
                <span>
                  <strong>{item.strong}</strong>
                  {item.rest}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="pantry-card">
          <div className="pantry-card__head">
            <span className="pantry-card__title">{c.card.title}</span>
            <span className="muted bold small">{c.card.updated}</span>
          </div>

          <div className="pantry-chips">
            {c.card.stock.map((item) => (
              <span className="pchip" key={item}>
                {item}
              </span>
            ))}
            <span className="pchip pchip--more">{c.card.more}</span>
          </div>

          <div className="prow prow--soon">
            <span>{c.card.soonName}</span>
            <span>{c.card.soonNote}</span>
          </div>

          <p className="grp grp--grey">
            <span className="grp__dot" />
            {c.card.missingLabel}
          </p>
          <div className="pantry-stack">
            {c.card.missing.map((p) => (
              <div className="prow prow--miss" key={p.name}>
                <span>{p.name}</span>
                <span>{p.price}</span>
              </div>
            ))}
          </div>

          <div className="suggest">
            <p className="suggest__text">{c.card.suggestText}</p>
            <div className="suggest__row">
              <span className="suggest__price">{c.card.suggestPrice}</span>
              <span className="badge badge--lime">{c.card.suggestCta}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
