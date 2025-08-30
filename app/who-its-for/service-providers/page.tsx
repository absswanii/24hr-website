import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Wrench, Clock, DollarSign, Shield, Smartphone } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import Script from "next/script";

export const metadata = {
  title:
    "For Mechanics & Independent Repair Shops | 24Hr Truck Services & AI Concierge",
  description:
    "Take control of your mechanic career with 24Hr Truck Services. Access a steady stream of jobs, eliminate marketing burdens, and work on your own terms.",
};

export default function ServiceProvidersPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="24Hr Concierge for Service Providers"
        description="Independence redefined: Take control of your time, eliminate marketing burdens, and build lasting customer loyalty."
        showWave={true}
      >
        <div className="inline-block bg-white/10 p-3 rounded-full mb-4">
          <Wrench className="h-8 w-8 text-white" />
        </div>
      </HeroSection>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Your Mechanic Journey Starts Here
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Are you a skilled mechanic looking to take control of your time,
                eliminate the burdens of marketing and sales, and build lasting
                customer loyalty? Look no further! Join our innovative mechanic
                network and experience the freedom to work on your terms, all
                while accessing a steady stream of jobs from larger fleets
                seeking your expertise.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our platform connects independent mechanics and repair shops
                with commercial truck operators who need your specialized
                skills. We handle the customer acquisition, scheduling, and
                payment processing, allowing you to focus on what you do
                best—fixing trucks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="https://scheduler.zoom.us/aaron-swan/ai_for_business"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary border-2 border-primary text-white hover:bg-white hover:text-black dark:hover:bg-gray-900 dark:hover:text-white hover:border-primary w-full sm:w-auto">
                    Get Started
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto bg-transparent"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>

            {/* Video Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">
                See How It Works
              </h3>
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-md">
                    <iframe
                      title="Mechanic Network Introduction"
                      src="https://player.vimeo.com/video/744706102?h=8bdbe30cc5"
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h4 className="text-lg font-bold mt-4 mb-2">
                    Take Your Business to the Next Level
                  </h4>
                  <p className="text-gray-700">
                    Learn how our platform helps mechanics grow their business
                    with steady work and simplified operations.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-md">
                    <iframe
                      title="Mechanic App Demo"
                      src="https://player.vimeo.com/video/735567298?h=3f002f5cfc"
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h4 className="text-lg font-bold mt-4 mb-2">
                    Our Mobile App in Action
                  </h4>
                  <p className="text-gray-700">
                    See how easy it is to manage jobs, communicate with
                    customers, and process payments through our app.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-md">
                    <iframe
                      title="Mechanic Success Story"
                      src="https://player.vimeo.com/video/744706015?h=1fda5ad7a2"
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h4 className="text-lg font-bold mt-4 mb-2">
                    Hear From Our Mechanics
                  </h4>
                  <p className="text-gray-700">
                    Listen to success stories from mechanics who have
                    transformed their careers with our platform.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Independence */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">
                Why Choose Independence With Our Mechanic App?
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        Work On Your Schedule
                      </h4>
                      <p className="text-gray-700">
                        Set your own hours and availability. Accept jobs that
                        fit your schedule and expertise, giving you complete
                        control over your work-life balance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <DollarSign className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        Maximize Your Earnings
                      </h4>
                      <p className="text-gray-700">
                        Eliminate costly marketing expenses and downtime between
                        jobs. Our platform keeps your schedule full with
                        high-value repair work from commercial fleets.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        Easy-to-Use Mobile App
                      </h4>
                      <p className="text-gray-700">
                        Manage your entire business from our intuitive mobile
                        app. Accept jobs, communicate with customers, process
                        payments, and track your earnings—all in one place.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        Guaranteed Payments
                      </h4>
                      <p className="text-gray-700">
                        No more chasing payments or dealing with billing issues.
                        We ensure you get paid promptly for every job completed
                        through our secure payment system.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">
                How It Works for Mechanics
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ol className="space-y-6">
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        Join Our Network
                      </h4>
                      <p className="text-gray-700">
                        Complete a simple application process, verifying your
                        qualifications, experience, and insurance coverage. Once
                        approved, you'll gain access to our job marketplace.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        Receive Job Notifications
                      </h4>
                      <p className="text-gray-700">
                        Browse available jobs in your area or receive instant
                        notifications when new opportunities match your skills
                        and availability. Review job details, location, and
                        estimated completion time.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        Accept Jobs You Want
                      </h4>
                      <p className="text-gray-700">
                        Choose the jobs that interest you and fit your schedule.
                        No pressure to accept anything that doesn't work for
                        you—you maintain complete control over your workload.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        Complete Repairs
                      </h4>
                      <p className="text-gray-700">
                        Perform the necessary repairs or maintenance according
                        to industry standards. Document your work through our
                        app with photos and detailed notes for transparency.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Get Paid Fast</h4>
                      <p className="text-gray-700">
                        Receive payment directly to your account within 48 hours
                        of job completion. No invoicing, no collections, no
                        hassle—just reliable income for your expertise.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Services You Can Offer */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">
                Services You Can Offer
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-3">
                    Preventive Maintenance
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="bg-primary/10 p-1 rounded-full mr-3">
                        <svg
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>Oil changes and fluid services</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-primary/10 p-1 rounded-full mr-3">
                        <svg
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>Brake inspections and service</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-primary/10 p-1 rounded-full mr-3">
                        <svg
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>Tire rotations and replacements</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-primary/10 p-1 rounded-full mr-3">
                        <svg
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>Filter replacements</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-3">
                    Diagnostic Services
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="bg-primary/10 p-1 rounded-full mr-3">
                        <svg
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>Engine diagnostic scanning</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-primary/10 p-1 rounded-full mr-3">
                        <svg
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>Electrical system troubleshooting</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-primary/10 p-1 rounded-full mr-3">
                        <svg
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>Performance testing</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-primary/10 p-1 rounded-full mr-3">
                        <svg
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>Emissions system analysis</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-3">Repair Services</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="bg-primary/10 p-1 rounded-full mr-3">
                        <svg
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>Engine repairs and rebuilds</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-primary/10 p-1 rounded-full mr-3">
                        <svg
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>Transmission service</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-primary/10 p-1 rounded-full mr-3">
                        <svg
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>Suspension and steering repairs</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-primary/10 p-1 rounded-full mr-3">
                        <svg
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>Electrical system repairs</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-3">Emergency Services</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="bg-primary/10 p-1 rounded-full mr-3">
                        <svg
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>Roadside assistance</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-primary/10 p-1 rounded-full mr-3">
                        <svg
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>Jump starts and battery service</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-primary/10 p-1 rounded-full mr-3">
                        <svg
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>Tire changes and repairs</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-primary/10 p-1 rounded-full mr-3">
                        <svg
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>Mobile fuel delivery</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mb-16">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-.181h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 text-lg italic mb-6">
                  "After 15 years working for a large repair shop, I decided to
                  take control of my career. Joining the 24HR Truck Fix network
                  gave me the independence I wanted without sacrificing income
                  stability. I now work fewer hours but make more money, and I
                  get to choose exactly when and where I work. The app makes
                  everything simple—from accepting jobs to getting paid. It's
                  transformed my life as a mechanic."
                </p>
                <div className="font-bold">Michael R.</div>
                <div className="text-gray-600">
                  Independent Diesel Technician, Atlanta, GA
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Requirements to Join</h3>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <p className="text-lg text-gray-700 mb-6">
                  To join our network of independent mechanics, you'll need to
                  meet the following requirements:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg
                        className="h-4 w-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span>
                      Minimum 3 years experience in commercial truck repair
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg
                        className="h-4 w-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span>
                      Relevant certifications (ASE, manufacturer-specific, etc.)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg
                        className="h-4 w-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span>
                      Business liability insurance ($1M minimum coverage)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg
                        className="h-4 w-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span>Proper tools and equipment for mobile repairs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg
                        className="h-4 w-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span>Smartphone with reliable internet connection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg
                        className="h-4 w-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span>Clean background check and driving record</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg
                        className="h-4 w-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span>
                      Commitment to quality service and professionalism
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Redefine Your Independence?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Join our network of skilled mechanics and start building your
                independent business with our support.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="https://scheduler.zoom.us/aaron-swan/ai_for_business"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary border-2 border-primary text-white hover:bg-white hover:text-black dark:hover:bg-gray-900 dark:hover:text-white hover:border-primary w-full sm:w-auto">
                    Apply to Join
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto bg-transparent"
                  >
                    Request More Information
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Widget */}
      <div
        dangerouslySetInnerHTML={{
          __html: `<the24hr widget_id="68b2f5b07b0cc9d7dc709e46" isOrg="true"></the24hr>`,
        }}
      />
      <Script
        src="https://portal.24hrtruckfix.com/widget/the24hr-widget.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}
