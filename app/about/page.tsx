import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe, TrendingUp, Brain, Shield, Target, ArrowRight, FileText, BarChart3, Zap } from "lucide-react"

export const metadata = {
  title: "About | Double Agent AI Services",
  description: "Strategic AI development consulting with six decades of combined experience. Helping organizations navigate the AI coding revolution through assessment-first methodology.",
  robots: "index, follow",
  openGraph: {
    title: "About | Double Agent AI Services",
    description: "Strategic AI development consulting with six decades of combined experience. Helping organizations navigate the AI coding revolution.",
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
    description: "Strategic AI development consulting with six decades of combined experience.",
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
              We are software development veterans with six decades of combined experience, specializing in helping organizations successfully navigate the AI coding revolution—the most significant transformation in software development since the advent of high-level programming languages.
            </p>
          </div>
        </div>
      </section>

      {/* The Paradigm Shift Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Understanding the AI Coding Revolution</h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                Software development is undergoing a fundamental transformation that challenges our understanding of what it means to "code." We've spent years researching this shift and understand what many miss: AI isn't thinking—it's sophisticated pattern-matching that taps into the collective work of millions of developers.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">The Pattern-Matching Reality</h3>
                <p className="text-lg text-slate-700 mb-6">
                  Recent research reveals that Large Language Models don't actually "reason" through problems. Instead, they exhibit sophisticated pattern recognition, accessing and recombining vast amounts of human coding expertise encoded in their training data. This insight is crucial for understanding why AI coding works—and why traditional approaches to adoption often fail.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">AI systems access patterns from millions of code examples</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">They recombine existing solutions rather than creating new logic</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">This explains both their capabilities and limitations</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">From Implementation to Intent</h3>
                <p className="text-lg text-slate-700 mb-6">
                  This creates a revolutionary new abstraction layer. Instead of translating ideas into explicit programming instructions, developers can now express intent and let AI systems access relevant patterns from millions of code examples to construct appropriate solutions.
                </p>
                <div className="bg-emerald-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Why Fresh Approaches Often Outperform Experience</h4>
                  <p className="text-slate-700">
                    Our research shows that non-traditional developers often excel in AI coding environments because they're not constrained by implementation-focused thinking. They naturally communicate intent and embrace the iterative, conversational development process that AI coding enables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Leadership Team</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Combining traditional development mastery with cutting-edge AI coding expertise
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6">
                    <Image
                      src="/CEO.png"
                      alt="Viv Austin - Chief Executive Officer"
                      width={128}
                      height={128}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-2xl">Viv Austin</CardTitle>
                  <CardDescription className="text-emerald-600 font-semibold text-lg">Chief Executive Officer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6 leading-relaxed">
                    30 years of software development experience in the banking sector, progressing to Director level with deep expertise in enterprise-scale development practices, team leadership, and technology transformation initiatives.
                  </p>
                  
                  <div className="bg-slate-50 rounded-xl p-6 mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Why Viv's Experience Matters</h4>
                    <p className="text-slate-700 text-sm">
                      Having led development teams through multiple technology transformations in highly regulated environments, Viv understands both the opportunities and risks of AI coding adoption. His banking sector experience provides unique insights into security, compliance, and risk management—critical areas where 90% of AI-generated code fails without proper oversight.
                    </p>
                  </div>

                  <h4 className="font-semibold text-slate-900 mb-3">Core Expertise:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-emerald-600 mr-2" />
                      <span className="text-slate-700">Enterprise Development - Large-scale system architecture and team management</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 text-emerald-600 mr-2" />
                      <span className="text-slate-700">Banking Technology - High-security, regulated environment development practices</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-emerald-600 mr-2" />
                      <span className="text-slate-700">Team Leadership - Managing technical teams through transformation initiatives</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6">
                    <Image
                      src="/CTO.png"
                      alt="Mark Austin - Chief Technology Officer"
                      width={128}
                      height={128}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-2xl">Mark Austin</CardTitle>
                  <CardDescription className="text-emerald-600 font-semibold text-lg">Chief Technology Officer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6 leading-relaxed">
                    30 years of IT infrastructure experience as an Infrastructure Architect, with specialized focus on AI coding methodologies and iterative architecture development over the past year.
                  </p>
                  
                  <div className="bg-slate-50 rounded-xl p-6 mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Why Mark's Background is Unique</h4>
                    <p className="text-slate-700 text-sm">
                      Mark bridges traditional infrastructure thinking with AI-enhanced development practices. His infrastructure architect perspective provides crucial insights into how AI coding affects system design, deployment, and operational considerations—areas often overlooked in AI coding adoption.
                    </p>
                  </div>

                  <h4 className="font-semibold text-slate-900 mb-3">Core Expertise:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Target className="h-4 w-4 text-emerald-600 mr-2" />
                      <span className="text-slate-700">Infrastructure Architecture - System design and scalability planning</span>
                    </div>
                    <div className="flex items-center">
                      <Brain className="h-4 w-4 text-emerald-600 mr-2" />
                      <span className="text-slate-700">AI Development Practices - Hands-on experience with AI coding tools and methodologies</span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="h-4 w-4 text-emerald-600 mr-2" />
                      <span className="text-slate-700">System Integration - Connecting AI-enhanced development with existing infrastructure</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Understanding Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Assessment-First Works When Others Fail</h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                Most AI coding consultants focus on tools and implementation. We focus on understanding and transformation because we've learned that successful AI adoption requires addressing fundamental misconceptions about how AI coding actually works.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">The Legacy Developer Challenge</h3>
                <p className="text-lg text-slate-700 mb-6">
                  Experienced programmers often struggle with AI coding because their expertise becomes a constraint. Years of implementation-focused thinking can interfere with the pattern-access paradigm that AI coding requires. Our assessment identifies these challenges and provides pathways to leverage experience while embracing new approaches.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Implementation-focused thinking vs. pattern-access paradigm</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Leveraging experience while embracing new approaches</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Pathways to successful transformation</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">The Security Reality</h3>
                <p className="text-lg text-slate-700 mb-6">
                  Research shows that AI systems generate insecure code up to 90% of the time without proper guardrails. This isn't a flaw—it's the nature of pattern-matching systems that prioritize functionality over security unless specifically guided. Our assessment-first approach ensures security considerations are built into the foundation, not added as an afterthought.
                </p>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h4 className="font-semibold text-red-900 mb-2">Critical Security Insight</h4>
                  <p className="text-red-800 text-sm">
                    90% of AI-generated code contains security vulnerabilities without proper oversight. Our assessment-first approach builds security into the foundation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The Productivity Multiplier Effect</h3>
              <p className="text-lg text-slate-700">
                Organizations that adopt AI coding strategically don't just get faster development—they get productivity multiplication. Teams report 6-8x improvements in development speed, but only when AI tools are integrated thoughtfully with existing workflows and team capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">The Double Agent Advantage: Traditional Mastery Meets AI Innovation</h2>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto">
                Our name reflects our unique position: we're double agents who understand both worlds—traditional development mastery and AI-enhanced possibilities. This dual perspective enables us to guide organizations through transformation without losing the benefits of established expertise.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-6">Why Traditional Experience Matters</h3>
                <p className="text-lg text-slate-300 mb-6">
                  While AI can generate code, it cannot provide:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Architectural judgment for complex system design</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Business context for technical decisions</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Quality assessment of generated solutions</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Security evaluation of AI-generated code</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Performance optimization for production systems</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Why AI Coding Expertise is Essential</h3>
                <p className="text-lg text-slate-300 mb-6">
                  Traditional development alone is no longer sufficient. Modern development teams need:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Pattern-oriented thinking to leverage AI effectively</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Intent-focused communication for AI collaboration</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Iterative development methodologies for AI workflows</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Security frameworks for AI-generated code</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Quality validation processes for AI output</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-600 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Our Synthesis Approach</h3>
              <p className="text-lg">
                We don't advocate replacing traditional development with AI tools. We help organizations synthesize both approaches, creating development practices that leverage AI capabilities while maintaining the strategic thinking, quality oversight, and architectural expertise that only experienced developers provide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Consulting Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Global Reach, Deep Understanding</h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                Based near London, we serve development teams worldwide through our proven remote consulting methodology. Our approach is designed for distributed collaboration, enabling us to work effectively with organizations regardless of geographic location or time zone.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Remote Consulting Works</h3>
                <p className="text-lg text-slate-700 mb-6">
                  AI coding adoption is fundamentally about understanding and methodology, not physical presence. Our remote approach offers:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Globe className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Flexible engagement across time zones and schedules</span>
                  </div>
                  <div className="flex items-start">
                    <FileText className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Digital-first documentation that teams can reference long-term</span>
                  </div>
                  <div className="flex items-start">
                    <BarChart3 className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Screen-sharing assessment of actual development environments</span>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Ongoing support without geographic constraints</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Global Experience</h3>
                <p className="text-lg text-slate-700 mb-6">
                  Having worked with development teams across multiple countries and industries, we understand how AI coding adoption varies by:
                </p>
                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Regulatory Environment</h4>
                    <p className="text-slate-700 text-sm">Financial services, healthcare, government</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Team Structure</h4>
                    <p className="text-slate-700 text-sm">Distributed teams, co-located teams, hybrid models</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Technical Maturity</h4>
                    <p className="text-slate-700 text-sm">Startup agility vs. enterprise stability</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Cultural Factors</h4>
                    <p className="text-slate-700 text-sm">Risk tolerance, change management, innovation appetite</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Foundation Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Built on Research, Proven in Practice</h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                Our approach is grounded in extensive research into the AI coding phenomenon, combined with practical experience helping organizations navigate this transformation.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Research Insights</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Brain className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Pattern-matching understanding of how AI coding actually works</span>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Developer psychology research on why different personalities succeed with AI tools</span>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Security analysis of AI-generated code vulnerabilities and mitigation strategies</span>
                  </div>
                  <div className="flex items-start">
                    <BarChart3 className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Productivity measurement frameworks for quantifying AI coding benefits</span>
                  </div>
                  <div className="flex items-start">
                    <Target className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Transformation methodology based on successful and failed adoption patterns</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Real-World Validation</h3>
                <p className="text-lg text-slate-700 mb-6">
                  Every recommendation we make is tested in real development environments. We don't provide theoretical advice—we offer proven strategies that work in production settings with real teams, deadlines, and constraints.
                </p>
                <div className="bg-emerald-50 rounded-xl p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Access Our Research</h4>
                  <p className="text-slate-700 mb-4">
                    Download our comprehensive research overview and white papers on AI coding adoption.
                  </p>
                  <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white">
                    Download Research Overview
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Navigate the AI Coding Revolution?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're a growing startup seeking competitive advantage or an established enterprise planning strategic transformation, we're here to help you capture the benefits of AI coding while avoiding the common pitfalls that derail most adoption efforts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-3">
              Schedule Your Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="bg-white text-emerald-600 hover:bg-slate-100 text-lg px-8 py-3">
              Download Our Research Overview
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
