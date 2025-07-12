export const metadata = {
  title: "PAIR Methodology | AI Development Framework | Double Agent",
  description: "Learn about our PAIR methodology - Prompt Architecture with Iterative Refinement. A comprehensive framework for AI-powered software development.",
  robots: "index, follow",
  openGraph: {
    title: "PAIR Methodology | AI Development Framework | Double Agent",
    description: "Learn about our PAIR methodology - Prompt Architecture with Iterative Refinement. A comprehensive framework for AI-powered software development.",
    url: "https://double-agent.co.uk/pair-methodology",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PAIR Methodology | AI Development Framework | Double Agent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PAIR Methodology | AI Development Framework | Double Agent",
    description: "Learn about our PAIR methodology - Prompt Architecture with Iterative Refinement. A comprehensive framework for AI-powered software development.",
    images: ["/og-image.png"],
  },
};

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Target, Users, Zap, AlertTriangle, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PairMethodologyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-600 hover:bg-emerald-700">Our Methodology</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              PAIR Methodology
            </h1>
            <h2 className="text-2xl lg:text-3xl text-emerald-200 mb-6">
              Prompt Architecture with Iterative Refinement
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              The comprehensive approach to AI-powered software development that transforms how teams build, iterate, and deliver exceptional software.
            </p>
          </div>
        </div>
      </section>

      {/* PAIR Framework Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">The PAIR Framework</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Four foundational pillars that guide AI-enhanced development from vision to delivery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-lg">Prompt Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">
                    Strategic design of AI interactions through structured communication patterns and vision-driven development.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-lg">Architecture Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">
                    Architecture-primary development where system design emerges through iterative refinement, treating early code as experimental.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-lg">Iterative Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">
                    Continuous refinement cycles with clear decision points for when to refine versus restart completely.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-lg">Refinement Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">
                    Systematic optimization through feedback loops, role-based collaboration, and intelligent pattern recognition.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* PAIR Development Roles */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">PAIR Development Roles</h2>
              <p className="text-lg text-slate-600">
                Clear role definitions that maximize team effectiveness and AI collaboration.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">🎯</div>
                    <CardTitle className="text-xl">Vision Architect</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Owns the architectural vision and strategic requirements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Maintains system coherence across development cycles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Decides when to refine vs. restart based on architectural evolution</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Communicates intent clearly to guide AI interactions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">🤖</div>
                    <CardTitle className="text-xl">Prompt Engineer</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Translates vision into effective AI prompts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Guides and refines AI generations through structured interactions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Recognizes when prompts need fundamental restructuring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Develops reusable prompt patterns for consistent results</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">✅</div>
                    <CardTitle className="text-xl">Quality Guardian</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Validates generated code against architectural goals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Ensures testing and quality standards are maintained</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Identifies warning signs that indicate restart is needed</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Oversees integration and system-wide quality</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Complete PAIR Cycle */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Complete PAIR Cycle</h2>
              <p className="text-lg text-slate-600 mb-8">
                A systematic four-phase approach to AI-enhanced development.
              </p>
              
              {/* PAIR Cycle Graphic */}
              <div className="flex justify-center mb-12">
                <div className="max-w-2xl">
                  <Image
                    src="/PAIR.png"
                    alt="The Complete PAIR Cycle"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Phase 1 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-emerald-600">Phase 1</Badge>
                  <CardTitle className="text-xl">Vision Foundation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Architectural Visioning</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• Develop comprehensive mental model of system architecture</li>
                      <li>• Define core business logic and data flow patterns</li>
                      <li>• Establish quality criteria and success metrics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Capability Assessment</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• Evaluate team capabilities and technical constraints</li>
                      <li>• Identify optimal AI tool selection and integration</li>
                      <li>• Plan documentation framework and workflows</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Phase 2 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-emerald-600">Phase 2</Badge>
                  <CardTitle className="text-xl">Prompt Architecture & Generation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Strategic Prompting</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• Translate architectural vision into AI-friendly prompts</li>
                      <li>• Communicate intent and outcomes, not implementation</li>
                      <li>• Design systematic prompt patterns for consistency</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Experimental Code Generation</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• Generate working implementations using proven patterns</li>
                      <li>• Validate outputs against architectural vision</li>
                      <li>• Test assumptions early and frequently</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Phase 3 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-emerald-600">Phase 3</Badge>
                  <CardTitle className="text-xl">Iterative Refinement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Continue Refinement When:</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• Architecture remains stable and clearly defined</li>
                      <li>• Code quality improves with each iteration</li>
                      <li>• System complexity remains manageable</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Execute Strategic Restart When:</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• Architecture has evolved significantly</li>
                      <li>• Code becomes fragile despite improvements</li>
                      <li>• Iteration cycles produce diminishing returns</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Phase 4 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-emerald-600">Phase 4</Badge>
                  <CardTitle className="text-xl">Crystallization & Excellence</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Convergence Recognition</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• Architecture and implementation achieve alignment</li>
                      <li>• Code quality meets all established standards</li>
                      <li>• System demonstrates extensibility</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Knowledge Capture</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• Document proven architectural patterns</li>
                      <li>• Create reusable prompt templates</li>
                      <li>• Establish team best practices</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">PAIR Decision Framework</h2>
              <p className="text-lg text-slate-600">
                Clear indicators to guide critical development decisions.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg border-l-4 border-l-red-500">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                    <CardTitle className="text-lg text-red-700">Critical Restart Indicators</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Fundamental architectural evolution</li>
                    <li>• Persistent code fragility</li>
                    <li>• Declining prompt effectiveness</li>
                    <li>• Mental development constraints</li>
                    <li>• Quality degradation pattern</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg border-l-4 border-l-yellow-500">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
                    <CardTitle className="text-lg text-yellow-700">Warning Signs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Exponentially increasing complexity</li>
                    <li>• Test suite brittleness</li>
                    <li>• Team frustration and reduced confidence</li>
                    <li>• Architectural performance issues</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg border-l-4 border-l-emerald-500">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />
                    <CardTitle className="text-lg text-emerald-700">Healthy Iteration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Consistent quality improvement</li>
                    <li>• Stable architecture</li>
                    <li>• Effective prompt patterns</li>
                    <li>• Strong team confidence</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Outcomes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">PAIR Success Outcomes</h2>
              <p className="text-lg text-slate-600">
                Measurable benefits organizations achieve through PAIR methodology adoption.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-emerald-600">Development Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Dramatically faster alignment between design and product</li>
                    <li>• Consistently cleaner, more modular architectures</li>
                    <li>• Significant reduction in technical debt</li>
                    <li>• Enhanced developer intuition for AI collaboration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-emerald-600">Team Capability Enhancement</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• More confident architectural decision-making</li>
                    <li>• Improved team collaboration through clear roles</li>
                    <li>• Enhanced problem-solving efficiency</li>
                    <li>• Stronger pattern recognition capabilities</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-emerald-600">Business Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Reduced overall development cycles</li>
                    <li>• Consistently higher code quality</li>
                    <li>• More maintainable and extensible systems</li>
                    <li>• Faster feature delivery through proven patterns</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Getting Started with PAIR</h2>
              <p className="text-lg text-slate-600">
                A structured approach to implementing PAIR methodology in your organization.
              </p>
            </div>

            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-emerald-600">Step 1</Badge>
                  <CardTitle className="text-xl">Assessment Phase</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
                    <div>
                      <p>• Evaluate current development practices and team capabilities</p>
                      <p>• Identify optimal AI tool compatibility and integration opportunities</p>
                    </div>
                    <div>
                      <p>• Train team members on PAIR principles and role-based collaboration</p>
                      <p>• Establish documentation frameworks and measurement systems</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-emerald-600">Step 2</Badge>
                  <CardTitle className="text-xl">Pilot Implementation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
                    <div>
                      <p>• Select appropriate pilot project with suitable scope</p>
                      <p>• Apply complete PAIR methodology with designated roles</p>
                    </div>
                    <div>
                      <p>• Monitor and measure results against success criteria</p>
                      <p>• Refine organizational approach based on pilot learning</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-emerald-600">Step 3</Badge>
                  <CardTitle className="text-xl">Scale and Optimize</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
                    <div>
                      <p>• Expand PAIR adoption to additional projects and teams</p>
                      <p>• Develop advanced organizational expertise</p>
                    </div>
                    <div>
                      <p>• Create institutional pattern libraries and documentation</p>
                      <p>• Establish continuous improvement processes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Development Process?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            PAIR methodology represents a fundamental evolution in software development. Let us help you implement this proven framework in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Request Your AI Capability Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-3">
                Discuss PAIR Implementation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
