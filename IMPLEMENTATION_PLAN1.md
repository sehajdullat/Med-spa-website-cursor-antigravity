# TranquilGlow Med Spa – Implementation Plan

**Goal:** Build the full site exactly as specified: homepage, 12 treatment pages, 7-step booking (with Stripe), About, Results, Pricing, conversion widgets, technical requirements (SEO, analytics, a11y, security), **plus premium enhancements** (Service Quiz, cleaner hero, mega menu, form persistence, sticky sidebar, testimonials).

---

## Phase 0: Document and Bootstrap

- **0.1** This file (IMPLEMENTATION_PLAN1.md) is the single source of truth for the implementation plan.
- **0.2** Initialize Next.js 14+ with TypeScript and App Router: `npx create-next-app@latest` (TypeScript, Tailwind, ESLint, `src/` optional, App Router).
- **0.3** Install dependencies: `@radix-ui/*` (DropdownMenu, Dialog, Accordion, Tabs, Sheet, Progress, Separator, Checkbox, Slider), `framer-motion`, `react-hook-form`, `@hookform/resolvers`, `zod`, `@stripe/stripe-js`, `@stripe/react-stripe-js`, `date-fns`, `lucide-react`. Add `resend` or `sendgrid` for email.
- **0.4** Configure Google Fonts: Inter (body) and Playfair Display (headings) in `next.config.js` or layout.

---

## Phase 1: Design System and Foundation

- **1.1** Define CSS variables and Tailwind theme in `src/app/globals.css` (and optionally `tailwind.config.ts`): colors (`--color-primary`, `--color-primary-hover`, `--color-secondary`, etc.), typography (`--font-heading`, `--font-body`, `--text-*`), spacing (`--spacing-*`), shadows, radius, transition. Map to Tailwind utilities where needed.
- **1.2** Create a small component library in `src/components/ui/`: `Button` (variants: default, outline, ghost), `Input`, `Label`, `Card`, `Badge`, `Separator` (wrap Radix where applicable). Use design tokens from globals.
- **1.3** Add custom CSS for animations (e.g. fade-in, slide-up) in `globals.css` or `src/styles/animations.css` and ensure `--transition` is used consistently.
- **1.4** Root layout: apply fonts, global styles, and a simple structure (header slot, main, footer slot). No full header yet.

---

## Phase 2: Layout and Navigation

- **2.1** **Header (desktop):** Fixed header with logo left, center nav (Home, **Services mega menu**, About, Results, Pricing), right: phone link + “Book Free Consultation” CTA. Use **MegaMenu** for Services (see Premium Feature 3 below)—hover-activated mega dropdown with categories (Face, Injectables, Laser & Body, Wellness) and featured treatments. Style with design system; ensure contrast and focus states (a11y).
- **2.2** **Mobile header:** Hamburger (Lucide `Menu`) opening a Radix `Sheet` from the left; inside: same nav tree (collapsible sections for Services). Phone + Book CTA at bottom of sheet.
- **2.3** **Footer:** Logo, key links (Services, About, Results, Pricing, Contact), phone, address, social placeholders, copyright. Optional: small trust line (years, certifications).
- **2.4** **Trust bar (optional top):** Thin bar with rotating message (e.g. “$50 off first visit”, “Free consultation”). Implement with state + interval; ensure it doesn’t block header.

---

## Phase 3: Homepage

