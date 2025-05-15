"use client"

import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Slot } from "@radix-ui/react-slot"

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link"
type ButtonSize = "sm" | "md" | "lg" | "icon"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  asChild?: boolean
  size?: ButtonSize
  href?: string
  fullWidth?: boolean
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white border-transparent",
  secondary: "bg-secondary text-white border-transparent",
  outline: "bg-transparent text-foreground border-gray-300",
  ghost: "bg-transparent text-foreground border-transparent",
  link: "bg-transparent text-primary border-transparent underline underline-offset-4 p-0",
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs px-3 py-1.5 h-8",
  md: "text-sm px-4 py-2 h-10",
  lg: "text-base px-6 py-2.5 h-12",
  icon: "p-2 h-10 w-10",
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      asChild = false,
      size = "md",
      href,
      fullWidth = false,
      icon,
      iconPosition = "left",
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const buttonClasses = cn(
      // Base styles
      "inline-flex items-center justify-center rounded-md font-medium border-2",
      // No transitions or hover effects
      "select-none",
      // Variant and size
      variantStyles[variant],
      sizeStyles[size],
      // Full width option
      fullWidth ? "w-full" : "",
      // Disabled state
      disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
      // Custom classes
      className,
    )

    const content = (
      <>
        {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
        {children}
        {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
      </>
    )

    // Animation variants
    const buttonVariants = {
      initial: { scale: 1 },
      hover: { scale: 1.03 },
      tap: { scale: 0.97 },
    }

    if (href && !disabled) {
      return (
        <Link href={href} className={buttonClasses}>
          <motion.div
            className="w-full h-full flex items-center justify-center"
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {content}
          </motion.div>
        </Link>
      )
    }

    const Comp = asChild ? Slot : "button"

    return (
      <Comp ref={ref} className={buttonClasses} disabled={disabled} {...props}>
        <motion.div
          className="w-full h-full flex items-center justify-center"
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {content}
        </motion.div>
      </Comp>
    )
  },
)

Button.displayName = "Button"
