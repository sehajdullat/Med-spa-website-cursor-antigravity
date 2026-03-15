"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FEATURED_REVIEWS, GOOGLE_REVIEWS_URL } from "@/data/reviews";

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-4xl md:text-5xl mb-4 text-[var(--color-accent)]">
            Real Stories, Real Results
          </h2>
          <p className="text-xl text-gray-600">
            Join 1,000+ clients who love their transformations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {FEATURED_REVIEWS.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[var(--color-secondary)] rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                    aria-hidden
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden shrink-0" />
                <div>
                  <p className="font-medium text-[var(--color-accent)]">
                    {review.author}
                  </p>
                  <p className="text-sm text-gray-500">{review.treatment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="inline-flex items-center gap-3"
            asChild
          >
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-semibold text-gray-700">Google</span>
              <span className="flex items-center gap-1">
                Read all 428 reviews
                <span className="flex ml-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                      aria-hidden
                    />
                  ))}
                </span>
                <span className="ml-1 font-bold text-[var(--color-accent)]">
                  5.0
                </span>
              </span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
