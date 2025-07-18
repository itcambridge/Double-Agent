"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Send } from "lucide-react";
import Link from "next/link";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    focus: "",
    teamSize: "",
    assessmentInterest: "",
    message: "",
  });
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content with form data
    const subject = encodeURIComponent("AI Development Assessment Request - " + formData.company);
    const emailBody = `Hello,

I would like to schedule an AI development capability assessment for my team.

CONTACT INFORMATION:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company}
Role: ${formData.role}

TEAM DETAILS:
Development Focus: ${formData.focus}
Team Size: ${formData.teamSize}
Assessment Interest: ${formData.assessmentInterest}

MESSAGE:
${formData.message || 'No additional message provided.'}

Please contact me to discuss the next steps and schedule our assessment.

Best regards,
${formData.firstName} ${formData.lastName}`;

    const mailtoLink = `mailto:hello@double-agent.co.uk?subject=${subject}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl">Book Your Comprehensive Assessment</CardTitle>
        <CardDescription>
          Schedule a detailed evaluation of your development capabilities and receive strategic AI coding recommendations.
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
            <Select onValueChange={(value) => handleInputChange("role", value)} required>
              <SelectTrigger>
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ceo">CEO/Founder</SelectItem>
                <SelectItem value="cto">CTO/Technology Director</SelectItem>
                <SelectItem value="vp">VP Engineering</SelectItem>
                <SelectItem value="dev-manager">Development Manager</SelectItem>
                <SelectItem value="lead-dev">Lead Developer</SelectItem>
                <SelectItem value="product-manager">Product Manager</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="focus">Current Development Focus *</Label>
            <Select onValueChange={(value) => handleInputChange("focus", value)} required>
              <SelectTrigger>
                <SelectValue placeholder="Select your current focus" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-apps">Web Applications</SelectItem>
                <SelectItem value="mobile">Mobile Development</SelectItem>
                <SelectItem value="enterprise">Enterprise Software</SelectItem>
                <SelectItem value="cloud">Cloud Infrastructure</SelectItem>
                <SelectItem value="data-ai">Data/AI Systems</SelectItem>
                <SelectItem value="legacy">Legacy System Modernization</SelectItem>
                <SelectItem value="multiple">Multiple Areas</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="teamSize">Team Size *</Label>
            <Select onValueChange={(value) => handleInputChange("teamSize", value)} required>
              <SelectTrigger>
                <SelectValue placeholder="Select your team size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="individual">Individual Developer</SelectItem>
                <SelectItem value="2-5">2-5 Developers</SelectItem>
                <SelectItem value="6-15">6-15 Developers</SelectItem>
                <SelectItem value="16-50">16-50 Developers</SelectItem>
                <SelectItem value="50+">50+ Developers</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="assessmentInterest">Assessment Interest *</Label>
            <Select onValueChange={(value) => handleInputChange("assessmentInterest", value)} required>
              <SelectTrigger>
                <SelectValue placeholder="Select your assessment interest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="comprehensive">Comprehensive capability assessment</SelectItem>
                <SelectItem value="tool-recommendations">Specific tool recommendations</SelectItem>
                <SelectItem value="implementation">Implementation planning</SelectItem>
                <SelectItem value="training">Training and adoption support</SelectItem>
                <SelectItem value="not-sure">Not sure - want to discuss options</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your current development challenges and goals"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              rows={5}
            />
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="privacy-consent"
              checked={privacyConsent}
              onCheckedChange={(checked) => setPrivacyConsent(checked as boolean)}
              required
            />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="privacy-consent"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{" "}
                <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700 underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/terms" className="text-emerald-600 hover:text-emerald-700 underline">
                  Terms of Service
                </Link>
              </Label>
            </div>
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full bg-emerald-600 hover:bg-emerald-700"
            disabled={!privacyConsent}
          >
            Schedule Assessment
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
