import Image from "next/image"
import Link from "next/link"
import { Bot, Zap, BarChart3, Clock, Shield, Truck } from "lucide-react"
import { Button } from "@/components/custom-button"
import { WaveDivider } from "@/components/wave-divider"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"

export const metadata = {
  title: "AI Solutions | 24Hr Truck",
  description:
    "AI-powered solutions for transportation and logistics - automating dispatch, customer service, and fleet management.",
}

export default function AIPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section - Neon Style */}
      <section className="relative bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-secondary/30 blur-[100px]"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-primary/30 blur-[100px]"></div>
          <div className="absolute top-40 right-40 w-40 h-40 rounded-full bg-purple-500/20 blur-[80px]"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-yellow-300 to-secondary">
                AI-Powered
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto">
              Intelligent automation for roadside assistance, dispatch, and customer service - available 24/7. Never
              miss a call!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://scheduler.zoom.us/aaron-swan/ai_for_business">
                <Button variant="secondary" size="lg" className="shadow-[0_0_15px_rgba(250,204,21,0.5)]">
                  Get a Demo
                </Button>
              </Link>
              <Link href="/ai#features">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/20 shadow-[0_0_15px_rgba(14,165,233,0.3)]"
                >
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center shadow-[0_0_30px_rgba(14,165,233,0.15)]">
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400 mb-2">
                24/7
              </p>
              <p className="text-gray-400">Availability</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center shadow-[0_0_30px_rgba(250,204,21,0.15)]">
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-300 mb-2">
                60%
              </p>
              <p className="text-gray-400">Cost Reduction</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-300 mb-2">
                100%
              </p>
              <p className="text-gray-400">Answered Calls</p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto mt-16 mb-16">
          <div className="relative rounded-xl overflow-hidden shadow-[0_0_30px_rgba(14,165,233,0.3)]">
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/1049743790?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                title="24HR - AI powered"
              />
            </div>
          </div>
        </div>

        {/* Wave Divider - Using the proper component with padding and border */}
        <div className="relative h-20 pt-8 border-t border-white/20">
          <WaveDivider />
        </div>
      </section>

      {/* Key Benefits - Icon Grid */}
      <section id="features" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Intelligent Solutions for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
              Every Challenge
            </span>
          </h2>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Bot className="h-8 w-8 text-white" />,
                title: "AI-Powered Dispatch",
                description:
                  "Automatically assign the closest service provider based on location, skills, and availability.",
                color: "from-primary to-cyan-500",
                shadow: "rgba(14,165,233,0.4)",
              },
              {
                icon: <Clock className="h-8 w-8 text-white" />,
                title: "24/7 Virtual Agents",
                description:
                  "Handle customer inquiries and dispatch requests around the clock without human intervention.",
                color: "from-secondary to-yellow-400",
                shadow: "rgba(250,204,21,0.4)",
              },
              {
                icon: <Zap className="h-8 w-8 text-white" />,
                title: "Instant Response",
                description: "Reduce wait times with immediate call answering and automated service dispatch.",
                color: "from-purple-600 to-purple-400",
                shadow: "rgba(168,85,247,0.4)",
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-white" />,
                title: "Data Analytics",
                description: "Gain insights from service patterns to optimize operations and resource allocation.",
                color: "from-cyan-500 to-blue-400",
                shadow: "rgba(6,182,212,0.4)",
              },
              {
                icon: <Shield className="h-8 w-8 text-white" />,
                title: "Fraud Prevention",
                description: "Identify suspicious patterns and prevent fraudulent service requests automatically.",
                color: "from-green-500 to-emerald-400",
                shadow: "rgba(16,185,129,0.4)",
              },
              {
                icon: <Truck className="h-8 w-8 text-white" />,
                title: "Fleet Optimization",
                description: "Maximize efficiency with AI-driven route planning and maintenance scheduling.",
                color: "from-pink-600 to-rose-400",
                shadow: "rgba(244,63,94,0.4)",
              },
            ].map((feature, index) => (
              <StaggerItem key={index} className="group">
                <div
                  className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 h-full transition-all duration-300 hover:shadow-[0_0_30px_${feature.shadow}] hover:-translate-y-1 shadow-lg`}
                >
                  <div
                    className={`bg-gradient-to-r ${feature.color} rounded-full w-16 h-16 flex items-center justify-center mb-6`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-black dark:text-white">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works - Redesigned to match reference */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why AI-Powered Call Center Services for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                Transportation and Auto Insurance Providers?
              </span>
            </h2>
            <p className="text-lg text-black dark:text-white">
              In today's fast-paced insurance transportation and logistics industries, providing fast, efficient, and
              accurate customer support is essential. Our{" "}
              <span className="font-semibold">AI-driven call center solutions and mobile apps</span> bring cutting-edge
              automation and intelligence to manage your fleet, logistics, and trucking operations.
            </p>
          </div>

          {/* Feature Cards - Horizontal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center border border-gray-200 dark:border-gray-700">
              <div className="flex justify-center mb-6">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Clock className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">24/7 Availability</h3>
              <p className="text-black dark:text-white">
                AI-powered call centers operate round the clock to support your fleet, no matter where or when
                assistance is needed.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center border border-gray-200 dark:border-gray-700">
              <div className="flex justify-center mb-6">
                <div className="bg-primary/10 p-4 rounded-full">
                  <BarChart3 className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Increased Efficiency</h3>
              <p className="text-black dark:text-white">
                Automate routine tasks like order tracking, dispatching, and roadside assistance requests for faster
                response times.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center border border-gray-200 dark:border-gray-700">
              <div className="flex justify-center mb-6">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Bot className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Intelligent Automation</h3>
              <p className="text-black dark:text-white">
                Our AI systems learn from each interaction, continuously improving service quality and response
                accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study - Visual */}
      <section className="py-20 bg-white dark:bg-gray-950 relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-secondary/10 blur-[100px]"></div>
          <div className="absolute bottom-40 left-20 w-72 h-72 rounded-full bg-primary/10 blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Real Results for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-400">
              Real Businesses
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden h-[400px]">
              <Image src="/ai-dispatch-platform.jpeg" alt="AI Dispatch Platform" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-white text-sm font-medium mb-2">CASE STUDY</p>
                  <h3 className="text-white text-2xl font-bold">National Fleet Management Company</h3>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                  60% Reduction
                </span>{" "}
                in Response Time
              </h3>
              <p className="text-black dark:text-white mb-6">
                A national fleet management company with over 5,000 vehicles implemented our AI dispatch system and saw
                immediate results:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-gradient-to-r from-primary to-cyan-500 p-1 rounded-full mr-3 mt-1 shadow-[0_0_10px_rgba(14,165,233,0.5)]">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-black dark:text-white">
                    60% reduction in average response time for roadside assistance
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-gradient-to-r from-secondary to-yellow-400 p-1 rounded-full mr-3 mt-1 shadow-[0_0_10px_rgba(250,204,21,0.5)]">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-black dark:text-white">
                    42% decrease in operational costs through automated dispatch
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-400 p-1 rounded-full mr-3 mt-1 shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-black dark:text-white">
                    93% customer satisfaction rating, up from 76% before implementation
                  </span>
                </li>
              </ul>
              <Link href="https://scheduler.zoom.us/aaron-swan/ai_for_business">
                <Button variant="primary" className="shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                  Request Case Study Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-40 left-20 w-72 h-72 rounded-full bg-primary/10 blur-[100px]"></div>
          <div className="absolute bottom-40 right-20 w-72 h-72 rounded-full bg-secondary/10 blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Seamless Integration with Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                  Existing Systems
                </span>
              </h2>
              <p className="text-black dark:text-white mb-6">
                Our AI solutions integrate with your existing fleet management, CRM, and dispatch systems with minimal
                disruption to your operations.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-gradient-to-r from-primary to-cyan-500 p-2 rounded-full mr-3 shadow-[0_0_10px_rgba(14,165,233,0.5)]">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-black dark:text-white">
                    API-based integration with major fleet management platforms
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-gradient-to-r from-secondary to-yellow-400 p-2 rounded-full mr-3 shadow-[0_0_10px_rgba(250,204,21,0.5)]">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-black dark:text-white">
                    Secure data exchange with insurance and telematics systems
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-400 p-2 rounded-full mr-3 shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-black dark:text-white">
                    Custom workflows to match your specific business processes
                  </span>
                </li>
              </ul>
              <Link href="https://scheduler.zoom.us/aaron-swan/ai_for_business">
                <Button variant="primary" className="shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                  Schedule Integration Consultation
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-[0_0_30px_rgba(14,165,233,0.2)]">
                <Image
                  src="/ai-system-integration-diagram-updated.png"
                  alt="AI System Integration with Fleet Management, Public Interface, Dials, and Insurance Systems"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-secondary/20 blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Transform</span>{" "}
            Your Operations with AI?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Join the growing number of transportation and logistics companies leveraging our AI solutions to improve
            efficiency and customer satisfaction.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://scheduler.zoom.us/aaron-swan/ai_for_business">
              <Button variant="secondary" size="lg" className="shadow-[0_0_15px_rgba(250,204,21,0.5)]">
                Request a Demo
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/20 shadow-[0_0_15px_rgba(14,165,233,0.3)]"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </main>
  )
}
