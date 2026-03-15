import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Book | TranquilGlow Med Spa",
  description: "Book your free consultation or treatment.",
};

export default function BookPage() {
  return (
    <div className="py-16 md:py-20 min-h-[60vh] flex items-center justify-center">
      <div className="container mx-auto px-4 text-center max-w-lg">
        <h1 className="font-heading text-4xl mb-6">Book Your Appointment</h1>
        <p className="text-gray-600 mb-8">
          Our full online booking flow is coming soon. For now, call us to
          schedule your free consultation or treatment.
        </p>
        <Button
          size="lg"
          className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]"
          asChild
        >
          <a href="tel:5551234567">Call (555) 123-4567</a>
        </Button>
        <p className="mt-6 text-sm text-gray-500">
          <Link href="/" className="text-[var(--color-primary)] hover:underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
