import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Car, Truck, Building2, Shield, CheckCircle2 } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { HoverCard } from "@/components/animations/hover-card"
import { HeroSection } from "@/components/hero-section"

export const metadata = {
  title: "Who It's For | 24Hr Roadside Assistance & Mobile Mechanic",
  description:
    "See how 24Hr Roadside Assistance serves personal vehicles, commercial drivers, fleet managers, and insurance partners with fast, reliable service nationwide.",
}

export default function WhoItsFor() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Who It's For"
        description="24Hr Roadside Assistance provides fast, reliable service for all types of vehicles and drivers, anywhere in the country."
      />

      {/* Customer Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services Are Perfect For</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're stranded with a flat tire or need emergency towing, our nationwide network of service
              providers is ready to help 24/7.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Personal Vehicles */}
            <StaggerItem>
              <HoverCard>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                  <div className="p-6">
                    <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <Car className="text-primary w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Personal Vehicles</h3>
                    <p className="text-gray-600 mb-6">
                      For everyday drivers who need fast, reliable roadside assistance when unexpected breakdowns occur.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Fast response under 45 minutes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Flat tire changes & jump starts</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Lockout services & fuel delivery</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Affordable towing options</span>
                      </li>
                    </ul>
                    <Link href="/services#roadside-assistance">
                      <Button className="w-full bg-primary hover:bg-primary/90">See Our Services</Button>
                    </Link>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>

            {/* Commercial Vehicles */}
            <StaggerItem>
              <HoverCard>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                  <div className="p-6">
                    <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <Truck className="text-primary w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Commercial Vehicles</h3>
                    <p className="text-gray-600 mb-6">
                      Specialized solutions for trucks, vans, and commercial vehicles that need to get back on the road
                      quickly.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Heavy-duty towing capabilities</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Mobile mechanic services</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Battery & electrical services</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Nationwide service coverage</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Priority commercial response</span>
                      </li>
                    </ul>
                    <Link href="/services#commercial">
                      <Button className="w-full bg-primary hover:bg-primary/90">Commercial Solutions</Button>
                    </Link>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>

            {/* Fleet Managers */}
            <StaggerItem>
              <HoverCard>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                  <div className="p-6">
                    <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <Building2 className="text-primary w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Fleet Managers</h3>
                    <p className="text-gray-600 mb-6">
                      Comprehensive roadside assistance solutions for businesses managing multiple vehicles.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Real-time GPS tracking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Consolidated billing options</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Service history reporting</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Volume service discounts</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Dedicated account manager</span>
                      </li>
                    </ul>
                    <Link href="/who-its-for/fleet-managers">
                      <Button className="w-full bg-primary hover:bg-primary/90">Fleet Solutions</Button>
                    </Link>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>

            {/* Insurance Partners */}
            <StaggerItem>
              <HoverCard>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                  <div className="p-6">
                    <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <Shield className="text-primary w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Insurance Partners</h3>
                    <p className="text-gray-600 mb-6">
                      Enhance your policyholder experience with our reliable roadside assistance network.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>White-label service options</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>API integration capabilities</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Detailed service documentation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Streamlined claims processing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Customer satisfaction tracking</span>
                      </li>
                    </ul>
                    <Link href="/who-its-for/insurance-partners">
                      <Button className="w-full bg-primary hover:bg-primary/90">Insurance Solutions</Button>
                    </Link>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real customers who've experienced our roadside assistance services.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {/* Personal Vehicle Testimonial */}
            <StaggerItem>
              <div className="bg-white p-6 rounded-lg shadow-md">
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
                <p className="text-gray-600 mb-4">
                  "I got a flat tire on the highway at night and was really worried. I called 24Hr Roadside Assistance
                  and they sent someone within 30 minutes. The technician was professional, changed my tire quickly, and
                  got me back on the road. The GPS tracking feature was amazing - I could see exactly when help would
                  arrive."
                </p>
                <div className="font-bold">Lisa M.</div>
                <div className="text-sm text-gray-500">Phoenix, AZ</div>
              </div>
            </StaggerItem>

            {/* Commercial Driver Testimonial */}
            <StaggerItem>
              <div className="bg-white p-6 rounded-lg shadow-md">
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
                <p className="text-gray-600 mb-4">
                  "As a delivery driver, my van is my livelihood. When it wouldn't start, I called 24Hr Roadside
                  Assistance. Their mobile mechanic diagnosed an alternator issue and fixed it on-site. I was back
                  making deliveries within hours instead of days. Their service saved me thousands in lost income."
                </p>
                <div className="font-bold">Carlos R.</div>
                <div className="text-sm text-gray-500">Delivery Driver</div>
              </div>
            </StaggerItem>

            {/* Fleet Manager Testimonial */}
            <StaggerItem>
              <div className="bg-white p-6 rounded-lg shadow-md">
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
                <p className="text-gray-600 mb-4">
                  "Managing a fleet of 30 vehicles used to be a logistical nightmare until we partnered with 24Hr
                  Roadside Assistance. Their real-time tracking, consolidated billing, and nationwide coverage have
                  reduced our downtime by 45%. The detailed reporting helps me identify recurring issues across our
                  fleet."
                </p>
                <div className="font-bold">Jennifer T.</div>
                <div className="text-sm text-gray-500">Fleet Manager, Express Delivery</div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose 24Hr Roadside Assistance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to getting you back on the road quickly with our nationwide network of service providers.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <svg className="text-primary w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">24/7 Availability</h3>
                <p className="text-gray-600">
                  Breakdowns don't follow a schedule. That's why we're available 24 hours a day, 7 days a week, 365 days
                  a year to help when you need it most.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <svg className="text-primary w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Fast Response Times</h3>
                <p className="text-gray-600">
                  Our average response time is under 45 minutes nationwide. We dispatch the closest qualified service
                  provider to your location to get you help fast.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <svg className="text-primary w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Nationwide Coverage</h3>
                <p className="text-gray-600">
                  Whether you're in a major city or on a rural highway, our extensive network of service providers
                  ensures you're covered anywhere in the country.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <svg className="text-primary w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Real-Time Tracking</h3>
                <p className="text-gray-600">
                  Our GPS tracking system lets you see exactly where your service provider is and when they'll arrive,
                  eliminating the stress of wondering when help will come.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <svg className="text-primary w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Verified Professionals</h3>
                <p className="text-gray-600">
                  All our service providers are thoroughly vetted, background-checked, and trained to handle a wide
                  range of vehicle issues with professionalism and care.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <svg className="text-primary w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
                <p className="text-gray-600">
                  No hidden fees or surprises. We provide clear, upfront pricing for all our services so you know
                  exactly what to expect before any work begins.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary hero-pattern">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Roadside Assistance Now?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Don't wait stranded on the side of the road. Our nationwide network of service providers is ready to help
              you 24/7.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 text-lg font-bold w-full sm:w-auto">
                  GET HELP NOW
                </Button>
              </Link>
              <Link href="/services">
                <Button className="bg-white hover:bg-gray-100 text-primary px-8 py-3 text-lg font-bold w-full sm:w-auto">
                  VIEW SERVICES
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
