"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface WaveDividerProps {
  className?: string
  inverted?: boolean
}

export function WaveDivider({ className = "", inverted = false }: WaveDividerProps) {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Only show the component after it's mounted on the client
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={`absolute -bottom-[2px] left-0 w-full overflow-hidden line-height-0 ${className}`}>
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{
          transform: inverted ? "rotate(180deg)" : "none",
        }}
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          className="fill-white dark:fill-gray-950"
        ></path>
      </svg>
    </div>
  )
}
