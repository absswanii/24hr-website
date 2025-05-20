"use client"
import Link from "next/link"
import { Button } from "@/components/custom-button"
import {
  Truck,
  Wrench,
  Clock,
  BarChart3,
  Lock,
  Headphones,
  Globe,
  Bell,
  Settings,
  Phone,
  FileText,
  Calendar,
  MessageCircle,
  CheckCircle,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { GallopEffect } from "@/components/gallop-effect"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { WaveDivider } from "@/components/wave-divider"
import { HeroCarousel } from "@/components/hero-carousel"
import { LogoCarousel } from "@/components/logo-carousel"

export default function Home() {
  return (
    <>
      {/* Hero Section with Carousel */}
      <section className="relative bg-primary hero-pattern overflow-hidden">
        <HeroCarousel />
        <GallopEffect />
        <WaveDivider className="h-16 z-10 -mt-[50px]" />
      </section>

      {/* Services Overview */}
      <section className="relative py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">24/7 Roadside Assistance Dispatch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              We answer your calls 24/7 and immediately connect you with qualified service providers and service
              providers to get your vehicles back on the road fast.
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
                <h3 className="text-lg font-bold mb-2">Service Provider Matching</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We quickly connect you with qualified service providers who can handle your specific vehicle repair
                  needs.
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
                <h3 className="text-lg font-bold mb-2">We Find Your Service Provider</h3>
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
                  The service provider arrives at your location, completes the repair, and gets you moving again
                  quickly.
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

      {/* Features Section */}
      <section className="relative py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Features for <span className="text-primary">Better Service</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our dispatch service combines human expertise with cutting-edge technology to deliver exceptional roadside
              assistance.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <FadeIn delay={0.1}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 h-full">
                <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">24/7 Call Handling</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our dispatch team answers calls 24/7, gathering essential information with professionalism and
                  urgency, ensuring no call goes unanswered when you need help.
                </p>
              </div>
            </FadeIn>

            {/* Feature 2 */}
            <FadeIn delay={0.2}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 h-full">
                <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Digital Service Records</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We create detailed digital records of every service call. (This can include comprehensive
                  documentation for insurance claims, maintenance records, and fleet management.)
                </p>
              </div>
            </FadeIn>

            {/* Feature 3 */}
            <FadeIn delay={0.3}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 h-full">
                <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Service Tracking</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Track the status of your service request in real-time, with updates on service provider arrival times
                  and repair progress to keep you informed every step of the way.
                </p>
              </div>
            </FadeIn>

            {/* Feature 4 */}
            <FadeIn delay={0.4}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 h-full">
                <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fleet Analytics</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Gain insights into service patterns, common repair issues, and response times with comprehensive
                  reporting tools designed for fleet managers and business owners.
                </p>
              </div>
            </FadeIn>

            {/* Feature 5 */}
            <FadeIn delay={0.5}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 h-full">
                <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Secure Communications</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  All your data and communications are protected with enterprise-grade security, ensuring your business
                  information and location details remain confidential.
                </p>
              </div>
            </FadeIn>

            {/* Feature 6 */}
            <FadeIn delay={0.6}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 h-full">
                <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Bell className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Mobile Notifications</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Receive instant alerts about service status updates, estimated arrival times, and completion
                  notifications directly on your mobile device.
                </p>
              </div>
            </FadeIn>

            {/* Feature 7 */}
            <FadeIn delay={0.7}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 h-full">
                <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Multi-language Support</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our dispatch team can communicate in multiple languages, ensuring clear communication with drivers and
                  service providers regardless of language barriers.
                </p>
              </div>
            </FadeIn>

            {/* Feature 8 */}
            <FadeIn delay={0.8}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 h-full">
                <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Headphones className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Live Dispatch Support</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Complex situations are seamlessly transferred to specialized dispatch agents who can provide advanced
                  assistance for challenging roadside emergencies.
                </p>
              </div>
            </FadeIn>

            {/* Feature 9 */}
            <FadeIn delay={0.9}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 h-full">
                <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Professional Communication</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our dispatch team is trained specifically for roadside assistance communication, providing clear, calm
                  guidance during stressful breakdown situations.
                </p>
              </div>
            </FadeIn>

            {/* Feature 10 */}
            <FadeIn delay={1.0}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 h-full">
                <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">24/7 Availability</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Provide round-the-clock service without increasing your staff workload, ensuring drivers receive
                  support whenever they need it, day or night.
                </p>
              </div>
            </FadeIn>

            {/* Feature 11 */}
            <FadeIn delay={1.1}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 h-full">
                <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Customizable Service Plans</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Tailor our dispatch services to match your specific business needs, with customizable response
                  protocols and service provider preferences.
                </p>
              </div>
            </FadeIn>

            {/* Feature 12 */}
            <FadeIn delay={1.2}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 h-full">
                <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Seamless Integration</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our service easily integrates with your existing fleet management systems and workflows, requiring
                  minimal setup and technical expertise.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits of Using 24Hr Concierge */}
      <section className="relative py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits of Using <span className="text-primary">24Hr Concierge</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              See how our dispatch service transforms your roadside assistance experience and keeps your vehicles on the
              road.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <FadeIn delay={0.1}>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-600 h-full">
                <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Never Miss a Call</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Ensure every driver receives immediate attention, regardless of time or location. Our 24/7 dispatch
                  center is always ready to respond.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-600 h-full">
                <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
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
                <h3 className="text-xl font-bold text-center mb-3">Reduced Downtime</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Minimize vehicle downtime with rapid dispatch and efficient service coordination, keeping your
                  business moving and reducing lost revenue.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-600 h-full">
                <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Streamlined Service</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Experience simplified service coordination with our efficient dispatch system that quickly connects
                  you with the right service provider for your needs.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-600 h-full">
                <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Enhanced Service Quality</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Receive consistent, professional service every time with our network of vetted service providers who
                  meet our strict quality standards.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Client Logos Carousel */}
      <LogoCarousel />

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
              <Link href="tel:+13022731234">
                <Button className="bg-white hover:bg-gray-100 text-primary px-8 py-3 text-lg font-bold w-full sm:w-auto">
                  CALL NOW
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
