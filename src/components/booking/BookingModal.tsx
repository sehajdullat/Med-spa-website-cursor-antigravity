"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BookingModal({ open, onClose }: BookingModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={(o) => !o && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className={cn(
            "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg max-h-[90vh] overflow-y-auto",
            "bg-white rounded-2xl shadow-2xl p-8",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          )}
          aria-describedby={undefined}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-2xl">Book Your Appointment</h2>
            <Dialog.Close asChild>
              <button
                type="button"
                className="p-2 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>
          <p className="text-gray-600 mb-6">
            Our full 7-step booking flow (service selection, provider, date &
            time, your info, medical screening, payment, confirmation) will be
            available here. For now, call us to book:
          </p>
          <a
            href="tel:5551234567"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-medium h-12 px-6"
          >
            Call (555) 123-4567
          </a>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
