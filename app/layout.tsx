import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./clientLayout"
import "./globals.css" // Import globals.css at the top of the file

export const metadata: Metadata = {
  title: "24Hr Concierge | 24/7 Roadside Assistance & Vehicle Repair Services Nationwide",
  description:
    "Connecting drivers, mechanics, and service providers nationwide for 24/7 roadside assistance and vehicle repair services.",
  keywords:
    "vehicle repair, roadside assistance, 24 hour service, commercial vehicle repair, fleet maintenance, roadside assistance, breakdown service, dispatch service",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
