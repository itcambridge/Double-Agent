import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Double Agent - Strategic AI Development Consulting",
    template: "%s | Double Agent"
  },
  description:
    "Strategic AI development consulting with an assessment-first approach. Risk mitigation, strategic planning, and implementation for director-level decision makers.",
  keywords: [
    "AI development consulting",
    "AI coding tools",
    "software development AI",
    "enterprise AI adoption",
    "AI capability assessment",
    "PAIR methodology",
    "AI development strategy",
    "AI integration consulting",
    "developer AI training",
    "AI coding best practices"
  ],
  authors: [{ name: "Double Agent", url: "https://double-agent.co.uk" }],
  creator: "Double Agent",
  publisher: "Double Agent",
  generator: 'Next.js',
  metadataBase: new URL('https://double-agent.co.uk'),
  alternates: {
    canonical: "https://double-agent.co.uk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/double-agent-logo.png',
    shortcut: '/double-agent-logo.png',
    apple: '/double-agent-logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://double-agent.co.uk',
    siteName: 'Double Agent',
    title: 'Double Agent - Strategic AI Development Consulting',
    description: 'Strategic AI development consulting with an assessment-first approach. Risk mitigation, strategic planning, and implementation for director-level decision makers.',
    images: [
      {
        url: '/double-agent-logo.png',
        width: 1200,
        height: 630,
        alt: 'Double Agent - Strategic AI Development Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Double Agent - Strategic AI Development Consulting',
    description: 'Strategic AI development consulting with an assessment-first approach. Risk mitigation, strategic planning, and implementation for director-level decision makers.',
    images: ['/double-agent-logo.png'],
  },
  verification: {
    // Add verification codes when available
    // google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code',
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
