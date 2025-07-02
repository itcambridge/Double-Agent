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
            <Badge className="mb-6 bg-emerald-600 hover:bg-emerald-700 text-white">AI-Powered Financial Services</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Financial Operations with
              <span className="text-emerald-400"> Intelligent AI</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
              We deliver cutting-edge AI solutions that drive operational excellence, enhance decision-making, and
              accelerate growth for financial services leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-3 bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We partner with forward-thinking financial institutions to deliver transformative AI solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="h-16 bg-slate-200 rounded-lg flex items-center justify-center mb-2">
                <span className="font-bold text-slate-600">BANK A</span>
              </div>
            </div>
            <div className="text-center">
              <div className="h-16 bg-slate-200 rounded-lg flex items-center justify-center mb-2">
                <span className="font-bold text-slate-600">FUND B</span>
              </div>
            </div>
            <div className="text-center">
              <div className="h-16 bg-slate-200 rounded-lg flex items-center justify-center mb-2">
                <span className="font-bold text-slate-600">ASSET MGT C</span>
              </div>
            </div>
            <div className="text-center">
              <div className="h-16 bg-slate-200 rounded-lg flex items-center justify-center mb-2">
                <span className="font-bold text-slate-600">FINTECH D</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our AI Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed specifically for financial services, from risk management to customer
              intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                  <Brain className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl">Intelligent Risk Analytics</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-6">
                  Advanced AI models for real-time risk assessment, portfolio optimization, and regulatory compliance
                  monitoring.
                </CardDescription>
                <ul className="text-sm text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Real-time risk scoring
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Predictive analytics
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Compliance automation
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="group-hover:bg-emerald-600 group-hover:text-white transition-colors bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                  <TrendingUp className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl">Market Intelligence</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-6">
                  AI-powered market analysis, trend prediction, and investment opportunity identification for superior
                  decision-making.
                </CardDescription>
                <ul className="text-sm text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Market trend analysis
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Sentiment monitoring
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Opportunity scoring
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="group-hover:bg-emerald-600 group-hover:text-white transition-colors bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl">Customer Intelligence</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-6">
                  Deep customer insights through AI-driven behavioral analysis, personalization engines, and churn
                  prediction models.
                </CardDescription>
                <ul className="text-sm text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Behavioral analytics
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Personalization AI
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Churn prediction
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="group-hover:bg-emerald-600 group-hover:text-white transition-colors bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI solutions deliver measurable impact across key business metrics
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">85%</div>
              <div className="text-slate-300">Risk Detection Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">60%</div>
              <div className="text-slate-300">Operational Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">40%</div>
              <div className="text-slate-300">Faster Decision Making</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">95%</div>
              <div className="text-slate-300">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-0 shadow-xl">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl font-medium text-slate-700 mb-8 leading-relaxed">
                "The AI risk analytics platform has transformed how we approach portfolio management. We've seen a 40%
                improvement in risk-adjusted returns and significantly enhanced our regulatory compliance capabilities."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-slate-200 rounded-full mr-4"></div>
                <div className="text-left">
                  <div className="font-semibold text-slate-900">Sarah Chen</div>
                  <div className="text-slate-600">Chief Risk Officer, Global Asset Management</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Operations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a consultation with our AI experts to discover how we can accelerate your digital transformation
            journey.
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
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
