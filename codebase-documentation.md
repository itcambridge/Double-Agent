# Double Agent AI Services Website – Codebase Documentation

## Project Overview
Double Agent is a strategic AI development consulting firm. This website is designed to:
- Establish credibility and communicate the assessment-first consulting methodology
- Convert visitors into assessment bookings
- Serve as a resource for organizations navigating the AI coding revolution

The site is built with a modern, modular Next.js 15 (App Router) and Tailwind CSS stack, and is optimized for clarity, maintainability, and future extensibility.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Component Library:** Custom, with Radix UI primitives
- **Deployment:** Node.js server (pm2), Ubuntu (Linode), nginx reverse proxy, HTTPS (Let's Encrypt)
- **Version Control:** GitHub

## Directory Structure
```
2DoubleAgent/
├── app/                # Main Next.js app directory (App Router)
│   ├── about/          # About page (company story, leadership, assessment methodology)
│   ├── contact/        # Contact page (assessment booking form and FAQ)
│   ├── privacy/        # Privacy Policy page
│   ├── services/       # Services page (assessment-first methodology)
│   ├── terms/          # Terms of Service page
│   ├── layout.tsx      # Root layout, header/footer
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # Reusable UI and layout components
│   ├── footer.tsx      # Footer (company, services, contact info)
│   ├── header.tsx      # Header/navigation
│   ├── ContactForm.tsx # Client-side contact/assessment form
│   └── ui/             # UI primitives (cards, buttons, etc.)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets (images, favicon, etc.)
├── styles/             # Additional global styles
├── package.json        # Project dependencies and scripts
├── next.config.mjs     # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── Roadmap.md          # Project roadmap and progress tracking
└── codebase-documentation.md # (this file)
```

## Main Pages & Content Strategy
- **Home:** Establishes expertise, methodology, and risk mitigation. Hero, mission, impact, process, and CTA sections. Messaging is assessment-first and risk-aware.
- **Services:** Details the assessment process, supporting services, and deliverables. Emphasizes tailored recommendations and implementation support.
- **About:** Company story, leadership bios, assessment-first philosophy, and global reach.
- **Contact:** Assessment booking form (detailed, consultative), contact info, and FAQ.
- **Privacy:** Comprehensive privacy policy covering data collection, usage, and user rights.
- **Terms:** Terms of service covering service delivery, intellectual property, and legal obligations.
- **Footer:** Company, services, contact, and legal links.

## Contact Information
- **Phone:** 0203 883 4544
- **Email:** hello@double-agent.co.uk
- **Location:** London, UK (serving clients globally via remote consulting)

## Key Design Decisions
- **Assessment-First Messaging:** All content and CTAs drive toward booking an assessment, not selling tools.
- **Formal, Consultative Tone:** Language is professional, clear, and focused on risk mitigation and strategic value.
- **Component Modularity:** UI primitives and layout components are reusable and easy to extend.
- **SEO & Social:** Each page exports a `metadata` object for SEO, Open Graph, and Twitter cards. Sitemap and robots.txt are generated with `next-sitemap`.
- **Accessibility:** Semantic HTML, alt text, and accessible form fields are prioritized.
- **Legal Compliance:** Privacy policy and terms of service pages ensure GDPR and legal compliance.

## Deployment Workflow
1. **Local Development:**
   - `npm install --legacy-peer-deps`
   - `npm run dev` for local testing
2. **Production Build:**
   - `git push` to GitHub
   - On server: `git pull origin main`, `npm install --legacy-peer-deps`, `npm run build`, `pm2 restart double-agent`
3. **Hosting:**
   - Node.js app served via pm2
   - nginx reverse proxy for HTTPS and domain
   - Let's Encrypt for SSL

## Recent Updates (Latest Commit: 206f33f)
- **Contact Information:** Updated phone number to 0203 883 4544 and email to hello@double-agent.co.uk
- **Legal Pages:** Added comprehensive Privacy Policy and Terms of Service pages
- **Contact Form:** Enhanced with additional fields and improved validation
- **Dependency Management:** Resolved date-fns and react-day-picker version conflicts

## Latest Changes (January 2025)
- **Content Optimization:** Removed repetitive "How We Help You Navigate AI Coding" section from home page to reduce redundancy and improve user experience
- **Navigation Enhancement:** Fixed all "Schedule Assessment" buttons to properly link to `/about` page for assessment booking
- **Email Integration:** Implemented mailto functionality for all assessment-related buttons:
  - About page "Schedule My Assessment" buttons now open email client with pre-filled message to hello@double-agent.co.uk
  - Services page "Download Assessment Overview" button sends email request for assessment documentation
- **User Flow Improvement:** Established clear navigation path: Home → About (assessment booking) and Services → About (assessment booking)
- **Link Consistency:** Updated "Learn About Our Process" buttons to link to `/services` page for better information architecture
- **Code Quality:** Added proper Next.js Link imports and onClick handlers for improved navigation functionality

## Extending & Maintaining the Codebase
- **Add new pages:** Create a new folder in `app/` and add a `page.tsx` file. Export a `metadata` object for SEO.
- **Add/modify components:** Place reusable UI in `components/` or `components/ui/`. Use Tailwind for styling.
- **Update content:** Edit the relevant page in `app/`. Keep messaging assessment-first and risk-aware.
- **Forms:** Place client-side logic in a separate component (e.g., `ContactForm.tsx`) and import into the page.
- **Footer/Header:** Update `footer.tsx` and `header.tsx` for navigation or company info changes.
- **SEO:** Update `metadata` exports and use `next-sitemap` for sitemap/robots.txt.
- **Accessibility:** Use semantic tags, label all form fields, and test with Lighthouse or axe.
- **Legal Updates:** Modify privacy/terms pages as needed for compliance or business changes.

## Best Practices
- **Follow the assessment-first, risk-mitigation messaging throughout.**
- **Keep all content formal and consultative.**
- **Use modular, reusable components.**
- **Document any major changes in Roadmap.md.**
- **Test locally before deploying to production.**
- **Keep dependencies up to date and monitor for vulnerabilities.**
- **Maintain legal compliance with privacy and terms pages.**
- **Use --legacy-peer-deps flag for npm install to resolve dependency conflicts.**

## Contact
For questions or handover, refer to the leadership team in the About page or contact hello@double-agent.co.uk.
