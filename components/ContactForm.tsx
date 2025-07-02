"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
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
  );
} 