import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, FileText, Shield, Users, Globe, Mail, Phone, AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Terms of Service | Double Agent",
  description: "Double Agent's Terms of Service - Governing your use of our website and AI development consulting services.",
  robots: "index, follow",
  openGraph: {
    title: "Terms of Service | Double Agent",
    description: "Governing your use of our website and services",
    url: "https://double-agent.co.uk/terms",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Terms of Service | Double Agent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Double Agent",
    description: "Governing your use of our website and services",
    images: ["/og-image.png"],
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-600 hover:bg-emerald-700">Terms of Service</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Effective Date: January 2025
            </p>
            <p className="text-lg text-slate-300 mt-4">
              These Terms of Service ("Terms") govern your use of the Double Agent website and services. By using our website or engaging our services, you agree to these Terms.
            </p>
          </div>
        </div>
      </section>

      {/* Services Description */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Services Description</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl">AI Development Consulting</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Assessment Services: Comprehensive evaluation of development capabilities and AI readiness</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Strategic Consulting: Tool selection, integration strategy, and implementation guidance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Support Services: Training, ongoing optimization, and performance monitoring</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <Globe className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl">Service Delivery</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Remote Methodology: Services delivered primarily through remote collaboration</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Global Coverage: Available to organizations worldwide</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Custom Engagement: Services tailored to specific client needs and requirements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Terms */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Engagement Terms</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Service Agreements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Separate Contracts: Specific services governed by individual service agreements</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">These Terms: Apply to website use and general service framework</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Precedence: Service agreements take precedence over these Terms for contracted services</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Assessment Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Initial Consultation: Complimentary consultation to determine scope and fit</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Formal Assessment: Comprehensive evaluation under separate service agreement</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Deliverables: Detailed reports and recommendations as specified in service agreements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Intellectual Property</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <FileText className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl">Our Content</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Website Content: All text, graphics, designs, and materials are owned by Double Agent</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Methodology: Our assessment and consulting methodologies are proprietary</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Research: White papers and research publications remain our intellectual property</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Limited License: You may view and print content for personal, non-commercial use only</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <Shield className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl">Client Information</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Confidentiality: All client information treated as confidential</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Work Product: Assessment reports and recommendations become client property upon payment</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Anonymized Insights: We may use anonymized insights to improve our methodology</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Website Use */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Website Use</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Acceptable Use</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Lawful Purposes: Use website and services only for lawful business purposes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Accurate Information: Provide accurate and complete information in all interactions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">No Interference: Do not attempt to disrupt website functionality or security</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Prohibited Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Unauthorized Access: No attempts to access restricted areas or systems</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Malicious Code: No introduction of viruses, malware, or harmful code</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Content Scraping: No automated extraction of website content</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Competitive Intelligence: No use of services to benefit competitors</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Limitation of Liability</h2>
            
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 mb-8">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Important Notice</h3>
                  <p className="text-amber-800">
                    Our services provide recommendations and guidance, not guarantees. Clients are responsible for implementation decisions and outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Service Limitations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Consulting Nature: Our services provide recommendations and guidance, not guarantees</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Implementation Responsibility: Clients responsible for implementation decisions and outcomes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Third-Party Tools: We are not responsible for performance of third-party AI coding tools</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Business Results: No guarantee of specific business outcomes or productivity improvements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Liability Limits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Maximum Liability: Our total liability limited to fees paid for specific services</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Excluded Damages: No liability for indirect, consequential, or punitive damages</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Professional Advice: Our services supplement but do not replace professional technical judgment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Payment Terms</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Assessment Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Consultation-Based: Fees determined through individual consultation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Payment Terms: Specific payment terms outlined in service agreements</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Refund Policy: Refunds governed by individual service agreements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Expenses</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Included Costs: Standard remote delivery costs included in service fees</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Additional Expenses: Travel or special requirements subject to separate agreement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Confidentiality</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Mutual Confidentiality</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Client Information: All client business and technical information kept confidential</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Our Methods: Clients agree to keep our proprietary methodologies confidential</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">NDA Available: We can execute separate Non-Disclosure Agreements as required</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Exceptions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">Confidentiality does not apply to information that is:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Public Domain: Publicly available through no breach of confidentiality</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Previously Known: Known prior to disclosure</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Independently Developed: Developed independently without use of confidential information</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Required Disclosure: Required by law or court order</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Termination */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Termination</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Service Termination</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Completion: Services terminate upon completion of agreed scope</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Early Termination: Either party may terminate with written notice as specified in service agreements</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Outstanding Obligations: Payment and confidentiality obligations survive termination</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Website Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Suspension: We may suspend access for violation of these Terms</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Permanent Ban: Repeated violations may result in permanent access prohibition</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Governing Law</h2>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <Scale className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">Jurisdiction</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">UK Law</h4>
                    <p className="text-slate-700">These Terms governed by laws of England and Wales</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Dispute Resolution</h4>
                    <p className="text-slate-700">Disputes resolved through UK courts or agreed arbitration</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">International Clients</h4>
                    <p className="text-slate-700">Choice of law clause applies regardless of client location</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <Scale className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl">Legal Questions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900">Email</h4>
                      <p className="text-slate-700">legal@double-agent.co.uk</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Mail</h4>
                      <p className="text-slate-700">Double Agent, Legal Department, London, UK</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl">Service Questions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900">Email</h4>
                      <p className="text-slate-700">hello@double-agent.co.uk</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Phone</h4>
                      <p className="text-slate-700">0203 883 4544</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Changes to Terms */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Changes to Terms</h2>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <p className="text-slate-700">
                  We may update these Terms periodically. Changes will be posted on our website with updated effective date. Continued use constitutes acceptance of revised Terms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
} 