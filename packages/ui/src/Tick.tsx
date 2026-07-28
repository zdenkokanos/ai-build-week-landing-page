export type TickProps = {
  /** `lg` is the size used on dark green panels. */
  size?: 'sm' | 'lg'
  className?: string
}

/**
 * Lime check bullet that opens a proof point.
 *
 * Decorative — it is aria-hidden, so the sentence beside it has to read on its own.
 */
export function Tick({ size = 'sm', className = '' }: TickProps) {
  const cls = ['tick', size === 'lg' ? 'tick--lime' : '', className].filter(Boolean).join(' ')
  return (
    <span className={cls} aria-hidden="true">
      ✓
    </span>
  )
}
