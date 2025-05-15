"use client"
import Link from "next/link"
import { Button } from "@/components/custom-button"
import { Truck, Wrench, Clock, Shield, MessageSquare, Users } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { GallopEffect } from "@/components/gallop-effect"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { WaveDivider } from "@/components/wave-divider"
import { HeroCarousel } from "@/components/hero-carousel"

export default function Home() {
  return (
    <>
      {/* Hero Section with Carousel */}
      <section className="relative bg-primary hero-pattern py-10 md:py-16 overflow-hidden">
        <HeroCarousel />
        <GallopEffect />
        <WaveDivider className="h-16 z-10" />
      </section>

      {/* Services Overview */}
      <section className="relative py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">24/7 Roadside Assistance Dispatch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              We answer your calls 24/7 and immediately connect you with qualified mechanics and service providers to
              get your vehicles back on the road fast.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            <StaggerItem>
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
                  <Truck className="text-primary w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold mb-2">24/7 Call Answering</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Our dispatch center answers your calls around the clock, ensuring you never face an emergency alone.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
                  <Wrench className="text-primary w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold mb-2">Mechanic Matching</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We quickly connect you with qualified mechanics who can handle your specific vehicle repair needs.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
                  <Clock className="text-primary w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold mb-2">Rapid Response</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Our network of service providers ensures fast response times, minimizing downtime and getting you back
                  on schedule.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn direction="up" delay={0.3} className="mt-8">
            <Link href="/services">
              <Button variant="primary">View All Services</Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-12 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">How Our Dispatch Works</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our streamlined process ensures you get the help you need quickly and efficiently, any time of day or
              night.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            <StaggerItem>
              <div className="text-center">
                <div className="bg-secondary/20 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-secondary">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Call Our 24/7 Dispatch</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Reach our dispatch center anytime, day or night. We always pick up your call.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="text-center">
                <div className="bg-secondary/20 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-secondary">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2">We Find Your Mechanic</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We immediately locate and dispatch the nearest qualified service provider for your specific needs.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="text-center">
                <div className="bg-secondary/20 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-secondary">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Get Back on the Road</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  The mechanic arrives at your location, completes the repair, and gets you moving again quickly.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn direction="up" delay={0.3} className="mt-8 text-center">
            <Link href="/how-it-works">
              <Button variant="primary">Learn More</Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-12 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Why Choose 24Hr Concierge</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We're committed to being the most reliable roadside assistance dispatch service in the industry.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <StaggerItem>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="bg-primary/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  <Shield className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Always Answered Calls</h3>
                <p className="text-gray-300 text-sm">
                  We guarantee that your call will be answered 24/7/365, even on holidays and weekends.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="bg-primary/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Rapid Dispatch</h3>
                <p className="text-gray-300 text-sm">
                  Our dispatch system quickly identifies and contacts the nearest qualified service providers to
                  minimize your wait time.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="bg-primary/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  <MessageSquare className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Transparent Communication</h3>
                <p className="text-gray-300 text-sm">
                  Stay informed with real-time updates and clear communication throughout the repair process.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="bg-primary/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  <Truck className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Nationwide Coverage</h3>
                <p className="text-gray-300 text-sm">
                  Our extensive network of technicians provides coverage across the United States.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="bg-primary/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  <Wrench className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Skilled Technicians</h3>
                <p className="text-gray-300 text-sm">
                  Our mechanics are experienced with all vehicle makes and models, ensuring professional repairs.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="bg-primary/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  <Users className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Customer-Focused</h3>
                <p className="text-gray-300 text-sm">
                  We prioritize your needs and provide personalized service to keep your business moving.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Find answers to common questions about our roadside assistance and vehicle repair services.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-t dark:border-gray-800">
                <AccordionTrigger className="text-left text-base font-medium py-3">
                  How quickly can I expect service after requesting roadside assistance?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400 text-sm">
                  Our average response time is 30-60 minutes, depending on your location and current demand. In
                  metropolitan areas, response times are typically faster. We prioritize emergency situations and
                  provide real-time updates on the technician's estimated arrival time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="dark:border-gray-800">
                <AccordionTrigger className="text-left text-base font-medium py-3">
                  What types of vehicle repairs can be performed on-site?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400 text-sm">
                  Our mobile technicians can handle a wide range of repairs including electrical system issues, brake
                  repairs, tire changes, fuel system problems, cooling system repairs, and many diagnostic services.
                  More complex repairs requiring specialized equipment may need to be performed at a service center, but
                  we'll help coordinate towing if necessary.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="dark:border-gray-800">
                <AccordionTrigger className="text-left text-base font-medium py-3">
                  Do you service all types of vehicles?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400 text-sm">
                  Yes, we service all types of vehicles including commercial trucks, passenger vehicles, RVs, and
                  specialty vehicles. Our technicians are experienced with all major makes and models.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="dark:border-gray-800">
                <AccordionTrigger className="text-left text-base font-medium py-3">
                  How does billing work for fleet accounts?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400 text-sm">
                  Fleet accounts enjoy streamlined billing with consolidated monthly invoices, detailed service reports,
                  and customizable approval processes. We can integrate with most fleet management systems and provide
                  dedicated account managers for larger fleets. Contact us to set up a fleet account tailored to your
                  needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="dark:border-gray-800">
                <AccordionTrigger className="text-left text-base font-medium py-3">
                  Are your technicians certified?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400 text-sm">
                  All technicians in our network are thoroughly vetted and must meet strict requirements including
                  appropriate certifications, experience levels, and ongoing training. Many hold ASE certifications and
                  manufacturer-specific training credentials. We regularly evaluate performance to ensure quality
                  service.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-10 bg-primary hero-pattern overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Never Wait for Roadside Help Again</h2>
            <p className="text-lg text-white/90 mb-6 max-w-3xl mx-auto">
              Join the thousands of drivers and fleet managers who rely on our 24/7 dispatch service to keep their
              vehicles moving.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/get-started">
                <Button variant="secondary" size="md">
                  GET STARTED
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" size="md" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                  CONTACT US
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Don't take our word for it. Hear from drivers and fleet managers who rely on our services.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            <StaggerItem>
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-.181h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  &quot;24Hr Concierge saved us when our vehicle broke down on a critical delivery. The technician
                  arrived quickly and had us back on the road in no time. Excellent service!"
                </p>
                <div className="font-bold text-sm">John D.</div>
                <div className="text-xs text-gray-500 dark:text-gray-500">Independent Owner-Operator</div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-.181h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  "As a fleet manager, I need reliable partners. 24Hr Concierge has consistently provided excellent
                  service for our entire fleet, reducing downtime and keeping our drivers safe."
                </p>
                <div className="font-bold text-sm">Sarah M.</div>
                <div className="text-xs text-gray-500 dark:text-gray-500">Fleet Manager, XYZ Logistics</div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-.181h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  "The peace of mind knowing someone will always answer my call is invaluable. When my RV broke down in
                  a remote area, 24Hr Concierge found me a specialized technician within an hour."
                </p>
                <div className="font-bold text-sm">Robert K.</div>
                <div className="text-xs text-gray-500 dark:text-gray-500">RV Owner</div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
