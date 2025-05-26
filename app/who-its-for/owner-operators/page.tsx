import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, DollarSign, TrendingUp, ShieldCheck, Truck, PenToolIcon as Tool, FileCheck } from "lucide-react"

// Update the metadata
export const metadata = {
  title: "For Owner Operators | 24Hr Truck Services & AI Concierge",
  description:
    "Discover how 24Hr Concierge helps owner operators maximize revenue, reduce downtime, and grow their business with nationwide mobile truck repair services.",
}

export default function OwnersProvidersPage() {
  return (
    <>
      {/* Custom Hero Section with wave divider */}
      <section className="bg-primary py-16 md:py-24 relative">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">24Hr Concierge for Owner Operators</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-white">
            Maximize your revenue, reduce downtime, and grow your business with our nationwide mobile truck repair
            services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">Get Started</Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Wave divider with reduced height */}
        <div className="absolute -bottom-[2px] left-0 w-full overflow-hidden line-height-0" style={{ height: "40px" }}>
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-background"
            ></path>
          </svg>
        </div>
      </section>

      {/* Rest of the content remains the same */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Supporting Owner Operators Nationwide</h2>
              <p className="text-lg text-gray-700 mb-6">
                As an owner operator in the trucking industry, your success depends on keeping your trucks on the road
                and maximizing revenue. Our 24Hr Concierge service understands the unique challenges you face and offers
                tailored solutions to help you thrive.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With our nationwide network of skilled service providers and 24/7 availability, we ensure you get the
                help you need, when and where you need it. Our goal is to minimize your downtime, reduce maintenance
                costs, and help you focus on growing your business.
              </p>
            </div>

            {/* Service Highlights */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8">Our Mobile Truck Repair Services</h3>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold">Mobile Truck Repair</h4>
                  </div>
                  <p className="text-gray-700">
                    Our service providers come to your location, whether you're on the road, at a truck stop, or at your
                    home base. We handle everything from emergency roadside repairs to scheduled maintenance, saving you
                    the time and hassle of taking your truck to a shop.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Tool className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold">Comprehensive Repairs</h4>
                  </div>
                  <p className="text-gray-700">
                    Our network of service providers can handle a wide range of repairs and maintenance services,
                    including engine diagnostics, electrical systems, brake systems, cooling systems, and more. We use
                    quality parts and follow manufacturer specifications.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-12">
                <div className="flex items-start mb-4">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <FileCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold">Preventive Maintenance Programs</h4>
                </div>
                <p className="text-gray-700 mb-4">
                  Regular maintenance is crucial for preventing costly breakdowns and extending the life of your truck.
                  Our preventive maintenance programs are designed specifically for owner operators and include:
                </p>
                <ul className="space-y-2 text-gray-700 ml-6 list-disc">
                  <li>Comprehensive inspections</li>
                  <li>Fluid checks and changes</li>
                  <li>Filter replacements</li>
                  <li>Brake system maintenance</li>
                  <li>Electrical system checks</li>
                  <li>Cooling system maintenance</li>
                  <li>Detailed documentation for compliance</li>
                </ul>
              </div>

              <div className="relative rounded-xl overflow-hidden mb-12">
                <img
                  src="/mobile-truck-repair.png"
                  alt="Mobile truck repair service"
                  className="w-full h-[400px] object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
                  <div className="text-white p-8 max-w-md">
                    <h3 className="text-2xl font-bold mb-4">Nationwide Coverage</h3>
                    <p className="text-lg">
                      No matter where your routes take you, our network of service providers ensures you're never far
                      from help.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Owner Operator Specific Benefits</h3>
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
                        quickly, protecting your revenue stream and helping you meet delivery deadlines.
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
                        Our preventive maintenance programs help you avoid costly breakdowns and extend the life of your
                        equipment, reducing your overall maintenance expenses and improving your bottom line.
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
                        contracts with confidence, knowing your equipment will be ready when you need it.
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
                        avoiding costly violations and keeping your safety rating in good standing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">How Our Concierge Service Works</h3>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
                <ol className="space-y-6">
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Contact Our 24/7 Concierge</h4>
                      <p className="text-gray-700">
                        Call our dedicated number or use our mobile app to request service. Our concierge team is
                        available 24/7.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Describe Your Issue</h4>
                      <p className="text-gray-700">
                        Explain your truck's problem and provide your location. Our team will assess your needs and find
                        the right service provider.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Service Provider Dispatch</h4>
                      <p className="text-gray-700">
                        We'll dispatch a qualified service provider to your location with the right tools and parts to
                        address your issue.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Problem Resolution</h4>
                      <p className="text-gray-700">
                        The service provider will diagnose and repair your truck, getting you back on the road as
                        quickly as possible.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Documentation & Follow-up</h4>
                      <p className="text-gray-700">
                        You'll receive detailed documentation of the service performed, and our team will follow up to
                        ensure your satisfaction.
                      </p>
                    </div>
                  </li>
                </ol>
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
                  24Hr Truck Fix has been a game-changer. Their nationwide coverage means my drivers get the same
                  quality service no matter where they are, and their preventive maintenance program has significantly
                  reduced our unexpected breakdowns. I've been able to take on more contracts with confidence."
                </p>
                <div className="font-bold">Carlos R.</div>
                <div className="text-gray-600">Owner Operator, CR Logistics</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Keep Your Trucks Rolling?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Contact us today to discuss how our 24Hr Concierge service can help you reduce downtime and maximize
                your revenue.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="https://scheduler.zoom.us/aaron-swan/ai_for_business"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary hover:bg-white dark:hover:bg-gray-900 hover:text-black dark:hover:text-white text-white border-2 border-primary hover:border-primary w-full sm:w-auto">
                    Schedule a Consultation
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto"
                  >
                    Explore Our Services
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
