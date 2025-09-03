"use client"
import type React from "react"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import { PageTransition } from "@/components/animations/page-transition"
import Script from "next/script"
import { usePathname } from "next/navigation"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sora", // Keeping the same variable name for compatibility
  weight: ["400", "500", "600", "700", "800"],
})

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme initialization script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('app-theme');
                  if (storedTheme === 'dark' || 
                      (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <ScrollToTop />
            {/* Only show Header and Footer if NOT on homepage */}
            {!isHomePage && <Header />}
            <main className="flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
            {!isHomePage && <Footer />}
            <CookieConsent />
          </div>
        </ThemeProvider>

        {/* Theme persistence script */}
        <Script id="theme-persistence" strategy="afterInteractive">
          {`
            (function() {
              // Listen for navigation events
              const handleRouteChange = () => {
                try {
                  // Get current theme
                  const theme = localStorage.getItem('app-theme') || 'system';
                  const isDark = theme === 'dark' || 
                    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  
                  // Apply theme
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              };
              
              // Listen for route changes
              window.addEventListener('popstate', handleRouteChange);
              
              // Reapply theme on page visibility change (when returning to the tab)
              document.addEventListener('visibilitychange', () => {
                if (document.visibilityState === 'visible') {
                  handleRouteChange();
                }
              });
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
