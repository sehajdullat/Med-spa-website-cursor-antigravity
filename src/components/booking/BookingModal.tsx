"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import BookingFlow from "./BookingFlow";

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
            "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg h-[90vh] md:h-[800px] overflow-hidden",
            "bg-white rounded-2xl shadow-2xl",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          )}
          aria-describedby={undefined}
        >
          <VisuallyHidden>
            <Dialog.Title>Book an Appointment</Dialog.Title>
            <Dialog.Description>
              Follow the steps to book your med spa service.
            </Dialog.Description>
          </VisuallyHidden>

          {/* Close button positioned absolutely so it floats over the content */}
          <Dialog.Close asChild>
            <button
              type="button"
              className="absolute top-4 right-4 p-2 z-10 text-gray-500 bg-white/50 backdrop-blur hover:bg-gray-100 rounded-full"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </Dialog.Close>
          
          <div className="h-full w-full relative">
            <BookingFlow onClose={onClose} />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
