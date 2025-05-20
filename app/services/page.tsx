import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, Car, Clock, Shield, Key, Battery, Fuel, Truck, PhoneCall, MapPin, Users } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { HoverCard } from "@/components/animations/hover-card"
import { GallopEffect } from "@/components/gallop-effect"
import { WaveDivider } from "@/components/wave-divider"

// Update the metadata
export const metadata = {
  title: "Roadside Assistance & Mobile Mechanic Services | 24Hr Services",
  description:
    "24/7 roadside assistance including towing, jump starts, tire changes, lockouts, and mobile mechanic services for all vehicles.",
}

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary hero-pattern py-16 md:py-24 relative">
        <div className="container mx-auto px-4 text-center text-white">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-title">Roadside Assistance & Mobile Repairs</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              24/7 emergency services for all vehicles - cars, trucks, SUVs, and commercial vehicles. Help is just a
              call away.
            </p>
          </FadeIn>
        </div>
        <GallopEffect />

        {/* Wave divider with theme-aware color */}
        <WaveDivider className="h-16 z-10" />
      </section>

      {/* Core Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fast, reliable roadside assistance and mobile repair services for all vehicles, available 24/7.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Towing Service */}
            <StaggerItem>
              <HoverCard>
                <Card className="h-full" id="towing">
                  <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                      <Truck className="text-primary w-7 h-7" />
                    </div>
                    <CardTitle className="text-xl font-bold">Towing Service</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Professional towing for all vehicle types. Our network of tow trucks can handle everything from
                      compact cars to heavy-duty trucks.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Local and long-distance towing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Flatbed and wheel-lift towing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Accident recovery</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Winching services</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Badge className="bg-primary/10 text-primary">24/7 Available</Badge>
                  </CardFooter>
                </Card>
              </HoverCard>
            </StaggerItem>

            {/* Jump Start */}
            <StaggerItem>
              <HoverCard>
                <Card className="h-full" id="jump-start">
                  <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                      <Battery className="text-primary w-7 h-7" />
                    </div>
                    <CardTitle className="text-xl font-bold">Jump Start & Battery Service</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Dead battery? We'll get you powered up and back on the road quickly with our professional jump
                      start service.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Jump start service</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Battery testing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Battery replacement</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Electrical system check</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Badge className="bg-primary/10 text-primary">Fast Response</Badge>
                  </CardFooter>
                </Card>
              </HoverCard>
            </StaggerItem>

            {/* Tire Change */}
            <StaggerItem>
              <HoverCard>
                <Card className="h-full" id="tire-change">
                  <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                      <svg
                        className="text-primary w-7 h-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
                        <path d="M12 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 19V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M2 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M19 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <CardTitle className="text-xl font-bold">Tire Change & Repair</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Flat tire? Our technicians will quickly replace your flat with your spare or repair it on the spot
                      when possible.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Flat tire change</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Tire plug/patch repair</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Tire pressure check</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>New tire delivery and installation</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Badge className="bg-primary/10 text-primary">All Vehicle Types</Badge>
                  </CardFooter>
                </Card>
              </HoverCard>
            </StaggerItem>

            {/* Lockout Service */}
            <StaggerItem>
              <HoverCard>
                <Card className="h-full" id="lockout">
                  <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                      <Key className="text-primary w-7 h-7" />
                    </div>
                    <CardTitle className="text-xl font-bold">Lockout Service</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Locked your keys in your vehicle? Our technicians use professional tools to safely unlock your
                      door without damage.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Vehicle lockout assistance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Broken key extraction</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Trunk unlocking</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Key replacement referrals</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Badge className="bg-primary/10 text-primary">Damage-Free</Badge>
                  </CardFooter>
                </Card>
              </HoverCard>
            </StaggerItem>

            {/* Fuel Delivery */}
            <StaggerItem>
              <HoverCard>
                <Card className="h-full" id="fuel-delivery">
                  <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                      <Fuel className="text-primary w-7 h-7" />
                    </div>
                    <CardTitle className="text-xl font-bold">Fuel Delivery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Run out of gas? We'll deliver fuel directly to your location so you can get back on the road
                      quickly.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Gasoline delivery</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Diesel fuel delivery</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>DEF fluid delivery</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Emergency fuel system diagnosis</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Badge className="bg-primary/10 text-primary">Quick Delivery</Badge>
                  </CardFooter>
                </Card>
              </HoverCard>
            </StaggerItem>

            {/* Mobile Mechanic */}
            <StaggerItem>
              <HoverCard>
                <Card className="h-full" id="mobile-mechanic">
                  <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                      <Wrench className="text-primary w-7 h-7" />
                    </div>
                    <CardTitle className="text-xl font-bold">Mobile Service Provider</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Our mobile service providers bring the repair shop to you, performing diagnostics and repairs at
                      your location.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>On-site diagnostics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Minor repairs and maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Belt and hose replacement</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Fluid leaks and electrical issues</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Badge className="bg-primary/10 text-primary">All Vehicles</Badge>
                  </CardFooter>
                </Card>
              </HoverCard>
            </StaggerItem>
          </StaggerContainer>

          {/* 24/7 Availability Highlight */}
          <FadeIn>
            <div className="bg-primary/5 rounded-xl p-8 text-center mb-16">
              <Clock className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">24/7 Emergency Response</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our services are available 24 hours a day, 7 days a week, 365 days a year. No matter when you need help,
                we're just a phone call away.
              </p>
            </div>
          </FadeIn>

          {/* Mobile Mechanic Feature */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <FadeIn direction="left">
              <div>
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Wrench className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Mobile Service Provider Services</h3>
                <p className="text-gray-600 mb-4">
                  Our mobile service providers bring the repair shop to your location, whether you're at home, work, or
                  stranded on the road. We service all vehicle types including cars, SUVs, trucks, and commercial
                  vehicles.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Diagnostic services using advanced equipment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Battery replacement and electrical repairs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Brake system repairs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Starter and alternator replacement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Cooling system repairs</span>
                  </li>
                </ul>
                <a href="#mobile-mechanic">
                  <Button className="bg-primary hover:bg-primary/90">Learn More</Button>
                </a>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <Image
                  src="/mobile-truck-repair.png"
                  alt="Mobile mechanic service"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </FadeIn>
          </div>

          {/* Roadside Assistance Feature */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <FadeIn direction="left" className="order-2 md:order-1">
              <div>
                <Image
                  src="/roadside-assistance-truck.png"
                  alt="24/7 Roadside assistance"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" className="order-1 md:order-2">
              <div>
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <PhoneCall className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Roadside Assistance</h3>
                <p className="text-gray-600 mb-4">
                  When you're stranded on the road, our emergency roadside assistance provides fast, reliable help.
                  Available 24/7/365, we ensure you're never left waiting when breakdowns occur.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Average response time under 45 minutes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>GPS tracking of service vehicles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Real-time status updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Service for all vehicle types</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Nationwide coverage</span>
                  </li>
                </ul>
                <a href="#towing">
                  <Button className="bg-primary hover:bg-primary/90">Learn More</Button>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our services are designed for everyone on the road, from individual drivers to large fleets.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggerItem>
              <HoverCard>
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Car className="text-primary w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Individual Drivers</h3>
                  <p className="text-gray-600">
                    Reliable roadside assistance and mobile repair services for personal vehicles of all types.
                  </p>
                </div>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard>
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Truck className="text-primary w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Commercial Drivers</h3>
                  <p className="text-gray-600">
                    Specialized services for commercial vehicles, including trucks, delivery vans, and service vehicles.
                  </p>
                </div>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard>
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Users className="text-primary w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Fleet Managers</h3>
                  <p className="text-gray-600">
                    Comprehensive fleet solutions to keep your vehicles on the road and minimize downtime.
                  </p>
                </div>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard>
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Shield className="text-primary w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Insurance Partners</h3>
                  <p className="text-gray-600">
                    Trusted roadside assistance and repair services for insurance policy holders.
                  </p>
                </div>
              </HoverCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Coverage Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide nationwide coverage with particular strength in major transportation corridors and metropolitan
              areas.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="text-primary w-8 h-8 mr-4" />
                  <h3 className="text-2xl font-bold">Nationwide Coverage</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Our network of skilled technicians spans across the United States, providing reliable service wherever
                  you are. We're continuously expanding our coverage to ensure prompt service in all regions.
                </p>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">Major Coverage Areas Include:</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span>
                        <span>Northeast Corridor</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span>
                        <span>Mid-Atlantic Region</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span>
                        <span>Southeast States</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span>
                        <span>Florida</span>
                      </li>
                    </ul>

                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span>
                        <span>Midwest Region</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span>
                        <span>Great Lakes Area</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span>
                        <span>Texas & Gulf Coast</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span>
                        <span>Southwest Region</span>
                      </li>
                    </ul>

                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span>
                        <span>Rocky Mountain States</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span>
                        <span>West Coast</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span>
                        <span>Pacific Northwest</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span>
                        <span>California</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-600">
                  For specific coverage information in your area, please contact our customer service team or check our
                  online coverage map.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary hero-pattern">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Roadside Assistance?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              We're available 24/7 to help you get back on the road. Call us now or request service online.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/get-started">
                <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 text-lg font-bold w-full sm:w-auto">
                  REQUEST SERVICE
                </Button>
              </Link>
              <Link href="tel:+13022731234">
                <Button className="bg-white hover:bg-gray-100 text-primary px-8 py-3 text-lg font-bold w-full sm:w-auto">
                  CALL NOW
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
