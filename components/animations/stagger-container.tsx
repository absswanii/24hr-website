"use client"

import { motion, type MotionProps } from "framer-motion"
import type { ReactNode } from "react"

type StaggerContainerProps = {
  children: ReactNode
  delay?: number
  staggerChildren?: number
  className?: string
  once?: boolean
}

export function StaggerContainer({
  children,
  delay = 0,
  staggerChildren = 0.1,
  className = "",
  once = true,
  ...props
}: StaggerContainerProps & Omit<MotionProps, keyof StaggerContainerProps>) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren: delay,
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
