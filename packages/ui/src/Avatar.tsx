export type AvatarProps = {
  /** Two letters — the page never uses photographs for people. */
  initials: string
  tone?: 'mint' | 'lime'
  /** Ring + smaller size, for avatars sitting on photography. */
  ring?: boolean
  className?: string
}

/**
 * Initials avatar used beside quotes and clip captions.
 */
export function Avatar({ initials, tone = 'mint', ring = false, className = '' }: AvatarProps) {
  const cls = ['ava', tone === 'lime' ? 'ava--lime' : '', ring ? 'ava--ring' : '', className]
    .filter(Boolean)
    .join(' ')
  return <span className={cls}>{initials}</span>
}
