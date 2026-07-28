import type { ReactNode } from 'react'

export type MarkProps = {
  children: ReactNode
  /** The block behind the words. Lime by default; `white` is for dark panels. */
  tone?: 'lime' | 'green' | 'white'
  /** Tighter block for smaller headings. */
  tight?: boolean
}

/**
 * Marker-pen highlight behind a few words of a heading.
 *
 * One per heading — a second one stops it being emphasis. The block is a tilted
 * span behind the glyphs, so it stays put when the text wraps.
 */
export function Mark({ children, tone = 'lime', tight = false }: MarkProps) {
  const cls = ['mark', tone !== 'lime' ? 'mark--' + tone : '', tight ? 'mark--tight' : '']
    .filter(Boolean)
    .join(' ')
  return (
    <span className={cls}>
      <span className="mark__bg" aria-hidden="true" />
      <span className="mark__t">{children}</span>
    </span>
  )
}
