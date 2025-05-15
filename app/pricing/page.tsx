"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2, Truck, User, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react"
import { GallopEffect } from "@/components/gallop-effect"
import { WaveDivider } from "@/components/wave-divider"
import { cn } from "@/lib/utils"

// Define the form state types
type BusinessType = "insurance" | "fleet" | "owner-operator" | ""
type SizeRange = "1-100" | "101-500" | "500+" | ""
type ServiceOption = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  basePrice: number
}

// Define the service options
const serviceOptions: ServiceOption[] = [
  {
    id: "back-office",
    title: "Back Office Operations",
    description: "24/7 support to answer calls, log issues, and connect with service providers",
    icon: <Building2 className="h-6 w-6" />,
    basePrice: 15,
  },
  {
    id: "answering",
    title: "24/7 Answering Service",
    description: "Professional call handling for drivers with real-time updates",
    icon: <User className="h-6 w-6" />,
    basePrice: 20,
  },
  {
    id: "dispatch",
    title: "Automated Dispatch",
    description: "AI-powered job assignment and routing optimization",
    icon: <Truck className="h-6 w-6" />,
    basePrice: 18,
  },
  {
    id: "claims",
    title: "Claims Processing",
    description: "Streamlined claims handling and documentation management",
    icon: <CheckCircle2 className="h-6 w-6" />,
    basePrice: 25,
  },
]

