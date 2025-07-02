"use client"

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-600 hover:bg-emerald-700">Get In Touch</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Let's Discuss Your AI Transformation</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Ready to explore how AI can transform your financial operations? Our experts are here to help you navigate
              your digital transformation journey.
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
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Schedule a Consultation</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours to discuss your needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">Your Role *</Label>
                        <Select onValueChange={(value) => handleInputChange("role", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ceo">CEO/President</SelectItem>
                            <SelectItem value="cto">CTO/Technology Director</SelectItem>
                            <SelectItem value="cfo">CFO/Finance Director</SelectItem>
                            <SelectItem value="cro">CRO/Risk Director</SelectItem>
                            <SelectItem value="vp">VP/Senior Manager</SelectItem>
                            <SelectItem value="director">Director</SelectItem>
                            <SelectItem value="manager">Manager</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <Select onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="risk-analytics">Intelligent Risk Analytics</SelectItem>
                          <SelectItem value="market-intelligence">Market Intelligence</SelectItem>
                          <SelectItem value="customer-intelligence">Customer Intelligence</SelectItem>
                          <SelectItem value="fraud-detection">Fraud Detection</SelectItem>
                          <SelectItem value="process-automation">Process Automation</SelectItem>
                          <SelectItem value="consulting">Strategic Consulting</SelectItem>
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                          <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your current challenges and what you'd like to achieve with AI..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        rows={5}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-emerald-600 mt-1" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-slate-600">hello@aiservices.com</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-emerald-600 mt-1" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-slate-600">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-emerald-600 mt-1" />
                    <div>
                      <div className="font-semibold">Address</div>
                      <div className="text-slate-600">
                        123 Financial District
                        <br />
                        New York, NY 10004
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-emerald-600 mt-1" />
                    <div>
                      <div className="font-semibold">Business Hours</div>
                      <div className="text-slate-600">
                        Mon - Fri: 9:00 AM - 6:00 PM EST
                        <br />
                        Sat - Sun: Closed
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-xl text-emerald-800">Quick Response Guarantee</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-emerald-700">
                    We understand that time is critical in financial services. That's why we guarantee a response to all
                    inquiries within 24 hours, and often much sooner.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Prefer to Call?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Speak directly with one of our AI consultants to discuss your needs and explore how we can help
                    transform your operations.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Phone className="mr-2 h-4 w-4" />
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
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
    </div>
  )
}
