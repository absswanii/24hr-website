"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, ChevronDown, Truck, Users, Wrench, Building2, GraduationCap } from "lucide-react"
import { Button } from "@/components/custom-button"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ThemeDropdown } from "@/components/theme-dropdown"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  const mainNavItems = [
    { label: "Home", href: "/" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Services", href: "/services" },
    {
      label: "Who It's For",
      href: "/who-its-for",
      dropdown: true,
      dropdownItems: [
        { label: "Insurance Companies", href: "/who-its-for/insurance-companies", icon: Building2 },
        { label: "Fleets", href: "/who-its-for/fleets", icon: Truck },
        { label: "Owner Operators", href: "/who-its-for/owner-operators", icon: Users },
        { label: "Owner Operators", href: "/who-its-for/service-providers", icon: Wrench },
        { label: "Students", href: "/who-its-for/students", icon: GraduationCap },
      ],
    },
    { label: "Pricing", href: "/pricing" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b shadow-sm py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center z-50" onClick={closeMenu}>
            <Image
              src="/24HR-logo-1.png"
              alt="24Hr Truck Services & AI Concierge Logo"
              width={150}
              height={60}
              className="h-auto w-auto max-h-12"
              priority
            />
          </Link>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <a href="tel:+18004TRUCKS" className="flex items-center text-primary font-medium mr-2">
              <Phone size={18} className="mr-1" />
              <span className="hidden sm:inline">1-800-4-TRUCKS</span>
            </a>
            <button
              className="p-2 text-gray-600 hover:text-primary transition-colors"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {mainNavItems.map((item) =>
              item.dropdown ? (
                <div
                  className="relative"
                  key={item.label}
                  ref={dropdownRef}
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onFocus={() => setActiveDropdown(item.label)}
                    onBlur={() => setTimeout(() => setActiveDropdown(null), 100)}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors",
                      isActive(item.href)
                        ? "text-primary bg-primary/10"
                        : "text-gray-700 hover:text-primary hover:bg-gray-50",
                      activeDropdown === item.label ? "text-primary" : "",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={cn(
                        "ml-1 transition-transform duration-200",
                        activeDropdown === item.label ? "rotate-180" : "",
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-1 w-64 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                      >
                        <div className="py-1" role="menu" aria-orientation="vertical">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className={cn(
                                "flex items-center px-4 py-3 text-sm hover:bg-gray-50",
                                isActive(dropdownItem.href)
                                  ? "text-primary bg-primary/5 font-medium"
                                  : "text-gray-700 hover:text-primary",
                              )}
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropdownItem.icon && <dropdownItem.icon className="mr-3 h-4 w-4 text-primary" />}
                              <span>{dropdownItem.label}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+18004TRUCKS" className="flex items-center text-primary font-medium">
              <Phone size={18} className="mr-1" />
              1-800-4-TRUCKS
            </a>
            <ThemeDropdown />
            <Link href="/login">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/get-started">
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 top-0 left-0 w-full h-screen bg-white dark:bg-gray-900 z-40 overflow-y-auto pt-20 pb-6 px-6"
              >
                <div className="flex flex-col space-y-6 mt-6">
                  {mainNavItems.map((item) =>
                    item.dropdown ? (
                      <div key={item.label}>
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className={cn(
                            "flex items-center justify-between w-full text-left font-medium py-2",
                            isActive(item.href) ? "text-primary" : "text-gray-700 hover:text-primary",
                          )}
                        >
                          {item.label}
                          <ChevronDown
                            size={18}
                            className={cn(
                              "transition-transform duration-200",
                              activeDropdown === item.label ? "rotate-180" : "",
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 mt-2 space-y-2 overflow-hidden"
                            >
                              {item.dropdownItems?.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.label}
                                  href={dropdownItem.href}
                                  className={cn(
                                    "flex items-center py-2",
                                    isActive(dropdownItem.href)
                                      ? "text-primary font-medium"
                                      : "text-gray-600 hover:text-primary",
                                  )}
                                  onClick={closeMenu}
                                >
                                  {dropdownItem.icon && <dropdownItem.icon className="mr-3 h-4 w-4 text-primary" />}
                                  <span>{dropdownItem.label}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={cn(
                          "font-medium py-2",
                          isActive(item.href) ? "text-primary" : "text-gray-700 hover:text-primary",
                        )}
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    ),
                  )}
                  <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-800 space-y-4">
                    <div className="flex justify-center mb-4">
                      <ThemeDropdown />
                    </div>
                    <Link href="/login" onClick={closeMenu}>
                      <Button variant="outline" fullWidth>
                        Login
                      </Button>
                    </Link>
                    <Link href="/get-started" onClick={closeMenu}>
                      <Button variant="primary" fullWidth>
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
