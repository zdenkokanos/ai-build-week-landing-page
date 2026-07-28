import type { ReactNode } from 'react'

export type QuoteProps = {
  /** The testimonial itself, quotation marks included. */
  children: ReactNode
  /** Two letters for the avatar. */
  initials: string
  name: string
  /** Where they are and what makes them relevant — "Bratislava · bez lepku". */
  meta?: string
  /** Dark variant, for breaking up a wall of white quote cards. */
  ink?: boolean
  /** Set to 0 to drop the star row. */
  stars?: number
}

/**
 * Testimonial card: stars, the quote, then who said it.
 */
export function Quote({ children, initials, name, meta, ink = false, stars = 5 }: QuoteProps) {
  return (
    <blockquote className={['quote', ink ? 'quote--ink' : ''].filter(Boolean).join(' ')}>
      {stars > 0 && (
        <p className={['stars', ink ? 'stars--lime' : ''].filter(Boolean).join(' ')}>
          {'★'.repeat(stars)}
        </p>
      )}
      <p className="quote__text">{children}</p>
      <footer className="quote__by">
        <span className={['ava', ink ? 'ava--lime' : ''].filter(Boolean).join(' ')}>{initials}</span>
        <span>
          {name}
          {meta && (
            <>
              <br />
              <span className={['muted', ink ? 'muted--on-ink' : ''].filter(Boolean).join(' ')}>
                {meta}
              </span>
            </>
          )}
        </span>
      </footer>
    </blockquote>
  )
}
