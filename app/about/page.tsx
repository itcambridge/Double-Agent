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
            <Badge className="mb-6 bg-emerald-600 hover:bg-emerald-700">About Our Company</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Pioneering AI Innovation in Financial Services</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We are a team of AI experts, financial professionals, and technology leaders dedicated to transforming how
              financial institutions operate and compete in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                To empower financial services leaders with cutting-edge AI solutions that drive operational excellence,
                enhance decision-making, and create sustainable competitive advantages in an increasingly complex market
                landscape.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe that the future of finance lies in the intelligent application of AI technologies, and we're
                committed to making that future accessible to organizations of all sizes.
              </p>
            </div>
            <div className="bg-slate-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center text-slate-500">
                <Globe className="h-24 w-24 mx-auto mb-4 opacity-50" />
                <p>Global AI Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Impact</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Trusted by leading financial institutions worldwide to deliver transformative AI solutions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">50+</div>
              <div className="text-slate-600">Global Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">$2B+</div>
              <div className="text-slate-600">Assets Under Management</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">95%</div>
              <div className="text-slate-600">Client Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">15+</div>
              <div className="text-slate-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our leadership combines deep financial services expertise with cutting-edge AI knowledge
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4"></div>
                <CardTitle className="text-xl">Dr. Sarah Chen</CardTitle>
                <CardDescription className="text-emerald-600 font-semibold">Chief Executive Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Former VP of AI Strategy at Goldman Sachs with 15+ years in financial technology. PhD in Machine
                  Learning from Stanford.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">AI Strategy</Badge>
                  <Badge variant="secondary">FinTech</Badge>
                  <Badge variant="secondary">Leadership</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4"></div>
                <CardTitle className="text-xl">Michael Rodriguez</CardTitle>
                <CardDescription className="text-emerald-600 font-semibold">Chief Technology Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Former Principal Engineer at Microsoft Azure AI. Expert in large-scale AI systems and cloud
                  architecture with 12+ years experience.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">AI Engineering</Badge>
                  <Badge variant="secondary">Cloud</Badge>
                  <Badge variant="secondary">Scalability</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4"></div>
                <CardTitle className="text-xl">Emma Thompson</CardTitle>
                <CardDescription className="text-emerald-600 font-semibold">Chief Operating Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Former Managing Director at JPMorgan Chase with expertise in risk management and regulatory
                  compliance. MBA from Wharton.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Risk Management</Badge>
                  <Badge variant="secondary">Compliance</Badge>
                  <Badge variant="secondary">Operations</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-slate-300">
                We strive for excellence in every solution we deliver, ensuring our clients receive the highest quality
                AI implementations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Partnership</h3>
              <p className="text-slate-300">
                We believe in true partnership with our clients, working collaboratively to achieve shared success and
                long-term value.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-slate-300">
                We continuously push the boundaries of what's possible with AI, staying at the forefront of
                technological advancement.
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
