"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, CheckCircle, Clock, Phone, Mail, MapPin } from "lucide-react"

// Note: metadata handled by layout.tsx since this is a client component

export default function AssessmentPage() {
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

                <Button 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-3"
                  onClick={() => {
                    const subject = encodeURIComponent("AI Development Assessment Request");
                    const body = encodeURIComponent("Hello,\n\nI would like to schedule an AI development capability assessment for my team.\n\nPlease contact me to discuss the next steps.\n\nBest regards");
                    window.location.href = `mailto:hello@double-agent.co.uk?subject=${subject}&body=${body}`;
                  }}
                >
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
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-3"
              onClick={() => {
                const subject = encodeURIComponent("AI Development Assessment Request");
                const body = encodeURIComponent("Hello,\n\nI would like to schedule an AI development capability assessment for my team.\n\nPlease contact me to discuss the next steps.\n\nBest regards");
                window.location.href = `mailto:hello@double-agent.co.uk?subject=${subject}&body=${body}`;
              }}
            >
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
