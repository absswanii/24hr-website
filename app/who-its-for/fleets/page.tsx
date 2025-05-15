import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Truck, Clock, BarChart3, ClipboardCheck, Settings, Calendar } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
// Import the GallopEffect component
// import { GallopEffect } from "@/components/gallop-effect"

// Update the metadata
export const metadata = {
  title: "For Fleet Managers | 24Hr Truck Services & AI Concierge",
  description:
    "Discover how 24Hr Truck Services & AI Concierge helps fleet managers reduce downtime, control maintenance costs, and keep their trucks on the road.",
}

export default function FleetsPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="24Hr Truck Services & AI Concierge for Fleet Managers"
        description="Comprehensive maintenance solutions to reduce downtime, control costs, and keep your fleet running efficiently."
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
              <h2 className="text-3xl font-bold mb-6">Fleet Management Solutions</h2>
              <p className="text-lg text-gray-700 mb-6">
                Managing a fleet of commercial trucks comes with unique challenges. From unexpected breakdowns to
                scheduled maintenance, keeping your vehicles on the road requires reliable service partners who
                understand your business needs.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                24HR Truck Fix provides fleet managers with a comprehensive solution for all truck repair and
                maintenance needs. Our nationwide network of skilled technicians, combined with our advanced fleet
                management platform, helps you minimize downtime, control costs, and extend the life of your vehicles.
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
                      <h4 className="text-xl font-bold mb-2">Reduced Downtime</h4>
                      <p className="text-gray-700">
                        Our 24/7 service and nationwide coverage ensure your trucks get back on the road quickly,
                        minimizing costly downtime.
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
                      <h4 className="text-xl font-bold mb-2">Cost Control</h4>
                      <p className="text-gray-700">
                        Transparent pricing, consolidated billing, and preventive maintenance programs help you manage
                        and reduce overall maintenance costs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <ClipboardCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Compliance Management</h4>
                      <p className="text-gray-700">
                        Our detailed documentation and inspection services help ensure your fleet remains DOT compliant
                        at all times.
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
                      <h4 className="text-xl font-bold mb-2">Fleet Analytics</h4>
                      <p className="text-gray-700">
                        Gain valuable insights into your fleet's performance, maintenance patterns, and cost trends
                        through our comprehensive reporting tools.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fleet Management Platform */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Our Fleet Management Platform</h3>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
                <div className="aspect-video relative mb-6">
                  <Image
                    src="/fleet-management-software-trucks.png"
                    alt="24HR Truck Fix Fleet Management Platform"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Our advanced fleet management platform provides you with complete visibility and control over your
                  fleet's maintenance needs:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <span>Schedule and track preventive maintenance for your entire fleet</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <span>Receive real-time updates on repairs and service status</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <span>Access comprehensive maintenance history for each vehicle</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <span>Generate detailed reports on maintenance costs and trends</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <span>Manage and approve repair authorizations from anywhere</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service Plans */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Fleet Service Plans</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-bold mb-2">Basic Fleet</h4>
                  <p className="text-gray-600 mb-4">For small fleets (2-10 vehicles)</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>24/7 emergency repairs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Basic maintenance tracking</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Monthly reporting</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>10% discount on all services</span>
                    </li>
                  </ul>
                  <Link href="/pricing">
                    <Button className="w-full bg-primary hover:bg-primary/90">Learn More</Button>
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-primary transform scale-105 z-10">
                  <div className="bg-primary text-white py-1 px-4 rounded text-sm font-bold inline-block mb-2">
                    POPULAR
                  </div>
                  <h4 className="text-xl font-bold mb-2">Premium Fleet</h4>
                  <p className="text-gray-600 mb-4">For medium fleets (11-50 vehicles)</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Priority emergency response</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Preventive maintenance program</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Weekly reporting</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>15% discount on all services</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Dedicated account manager</span>
                    </li>
                  </ul>
                  <Link href="/pricing">
                    <Button className="w-full bg-primary hover:bg-primary/90">Learn More</Button>
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-bold mb-2">Enterprise Fleet</h4>
                  <p className="text-gray-600 mb-4">For large fleets (50+ vehicles)</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>VIP emergency response</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Custom maintenance programs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Real-time reporting</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>20% discount on all services</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Senior account executive</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Quarterly fleet analysis</span>
                    </li>
                  </ul>
                  <Link href="/pricing">
                    <Button className="w-full bg-primary hover:bg-primary/90">Learn More</Button>
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
                  "Since partnering with 24HR Truck Fix, we've reduced our fleet's downtime by 35% and cut maintenance
                  costs by 22%. Their nationwide coverage ensures our drivers get the same quality service no matter
                  where they are, and the fleet management platform gives me complete visibility into our maintenance
                  operations."
                </p>
                <div className="font-bold">Michael T.</div>
                <div className="text-gray-600">Fleet Manager, Interstate Logistics</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your Fleet Management?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Contact us today to discuss how we can create a customized fleet maintenance solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">Schedule a Consultation</Button>
                </Link>
                <Link href="/pricing">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto"
                  >
                    View Fleet Plans
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
