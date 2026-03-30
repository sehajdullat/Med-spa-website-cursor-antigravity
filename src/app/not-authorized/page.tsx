import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";

export default function NotAuthorizedPage() {
  return (
    <div className="flex-1 flex flex-col w-full h-full min-h-[60vh] px-8 justify-center items-center gap-4 text-center mt-20">
      <ShieldAlert className="w-16 h-16 text-red-500 mb-4" />
      <h1 className="text-4xl font-bold font-heading">Not Authorized</h1>
      <p className="text-lg text-muted-foreground max-w-md">
        You do not have permission to access the requested page. If you believe this is a mistake, please contact support.
      </p>
      
      <div className="flex gap-4 mt-8">
        <Button asChild variant="outline">
          <Link href="/">Return Home</Link>
        </Button>
        <Button asChild>
          <Link href="/dashboard">Go to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
