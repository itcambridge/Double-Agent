import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import ContactForm from "@/components/ContactForm"

export const metadata = {
  title: "Contact | Double Agent AI Services",
  description: "Contact our AI experts to discuss your digital transformation. Schedule a consultation for AI-powered financial solutions.",
  robots: "index, follow",
  openGraph: {
    title: "Contact | Double Agent AI Services",
    description: "Contact our AI experts to discuss your digital transformation. Schedule a consultation for AI-powered financial solutions.",
    url: "https://double-agent.co.uk/contact",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact | Double Agent AI Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Double Agent AI Services",
    description: "Contact our AI experts to discuss your digital transformation. Schedule a consultation for AI-powered financial solutions.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-600 hover:bg-emerald-700">Get In Touch</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Schedule Your AI Development Assessment</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Ready to understand how AI coding can transform your development process? Let's evaluate your current capabilities and create a strategic roadmap for successful AI adoption.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="border-0 shadow-lg bg-white rounded-lg p-8">
                <div className="flex items-start space-x-3 mb-6">
                  <Mail className="h-5 w-5 text-emerald-600 mt-1" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-slate-600">hello@double-agent.co.uk</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 mb-6">
                  <Phone className="h-5 w-5 text-emerald-600 mt-1" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-slate-600">0203 883 4544</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 mb-6">
                  <MapPin className="h-5 w-5 text-emerald-600 mt-1" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-slate-600">
                      London, UK
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-emerald-600 mt-1" />
                  <div>
                    <div className="font-semibold">Business Hours</div>
                    <div className="text-slate-600">Mon–Fri: 9am–6pm GMT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Common questions about our AI services and consultation process
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">How long does a typical AI implementation take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Implementation timelines vary based on complexity and scope. Simple solutions can be deployed in 4-6
                  weeks, while comprehensive transformations typically take 3-6 months. We'll provide a detailed
                  timeline during our initial consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">What's included in the initial consultation?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Our initial consultation includes a comprehensive assessment of your current operations,
                  identification of AI opportunities, ROI projections, and a preliminary implementation roadmap. This
                  consultation is complimentary for qualified prospects.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Do you work with companies of all sizes?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  While we work with organizations of various sizes, our solutions are primarily designed for mid-market
                  to enterprise financial institutions. We typically work with companies that have at least $100M in
                  assets under management or annual revenue.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Assessment Process FAQ</h2>
            <p className="text-lg text-slate-600">Frequently asked questions about our assessment process and what to expect.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-2">What happens during the initial assessment?</h3>
              <p className="text-slate-700">Our comprehensive assessment includes evaluation of your current development workflows, team capabilities, tool chains, and identification of optimal AI coding integration opportunities. We provide detailed recommendations and implementation roadmaps.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-2">How long does an assessment take?</h3>
              <p className="text-slate-700">Initial assessments typically require 2-3 days of collaborative evaluation, followed by 1 week for analysis and report preparation. We'll provide a detailed timeline during our first consultation.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-2">What if we're not ready for AI coding yet?</h3>
              <p className="text-slate-700">Perfect! Part of our assessment determines readiness and identifies any preparatory steps needed. We'll recommend the optimal timing and approach for your specific situation.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-2">Do you work with teams new to AI development?</h3>
              <p className="text-slate-700">Absolutely. Most of our clients are beginning their AI coding journey. Our assessment helps identify the best starting points and learning paths for teams at any experience level.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-2">Can you assess remote or distributed teams?</h3>
              <p className="text-slate-700">Yes, our assessment process is designed for remote collaboration. We work effectively with distributed teams worldwide and can accommodate various time zones and working arrangements.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-2">What's included in the assessment deliverables?</h3>
              <p className="text-slate-700">You receive a comprehensive report including current state analysis, tool recommendations, implementation roadmap, risk assessment, training recommendations, and success metrics framework.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
