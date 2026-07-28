import { Badge } from '@mlask/ui'

export const Lime = () => <Badge>Automatická objednávka</Badge>

export const OnDarkPanel = () => (
  <div style={{ background: 'var(--green-panel)', padding: 28, borderRadius: 26 }}>
    <Badge tone="glass">Spustenie jeseň 2026 · Slovensko</Badge>
  </div>
)
