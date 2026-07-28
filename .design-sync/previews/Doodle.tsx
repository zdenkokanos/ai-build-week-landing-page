import { Doodle } from '@mlask/ui'

export const Shapes = () => (
  <div
    style={{
      position: 'relative',
      height: 120,
      display: 'flex',
      gap: 34,
      alignItems: 'center',
      color: 'var(--green-deep)',
    }}
  >
    <Doodle keep shape="arrow-left" width={58} height={50} className="doodle--deep doodle--inline" />
    <Doodle keep shape="loops" width={90} height={46} className="doodle--deep doodle--inline" />
    <Doodle keep shape="spark" width={30} height={30} className="doodle--lime doodle--inline" />
    <Doodle keep shape="fork" width={34} height={30} className="doodle--deep doodle--inline" />
    <Doodle keep shape="squiggle" width={90} height={14} className="doodle--deep doodle--thin doodle--inline" />
  </div>
)

export const NextToHeading = () => (
  <h2 className="section__title section__title--left" style={{ maxWidth: 420 }}>
    Vyber si recept.
    <Doodle
      keep
      shape="lines"
      width={44}
      height={40}
      className="doodle--inline"
      style={{ transform: 'rotate(168deg)' }}
    />
  </h2>
)
