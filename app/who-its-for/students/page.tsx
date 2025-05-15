import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, Award, Briefcase, Users } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
// Import the GallopEffect component
// import { GallopEffect } from "@/components/gallop-effect"

// Update the metadata
export const metadata = {
  title: "For Students | 24Hr Truck Services & AI Concierge",
  description:
    "Discover career opportunities, internships, and earn income by offering your skills as a student service provider in the commercial truck repair industry.",
}

export default function StudentsPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="24Hr Truck Services & AI Concierge for Students"
        description="Launch your career in the commercial truck repair industry with hands-on experience, mentorship, and educational resources. Plus, earn income by offering your skills as a student service provider."
        showWave={true}
      >
        <div className="inline-block bg-white/10 p-3 rounded-full mb-4">
          <GraduationCap className="h-8 w-8 text-white" />
        </div>
      </HeroSection>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Building the Next Generation of Truck Repair Professionals</h2>
              <p className="text-lg text-gray-700 mb-6">
                At 24HR Truck Fix, we're committed to supporting students who are interested in careers in the
                commercial truck repair industry. We offer a range of programs and resources designed to help you gain
                practical experience, develop your skills, and connect with industry professionals.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We also recognize that students have valuable skills to offer. That's why we've created opportunities
                for students to participate as service providers, completing small-scale tasks and projects while
                earning income and building real-world experience.
              </p>
            </div>

            {/* Programs for Students */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Programs for Students</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Internship Program</h4>
                      <p className="text-gray-700">
                        Gain hands-on experience working alongside experienced technicians in real-world repair
                        scenarios.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Mentorship Program</h4>
                      <p className="text-gray-700">
                        Connect with industry veterans who can provide guidance, advice, and insights to help you
                        navigate your career path.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Scholarship Opportunities</h4>
                      <p className="text-gray-700">
                        Apply for our annual scholarships designed to support students pursuing education in diesel
                        technology and truck repair.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Job Placement Assistance</h4>
                      <p className="text-gray-700">
                        Access our network of service providers and fleet managers who are looking to hire qualified
                        technicians.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Educational Resources */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Educational Resources</h3>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
                <p className="text-lg text-gray-700 mb-6">
                  We offer a variety of resources to help you expand your knowledge and skills:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold">Technical Webinars</span>
                      <p className="text-gray-600">
                        Free online sessions covering various aspects of truck repair and maintenance.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold">Online Learning Portal</span>
                      <p className="text-gray-600">
                        Access to tutorials, videos, and technical documentation to supplement your formal education.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold">Industry Workshops</span>
                      <p className="text-gray-600">
                        Hands-on workshops covering the latest technologies and repair techniques.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold">Certification Preparation</span>
                      <p className="text-gray-600">
                        Resources to help you prepare for ASE and other industry certifications.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Student Service Provider Program */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Student Service Provider Program</h3>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
                <p className="text-lg text-gray-700 mb-6">
                  As a student, you can join our platform as a service provider, offering your skills and services while
                  gaining valuable experience and earning income:
                </p>

                <h4 className="text-xl font-bold mb-4">Available Tasks for Student Providers</h4>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold">Basic Maintenance Tasks</span>
                      <p className="text-gray-600">
                        Perform oil changes, filter replacements, and basic inspections under supervision.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold">Diagnostic Assistance</span>
                      <p className="text-gray-600">
                        Assist certified technicians with diagnostic procedures and learn while you earn.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold">Parts Inventory & Logistics</span>
                      <p className="text-gray-600">
                        Help manage parts inventory, sourcing, and delivery to repair locations.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold">Documentation & Record-Keeping</span>
                      <p className="text-gray-600">
                        Assist with maintaining repair records, warranty documentation, and service histories.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold">Customer Service Support</span>
                      <p className="text-gray-600">
                        Help with customer communications, appointment scheduling, and follow-ups.
                      </p>
                    </div>
                  </li>
                </ul>

                <h4 className="text-xl font-bold mb-4">How It Works</h4>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mb-3">
                      1
                    </div>
                    <h5 className="font-bold mb-2">Sign Up</h5>
                    <p className="text-gray-600 text-sm">
                      Create your profile, specify your skills, availability, and the types of tasks you're interested
                      in.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mb-3">
                      2
                    </div>
                    <h5 className="font-bold mb-2">Get Verified</h5>
                    <p className="text-gray-600 text-sm">
                      Complete a brief orientation and verification process to ensure you're ready to provide services.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mb-3">
                      3
                    </div>
                    <h5 className="font-bold mb-2">Start Working</h5>
                    <p className="text-gray-600 text-sm">
                      Accept tasks that match your schedule and skills, complete them, and get paid directly through our
                      platform.
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-bold mb-4">Benefits for Student Providers</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-bold mb-2">Flexible Schedule</h5>
                    <p className="text-gray-600 text-sm">Work around your class schedule and other commitments.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-bold mb-2">Competitive Pay</h5>
                    <p className="text-gray-600 text-sm">
                      Earn income while learning with rates that respect your skills and time.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-bold mb-2">Real-World Experience</h5>
                    <p className="text-gray-600 text-sm">
                      Build your resume with practical experience that employers value.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-bold mb-2">Mentorship</h5>
                    <p className="text-gray-600 text-sm">
                      Work alongside experienced professionals who can guide your development.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-bold mb-2">Performance Bonuses</h5>
                    <p className="text-gray-600 text-sm">
                      Earn additional incentives for high-quality work and positive customer feedback.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-bold mb-2">Career Advancement</h5>
                    <p className="text-gray-600 text-sm">
                      Top-performing student providers often receive full-time job offers from our network partners.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Paths */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Career Paths in Truck Repair</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-lg text-gray-700 mb-6">
                  The commercial truck repair industry offers diverse career opportunities with strong growth potential:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-2">Diesel Technician</h4>
                    <p className="text-gray-600 text-sm">
                      Diagnose and repair diesel engines and related systems in commercial trucks.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-2">Mobile Service Technician</h4>
                    <p className="text-gray-600 text-sm">
                      Provide on-site repairs and maintenance for trucks at customer locations.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-2">Fleet Maintenance Manager</h4>
                    <p className="text-gray-600 text-sm">Oversee maintenance operations for commercial truck fleets.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-2">Service Advisor</h4>
                    <p className="text-gray-600 text-sm">
                      Serve as the liaison between customers and technicians, managing repair orders.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-2">Parts Specialist</h4>
                    <p className="text-gray-600 text-sm">Source and manage inventory of truck parts and components.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-2">Shop Owner/Entrepreneur</h4>
                    <p className="text-gray-600 text-sm">
                      Start and manage your own truck repair business or mobile service.
                    </p>
                  </div>
                </div>
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
                  "Starting as a student service provider at 24HR Truck Fix was the best decision I made during college.
                  I earned money to help with tuition while gaining hands-on experience that my classes couldn't
                  provide. The flexible schedule worked perfectly around my classes, and the mentorship from experienced
                  technicians was invaluable. After graduation, I had both a degree and real-world experience, which
                  helped me land a full-time position immediately."
                </p>
                <div className="font-bold">Alex M.</div>
                <div className="text-gray-600">Former Student Provider, Now Senior Diesel Technician</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Career Journey?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Join our platform as a student service provider to gain experience, earn income, and kickstart your
                career in the truck repair industry.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">Become a Student Provider</Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto"
                  >
                    Explore Resources
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
