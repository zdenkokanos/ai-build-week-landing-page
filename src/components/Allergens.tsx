import { useState } from 'react'
import { Doodle, Scribble } from '@mlask/ui'
import { useCopy } from '../i18n'
import { IMG_SCENE } from '../i18n/media'
import type { AllergenKey } from '../i18n/types'

type Diet = Record<AllergenKey, boolean>

const INITIAL_DIET: Diet = { lepok: true, laktoza: false, orechy: false, soja: false }

export function Allergens() {
  const c = useCopy().allergens
  const [diet, setDiet] = useState<Diet>(INITIAL_DIET)

  const swaps = c.ingredients.filter((ing) => ing.tag && diet[ing.tag]).length

  return (
    <section className="shell section section--split" id="alergie">
      <div>
        <span className="eyebrow">{c.eyebrow}</span>
        <h2 className="section__title section__title--left">
          {c.titleLead}
          <br />
          {c.titleTail}
        </h2>
        <p className="section__lede section__lede--left">{c.lede}</p>

        <div className="allergen-card">
          <Scribble
            className="scribble--deep doodle--wide"
            style={{ right: '-132px', top: '-4px', transform: 'rotate(6deg)' }}
          >
            {c.scribble}
          </Scribble>
          <Doodle
            shape="arrow-left"
            width={50}
            height={44}
            className="doodle--deep doodle--wide"
            style={{ right: '-30px', top: '40px' }}
          />
          <Doodle
            shape="spark"
            width={26}
            height={26}
            className="doodle--lime doodle--margin"
            style={{ left: '-52px', top: '-24px' }}
          />

          <p className="allergen-card__label">{c.cardLabel}</p>
          <div className="allergen-card__chips" role="group" aria-label={c.chipsAria}>
            {c.list.map((a) => {
              const on = diet[a.key]
              return (
                <button
                  key={a.key}
                  className={`allergen${on ? ' is-on' : ''}`}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setDiet((d) => ({ ...d, [a.key]: !d[a.key] }))}
                >
                  <span className="allergen__box">{on ? '✓' : ''}</span>
                  {a.label}
                </button>
              )
            })}
          </div>
          <div className="allergen-card__foot">
            <span className="badge badge--lime">{swaps === 0 ? '0' : `${swaps}×`}</span>
            <span className="allergen-card__note">{c.note(swaps)}</span>
          </div>
        </div>

        <div className="mini-cards">
          {c.miniInfo.map((info) => (
            <div className="mini-info" key={info.title}>
              <p className="mini-info__title">{info.title}</p>
              <p className="mini-info__body">{info.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section__phone">
        <div className="phone phone--recipe">
          <div className="phone__screen">
            <span className="phone__notch" aria-hidden="true" />
            <div className="recipe__img" style={{ backgroundImage: `url(${IMG_SCENE.pasta})` }} />
            <div className="recipe__body">
              <p className="recipe__name">{c.recipe.name}</p>
              <p className="recipe__meta">{c.recipe.meta}</p>
              <p className="recipe__label">{c.recipe.ingredientsLabel}</p>
              <div className="recipe__ings">
                {c.ingredients.map((ing) => {
                  const swapped = !!(ing.tag && diet[ing.tag])
                  return (
                    <div className={`ing${swapped ? ' is-swapped' : ''}`} key={ing.name}>
                      <span className="ing__name">{ing.name}</span>
                      <span className="ing__right">{swapped ? `→ ${ing.alt}` : ing.qty}</span>
                    </div>
                  )
                })}
              </div>
              <div className="scr__cta scr__cta--green scr__cta--push">{c.recipe.cta}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
