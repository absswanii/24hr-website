import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2, CheckCircle2, FileText, BarChart3, Shield } from "lucide-react"
// Import the GallopEffect component
// import { GallopEffect } from "@/components/gallop-effect"
import { HeroSection } from "@/components/hero-section"

// Update the metadata
export const metadata = {
  title: "For Insurance Companies | 24Hr Truck Services & AI Concierge",
  description:
    "Discover how 24Hr Truck Services & AI Concierge helps insurance companies streamline claims processing and reduce costs for commercial truck repairs.",
}

export default function InsuranceCompanyPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="24Hr Concierge for Insurance Companies"
        description="Streamline claims processing, reduce costs, and provide better service to your commercial trucking clients."
        showWave={true}
      >
        <div className="inline-block bg-white/10 p-3 rounded-full mb-4">
          <Building2 className="h-8 w-8 text-white" />
        </div>
      </HeroSection>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">How We Help Insurance Companies</h2>
              <p className="text-lg text-gray-700 mb-6">
                At 24hr Concierge, we understand the unique challenges insurance companies face when handling commercial
                truck claims. Our nationwide network of qualified technicians and streamlined processes help you reduce
                costs, expedite claims, and improve customer satisfaction.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our platform connects insurance adjusters directly with skilled mechanics, eliminating middlemen and
                reducing administrative overhead. This results in faster repairs, more accurate estimates, and
                ultimately, lower claim costs.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Key Benefits for Insurance Companies</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Streamlined Claims Processing</h4>
                      <p className="text-gray-700">
                        Our digital platform provides real-time documentation, photos, and repair updates, reducing
                        paperwork and accelerating claims processing.
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
                      <h4 className="text-xl font-bold mb-2">Cost Reduction</h4>
                      <p className="text-gray-700">
                        Our network of pre-vetted mechanics offers competitive rates and transparent pricing, helping
                        reduce overall claim costs.
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
                      <h4 className="text-xl font-bold mb-2">Fraud Prevention</h4>
                      <p className="text-gray-700">
                        Our verification processes and detailed documentation help prevent fraudulent claims and
                        unnecessary repairs.
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
                      <h4 className="text-xl font-bold mb-2">Quality Assurance</h4>
                      <p className="text-gray-700">
                        All repairs are performed by certified technicians and backed by our satisfaction guarantee,
                        reducing the risk of repeat claims.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">How It Works for Insurance Companies</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ol className="space-y-6">
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Partnership Setup</h4>
                      <p className="text-gray-700">
                        We establish a customized partnership with your insurance company, integrating our systems with
                        yours for seamless claims processing.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Claim Submission</h4>
                      <p className="text-gray-700">
                        When a claim is filed, your adjusters can quickly dispatch a qualified technician through our
                        platform, with full visibility into availability and estimated arrival times.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Assessment and Approval</h4>
                      <p className="text-gray-700">
                        Our technicians provide detailed assessments with photos and cost estimates, allowing for quick
                        approval through our digital platform.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Repair and Documentation</h4>
                      <p className="text-gray-700">
                        Once approved, repairs are completed with real-time updates and comprehensive documentation for
                        your records.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Billing and Reporting</h4>
                      <p className="text-gray-700">
                        We provide consolidated billing and detailed reporting, making it easy to track costs and
                        analyze trends across all claims.
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
                  "Partnering with 24HR Truck Fix has transformed our commercial truck claims process. We've reduced our
                  average claim processing time by 40% and seen a significant decrease in repair costs. Their nationwide
                  network ensures our clients get fast service no matter where they are."
                </p>
                <div className="font-bold">Jennifer R.</div>
                <div className="text-gray-600">Claims Director, National Insurance Provider</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Streamline Your Commercial Truck Claims?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Contact us today to discuss how we can create a customized solution for your insurance company.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-primary text-white border-2 border-primary hover:bg-white hover:text-black hover:border-primary dark:hover:bg-gray-900 dark:hover:text-white w-full sm:w-auto">
                  Schedule a Consultation
                </Button>
                <Link href="/pricing">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto"
                  >
                    View Partnership Options
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