- **3.1** **Hero (Premium Feature 2 – Cleaner Hero):** Single full-viewport section with one background image (`/images/hero-treatment.jpg`), gradient overlay (`from-black/60 to-black/30`). Centered content only: headline “Glow From Within”, subline “Medical-grade treatments. Spa-like luxury. Results you can trust.” Two CTAs: **“Explore Services →”** (links to `/services`) and **“Book Now”** (opens booking modal). Trust indicators below CTAs: FDA-Approved, 5.0 (428 reviews), 1,000+ Happy Clients. Scroll indicator (ChevronDown) at bottom. Use Framer Motion for headline/subline/CTAs (opacity + y). No split before/after or floating testimonial card in hero.
- **3.2** **Who We Are:** Two-column section (text right, image left). Label “Who We Are”, headline, body copy (TranquilGlow, FDA-approved, 1,000+ clients), “Learn More About Us” outline button. Image: `about-intro.jpg` in rounded container.
- **3.3** **Your Path to Radiant Beauty:** Numbered steps (1–4) with sticky left image and right column of step cards + “Begin Your Beauty Journey” CTA and small disclaimer. Reuse a shared `StepCard` component.
- **3.4** **Treatments That Work:** Grid of treatment cards (from shared data). Each card: image, title, short description, “Starting at $X/session”, hover overlay with “Learn More” CTA, link to `/treatments/[slug]`. Use the 12 treatments and pricing from spec.
- **3.5** **Testimonials (Premium Feature 6):** Section “Real Stories, Real Results” after “Your Path to Radiant Beauty”. Grid of 3 review cards (stars, quote, author photo/name, treatment). Data: `FEATURED_REVIEWS`. Bottom: button “Read all 428 reviews” with Google logo and 5.0 rating linking to `GOOGLE_REVIEWS_URL`.
- **3.6** **Quiz entry point:** In hero or near Treatments section, add CTA **“Find Your Perfect Treatment”** that opens the Service Quiz (modal or dedicated page). See Premium Feature 1.
- **3.7** Add Framer Motion for scroll/reveal animations on sections (e.g. fade-in, slight Y motion). Keep animations subtle and performant.

---

## Phase 4: Data Layer and Treatment Pages

- **4.1** **Treatments data:** Create `src/data/treatments.ts` (or JSON): 12 treatments with slug, name, tagline, heroImage, description, treats[], duringTreatment, aftercare, resultsTimeline, duration, downtime, resultsVisible, priceRange, faqs[], reviewCount, beforeAfterImages[]. Use placeholder copy and placeholder image paths. **Also create** `TREATMENTS_DATABASE` (keyed by slug) for the Service Quiz with fields: name, category, tagline, description, price, duration, downtime, resultsTimeline, goodFor[], image, popularity. Align slugs with quiz treatment keys (e.g. hydrafacial, botox, fillers, laser-hair-removal, etc.).
- **4.2** **Dynamic route:** `src/app/treatments/[slug]/page.tsx`. Fetch treatment by slug; 404 if not found.
- **4.3** **Treatment page template:** Hero (60vh, dark overlay, title + tagline + two CTAs). Main layout: **StickySidebar (Premium Feature 5)** in one column + content in remaining columns. Content sections with IDs: overview, what-it-treats, timeline, results, pricing, faq. StickySidebar tracks scroll and highlights active section; includes optional reading progress bar. Content blocks: “What is {name}?”, “What It Treats” (grid of concerns with checkmarks), “What to Expect” (timeline steps), “Real Results” (before/after sliders), FAQ (Radix Accordion). Sidebar: Quick Facts (duration, downtime, results visible, cost), “Book {name}” CTA, phone link, rating + “Read reviews on Google”. Bottom CTA strip (green): “Ready to Transform Your Skin?” with CTAs.
- **4.4** **Shared components:** `TimelineStep`, `QuickFact`, `BeforeAfterSlider`, **StickySidebar** (see Premium Feature 5). Use Next/Image for all images with blur placeholders.

---

## Phase 5: Booking System

- **5.1** **Entry points:** “Book Free Consultation” in header and floating “Book Now” button (visible after ~3s scroll, fixed bottom-right). Both open the same booking modal.
- **5.2** **Booking modal:** Radix `Dialog`; content area with 7-step flow and a top progress bar (e.g. “Step 1 of 7”). Steps: (1) Service Selection, (2) Provider Selection, (3) Date & Time, (4) Personal Information, (5) Medical Screening, (6) Payment Deposit, (7) Confirmation. Use React state (or a small context) for `step` and `bookingData`.
- **5.3** **Step 1 – Service Selection:** Search input, “Most Popular” grid (from treatments data), “Browse All Treatments” link, **“Not sure? Take the quiz”** link that opens Service Quiz (Premium Feature 1). On select, store service and go to step 2.
- **5.4** **Step 2 – Provider Selection:** List of providers (from `src/data/providers.ts` or similar). Select one; store and go to step 3.
- **5.5** **Step 3 – Date & Time:** Two columns: calendar (date-fns + custom calendar UI or Radix Calendar); time slots for selected date. Disable past dates; mock “available” slots. Store date + time; continue.
- **5.6** **Step 4 – Personal Information:** Form (React Hook Form + Zod): name, email, phone. **Use Premium Feature 4 (Form Auto-Save):** `useFormPersistence('booking', initialValues)` so form data is saved to localStorage and restored on return. Show “Welcome back! We saved your information” and optional “Clear saved data” when data exists. No PHI in URL; only in persisted form state and submission payload.
- **5.7** **Step 5 – Medical Screening:** Short form (e.g. conditions, medications, allergies). No PHI in URL or localStorage; submit with booking payload only.
- **5.8** **Step 6 – Payment:** Stripe Elements. $50 deposit. Trust badges, cancellation policy + SMS consent checkboxes, summary. On success, call backend route; then move to step 7.
- **5.9** **Step 7 – Confirmation:** Success icon, “You’re All Set!”, appointment summary card, “Add to Google/Apple Calendar”, “What Happens Next”, referral CTA, “Close and return to homepage”. On success, clear persisted booking form data (useFormPersistence clear).
- **5.10** **Standalone /book page:** Optional full-page version of the same flow for deep linking and SEO.

