import type { ReactNode } from 'react'

export type ShellProps = {
  children: ReactNode
  /** `narrow` is the reading width used for FAQ-style content. */
  width?: 'default' | 'narrow'
  className?: string
}

/**
 * Centred content column with the page gutter — every section's content sits in one.
 */
export function Shell({ children, width = 'default', className = '' }: ShellProps) {
  const cls = ['shell', width === 'narrow' ? 'shell--narrow' : '', className]
    .filter(Boolean)
    .join(' ')
  return <div className={cls}>{children}</div>
}
