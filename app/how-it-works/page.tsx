"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CheckCircle, Users, PenToolIcon as Tool, GraduationCap, Building } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { WaveDivider } from "@/components/wave-divider"

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("insurance")

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary hero-pattern py-16 md:py-24 relative">
        <div className="container mx-auto px-4 text-center text-white">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-title">How 24Hr Concierge Works</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Our streamlined process is tailored to your specific needs, making it easy for you to get the vehicle
              assistance you need.
            </p>
          </FadeIn>
        </div>

        {/* Wave divider with theme-aware color */}
        <WaveDivider className="h-16 z-10" />
      </section>

      {/* Customer Type Selection and Process Flow */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Select Your Customer Type</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide tailored solutions for different types of customers
              </p>
            </FadeIn>

            <Tabs defaultValue="insurance" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto mb-12">
                <TabsTrigger
                  value="insurance"
                  className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                    activeTab === "insurance"
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-gray-200 hover:border-primary/50"
                  }`}
                >
                  <Building size={32} className={activeTab === "insurance" ? "text-primary" : "text-gray-500"} />
                  <span className="font-bold">Roadside Insurance</span>
                </TabsTrigger>
                <TabsTrigger
                  value="fleets"
                  className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                    activeTab === "fleets"
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-gray-200 hover:border-primary/50"
                  }`}
                >
                  <Users size={32} className={activeTab === "fleets" ? "text-primary" : "text-gray-500"} />
                  <span className="font-bold">Fleets & Owner Operators</span>
                </TabsTrigger>
                <TabsTrigger
                  value="providers"
                  className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                    activeTab === "providers"
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-gray-200 hover:border-primary/50"
                  }`}
                >
                  <Tool size={32} className={activeTab === "providers" ? "text-primary" : "text-gray-500"} />
                  <span className="font-bold">Service Providers</span>
                </TabsTrigger>
                <TabsTrigger
                  value="students"
                  className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                    activeTab === "students"
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-gray-200 hover:border-primary/50"
                  }`}
                >
                  <GraduationCap size={32} className={activeTab === "students" ? "text-primary" : "text-gray-500"} />
                  <span className="font-bold">Students</span>
                </TabsTrigger>
              </TabsList>

              {/* Insurance Tab Content */}
              <TabsContent value="insurance" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
                    How It Works For <span className="text-primary">Roadside Insurance</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                    {/* Left side - Process description */}
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-2xl font-bold mb-4">
                          <span className="text-primary">Step 1.</span> Sign Up
                        </h4>
                        <p className="text-gray-600">
                          Create an account and complete our streamlined onboarding process. Our team guides you through
                          each step to ensure a smooth setup.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-2xl font-bold mb-4">
                          <span className="text-primary">Step 2.</span> Upload Roadside Policy Holders
                        </h4>
                        <p className="text-gray-600">
                          Securely upload your roadside policy holders to our system. We integrate with your existing
                          databases to ensure a seamless transition for your business.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-2xl font-bold mb-4">
                          <span className="text-primary">Step 3.</span> 24Hr Concierge Goes To Work
                        </h4>
                        <p className="text-gray-600">
                          24Hr Concierge goes to work anytime your policy holders call in. We handle the entire process
                          from the initial call to dispatching service providers.
                        </p>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg mt-8">
                        <h4 className="text-xl font-bold mb-4">Problems Solved</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                            <span>No more increasing call center costs</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                            <span>24/7 Accessibility for all policy holders</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                            <span>Faster claims processing through integration</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Right side - Process flow diagram */}
                    <div className="relative flex flex-col items-center">
                      {/* Step 1 Box */}
                      <div className="w-full bg-white rounded-lg shadow-lg border-2 border-primary p-6 mb-16 transition-all duration-300 hover:shadow-xl hover:scale-105 relative">
                        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                          1
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-primary/10 rounded-full p-4 mb-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 text-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                              />
                            </svg>
                          </div>
                          <h5 className="text-lg font-bold text-center">Sign Up</h5>
                        </div>
                      </div>

                      {/* Arrow 1 */}
                      <div className="h-16 w-32 -mt-8 mb-8">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
                          <path
                            d="M50,0 C70,30 30,70 50,100"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeDasharray="8 4"
                            className="animate-pulse"
                          />
                          <polygon
                            points="45,95 50,100 45,105"
                            fill="currentColor"
                            className="animate-bounce"
                            style={{ animationDuration: "2s" }}
                          />
                        </svg>
                      </div>

                      {/* Step 2 Box */}
                      <div className="w-full bg-white rounded-lg shadow-lg border-2 border-primary p-6 mb-16 transition-all duration-300 hover:shadow-xl hover:scale-105 relative">
                        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                          2
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-primary/10 rounded-full p-4 mb-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 text-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12"
                              />
                            </svg>
                          </div>
                          <h5 className="text-lg font-bold text-center">Upload Policy Holders</h5>
                        </div>
                      </div>

                      {/* Arrow 2 */}
                      <div className="h-16 w-32 -mt-8 mb-8">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
                          <path
                            d="M50,0 C70,30 30,70 50,100"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeDasharray="8 4"
                            className="animate-pulse"
                          />
                          <polygon
                            points="45,95 50,100 45,105"
                            fill="currentColor"
                            className="animate-bounce"
                            style={{ animationDuration: "2s" }}
                          />
                        </svg>
                      </div>

                      {/* Step 3 Box */}
                      <div className="w-full bg-white rounded-lg shadow-lg border-2 border-primary p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 relative">
                        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                          3
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-primary/10 rounded-full p-4 mb-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 text-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                              />
                            </svg>
                          </div>
                          <h5 className="text-lg font-bold text-center">24Hr Concierge Goes To Work</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>

              {/* Fleets Tab Content */}
              <TabsContent value="fleets" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
                    How It Works For <span className="text-primary">Fleets & Owner Operators</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                    {/* Left side - Process description */}
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-2xl font-bold mb-4">
                          <span className="text-primary">Step 1.</span> Sign Up
                        </h4>
                        <p className="text-gray-600">
                          Create an account with a simple registration process. Our team works with you to understand
                          your specific fleet needs.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-2xl font-bold mb-4">
                          <span className="text-primary">Step 2.</span> Upload Assets and Vehicles
                        </h4>
                        <p className="text-gray-600">
                          Upload your fleet vehicles and assets into our secure system. We create a comprehensive
                          digital inventory that helps us provide faster, more accurate service.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-2xl font-bold mb-4">
                          <span className="text-primary">Step 3.</span> 24Hr Concierge Goes To Work
                        </h4>
                        <p className="text-gray-600">
                          24Hr Concierge goes to work anytime your drivers call in. We handle everything from the
                          initial call to dispatching qualified service providers.
                        </p>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg mt-8">
                        <h4 className="text-xl font-bold mb-4">Problems Solved</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                            <span>No more fragmented support for your drivers</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                            <span>No costly technology & complex upgrades</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                            <span>No more increasing call center costs</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Right side - Process flow diagram */}
                    <div className="relative flex flex-col items-center">
                      {/* Step 1 Box */}
                      <div className="w-full bg-white rounded-lg shadow-lg border-2 border-primary p-6 mb-16 transition-all duration-300 hover:shadow-xl hover:scale-105 relative">
                        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                          1
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-primary/10 rounded-full p-4 mb-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 text-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                              />
                            </svg>
                          </div>
                          <h5 className="text-lg font-bold text-center">Sign Up</h5>
                        </div>
                      </div>

                      {/* Arrow 1 */}
                      <div className="h-16 w-32 -mt-8 mb-8">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
                          <path
                            d="M50,0 C70,30 30,70 50,100"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeDasharray="8 4"
                            className="animate-pulse"
                          />
                          <polygon
                            points="45,95 50,100 45,105"
                            fill="currentColor"
                            className="animate-bounce"
                            style={{ animationDuration: "2s" }}
                          />
                        </svg>
                      </div>

                      {/* Step 2 Box */}
                      <div className="w-full bg-white rounded-lg shadow-lg border-2 border-primary p-6 mb-16 transition-all duration-300 hover:shadow-xl hover:scale-105 relative">
                        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                          2
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-primary/10 rounded-full p-4 mb-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 text-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12"
                              />
                            </svg>
                          </div>
                          <h5 className="text-lg font-bold text-center">Upload Assets & Vehicles</h5>
                        </div>
                      </div>

                      {/* Arrow 2 */}
                      <div className="h-16 w-32 -mt-8 mb-8">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
                          <path
                            d="M50,0 C70,30 30,70 50,100"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeDasharray="8 4"
                            className="animate-pulse"
                          />
                          <polygon
                            points="45,95 50,100 45,105"
                            fill="currentColor"
                            className="animate-bounce"
                            style={{ animationDuration: "2s" }}
                          />
                        </svg>
                      </div>

                      {/* Step 3 Box */}
                      <div className="w-full bg-white rounded-lg shadow-lg border-2 border-primary p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 relative">
                        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                          3
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-primary/10 rounded-full p-4 mb-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 text-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                              />
                            </svg>
                          </div>
                          <h5 className="text-lg font-bold text-center">24Hr Concierge Goes To Work</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>

              {/* Service Providers Tab Content */}
              <TabsContent value="providers" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
                    How It Works For <span className="text-primary">Service Providers</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                    {/* Left side - Process description */}
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-2xl font-bold mb-4">
                          <span className="text-primary">Step 1.</span> Sign Up
                        </h4>
                        <p className="text-gray-600">
                          Join our network through a simple registration process. We verify your credentials and onboard
                          you to start receiving job opportunities.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-2xl font-bold mb-4">
                          <span className="text-primary">Step 2.</span> Tell Us Your Specialty
                        </h4>
                        <p className="text-gray-600">
                          Specify your service specialties, equipment capabilities, and areas of expertise. This helps
                          us match you with the right jobs that align with your skills.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-2xl font-bold mb-4">
                          <span className="text-primary">Step 3.</span> We Contact You
                        </h4>
                        <p className="text-gray-600">
                          We contact you anytime there is a vehicle breakdown in your area that matches your expertise.
                          You can accept or decline jobs based on your availability.
                        </p>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg mt-8">
                        <h4 className="text-xl font-bold mb-4">Problems Solved</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                            <span>Free marketing and sales for your business</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                            <span>Access to quality jobs</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                            <span>Opportunity of contracting with the right fleets and insurance companies</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Right side - Process flow diagram */}
                    <div className="relative flex flex-col items-center">
                      {/* Step 1 Box */}
                      <div className="w-full bg-white rounded-lg shadow-lg border-2 border-primary p-6 mb-16 transition-all duration-300 hover:shadow-xl hover:scale-105 relative">
                        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                          1
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-primary/10 rounded-full p-4 mb-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 text-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                              />
                            </svg>
                          </div>
                          <h5 className="text-lg font-bold text-center">Sign Up</h5>
                        </div>
                      </div>

                      {/* Arrow 1 */}
                      <div className="h-16 w-32 -mt-8 mb-8">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
                          <path
                            d="M50,0 C70,30 30,70 50,100"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeDasharray="8 4"
                            className="animate-pulse"
                          />
                          <polygon
                            points="45,95 50,100 45,105"
                            fill="currentColor"
                            className="animate-bounce"
                            style={{ animationDuration: "2s" }}
                          />
                        </svg>
                      </div>

                      {/* Step 2 Box */}
                      <div className="w-full bg-white rounded-lg shadow-lg border-2 border-primary p-6 mb-16 transition-all duration-300 hover:shadow-xl hover:scale-105 relative">
                        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                          2
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-primary/10 rounded-full p-4 mb-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 text-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12"
                              />
                            </svg>
                          </div>
                          <h5 className="text-lg font-bold text-center">Tell Us Your Specialty</h5>
                        </div>
                      </div>

                      {/* Arrow 2 */}
                      <div className="h-16 w-32 -mt-8 mb-8">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
                          <path
                            d="M50,0 C70,30 30,70 50,100"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeDasharray="8 4"
                            className="animate-pulse"
                          />
                          <polygon
                            points="45,95 50,100 45,105"
                            fill="currentColor"
                            className="animate-bounce"
                            style={{ animationDuration: "2s" }}
                          />
                        </svg>
                      </div>

                      {/* Step 3 Box */}
                      <div className="w-full bg-white rounded-lg shadow-lg border-2 border-primary p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 relative">
                        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                          3
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-primary/10 rounded-full p-4 mb-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 text-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                              />
                            </svg>
                          </div>
                          <h5 className="text-lg font-bold text-center">We Contact You</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>

              {/* Students Tab Content */}
              <TabsContent value="students" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
                    How It Works For <span className="text-primary">Students</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                    {/* Left side - Process description */}
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-2xl font-bold mb-4">
                          <span className="text-primary">Step 1.</span> Sign Up
                        </h4>
                        <p className="text-gray-600">
                          Create an account and complete the verification process. We verify your student status and
                          help you get started with flexible work opportunities.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-2xl font-bold mb-4">
                          <span className="text-primary">Step 2.</span> Pick a Service
                        </h4>
                        <p className="text-gray-600">
                          Select the services you can provide, such as fuel delivery or tire changes, based on your
                          skills and training. We offer opportunities ranging from basic to advanced services.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-2xl font-bold mb-4">
                          <span className="text-primary">Step 3.</span> We Contact You
                        </h4>
                        <p className="text-gray-600">
                          We contact you when there is an available job in your area that matches your skills. You can
                          accept or decline based on your schedule and availability.
                        </p>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg mt-8">
                        <h4 className="text-xl font-bold mb-4">Problems Solved</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                            <span>Access to quality jobs</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                            <span>No need for marketing</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                            <span>Flexible part-time work opportunities</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Right side - Process flow diagram */}
                    <div className="relative flex flex-col items-center">
                      {/* Step 1 Box */}
                      <div className="w-full bg-white rounded-lg shadow-lg border-2 border-primary p-6 mb-16 transition-all duration-300 hover:shadow-xl hover:scale-105 relative">
                        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                          1
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-primary/10 rounded-full p-4 mb-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 text-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                              />
                            </svg>
                          </div>
                          <h5 className="text-lg font-bold text-center">Sign Up</h5>
                        </div>
                      </div>

                      {/* Arrow 1 */}
                      <div className="h-16 w-32 -mt-8 mb-8">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
                          <path
                            d="M50,0 C70,30 30,70 50,100"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeDasharray="8 4"
                            className="animate-pulse"
                          />
                          <polygon
                            points="45,95 50,100 45,105"
                            fill="currentColor"
                            className="animate-bounce"
                            style={{ animationDuration: "2s" }}
                          />
                        </svg>
                      </div>

                      {/* Step 2 Box */}
                      <div className="w-full bg-white rounded-lg shadow-lg border-2 border-primary p-6 mb-16 transition-all duration-300 hover:shadow-xl hover:scale-105 relative">
                        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                          2
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-primary/10 rounded-full p-4 mb-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 text-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12"
                              />
                            </svg>
                          </div>
                          <h5 className="text-lg font-bold text-center">Pick a Service</h5>
                        </div>
                      </div>

                      {/* Arrow 2 */}
                      <div className="h-16 w-32 -mt-8 mb-8">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
                          <path
                            d="M50,0 C70,30 30,70 50,100"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeDasharray="8 4"
                            className="animate-pulse"
                          />
                          <polygon
                            points="45,95 50,100 45,105"
                            fill="currentColor"
                            className="animate-bounce"
                            style={{ animationDuration: "2s" }}
                          />
                        </svg>
                      </div>

                      {/* Step 3 Box */}
                      <div className="w-full bg-white rounded-lg shadow-lg border-2 border-primary p-6 mb-16 transition-all duration-300 hover:shadow-xl hover:scale-105 relative">
                        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                          3
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-primary/10 rounded-full p-4 mb-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 text-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                              />
                            </svg>
                          </div>
                          <h5 className="text-lg font-bold text-center">We Contact You</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary hero-pattern">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started with 24Hr Concierge?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join the thousands of customers who trust us for reliable vehicle assistance nationwide.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/get-started">
                <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 text-lg font-bold w-full sm:w-auto">
                  GET STARTED
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-100 text-primary px-8 py-3 text-lg font-bold w-full sm:w-auto">
                  CONTACT US
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
