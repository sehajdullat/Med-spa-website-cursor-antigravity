"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import MegaMenu from "./MegaMenu";
import MobileNav from "./MobileNav";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-[var(--color-border)]">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-heading text-xl font-bold text-[var(--color-accent)]"
          >
            TranquilGlow
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors"
            >
              Home
            </Link>
            <MegaMenu />
            <Link
              href="/about"
              className="px-4 py-2 text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/results"
              className="px-4 py-2 text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors"
            >
              Results
            </Link>
            <Link
              href="/pricing"
              className="px-4 py-2 text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors"
            >
              Pricing
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:5551234567"
              className="flex items-center gap-2 text-gray-700 hover:text-[var(--color-primary)] font-medium"
            >
              <Phone className="w-4 h-4" />
              (555) 123-4567
            </a>
            <Button
              size="lg"
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white"
              onClick={() => {
                const event = new CustomEvent("open-booking");
                window.dispatchEvent(event);
              }}
            >
              Book Free Consultation →
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-gray-700 hover:text-[var(--color-primary)]"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
