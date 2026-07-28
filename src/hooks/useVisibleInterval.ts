import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'

type Options = {
  /** When false the ticker never runs (reduced motion). */
  enabled?: boolean
}

export type VisibleInterval = {
  /** True while the ticker is actually ticking — drives the paused/idle styling. */
  running: boolean
  /** Bumped every time a run starts, so CSS animations can be remounted in sync. */
  runId: number
  /** Final: once the visitor takes over, coming back into view must not hand control back. */
  stop: () => void
  /** Restarts the ticker from zero — used when a manual pick should reset the countdown. */
  restart: () => void
}

/**
 * Runs `fn` on an interval that only ticks while `ref` is on screen and the tab
 * is visible. Same contract as the plain-JS original: an autoplay that never
 * runs against content nobody can see, and never drifts out of sync with it.
 */
export function useVisibleInterval(
  ref: RefObject<Element | null>,
  ms: number,
  fn: () => void,
  { enabled = true }: Options = {},
): VisibleInterval {
  const fnRef = useRef(fn)
  fnRef.current = fn

  const [stopped, setStopped] = useState(false)
  const [restartToken, setRestartToken] = useState(0)
  const [running, setRunning] = useState(false)
  const [runId, setRunId] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node || !enabled || stopped) return

    let id: number | null = null

    const start = () => {
      if (id !== null) return
      id = window.setInterval(() => fnRef.current(), ms)
      setRunning(true)
      setRunId((n) => n + 1)
    }
    const pause = () => {
      if (id === null) return
      window.clearInterval(id)
      id = null
      setRunning(false)
    }

    // Optimistic: the observer corrects this on its first callback. Starting at
    // false would strand the ticker if that callback never arrived.
    let inView = true
    let observer: IntersectionObserver | null = null

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          inView = entries[0].isIntersecting
          if (inView) start()
          else pause()
        },
        { threshold: 0.25 },
      )
      observer.observe(node)
    } else {
      start()
    }

    // Only resume on tab-focus if the node is actually on screen.
    const onVisibility = () => {
      if (document.hidden) pause()
      else if (inView) start()
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
      observer?.disconnect()
      pause()
    }
  }, [ref, ms, enabled, stopped, restartToken])

  const stop = useCallback(() => setStopped(true), [])
  const restart = useCallback(() => setRestartToken((n) => n + 1), [])

  return { running, runId, stop, restart }
}
