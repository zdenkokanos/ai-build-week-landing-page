import { Mark, SectionHeading } from '@mlask/ui'

export const Centered = () => (
  <SectionHeading
    eyebrow="Ako to funguje"
    title={<>Štyri kroky, <Mark tight>dve minúty</Mark></>}
    lede="Kroky sa prepínajú samé — alebo klikni na ktorýkoľvek."
  />
)

export const LeftAligned = () => (
  <SectionHeading
    align="left"
    eyebrow="Špajza"
    title="Appka vie, čo máš doma. Kupuješ len to, čo chýba."
    lede="Pripomenieme aj to, čo treba minúť, kým je to dobré."
  />
)

export const Small = () => <SectionHeading size="sm" title="Časté otázky" />
