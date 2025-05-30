"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/custom-button"
import Link from "next/link"
import Image from "next/image"

interface SlideContent {
  title: string
  highlight: string
  description: string
  problems: string[]
  ctaText: string
  ctaLink: string
  image?: string
  videoUrl?: string
  showFor?: boolean
}

const slides: SlideContent[] = [
  {
    title: "FLEETS",
    highlight: "REDUCE OPERATIONAL COSTS",
    description:
      "We handle all your calls 24/7, connect your drivers with qualified service providers for emergency roadside & preventative maintenance scheduling.",
    problems: [
      "Multiple Breakdown Calls Daily",
      "Driver Frustration & Delays",
      "Inconsistent Service Quality",
      "High Call Center Costs",
    ],
    ctaText: "FLEET SOLUTIONS",
    ctaLink: "/who-its-for/fleets",
    image: "/fleet-vehicles-lineup.png",
    showFor: true,
  },
  {
    title: "INSURANCE COMPANIES",
    highlight: "OUTSOURCE THE HASSLE, KEEP THE SAVINGS",
    description: "We keep your customers happy and save you money by lowering your roadside costs.",
    problems: [
      "Growing call center costs",
      "Unreliable service providers",
      "Decreasing Customer Satisfaction",
      "Trapped By 3rd Party Service Models",
    ],
    ctaText: "INSURANCE SOLUTIONS",
    ctaLink: "/who-its-for/insurance-companies",
    videoUrl: "https://player.vimeo.com/video/750374131?badge=0&autopause=0&player_id=0&app_id=58479",
    showFor: true,
  },
  {
    title: "OWNER-OPERATORS",
    highlight: "BACK ON THE ROAD",
    description: "One call connects you with the right service provider, anywhere in the country, anytime",
    problems: [
      "Costly Dispatch",
      "Unreliable Service Providers",
      "Lost Revenue While Waiting",
      "Overpriced Emergency Repairs",
    ],
    ctaText: "DRIVER SOLUTIONS",
    ctaLink: "/who-its-for/owner-operators",
    videoUrl: "https://player.vimeo.com/video/750090943?h=99c355ce9c",
    showFor: true,
  },
  {
    title: "SERVICE PROVIDERS",
    highlight: "GROW YOUR BUSINESS",
    description: "We send you pre-qualified customers and handle all the dispatch communications",
    problems: [
      "Sales & Marketing Challenges",
      "Inconsistent Job Flow",
      "Administrative Overhead",
      "Payment Collection Issues",
    ],
    ctaText: "PROVIDER SOLUTIONS",
    ctaLink: "/who-its-for/service-providers",
    image: "/service-provider-hero.png",
    showFor: true,
  },
  {
    title: "24/7",
    highlight: "Dispatch Platform",
    description: "We're always available to take your call and find the help you need",
    problems: [
      "No One Answering Your Calls",
      "Long Wait Times for Help",
      "Unreliable Service Providers",
      "Difficulty Finding Service Providers",
    ],
    ctaText: "GET STARTED",
    ctaLink: "/get-started",
    videoUrl:
      "https://player.vimeo.com/video/1049743790?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    showFor: false,
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [isHovering, setIsHovering] = useState(false)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (!autoplay || isHovering) return

    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [autoplay, currentSlide, isHovering])

  // Pause autoplay when video is on screen
  useEffect(() => {
    if (slides[currentSlide].videoUrl) {
      setAutoplay(false)
    } else {
      setAutoplay(true)
    }
  }, [currentSlide])

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Carousel */}
      <div className="relative pt-[75px] pb-[115px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="container mx-auto px-4 md:px-8">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="text-white">
                  {slides[currentSlide].showFor !== false && (
                    <div className="text-secondary font-medium tracking-wider">FOR</div>
                  )}
                  <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-2 hero-title">
                    <span className="block">{slides[currentSlide].title}</span>
                    <span className="text-secondary italic block mt-1">{slides[currentSlide].highlight}</span>
                  </h1>

                  <p className="text-lg mb-4">{slides[currentSlide].description}</p>

                  <div className="mb-1 font-medium">We help fix:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 mb-6">
                    {slides[currentSlide].problems.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.4 }}
                      >
                        <motion.span
                          className="mr-2 text-secondary text-xl"
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                            duration: 2,
                            delay: index * 0.5,
                          }}
                        >
                          •
                        </motion.span>
                        <span className="text-sm md:text-base">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href={slides[currentSlide].ctaLink}>
                      <Button variant="secondary" size="md" className="group">
                        {slides[currentSlide].ctaText}
                        <motion.span
                          className="inline-block ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </motion.span>
                      </Button>
                    </Link>
                  </motion.div>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  {slides[currentSlide].videoUrl ? (
                    <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg">
                      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                        <iframe
                          src={slides[currentSlide].videoUrl}
                          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                          title={`${slides[currentSlide].title} video`}
                        ></iframe>
                      </div>
                    </div>
                  ) : slides[currentSlide].image ? (
                    <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src={slides[currentSlide].image || "/placeholder.svg"}
                        alt={`${slides[currentSlide].title} illustration`}
                        fill
                        className="object-contain md:object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? "bg-secondary w-6" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
