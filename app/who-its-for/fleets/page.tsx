import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Truck, Clock, BarChart3, Shield, Wrench, MapPin, HeadsetIcon as HeadsetMic } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { ServiceProviderCarousel } from "@/components/service-provider-carousel"

// Update the metadata
export const metadata = {
  title: "For Fleets | 24Hr Truck Services & AI Concierge",
  description:
    "24Hr Truck Services provides nationwide emergency roadside assistance, preventive maintenance, and repair services for commercial truck fleets.",
}

export default function FleetsPage() {
  return (
    <>
      {/* Hero Section without background image */}
      <HeroSection
        title="24Hr Concierge for Fleets"
        description="Nationwide emergency roadside assistance and maintenance services for your entire fleet, available 24/7/365."
        showWave={true}
      >
        <div className="inline-block bg-white/10 p-3 rounded-full mb-4">
          <Truck className="h-8 w-8 text-white" />
        </div>
      </HeroSection>

      {/* Main content section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Fleet Solutions That Keep You Moving</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                When you're managing a fleet of commercial trucks, every minute of downtime costs money. 24Hr Truck
                Services provides comprehensive emergency roadside assistance and maintenance services designed
                specifically for fleets of all sizes.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Our nationwide network of service providers ensures your drivers get the help they need, when they need
                it, no matter where they are. With our 24/7/365 service, you can rest assured that your fleet stays on
                the road and your business keeps moving.
              </p>
            </div>

            {/* Services Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8">Our Fleet Services</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start mb-4">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Wrench className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold">Emergency Roadside Repairs</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Our mobile technicians come to your driver's location to perform on-site repairs for breakdowns,
                    tire issues, electrical problems, and more. We get your trucks back on the road as quickly as
                    possible.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start mb-4">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold">Towing & Recovery</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    When on-site repairs aren't possible, our heavy-duty towing service will safely transport your
                    vehicle to the nearest repair facility. We handle all types of commercial vehicles, including semis,
                    box trucks, and specialized equipment.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start mb-4">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold">Preventive Maintenance</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Keep your fleet in optimal condition with our scheduled maintenance programs. We help you prevent
                    costly breakdowns and extend the life of your vehicles with regular inspections, fluid changes, and
                    component replacements.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start mb-4">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold">Nationwide Coverage</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    With service providers across all 50 states, we ensure your drivers receive consistent, high-quality
                    service no matter where they travel. One call connects you to our entire network of qualified
                    technicians.
                  </p>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8">How Our Fleet Service Works</h3>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <ol className="space-y-6">
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Driver Calls Our 24/7 Hotline</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        When a breakdown occurs, your driver calls our dedicated fleet service number. Our AI-powered
                        system immediately identifies them as part of your fleet.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">We Dispatch the Nearest Service Provider</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Our system locates the closest qualified technician or towing service and dispatches them to
                        your driver's location. Fleet managers receive real-time updates.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Service Is Performed</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Our technician arrives and performs the necessary repairs or towing service. All work is
                        documented and shared with your fleet management team.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Simplified Billing</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        All services are billed directly to your fleet account. You receive detailed reports of all
                        services performed, making expense tracking and management simple.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Why Fleets Choose 24Hr Truck Services</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Reduced Downtime</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Our average response time is under 60 minutes, getting your drivers back on the road quickly.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Cost Control</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Transparent pricing and consolidated billing help you manage maintenance expenses effectively.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <HeadsetMic className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">24/7 Support</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Our service center is staffed around the clock, ensuring help is always available.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mb-16">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
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
                <p className="text-gray-700 dark:text-gray-300 text-lg italic mb-6">
                  "24Hr Truck Services has been a game-changer for our fleet operations. Their response times are
                  incredible, and the quality of service is consistent across the country. Our drivers feel confident
                  knowing help is just a phone call away, and our maintenance costs have decreased significantly since
                  we started using their preventive maintenance program."
                </p>
                <div className="font-bold">Robert K.</div>
                <div className="text-gray-600 dark:text-gray-400">Operations Director, National Freight Systems</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Keep Your Fleet Moving?</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Contact us today to discuss how our fleet services can reduce your downtime and maintenance costs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">Schedule a Consultation</Button>
                </Link>
                <Link href="/pricing">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto dark:text-primary dark:hover:text-white"
                  >
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Provider Carousel Section */}
      <ServiceProviderCarousel />
    </>
  )
}
