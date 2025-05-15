"use client"

import type React from "react"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Ensure theme is preserved during page transitions
  useEffect(() => {
    try {
      // Get current theme
      const theme = localStorage.getItem("app-theme") || "system"
      const isDark =
        theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)

      // Apply theme
      if (isDark) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }

      // Dispatch event to notify theme provider
      window.dispatchEvent(
        new CustomEvent("app-theme-change", {
          detail: { theme: theme },
        }),
      )
    } catch (e) {}
  }, [pathname])

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