---

## Phase 6: About, Results, and Pricing

- **6.1** **About page:** Hero (team image, headline “Medical Expertise You Can Trust…”). Our Story: two columns (founder image, story copy + stat cards: 15 years, 1,000+ clients, 15 professionals). Meet Our Team: grid of provider cards. Certifications section: logo strip + short copy.
- **6.2** **Results page:** Gallery-focused page: before/after pairs (reuse BeforeAfterSlider or grid), optional filters by treatment. Placeholder images and captions.
- **6.3** **Pricing page:** Headline “Transparent Pricing…”. Tabs by category (Injectables, Laser, Facial, Body, Wellness). Each tab: list of treatments with base price and package deals. Financing widget: slider for treatment cost (200–3000), monthly payment display, “Apply for Financing” CTA. Satisfaction guarantee strip at bottom.
- **6.4** **Services page:** If implemented, add prominent **“Not Sure? Take the Quiz”** banner and link to Service Quiz (Premium Feature 1).

---

## Phase 7: Conversion and UX

- **7.1** Floating “Book Now” button: fixed bottom-right, show after 3s scroll; use Framer Motion for entrance.
- **7.2** Exit-intent modal: on mouseleave (top of viewport), show one-time offer ($50 off + free consultation); email capture form; sessionStorage to avoid repeat.
- **7.3** Mobile sticky footer: Only on small screens; Call Now (tel:) and Book Now (opens booking modal).
- **7.4** Google Reviews: Use testimonials section (Phase 3.5) and optional carousel; “Read all 428 reviews” link. Track **quiz completion** and common answer patterns in analytics (Premium Feature 1).

---

## Phase 8: Forms, Validation, and Email

- **8.1** All forms: React Hook Form + Zod. Consistent error display and a11y. Booking form uses `useFormPersistence` (Premium Feature 4) for steps that collect name/email/phone; show “saved from last visit” and “Clear saved data” when applicable.
- **8.2** API routes: `POST /api/booking`, `POST /api/exit-offer`. Server-side only; no PHI in client storage except transient form persistence (user can clear).
- **8.3** Email templates: Booking confirmation, 24h reminder, post-treatment follow-up. Placeholder content; wire to booking.

---

## Phase 9: Payments and Security

- **9.1** Stripe: Env vars for keys and webhook secret. PaymentIntent for $50; webhook for `payment_intent.succeeded` to finalize booking and send confirmation.
- **9.2** Security: No PHI in URLs. Rate limit booking and form endpoints. HTTPS in production. Form persistence stores only non-sensitive booking contact info; medical screening not persisted in localStorage.
- **9.3** HIPAA: Forms server-submitted; avoid logging PHI; structure allows privacy/terms mention for health data.

---

## Phase 10: SEO, Analytics, and Performance

- **10.1** SEO: Per-page metadata, Open Graph, sitemap.xml, robots.txt.
- **10.2** Schema: JSON-LD for LocalBusiness/MedicalBusiness, Review/AggregateRating where applicable.
- **10.3** Analytics: GA4 and Meta Pixel (env-based). Conversion events: booking completed, form submissions, exit-offer signup, **quiz completed** (Premium Feature 1). Hotjar placeholder.
- **10.4** Performance: Lazy load below-fold; code-split by route; optimize images; target <3s load, 90+ Lighthouse.

