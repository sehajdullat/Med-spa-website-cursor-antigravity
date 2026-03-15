"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MOBILE_SERVICES = [
  { title: "Face", links: [
    { name: "HydraFacial Revival", slug: "hydrafacial" },
    { name: "Chemical Peels", slug: "chemical-peels" },
    { name: "Microneedling + PRP", slug: "microneedling" },
    { name: "Dermaplaning", slug: "dermaplaning" },
  ]},
  { title: "Injectables", links: [
    { name: "Botox & Dysport", slug: "botox" },
    { name: "Dermal Fillers", slug: "fillers" },
  ]},
  { title: "Laser & Body", links: [
    { name: "Laser Hair Removal", slug: "laser-hair-removal" },
    { name: "Body Contouring", slug: "body-contouring" },
    { name: "IPL Photofacial", slug: "ipl-photofacial" },
    { name: "Laser Vein Removal", slug: "laser-vein-removal" },
  ]},
  { title: "Wellness", links: [
    { name: "IV Vitamin Drips", slug: "iv-therapy" },
    { name: "LED Light Therapy", slug: "led-therapy" },
  ]},
];

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={(o) => !o && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className={cn(
            "fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 shadow-xl",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
            "flex flex-col"
          )}
          aria-describedby={undefined}
        >
          <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)]">
            <span className="font-heading font-bold text-lg">TranquilGlow</span>
            <Dialog.Close asChild>
              <button
                type="button"
                className="p-2 text-gray-600 hover:text-gray-900"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>
          <nav className="flex-1 overflow-y-auto p-4">
            <Link
              href="/"
              className="block py-3 text-gray-700 font-medium border-b border-gray-100"
              onClick={onClose}
            >
              Home
            </Link>
            <div className="border-b border-gray-100">
              <button
                type="button"
                className="w-full flex items-center justify-between py-3 text-gray-700 font-medium"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
              >
                Services
                {servicesOpen ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {servicesOpen && (
                <div className="pl-4 pb-3 space-y-1">
                  {MOBILE_SERVICES.map((cat) => (
                    <div key={cat.title} className="mb-3">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        {cat.title}
                      </p>
                      {cat.links.map((link) => (
                        <Link
                          key={link.slug}
                          href={`/treatments/${link.slug}`}
                          className="block py-2 text-gray-600 hover:text-[var(--color-primary)]"
                          onClick={onClose}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/about"
              className="block py-3 text-gray-700 font-medium border-b border-gray-100"
              onClick={onClose}
            >
              About
            </Link>
            <Link
              href="/results"
              className="block py-3 text-gray-700 font-medium border-b border-gray-100"
              onClick={onClose}
            >
              Results
            </Link>
            <Link
              href="/pricing"
              className="block py-3 text-gray-700 font-medium border-b border-gray-100"
              onClick={onClose}
            >
              Pricing
            </Link>
          </nav>
          <div className="p-4 border-t border-[var(--color-border)] space-y-3">
            <a
              href="tel:5551234567"
              className="flex items-center gap-2 text-gray-700 font-medium"
              onClick={onClose}
            >
              <Phone className="w-4 h-4" />
              (555) 123-4567
            </a>
            <Button
              className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white"
              onClick={() => {
                onClose();
                window.dispatchEvent(new CustomEvent("open-booking"));
              }}
            >
              Book Free Consultation →
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
