export const metadata = {
  title: "About Double Agent | AI Strategy for Development Teams",
  description: "Meet the founders and learn about our mission to help engineering teams adopt AI tools confidently, with secure integration, clear ROI, and zero disruption.",
  robots: "index, follow",
  openGraph: {
    title: "About Double Agent | AI Strategy for Development Teams",
    description: "Meet the founders and learn about our mission to help engineering teams adopt AI tools confidently, with secure integration, clear ROI, and zero disruption.",
    url: "https://double-agent.co.uk/about",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Double Agent | AI Strategy for Development Teams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Double Agent | AI Strategy for Development Teams",
    description: "Meet the founders and learn about our mission to help engineering teams adopt AI tools confidently, with secure integration, clear ROI, and zero disruption.",
    images: ["/og-image.png"],
  },
};

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Users, Globe, Award, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Our Story */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Our Story
            </h1>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-6">Brothers. Engineers. Transformation Specialists.</h2>
            <div className="text-lg text-slate-300 leading-relaxed space-y-4">
              <p>
                Double Agent was founded by Viv Austin and Mark Austin—brothers with over 60 years of combined experience in software engineering and IT infrastructure.
              </p>
              <p>
                We saw firsthand how unstructured AI adoption was creating security risks, wasted investment, and team burnout. So we built a methodology to do it right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet the Founders</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Viv Austin - CEO */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src="/CEO.png"
                      alt="Viv Austin - CEO"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">Viv Austin – CEO</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    With 30 years of enterprise software experience in the banking sector, Viv rose to Director level overseeing large-scale development initiatives. He brings deep expertise in software architecture, team evolution, and high-stakes technology transformation.
                  </p>
                  <blockquote className="border-l-4 border-emerald-600 pl-4 italic text-slate-700">
                    "AI shouldn't replace developers—it should unlock their strategic potential. Our goal is to amplify capability, not automate people out."
                  </blockquote>
                </CardContent>
              </Card>

              {/* Mark Austin - CTO */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src="/CTO.png"
                      alt="Mark Austin - CTO"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">Mark Austin – CTO</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    With 30 years in IT infrastructure and a background as an Infrastructure Architect, Mark understands how AI tools impact system architecture, deployment, and operations. He's spent the past year immersed in AI-assisted coding and iterative design frameworks.
                  </p>
                  <blockquote className="border-l-4 border-emerald-600 pl-4 italic text-slate-700">
                    "We built Double Agent to help real teams integrate AI practically—balancing the demands of speed, security, and scale."
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AI Strategy for Development Teams */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">AI Strategy for Development Teams</h2>
            <p className="text-xl text-slate-600 mb-8">
              Led by Engineers Who Understand Enterprise Reality
            </p>
            <div className="text-lg text-slate-600 leading-relaxed space-y-4">
              <p>
                We help engineering teams adopt AI tools confidently, with secure integration, clear ROI, and zero disruption to code quality, team roles, or compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <div className="text-lg text-slate-600 leading-relaxed space-y-4">
              <p>
                AI coding tools aren't magic—they're amplifiers. Used wisely, they unlock massive productivity. Used carelessly, they introduce risk and resistance.
              </p>
              <p>
                At Double Agent, we guide development leaders through strategic AI adoption—ensuring safety, clarity, and long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Approach</h2>
              <p className="text-lg text-slate-600">
                We follow a proven, four-phase model designed to help organizations:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-700">Understand their current capabilities</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-700">Choose the right AI tools for their workflows</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-700">Implement safely and incrementally</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-700">Evolve team skills and processes for long-term gain</span>
              </div>
            </div>

            <div className="text-center">
              <Link href="/pair-methodology">
                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  Learn more about the PAIR Methodology
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Values</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-lg">Assessment First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">
                    Every engagement begins with deep analysis and tailored recommendations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-lg">Security by Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">
                    AI tools are integrated within robust validation and governance frameworks.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-lg">Empowered Teams</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">
                    We help teams elevate their roles, not replace them.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-lg">ROI-Driven</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">
                    We define success in terms of measurable, near-term gains.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global, Remote-First Consulting */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Global, Remote-First Consulting</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Based in London, UK</h3>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Supporting teams across Europe, North America & APAC</h3>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Proven success with remote delivery models for enterprise clients</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore Your Team's AI Potential?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our AI Development Capability Assessment is the strategic first step to identifying opportunities, risks, and practical pathways.
          </p>
          <Link href="/assessment">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Request Your Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
