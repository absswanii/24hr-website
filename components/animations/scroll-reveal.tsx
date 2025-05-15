"use client"

import { motion, useScroll, useTransform, type MotionProps } from "framer-motion"
import { type ReactNode, useRef } from "react"

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  threshold?: [number, number]
  speed?: number
}

export function ScrollReveal({
  children,
  className = "",
  threshold = [0, 1],
  speed = 0.3,
  ...props
}: ScrollRevealProps & Omit<MotionProps, keyof ScrollRevealProps>) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, threshold, [0, 1])
  const y = useTransform(scrollYProgress, threshold, [50 * speed, 0])

  return (
    <motion.div ref={ref} style={{ opacity, y }} className={className} {...props}>
      {children}
    </motion.div>
  )
}
