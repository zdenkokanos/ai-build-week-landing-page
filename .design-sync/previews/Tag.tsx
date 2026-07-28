import { Tag } from '@mlask/ui'

export const RecipeMeta = () => (
  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
    <Tag tone="white">32 min</Tag>
    <Tag tone="lime">bez laktózy</Tag>
    <Tag tone="soft">ázijská</Tag>
  </div>
)

export const OverPhotography = () => (
  <div
    style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=700&q=70)',
      backgroundSize: 'cover',
      padding: 16,
      borderRadius: 20,
      display: 'flex',
      gap: 6,
    }}
  >
    <Tag tone="white">45 min</Tag>
    <Tag tone="lime">vegán</Tag>
  </div>
)

export const StateTag = () => <Tag tone="mint" size="lg">Kuriér je pred dverami</Tag>
