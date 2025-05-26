"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image src="/24HR-logo-1-white.png" alt="24Hr Roadside Assistance" width={180} height={60} />
            </Link>
            <p className="text-gray-400 mb-6">
              24/7 roadside assistance and mobile repair services for all vehicles. Fast response, nationwide coverage,
              and professional service when you need it most.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary transition-colors p-2 rounded-full"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary transition-colors p-2 rounded-full"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary transition-colors p-2 rounded-full"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary transition-colors p-2 rounded-full"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/ai" className="text-gray-400 hover:text-primary transition-colors">
                  AI
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/who-its-for" className="text-gray-400 hover:text-primary transition-colors">
                  Who It's For
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-400 hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#towing" className="text-gray-400 hover:text-primary transition-colors">
                  Towing Service
                </Link>
              </li>
              <li>
                <Link href="/services#jump-start" className="text-gray-400 hover:text-primary transition-colors">
                  Jump Start Service
                </Link>
              </li>
              <li>
                <Link href="/services#tire-change" className="text-gray-400 hover:text-primary transition-colors">
                  Tire Change & Repair
                </Link>
              </li>
              <li>
                <Link href="/services#lockout" className="text-gray-400 hover:text-primary transition-colors">
                  Lockout Service
                </Link>
              </li>
              <li>
                <Link href="/services#mobile-mechanic" className="text-gray-400 hover:text-primary transition-colors">
                  Mobile Mechanic
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 text-primary flex-shrink-0" size={18} />
                <span className="text-gray-400">300 Delaware Ave, Suite 210 #382, Wilmington DE 19801</span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 text-primary flex-shrink-0" size={18} />
                <span className="text-gray-400">+1 302 273-1234</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 text-primary flex-shrink-0" size={18} />
                <span className="text-gray-400">service@24hrtruckfix.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} 24Hr Roadside Assistance. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
