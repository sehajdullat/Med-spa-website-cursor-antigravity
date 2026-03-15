import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TREATMENTS } from "@/data/treatments";

export const metadata = {
  title: "Services | TranquilGlow Med Spa",
  description:
    "Explore our medical-grade facial, injectable, body, and wellness treatments.",
};

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="font-heading text-4xl md:text-6xl mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600">
            FDA-approved treatments for face, body, and wellness. Safe, fast,
            and tailored to you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-16 p-8 bg-green-50 rounded-2xl border-2 border-green-200 text-center">
          <h2 className="font-heading text-2xl mb-3">Not Sure Where to Start?</h2>
          <p className="text-gray-700 mb-6">
            Take our quick quiz and get a personalized treatment plan in under 2
            minutes.
          </p>
          <Button
            size="lg"
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]"
            asChild
          >
            <Link href="/quiz">Find Your Perfect Treatment →</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TREATMENTS.map((t) => (
            <Link
              key={t.slug}
              href={`/treatments/${t.slug}`}
              className="block p-6 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-lg transition-all"
            >
              <h3 className="font-heading text-xl mb-2 text-[var(--color-accent)]">
                {t.name}
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {t.shortDescription}
              </p>
              <p className="text-[var(--color-primary)] font-medium">
                From {t.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
