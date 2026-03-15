"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Star, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES_MENU = {
  categories: [
    {
      title: "Face Treatments",
      icon: "✨",
      services: [
        { name: "HydraFacial Revival", slug: "hydrafacial", price: "$200" },
        { name: "Chemical Peels", slug: "chemical-peels", price: "$175" },
        { name: "Microneedling + PRP", slug: "microneedling", price: "$450" },
        { name: "Dermaplaning", slug: "dermaplaning", price: "$125" },
      ],
    },
    {
      title: "Injectables",
      icon: "💉",
      services: [
        { name: "Botox & Dysport", slug: "botox", price: "$12/unit" },
        { name: "Dermal Fillers", slug: "fillers", price: "$650" },
      ],
    },
    {
      title: "Laser & Body",
      icon: "⚡",
      services: [
        { name: "Laser Hair Removal", slug: "laser-hair-removal", price: "$150" },
        { name: "Body Contouring", slug: "body-contouring", price: "$400" },
        { name: "IPL Photofacial", slug: "ipl-photofacial", price: "$350" },
        { name: "Laser Vein Removal", slug: "laser-vein-removal", price: "$250" },
      ],
    },
    {
      title: "Wellness",
      icon: "🌿",
      services: [
        { name: "IV Vitamin Drips", slug: "iv-therapy", price: "$300" },
        { name: "LED Light Therapy", slug: "led-therapy", price: "$150" },
      ],
    },
  ],
  featured: [
    {
      image: "/images/featured-hydrafacial.jpg",
      name: "HydraFacial Revival",
      description: "Our most popular treatment",
      price: "$200",
      slug: "hydrafacial",
    },
    {
      image: "/images/featured-botox.jpg",
      name: "Botox Special",
      description: "New client discount",
      price: "From $12/unit",
      slug: "botox",
    },
  ],
};

export default function MegaMenu() {
  return (
    <div className="group relative">
      <button
        type="button"
        className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-[var(--color-primary)] transition-colors font-medium"
        aria-expanded="false"
        aria-haspopup="true"
      >
        Services
        <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
      </button>

      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none group-hover:pointer-events-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-[900px] max-w-[95vw] p-8">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8 grid grid-cols-2 gap-6">
              {SERVICES_MENU.categories.map((category) => (
                <div key={category.title}>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">{category.icon}</span>
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/treatments/${service.slug}`}
                          className={cn(
                            "group/item flex items-center justify-between px-3 py-2 rounded-lg hover:bg-green-50 transition-colors"
                          )}
                        >
                          <span className="text-gray-700 group-hover/item:text-[var(--color-primary)]">
                            {service.name}
                          </span>
                          <span className="text-sm text-gray-500">
                            {service.price}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="col-span-4 border-l border-gray-200 pl-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                Featured Treatments
              </h3>
              <div className="space-y-4">
                {SERVICES_MENU.featured.map((treatment) => (
                  <Link
                    key={treatment.slug}
                    href={`/treatments/${treatment.slug}`}
                    className="block group/featured"
                  >
                    <div className="relative h-32 rounded-lg overflow-hidden mb-2 bg-gray-200">
                      <Image
                        src={treatment.image}
                        alt={treatment.name}
                        fill
                        className="object-cover group-hover/featured:scale-105 transition-transform duration-300"
                        sizes="(max-width: 400px) 100vw, 300px"
                        unoptimized
                        onError={(e) => {
                          const t = e.target as HTMLImageElement;
                          t.style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2">
                        <p className="text-white font-medium text-sm">
                          {treatment.name}
                        </p>
                        <p className="text-white/80 text-xs">
                          {treatment.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[var(--color-primary)] font-medium">
                        {treatment.price}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover/featured:text-[var(--color-primary)] group-hover/featured:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link
                  href="/services"
                  className="flex items-center justify-between text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] font-medium"
                >
                  View All Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
