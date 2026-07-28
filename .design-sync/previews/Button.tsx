import { Button } from '@mlask/ui'

export const Primary = () => (
  <Button variant="green" href="#">
    Vyskúšať zadarmo
  </Button>
)

export const Variants = () => (
  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
    <Button variant="green">Objednať nákup</Button>
    <Button variant="white">Ako to funguje</Button>
    <Button variant="sand">Začať zadarmo</Button>
  </div>
)

export const OnDark = () => (
  <div style={{ background: 'var(--green-panel)', padding: 28, borderRadius: 26 }}>
    <Button variant="lime">Objednať prvý nákup</Button>
  </div>
)

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Button variant="green" size="lg">
      Vyskúšať zadarmo
    </Button>
    <Button variant="green">Vyskúšať zadarmo</Button>
  </div>
)
