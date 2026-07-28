import { SectionHeading, Shell } from '@mlask/ui'

export const Default = () => (
  <div style={{ background: 'var(--panel)', padding: '28px 0', borderRadius: 20 }}>
    <Shell>
      <SectionHeading align="left" title="Obsah stránky sedí v tejto šírke" size="sm" />
    </Shell>
  </div>
)

export const Narrow = () => (
  <div style={{ background: 'var(--panel)', padding: '28px 0', borderRadius: 20 }}>
    <Shell width="narrow">
      <SectionHeading align="left" title="Užšia stopa na čítanie" size="sm" />
    </Shell>
  </div>
)
