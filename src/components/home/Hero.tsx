"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle, Star, Users, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const router = useRouter();

  const openBooking = () => {
    window.dispatchEvent(new CustomEvent("open-booking"));
  };

  return (
    <section className="relative h-screen min-h-[600px]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-treatment.jpg"
          alt="TranquilGlow med spa treatment"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          unoptimized
          onError={(e) => {
            const t = e.target as HTMLImageElement;
            t.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      </div>

      <div className="relative h-full flex items-center justify-center">
        <div className="text-center max-w-4xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 text-white leading-tight"
          >
            Glow From Within
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto"
          >
            Medical-grade treatments. Spa-like luxury. Results you can trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="xl"
              variant="default"
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-10 py-7 text-lg font-medium"
              onClick={() => router.push("/services")}
            >
              Explore Services →
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-7 text-lg font-medium backdrop-blur-sm"
              onClick={openBooking}
            >
              Book Now
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-white/80 text-sm"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[var(--color-success)]" />
              <span>FDA-Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              <span>5.0 (428 reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>1,000+ Happy Clients</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" aria-hidden />
      </div>
    </section>
  );
}
