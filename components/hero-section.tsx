import type { ReactNode } from "react"
import { GallopEffect } from "./gallop-effect"
import { WaveDivider } from "./wave-divider"

interface HeroSectionProps {
  title: string
  description?: string
  children?: ReactNode
  className?: string
  showWave?: boolean
}

export function HeroSection({ title, description, children, className = "", showWave = false }: HeroSectionProps) {
  return (
    <section className={`bg-primary hero-pattern py-16 md:py-24 relative ${className}`}>
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-title">{title}</h1>
        {description && <p className="text-xl max-w-3xl mx-auto mb-8">{description}</p>}
        {children}
      </div>
      <GallopEffect />

      {/* Only show wave if explicitly requested */}
      {showWave && <WaveDivider className="h-16 z-10" />}
    </section>
  )
}
