"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Hero from "@/components/home/Hero";
import WhoWeAre from "@/components/home/WhoWeAre";
import PathToBeauty from "@/components/home/PathToBeauty";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TreatmentsGrid from "@/components/home/TreatmentsGrid";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import BookingModal from "@/components/booking/BookingModal";

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const handler = () => setBookingOpen(true);
    window.addEventListener("open-booking", handler);
    return () => window.removeEventListener("open-booking", handler);
  }, []);

  return (
    <>
      <Hero />
      <WhoWeAre />
      <PathToBeauty />
      <TestimonialsSection />

      {/* Quiz CTA section */}
      <section className="py-16 bg-[var(--color-secondary)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl md:text-5xl mb-4 text-[var(--color-accent)]">
            Not Sure Where to Start?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Take our quick quiz and get a personalized treatment plan in under 2
            minutes.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
              asChild
            >
              <Link href="/quiz">Find Your Perfect Treatment →</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <TreatmentsGrid />

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
