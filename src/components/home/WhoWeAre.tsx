"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function WhoWeAre() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden order-2 md:order-1 bg-gray-200"
          >
            <Image
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2940&auto=format&fit=crop"
              alt="TranquilGlow med spa"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
            />
          </motion.div>
          <div className="order-1 md:order-2">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
              Who We Are
            </p>
            <h2 className="font-heading text-4xl md:text-5xl mb-6 leading-tight text-[var(--color-accent)]">
              Tired of generic treatments that don&apos;t fix your skin or pain?
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              At <strong>TranquilGlow</strong>, we combine medical precision with
              spa luxury to deliver{" "}
              <strong className="text-[var(--color-primary)]">
                FDA-approved
              </strong>
              , personalized care for acne, aging, and migraines.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With <strong>1,000+ clients glowing</strong>, we focus on your
              goals—safely and fast.
            </p>
            <Button
              variant="outline"
              className="border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-gray-50"
              asChild
            >
              <Link href="/about">Learn More About Us →</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