---

## Phase 11: Accessibility and Polish

- **11.1** Keyboard navigation: All interactive focusable; focus trap in modals (booking, quiz, exit-intent); visible focus ring.
- **11.2** ARIA: Labels for icon buttons, aria-expanded for dropdowns and mega menu, aria-live for step changes and quiz steps.
- **11.3** Contrast: WCAG 2.1 AA for text/background.
- **11.4** Final pass: Mobile breakpoints, hero, mega menu (touch-friendly or collapse on mobile), sticky sidebar, testimonials grid, image alt text.

---

## Phase 12: Content and Assets

- **12.1** Placeholder images: hero-treatment.jpg, about-intro, team, treatments (including quiz TREATMENTS_DATABASE images), before/after, mega menu featured images, review photos.
- **12.2** Copy: 12 treatment pages, About, Pricing, Homepage sections. Tone: professional, warm, benefit-driven. **Quiz:** All 6 questions and options; `generatePersonalizedReason` helper copy for results.
- **12.3** Optional: 4 blog posts and listing page if in scope.

---

## Phase 13: Deploy and Verify

- **13.1** Vercel: env vars (Stripe, Resend/SendGrid, GA4, Meta Pixel). Build and fix errors.
- **13.2** Deploy; verify HTTPS, forms, booking flow (test Stripe), quiz flow, mega menu, form persistence, sticky sidebar, key pages on mobile and desktop.
- **13.3** Lighthouse and fix critical issues.

---

## Premium Features (Cursor Enhancements) – Detail

### Feature 1: Comprehensive Service Recommendation Quiz

- **Component:** `src/components/ServiceQuiz.tsx` (client component).
- **Data:** `QUIZ_QUESTIONS` (6 questions): (1) What brings you today? (multi-select, goals + treatments), (2) Which area to improve? (single: face, eyes, body, skin, hair, wellness), (3) Lifestyle (busy, active, flexible, maintenance), (4) Experience (beginner, intermediate, experienced, comparing), (5) When see results? (immediate, month, long-term, exploring), (6) Beauty vibe (natural, dramatic, preventative, corrective, holistic). Each option has `value` and `treatments[]` (treatment keys).
- **Treatment database:** `TREATMENTS_DATABASE` keyed by slug (hydrafacial, botox, fillers, laser-hair-removal, microneedling, chemical-peels, body-contouring, iv-therapy, led-therapy, dermaplaning, ipl-photofacial, laser-vein-removal, consultation). Fields: name, category, tagline, description, price, duration, downtime, resultsTimeline, goodFor[], image, popularity.
- **Algorithm:** `calculateRecommendations(answers)`: weight goals (3), area (2.5), lifestyle (2), experience (1.5), timeline (2), vibe (1.5). Aggregate scores per treatment; boost for urgency (immediate) and beginner (consultation, hydrafacial, dermaplaning); return top 3–4; ensure consultation in top 4 if exploring or beginner.
- **UI:** Multi-step quiz with AnimatePresence/motion; results view: “Your Personalized Beauty Plan”, **Perfect Match** (large card with image, name, tagline, description, “Why this is perfect for you”, quick facts, “Book {name}” CTA), **Also Great For You** (2 cards), **Bonus Recommendation** (optional 4th), **Save Your Plan** (email capture + “$50 off”), **Ready to Get Started** (3 steps + Book Free Consultation), **Retake Quiz** link.
- **Placement:** Homepage hero or section CTA “Find Your Perfect Treatment” opens quiz (modal or `/quiz`). Services page: prominent “Not Sure? Take Quiz” banner. Booking Step 1: “Not sure what you need? Talk to an expert / Take the quiz”. Reusable `<QuizTriggerButton />` where needed.
- **Styling:** Design system (green-600, font-heading, spacing). Framer Motion for transitions. Mobile: stack cards vertically, reduce text size.
- **Analytics:** Track quiz completion and, if desired, most common answer patterns.

---

### Feature 2: Cleaner Hero Section

