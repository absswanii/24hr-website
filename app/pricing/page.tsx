"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Building2, Truck, User, ArrowRight, ArrowLeft, CheckCircle2, Calendar, PhoneCall } from "lucide-react"
import { GallopEffect } from "@/components/gallop-effect"
import { WaveDivider } from "@/components/wave-divider"
import { submitPricingForm } from "./actions";
import { cn } from "@/lib/utils"
import { Checkbox } from "@/components/ui/checkbox" // Import Checkbox

// Define the form state types
export type BusinessType = "insurance" | "fleet" | "owner-operator" | ""
type SizeRange = "1-100" | "101-500" | "500+" | ""
export type ServiceOption = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  basePrice: number
}

// Define the contact form state type
export type ContactInfo = {
  firstName: string
  lastName: string
  email: string
  phone: string
}

// Define the insurance questions state type
export type InsuranceQuestions = {
  policyHolderCount: string
  costPerPolicy: string
}

// Define the new fleet/owner-operator questions state types
type FleetOperatorQuestions = {
  selectedAvailability: string[]
  selectedHeadaches: string[]
  biggestIssues: string
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
  const [vehicleCount, setVehicleCount] = useState<string>("")
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [showResult, setShowResult] = useState<boolean>(false)
  const [loading, setLoading] = useState(false);

  // State for contact info
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })
  const [emailError, setEmailError] = useState<string | null>(null)
  const [phoneError, setPhoneError] = useState<string | null>(null)

  // State for insurance questions
  const [insuranceQuestions, setInsuranceQuestions] = useState<InsuranceQuestions>({
    policyHolderCount: "",
    costPerPolicy: "",
  })

  // State for new fleet/owner-operator questions
  const [fleetOperatorQuestions, setFleetOperatorQuestions] = useState<FleetOperatorQuestions>({
    selectedAvailability: [],
    selectedHeadaches: [],
    biggestIssues: "",
  })

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Handle contact info changes
  const handleContactInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setContactInfo((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (name === "email") {
      if (value === "" || emailRegex.test(value)) {
        setEmailError(null)
      } else {
        setEmailError("Please enter a valid email address.")
      }
    } else if (name === "phone") {
      // Filter non-numeric characters for phone
      const numericValue = value.replace(/\D/g, "")
      setContactInfo((prev) => ({
        ...prev,
        [name]: numericValue,
      }))
      if (numericValue.length < 10 && numericValue.length > 0) {
        setPhoneError("Phone number must be at least 10 digits.")
      } else {
        setPhoneError(null)
      }
    }
  }

  // Handle insurance question changes with integer validation
  const handleInsuranceQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    // Only allow integer values (empty string or numbers)
    if (value === "" || /^[0-9]+$/.test(value)) {
      setInsuranceQuestions((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  // Handle new fleet/owner-operator question changes
  const handleFleetOperatorQuestionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFleetOperatorQuestions((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const toggleMultiSelect = (field: keyof FleetOperatorQuestions, option: string) => {
    setFleetOperatorQuestions((prev) => {
      const currentSelection = prev[field] as string[]
      const newSelection = currentSelection.includes(option)
        ? currentSelection.filter((item) => item !== option)
        : [...currentSelection, option]
      return {
        ...prev,
        [field]: newSelection,
      }
    })
  }

  // Handle service selection
  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  // Get policy holder count as a number
  const getPolicyHolderCount = (): number => {
    const count = Number.parseInt(insuranceQuestions.policyHolderCount, 10)
    return isNaN(count) ? 0 : count
  }

  // Get vehicle count as a number
  const getVehicleCount = (): number => {
    const count = Number.parseInt(vehicleCount, 10)
    return isNaN(count) ? 0 : count
  }

  // Calculate estimated price
  const calculatePrice = () => {
    // Special pricing for insurance companies
    if (businessType === "insurance") {
      const policyCount = getPolicyHolderCount()

      // If more than 1000 policy holders, they qualify for enterprise plan
      if (policyCount > 1000) {
        return "Enterprise"
      }

      // Base price for insurance is $50/month
      let price = 50

      // Add $10 for every 100 policies
      price += Math.floor(policyCount / 100) * 10

      // Add service costs
      const serviceCost = selectedServices.reduce((total, serviceId) => {
        const service = serviceOptions.find((s) => s.id === serviceId)
        return total + (service?.basePrice || 0)
      }, 0)

      return price + serviceCost
    }

    // For fleet and owner-operator, use $4 per vehicle
    const vehicles = getVehicleCount()
    if (isNaN(vehicles)) return 0

    return vehicles * 4
  }

  // Check if enterprise plan is needed
  const isEnterprise = () => {
    // For insurance companies, check policy holder count
    if (businessType === "insurance") {
      return getPolicyHolderCount() > 1000
    }

    // For fleet and owner-operator, check if vehicle count > 5
    const vehicles = getVehicleCount()
    return vehicles > 5
  }

  // Get the total number of phases based on business type
  const getTotalPhases = () => {
    // Base phases: Business Type + Contact Info + Services + Schedule Call + Result
    const basePhases = 5

    // Add question phases based on business type
    if (businessType === "insurance") {
      return basePhases + 2 // Two additional questions for insurance
    } else if (businessType === "fleet" || businessType === "owner-operator") {
      return basePhases + 2 // Two additional questions for fleet/owner-operator (now grouped in phase 4)
    }

    return basePhases
  }

  // Get the current question phase title
  const getQuestionPhaseTitle = () => {
    if (businessType === "insurance") {
      if (phase === 3) {
        return "Policy Holder Coverage"
      } else if (phase === 4) {
        return "Current Cost Per Policy"
      }
    } else {
      if (phase === 3) {
        return "Vehicle Count"
      } else if (phase === 4) {
        return "Your Fleet's Specific Needs" // New title for combined questions
      }
    }

    if (phase === getTotalPhases() - 1) {
      return "Schedule a Consultation"
    }

    return ""
  }

  // Get the current question phase description
  const getQuestionPhaseDescription = () => {
    if (businessType === "insurance") {
      if (phase === 3) {
        return ""
      } else if (phase === 4) {
        return 'Investopedia states, "The average cost of adding roadside assistance to an auto insurance policy in the U.S. typically ranges from $10 to $30 per year per vehicle, depending on the insurer and level of coverage."'
      }
    } else {
      if (phase === 3) {
        return "How many vehicles do you have in your fleet?"
      } else if (phase === 4) {
        return "Tell us more about your operational needs and challenges." // New description
      }
    }

    if (phase === getTotalPhases() - 1) {
      return isEnterprise()
        ? "A representative from our sales team will contact you soon to discuss our enterprise solution."
        : "A representative from our sales team will contact you soon. You can also schedule a time that works best for you."
    }

    return ""
  }

  // Handle form navigation
  const nextPhase = () => {
    if (phase < getTotalPhases()) {
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

  async function onSeePricingClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      // build the FormData exactly as your action expects
      const fd = new FormData();
      fd.set("businessType", businessType);
      fd.set("policyHolderCount", insuranceQuestions.policyHolderCount);
      fd.set("costPerPolicy", insuranceQuestions.costPerPolicy);
      fd.set("vehicleCount", vehicleCount);
      fd.set(
        "selectedServices",
        JSON.stringify(
          serviceOptions
            .filter((s) => selectedServices.includes(s.id))
            .map((s) => ({ title: s.title, basePrice: s.basePrice }))
        )
      );
      fd.set("estimatedPrice", String(calculatePrice()));
      fd.set("firstName", contactInfo.firstName);
      fd.set("lastName", contactInfo.lastName);
      fd.set("email", contactInfo.email);
      fd.set("phone", contactInfo.phone);
  
      const result = await submitPricingForm(fd);
      if (!result.success) throw new Error(result.message);
  
      // only go to the next phase if email sent
      setShowResult(false);
      setPhase(6);
    } catch (err: any) {
      console.error("Pricing‐email error:", err);
      alert(err.message || "Failed to send pricing request");
    } finally {
      setLoading(false);
    }
  }
  

  // Check if current phase is complete
  const isPhaseComplete = () => {
    switch (phase) {
      case 1:
        return businessType !== ""
      case 2:
        return (
          contactInfo.firstName !== "" &&
          contactInfo.lastName !== "" &&
          emailRegex.test(contactInfo.email) && // Email validation
          contactInfo.phone.length >= 10 && // Phone validation (at least 10 digits)
          emailError === null &&
          phoneError === null
        )
      case 3:
        if (businessType === "insurance") {
          return insuranceQuestions.policyHolderCount !== ""
        }
        return vehicleCount !== ""
      case 4:
        if (businessType === "insurance") {
          return insuranceQuestions.costPerPolicy !== ""
        }
        // New validation for fleet/owner-operator phase 4
        return (
          fleetOperatorQuestions.selectedAvailability.length > 0 && fleetOperatorQuestions.selectedHeadaches.length > 0
        )
      case 5:
        return selectedServices.length > 0
      case 6: // Schedule call phase
        return true // Always complete, as scheduling is optional
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

  // Calculate the progress percentage
  const progressPercentage = () => {
    const displayedTotalPhases = getTotalPhases() - 1
    return ((phase - 1) / (displayedTotalPhases - 1)) * 100
  }

  // Common button hover styles
  const buttonHoverClasses =
    "hover:border hover:border-primary hover:bg-transparent hover:text-primary dark:hover:text-white"

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
            <div className="text-sm font-medium">
              Step {phase} of {getTotalPhases() - 1}
            </div>
            <div className="text-sm font-medium">{Math.round(progressPercentage())}% Complete</div>
          </div>
          <div className="relative h-2 bg-gray-200 rounded-full mt-2">
            <div
              className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage()}%` }}
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
                  ? "Your contact information"
                  : phase === getTotalPhases() - 2
                    ? "Which services do you need?"
                    : getQuestionPhaseTitle()}
            </CardTitle>
            <CardDescription>
              {phase === 1
                ? "Select the option that best describes your business"
                : phase === 2
                  ? "Please provide your contact details"
                : phase === getTotalPhases() - 2
                  ? "Select all services that are relevant to your business"
                  : getQuestionPhaseDescription()}
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

              {/* Phase 2: Contact Information */}
              {phase === 2 && (
                <motion.div
                  key="phase2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={contactInfo.firstName}
                        onChange={handleContactInfoChange}
                        placeholder="John"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={contactInfo.lastName}
                        onChange={handleContactInfoChange}
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={contactInfo.email}
                      onChange={handleContactInfoChange}
                      placeholder="john.doe@example.com"
                      required
                    />
                    {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="phone">Phone Number (US)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={contactInfo.phone}
                      onChange={handleContactInfoChange}
                      placeholder="(123) 456-7890"
                      required
                    />
                    {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
                    <p className="text-xs text-gray-500 mt-1">Please enter a 10-digit phone number (numbers only).</p>
                  </motion.div>
                </motion.div>
              )}

              {/* Phase 3: First Question */}
              {phase === 3 && (
                <motion.div
                  key="phase3"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  {businessType === "insurance" ? (
                    <motion.div variants={itemVariants} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="policyHolderCount">
                          Approximately how many policy holders would you like to cover with roadside assistance?
                        </Label>
                        <Input
                          id="policyHolderCount"
                          name="policyHolderCount"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={insuranceQuestions.policyHolderCount}
                          onChange={handleInsuranceQuestionChange}
                          placeholder="Enter a number (e.g., 5000)"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Please enter whole numbers only, no decimals or commas.
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div variants={itemVariants} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="vehicleCount">How many vehicles do you have in your fleet?</Label>
                        <Input
                          id="vehicleCount"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={vehicleCount}
                          onChange={(e) => {
                            const value = e.target.value
                            if (value === "" || /^[0-9]+$/.test(value)) {
                              setVehicleCount(value)
                            }
                          }}
                          placeholder="Enter number of vehicles"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Please enter whole numbers only, no decimals or commas.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* Phase 4: Second Question (Conditional for Insurance vs. Fleet/Owner-Op) */}
              {phase === 4 && (
                <motion.div
                  key="phase4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  {businessType === "insurance" ? (
                    <motion.div variants={itemVariants} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="costPerPolicy">
                          Could you share avg of what your company typically budgets per vehicle for roadside coverage?
                        </Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                          <Input
                            id="costPerPolicy"
                            name="costPerPolicy"
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            value={insuranceQuestions.costPerPolicy}
                            onChange={handleInsuranceQuestionChange}
                            placeholder="Enter a number (e.g., 20)"
                            className="pl-7"
                            required
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Please enter whole numbers only, no decimals.</p>
                      </div>
                    </motion.div>
                  ) : (
                    // New questions for Fleet/Owner-Operator
                    <motion.div variants={itemVariants} className="space-y-6">
                      <div className="space-y-2">
                        <Label>My fleet needs support (Availability)</Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {["Weekdays", "Weekends", "Nights (Anyday)"].map((option) => (
                            <div key={option} className="flex items-center space-x-2">
                              <Checkbox
                                id={`availability-${option}`}
                                checked={fleetOperatorQuestions.selectedAvailability.includes(option)}
                                onCheckedChange={() => toggleMultiSelect("selectedAvailability", option)}
                              />
                              <label
                                htmlFor={`availability-${option}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                        {fleetOperatorQuestions.selectedAvailability.length === 0 && (
                          <p className="text-red-500 text-sm">Please select at least one option.</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label>Take this headache away</Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[
                            "Dispatch of Emergency Roadside",
                            "Scheduling Periodic Maintenance (PMs)",
                            "Held Hostage by 3rd party provider",
                          ].map((option) => (
                            <div key={option} className="flex items-center space-x-2">
                              <Checkbox
                                id={`headache-${option}`}
                                checked={fleetOperatorQuestions.selectedHeadaches.includes(option)}
                                onCheckedChange={() => toggleMultiSelect("selectedHeadaches", option)}
                              />
                              <label
                                htmlFor={`headache-${option}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                        {fleetOperatorQuestions.selectedHeadaches.length === 0 && (
                          <p className="text-red-500 text-sm">Please select at least one option.</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="biggestIssues">What are your biggest issues (Optional)</Label>
                        <Input
                          id="biggestIssues"
                          name="biggestIssues"
                          value={fleetOperatorQuestions.biggestIssues}
                          onChange={handleFleetOperatorQuestionChange}
                          placeholder="Describe any other major issues you face..."
                        />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* Phase 5: Service Selection */}
              {phase === 5 && (
                <motion.div
                  key="phase5"
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

              {/* Phase 6: Schedule Call */}
              {phase === 6 && (
                <motion.div
                  key="phase6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants} className="text-center py-6">
                    <div className="flex justify-center mb-6">
                      <div className="bg-primary/10 p-4 rounded-full">
                        <PhoneCall className="h-12 w-12 text-primary" />
                      </div>
                    </div>

                    {isEnterprise() ? (
                      <>
                        <h3 className="text-2xl font-bold mb-4">You Qualify for Enterprise Pricing</h3>
                        <p className="text-lg mb-8">
                          Based on your needs, we recommend our Enterprise solution. A representative from our sales
                          team will contact you within 1-2 business days to discuss a custom plan tailored specifically
                          to your business.
                        </p>
                      </>
                    ) : (
                      <>
                        <h3 className="text-2xl font-bold mb-4">Your Pricing Summary</h3>
                        <div className="text-4xl font-bold text-primary mb-4">
                          ${calculatePrice()}
                          <span className="text-xl text-gray-500">/month</span>
                        </div>
                        <p className="text-lg mb-8">
                          Thank you for providing your information. A representative from our team will contact you
                          within 1-2 business days to confirm your pricing and answer any questions.
                        </p>
                      </>
                    )}

                    <p className="text-gray-600 mb-8">
                      Would you prefer to schedule a specific time for the call? Click the button below to book an
                      appointment that works best for your schedule.
                    </p>
                    <Button asChild size="lg" className={`bg-primary text-white ${buttonHoverClasses}`}>
                      <a
                        href="https://scheduler.zoom.us/aaron-swan/ai_for_business"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Calendar className="mr-2 h-5 w-5" />
                        Book an Appointment
                      </a>
                    </Button>
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
                        {businessType === "insurance" ? (
                          <>
                            Based on your policy holder count of <strong>{insuranceQuestions.policyHolderCount}</strong>
                            , you qualify for our Enterprise solution. A representative will reach out to you soon to
                            discuss a custom plan tailored specifically to your insurance business.
                          </>
                        ) : (
                          <>
                            Based on your vehicle count of <strong>{getVehicleCount()}</strong>, you qualify for our
                            Enterprise solution. Our team will create a custom plan tailored specifically to your
                            business.
                          </>
                        )}
                      </p>
                      <Button asChild size="lg" className={`bg-primary text-white ${buttonHoverClasses}`}>
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
                          {businessType === "insurance" ? (
                            <>
                              <div className="flex justify-between">
                                <span>Base Insurance Plan</span>
                                <span>$50</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Policy Volume ({getPolicyHolderCount()} policies)</span>
                                <span>${Math.floor(getPolicyHolderCount() / 100) * 10}</span>
                              </div>
                            </>
                          ) : (
                            <div className="flex justify-between">
                              <span>Vehicle Count ({getVehicleCount()} vehicles @ $4 each)</span>
                              <span>${getVehicleCount() * 4}</span>
                            </div>
                          )}

                          {businessType === "insurance" &&
                            selectedServices.map((serviceId) => {
                              const service = serviceOptions.find((s) => s.id === serviceId)
                              if (!service) return null
                              return (
                                <div key={service.id} className="flex justify-between">
                                  <span>{service.title}</span>
                                  <span>${service.basePrice}</span>
                                </div>
                              )
                            })}

                          <div className="border-t pt-2 font-semibold flex justify-between">
                            <span>Total</span>
                            <span>${calculatePrice()}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <Button asChild size="lg" className={`bg-primary text-white ${buttonHoverClasses}`}>
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
            {phase > 1 && phase !== 6 && !showResult ? (
              <Button variant="outline" onClick={prevPhase} className={buttonHoverClasses}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
            ) : (
              <div></div>
            )}

            {!showResult && phase !== 6 && (
              <Button
                onClick={nextPhase}
                disabled={!isPhaseComplete()}
                className={`bg-primary text-white ${buttonHoverClasses} ${!isPhaseComplete() ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {phase === 5 ? "See Pricing" : "Continue"} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}

            {!showResult && phase === 5 && (
              <Button
                onClick={onSeePricingClick}
                disabled={!isPhaseComplete() || loading}
                className="bg-primary">
                {loading ? "Sending…" : "See Pricing"} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}

            {showResult && (
              <Button
                variant="outline"
                onClick={() => {
                  setPhase(1)
                  setBusinessType("")
                  setVehicleCount("")
                  setSelectedServices([])
                  setContactInfo({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                  })
                  setEmailError(null)
                  setPhoneError(null)
                  setInsuranceQuestions({
                    policyHolderCount: "",
                    costPerPolicy: "",
                  })
                  setFleetOperatorQuestions({
                    selectedAvailability: [],
                    selectedHeadaches: [],
                    biggestIssues: "",
                  })
                  setShowResult(false)
                }}
                className={buttonHoverClasses}
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
                Our pricing is based on your business type, size, and the specific services you need. For insurance
                companies, pricing is based on the number of policy holders. For fleet managers and owner-operators, we
                charge $4 per vehicle per month.
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
                Yes, for larger organizations or those with complex needs, we offer custom enterprise solutions.
                Insurance companies with over 1,000 policy holders or businesses with more than 5 vehicles automatically
                qualify for our enterprise plan.
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
