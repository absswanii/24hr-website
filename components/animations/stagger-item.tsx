"use client"

import { motion, type MotionProps } from "framer-motion"
import type { ReactNode } from "react"

type StaggerItemProps = {
  children: ReactNode
  className?: string
  duration?: number
  distance?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

export function StaggerItem({
  children,
  className = "",
  duration = 0.5,
  distance = 24,
  direction = "up",
  ...props
}: StaggerItemProps & Omit<MotionProps, keyof StaggerItemProps>) {
  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance }
      case "down":
        return { y: -distance }
      case "left":
        return { x: distance }
      case "right":
        return { x: -distance }
      default:
        return {}
    }
  }

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          ...getDirectionOffset(),
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration,
            ease: [0.25, 0.1, 0.25, 1.0], // Ease out cubic
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
