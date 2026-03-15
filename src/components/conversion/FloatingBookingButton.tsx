"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingBookingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const openBooking = () => {
    window.dispatchEvent(new CustomEvent("open-booking"));
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50 hidden md:block"
        >
          <Button
            size="lg"
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] shadow-lg rounded-full px-8"
            onClick={openBooking}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Now
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