- Single full-viewport hero; no split before/after.
- Background: one image `/images/hero-treatment.jpg`, overlay `bg-gradient-to-r from-black/60 to-black/30`.
- Centered: headline “Glow From Within”, subline “Medical-grade treatments. Spa-like luxury. Results you can trust.”
- Two CTAs: “Explore Services →” (navigate to `/services`), “Book Now” (open booking modal).
- Trust line: FDA-Approved, 5.0 (428 reviews), 1,000+ Happy Clients (icons: CheckCircle, Star, Users).
- Scroll indicator: ChevronDown at bottom with animate-bounce.
- Framer Motion: initial opacity 0 / y 30, animate in with staggered delay for h1, p, buttons, trust line.

---

### Feature 3: Mega Dropdown Navigation

- **Component:** `src/components/MegaMenu.tsx` (or `layout/MegaMenu.tsx`).
- **Trigger:** “Services” with ChevronDown (rotate 180 on hover). Hover to open (no click required for desktop).
- **Dropdown:** Absolute, centered below trigger, z-50. Panel ~900px wide, white, rounded-2xl, shadow-2xl, border. Grid 12 cols: 8 cols for categories, 4 cols for featured.
- **Categories:** Face Treatments (HydraFacial, Chemical Peels, Microneedling, Dermaplaning), Injectables (Botox & Dysport, Dermal Fillers), Laser & Body (Laser Hair, Body Contouring, IPL, Vein Removal), Wellness (IV Vitamin Drips, LED Light Therapy). Each: icon, title, list of links to `/treatments/[slug]` with price.
- **Featured:** 2 cards with image, name, description, price, link to treatment; “View All Services” link to `/services`.
- **Header:** Replace simple Services link or Radix Dropdown with `<MegaMenu />`. Mobile: keep Sheet with collapsible list (no mega menu on small screens).

---

### Feature 4: Form Auto-Save with Browser Cache

- **Hook:** `src/hooks/useFormPersistence.ts`. Signature: `useFormPersistence<T>(formKey: string, initialValues: T): [T, (values: T) => void, () => void]`. Load from `localStorage.getItem('form_' + formKey)` on mount (try/catch parse). Save on update via `localStorage.setItem(...)`. Clear function removes item and resets to initialValues.
- **Usage:** In booking form (e.g. Step 4 Personal Information), use hook with key `'booking'` and initial values { name, email, phone, dateOfBirth }. Sync React Hook Form defaultValues and watch: on change, call updateFormData. When saved data exists, show banner: “Your information was saved from your last visit” + “Clear saved data” button. On successful booking confirmation (Step 7), call clearFormData. Do not persist medical screening or payment data.
- **Toast (optional):** “Welcome back! We saved your information from last time” on mount when formData has email.

---

### Feature 5: Sticky Sidebar with Active Section Highlighting

- **Component:** `src/components/StickySidebar.tsx`. Props: `sections: { id: string; label: string }[]`.
- **State:** `activeSection` (default first section id). On scroll: find section whose offsetTop <= scrollPosition + 100 < offsetTop + offsetHeight; set activeSection. Use useEffect + scroll listener and cleanup.
- **Rendering:** Sticky aside (e.g. top-24). Nav of buttons: onClick scrollToSection(sectionId) with smooth scroll and offset for fixed header. Active item: bg-green-50 text-green-700 font-medium + left border (e.g. w-1 h-8 bg-green-600).
- **Optional:** Reading progress bar below nav (percentage based on active section index).
- **Usage:** Treatment detail page: pass sections e.g. overview, what-it-treats, timeline, results, pricing, faq. Main content sections use matching id attributes.

---

### Feature 6: Testimonials Section on Homepage

- **Placement:** After “Your Path to Radiant Beauty”, before or after “Treatments That Work”.
- **Data:** `FEATURED_REVIEWS` (id, text, author, treatment, photo optional).
- **Layout:** Section title “Real Stories, Real Results”, subline “Join 1,000+ clients who love their transformations”. Grid 3 cols: each card has 5 stars, quote text, author block (avatar, name, treatment). Bottom: single CTA button with Google logo, “Read all 428 reviews”, star rating 5.0, ExternalLink icon; link to `GOOGLE_REVIEWS_URL` (new tab).

---

## Suggested File Structure (Updated)

