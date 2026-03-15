"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Clock,
  Calendar,
  Sparkles,
  DollarSign,
  Star,
  CheckCircle,
} from "lucide-react";
import type { Treatment } from "@/data/treatments";
import StickySidebar from "@/components/treatment/StickySidebar";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "what-it-treats", label: "What It Treats" },
  { id: "timeline", label: "Timeline" },
  { id: "results", label: "Before & After" },
  { id: "faq", label: "FAQ" },
];

export default function TreatmentPageClient({
  treatment,
}: {
  treatment: Treatment;
}) {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] bg-gray-900">
        <Image
          src={treatment.heroImage}
          alt={treatment.name}
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          unoptimized
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl md:text-6xl text-white mb-6">
                {treatment.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                {treatment.tagline}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]"
                  asChild
                >
                  <Link href="/book">Book This Treatment →</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <a href="tel:5551234567">Ask a Question</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1 order-2 lg:order-1 space-y-8">
              <StickySidebar sections={SECTIONS} />
              <div className="lg:sticky lg:top-24 bg-[var(--color-secondary)] rounded-2xl p-6 space-y-4 border border-[var(--color-border)]">
                <h3 className="font-heading text-xl mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[var(--color-primary)]" />
                    <div>
                      <p className="text-xs text-gray-500">Treatment Time</p>
                      <p className="font-medium">{treatment.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-[var(--color-primary)]" />
                    <div>
                      <p className="text-xs text-gray-500">Downtime</p>
                      <p className="font-medium">{treatment.downtime}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-[var(--color-primary)]" />
                    <div>
                      <p className="text-xs text-gray-500">Results Visible</p>
                      <p className="font-medium">{treatment.resultsVisible}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-[var(--color-primary)]" />
                    <div>
                      <p className="text-xs text-gray-500">Cost</p>
                      <p className="font-medium">{treatment.priceRange}</p>
                    </div>
                  </div>
                </div>
                <Separator />
                <Button
                  className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]"
                  asChild
                >
                  <Link href="/book">Book {treatment.name} →</Link>
                </Button>
                <p className="text-center text-sm text-gray-600">
                  Have questions?{" "}
                  <a
                    href="tel:5551234567"
                    className="text-[var(--color-primary)] hover:underline"
                  >
                    Call (555) 123-4567
                  </a>
                </p>
                <div className="flex items-center gap-2 pt-2">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <span className="font-semibold">5.0</span>
                  <span className="text-sm text-gray-500">
                    ({treatment.reviewCount} reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 order-1 lg:order-2 space-y-16">
              <div id="overview">
                <h2 className="font-heading text-4xl mb-6">
                  What is {treatment.name}?
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>{treatment.description}</p>
                </div>
              </div>

              <div id="what-it-treats">
                <h2 className="font-heading text-4xl mb-6">What It Treats</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {treatment.treats.map((concern) => (
                    <div
                      key={concern}
                      className="flex items-center gap-3 p-4 border border-[var(--color-border)] rounded-xl"
                    >
                      <CheckCircle className="w-6 h-6 text-[var(--color-primary)] shrink-0" />
                      <span className="text-lg">{concern}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div id="timeline">
                <h2 className="font-heading text-4xl mb-8">What to Expect</h2>
                <div className="space-y-6">
                  <div className="pl-6 border-l-2 border-[var(--color-primary)]">
                    <h3 className="font-semibold text-lg mb-2">
                      Before Treatment
                    </h3>
                    <p className="text-gray-700">
                      Free consultation • Medical history review • Photos taken
                      • Treatment plan confirmed
                    </p>
                  </div>
                  <div className="pl-6 border-l-2 border-gray-200">
                    <h3 className="font-semibold text-lg mb-2">
                      During Treatment
                    </h3>
                    <p className="text-gray-700">
                      {treatment.duringTreatment}
                    </p>
                  </div>
                  <div className="pl-6 border-l-2 border-gray-200">
                    <h3 className="font-semibold text-lg mb-2">
                      After Treatment
                    </h3>
                    <p className="text-gray-700">{treatment.aftercare}</p>
                  </div>
                  <div className="pl-6 border-l-2 border-gray-200">
                    <h3 className="font-semibold text-lg mb-2">
                      Results Timeline
                    </h3>
                    <p className="text-gray-700">
                      {treatment.resultsTimeline}
                    </p>
                  </div>
                </div>
              </div>

              {treatment.beforeAfterImages &&
                treatment.beforeAfterImages.length > 0 && (
                  <div id="results">
                    <h2 className="font-heading text-4xl mb-8">Real Results</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {treatment.beforeAfterImages.map((pair, idx) => (
                        <div
                          key={idx}
                          className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-200"
                        >
                          <Image
                            src={pair.after}
                            alt={pair.caption ?? "After"}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                          {pair.caption && (
                            <p className="mt-2 text-sm text-gray-600">
                              {pair.caption}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              <div id="faq">
                <h2 className="font-heading text-4xl mb-8">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {treatment.faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`faq-${idx}`}>
                      <AccordionTrigger className="text-xl text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-lg text-gray-700">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[var(--color-primary)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
            Ready to Transform Your Skin?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 1,000+ clients who&apos;ve achieved their beauty goals with{" "}
            {treatment.name}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[var(--color-primary)] hover:bg-gray-100"
              asChild
            >
              <Link href="/book">Book Free Consultation →</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
