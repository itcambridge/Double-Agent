"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, TrendingUp, Users, Shield, Zap, Target, ArrowRight, CheckCircle, Clock, FileText, BarChart3, Globe, Award } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-600 hover:bg-emerald-700">Strategic Development Solutions</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">From Assessment to Implementation: Your AI Coding Transformation Journey</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Our comprehensive service portfolio guides organizations through every stage of AI development adoption—from initial capability assessment to full implementation and optimization. Whether you're a growing startup or established enterprise, our proven methodology ensures successful AI coding transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Service (Flagship) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-emerald-600 hover:bg-emerald-700">Flagship Service</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">AI Development Capability Assessment</h2>
              <p className="text-xl text-slate-600 mb-6">The foundation of successful AI coding adoption</p>
              <p className="text-lg text-slate-700 max-w-4xl mx-auto">
                Transform your development approach through comprehensive evaluation and strategic planning. Understanding your current development ecosystem is crucial before adopting AI coding tools. Our assessment goes beyond surface-level evaluation to uncover the specific opportunities, risks, and requirements unique to your organization.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-emerald-50">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Current State Analysis</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Development Workflow Evaluation: Map existing processes, identify bottlenecks and inefficiencies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Codebase Assessment: Analyze current code quality, architecture patterns, and technical debt</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Team Skill Inventory: Evaluate current capabilities and identify skill gaps</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Tool Chain Review: Assess existing development tools and integration points</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-emerald-50">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">AI Readiness Evaluation</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Security Risk Assessment: Identify vulnerabilities that could be amplified by AI code generation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Infrastructure Compatibility: Determine readiness for AI development tool integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Process Maturity: Evaluate current DevOps, testing, and quality assurance practices</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Cultural Readiness: Assess team openness to new development methodologies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-emerald-50">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Strategic Planning</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Opportunity Identification: Pinpoint high-impact areas for AI coding implementation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Risk Mitigation Strategy: Plan safeguards against the security issues affecting 90% of unvetted AI code</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">ROI Projection: Calculate expected productivity gains, cost savings, and timeline benefits</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Implementation Roadmap: Phased approach tailored to your team's capacity and constraints</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Assessment Deliverables</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <FileText className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-900">Comprehensive Report (40-60 pages)</div>
                    <div className="text-slate-600">Findings, recommendations, and risk analysis</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <BarChart3 className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-900">Executive Summary</div>
                    <div className="text-slate-600">For leadership decision-making</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-900">Technical Roadmap</div>
                    <div className="text-slate-600">Specific tool recommendations and integration strategies</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-900">Training Plan</div>
                    <div className="text-slate-600">Customized for different team roles and skill levels</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-emerald-600 mr-2" />
                  <span className="text-slate-700">Timeline: 2-3 weeks</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-emerald-600 mr-2" />
                  <span className="text-slate-700">Investment: Let's discuss</span>
                </div>
              </div>
              <p className="text-lg text-slate-600 mb-8">
                Our assessment typically pays for itself within weeks through improved efficiency alone
              </p>
              <Button 
                className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3"
                onClick={() => {
                  window.location.href = '/about';
                }}
              >
                Schedule Your Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Supporting Services</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Complete your AI coding transformation with our comprehensive supporting services
              </p>
            </div>

            <div className="space-y-12">
              {/* Tool Selection & Integration Strategy */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <TrendingUp className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Tool Selection & Integration Strategy</CardTitle>
                      <CardDescription className="text-lg">Strategic guidance for choosing and implementing optimal AI development platforms</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">
                    Based on your assessment results, we provide expert recommendations for AI coding tools that align with your technical environment, team capabilities, and business objectives.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Service Components:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Platform Evaluation: Comprehensive analysis of AI coding tools (GitHub Copilot, Cursor, CodeWhisperer, etc.)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Integration Architecture: Design seamless workflows that enhance rather than disrupt existing processes</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Security Framework: Implement guardrails and validation processes for AI-generated code</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Pilot Program Design: Structure low-risk trials to validate tool effectiveness before full deployment</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Key Outcomes:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Optimal Tool Selection matched to your specific requirements and team size</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Integration Roadmap with minimal disruption to current development cycles</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Security Implementation preventing vulnerabilities in AI-generated code</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">ROI Framework demonstrating productivity gains and efficiency improvements</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Developer Evolution Consulting */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Developer Evolution Consulting</CardTitle>
                      <CardDescription className="text-lg">Helping development teams transition from code-writers to solution-architects</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">
                    AI doesn't replace developers—it amplifies their capabilities and shifts their focus to higher-value activities. We help teams understand and embrace this evolution, moving from implementation-focused work to architecture, design, and strategic problem-solving.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Evolution Areas:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">From Implementation to Intent: Training developers to work with AI through natural language and pattern description</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Architecture Focus: Developing skills in system design, component interaction, and strategic technical decisions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Stakeholder Collaboration: Enhancing communication with business teams and non-technical stakeholders</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Quality Oversight: Building expertise in validating, testing, and optimizing AI-generated solutions</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Team Development Components:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Role Transition Planning: Individual development paths for team members</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Skill Gap Analysis: Identify areas for growth and learning</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Mentoring Programs: Pair experienced developers with AI coding methodologies</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Career Path Mapping: Show progression opportunities in the AI-enhanced development landscape</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Implementation Support & Optimization */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <Zap className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Implementation Support & Optimization</CardTitle>
                      <CardDescription className="text-lg">Hands-on guidance for successful AI coding adoption and continuous improvement</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">
                    Successful AI tool adoption requires ongoing support, optimization, and refinement. We provide the expertise and guidance needed to maximize your investment and achieve sustained productivity gains.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Implementation Support:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Phased Rollout Management: Gradual deployment minimizing risk and disruption</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Real-time Problem Resolution: Expert support when challenges arise during adoption</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Best Practices Coaching: Ongoing mentorship for effective AI coding techniques</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Performance Monitoring: Track productivity improvements and identify optimization opportunities</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Continuous Optimization:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Regular Performance Reviews: Quarterly assessments of AI tool effectiveness</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Process Refinement: Continuous improvement of workflows and practices</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Advanced Training: Ongoing skill development as AI tools evolve</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Strategic Adjustments: Adapt approach based on results and changing requirements</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Value Amplification Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Our Approach Multiplies Developer Value</h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                The AI coding revolution parallels the platform revolution that transformed software development. Just as Salesforce created an ecosystem that expanded developer opportunities rather than eliminating them, AI coding tools amplify developer capabilities and create demand for higher-skilled professionals.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">The Platform Effect</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <span className="text-slate-700">Salesforce grew from startup to 1.5 million registered developers</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <span className="text-slate-700">150,000+ companies now deploy Salesforce technology</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <span className="text-slate-700">$1.6 trillion in new revenue generated by 2026</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <span className="text-slate-700">Developer roles multiplied, not eliminated</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">How AI Coding Creates Similar Amplification</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Routine tasks automated → developers focus on architecture and design</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Faster development cycles → more projects, more opportunities</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Lower barriers to entry → expanded market for software solutions</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Higher-value work → increased demand for strategic development expertise</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Role in Your Productivity Evolution</h3>
              <p className="text-lg text-slate-700">
                We ensure your team captures this productivity amplification rather than being left behind. Through our assessment and evolution consulting, we help developers transition from implementation-focused roles to strategic, high-value positions that leverage AI capabilities while delivering measurable efficiency gains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Flow Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Your Journey From Assessment to Transformation</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                A structured approach ensuring successful AI coding adoption and long-term productivity gains
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Phase 1: Foundation (Weeks 1-3)</h3>
                <h4 className="text-lg font-semibold mb-3 text-emerald-400">Assessment & Strategy Development</h4>
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li>Comprehensive capability assessment</li>
                  <li>Risk analysis and mitigation planning</li>
                  <li>Tool selection and integration strategy</li>
                  <li>Team readiness evaluation</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Phase 2: Preparation (Weeks 4-8)</h3>
                <h4 className="text-lg font-semibold mb-3 text-emerald-400">Planning & Pilot Implementation</h4>
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li>Security framework implementation</li>
                  <li>Pilot program design and launch</li>
                  <li>Initial team training and onboarding</li>
                  <li>Performance measurement setup</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Phase 3: Implementation (Weeks 9-16)</h3>
                <h4 className="text-lg font-semibold mb-3 text-emerald-400">Rollout & Integration</h4>
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li>Phased tool deployment</li>
                  <li>Workflow integration and optimization</li>
                  <li>Ongoing training and support</li>
                  <li>Performance monitoring and adjustment</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Phase 4: Evolution (Ongoing)</h3>
                <h4 className="text-lg font-semibold mb-3 text-emerald-400">Optimization & Growth</h4>
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li>Continuous performance improvement</li>
                  <li>Advanced capability development</li>
                  <li>Strategic role evolution support</li>
                  <li>Long-term success planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your AI Development Evolution?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Start with our comprehensive assessment to understand your current capabilities, identify optimal opportunities, and receive strategic recommendations for successful AI coding adoption. Let's discuss how this investment in your team's productivity can transform your development process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-3"
              onClick={() => {
                window.location.href = '/about';
              }}
            >
              Schedule Your Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              className="bg-white text-emerald-600 hover:bg-slate-100 text-lg px-8 py-3"
              onClick={() => {
                const subject = encodeURIComponent("Assessment Overview Request");
                const body = encodeURIComponent("Hello,\n\nI would like to receive the AI Development Assessment Overview document.\n\nPlease send me the detailed information about your assessment process.\n\nBest regards");
                window.location.href = `mailto:hello@double-agent.co.uk?subject=${subject}&body=${body}`;
              }}
            >
              Download Assessment Overview
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
