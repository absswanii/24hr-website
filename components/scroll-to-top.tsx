"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Using 'instant' instead of 'smooth' to avoid interference with page transitions
    })
  }, [pathname])

  // This component doesn't render anything
  return null
}
