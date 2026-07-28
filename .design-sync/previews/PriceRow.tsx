import { PriceRow } from '@mlask/ui'

export const ShoppingList = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 340 }}>
    <PriceRow label="Zázvor 100 g" value="1,29 €" tone="miss" />
    <PriceRow label="Koriander zväzok" value="1,49 €" tone="miss" />
  </div>
)

export const Expiring = () => (
  <div style={{ maxWidth: 340 }}>
    <PriceRow label="Kurací prsník 500 g" value="minúť do 2 dní" tone="soon" />
  </div>
)
