"use client"

import { motion, type MotionProps } from "framer-motion"
import type { ReactNode } from "react"

type HoverCardProps = {
  children: ReactNode
  className?: string
  scale?: number
  lift?: number
}

export function HoverCard({
  children,
  className = "",
  scale = 1.02,
  lift = -4,
  ...props
}: HoverCardProps & Omit<MotionProps, keyof HoverCardProps>) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale,
        y: lift,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
