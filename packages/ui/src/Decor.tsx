import type { CSSProperties, ReactNode } from 'react'

/* ═══════════════════════════════════════════════════════════
   Hand-drawn decoration layer.
   Everything here is decoration: aria-hidden and pointer-events:none in CSS,
   so a doodle can never sit between a visitor and a control.
   ═══════════════════════════════════════════════════════════ */

type DoodleShape =
  | 'loops'
  | 'lines'
  | 'arrow-right'
  | 'arrow-left'
  | 'spark'
  | 'fork'
  | 'wave'
  | 'squiggle'

const SHAPES: Record<DoodleShape, { viewBox: string; paths: ReactNode }> = {
  loops: {
    viewBox: '0 0 108 54',
    paths: <path d="M4 48C4 26 30 20 30 34c0 11-16 10-12-4C22 15 46 10 56 20c8 8-2 20-10 14-7-5 2-18 16-20 14-2 28 4 38 16" />,
  },
  lines: {
    viewBox: '0 0 44 40',
    paths: (
      <>
        <path d="M2 6Q11 9 18 14" />
        <path d="M0 20Q10 21 19 21" />
        <path d="M3 34Q11 32 18 28" />
      </>
    ),
  },
  'arrow-right': {
    viewBox: '0 0 52 44',
    paths: (
      <>
        <path d="M6 4C28 6 44 16 46 34" />
        <path d="M32 26 46 37 50 22" />
      </>
    ),
  },
  'arrow-left': {
    viewBox: '0 0 58 50',
    paths: (
      <>
        <path d="M52 4C28 6 10 18 8 40" />
        <path d="M2 24 8 42 24 36" />
      </>
    ),
  },
  spark: {
    viewBox: '0 0 24 24',
    paths: <path className="fill" d="M12 1c1 7 4 10 11 11-7 1-10 4-11 11-1-7-4-10-11-11 7-1 10-4 11-11Z" />,
  },
  fork: {
    viewBox: '0 0 34 30',
    paths: (
      <>
        <path d="M17 28C15 18 12 10 6 3" />
        <path d="M17 28V2" />
        <path d="M17 28c2-10 6-17 12-23" />
      </>
    ),
  },
  wave: {
    viewBox: '0 0 140 20',
    paths: <path d="M4 14C40 2 100 2 136 12" />,
  },
  squiggle: {
    viewBox: '0 0 160 14',
    paths: <path d="M3 9C22 1 40 13 60 7s38 6 58 1c16-4 30 0 39 2" />,
  },
}

export type DoodleProps = {
  shape: DoodleShape
  width: number
  height: number
  /**
   * Decoration is hidden below 900px by default — it needs whitespace the phone
   * layout doesn't have. Set this on the one or two marks worth keeping there.
   */
  keep?: boolean
  className?: string
  style?: CSSProperties
}

export function Doodle({ shape, width, height, keep = false, className = '', style }: DoodleProps) {
  const { viewBox, paths } = SHAPES[shape]
  return (
    <span
      className={['doodle', keep ? 'deco-keep' : '', className].filter(Boolean).join(' ')}
      style={style}
      aria-hidden="true"
    >
      <svg width={width} height={height} viewBox={viewBox}>
        {paths}
      </svg>
    </span>
  )
}

export type ScribbleProps = {
  children: ReactNode
  /** Keeps the note visible below 900px, where decoration is hidden by default. */
  keep?: boolean
  className?: string
  style?: CSSProperties
}

export function Scribble({ children, keep = false, className = '', style }: ScribbleProps) {
  return (
    <span
      className={['scribble', keep ? 'deco-keep' : '', className].filter(Boolean).join(' ')}
      style={style}
      aria-hidden="true"
    >
      {children}
    </span>
  )
}
