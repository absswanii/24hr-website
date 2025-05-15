"use client"

import * as React from "react"
import { Moon, Sun, Monitor, ChevronDown } from "lucide-react"
import { Button } from "@/components/custom-button"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

export function ThemeDropdown() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  // Ensure component is mounted to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleDropdown = () => setIsOpen(!isOpen)

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="gap-1">
        <Moon className="h-5 w-5" />
        <span className="hidden sm:inline-block">Theme</span>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </Button>
    )
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="sm"
        className="gap-1"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {resolvedTheme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        <span className="hidden sm:inline-block">
          {theme === "light" ? "Light" : theme === "dark" ? "Dark" : "System"}
        </span>
        <ChevronDown className={cn("h-4 w-4 opacity-50 transition-transform", isOpen ? "rotate-180" : "")} />
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-700 focus:outline-none z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <button
              onClick={() => {
                setTheme("light")
                setIsOpen(false)
              }}
              className={cn(
                "flex w-full items-center px-4 py-2 text-sm",
                theme === "light"
                  ? "bg-gray-100 dark:bg-gray-700 text-primary"
                  : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700",
              )}
              role="menuitem"
            >
              <Sun className="mr-2 h-4 w-4" />
              <span>Light</span>
            </button>
            <button
              onClick={() => {
                setTheme("dark")
                setIsOpen(false)
              }}
              className={cn(
                "flex w-full items-center px-4 py-2 text-sm",
                theme === "dark"
                  ? "bg-gray-100 dark:bg-gray-700 text-primary"
                  : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700",
              )}
              role="menuitem"
            >
              <Moon className="mr-2 h-4 w-4" />
              <span>Dark</span>
            </button>
            <button
              onClick={() => {
                setTheme("system")
                setIsOpen(false)
              }}
              className={cn(
                "flex w-full items-center px-4 py-2 text-sm",
                theme === "system"
                  ? "bg-gray-100 dark:bg-gray-700 text-primary"
                  : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700",
              )}
              role="menuitem"
            >
              <Monitor className="mr-2 h-4 w-4" />
              <span>System</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
