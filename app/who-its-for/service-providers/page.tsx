import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Wrench, DollarSign, Calendar, Users, BarChart3 } from "lucide-react"
import { HeroSection } from "@/components/hero-section"

// Import the GallopEffect component
// import { GallopEffect } from "@/components/gallop-effect"

// Update the metadata
export const metadata = {
  title: "For Owner Operators & Mechanics | 24Hr Truck Services & AI Concierge",
  description:
    "Join our network of skilled mechanics and service providers to grow your business and connect with customers nationwide.",
}

export default function ServiceProvidersPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="24Hr Truck Services & AI Concierge for Owner Operators & Mechanics"
        description="Join our nationwide network of skilled mechanics and grow your business with steady work and streamlined operations."
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
              <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
              <p className="text-lg text-gray-700 mb-6">
                As a mechanic or owner operator in the commercial truck industry, finding consistent work and managing
                your business can be challenging. 24HR Truck Fix offers you the opportunity to join our nationwide
                network of skilled professionals, connecting you with customers who need your expertise.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our platform streamlines the entire process—from job assignment to payment—allowing you to focus on what
                you do best: providing quality repair and maintenance services to truck drivers and fleet managers.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Key Benefits for Owner Operators</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <DollarSign className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Steady Income</h4>
                      <p className="text-gray-700">
                        Access a consistent stream of service requests from our nationwide customer base, helping you
                        build a stable business.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Flexible Scheduling</h4>
                      <p className="text-gray-700">
                        Choose when you're available for work and what types of jobs you want to accept, maintaining
                        control over your schedule.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Customer Acquisition</h4>
                      <p className="text-gray-700">
                        We handle marketing and customer acquisition, bringing you pre-qualified customers without the
                        hassle and expense.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Business Tools</h4>
                      <p className="text-gray-700">
                        Access our owner operator platform with digital invoicing, payment processing, and business
                        analytics to streamline your operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">How It Works for Owner Operators</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ol className="space-y-6">
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Apply to Join</h4>
                      <p className="text-gray-700">
                        Complete our application process, including verification of your qualifications, experience, and
                        insurance coverage.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Set Your Availability</h4>
                      <p className="text-gray-700">
                        Once approved, set your service area, availability hours, and the types of repairs you
                        specialize in through our owner operator portal.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Receive Job Requests</h4>
                      <p className="text-gray-700">
                        Get notified of service requests in your area that match your skills and availability. Accept
                        the jobs that work for you.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Perform Quality Work</h4>
                      <p className="text-gray-700">
                        Complete the repairs or maintenance according to our quality standards, documenting your work
                        through our app.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Get Paid Quickly</h4>
                      <p className="text-gray-700">
                        Receive payment for your services through our secure payment system, with faster processing than
                        traditional methods.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Requirements */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Owner Operator Requirements</h3>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <p className="text-lg text-gray-700 mb-6">
                  To join our network of owner operators, you'll need to meet the following requirements:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Minimum 3 years experience in commercial truck repair</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Relevant certifications (ASE, manufacturer-specific, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Business liability insurance ($1M minimum coverage)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Proper tools and equipment for mobile repairs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Smartphone with reliable internet connection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Clean background check and driving record</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Commitment to quality service and professionalism</span>
                  </li>
                </ul>
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
                  "Joining the 24HR Truck Fix network was the best business decision I've made. Before, I was spending
                  too much time and money trying to find customers. Now, I get a steady stream of jobs that match my
                  skills, and the platform handles all the paperwork and payments. My income has increased by 35%, and I
                  have more time to focus on quality repairs."
                </p>
                <div className="font-bold">James W.</div>
                <div className="text-gray-600">Mobile Diesel Technician, Phoenix, AZ</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Grow Your Service Business?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Join our network of skilled mechanics and start receiving job requests in your area.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">Apply to Join</Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto"
                  >
                    Request More Information
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
