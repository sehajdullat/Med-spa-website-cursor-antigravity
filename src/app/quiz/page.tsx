import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Find Your Perfect Treatment | TranquilGlow",
  description: "Take our quick quiz for a personalized treatment plan.",
};

export default function QuizPage() {
  return (
    <div className="py-16 md:py-20 min-h-[60vh] flex items-center justify-center">
      <div className="container mx-auto px-4 text-center max-w-lg">
        <h1 className="font-heading text-4xl mb-6">Find Your Perfect Treatment</h1>
        <p className="text-gray-600 mb-8">
          Our personalized quiz is coming soon. In the meantime, book a free
          consultation and our team will help you choose the best treatments
          for your goals.
        </p>
        <Button
          size="lg"
          className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]"
          asChild
        >
          <Link href="/book">Book Free Consultation →</Link>
        </Button>
        <p className="mt-6 text-sm text-gray-500">
          <Link href="/services" className="text-[var(--color-primary)] hover:underline">
            Browse all services
          </Link>
        </p>
      </div>
    </div>
  );
}
