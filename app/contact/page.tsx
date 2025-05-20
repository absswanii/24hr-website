import { MapPin, Phone, Mail, MessageSquare, Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { FadeIn } from "@/components/animations/fade-in"
import ContactForm from "./contact-form"

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
        showWave={true}
      />

      <section className="py-16 bg-background">
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
                <a
                  href="tel:+13022731234"
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +1 302 273-1234
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
                <a
                  href="mailto:concierge@24hrtruckfix.com"
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 transition-colors"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 transition-colors"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
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
              <div className="bg-card p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">SEND A MESSAGE</h3>
                </div>

                <ContactForm />
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
                <a href="/services" target="_blank" rel="noopener noreferrer">
                  REQUEST A DEMO
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
