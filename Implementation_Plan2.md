# Implementation Plan 2: Advanced Features & E-Commerce

## Analysis of Current State
Based on `IMPLEMENTATION_PLAN1.md` and the user's latest request:
1. **What's done:** Basic Next.js layout, routing for some components, initial project structure according to Plan 1.
2. **What needs changes:** Ensure images are actually displayed (currently blank spots need image tags with valid placeholder/actual images), update service pages structurally with text and before/after pictures, add animations (Framer Motion) to sections.
3. **What is left:** Complete Booking System (all 7 steps with Stripe), Service Quiz, and the new requirements: an E-Commerce Shop system and an SEO-optimized Blog system.

## Proposed Changes

### 1. Content and UI Enhancements
- **Images:** Add proper image tags and ensure all `src` paths point to actual assets (or working placeholders like Unsplash source URLs) to replace all blank grey areas across Home, About, Services, and Treatment pages.
- **Animations:** Integrate Framer Motion (fade-ups, slide-ins) to Home and other key sections.
- **Service Pages:** Update `/treatments/[slug]` structurally. Add explicit sections for what the service is, architected details, and before/after image sliders or grids.

### 2. Core Feature Completion
- **Booking System:** Finish the 7-step booking modal with form persistence, dynamic calendars, and Stripe Payment Intent setup.
- **Service Quiz:** Complete the 6-question quiz and logic to give treatment recommendations.

### 3. E-Commerce Shop System
Implement a full E-Commerce experience.
- **Pages & Components:**
  - `/shop` (Shop Page with Hero, Filters, Grid, Pagination)
  - `ProductCard` (Hover effects, badges, pricing, quick add)
  - `/shop/[slug]` (Product Detail Page with galleries, accordions for info, reviews, add to cart with quantity)
  - `CartDrawer` (Slide-out cart using Radix UI Sheet, quantity updates, dynamic subtotal)
  - `/checkout` (Checkout Page with shipping forms, contact info, Stripe payment integration, order summary)
- **Data Catalog:** Define a dataset of 60+ products internally (Categories: Cleansers, Serums, Moisturizers, Sunscreen, Masks, Tools, Bundles, Gift Cards) inside `src/data/shop.ts`.

### 4. Blog & SEO System
Implement an SEO-focused Blog.
- **Pages & Components:**
  - `/blog` (Hero, Category Filters, Featured Post, Blog Grid, Newsletter section)
  - `BlogCard` (Image, category badge, title, excerpt, author info)
  - `/blog/[slug]` (Sticky table of contents, MDX/Rich Text content, Related Treatments CTA, Author Bio)
- **SEO & Content:** 
  - Add standard SEO metadata templates in Next.js (`generateMetadata`) for OpenGraph and Schema.org (Article schema).
  - Create 15+ new SEO-optimized blog posts covering med spa topics, ensuring H2/H3 target keywords, internal linking to treatments/shop, FAQ schema markup, and high-quality images.

## Verification Plan
1. **Visual Checks:** Check pages locally (`npm run dev`) to ensure all images render correctly and no blank spots remain. Verify animations trigger smoothly on scroll.
2. **Booking Flow:** End-to-end test the booking modal from step 1 through to Stripe checkout simulation.
3. **E-commerce Flow:** Test the shop page filtering, add products to the cart, edit quantities in the cart drawer, and navigate through the checkout page with a test Stripe card.
4. **Blog Navigation:** Ensure blog post pages load, table of contents works, related products link correctly, and `<head>` metadata (title, description, schema) is accurately hydrated based on the blog post.