```
src/
  app/
    layout.tsx
    page.tsx (home)
    globals.css
    about/page.tsx
    results/page.tsx
    pricing/page.tsx
    services/page.tsx (optional; quiz CTA prominent)
    book/page.tsx (optional)
    quiz/page.tsx (optional; if quiz is full page)
    treatments/[slug]/page.tsx
    api/
      booking/route.ts
      exit-offer/route.ts
      stripe-webhook/route.ts
      create-payment-intent/route.ts
  components/
    ui/ (Button, Input, Card, Badge, etc.)
    layout/ (Header, Footer, MobileNav, TrustBar, MegaMenu)
    home/ (Hero, WhoWeAre, PathToBeauty, TreatmentsGrid, TestimonialsSection)
    treatment/ (TreatmentHero, QuickFactsSidebar, TimelineStep, BeforeAfterSlider, StickySidebar)
    booking/ (BookingModal, steps 1–7, ProgressBar)
    conversion/ (FloatingBookingButton, ExitIntentModal, MobileFooter)
    ServiceQuiz.tsx (quiz flow + QuizResults + QuizTriggerButton)
  hooks/
    useFormPersistence.ts
  data/
    treatments.ts (full treatment data + TREATMENTS_DATABASE for quiz)
    providers.ts
    certifications.ts
    quiz.ts (QUIZ_QUESTIONS, calculateRecommendations)
    reviews.ts (FEATURED_REVIEWS, GOOGLE_REVIEWS_URL)
  lib/
    stripe.ts
    utils.ts (cn, etc.)
    validation/ (zod schemas)
public/
  images/ (hero-treatment, about, team, treatments, before-after, featured-*, google-logo.svg)
```

---

## Implementation Checklist (Premium Additions)

- [ ] **Service Quiz:** Create `ServiceQuiz.tsx` with 6 questions, TREATMENTS_DATABASE, `calculateRecommendations`, QuizResults UI, `generatePersonalizedReason`. Add to homepage (“Find Your Perfect Treatment”), services page (“Not Sure? Take Quiz”), and booking Step 1.
- [ ] **Mega Menu:** Create `MegaMenu.tsx`; replace Services link in Header with `<MegaMenu />`; ensure hover works and mobile falls back to Sheet.
- [ ] **Hero:** Replace split hero with single-image cleaner hero (two CTAs, trust indicators, scroll indicator).
- [ ] **Form Persistence:** Add `useFormPersistence` hook; integrate into booking form Step 4; show “saved from last visit” and clear on confirmation.
- [ ] **Sticky Sidebar:** Create `StickySidebar.tsx`; add to treatment detail page with sections; ensure content sections have ids.
- [ ] **Testimonials:** Add `TestimonialsSection` and `FEATURED_REVIEWS`; insert on homepage; add Google reviews link.
- [ ] **Test:** Verify mega menu hover, quiz flow end-to-end, form save/restore/clear, sidebar active state and scroll, testimonials and links.

---

## Execution Order Summary

1. **Phase 0** – Bootstrap Next.js, install deps, fonts.
2. **Phase 1** – Design system and UI primitives.
3. **Phase 2** – Header with **MegaMenu**, footer, mobile nav, trust bar.
4. **Phase 3** – Homepage: **cleaner hero**, Who We Are, Path to Beauty, **Testimonials**, Treatments grid, **quiz CTA**.
5. **Phase 4** – Treatments data (+ TREATMENTS_DATABASE), dynamic treatment pages with **StickySidebar**.
6. **Phase 5** – 7-step booking with **useFormPersistence** and quiz link in Step 1.
7. **Phase 6** – About, Results, Pricing; Services page with quiz banner.
8. **Phase 7** – Floating CTA, exit-intent, mobile footer, reviews.
9. **Phase 8** – Form validation and email.
10. **Phase 9** – Stripe and security.
11. **Phase 10** – SEO, schema, analytics (incl. quiz completion), performance.
12. **Phase 11** – A11y and responsive polish.
13. **Phase 12** – Content and assets (incl. quiz copy and review data).
14. **Phase 13** – Deploy and verify.

**Build the Service Quiz (Feature 1) early** so it can be linked from hero, services page, and booking; implement MegaMenu with Phase 2; cleaner hero and testimonials with Phase 3; form persistence and sticky sidebar when building booking and treatment pages.
