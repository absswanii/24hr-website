"use client"

import { motion, type MotionProps } from "framer-motion"
import type { ReactNode } from "react"

type FadeInProps = {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  distance?: number
}

export function FadeIn({
  children,
  direction = "none",
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
  distance = 24,
  ...props
}: FadeInProps & Omit<MotionProps, keyof FadeInProps>) {
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
      initial={{
        opacity: 0,
        ...getDirectionOffset(),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0], // Ease out cubic
        },
      }}
      viewport={{ once }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
