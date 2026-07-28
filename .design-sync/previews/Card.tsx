import { Badge, Button, Card, PriceRow, Tag } from '@mlask/ui'

export const Raised = () => (
  <div style={{ background: 'var(--green-panel)', padding: 28, borderRadius: 26 }}>
    <Card>
      <div className="order-card__head">
        <span className="order-card__title">Objednávka na dnes</span>
        <Tag tone="mint">v príprave</Tag>
      </div>
      <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <PriceRow label="Zázvor 100 g" value="1,29 €" tone="miss" />
        <PriceRow label="Koriander zväzok" value="1,49 €" tone="miss" />
      </div>
      <div className="order-card__total">
        <span className="t-green bold small">Doručenie 25 minút</span>
        <span className="order-card__sum">8,98 €</span>
      </div>
    </Card>
  </div>
)

export const Soft = () => (
  <Card tone="soft">
    <div className="pantry-card__head">
      <span className="pantry-card__title">Moja špajza</span>
      <span className="muted bold small">aktualizované dnes</span>
    </div>
    <div className="pantry-chips">
      <span className="pchip">Ryža 1,2 kg</span>
      <span className="pchip">Cibuľa 4 ks</span>
      <span className="pchip pchip--more">+14 ďalších</span>
    </div>
  </Card>
)

export const Ink = () => (
  <Card tone="ink">
    <p className="suggest__text">Dnes navrhneme kokosové curry — dojedá kurča aj mlieko.</p>
    <div className="suggest__row">
      <span className="suggest__price">Dokúpiť 2 veci · 2,78 €</span>
      <Badge>Objednať</Badge>
    </div>
  </Card>
)
