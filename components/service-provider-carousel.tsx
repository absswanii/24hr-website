"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"

type ServiceProviderLogo = {
  name: string
  src: string
  width: number
  height: number
}

export function ServiceProviderCarousel() {
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  // Removed all the problematic logos
  const serviceProviders: ServiceProviderLogo[] = [
    {
      name: "Legacy Automotive",
      src: "/logos/legacy-automotive.webp",
      width: 180,
      height: 90,
    },
    {
      name: "D&D Pro Tow",
      src: "/logos/dd-pro-tow.webp",
      width: 220,
      height: 90,
    },
    {
      name: "Roadside Towing",
      src: "/logos/roadside-towing.webp",
      width: 180,
      height: 90,
    },
    {
      name: "A&N Towing Corporation",
      src: "/logos/an-towing.webp",
      width: 180,
      height: 90,
    },
    {
      name: "Airpark",
      src: "/logos/airpark.png",
      width: 180,
      height: 90,
    },
    {
      name: "Neptune Towing",
      src: "/logos/neptune-towing.webp",
      width: 180,
      height: 90,
    },
    {
      name: "Quick-Safe",
      src: "/logos/quick-safe.png",
      width: 180,
      height: 90,
    },
    {
      name: "A1 Gold Coast Towing",
      src: "/logos/a1-gold-coast-towing.png",
      width: 180,
      height: 90,
    },
    {
      name: "Preferred Emergency Towing & Recovery",
      src: "/logos/preferred-emergency.webp",
      width: 220,
      height: 90,
    },
    {
      name: "Rob's Towing",
      src: "/logos/robs-towing.png",
      width: 180,
      height: 90,
    },
    // Removed all problematic logos
  ]

  // Duplicate the logos to create a seamless infinite scroll effect
  const allLogos = [...serviceProviders, ...serviceProviders]

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Start the animation
    let lastTime = 0
    const speed = 50 // pixels per second

    const animate = (time: number) => {
      if (lastTime === 0) {
        lastTime = time
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      if (!isPaused) {
        const delta = time - lastTime
        const moveBy = (delta / 1000) * speed

        setScrollPosition((prevPos) => {
          // Reset when we've scrolled through half the content (first set of logos)
          const firstSetWidth = serviceProviders.reduce((acc, logo) => acc + logo.width + 80, 0)
          if (prevPos >= firstSetWidth) {
            return 0
          }
          return prevPos + moveBy
        })
      }

      lastTime = time
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPaused, serviceProviders])

  return (
    <div className="w-full overflow-hidden bg-white dark:bg-gray-800 py-10">
      <div className="container mx-auto px-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Our Trusted Service Providers</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto">
          We partner with the best towing and roadside assistance companies across the nation to ensure your fleet
          receives top-quality service no matter where your drivers are located.
        </p>
      </div>

      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={containerRef}
          className="flex items-center"
          style={{
            transform: `translateX(-${scrollPosition}px)`,
            transition: isPaused ? "none" : "transform 0.1s linear",
          }}
        >
          {allLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 mx-10 my-4 flex items-center justify-center"
              style={{ width: `${logo.width}px` }}
            >
              <div className="relative h-24 flex items-center justify-center">
                <div className="group relative">
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={`${logo.name} logo`}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain max-h-full"
                    style={{
                      maxWidth: `${logo.width}px`,
                      height: "auto",
                    }}
                  />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/80 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {logo.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Our network continues to grow, ensuring we have trusted partners in every region of the country.
        </p>
      </div>
    </div>
  )
}
