"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TREATMENTS } from "@/data/treatments";

export default function TreatmentsGrid() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-4xl md:text-5xl mb-4 text-[var(--color-accent)]">
            Treatments That Work
          </h2>
          <p className="text-gray-600">
            Safe, fast, and tailored to your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TREATMENTS.map((treatment, i) => (
            <motion.div
              key={treatment.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link href={`/treatments/${treatment.slug}`}>
                <div className="group cursor-pointer">
                  <div className="relative h-72 rounded-2xl overflow-hidden mb-4 bg-gray-200">
                    <Image
                      src={treatment.image}
                      alt={treatment.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        variant="secondary"
                        className="bg-white text-[var(--color-accent)] hover:bg-gray-100 pointer-events-none"
                      >
                        Learn More →
                      </Button>
                    </div>
                  </div>
                  <h3 className="font-heading text-2xl mb-2 text-[var(--color-accent)]">
                    {treatment.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {treatment.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      From{" "}
                      <strong className="text-[var(--color-accent)]">
                        {treatment.price}
                      </strong>
                    </span>
                    <ArrowRight className="w-5 h-5 text-[var(--color-primary)] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
