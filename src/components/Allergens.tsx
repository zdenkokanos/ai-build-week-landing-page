import { useState } from 'react'
import { ALLERGENS, INGREDIENTS, type AllergenKey } from '../data/content'
import { Doodle, Scribble } from './Decor'

type Diet = Record<AllergenKey, boolean>

const INITIAL_DIET: Diet = { lepok: true, laktoza: false, orechy: false, soja: false }

export function Allergens() {
  const [diet, setDiet] = useState<Diet>(INITIAL_DIET)

  const swaps = INGREDIENTS.filter((ing) => ing.tag && diet[ing.tag]).length

  const note =
    swaps === 0
      ? 'Recept je v pôvodnej podobe.'
      : `${swaps === 1 ? 'Vymenili sme jednu surovinu' : `Vymenili sme ${swaps} suroviny`}, chuť aj textúra zostávajú.`

  return (
    <section className="shell section section--split" id="alergie">
      <div>
        <span className="eyebrow">Alergie a intolerancie</span>
        <h2 className="section__title section__title--left">
          Recept sa neškrtá.
          <br />
          Iba sa prepíše.
        </h2>
        <p className="section__lede section__lede--left">
          Iné appky ti recept pri alergii schovajú. My vymeníme len tú jednu surovinu — a do košíka
          padne rovno tá náhrada.
        </p>

        <div className="allergen-card">
          <Scribble
            className="scribble--deep doodle--wide"
            style={{ right: '-132px', top: '-4px', transform: 'rotate(6deg)' }}
          >
            skús klikať
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

          <p className="allergen-card__label">Zaškrtni, čo nesmieš jesť:</p>
          <div className="allergen-card__chips" role="group" aria-label="Alergény">
            {ALLERGENS.map((a) => {
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
            <span className="allergen-card__note">{note}</span>
          </div>
        </div>

        <div className="mini-cards">
          <div className="mini-info">
            <p className="mini-info__title">Kontrola pred košíkom</p>
            <p className="mini-info__body">
              Zloženie každého produktu porovnáme s tvojím profilom pred objednávkou.
            </p>
          </div>
          <div className="mini-info">
            <p className="mini-info__title">Profil domácnosti</p>
            <p className="mini-info__body">
              Ty bez lepku, partner bez orechov. Jedno jedlo pre všetkých.
            </p>
          </div>
        </div>
      </div>

      <div className="section__phone">
        <div className="phone phone--recipe">
          <div className="phone__screen">
            <span className="phone__notch" aria-hidden="true" />
            <div
              className="recipe__img"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=70)',
              }}
            />
            <div className="recipe__body">
              <p className="recipe__name">Smotanové cestoviny s kuracím</p>
              <p className="recipe__meta">varecha.sk · 25 min · 2 porcie</p>
              <p className="recipe__label">SUROVINY</p>
              <div className="recipe__ings">
                {INGREDIENTS.map((ing) => {
                  const swapped = !!(ing.tag && diet[ing.tag])
                  return (
                    <div className={`ing${swapped ? ' is-swapped' : ''}`} key={ing.name}>
                      <span className="ing__name">{ing.name}</span>
                      <span className="ing__right">{swapped ? `→ ${ing.alt}` : ing.qty}</span>
                    </div>
                  )
                })}
              </div>
              <div className="scr__cta scr__cta--green scr__cta--push">Objednať suroviny domov</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
