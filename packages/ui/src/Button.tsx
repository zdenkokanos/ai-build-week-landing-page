import type { ReactNode } from 'react'

export type ButtonVariant = 'green' | 'lime' | 'white' | 'sand'

export type ButtonProps = {
  children: ReactNode
  /** Green is the primary action on light surfaces, lime the primary on dark ones. */
  variant?: ButtonVariant
  /** `lg` is the hero size — one per screen at most. */
  size?: 'md' | 'lg'
  /** Renders an anchor instead of a button. */
  href?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  className?: string
}

/**
 * The pill button every call to action on the page uses.
 *
 * Hover flips green to orange — the accent is reserved for that, never for a
 * resting state.
 */
export function Button({
  children,
  variant = 'green',
  size = 'md',
  href,
  type = 'button',
  onClick,
  className = '',
}: ButtonProps) {
  const cls = ['btn', 'btn--' + variant, size === 'lg' ? 'btn--lg' : '', className]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a className={cls} href={href} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <button className={cls} type={type} onClick={onClick}>
      {children}
    </button>
  )
}
