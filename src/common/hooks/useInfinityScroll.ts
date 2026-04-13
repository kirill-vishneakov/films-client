import { useEffect, type RefObject } from "react"

export function useInfinityScroll(
  loaderRef: RefObject<HTMLDivElement | null>,
  onIntersect: () => void
) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        onIntersect()
      },
      { rootMargin: "200px" }
    )

    const el = loaderRef.current
    if (!el) return

    observer.observe(el)

    return () => observer.disconnect()
  }, [onIntersect, loaderRef])
}
