"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/custom-button"
import Link from "next/link"

interface SlideContent {
  title: string
  highlight: string
  description: string
  problems: string[]
  ctaText: string
  ctaLink: string
}

const slides: SlideContent[] = [
  {
    title: "FLEET MANAGERS",
    highlight: "REDUCE DOWNTIME",
    description: "We handle your roadside calls 24/7 and connect your drivers with qualified service providers",
    problems: [
      "Multiple Breakdown Calls Daily",
      "Driver Frustration & Delays",
      "Inconsistent Service Quality",
      "High Call Center Costs",
    ],
    ctaText: "FLEET SOLUTIONS",
    ctaLink: "/who-its-for/fleets",
  },
  {
    title: "INSURANCE COMPANIES",
    highlight: "STREAMLINE CLAIMS",
    description: "We answer your policyholders' calls and dispatch pre-approved service providers",
    problems: [
      "High Call Volume Management",
      "Finding Qualified Providers",
      "Controlling Repair Costs",
      "Customer Satisfaction Issues",
    ],
    ctaText: "INSURANCE SOLUTIONS",
    ctaLink: "/who-its-for/insurance-companies",
  },
  {
    title: "OWNER-OPERATORS",
    highlight: "BACK ON THE ROAD",
    description: "One call connects you with the right mechanic, anywhere in the country, anytime",
    problems: [
      "Finding Reliable Mechanics",
      "Unexpected Breakdowns",
      "Lost Revenue While Waiting",
      "Overpriced Emergency Repairs",
    ],
    ctaText: "DRIVER SOLUTIONS",
    ctaLink: "/who-its-for/owner-operators",
  },
  {
    title: "SERVICE PROVIDERS",
    highlight: "GROW YOUR BUSINESS",
    description: "We send you pre-qualified customers and handle all the dispatch communications",
    problems: [
      "Finding New Customers",
      "Inconsistent Job Flow",
      "Administrative Overhead",
      "Payment Collection Issues",
    ],
    ctaText: "PROVIDER SOLUTIONS",
    ctaLink: "/who-its-for/service-providers",
  },
  {
    title: "ROADSIDE ASSISTANCE",
    highlight: "24/7 DISPATCH",
    description: "We're always available to take your call and find the help you need",
    problems: [
      "No One Answering Your Calls",
      "Long Wait Times for Help",
      "Unreliable Service Providers",
      "Difficulty Finding Mechanics",
    ],
    ctaText: "GET STARTED",
    ctaLink: "/get-started",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setAutoplay(false)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [autoplay, currentSlide])

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">{/* Removed TireTrackPattern */}</div>
      {/* Removed SkidMarks */}

      {/* Carousel */}
      <div className="relative h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 h-full">
              <div className="grid md:grid-cols-2 gap-6 items-center h-full">
                <div className="text-white">
                  <div className="mb-2 text-secondary font-medium tracking-wider">FOR</div>
                  <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 hero-title">
                    <span className="block">{slides[currentSlide].title}</span>
                    <span className="text-secondary italic block mt-2">{slides[currentSlide].highlight}</span>
                  </h1>

                  <p className="text-lg mb-6">{slides[currentSlide].description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-8">
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
                  {/* This space can be used for slide-specific images if needed */}
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
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
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
