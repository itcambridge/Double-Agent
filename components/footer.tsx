import Link from "next/link"
import { Brain, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl">Double Agent</span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Strategic AI development consulting. Helping organizations successfully navigate the transition to AI-powered development practices.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><Link href="/services">AI Development Assessment</Link></li>
              <li><Link href="/services">Tool Selection Consulting</Link></li>
              <li><Link href="/services">Implementation Support</Link></li>
              <li><Link href="/services">Team Training & Development</Link></li>
              <li><Link href="/services">Strategic Roadmap Planning</Link></li>
              <li><Link href="/services">Ongoing Optimization</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-center space-x-2"><Mail className="h-4 w-4 text-emerald-400" /><span>hello@double-agent.co.uk</span></li>
              <li className="flex items-center space-x-2"><Phone className="h-4 w-4 text-emerald-400" /><span>0203 883 4544</span></li>
              <li className="flex items-center space-x-2"><MapPin className="h-4 w-4 text-emerald-400" /><span>London, UK</span></li>
              <li><span className="text-slate-400">Serving clients globally via remote consulting</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center text-slate-500 text-xs">
          © 2025 Double Agent. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
