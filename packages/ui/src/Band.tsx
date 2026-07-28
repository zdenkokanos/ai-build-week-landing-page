import type { ReactNode } from 'react'

export type BandTone = 'green' | 'sand' | 'mint'

export type BandProps = {
  children: ReactNode
  /** Green carries white text; sand and mint carry ink text. */
  tone?: BandTone
  id?: string
  className?: string
}

/**
 * Full-bleed tinted section that breaks up the page's neutral background.
 *
 * Green is the loudest — the page uses it once. Put a Shell inside for the content.
 */
export function Band({ children, tone = 'sand', id, className = '' }: BandProps) {
  return (
    <section className={['band', 'band--' + tone, className].filter(Boolean).join(' ')} id={id}>
      {children}
    </section>
  )
}
