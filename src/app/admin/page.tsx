import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { logout } from '@/app/login/actions'
import { Button } from '@/components/ui/button'

export default async function AdminDashboardPage() {
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

  if (!profile || profile.role !== 'admin') {
     return redirect('/dashboard')
  }

  return (
    <div className="flex-1 w-full flex flex-col items-center mt-20 gap-8">
      <div className="w-full max-w-4xl p-8 border-2 border-red-500 rounded-xl shadow-sm bg-red-50/50">
        <h1 className="text-3xl font-bold mb-4 text-red-700">Admin Dashboard</h1>
        <p className="text-lg bg-red-100 p-4 rounded-md inline-block text-red-900">
          Admin Area. Welcome, <strong>{profile?.first_name} {profile?.last_name}</strong>.
        </p>
        
        <div className="mt-8 grid gap-4 bg-white p-6 rounded-lg border border-red-200">
          <h2 className="text-xl font-semibold">Admin Shortcuts</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Manage Users & Clients</li>
            <li>Manage Sessions & Availability</li>
            <li>System Settings</li>
          </ul>
        </div>

        <form action={logout} className="mt-8">
          <Button variant="outline">Sign Out of Admin</Button>
        </form>
      </div>
    </div>
  )
}
