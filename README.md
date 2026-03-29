# Med Spa Website & Dashboard System

A full-stack web application for a Med Spa that provides a premium public-facing aesthetic, booking functionalities, secure user/client portals, and a robust admin dashboard for managing sessions, clients, and reporting.

## 🚀 Tech Stack

### Core
- **Framework:** Next.js 16 (App Router, React Server Components, Server Actions)
- **Language:** TypeScript
- **UI Component Library:** React 19

### Styling & UI
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Headless UI:** Radix UI primitives
- **Icons:** Lucide React
- **Date & Calendar:** React Day Picker & Date-fns

### Forms & Integrations
- **Forms & Validation:** React Hook Form & Zod
- **Payments:** Stripe (`@stripe/stripe-js`)

### Backend, Database, & Auth (via Supabase)
- **Authentication:** Supabase Auth (Email/Password)
- **Database:** PostgreSQL (with Row Level Security - RLS)
- **File Storage:** Supabase Storage Buckets
- **Data Fetching:** Native Next.js server actions and React Server Components.

## ✨ Key Features

### Role-Based Access Control
- **Users:** General registered users who haven't booked yet.
- **Clients:** Users who have successfully booked at least one session.
- **Admins:** Full control over site operations, clients, schedules, and settings.

### User/Client Features
- Fully integrated booking system leveraging specific scheduled `sessions`.
- Dedicated client dashboard (`/dashboard` and `/bookings`) to oversee upcoming appointments.
- Seamless automatic role upgrade from 'user' to 'client' upon their first booking.

### Admin Dashboard Features
- **Session Management:** Full CRUD operations for `session_types` and granular scheduling logic via availability rules.
- **Calendar Oversight:** Visual grid/calendar to manage practitioner availability and exceptions.
- **Client Management:** Audit client booking histories, manage status (Active, Banned, Rejected), and modify roles.
- **Global Booking Oversight:** Complete view of all active and historic bookings across the system.
- **Tracking & Auditing:** IP/User-agent login histories, booking change logs, and admin action tracking.

## 🛠️ Getting Started

### Prerequisites
- Node.js (v20+ recommended)
- `npm`, `yarn`, `pnpm`, or `bun`
- A [Supabase](https://supabase.com/) project (for Auth & DB)
- A [Stripe](https://stripe.com/) account (for e-commerce/bookings)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables. You'll need to create a `.env.local` and configure:
   - Supabase keys (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, service role keys as needed)
   - Stripe keys (`NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_SECRET_KEY`)

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

## 🎨 Development Guidelines

- **Routing First:** Standard Next.js file-system routing (`/[entity]/[action]`) is preferred over complex modals for workflows like profile editing or creating sessions.
- **Modals:** Use sparingly, mostly for quick confirmations ("Are you sure you want to cancel?") or tiny inline edits.
- **Toasts:** Implement toast notifications configured to display in the **Top-Left** for consistency.
- **Design System:** Re-use the existing buttons, inputs, and cards to keep the premium frontend branding aligned with the client and admin dashboards.
