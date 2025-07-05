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
│   ├── about/          # About page
│   ├── contact/        # Contact page (with assessment booking form and FAQ)
│   ├── services/       # Services page (assessment-first methodology)
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
- **Footer:** Company, services, contact, and legal placeholders.

## Key Design Decisions
- **Assessment-First Messaging:** All content and CTAs drive toward booking an assessment, not selling tools.
- **Formal, Consultative Tone:** Language is professional, clear, and focused on risk mitigation and strategic value.
- **Component Modularity:** UI primitives and layout components are reusable and easy to extend.
- **SEO & Social:** Each page exports a `metadata` object for SEO, Open Graph, and Twitter cards. Sitemap and robots.txt are generated with `next-sitemap`.
- **Accessibility:** Semantic HTML, alt text, and accessible form fields are prioritized.

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

## Extending & Maintaining the Codebase
- **Add new pages:** Create a new folder in `app/` and add a `page.tsx` file. Export a `metadata` object for SEO.
- **Add/modify components:** Place reusable UI in `components/` or `components/ui/`. Use Tailwind for styling.
- **Update content:** Edit the relevant page in `app/`. Keep messaging assessment-first and risk-aware.
- **Forms:** Place client-side logic in a separate component (e.g., `ContactForm.tsx`) and import into the page.
- **Footer/Header:** Update `footer.tsx` and `header.tsx` for navigation or company info changes.
- **SEO:** Update `metadata` exports and use `next-sitemap` for sitemap/robots.txt.
- **Accessibility:** Use semantic tags, label all form fields, and test with Lighthouse or axe.

## Best Practices
- **Follow the assessment-first, risk-mitigation messaging throughout.**
- **Keep all content formal and consultative.**
- **Use modular, reusable components.**
- **Document any major changes in Roadmap.md.**
- **Test locally before deploying to production.**
- **Keep dependencies up to date and monitor for vulnerabilities.**

## Contact
For questions or handover, refer to the leadership team in the About page or contact hello@doubleagent.co.uk. 