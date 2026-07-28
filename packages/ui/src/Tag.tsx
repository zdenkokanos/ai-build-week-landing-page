import type { ReactNode } from 'react'

export type TagTone = 'white' | 'lime' | 'soft' | 'mint'

export type TagProps = {
  children: ReactNode
  /** `white`/`soft` sit over photography, `lime` and `mint` over flat surfaces. */
  tone?: TagTone
  /** `lg` is for tags that stand alone rather than in a row. */
  size?: 'sm' | 'lg'
  className?: string
}

/**
 * Metadata pill — cooking time, diet, cuisine, order state.
 *
 * Tags describe, they never act; use Button for anything clickable.
 */
export function Tag({ children, tone = 'white', size = 'sm', className = '' }: TagProps) {
  const cls = ['tag', 'tag--' + tone, size === 'lg' ? 'tag--lg' : '', className]
    .filter(Boolean)
    .join(' ')
  return <span className={cls}>{children}</span>
}
