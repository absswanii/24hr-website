"use client"

import { useRef, useState } from "react"
import Image from "next/image"

type ClientLogo = {
  name: string
  logo: string
  width: number
  height: number
}

export function LogoCarousel() {
  const clientLogos = [
    {
      name: "African American Chamber of Commerce of New Jersey",
      logo: "/logos/aaccnj-logo.png",
      width: 240,
      height: 80,
    },
    {
      name: "JCB",
      logo: "/logos/jcb-logo.png",
      width: 160,
      height: 80,
    },
    {
      name: "Berkley One",
      logo: "/logos/berkley-logo.png",
      width: 240,
      height: 80,
    },
    {
      name: "Curucaye",
      logo: "/logos/curucaye-logo.png",
      width: 200,
      height: 80,
    },
    {
      name: "Choice Appointments",
      logo: "/logos/choice-appointments-logo.png",
      width: 240,
      height: 80,
    },
  ]

  // Duplicate the logos to create a seamless infinite scroll effect
  const duplicatedLogos = [...clientLogos, ...clientLogos]

  // State to pause animation on hover
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Calculate full width for CSS animation
  const totalWidth = clientLogos.reduce((acc, logo) => acc + logo.width + 40, 0)

  return (
    <div className="w-full overflow-hidden bg-white dark:bg-gray-800 py-10">
      <div className="container mx-auto px-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Our Trusted Partners</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto">
          We're proud to work with these industry-leading organizations to provide exceptional service
        </p>
      </div>

      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        ref={containerRef}
      >
        <div
          className={`flex items-center ${isPaused ? "animate-pause" : "animate-scroll"}`}
          style={{
            animationDuration: "30s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationName: "scrollLogos",
            width: `${totalWidth * 2}px`,
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="flex-shrink-0 mx-5 my-2 flex items-center justify-center">
              <div className="relative h-20 flex items-center justify-center">
                <Image
                  src={logo.logo || "/placeholder.svg"}
                  alt={`${logo.name} logo`}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain max-h-full"
                  style={{
                    maxWidth: `${logo.width}px`,
                    height: "auto",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scrollLogos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scrollLogos 30s linear infinite;
        }
        
        .animate-pause {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
