import { MapPin, Phone, Mail, MessageSquare, Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { FadeIn } from "@/components/animations/fade-in"

export const metadata = {
  title: "Contact Us | 24Hr Truck Services & AI Concierge",
  description:
    "Get in touch with 24Hr Truck Services & AI Concierge for truck repair services, roadside assistance, or any questions about our services.",
}

export default function Contact() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with our team for truck repair services, roadside assistance, or any questions you might have."
      />

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">GET IN TOUCH WITH OUR TEAM</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <FadeIn className="border border-gray-200 dark:border-gray-700 p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">PHONE</h3>
              <p className="text-gray-600 dark:text-gray-400">
                <a href="tel:+18004TRUCKS" className="hover:text-primary transition-colors">
                  1-800-4-TRUCKS
                </a>
              </p>
            </FadeIn>

            <FadeIn className="border border-gray-200 dark:border-gray-700 p-8 text-center" delay={0.1}>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">EMAIL</h3>
              <p className="text-gray-600 dark:text-gray-400">
                <a href="mailto:concierge@24hrtruckfix.com" className="hover:text-primary transition-colors">
                  concierge@24hrtruckfix.com
                </a>
              </p>
            </FadeIn>

            <FadeIn className="border border-gray-200 dark:border-gray-700 p-8 text-center" delay={0.2}>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">ADDRESS</h3>
              <p className="text-gray-600 dark:text-gray-400">
                300 Delaware Ave, Suite 210 #382
                <br />
                Wilmington DE 19801
              </p>
            </FadeIn>

            <FadeIn className="border border-gray-200 dark:border-gray-700 p-8 text-center" delay={0.3}>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">FOLLOW US</h3>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://facebook.com"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <FadeIn direction="left">
              <div className="h-[450px] w-full relative border border-gray-200 dark:border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.2273431372793!2d-75.54910492412929!3d39.74066597154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd413b2d77c3%3A0x9e5a376c69424db1!2s300%20Delaware%20Ave%2C%20Wilmington%2C%20DE%2019801!5e0!3m2!1sen!2sus!4v1683056723518!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="24HR Truck Fix Location"
                ></iframe>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-white dark:bg-gray-800 p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">SEND A MESSAGE</h3>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                        FIRST NAME
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                        LAST NAME
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        EMAIL
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        CONTACT NUMBER
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md"
                        placeholder="Contact number"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium mb-1">
                        CITY
                      </label>
                      <input
                        type="text"
                        id="city"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md"
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <label htmlFor="region" className="block text-sm font-medium mb-1">
                        REGION
                      </label>
                      <input
                        type="text"
                        id="region"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md"
                        placeholder="State/Region"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      MESSAGE
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="block text-sm font-medium mb-2">MAKE AN APPOINTMENT / SET A MEETING</p>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input type="radio" name="contactType" className="mr-2" />
                          <span>Message</span>
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="contactType" className="mr-2" />
                          <span>Call</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <p className="block text-sm font-medium mb-2">PREFERRED CONTACT</p>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input type="radio" name="preferredContact" className="mr-2" />
                          <span>Email</span>
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="preferredContact" className="mr-2" />
                          <span>Phone</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-2" />
                      <span className="text-sm">
                        By checking this box, you consent to receiving text messages from 24HrTruckServices. You can
                        reply STOP to opt-out at any time. For more details check our{" "}
                        <a href="/privacy-policy" className="text-primary hover:underline">
                          Privacy Policy
                        </a>
                        .
                      </span>
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    SEND MESSAGE
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">EXPLORE OUR SERVICES</h2>
              <p className="text-xl">Find out about our comprehensive range of services and how we can assist you.</p>
            </div>
            <div className="mt-6 md:mt-0">
              <Button asChild className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-8 py-6">
                <a href="/services">REQUEST A DEMO</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
