"use client";

import { Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MobileFooter() {
  const openBooking = () => {
    window.dispatchEvent(new CustomEvent("open-booking"));
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--color-border)] z-50 p-3 safe-area-pb">
      <div className="grid grid-cols-2 gap-2">
        <Button
          variant="outline"
          className="flex items-center justify-center gap-2"
          asChild
        >
          <a href="tel:5551234567">
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </Button>
        <Button
          className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] flex items-center justify-center gap-2"
          onClick={openBooking}
        >
          <Calendar className="w-4 h-4" />
          Book Now
        </Button>
      </div>
    </div>
  );
}
