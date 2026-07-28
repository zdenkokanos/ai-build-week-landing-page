import { Button, Scribble } from '@mlask/ui'

export const Annotation = () => (
  <div style={{ position: 'relative', display: 'inline-block', padding: '26px 20px 26px 150px' }}>
    <Scribble keep className="scribble--deep" style={{ left: 20, bottom: 30, transform: 'rotate(-9deg)' }}>
      začni tu
    </Scribble>
    <Button variant="green" size="lg">
      Vyskúšať zadarmo
    </Button>
  </div>
)
