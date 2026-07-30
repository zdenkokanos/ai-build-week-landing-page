import { Fragment } from 'react'
import { Doodle } from '@mlask/ui'
import { useCopy } from '../i18n'
import { HREF, IMG_SCENE } from '../i18n/media'

export function Waitlist() {
  const c = useCopy().waitlist

  return (
    <section className="waitlist" id="waitlist">
      <div className="waitlist__panel">
        <span className="waitlist__blob waitlist__blob--lime" aria-hidden="true" />
        <span className="waitlist__blob waitlist__blob--white" aria-hidden="true" />

        <Doodle
          shape="fork"
          width={34}
          height={30}
          className="doodle--white doodle--thin doodle--wide"
          style={{ left: '14px', bottom: '44px' }}
        />

        <div className="waitlist__grid">
          <div className="waitlist__copy">
            <span className="badge badge--glass">{c.badge}</span>
            <h2 className="waitlist__title">
              {c.titleLine1}
              <br />
              {c.titleLine2}
              <br />
              <span className="mark">
                <span className="mark__bg" aria-hidden="true" />
                <span className="mark__t">{c.titleMark}</span>
              </span>
            </h2>
            <p className="waitlist__lede">{c.lede}</p>

            <a className="btn btn--lime btn--lg waitlist__cta" href={HREF.app}>
              {c.cta}
            </a>

            {/* The separators are their own flex children, so the row keeps its
                even 18px rhythm and wraps cleanly. */}
            <p className="waitlist__fine">
              {c.fine.map((f, i) => (
                <Fragment key={f}>
                  {i > 0 && <span aria-hidden="true">·</span>}
                  <span>{f}</span>
                </Fragment>
              ))}
            </p>
          </div>

          <div className="waitlist__art" aria-hidden="true">
            <span
              className="art-card art-card--1"
              style={{ backgroundImage: `url(${IMG_SCENE.artCurry})` }}
            />
            <span
              className="art-card art-card--2"
              style={{ backgroundImage: `url(${IMG_SCENE.artBowl})` }}
            />
            <span
              className="art-card art-card--3"
              style={{ backgroundImage: `url(${IMG_SCENE.artTikka})` }}
            />
            <span className="art-chip art-chip--white">
              <span className="muted small">{c.artChipLabel}</span>
              <strong>{c.artChipValue}</strong>
            </span>
            <span className="art-chip art-chip--lime">{c.artChipLime}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
