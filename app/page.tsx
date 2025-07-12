export const metadata = {
  title: "AI Services - Transform Your Financial Operations | Double Agent",
  description: "Cutting-edge AI solutions for financial services. Risk analytics, market intelligence, and customer insights for director-level decision makers.",
  robots: "index, follow",
  openGraph: {
    title: "AI Services - Transform Your Financial Operations | Double Agent",
    description: "Cutting-edge AI solutions for financial services. Risk analytics, market intelligence, and customer insights for director-level decision makers.",
    url: "https://double-agent.co.uk/",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Services - Transform Your Financial Operations | Double Agent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Services - Transform Your Financial Operations | Double Agent",
    description: "Cutting-edge AI solutions for financial services. Risk analytics, market intelligence, and customer insights for director-level decision makers.",
    images: ["/og-image.png"],
  },
};

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, TrendingUp, Users, CheckCircle, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-10"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Strategic AI Adoption for Enterprise Software Teams
            </h1>
            <p className="text-xl lg:text-2xl text-emerald-200 mb-8">
              We help development leaders integrate AI safely, securely, and productively—without disrupting code quality, team structure, or compliance frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
                  Request Your AI Capability Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-3 bg-transparent"
                >
                  Learn About Our Process
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              To bridge the gap between traditional development practices and AI-powered coding through expert assessment and strategic guidance, enabling organizations to adopt AI development tools effectively while maximizing team productivity and maintaining code quality.<br/>
              <span className="block mt-4">We combine 60+ years of software development and infrastructure experience with cutting-edge AI coding expertise to help teams evolve their development practices thoughtfully and successfully.</span>
            </p>
            <div className="flex justify-center mt-8">
              <div className="flex flex-col items-center">
                <Brain className="h-12 w-12 text-emerald-600 mb-2" />
                <span className="text-slate-500">Strategic Assessment</span>
              </div>
            </div>
            <div className="mt-4 text-slate-500">Global Development Consulting</div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Impact</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Helping development teams worldwide successfully adopt AI coding practices
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">150+</div>
              <div className="text-slate-600">Assessments Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">85%</div>
              <div className="text-slate-600">Implementation Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">6x</div>
              <div className="text-slate-600">Average Productivity Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">20+</div>
              <div className="text-slate-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Assess Your AI Development Potential?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's evaluate how AI coding can transform your development process while maintaining quality and team effectiveness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Schedule Assessment
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-3 bg-transparent"
              >
                Learn About Our Process
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
