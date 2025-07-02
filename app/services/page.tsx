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

      {/* Core Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Each service is tailored to deliver maximum impact for your specific business objectives
            </p>
          </div>

          <div className="space-y-16">
            {/* Service 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <Brain className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Intelligent Risk Analytics</h3>
                </div>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Transform your risk management with AI-powered analytics that provide real-time insights, predictive
                  modeling, and automated compliance monitoring. Our solutions help you stay ahead of market volatility
                  and regulatory requirements.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Real-time Risk Scoring</div>
                      <div className="text-sm text-slate-600">Dynamic risk assessment across portfolios</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Predictive Modeling</div>
                      <div className="text-sm text-slate-600">Forecast potential risks and opportunities</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Compliance Automation</div>
                      <div className="text-sm text-slate-600">Automated regulatory reporting and monitoring</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Stress Testing</div>
                      <div className="text-sm text-slate-600">AI-enhanced scenario analysis</div>
                    </div>
                  </div>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Learn More About Risk Analytics
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="bg-slate-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <Brain className="h-24 w-24 mx-auto mb-4 opacity-50" />
                  <p>Risk Analytics Dashboard Preview</p>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-slate-100 rounded-2xl p-8 h-96 flex items-center justify-center lg:order-1">
                <div className="text-center text-slate-500">
                  <TrendingUp className="h-24 w-24 mx-auto mb-4 opacity-50" />
                  <p>Market Intelligence Platform</p>
                </div>
              </div>
              <div className="lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <TrendingUp className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Market Intelligence</h3>
                </div>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Gain competitive advantage with AI-powered market analysis that processes vast amounts of financial
                  data, news, and market signals to identify trends, opportunities, and potential disruptions before
                  they impact your business.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Trend Analysis</div>
                      <div className="text-sm text-slate-600">AI-powered market trend identification</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Sentiment Monitoring</div>
                      <div className="text-sm text-slate-600">Real-time market sentiment analysis</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Opportunity Scoring</div>
                      <div className="text-sm text-slate-600">AI-ranked investment opportunities</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Competitive Intelligence</div>
                      <div className="text-sm text-slate-600">Monitor competitor strategies and moves</div>
                    </div>
                  </div>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Explore Market Intelligence
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Customer Intelligence</h3>
                </div>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Unlock the full potential of your customer relationships with AI-driven insights that reveal
                  behavioral patterns, predict needs, and enable personalized experiences that drive loyalty and growth.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Behavioral Analytics</div>
                      <div className="text-sm text-slate-600">Deep customer behavior analysis</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Personalization Engine</div>
                      <div className="text-sm text-slate-600">AI-powered personalized experiences</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Churn Prediction</div>
                      <div className="text-sm text-slate-600">Identify at-risk customers early</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Lifetime Value Modeling</div>
                      <div className="text-sm text-slate-600">Predict customer lifetime value</div>
                    </div>
                  </div>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Discover Customer Intelligence
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="bg-slate-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <Users className="h-24 w-24 mx-auto mb-4 opacity-50" />
                  <p>Customer Intelligence Dashboard</p>
                </div>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how our AI services can transform your business operations and drive growth.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}
