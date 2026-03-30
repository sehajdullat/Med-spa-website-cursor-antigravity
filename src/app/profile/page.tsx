import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { User, Mail, ShieldCheck, History } from 'lucide-react'
import Link from 'next/link'
import AvatarUpload from '@/components/profile/AvatarUpload'

export default async function ProfilePage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/login')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  return (
    <div className="container mx-auto px-4 pt-24 pb-12 max-w-4xl min-h-[70vh]">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        
        {/* Sidebar info */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
          
          {/* Avatar Upload Component */}
          <div className="mb-4">
            <AvatarUpload 
               uid={user.id} 
               url={profile?.avatar_url} 
               onUpload={async (url) => {
                 'use server'
                 // The server action to revalidate or do anything if strictly needed, 
                 // but the client component already calls router.refresh() 
               }} 
            />
          </div>

          <h1 className="text-2xl font-bold font-heading mb-1">
            {profile?.first_name || 'Valued'} {profile?.last_name || 'Client'}
          </h1>
          <p className="text-gray-500 mb-4">{user.email}</p>
          
          <div className="flex gap-2 items-center text-sm font-medium bg-gray-50 text-gray-700 px-3 py-1.5 rounded-full mb-6 relative group cursor-help">
            <ShieldCheck className="w-4 h-4 text-[var(--color-accent)]" />
            <span className="capitalize">{profile?.role || 'User'}</span>
            
            {/* Tooltip for role */}
            <div className="absolute top-full mt-2 w-48 p-2 bg-gray-900 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 text-center">
              Your account access level
            </div>
          </div>

          {(profile?.role === 'admin' || profile?.role === 'client') && (
            <Button asChild className="w-full mb-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]">
              <Link href={profile?.role === 'admin' ? '/admin' : '/dashboard'}>
                 Go to Dashboard
              </Link>
            </Button>
          )}

          {profile?.role === 'user' && (
            <Button asChild className="w-full mb-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]">
              <Link href={"/dashboard"}>
                 Go to Dashboard
              </Link>
            </Button>
          )}

          <form action="/login" className="w-full mt-auto pt-4 border-t border-gray-100">
             {/* Log out functionality is within the header dropdown but we can add a secondary standard one here */}
          </form>
        </div>

        {/* Main content */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-[var(--color-primary)]" />
              Personal Information
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-500 block mb-1">First Name</label>
                <div className="font-medium text-gray-900">{profile?.first_name || '—'}</div>
              </div>
              <div>
                <label className="text-sm text-gray-500 block mb-1">Last Name</label>
                <div className="font-medium text-gray-900">{profile?.last_name || '—'}</div>
              </div>
              <div>
                <label className="text-sm text-gray-500 block mb-1">Email Address</label>
                <div className="font-medium text-gray-900 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  {user.email}
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-500 block mb-1">Phone Number</label>
                <div className="font-medium text-gray-900">{profile?.phone_number || 'Not provided'}</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <History className="w-5 h-5 text-[var(--color-primary)]" />
              Recent Activity
            </h2>
            <div className="text-center py-8 text-gray-500">
              <p>No recent activity found.</p>
              <Button variant="outline" className="mt-4" asChild>
                <Link href="/services">Browse Services</Link>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
