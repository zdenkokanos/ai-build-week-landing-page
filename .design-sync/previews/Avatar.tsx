import { Avatar } from '@mlask/ui'

export const Tones = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Avatar initials="ZK" />
    <Avatar initials="MH" tone="lime" />
  </div>
)

export const OnPhotography = () => (
  <div
    style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&q=70)',
      backgroundSize: 'cover',
      padding: 18,
      borderRadius: 20,
    }}
  >
    <Avatar initials="LV" tone="lime" ring />
  </div>
)
