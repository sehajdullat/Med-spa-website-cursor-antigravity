import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { logout } from '@/app/login/actions'
import { Button } from '@/components/ui/button'

export default async function DashboardPage() {
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
    <div className="flex-1 w-full flex flex-col items-center mt-20 gap-8">
      <div className="w-full max-w-4xl p-8 border rounded-xl shadow-sm">
        <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
        <p className="text-lg bg-secondary/30 p-4 rounded-md inline-block">
          Welcome back, <strong>{profile?.first_name} {profile?.last_name}</strong>!
        </p>
        
        <div className="mt-8 grid gap-4 bg-muted/20 p-6 rounded-lg border">
          <h2 className="text-xl font-semibold">Profile Details</h2>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <p className="text-muted-foreground">Email:</p>
            <p>{user.email}</p>
            
            <p className="text-muted-foreground">Role:</p>
            <p className="capitalize font-semibold text-primary">{profile?.role}</p>

            <p className="text-muted-foreground">Status:</p>
            <p className="capitalize">{profile?.status}</p>
            
            <p className="text-muted-foreground">User ID:</p>
            <p className="font-mono text-xs">{user.id}</p>
          </div>
        </div>

        <form action={logout} className="mt-8">
          <Button variant="outline">Sign Out</Button>
        </form>
      </div>
    </div>
  )
}
