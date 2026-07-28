import type { ReactNode } from 'react'
import { Eyebrow } from './Eyebrow'

export type SectionHeadingProps = {
  /** Wrap a few words in <Mark> to highlight them. */
  title: ReactNode
  /** Uppercase kicker above the title. */
  eyebrow?: ReactNode
  eyebrowTone?: 'green' | 'orange'
  lede?: ReactNode
  /** Centred is the page default; left-aligned when the section has a side column. */
  align?: 'center' | 'left'
  /** `sm` for secondary sections, `wide` to let a long title breathe. */
  size?: 'default' | 'wide' | 'sm'
  className?: string
}

/**
 * Eyebrow + heading + lede — the opening of every section.
 *
 * Keep the lede to one sentence: the sections that need more use a list under it
 * rather than a longer paragraph.
 */
export function SectionHeading({
  title,
  eyebrow,
  eyebrowTone = 'green',
  lede,
  align = 'center',
  size = 'default',
  className = '',
}: SectionHeadingProps) {
  const alignCls = align === 'left' ? '--left' : '--center'
  const titleCls = [
    'section__title',
    'section__title' + alignCls,
    size === 'wide' ? 'section__title--wide' : '',
    size === 'sm' ? 'section__title--sm' : '',
  ]
    .filter(Boolean)
    .join(' ')
  const ledeCls = [
    'section__lede',
    align === 'left' ? 'section__lede--left' : '',
    size === 'wide' ? 'section__lede--wide' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={className}>
      {eyebrow && <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>}
      <h2 className={titleCls}>{title}</h2>
      {lede && <p className={ledeCls}>{lede}</p>}
    </header>
  )
}
