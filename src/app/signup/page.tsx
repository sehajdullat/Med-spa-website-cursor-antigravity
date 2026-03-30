import { signup } from '@/app/login/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default async function SignupPage(
  props: {
    searchParams: Promise<{ message?: string, error?: string, success?: string }>
  }
) {
  const searchParams = await props.searchParams;
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
        <Input type="email" name="email" placeholder="you@example.com" required />
        
        <Label htmlFor="password" className="mt-4">Password</Label>
        <Input type="password" name="password" placeholder="••••••••" required />
        
        <Button className="mt-8">Sign Up</Button>
        
        {searchParams?.error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm text-center font-medium">
            <p className="mb-1 font-bold">Sign Up Failed</p>
            {searchParams.error}
          </div>
        )}

        {searchParams?.success && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-md text-sm text-center font-medium">
            <p className="mb-1 font-bold">Success!</p>
            {searchParams.success}
          </div>
        )}

        {searchParams?.message && (
          <p className="mt-4 p-4 bg-gray-100 text-gray-700 font-medium text-sm text-center">
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
