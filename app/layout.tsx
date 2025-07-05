import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Double Agent - Strategic AI Development Consulting",
  description:
    "Strategic AI development consulting with an assessment-first approach. Risk mitigation, strategic planning, and implementation for director-level decision makers.",
  generator: 'v0.dev',
  metadataBase: new URL('https://double-agent.co.uk'),
  icons: {
    icon: '/double-agent-logo.png',
    shortcut: '/double-agent-logo.png',
    apple: '/double-agent-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
