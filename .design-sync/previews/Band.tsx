import { Badge, Band, Button, Shell, Tick } from '@mlask/ui'

export const Green = () => (
  <Band tone="green">
    <Shell>
      <div style={{ padding: '44px 0' }}>
        <Badge>Automatická objednávka</Badge>
        <h2 className="band__title" style={{ marginTop: 16 }}>
          Nákup vybavíme za teba.
        </h2>
        <p className="band__lede">Z receptu vieme spraviť hotovú objednávku potravín.</p>
        <ul className="band__list">
          <li>
            <Tick size="lg" /> Porovnáme ceny vrátane doručenia
          </li>
        </ul>
        <Button variant="lime">Objednať prvý nákup</Button>
      </div>
    </Shell>
  </Band>
)

export const Sand = () => (
  <Band tone="sand">
    <Shell>
      <div style={{ padding: '44px 0' }}>
        <h2 className="section__title section__title--left">Tichší pás na oddelenie sekcií</h2>
      </div>
    </Shell>
  </Band>
)

export const Mint = () => (
  <Band tone="mint">
    <Shell>
      <div style={{ padding: '44px 0' }}>
        <h2 className="section__title section__title--center">Ľudia, ktorí to už skúsili</h2>
      </div>
    </Shell>
  </Band>
)
