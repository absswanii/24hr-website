import { ScrollReveal } from "@/components/animations/scroll-reveal"

export const metadata = {
  title: "Privacy Policy | 24Hr Truck",
  description: "Privacy Policy for 24Hr Truck roadside assistance and AI-powered dispatch services.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">Privacy Policy</h1>
              <p className="text-lg text-black dark:text-white">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">1. Information We Collect</h2>
                <div className="text-black dark:text-white space-y-4 text-base leading-relaxed">
                  <p>
                    We collect information you provide directly to us, such as when you create an account, request
                    roadside assistance, contact customer service, or communicate with us.
                  </p>
                  <p>
                    <span className="font-semibold">Personal Information:</span> Name, email address, phone number,
                    vehicle information, location data, and payment information.
                  </p>
                  <p>
                    <span className="font-semibold">Service Information:</span> Details about your roadside assistance
                    requests, service history, and preferences.
                  </p>
                  <p>
                    <span className="font-semibold">Technical Information:</span> IP address, browser type, device
                    information, and usage data when you use our website or mobile applications.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">2. How We Use Your Information</h2>
                <div className="text-black dark:text-white space-y-4 text-base leading-relaxed">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide roadside assistance and dispatch services</li>
                    <li>Process payments and manage your account</li>
                    <li>Communicate with you about services and updates</li>
                    <li>Improve our AI-powered dispatch system</li>
                    <li>Ensure safety and prevent fraud</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">3. Information Sharing</h2>
                <div className="text-black dark:text-white space-y-4 text-base leading-relaxed">
                  <p>We may share your information with:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <span className="font-semibold">Service Providers:</span> Towing companies, mechanics, and other
                      roadside assistance providers to fulfill your service requests
                    </li>
                    <li>
                      <span className="font-semibold">Insurance Partners:</span> When you authorize us to work with your
                      insurance company
                    </li>
                    <li>
                      <span className="font-semibold">Payment Processors:</span> To process transactions securely
                    </li>
                    <li>
                      <span className="font-semibold">Legal Requirements:</span> When required by law or to protect our
                      rights and safety
                    </li>
                  </ul>
                  <p>
                    We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">4. Data Security</h2>
                <div className="text-black dark:text-white space-y-4 text-base leading-relaxed">
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information
                    against unauthorized access, alteration, disclosure, or destruction. This includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication measures</li>
                    <li>Employee training on data protection</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">5. Location Data</h2>
                <div className="text-black dark:text-white space-y-4 text-base leading-relaxed">
                  <p>
                    Our services require location information to dispatch assistance to your exact location. We collect
                    location data only when:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You request roadside assistance</li>
                    <li>You explicitly consent to location tracking</li>
                    <li>Required for safety and emergency purposes</li>
                  </ul>
                  <p>
                    You can control location sharing through your device settings, but this may limit our ability to
                    provide services.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">6. AI and Automated Processing</h2>
                <div className="text-black dark:text-white space-y-4 text-base leading-relaxed">
                  <p>We use artificial intelligence and automated systems to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Match you with the most appropriate service provider</li>
                    <li>Estimate arrival times and service costs</li>
                    <li>Handle initial customer service inquiries</li>
                    <li>Detect and prevent fraudulent activities</li>
                  </ul>
                  <p>
                    You have the right to request human review of automated decisions that significantly affect you.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">7. Your Rights</h2>
                <div className="text-black dark:text-white space-y-4 text-base leading-relaxed">
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access and review your personal information</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Delete your account and personal information</li>
                    <li>Restrict or object to certain processing activities</li>
                    <li>Data portability (receive your data in a structured format)</li>
                    <li>Withdraw consent where processing is based on consent</li>
                  </ul>
                  <p>
                    To exercise these rights, contact us at{" "}
                    <a href="mailto:service@24hrtruckfix.com" className="text-primary hover:underline font-medium">
                      service@24hrtruckfix.com
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">8. Data Retention</h2>
                <div className="text-black dark:text-white space-y-4 text-base leading-relaxed">
                  <p>
                    We retain your personal information for as long as necessary to provide services and fulfill legal
                    obligations. Typically:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Account information: Until account deletion</li>
                    <li>Service records: 7 years for business and legal purposes</li>
                    <li>Payment information: As required by financial regulations</li>
                    <li>Marketing communications: Until you unsubscribe</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">9. Cookies and Tracking</h2>
                <div className="text-black dark:text-white space-y-4 text-base leading-relaxed">
                  <p>
                    We use cookies and similar technologies to improve your experience, analyze usage, and provide
                    personalized content. You can control cookie preferences through your browser settings.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">10. Children's Privacy</h2>
                <div className="text-black dark:text-white space-y-4 text-base leading-relaxed">
                  <p>
                    Our services are not intended for children under 18. We do not knowingly collect personal
                    information from children under 18. If you believe we have collected such information, please
                    contact us immediately.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">11. International Transfers</h2>
                <div className="text-black dark:text-white space-y-4 text-base leading-relaxed">
                  <p>
                    Your information may be transferred to and processed in countries other than your country of
                    residence. We ensure appropriate safeguards are in place to protect your information during such
                    transfers.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">12. Changes to This Policy</h2>
                <div className="text-black dark:text-white space-y-4 text-base leading-relaxed">
                  <p>
                    We may update this Privacy Policy periodically. We will notify you of significant changes by email
                    or through our website. Your continued use of our services after changes become effective
                    constitutes acceptance of the updated policy.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">13. Contact Information</h2>
                <div className="text-black dark:text-white space-y-4 text-base leading-relaxed">
                  <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                  <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border">
                    <div className="text-black dark:text-white space-y-2">
                      <p>
                        <span className="font-semibold">Email:</span>{" "}
                        <a href="mailto:service@24hrtruckfix.com" className="text-primary hover:underline font-medium">
                          service@24hrtruckfix.com
                        </a>
                      </p>
                      <p>
                        <span className="font-semibold">Phone:</span> +1 302 273-1234
                      </p>
                      <p>
                        <span className="font-semibold">Address:</span> 300 Delaware Ave, Suite 210 #382, Wilmington DE
                        19801
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
