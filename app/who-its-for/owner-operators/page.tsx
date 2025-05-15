import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Clock, DollarSign, TrendingUp, ShieldCheck } from "lucide-react"
import { HeroSection } from "@/components/hero-section"

// Update the metadata
export const metadata = {
  title: "For Owner Operators | 24Hr Truck Services & AI Concierge",
  description:
    "Discover how 24Hr Truck Services & AI Concierge helps owner operators maximize revenue, reduce downtime, and grow their business.",
}

export default function OwnersProvidersPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="24Hr Truck Services & AI Concierge for Owner Operators"
        description="Maximize your revenue, reduce downtime, and grow your business with our comprehensive support services."
        showWave={true}
      >
        <div className="inline-block bg-white/10 p-3 rounded-full mb-4">
          <Users className="h-8 w-8 text-white" />
        </div>
      </HeroSection>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Supporting Owner Operators</h2>
              <p className="text-lg text-gray-700 mb-6">
                As an owner operator in the trucking industry, your success depends on keeping your trucks on the road
                and maximizing revenue. 24Hr Truck Services & AI Concierge understands the unique challenges you face
                and offers tailored solutions to help you thrive.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Whether you own a single truck or a small fleet, our nationwide network of skilled technicians and
                comprehensive support services are designed to minimize downtime, reduce maintenance costs, and help you
                focus on growing your business.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Owner Operator Specific Value</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Minimize Downtime</h4>
                      <p className="text-gray-700">
                        Our 24/7 emergency service and nationwide coverage ensure your trucks get back on the road
                        quickly, protecting your revenue stream.
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
                      <h4 className="text-xl font-bold mb-2">Reduce Operating Costs</h4>
                      <p className="text-gray-700">
                        Competitive rates, transparent pricing, and preventive maintenance programs help you control and
                        reduce your overall maintenance expenses.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Business Growth</h4>
                      <p className="text-gray-700">
                        With reliable maintenance support, you can focus on expanding your operations and taking on more
                        contracts with confidence.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Compliance Support</h4>
                      <p className="text-gray-700">
                        Our maintenance documentation and inspection services help ensure you remain DOT compliant,
                        avoiding costly violations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services for Owner Providers */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Tailored Services for Owner Providers</h3>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
                <p className="text-lg text-gray-700 mb-6">
                  We offer a range of services specifically designed to meet the needs of owner providers:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold">24/7 Emergency Repairs</span>
                      <p className="text-gray-600">
                        Immediate assistance whenever and wherever you need it, minimizing costly downtime.
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
                      <span className="font-bold">Preventive Maintenance Programs</span>
                      <p className="text-gray-600">
                        Customized maintenance schedules to prevent breakdowns and extend vehicle life.
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
                      <span className="font-bold">DOT Compliance Support</span>
                      <p className="text-gray-600">
                        Regular inspections and documentation to ensure regulatory compliance.
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
                      <span className="font-bold">Maintenance History Tracking</span>
                      <p className="text-gray-600">
                        Comprehensive digital records of all maintenance and repairs for your vehicles.
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
                      <span className="font-bold">Cost Management Tools</span>
                      <p className="text-gray-600">
                        Tools to help you track and analyze maintenance expenses for better budgeting.
                      </p>
                    </div>
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
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 text-lg italic mb-6">
                  "As an owner-operator with three trucks, keeping my vehicles on the road is critical to my business.
                  24HR Truck Fix has been a game-changer. Their nationwide coverage means my drivers get the same
                  quality service no matter where they are, and their preventive maintenance program has significantly
                  reduced our unexpected breakdowns. I've been able to take on more contracts with confidence."
                </p>
                <div className="font-bold">Carlos R.</div>
                <div className="text-gray-600">Owner Provider, CR Logistics</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Grow Your Business?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Contact us today to discuss how our services can help you reduce downtime and maximize your revenue.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">Schedule a Consultation</Button>
                </Link>
                <Link href="/who-its-for/owner-operators">
                  <Button className="bg-primary hover:bg-primary/90">Learn More About Owner Operator Solutions</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