export default function PricingPage() {
  // Form state
  const [phase, setPhase] = useState<number>(1)
  const [businessType, setBusinessType] = useState<BusinessType>("")
  const [vehicleCount, setVehicleCount] = useState<SizeRange>("")
  const [requestCount, setRequestCount] = useState<SizeRange>("")
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [showResult, setShowResult] = useState<boolean>(false)

  // Handle service selection
  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  // Calculate estimated price
  const calculatePrice = () => {
    const basePrice = 25 // Base price for all plans

    // Add service costs
    const serviceCost = selectedServices.reduce((total, serviceId) => {
      const service = serviceOptions.find((s) => s.id === serviceId)
      return total + (service?.basePrice || 0)
    }, 0)

    // Apply size multiplier
    let sizeMultiplier = 1
    if (vehicleCount === "101-500") sizeMultiplier = 1.5
    if (vehicleCount === "500+") sizeMultiplier = 2

    return Math.round((basePrice + serviceCost) * sizeMultiplier)
  }

  // Check if enterprise plan is needed
  const isEnterprise = () => {
    return (vehicleCount === "500+" || requestCount === "500+") && selectedServices.length > 2
  }

  // Handle form navigation
  const nextPhase = () => {
    if (phase < 3) {
      setPhase(phase + 1)
    } else {
      setShowResult(true)
    }
  }

  const prevPhase = () => {
    if (phase > 1) {
      setPhase(phase - 1)
    }
  }

  // Check if current phase is complete
  const isPhaseComplete = () => {
    switch (phase) {
      case 1:
        return businessType !== ""
      case 2:
        return businessType === "insurance" ? requestCount !== "" : vehicleCount !== "" && requestCount !== ""
      case 3:
        return selectedServices.length > 0
      default:
        return false
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { when: "afterChildren" },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  }

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <section className="bg-primary hero-pattern py-16 md:py-24 relative rounded-xl mb-12">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Custom Pricing for Your Business</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Tell us about your needs, and we'll provide a tailored pricing estimate.
          </p>
        </div>
        <GallopEffect />
        <WaveDivider className="h-16 z-10" />
      </section>

      <div className="max-w-3xl mx-auto">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-white font-medium",
                    phase >= step ? "bg-primary" : "bg-gray-300",
                  )}
                >
                  {step}
                </div>
                <span className="text-sm mt-2">{step === 1 ? "Business Type" : step === 2 ? "Size" : "Services"}</span>
              </div>
            ))}
          </div>
          <div className="relative h-2 bg-gray-200 rounded-full mt-4">
            <div
              className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-300"
              style={{ width: `${((phase - 1) / 2) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Container */}
        <Card className="border-2 border-primary/20 shadow-lg">
          <CardHeader>
            <CardTitle>
              {phase === 1
                ? "Tell us about your business"
                : phase === 2
                  ? "What's the size of your operation?"
                  : "Which services do you need?"}
            </CardTitle>
            <CardDescription>
              {phase === 1
                ? "Select the option that best describes your business"
                : phase === 2
                  ? "This helps us tailor our solution to your needs"
                  : "Select all services that are relevant to your business"}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <AnimatePresence mode="wait">
              {/* Phase 1: Business Type */}
              {phase === 1 && (
                <motion.div
                  key="phase1"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card
                      className={cn(
                        "cursor-pointer transition-all hover:shadow-md",
                        businessType === "insurance" ? "border-primary bg-primary/5" : "",
                      )}
                      onClick={() => setBusinessType("insurance")}
                    >
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <Building2
                          className={cn(
                            "h-12 w-12 mb-4",
                            businessType === "insurance" ? "text-primary" : "text-gray-400",
                          )}
                        />
                        <h3 className="font-medium text-lg">Insurance Company</h3>
                      </CardContent>
                    </Card>

                    <Card
                      className={cn(
                        "cursor-pointer transition-all hover:shadow-md",
                        businessType === "fleet" ? "border-primary bg-primary/5" : "",
                      )}
                      onClick={() => setBusinessType("fleet")}
                    >
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <Truck
                          className={cn("h-12 w-12 mb-4", businessType === "fleet" ? "text-primary" : "text-gray-400")}
                        />
                        <h3 className="font-medium text-lg">Fleet Manager</h3>
                      </CardContent>
                    </Card>

                    <Card
                      className={cn(
                        "cursor-pointer transition-all hover:shadow-md",
                        businessType === "owner-operator" ? "border-primary bg-primary/5" : "",
                      )}
                      onClick={() => setBusinessType("owner-operator")}
                    >
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <User
                          className={cn(
                            "h-12 w-12 mb-4",
                            businessType === "owner-operator" ? "text-primary" : "text-gray-400",
                          )}
                        />
                        <h3 className="font-medium text-lg">Owner Operator</h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              )}

              {/* Phase 2: Size Questions */}
              {phase === 2 && (
                <motion.div
                  key="phase2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  {businessType === "insurance" ? (
                    <motion.div variants={itemVariants} className="space-y-4">
                      <label className="block text-sm font-medium text-gray-700">
                        How many vehicle-fix claims do you get per month?
                      </label>
                      <Select value={requestCount} onValueChange={setRequestCount}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-100">1 to 100</SelectItem>
                          <SelectItem value="101-500">101 to 500</SelectItem>
                          <SelectItem value="500+">500+</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>
                  ) : (
                    <>
                      <motion.div variants={itemVariants} className="space-y-4">
                        <label className="block text-sm font-medium text-gray-700">
                          How many vehicles do you have in your fleet?
                        </label>
                        <Select value={vehicleCount} onValueChange={setVehicleCount}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-100">1 to 100</SelectItem>
                            <SelectItem value="101-500">101 to 500</SelectItem>
                            <SelectItem value="500+">500+</SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>

                      <motion.div variants={itemVariants} className="space-y-4">
                        <label className="block text-sm font-medium text-gray-700">
                          How many vehicle-fix requests do you get per month?
                        </label>
                        <Select value={requestCount} onValueChange={setRequestCount}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-100">1 to 100</SelectItem>
                            <SelectItem value="101-500">101 to 500</SelectItem>
                            <SelectItem value="500+">500+</SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              )}

              {/* Phase 3: Service Selection */}
              {phase === 3 && (
                <motion.div
                  key="phase3"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  <motion.p variants={itemVariants} className="text-gray-600 mb-4">
                    We help businesses streamline their operations and provide better service to their customers. Please
                    select the services that are most relevant to your needs:
                  </motion.p>

                  <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {serviceOptions.map((service) => (
                      <Card
                        key={service.id}
                        className={cn(
                          "cursor-pointer transition-all hover:shadow-md",
                          selectedServices.includes(service.id) ? "border-primary bg-primary/5" : "",
                        )}
                        onClick={() => toggleService(service.id)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start">
                            <div
                              className={cn(
                                "p-2 rounded-full mr-4",
                                selectedServices.includes(service.id) ? "bg-primary/10" : "bg-gray-100",
                              )}
                            >
                              {service.icon}
                            </div>
                            <div>
                              <h3 className="font-medium">{service.title}</h3>
                              <p className="text-sm text-gray-500">{service.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </motion.div>
                </motion.div>
              )}

              {/* Results */}
              {showResult && (
                <motion.div
                  key="result"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  {isEnterprise() ? (
                    <motion.div variants={itemVariants} className="text-center py-6">
                      <h3 className="text-2xl font-bold mb-4">Enterprise Solution Recommended</h3>
                      <p className="text-gray-600 mb-6">
                        Based on your needs, we recommend our Enterprise solution. Our team will create a custom plan
                        tailored specifically to your business.
                      </p>
                      <Button asChild size="lg" className="bg-primary text-white">
                        <a
                          href="https://scheduler.zoom.us/aaron-swan/ai_for_business"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Schedule a Consultation
                        </a>
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div variants={itemVariants}>
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold mb-2">Your Estimated Price</h3>
                        <div className="text-4xl font-bold text-primary">
                          ${calculatePrice()}
                          <span className="text-xl text-gray-500">/month</span>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <h4 className="font-medium mb-2">Price Breakdown</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Base Plan</span>
                            <span>$25</span>
                          </div>
                          {selectedServices.map((serviceId) => {
                            const service = serviceOptions.find((s) => s.id === serviceId)
                            if (!service) return null
                            return (
                              <div key={service.id} className="flex justify-between">
                                <span>{service.title}</span>
                                <span>${service.basePrice}</span>
                              </div>
                            )
                          })}
                          {(vehicleCount === "101-500" || requestCount === "101-500") && (
                            <div className="flex justify-between">
                              <span>Size Adjustment (Medium)</span>
                              <span>+50%</span>
                            </div>
                          )}
                          {(vehicleCount === "500+" || requestCount === "500+") && (
                            <div className="flex justify-between">
                              <span>Size Adjustment (Large)</span>
                              <span>+100%</span>
                            </div>
                          )}
                          <div className="border-t pt-2 font-semibold flex justify-between">
                            <span>Total</span>
                            <span>${calculatePrice()}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <Button asChild size="lg" className="bg-primary text-white">
                          <a
                            href="https://scheduler.zoom.us/aaron-swan/ai_for_business"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Get Started
                          </a>
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>

          <CardFooter className="flex justify-between">
            {phase > 1 && !showResult ? (
              <Button variant="outline" onClick={prevPhase}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
            ) : (
              <div></div>
            )}

            {!showResult && (
              <Button onClick={nextPhase} disabled={!isPhaseComplete()} className="bg-primary">
                {phase === 3 ? "See Pricing" : "Continue"} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}

            {showResult && (
              <Button
                variant="outline"
                onClick={() => {
                  setPhase(1)
                  setBusinessType("")
                  setVehicleCount("")
                  setRequestCount("")
                  setSelectedServices([])
                  setShowResult(false)
                }}
              >
                Start Over
              </Button>
            )}
          </CardFooter>
        </Card>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-semibold text-lg mb-2">How is pricing determined?</h3>
              <p className="text-gray-600">
                Our pricing is based on your business type, size, and the specific services you need. We start with a
                base price and add service costs, with adjustments for business size.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-semibold text-lg mb-2">Can I change my plan later?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing
                cycle.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-semibold text-lg mb-2">Do you offer custom enterprise solutions?</h3>
              <p className="text-gray-600">
                Yes, for larger organizations or those with complex needs, we offer custom enterprise solutions. Please
                schedule a consultation for more information.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-semibold text-lg mb-2">Is there a contract or commitment?</h3>
              <p className="text-gray-600">
                No, all our plans are month-to-month with no long-term commitment required. You can cancel at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
