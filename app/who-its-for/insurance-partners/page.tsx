import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, FileText, BarChart3, Shield, Users } from "lucide-react"
import { HeroSection } from "@/components/hero-section"

export const metadata = {
  title: "For Insurance Partners | 24Hr Roadside Assistance",
  description:
    "Enhance your policyholder experience with 24Hr Roadside Assistance's nationwide network, white-label solutions, and seamless claims integration.",
}

export default function InsurancePartnersPage() {
  return (
    <>
      {/* Hero Section with background image */}
      <HeroSection
        title="24Hr Concierge for Insurance Partners"
        description="Enhance your policyholder experience with our nationwide roadside assistance network and seamless integration options."
        showWave={true}
        backgroundImage="/insurance-claim-hero.png"
      >
        <div className="inline-block bg-white/10 p-3 rounded-full mb-4">
          <Shield className="h-8 w-8 text-white" />
        </div>
      </HeroSection>

      {/* Rest of the content remains the same */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Insurance Partnership Solutions</h2>
              <p className="text-lg text-gray-700 mb-6">
                In today's competitive insurance market, the quality of your roadside assistance program can
                significantly impact policyholder satisfaction and retention. 24Hr Roadside Assistance provides
                insurance companies with reliable, nationwide coverage and seamless integration options to enhance your
                service offerings.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our white-label solutions allow you to offer premium roadside assistance under your own brand, while our
                advanced technology platform provides real-time tracking, detailed documentation, and streamlined claims
                processing.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Key Benefits for Insurance Partners</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Enhanced Policyholder Experience</h4>
                      <p className="text-gray-700">
                        Provide your policyholders with fast, reliable roadside assistance that reflects positively on
                        your brand and increases satisfaction.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Streamlined Claims Processing</h4>
                      <p className="text-gray-700">
                        Our digital documentation and API integration capabilities simplify claims processing and reduce
                        administrative overhead.
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
                      <h4 className="text-xl font-bold mb-2">Comprehensive Reporting</h4>
                      <p className="text-gray-700">
                        Access detailed analytics on service usage, response times, and policyholder satisfaction to
                        optimize your roadside assistance program.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Nationwide Coverage</h4>
                      <p className="text-gray-700">
                        Offer your policyholders consistent, high-quality roadside assistance anywhere in the country
                        through our extensive service network.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partnership Options */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Partnership Options</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-bold mb-4">White-Label Solution</h4>
                  <p className="text-gray-700 mb-4">
                    Offer roadside assistance under your own brand with our fully customizable white-label solution.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Branded mobile app and web portal</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Customized service vehicle branding</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Branded communications</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Dedicated phone lines</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Custom reporting dashboards</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-bold mb-4">API Integration</h4>
                  <p className="text-gray-700 mb-4">
                    Seamlessly integrate our roadside assistance services with your existing systems and processes.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Direct integration with your claims system</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Real-time service status updates</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Automated documentation transfer</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Customizable workflow triggers</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-2">•</div>
                      <span>Secure data exchange protocols</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">How Our Insurance Partnership Works</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ol className="space-y-6">
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Integration Setup</h4>
                      <p className="text-gray-700">
                        We work with your team to establish the technical integration between our systems, whether
                        through API connections or a white-label implementation.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Service Request</h4>
                      <p className="text-gray-700">
                        When a policyholder needs assistance, they can request help through your app, website, or call
                        center. The request is instantly routed to our dispatch system.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Service Delivery</h4>
                      <p className="text-gray-700">
                        We dispatch the nearest qualified service provider to assist your policyholder, with real-time
                        GPS tracking and status updates available to both the policyholder and your systems.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Documentation</h4>
                      <p className="text-gray-700">
                        All service details, including photos, technician notes, and service times, are automatically
                        documented and shared with your claims system.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Reporting & Analytics</h4>
                      <p className="text-gray-700">
                        Access comprehensive reports on service usage, response times, and policyholder satisfaction
                        through our partner portal or via direct data feeds to your systems.
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
                  "Implementing 24Hr Roadside Assistance's white-label solution has transformed our policyholder
                  experience. Our roadside assistance satisfaction scores have increased by 47%, and the seamless
                  integration with our claims system has reduced our administrative costs. The real-time tracking
                  feature has been particularly popular with our policyholders, who appreciate knowing exactly when help
                  will arrive."
                </p>
                <div className="font-bold">Rebecca M.</div>
                <div className="text-gray-600">VP of Claims, Regional Insurance Provider</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Enhance Your Roadside Assistance Program?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Contact us today to discuss how our insurance partnership solutions can benefit your company and
                policyholders.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="https://scheduler.zoom.us/aaron-swan/ai_for_business"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">Schedule a Consultation</Button>
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
