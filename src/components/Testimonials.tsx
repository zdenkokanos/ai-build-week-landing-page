import { CLIPS, QUOTES, type Clip as ClipData, type Quote as QuoteData } from '../data/content'
import { Doodle } from './Decor'

function Quote({ q }: { q: QuoteData }) {
  return (
    <blockquote className={`quote${q.ink ? ' quote--ink' : ''}`}>
      <p className={`stars${q.ink ? ' stars--lime' : ''}`}>★★★★★</p>
      <p className="quote__text">{q.text}</p>
      <footer className="quote__by">
        <span className={`ava${q.ink ? ' ava--lime' : ''}`}>{q.initials}</span>
        <span>
          {q.name}
          <br />
          <span className={`muted${q.ink ? ' muted--on-ink' : ''}`}>{q.meta}</span>
        </span>
      </footer>
    </blockquote>
  )
}

function Clip({ c }: { c: ClipData }) {
  return (
    <div className="clip" style={{ backgroundImage: `url(${c.img})` }}>
      <span className="clip__veil" aria-hidden="true" />
      <span className="clip__play" aria-hidden="true">
        ▶
      </span>
      <span className="clip__foot">
        <span className="clip__cap">{c.caption}</span>
        <span className="clip__user">
          <span className="ava ava--lime ava--ring">{c.initials}</span>
          <span className="clip__handle">{c.handle}</span>
        </span>
      </span>
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="band band--mint" id="ludia">
      <div className="shell">
        <h2 className="section__title section__title--center">
          Ľudia, ktorí prestali stáť pred{' '}
          <span className="mark mark--tight">
            <span className="mark__bg" aria-hidden="true" />
            <span className="mark__t">chladničkou</span>
          </span>
        </h2>

        <div className="mosaic">
          <span className="reaction doodle--margin" style={{ left: '-60px', top: '196px' }} aria-hidden="true">
            <span className="reaction__e">😍</span> <span>+128</span>
          </span>
          <span
            className="reaction doodle--margin"
            style={{ right: '-38px', top: '568px', animationDelay: '1.1s' }}
            aria-hidden="true"
          >
            <span className="reaction__e">🔥</span> <span>94</span>
          </span>
          <Doodle
            shape="spark"
            width={30}
            height={30}
            className="doodle--deep doodle--margin"
            style={{ left: '-64px', bottom: '120px' }}
          />

          <div className="mosaic__col">
            <Quote q={QUOTES.zuzana} />
            <Clip c={CLIPS.lenka} />
            <Quote q={QUOTES.ivana} />
          </div>

          <div className="mosaic__col">
            <Clip c={CLIPS.martin} />
            <Quote q={QUOTES.martin} />
            <Quote q={QUOTES.peter} />
          </div>

          <div className="mosaic__col">
            <Quote q={QUOTES.rodina} />
            <Clip c={CLIPS.tomas} />
            <Quote q={QUOTES.katka} />
          </div>

          <div className="mosaic__col">
            <div className="rating">
              <div className="rating__head">
                <span className="rating__n">4,8</span>
                <span>
                  <span className="stars">★★★★★</span>
                  <span className="rating__count">1 240 recenzií</span>
                </span>
              </div>
              <div className="rating__stores">
                <span className="store">
                  App Store<span className="store__dl">↓</span>
                </span>
                <span className="store">
                  Google Play<span className="store__dl">↓</span>
                </span>
              </div>
            </div>

            <Clip c={CLIPS.zuzana} />
            <Quote q={QUOTES.tomas} />
          </div>
        </div>
      </div>
    </section>
  )
}
