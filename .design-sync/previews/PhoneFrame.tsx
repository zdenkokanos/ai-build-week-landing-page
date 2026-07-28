import { Button, PhoneFrame, PriceRow, Tag } from '@mlask/ui'

export const AppScreen = () => (
  <PhoneFrame size="sm" statusBar>
    <div style={{ padding: '18px 20px' }}>
      <p style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-.025em' }}>Nákupný zoznam</p>
      <p className="muted small" style={{ marginTop: 4 }}>
        Šošovicový guláš · 4 porcie
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16 }}>
        <PriceRow label="Červená šošovica" value="250 g" />
        <PriceRow label="Rajčinový pretlak" value="70 g" />
        <PriceRow label="Zázvor" value="1,29 €" tone="miss" />
      </div>
      <div style={{ marginTop: 18 }}>
        <Button variant="green">Zaplatiť a doručiť</Button>
      </div>
    </div>
  </PhoneFrame>
)

export const PhotoScreen = () => (
  <PhoneFrame size="sm">
    <div
      style={{
        height: 240,
        backgroundImage: 'url(https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=700&q=70)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 14,
        display: 'flex',
        gap: 6,
        alignItems: 'flex-start',
      }}
    >
      <Tag tone="white">32 min</Tag>
      <Tag tone="lime">bez laktózy</Tag>
    </div>
    <div style={{ padding: 16 }}>
      <span style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-.025em' }}>Kokosové curry</span>
    </div>
  </PhoneFrame>
)

export const SandChrome = () => (
  <PhoneFrame screen="sand">
    <div style={{ padding: '50px 20px 30px' }}>
      <p className="scr__kicker">KROK 3 / 4</p>
      <h3 className="scr__title">Koľko času máš vo všedný deň?</h3>
      <div className="opt-list">
        <div className="opt">
          <span>Do 15 minút</span>
          <span className="muted">rýchlovky</span>
        </div>
        <div className="opt opt--on">
          <span>20 – 40 minút</span>
          <span>✓</span>
        </div>
      </div>
    </div>
  </PhoneFrame>
)
