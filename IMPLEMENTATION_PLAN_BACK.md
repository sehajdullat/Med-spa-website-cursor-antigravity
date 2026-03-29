# Goal Description

The goal is to implement a comprehensive backend and dashboard system for the Med Spa website using Supabase. This includes adding user authentication, role-based access control, session management, and booking functionality. The system will cater to three types of users: general users (unbooked), clients (booked at least once), and admins.

## Technical Foundation & Confirmed Requirements

Based on your requirements:
1. **User Moderation:** "Banned" and "Rejected" status are treated the same. These users are fully blocked from accessing the site.
2. **Availability:** Rules are specific to individual practitioners (assigned at the `session_types` level).
3. **Client Pages:** Focus strictly on checking and managing their own bookings.
4. **Data Fetching:** Standard Next.js 16 App Router using React Server Components (RSC) and Server Actions (no heavy client-side fetching libraries like React Query).

## Supabase Architecture & Database Schema

### Authentication & Roles
- **Supabase Auth**: Email/Password login.
- **Roles**: Handled via a `profiles` table linked to `auth.users`. Roles: `user`, `client`, `admin`.

### Proposed Tables

1. **`profiles`** (extends `auth.users`)
   - `id` (uuid, pk, references auth.users)
   - `first_name`, `last_name`, `phone`
   - `role` (enum: 'user', 'client', 'admin' - default 'user')
   - `status` (enum: 'active', 'rejected', 'banned' - default 'active') *Note: 'rejected' and 'banned' block site access.*
   - `created_at`, `updated_at`

2. **`session_types`** (Base templates for services)
   - `id` (uuid, pk)
   - `title`, `description`
   - `duration_minutes`
   - `pricing` (numeric)
   - `max_slots`
   - `location`
   - `is_active` (boolean)

3. **`sessions`** (Actual scheduled occurrences of session_types)
   - `id` (uuid, pk)
   - `session_type_id` (uuid, fk)
   - `start_datetime`, `end_datetime`
   - `availability_status` (enum: 'scheduled', 'completed', 'cancelled')
   - `cancel_reason` (text, nullable)

4. **`availability_rules`**
   - `id` (uuid, pk)
   - `session_type_id` (uuid, fk) *Rules are specific to practitioners/session types*
   - `day_of_week`, `start_time`, `end_time`
   - `is_exception`, `exception_date`

5. **`bookings`**
   - `id` (uuid, pk)
   - `session_id` (uuid, fk)
   - `user_id` (uuid, fk)
   - `status` (enum: 'pending', 'confirmed', 'cancelled', 'completed')
   - `cancel_reason` (text, nullable)
   - `created_at`, `updated_at`

6. **History / Audit Logs Tables**
   - **`login_history`**: `id`, `user_id`, `ip_address`, `user_agent`, `login_timestamp`
   - **`session_history`**: tracks changes to sessions (status updates, cancellations).
   - **`booking_history`**: tracks changes to bookings (cancellations, reschedules).
   - **`admin_audit_logs`** (Suggested): track admin actions like banning users, changing roles, or deleting records.

## Pages & Routing Structure

We will use unique slugs for user pages (no modals for full page workflows). Modals will only be used for small confirmations and tiny inline edits.

### General User Pages
- `/signup`: User registration
- `/login`: User login
- `/logout`: Handled via an API route/action
- `/profile`: Basic user info management

### Client Pages (Requires `client` or `admin` role)
- `/dashboard`: Overview of upcoming bookings
- `/bookings`: Full list of past and upcoming bookings
- `/[slug-booking-management]`: Clean URL structures for managing specific items.

### Admin Pages (Requires `admin` role)
- `/admin`: Admin dashboard overview (today's schedule, recent signups)
- `/admin/sessions`: Manage `session_types` and scheduled `sessions`
- `/admin/sessions/[id]`: Edit specific session details
- `/admin/sessions/calendar`: Visual grid/calendar to manage availability rules & exceptions
- `/admin/bookings`: Manage all bookings across all clients
- `/admin/clients`: View and manage users/clients, change roles, ban/reject
- `/admin/clients/[id]`: Detailed view of a client, their history
- `/admin/reporting`: History logs, revenue estimation (from in-person payments tracked)
- `/admin/settings`: Manage general Med Spa settings and branding

## UI/UX & Branding Guide

1. **Routing:** Avoid modals for complex workflows (e.g., editing a full profile, creating a session). Standard route navigation `/[entity]/[action]`.
2. **Modals:** Use only for simple confirmations ("Are you sure you want to cancel this booking?") or minor field updates.
3. **Toast Notifications:** Implement a global toast provider (e.g., `sonner` or `react-hot-toast`), forced to appear on the **Top-Left** as requested.
4. **Branding consistency:** 
   - Re-use existing UI components (Buttons, Inputs, Cards) from the main landing page to ensure aesthetic consistency.
   - Maintain a cohesive color palette and typography.
   - Establish an admin and client layout wrapper (with a sidebar or top navigation) that aligns with the Med Spa primary branding.

## Step-by-Step Implementation Outline

1. **Phase 1: Project Setup & Supabase Config**
   - Initialize Supabase project.
   - Create tables, enums, triggers (e.g., user role auto-update on first booking).
   - Set up Row Level Security (RLS) policies.

2. **Phase 2: Authentication & User Profiles**
   - Implement Supabase Auth (Signup, Login, Logout) and protective middleware.
   - Create the `/profile` page.
   - Hook up login history tracking via Edge Functions or Postgres Auth hooks.

3. **Phase 3: Admin Core Features**
   - Build Admin layout wrapper and routing.
   - Implement `session_types` CRUD UI.
   - Implement `sessions` scheduling and calendar management.

4. **Phase 4: Bookings System**
   - Build user-facing flow to browse available sessions and book.
   - Add database trigger to automatically upgrade `user` to `client` upon their first successful booking.
   - Build `/bookings` management for clients.

5. **Phase 5: Admin Client Management & Reporting**
   - Build `/admin/clients` list and detail views.
   - Add functionality to ban/reject and manage users.
   - Build reporting and history views (Audit logs, Booking history).

6. **Phase 6: UI Polish & Media**
   - Implement Supabase Storage Buckets for media (e.g., session images).
   - Standardize toast messages (Top-Left) and finalize modal confirmations.