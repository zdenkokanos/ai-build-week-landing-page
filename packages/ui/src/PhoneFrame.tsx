import type { ReactNode } from 'react'

export type PhoneFrameProps = {
  /** The screen content — it is clipped to the rounded screen. */
  children: ReactNode
  /** `sm` is the hero deck size, `md` the one used beside copy. */
  size?: 'sm' | 'md'
  /** Sand screens read as app chrome, white as content. */
  screen?: 'white' | 'sand'
  /** The selfie-camera pill. On by default — a frame without it reads as a tablet. */
  notch?: boolean
  /** Fake iOS status bar across the top of the screen. */
  statusBar?: boolean
  className?: string
}

/**
 * Device mockup: dark bezel, rounded screen, notch.
 *
 * Everything inside is ordinary markup — this only supplies the frame, so build
 * the screen with the same primitives you would use on a page.
 */
export function PhoneFrame({
  children,
  size = 'md',
  screen = 'white',
  notch = true,
  statusBar = false,
  className = '',
}: PhoneFrameProps) {
  const cls = ['phone', size === 'sm' ? 'phone--hero' : 'phone--recipe', className]
    .filter(Boolean)
    .join(' ')
  const screenCls = ['phone__screen', screen === 'sand' ? 'phone__screen--sand' : '']
    .filter(Boolean)
    .join(' ')

  return (
    <div className={cls}>
      <div className={screenCls}>
        {notch && <span className="phone__notch" aria-hidden="true" />}
        {statusBar && (
          <div className="statusbar">
            <span>9:41</span>
            <span className="statusbar__icons">▮▮▮ ▰</span>
          </div>
        )}
        {children}
      </div>
    </div>
  )
}
