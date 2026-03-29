import { login } from './actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginPage({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 mt-20 mx-auto border rounded-xl p-8 shadow-sm">
      <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground" action={login}>
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        
        <Label htmlFor="email">Email</Label>
        <Input name="email" placeholder="you@example.com" required />
        
        <Label htmlFor="password" className="mt-4">Password</Label>
        <Input type="password" name="password" placeholder="••••••••" required />
        
        <Button className="mt-8">Sign In</Button>
        
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-red-100 text-red-600 font-medium text-sm text-center">
            {searchParams.message}
          </p>
        )}
        
        <p className="text-sm mt-4 text-center">
          Don't have an account? <a href="/signup" className="underline text-blue-600">Sign up</a>
        </p>
      </form>
    </div>
  )
}
