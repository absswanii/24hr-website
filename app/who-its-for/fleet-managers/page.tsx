import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Truck, Clock, BarChart3, Settings, MapPin } from "lucide-react"
import { HeroSection } from "@/components/hero-section"

export const metadata = {
  title: "For Fleet Managers | 24Hr Roadside Assistance",
  description:
    "Discover how 24Hr Roadside Assistance helps fleet managers reduce vehicle downtime with nationwide coverage and real-time tracking.",
}

export default function FleetManagersPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="24Hr Concierge for Fleet Managers"
        description="Keep your fleet moving with our nationwide roadside assistance network and real-time vehicle tracking."
        showWave={true}
      >
        <div className="inline-block bg-white/10 p-3 rounded-full mb-4">
          <Truck className="h-8 w-8 text-white" />
        </div>
      </HeroSection>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Fleet Roadside Assistance Solutions</h2>
              <p className="text-lg text-gray-700 mb-6">
                When you manage a fleet of vehicles, unexpected breakdowns can disrupt schedules, delay deliveries, and
                impact your bottom line. 24Hr Roadside Assistance provides fleet managers with a comprehensive solution
                to minimize downtime and keep your vehicles on the road.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our nationwide network of service providers offers fast response times, real-time tracking, and detailed
                reporting to give you complete visibility and control over roadside events affecting your fleet.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Key Benefits for Fleet Managers</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Minimize Downtime</h4>
                      <p className="text-gray-700">
                        Our average response time of under 45 minutes nationwide helps get your vehicles back on the
                        road quickly, reducing costly downtime.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Nationwide Coverage</h4>
                      <p className="text-gray-700">
                        Whether your vehicles operate locally or across the country, our extensive network ensures
                        consistent service quality everywhere.
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
                      <h4 className="text-xl font-bold mb-2">Detailed Reporting</h4>
                      <p className="text-gray-700">
                        Access comprehensive reports on service history, response times, and costs to identify trends
                        and optimize your fleet operations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Settings className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Consolidated Billing</h4>
                      <p className="text-gray-700">
                        Simplify your accounting with a single monthly invoice for all roadside services across your
                        entire fleet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fleet Management Platform */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Real-Time Fleet Visibility</h3>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
                <div className="aspect-video relative mb-6">
                  <Image
                    src="/fleet-management-software-trucks.png"
                    alt="24HR Roadside Assistance Fleet Tracking Platform"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Our fleet management dashboard gives you complete visibility into roadside events affecting your
                  vehicles:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Real-time GPS tracking of service vehicles en route to your drivers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Live status updates on service progress and estimated completion times</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Digital documentation of services performed, including photos and technician notes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Customizable alerts for service requests, completions, and delays</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Exportable reports for service history, costs, and response times</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service Plans */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Fleet Service Plans</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-bold mb-2">Small Fleet</h4>
                  <p className="text-gray-600 mb-4">For fleets with 5-25 vehicles</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>24/7 roadside assistance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Basic GPS tracking</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Monthly service reports</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Consolidated monthly billing</span>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-primary hover:bg-primary/90">Get Quote</Button>
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-primary transform scale-105 z-10">
                  <div className="bg-primary text-white py-1 px-4 rounded text-sm font-bold inline-block mb-2">
                    POPULAR
                  </div>
                  <h4 className="text-xl font-bold mb-2">Medium Fleet</h4>
                  <p className="text-gray-600 mb-4">For fleets with 26-100 vehicles</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Priority dispatch response</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Advanced real-time tracking</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Weekly detailed reports</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Volume service discounts</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Dedicated account manager</span>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-primary hover:bg-primary/90">Get Quote</Button>
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-bold mb-2">Large Fleet</h4>
                  <p className="text-gray-600 mb-4">For fleets with 100+ vehicles</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>VIP emergency response</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Custom API integration</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Real-time analytics dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Maximum volume discounts</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Senior account executive</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Quarterly service reviews</span>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-primary hover:bg-primary/90">Get Quote</Button>
                  </Link>
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
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 text-lg italic mb-6">
                  "Before partnering with 24Hr Roadside Assistance, our drivers would be stranded for hours waiting for
                  help. Now, with their nationwide coverage and real-time tracking, our drivers are back on the road in
                  under an hour. The detailed reporting has helped us identify recurring issues with certain vehicles,
                  saving us thousands in preventable repairs."
                </p>
                <div className="font-bold">David L.</div>
                <div className="text-gray-600">Fleet Manager, National Delivery Services</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your Fleet's Roadside Assistance?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Contact us today to discuss a customized roadside assistance plan for your fleet.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">Request Fleet Quote</Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto"
                  >
                    View Services
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
