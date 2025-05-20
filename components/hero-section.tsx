import type { ReactNode } from "react"
import { GallopEffect } from "./gallop-effect"
import { WaveDivider } from "./wave-divider"
import Image from "next/image"

interface HeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  children?: ReactNode
  className?: string
  showWave?: boolean
  backgroundImage?: string
}

export function HeroSection({
  title,
  subtitle,
  description,
  children,
  className = "",
  showWave = false,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className={`bg-primary hero-pattern py-16 md:py-24 relative ${className}`}>
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image src={backgroundImage || "/placeholder.svg"} alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
      )}
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-title">
          {title || "24Hr Concierge for Service Operators"}
        </h1>
        {subtitle && <p className="text-xl max-w-3xl mx-auto mb-8">{subtitle}</p>}
        {description && <p className="text-xl max-w-3xl mx-auto mb-8">{description}</p>}
        {children}
      </div>
      <GallopEffect />

      {/* Only show wave if explicitly requested */}
      {showWave && <WaveDivider className="h-16 z-10" />}
    </section>
  )
}
