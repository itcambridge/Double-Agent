import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Mail, Clock, Globe, Lock, Users, FileText } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | Double Agent",
  description: "Double Agent's Privacy Policy - How we collect, use, and protect your information when you visit our website or engage our services.",
  robots: "index, follow",
  openGraph: {
    title: "Privacy Policy | Double Agent",
    description: "How we collect, use, and protect your information",
    url: "https://double-agent.co.uk/privacy",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy | Double Agent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Double Agent",
    description: "How we collect, use, and protect your information",
    images: ["/og-image.png"],
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-600 hover:bg-emerald-700">Privacy Policy</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Effective Date: January 2025
            </p>
            <p className="text-lg text-slate-300 mt-4">
              Double Agent ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website double-agent.co.uk or engage our services.
            </p>
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Information We Collect</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl">Information You Provide Directly</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Contact Information: Name, email address, phone number, company name</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Professional Information: Job title, team size, development focus areas</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Assessment Information: Current development challenges, AI coding experience, goals</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Communication Records: Emails, phone calls, meeting notes, and consultation records</span>
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
                    <CardTitle className="text-xl">Information Collected Automatically</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Website Usage: Pages visited, time spent, click patterns, referral sources</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Technical Information: IP address, browser type, device information, operating system</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Cookies: We use essential cookies for website functionality and analytics cookies to improve our services</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How We Use Your Information */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">How We Use Your Information</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <FileText className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl">Primary Uses</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Service Delivery: Conducting assessments, providing recommendations, delivering consulting services</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Communication: Responding to inquiries, scheduling consultations, providing support</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Improvement: Enhancing our services, website functionality, and client experience</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Legal Compliance: Meeting regulatory requirements and protecting our legitimate interests</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl">Marketing Communications</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Consent-Based: We only send marketing communications with your explicit consent</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Opt-Out: You can unsubscribe from marketing emails at any time</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Relevant Content: Information about AI coding developments, industry insights, service updates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Information Sharing and Disclosure */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Information Sharing and Disclosure</h2>
            
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-red-900 mb-4">We Do Not Sell Your Information</h3>
              <p className="text-red-800">
                We never sell, rent, or trade your personal information to third parties.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Limited Sharing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">We may share information only in these circumstances:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Service Providers: Trusted partners who help deliver our services (under strict confidentiality agreements)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Legal Requirements: When required by law, court order, or to protect rights and safety</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Business Transfers: In the event of merger, acquisition, or sale of assets (with continued privacy protection)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Client Confidentiality</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Assessment Information: All technical and business information shared during assessments remains strictly confidential</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">NDA Protection: We can work under Non-Disclosure Agreements as required</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Anonymous Use: We may use anonymized insights to improve our services without identifying specific clients</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Data Security</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <Lock className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl">Protection Measures</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Encryption: All data transmission is encrypted using industry-standard protocols</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Access Controls: Limited access to authorized personnel only</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Secure Storage: Information stored on secure, regularly backed-up systems</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Regular Review: Ongoing security assessments and updates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl">Data Retention</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Active Clients: Information retained for duration of engagement plus 7 years for business records</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Prospects: Contact information retained for 3 years unless you request removal</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Website Data: Analytics data retained for 2 years for service improvement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights and Choices */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Your Rights and Choices</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Access and Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Review: Request access to your personal information</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Update: Correct or update your information at any time</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Delete: Request deletion of your information (subject to legal retention requirements)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Restrict: Limit how we use your information</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Cookie Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Browser Settings: Configure your browser to reject cookies</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Essential Cookies: Some cookies are necessary for website functionality</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Analytics Opt-Out: Opt out of analytics tracking while maintaining website functionality</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* International Data Transfers */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">International Data Transfers</h2>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">UK Base with Global Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Primary Processing</h4>
                    <p className="text-slate-700">Information processed in the United Kingdom</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Global Clients</h4>
                    <p className="text-slate-700">We serve clients worldwide with appropriate data protection safeguards</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">GDPR Compliance</h4>
                    <p className="text-slate-700">Full compliance with UK GDPR and international data protection standards</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl">Privacy Questions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900">Email</h4>
                      <p className="text-slate-700">privacy@double-agent.co.uk</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Mail</h4>
                      <p className="text-slate-700">Double Agent, Privacy Officer, London, UK</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Response Time</h4>
                      <p className="text-slate-700">We respond to privacy inquiries within 5 business days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <Shield className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl">Data Protection Officer</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    For complex privacy matters or formal requests, contact our Data Protection Officer at:
                  </p>
                  <p className="font-semibold text-slate-900">dpo@double-agent.co.uk</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Changes to Privacy Policy */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Changes to Privacy Policy</h2>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <p className="text-slate-700">
                  We may update this Privacy Policy periodically. Changes will be posted on our website with updated effective date. Continued use of our services constitutes acceptance of revised policy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
} 