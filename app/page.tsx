export const metadata = {
  title: "Strategic AI Development Consulting | Enterprise AI Adoption | Double Agent",
  description: "Expert AI development consulting for enterprise software teams. Strategic AI adoption, capability assessments, and secure implementation. Transform your development process with proven PAIR methodology.",
  keywords: [
    "AI development consulting",
    "enterprise AI adoption",
    "AI capability assessment", 
    "AI coding tools",
    "software development AI",
    "PAIR methodology",
    "AI integration strategy",
    "developer AI training",
    "AI development security",
    "enterprise software AI"
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://double-agent.co.uk",
  },
  openGraph: {
    title: "Strategic AI Development Consulting | Enterprise AI Adoption | Double Agent",
    description: "Expert AI development consulting for enterprise software teams. Strategic AI adoption, capability assessments, and secure implementation.",
    url: "https://double-agent.co.uk/",
    type: "website",
    siteName: "Double Agent",
    images: [
      {
        url: "/double-agent-logo.png",
        width: 1200,
        height: 630,
        alt: "Double Agent - Strategic AI Development Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategic AI Development Consulting | Enterprise AI Adoption | Double Agent",
    description: "Expert AI development consulting for enterprise software teams. Strategic AI adoption, capability assessments, and secure implementation.",
    images: ["/double-agent-logo.png"],
  },
};

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, TrendingUp, Users, CheckCircle, Star, Shield } from "lucide-react"
import Link from "next/link"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Double Agent",
  "url": "https://double-agent.co.uk",
  "logo": "https://double-agent.co.uk/double-agent-logo.png",
  "description": "Strategic AI development consulting with an assessment-first approach. Risk mitigation, strategic planning, and implementation for director-level decision makers.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "London",
    "addressCountry": "UK"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "0203 883 4544",
    "contactType": "customer service",
    "email": "hello@double-agent.co.uk"
  },
  "sameAs": [
    "https://double-agent.co.uk"
  ],
  "service": [
    {
      "@type": "Service",
      "name": "AI Development Capability Assessment",
      "description": "Comprehensive evaluation of team readiness, risks, and opportunities for adopting AI development tools."
    },
    {
      "@type": "Service", 
      "name": "Toolchain & Integration Strategy",
      "description": "Strategic selection and secure implementation of AI coding platforms without disrupting current workflows."
    },
    {
      "@type": "Service",
      "name": "Developer Evolution Consulting", 
      "description": "Transition developers from implementers to strategic thinkers in an AI-enhanced environment."
    },
    {
      "@type": "Service",
      "name": "Implementation & Optimization Support",
      "description": "Ongoing support for phased rollout, performance tracking, and continuous improvement."
    }
  ]
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
              <Link href="/assessment">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3 w-full sm:w-auto">
                  <span className="hidden sm:inline">Request Your AI Capability Assessment</span>
                  <span className="sm:hidden">Get Assessment</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-3 bg-transparent"
                >
                  See How We Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Leading Development Teams Work With Us</h2>
              <p className="text-lg text-slate-600 max-w-4xl mx-auto">
                AI coding tools offer incredible potential—but without strategic guidance, most implementations introduce security risks, overwhelm teams, and fail to deliver ROI. We help you avoid those pitfalls.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Security Without Compromise */}
              <Card className="border-slate-200 hover:border-emerald-300 transition-colors">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Shield className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">Security Without Compromise</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600">
                    We ensure your AI development tools are integrated within a robust governance and validation framework—avoiding the vulnerabilities that affect 90% of unvetted AI code.
                  </p>
                </CardContent>
              </Card>

              {/* Team Evolution, Not Disruption */}
              <Card className="border-slate-200 hover:border-emerald-300 transition-colors">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">Team Evolution, Not Disruption</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600">
                    Your developers won't be replaced—they'll be elevated. We provide the strategy and training to help teams shift from task execution to architectural leadership.
                  </p>
                </CardContent>
              </Card>

              {/* Clear ROI, Measurable Gains */}
              <Card className="border-slate-200 hover:border-emerald-300 transition-colors">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">Clear ROI, Measurable Gains</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600">
                    Every engagement includes a realistic ROI projection and productivity benchmarks—so your investment delivers visible, trackable outcomes in weeks, not quarters.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link href="/services">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
                  See How We Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Offer</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We help software leaders adopt AI safely, strategically, and with measurable ROI.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* AI Development Capability Assessment */}
              <div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-emerald-300 transition-colors">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">AI Development Capability Assessment</h3>
                <p className="text-slate-600">
                  Understand your current workflows, skills, risks, and opportunities.
                </p>
              </div>

              {/* Toolchain & Integration Strategy */}
              <div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-emerald-300 transition-colors">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Toolchain & Integration Strategy</h3>
                <p className="text-slate-600">
                  Choose the right AI coding platforms—and implement them securely.
                </p>
              </div>

              {/* Developer Evolution Consulting */}
              <div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-emerald-300 transition-colors">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Developer Evolution Consulting</h3>
                <p className="text-slate-600">
                  Help your team shift from code execution to system design and strategy.
                </p>
              </div>

              {/* Implementation & Optimization Support */}
              <div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-emerald-300 transition-colors">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Implementation & Optimization Support</h3>
                <p className="text-slate-600">
                  Roll out AI coding tools with confidence, backed by expert guidance.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/services">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
                  Explore All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Global Impact Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Global Impact</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Helping software leaders adopt AI coding practices worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-1">150+</div>
              <div className="text-slate-600 text-sm">Assessments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-1">85%</div>
              <div className="text-slate-600 text-sm">Implementation Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-1">6x</div>
              <div className="text-slate-600 text-sm">Productivity Gain</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-1">20+</div>
              <div className="text-slate-600 text-sm">Countries</div>
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
          <div className="flex justify-center">
            <Link href="/assessment">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Request Your AI Capability Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
