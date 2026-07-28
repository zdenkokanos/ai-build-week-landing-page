import { Chip } from '@mlask/ui'

export const Preferences = () => (
  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
    <Chip tone="orange">bez lepku</Chip>
    <Chip>bez orechov</Chip>
    <Chip>4 porcie</Chip>
  </div>
)
