import { useEffect, useRef } from 'react'

/**
 * Adds .is-visible to elements with .reveal inside (or the element itself)
 * when they enter the viewport. Attach the returned ref to a container,
 * or use the standalone class-based init.
 */
export function useRevealRoot<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const targets: HTMLElement[] = []
    if (root.classList.contains('reveal')) targets.push(root)
    root.querySelectorAll<HTMLElement>('.reveal').forEach((el) => targets.push(el))

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])

  return ref
}
