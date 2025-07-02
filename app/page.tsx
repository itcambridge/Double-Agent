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

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-10"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-600 hover:bg-emerald-700 text-white">About Our Company</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforming Development Through Strategic AI Assessment
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
              We are software development veterans who help organizations navigate the AI coding revolution through expert assessment, strategic recommendations, and practical implementation guidance.<br/>
              <span className="block mt-4">Our approach: <b>Assess</b> your current capabilities → <b>Recommend</b> optimal tools and practices → <b>Guide</b> practical implementation</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
                Schedule Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-3 bg-transparent"
              >
                Learn About Our Process
              </Button>
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

      {/* Approach Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Help You Navigate AI Coding</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our proven methodology ensures your organization adopts AI coding practices effectively and sustainably.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                  <CheckCircle className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl">Comprehensive Assessment</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-6">
                  We evaluate your current development workflows, team capabilities, and technical infrastructure to identify optimal AI integration opportunities.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                  <TrendingUp className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl">Strategic Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-6">
                  Based on our assessment, we recommend specific AI coding tools, practices, and implementation approaches tailored to your organization's needs and constraints.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl">Implementation Guidance</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-6">
                  We provide ongoing support and guidance as you adopt new AI development practices, ensuring smooth transitions and maximum benefit realization.
                </CardDescription>
              </CardContent>
            </Card>
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
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Schedule Assessment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-3 bg-transparent"
            >
              Learn About Our Process
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
