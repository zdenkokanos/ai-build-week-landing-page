import type { ReactNode } from 'react'

export type PriceRowProps = {
  /** Left side — the item. */
  label: ReactNode
  /** Right side — a price, a quantity, or a state. */
  value: ReactNode
  /** `soon` is the warm warning row, `miss` the neutral one for what is not there yet. */
  tone?: 'plain' | 'soon' | 'miss'
  className?: string
}

/**
 * One line of a list where each item carries a value — a shopping list, a pantry,
 * a basket comparison.
 */
export function PriceRow({ label, value, tone = 'plain', className = '' }: PriceRowProps) {
  const cls = ['prow', tone !== 'plain' ? 'prow--' + tone : '', className].filter(Boolean).join(' ')
  return (
    <div className={cls}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  )
}
