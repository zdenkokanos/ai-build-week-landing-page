import type { ReactNode } from 'react'

export type CardTone = 'raised' | 'soft' | 'ink'

export type CardProps = {
  children: ReactNode
  /**
   * `raised` is the white card that floats over a tinted band, `soft` the calmer
   * one for light backgrounds, `ink` the dark block used for a closing note.
   */
  tone?: CardTone
  className?: string
}

const CLASS: Record<CardTone, string> = {
  raised: 'order-card',
  soft: 'pantry-card',
  ink: 'suggest',
}

/**
 * Rounded surface that holds a self-contained block of content.
 */
export function Card({ children, tone = 'raised', className = '' }: CardProps) {
  return <div className={[CLASS[tone], className].filter(Boolean).join(' ')}>{children}</div>
}
