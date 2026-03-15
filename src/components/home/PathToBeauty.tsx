"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const STEPS = [
  {
    number: "1",
    title: "Personal Beauty Consultation",
    description:
      "Our journey begins with a comprehensive 30-minute consultation with our beauty experts. We'll listen to your concerns, analyze your skin using advanced diagnostic technology, and discuss your aesthetic goals.",
  },
  {
    number: "2",
    title: "Customized Treatment Strategy",
    description:
      "Based on your consultation, we'll create a personalized plan tailored for your skin type, concerns, timeline, and budget. Your plan may include a single treatment or a strategic combination for optimal results.",
  },
  {
    number: "3",
    title: "Your TranquilGlow Experience",
    description:
      "On treatment day, you'll relax into a peaceful, spa-like environment while our expert team works their magic. Most treatments take 30-60 minutes and are painless with zero downtime.",
  },
  {
    number: "4",
    title: "Aftercare & Ongoing Support",
    description:
      "Following every session, we provide comprehensive aftercare guidance, complementary follow-up appointments, and 24/7 support to ensure optimal results and your complete satisfaction.",
  },
];

export default function PathToBeauty() {
  return (
    <section className="py-16 md:py-20 bg-[var(--color-secondary)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-4xl md:text-5xl mb-4 text-[var(--color-accent)]">
            Your Path to Radiant Beauty
          </h2>
          <p className="text-gray-600">
            A personalized journey designed for your comfort and results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden lg:sticky lg:top-24 bg-gray-200"
          >
            <Image
              src="/images/consultation-photo.jpg"
              alt="Consultation"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </motion.div>

          <div className="space-y-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-[var(--shadow-sm)] border border-[var(--color-border)]"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-heading text-xl font-bold shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl mb-2 text-[var(--color-accent)]">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <Button
              size="lg"
              className="w-full bg-[var(--color-accent)] hover:bg-gray-800 text-white py-6"
              asChild
            >
              <Link href="/book">Begin Your Beauty Journey →</Link>
            </Button>
            <p className="text-center text-sm text-gray-500">
              Rediscover your radiance with FDA-approved treatments, zero
              downtime, and personalized care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
