export const metadata = {
  title: "Strategic AI Development Services | Double Agent",
  description: "Helping enterprise teams adopt AI coding tools securely, productively, and at scale. From capability assessment to implementation and optimization.",
  robots: "index, follow",
  openGraph: {
    title: "Strategic AI Development Services | Double Agent",
    description: "Helping enterprise teams adopt AI coding tools securely, productively, and at scale. From capability assessment to implementation and optimization.",
    url: "https://double-agent.co.uk/services",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Strategic AI Development Services | Double Agent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategic AI Development Services | Double Agent",
    description: "Helping enterprise teams adopt AI coding tools securely, productively, and at scale. From capability assessment to implementation and optimization.",
    images: ["/og-image.png"],
  },
};

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Clock, FileText, Users, TrendingUp, Zap } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Strategic AI Development Services</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Helping enterprise teams adopt AI coding tools securely, productively, and at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              We provide a structured set of services that guide your development team from AI capability assessment to successful implementation and long-term optimization. Whether you're just exploring AI tools or looking to scale their use, we tailor every engagement to your environment, team, and objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* AI Development Capability Assessment */}
              <Card className="border-slate-200 hover:border-emerald-300 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">AI Development Capability Assessment</CardTitle>
                  <p className="text-slate-600 mt-2">
                    Identify your team's readiness, risks, and opportunities for adopting AI development tools.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Workflow & codebase analysis</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Security & infrastructure review</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Executive-ready roadmap + ROI projection</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-slate-600 mb-6">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>2–3 weeks</span>
                    <span className="mx-3">|</span>
                    <FileText className="h-4 w-4 mr-2" />
                    <a 
                      href="/DoubleAgent_AI_Development_Assessment_Overview.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 underline"
                    >
                      Download Overview
                    </a>
                  </div>
                  
                  <Link href="/about">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      Request Assessment
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Toolchain & Integration Strategy */}
              <Card className="border-slate-200 hover:border-emerald-300 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">Toolchain & Integration Strategy</CardTitle>
                  <p className="text-slate-600 mt-2">
                    Select and implement the right AI platforms without disrupting your current workflows.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Evaluate tools like Copilot, CodeWhisperer, Cursor</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Design secure integration workflows</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Plan low-risk pilot programs</span>
                    </div>
                  </div>
                  
                  <Link href="/contact">
                    <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                      Talk to Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Implementation & Optimization Support */}
              <Card className="border-slate-200 hover:border-emerald-300 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">Implementation & Optimization Support</CardTitle>
                  <p className="text-slate-600 mt-2">
                    Ongoing support for phased rollout, performance tracking, and continuous improvement.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Phased rollout & troubleshooting</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Best practices coaching</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Continuous refinement & advanced training</span>
                    </div>
                  </div>
                  
                  <Link href="/contact">
                    <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Developer Evolution Consulting */}
              <Card className="border-slate-200 hover:border-emerald-300 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">Developer Evolution Consulting</CardTitle>
                  <p className="text-slate-600 mt-2">
                    Transition developers from implementers to strategic thinkers in an AI-enhanced environment.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Team capability mapping & role transitions</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Strategic training programs</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Architecture, testing, and design guidance</span>
                    </div>
                  </div>
                  
                  <Link href="/contact">
                    <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                      Schedule Discovery Call
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Not sure where to start?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our flagship assessment identifies the best path forward.
          </p>
          <Link href="/about">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Request Your AI Capability Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
