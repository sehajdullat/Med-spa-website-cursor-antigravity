"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  label: string;
}

interface StickySidebarProps {
  sections: Section[];
}

export default function StickySidebar({ sections }: StickySidebarProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const activeIndex = sections.findIndex((s) => s.id === activeSection);
  const progress =
    sections.length > 0
      ? ((activeIndex + 1) / sections.length) * 100
      : 0;

  return (
    <aside className="sticky top-24 h-fit hidden lg:block">
      <nav className="space-y-1" aria-label="On this page">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => scrollToSection(section.id)}
            className={cn(
              "w-full text-left px-4 py-3 rounded-lg transition-all relative",
              activeSection === section.id
                ? "bg-green-50 text-[var(--color-primary)] font-medium"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            )}
          >
            {activeSection === section.id && (
              <span
                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[var(--color-primary)] rounded-r"
                aria-hidden
              />
            )}
            {section.label}
          </button>
        ))}
      </nav>
      <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
        <div className="text-xs text-gray-500 mb-2">Reading Progress</div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--color-primary)] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </aside>
  );
}
