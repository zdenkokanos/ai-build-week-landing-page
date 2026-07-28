import type { ReactNode } from 'react'

export type ChipProps = {
  children: ReactNode
  /** `orange` marks a restriction — an allergen, something to use up. */
  tone?: 'default' | 'orange'
  className?: string
}

/**
 * Soft white pill for a user's own settings — diet, portions, preferences.
 *
 * Reads quieter than Tag: it is the visitor's data, not the product's metadata.
 */
export function Chip({ children, tone = 'default', className = '' }: ChipProps) {
  const cls = ['chip', tone === 'orange' ? 'chip--orange' : '', className].filter(Boolean).join(' ')
  return <span className={cls}>{children}</span>
}
