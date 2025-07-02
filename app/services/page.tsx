import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, TrendingUp, Users, Shield, Zap, Target, ArrowRight, CheckCircle } from "lucide-react"

export const metadata = {
  title: "AI Software Services | Double Agent",
  description: "Comprehensive AI services for financial leaders. Risk analytics, market intelligence, and customer insights for director-level decision makers.",
  robots: "index, follow",
  openGraph: {
    title: "AI Systems for CTOs | Double Agent",
    description: "Modern software architecture built with AI. We help directors build better, faster.",
    url: "https://double-agent.co.uk/services",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Systems for CTOs | Double Agent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Systems for CTOs | Double Agent",
    description: "Build secure, scalable software with our agentic architecture.",
    images: ["/og-image.png"],
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-600 hover:bg-emerald-700">AI-Powered Solutions</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Comprehensive AI Services for Financial Excellence</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              From risk management to customer intelligence, our AI solutions are designed to address the unique
              challenges facing financial services leaders today.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Development Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Strategic Development Solutions</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive AI solutions to address every aspect of your digital transformation
            </p>
          </div>

          <div className="space-y-16">
            {/* Primary Service */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <Brain className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">AI Development Capability Assessment</h3>
                </div>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Our flagship service for understanding and planning your AI coding transformation
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Current Workflow Analysis</div>
                      <div className="text-sm text-slate-600">Deep dive into your current development ecosystem</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Team Capability Evaluation</div>
                      <div className="text-sm text-slate-600">Assess team skills and strengths</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Infrastructure Assessment</div>
                      <div className="text-sm text-slate-600">Evaluate your technology infrastructure</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Strategic Roadmap Creation</div>
                      <div className="text-sm text-slate-600">Plan your AI integration journey</div>
                    </div>
                  </div>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Learn More About Our Assessment Process
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="bg-slate-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <Brain className="h-24 w-24 mx-auto mb-4 opacity-50" />
                  <p>AI Development Capability Assessment</p>
                </div>
              </div>
            </div>

            {/* Supporting Services */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-slate-100 rounded-2xl p-8 h-96 flex items-center justify-center lg:order-1">
                <div className="text-center text-slate-500">
                  <TrendingUp className="h-24 w-24 mx-auto mb-4 opacity-50" />
                  <p>Tool Selection & Integration Consulting</p>
                </div>
              </div>
              <div className="lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <TrendingUp className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Tool Selection & Integration Consulting</h3>
                </div>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Expert guidance on selecting the right AI tools and integrating them into your development ecosystem.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Tool Selection</div>
                      <div className="text-sm text-slate-600">Identify suitable AI tools for your needs</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Integration Strategy</div>
                      <div className="text-sm text-slate-600">Design an effective integration plan</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Implementation Support</div>
                      <div className="text-sm text-slate-600">Assist with tool deployment and integration</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Training</div>
                      <div className="text-sm text-slate-600">Provide training and knowledge transfer</div>
                    </div>
                  </div>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Learn More About Tool Selection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-slate-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <Users className="h-24 w-24 mx-auto mb-4 opacity-50" />
                  <p>Implementation Support & Training</p>
                </div>
              </div>
              <div className="lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Implementation Support & Training</h3>
                </div>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Comprehensive support to ensure successful AI implementation and training for your team.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Implementation Support</div>
                      <div className="text-sm text-slate-600">Assist with project implementation</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Training</div>
                      <div className="text-sm text-slate-600">Provide training and knowledge transfer</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Continuous Learning</div>
                      <div className="text-sm text-slate-600">Encourage ongoing learning and skill development</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Knowledge Transfer</div>
                      <div className="text-sm text-slate-600">Ensure knowledge retention and application</div>
                    </div>
                  </div>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Learn More About Implementation Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Additional Capabilities</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive AI solutions to address every aspect of your digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Fraud Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Advanced AI models for real-time fraud detection and prevention across all channels.
                </CardDescription>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                    Real-time transaction monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                    Behavioral anomaly detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                    Adaptive learning algorithms
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Process Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Intelligent automation solutions that streamline operations and reduce manual effort.
                </CardDescription>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                    Document processing automation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                    Workflow optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                    Decision support systems
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Strategic Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Expert guidance on AI strategy, implementation roadmaps, and organizational transformation.
                </CardDescription>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                    AI strategy development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                    Implementation roadmaps
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                    Change management support
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Development Process?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Start with our comprehensive assessment to understand your AI coding potential and receive strategic recommendations.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            Schedule Your Assessment
          </Button>
        </div>
      </section>
    </div>
  )
}
