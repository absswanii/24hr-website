import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, PenToolIcon as Tool, Wrench, TrendingUp, Smartphone, Clock } from "lucide-react"
import { HeroSection } from "@/components/hero-section"

// Update the metadata
export const metadata = {
  title: "For Students | 24Hr Truck Services & AI Concierge",
  description:
    "Turn your auto and truck repair skills into a thriving business venture with 24Hr Truck Mechanic. Join our network and start your entrepreneurial journey today.",
}

export default function StudentsPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="24Hr Concierge for Students"
        description="Your gateway to entrepreneurship in the truck repair industry. Turn your skills into a thriving business with our platform and support."
        showWave={true}
      >
        <div className="inline-block bg-white/10 p-3 rounded-full mb-4">
          <GraduationCap className="h-8 w-8 text-white" />
        </div>
      </HeroSection>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Your Gateway to Entrepreneurship</h2>
              <p className="text-lg text-gray-700 mb-6">
                Are you a passionate student in auto and truck repair, eager to turn your skills into a thriving
                business venture? Look no further! Join our network and unlock the potential to start your own part-time
                or full-time business with the 24HR Truck Mechanic app, available on both iOS and Android.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our platform connects skilled student mechanics with customers needing truck and auto repair services,
                allowing you to build your client base while still in school and create a sustainable business model for
                your future.
              </p>
              <div className="mt-8 flex justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    GET STARTED
                  </Button>
                </Link>
              </div>
            </div>

            {/* Why Choose 24HR Truck Mechanic */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">Why Choose 24HR Truck Mechanic?</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Be Your Own Boss</h4>
                      <p className="text-gray-700">
                        Set your own hours, rates, and service areas. Take control of your career path while still in
                        school and build a business that grows with your skills.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Easy-to-Use App</h4>
                      <p className="text-gray-700">
                        Our mobile app handles scheduling, payments, and customer management, letting you focus on what
                        you do best—fixing trucks and vehicles.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Tool className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Ongoing Support</h4>
                      <p className="text-gray-700">
                        Access technical resources, business guidance, and a community of fellow mechanics to help you
                        overcome challenges and grow your skills.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Flexible Schedule</h4>
                      <p className="text-gray-700">
                        Balance your studies with your business. Accept jobs when you're available and build your client
                        base at your own pace.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">How It Works</h3>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      1
                    </div>
                    <h4 className="font-bold mb-2">Sign Up</h4>
                    <p className="text-gray-600">
                      Create your profile, list your skills, certifications, and the services you offer.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      2
                    </div>
                    <h4 className="font-bold mb-2">Get Connected</h4>
                    <p className="text-gray-600">
                      Customers in your area will see your profile and can request your services through the app.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      3
                    </div>
                    <h4 className="font-bold mb-2">Grow Your Business</h4>
                    <p className="text-gray-600">
                      Complete jobs, earn great reviews, and watch your client base and income grow.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">Success Stories</h3>
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
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 text-lg italic mb-6">
                  "I started using the 24HR Truck Mechanic platform during my second year of diesel tech school. What
                  began as a way to make extra money on weekends has grown into a full-fledged business with regular
                  clients and steady income. The app made it easy to manage everything, and now I'm hiring other
                  students to help with the workload. This platform literally changed my career trajectory."
                </p>
                <div className="font-bold">Marcus J.</div>
                <div className="text-gray-600">Diesel Tech Student turned Business Owner</div>
              </div>
            </div>

            {/* Services You Can Offer */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Services You Can Offer</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Wrench className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Basic Maintenance</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Oil changes and fluid checks</li>
                        <li>Filter replacements</li>
                        <li>Brake inspections and repairs</li>
                        <li>Light electrical work</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Tool className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Diagnostic Services</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Computer diagnostics</li>
                        <li>Check engine light investigation</li>
                        <li>Performance testing</li>
                        <li>System troubleshooting</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Wrench className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Repair Services</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Engine repairs</li>
                        <li>Transmission work</li>
                        <li>Suspension and steering</li>
                        <li>Cooling system repairs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Tool className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Specialty Services</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Performance upgrades</li>
                        <li>Custom modifications</li>
                        <li>Fleet maintenance</li>
                        <li>Pre-purchase inspections</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Requirements to Join</h3>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold">Current Enrollment</span>
                      <p className="text-gray-600">
                        You must be currently enrolled in an automotive or diesel technology program.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold">Basic Tools</span>
                      <p className="text-gray-600">
                        Access to basic tools and equipment needed for the services you plan to offer.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold">Smartphone</span>
                      <p className="text-gray-600">
                        A compatible iOS or Android device to run the 24HR Truck Mechanic app.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold">Transportation</span>
                      <p className="text-gray-600">
                        Reliable transportation to reach customer locations (for mobile services).
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold">Passion & Dedication</span>
                      <p className="text-gray-600">
                        A commitment to providing quality service and building your business.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-primary/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Ready to Launch Your Business?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Join the 24HR Truck Mechanic network today and start building your future while still in school.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                    Sign Up Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
