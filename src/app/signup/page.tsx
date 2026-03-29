import { signup } from '@/app/login/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function SignupPage({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 mt-20 mx-auto border rounded-xl p-8 shadow-sm">
      <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground" action={signup}>
        <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="first_name">First Name</Label>
            <Input name="first_name" placeholder="John" required />
          </div>
          <div>
            <Label htmlFor="last_name">Last Name</Label>
            <Input name="last_name" placeholder="Doe" required />
          </div>
        </div>

        <Label htmlFor="email" className="mt-4">Email</Label>
        <Input name="email" placeholder="you@example.com" required />
        
        <Label htmlFor="password" className="mt-4">Password</Label>
        <Input type="password" name="password" placeholder="••••••••" required />
        
        <Button className="mt-8">Sign Up</Button>
        
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-red-100 text-red-600 font-medium text-sm text-center">
            {searchParams.message}
          </p>
        )}
        
        <p className="text-sm mt-4 text-center">
          Already have an account? <a href="/login" className="underline text-blue-600">Log in</a>
        </p>
      </form>
    </div>
  )
}
