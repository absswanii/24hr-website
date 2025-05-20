import { LogoCarousel } from "@/components/logo-carousel"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

export default function PartnersPage() {
  return (
    <main className="min-h-screen">
      <section className="py-20 bg-primary hero-pattern">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 hero-title">
            Our Trusted Partners
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            We're proud to collaborate with industry leaders to deliver excellent service across the nation.
          </p>
        </div>
      </section>

      <LogoCarousel />

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Partner With Us</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                At 24Hr Concierge, we believe in the power of partnership. By joining forces with industry leaders, we
                can provide better service to our mutual customers and grow together in this ever-evolving industry.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Our partners benefit from:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Increased business opportunities through our nationwide network</li>
                <li>Access to our 24/7 dispatch system and professional support team</li>
                <li>Co-marketing opportunities and brand visibility</li>
                <li>Seamless integration with your existing systems</li>
                <li>Regular payment schedules and transparent business practices</li>
              </ul>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Whether you're a service provider, insurance company, fleet management solution, or another
                complementary business, we'd love to explore how we can work together to better serve the trucking
                industry.
              </p>
              <div className="text-center">
                <a
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md inline-block transition-all"
                >
                  Become a Partner
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
