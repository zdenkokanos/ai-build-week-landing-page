import type { ReactNode } from 'react'

export type EyebrowProps = {
  children: ReactNode
  tone?: 'green' | 'orange'
  className?: string
}

/**
 * Uppercase kicker above a section heading.
 */
export function Eyebrow({ children, tone = 'green', className = '' }: EyebrowProps) {
  const cls = ['eyebrow', tone === 'orange' ? 'eyebrow--orange' : '', className]
    .filter(Boolean)
    .join(' ')
  return <span className={cls}>{children}</span>
}
