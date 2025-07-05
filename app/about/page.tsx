import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Users, Award, Globe, TrendingUp, Brain, Shield, Target, ArrowRight, FileText, BarChart3, Zap, CheckCircle, Clock, Phone, Mail, MapPin, Star } from "lucide-react"

export const metadata = {
  title: "Schedule Your Assessment | Double Agent",
  description: "Ready to transform your development process? Book your comprehensive AI development capability assessment and discover how AI coding can revolutionize your team's productivity.",
  robots: "index, follow",
  openGraph: {
    title: "Schedule Your Assessment | Double Agent",
    description: "Ready to transform your development process? Book your comprehensive AI development capability assessment.",
    url: "https://double-agent.co.uk/about",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Schedule Your Assessment | Double Agent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schedule Your Assessment | Double Agent",
    description: "Ready to transform your development process? Book your comprehensive AI development capability assessment.",
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
            <Badge className="mb-6 bg-emerald-600 hover:bg-emerald-700">Schedule Your Assessment</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Development Process?</h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              You've learned about our methodology, seen our expertise, and understand the AI coding revolution. Now let's evaluate how this transformation can work specifically for your team and organization.
            </p>
            <p className="text-lg text-emerald-400 font-semibold">
              Our comprehensive assessment typically pays for itself within weeks through improved productivity alone.
            </p>
          </div>
        </div>
      </section>

      {/* Assessment Booking Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Book Your AI Development Capability Assessment</h2>
              <p className="text-lg text-slate-600">
                Complete the form below and we'll contact you within 24 hours to schedule your comprehensive assessment and discuss how AI coding can transform your development process.
              </p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Assessment Request Form</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="Enter your email address" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input id="company" placeholder="Enter your company name" />
                    </div>
                  </div>
                </div>

                {/* Your Role */}
                <div>
                  <Label htmlFor="role">Your Role *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ceo">CEO/Founder</SelectItem>
                      <SelectItem value="cto">CTO/Technology Director</SelectItem>
                      <SelectItem value="vp-engineering">VP Engineering</SelectItem>
                      <SelectItem value="dev-manager">Development Manager</SelectItem>
                      <SelectItem value="lead-dev">Lead Developer</SelectItem>
                      <SelectItem value="product-manager">Product Manager</SelectItem>
                      <SelectItem value="technical-lead">Technical Lead</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Development Team Information */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Development Team Information</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="teamSize">Current Team Size *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="individual">Individual developer</SelectItem>
                          <SelectItem value="2-5">2-5 developers</SelectItem>
                          <SelectItem value="6-15">6-15 developers</SelectItem>
                          <SelectItem value="16-50">16-50 developers</SelectItem>
                          <SelectItem value="50+">50+ developers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-base">Primary Development Focus (Select all that apply)</Label>
                      <div className="grid md:grid-cols-2 gap-3 mt-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="web-apps" />
                          <Label htmlFor="web-apps">Web Applications</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="mobile" />
                          <Label htmlFor="mobile">Mobile Development</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="enterprise" />
                          <Label htmlFor="enterprise">Enterprise Software</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="cloud" />
                          <Label htmlFor="cloud">Cloud/Infrastructure</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="data-ai" />
                          <Label htmlFor="data-ai">Data/AI Systems</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="legacy" />
                          <Label htmlFor="legacy">Legacy System Modernization</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="api" />
                          <Label htmlFor="api">API Development</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="other-focus" />
                          <Label htmlFor="other-focus">Other</Label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label className="text-base">Current Development Challenges (Select all that apply)</Label>
                      <div className="grid md:grid-cols-2 gap-3 mt-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="speed" />
                          <Label htmlFor="speed">Development speed/productivity</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="quality" />
                          <Label htmlFor="quality">Code quality and consistency</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="debt" />
                          <Label htmlFor="debt">Technical debt management</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="skills" />
                          <Label htmlFor="skills">Team skill development</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="security" />
                          <Label htmlFor="security">Security vulnerabilities</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="integration" />
                          <Label htmlFor="integration">Tool integration complexity</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="scaling" />
                          <Label htmlFor="scaling">Scaling development processes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="deadlines" />
                          <Label htmlFor="deadlines">Meeting project deadlines</Label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="aiExperience">AI Coding Experience Level</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">No experience with AI coding tools</SelectItem>
                          <SelectItem value="limited">Limited experimentation (&lt; 3 months)</SelectItem>
                          <SelectItem value="some">Some experience (3-12 months)</SelectItem>
                          <SelectItem value="regular">Regular use (12+ months)</SelectItem>
                          <SelectItem value="advanced">Advanced implementation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-base">Assessment Priority Areas (Select up to 3)</Label>
                      <div className="grid md:grid-cols-2 gap-3 mt-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="team-capability" />
                          <Label htmlFor="team-capability">Team capability and readiness evaluation</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="tool-selection" />
                          <Label htmlFor="tool-selection">AI tool selection and recommendations</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="security-risk" />
                          <Label htmlFor="security-risk">Security risk assessment and mitigation</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="workflow" />
                          <Label htmlFor="workflow">Workflow integration strategy</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="roi" />
                          <Label htmlFor="roi">ROI analysis and productivity projections</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="roadmap" />
                          <Label htmlFor="roadmap">Implementation roadmap planning</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="training" />
                          <Label htmlFor="training">Training and skill development needs</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Additional Information</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="description">Brief Description of Your Current Development Process and Goals</Label>
                      <Textarea 
                        id="description" 
                        placeholder="Tell us about your current development workflow, main challenges, and what you hope to achieve with AI coding adoption. This helps us prepare for a more productive assessment conversation."
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label htmlFor="timeline">Preferred Assessment Timeline</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (next 1-2 weeks)</SelectItem>
                          <SelectItem value="soon">Soon (next 3-4 weeks)</SelectItem>
                          <SelectItem value="2months">Within 2 months</SelectItem>
                          <SelectItem value="planning">Planning ahead (2+ months)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-3">
                  Schedule My Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Direct Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Prefer to Talk First?</h2>
              <p className="text-lg text-slate-600">Get immediate response through our direct contact channels</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Email</CardTitle>
                  <CardDescription>hello@double-agent.co.uk</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Response Time: Within 4 business hours</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Phone</CardTitle>
                  <CardDescription>0203 883 4544</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">UK Time: Monday-Friday, 9am-6pm GMT</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Location</CardTitle>
                  <CardDescription>Based: London, UK</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Serving: Development teams worldwide via proven remote methodology</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Process Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">What to Expect from Your Assessment</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                A structured three-phase approach designed to deliver maximum value and actionable insights
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-emerald-50">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Initial Consultation (30 minutes)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Current state discussion - Understanding your development workflow and challenges</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Goals alignment - Clarifying objectives and expected outcomes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Scope definition - Tailoring assessment focus to your priority areas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Timeline planning - Scheduling the comprehensive assessment phase</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-emerald-50">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Comprehensive Assessment (2-3 weeks)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Development workflow analysis - Deep dive into current processes and tools</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Team capability evaluation - Skills assessment and readiness analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Technical infrastructure review - AI tool compatibility and integration planning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Security risk assessment - Vulnerability analysis and mitigation strategy</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-emerald-50">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Results Delivery (1 week)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Comprehensive report (40-60 pages) with findings and recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Executive presentation - Key insights and strategic recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Technical roadmap - Specific implementation plan and tool recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Investment analysis - ROI projections and productivity improvement forecasts</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">How long does the assessment process take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    The complete assessment typically takes 2-3 weeks from initial consultation to final report delivery. This includes workflow analysis, team evaluation, technical review, and comprehensive report preparation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">What's included in the assessment investment?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Your assessment includes comprehensive analysis, detailed recommendations report, executive summary, technical roadmap, training plan, and ROI projections. Most organizations find the assessment pays for itself within weeks through improved productivity alone.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Do you work with distributed/remote teams?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Absolutely. Our assessment methodology is designed for remote collaboration. We work effectively with distributed teams worldwide and can accommodate various time zones and working arrangements.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">What if we're not ready for AI coding implementation yet?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Perfect! Our assessment determines optimal timing and identifies any preparatory steps needed. We'll recommend the best approach for your specific situation, whether that's immediate implementation or strategic preparation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">How do you ensure confidentiality and security?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    We maintain strict confidentiality protocols and can work under NDA as required. Our assessment process is designed to evaluate security considerations without compromising sensitive information.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">What happens after the assessment?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    You receive a comprehensive report with actionable recommendations. There's no obligation to engage further services. Many clients use our assessment results to guide their internal AI coding adoption, while others choose to continue with our implementation support services.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Can you assess teams with no AI coding experience?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Yes, most of our clients are beginning their AI coding journey. Our assessment is specifically designed to evaluate readiness and provide optimal starting points for teams at any experience level.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Do you provide assessment results to individual developers?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Our primary deliverable is to organizational leadership, but we can provide team-specific insights and individual development recommendations as part of the assessment when appropriate.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">What Development Leaders Say</h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4 italic">
                    "The assessment revealed opportunities we hadn't considered and provided a clear roadmap for adoption. The security insights alone saved us from potential issues."
                  </p>
                  <p className="font-semibold text-slate-900">— CTO, Financial Services Company</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4 italic">
                    "Double Agent's understanding of both traditional development and AI capabilities helped us navigate the transition successfully. Our productivity improvements exceeded expectations."
                  </p>
                  <p className="font-semibold text-slate-900">— VP Engineering, Technology Startup</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4 italic">
                    "The assessment-first approach gave us confidence in our AI coding strategy. We avoided the common pitfalls and achieved measurable results quickly."
                  </p>
                  <p className="font-semibold text-slate-900">— Development Manager, Enterprise Software Company</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency/Value Reinforcement */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Start Your Assessment Now?</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">The AI Coding Opportunity Window</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Early adopters are gaining significant competitive advantages</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Developer productivity improvements of 6-8x are being achieved today</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Tool maturity is accelerating rapidly—the optimal adoption window is now</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Competitive pressure is increasing as more organizations embrace AI coding</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Investment in Productivity Transformation</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Assessment typically pays for itself within weeks through efficiency gains</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Strategic guidance prevents costly tool selection mistakes</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Risk mitigation avoids security vulnerabilities affecting 90% of unvetted AI code</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Team evolution positions your developers for high-value roles in the AI era</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Transform Your Development Process Today</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            You understand the opportunity. You've seen our expertise. You know our methodology works.
          </p>
          <p className="text-lg mb-8 font-semibold">
            Take the next step: Schedule your comprehensive AI development capability assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-3">
              Schedule My Assessment Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-lg">
            Questions? Call <span className="font-semibold">0203 883 4544</span> or email <span className="font-semibold">hello@double-agent.co.uk</span>
          </p>
        </div>
      </section>
    </div>
  )
}
