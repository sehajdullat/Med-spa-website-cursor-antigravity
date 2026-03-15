import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-accent)] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-heading text-2xl font-bold text-white"
            >
              TranquilGlow
            </Link>
            <p className="mt-4 text-white/80 text-sm max-w-md">
              Medical-grade treatments. Spa-like luxury. Results you can trust.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-white/80">
              <a
                href="tel:5551234567"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                (555) 123-4567
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>123 Wellness Blvd, Suite 200<br />San Francisco, CA</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-white transition-colors">
                  Results
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <p className="text-sm text-white/80">
              15+ years of medical expertise. 1,000+ happy clients.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-white/60">
          © {new Date().getFullYear()} TranquilGlow Med Spa. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
