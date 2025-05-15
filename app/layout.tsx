import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import { PageTransition } from "@/components/animations/page-transition"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sora", // Keeping the same variable name for compatibility
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "24Hr Concierge | 24/7 Roadside Assistance & Vehicle Repair Services Nationwide",
  description:
    "Connecting drivers, mechanics, and service providers nationwide for 24/7 roadside assistance and vehicle repair services.",
  keywords:
    "vehicle repair, roadside assistance, 24 hour service, commercial vehicle repair, fleet maintenance, roadside assistance, breakdown service, dispatch service",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
            <Header />
            <main className="flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
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
