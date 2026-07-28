import { Tick } from '@mlask/ui'

export const ProofList = () => (
  <ul style={{ display: 'flex', gap: 22, flexWrap: 'wrap', fontSize: 14, fontWeight: 600, color: 'var(--ink-45)' }}>
    <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Tick /> Bez karty
    </li>
    <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Tick /> Suroviny do 40 minút
    </li>
  </ul>
)

export const OnDark = () => (
  <div style={{ background: 'var(--green-panel)', padding: 24, borderRadius: 22, color: '#fff' }}>
    <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 600 }}>
      <Tick size="lg" /> Porovnáme ceny vrátane doručenia
    </span>
  </div>
)
