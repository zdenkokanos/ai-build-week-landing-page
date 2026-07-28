import type { ReactNode } from 'react'

export type BadgeProps = {
  children: ReactNode
  /** `glass` is the translucent variant for dark green panels. */
  tone?: 'lime' | 'glass'
  className?: string
}

/**
 * Small uppercase label that titles a section or flags a state.
 *
 * Sits above a heading, never inside body copy.
 */
export function Badge({ children, tone = 'lime', className = '' }: BadgeProps) {
  return <span className={['badge', 'badge--' + tone, className].filter(Boolean).join(' ')}>{children}</span>
}
