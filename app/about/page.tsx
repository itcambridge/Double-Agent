import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe, TrendingUp } from "lucide-react"

export const metadata = {
  title: "About | Double Agent AI Services",
  description: "Meet the team pioneering AI innovation in financial services. Learn about our mission, vision, and leadership.",
  robots: "index, follow",
  openGraph: {
    title: "About | Double Agent AI Services",
    description: "Meet the team pioneering AI innovation in financial services. Learn about our mission, vision, and leadership.",
    url: "https://double-agent.co.uk/about",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About | Double Agent AI Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Double Agent AI Services",
    description: "Meet the team pioneering AI innovation in financial services. Learn about our mission, vision, and leadership.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-600 hover:bg-emerald-700">About Double Agent</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Strategic AI Development Consulting</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We are software development veterans with six decades of combined experience, specializing in helping organizations successfully navigate the transition to AI-powered development practices.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Bridging Traditional Development and AI Innovation</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              The software development landscape is undergoing its most significant transformation in decades. AI coding tools offer unprecedented opportunities for productivity gains, but successful adoption requires strategic thinking, careful planning, and expert guidance.<br/>
              <span className="block mt-4">Double Agent was founded to help organizations navigate this transition successfully. We combine deep traditional development expertise with cutting-edge AI coding knowledge to provide practical, results-driven consulting services.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Six decades of software development expertise focused on practical AI adoption strategies
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4"></div>
                <CardTitle className="text-xl">Viv Austin</CardTitle>
                <CardDescription className="text-emerald-600 font-semibold">Chief Executive Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  30 years of software development experience in the banking sector, progressing to Director level with deep expertise in enterprise-scale development practices, team leadership, and technology transformation initiatives.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Enterprise Development</Badge>
                  <Badge variant="secondary">Banking Technology</Badge>
                  <Badge variant="secondary">Team Leadership</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4"></div>
                <CardTitle className="text-xl">Mark Austin</CardTitle>
                <CardDescription className="text-emerald-600 font-semibold">Chief Technology Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  30 years of IT infrastructure experience as an Infrastructure Architect, with specialized focus on AI coding methodologies and iterative architecture development over the past year.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Infrastructure Architecture</Badge>
                  <Badge variant="secondary">AI Development Practices</Badge>
                  <Badge variant="secondary">System Integration</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Assessment-First Works</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">Many organizations rush into AI tool adoption without proper evaluation, leading to poor tool selection, workflow disruption, and suboptimal results. Our assessment-first approach ensures:</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Strategic Foundation</h3>
              <p className="text-slate-300">
                Thorough understanding of your current capabilities before recommending changes
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Tailored Solutions</h3>
              <p className="text-slate-300">
                Tool and practice recommendations specific to your team, technology, and business requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Minimized Risk</h3>
              <p className="text-slate-300">
                Careful evaluation of potential challenges and mitigation strategies before implementation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Measurable Success</h3>
              <p className="text-slate-300">
                Clear metrics and success criteria established from the beginning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Global Consulting, Local Understanding</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Based near London, we serve clients worldwide through remote consulting engagements. Our approach is designed for distributed collaboration, enabling us to work effectively with teams regardless of geographic location.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Remote Assessment & Consulting</h3>
              <p className="text-slate-600">
                Flexible scheduling across time zones and digital-first documentation and reporting.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Ongoing Support</h3>
              <p className="text-slate-600">
                Ongoing support regardless of location, ensuring your team's success throughout the AI adoption journey.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Digital Collaboration</h3>
              <p className="text-slate-600">
                Service delivery designed for distributed teams and digital collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us on the AI Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Ready to transform your financial operations with AI? Let's start the conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-3 bg-transparent"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
