"use client";

import { useState, useEffect } from "react";

const MESSAGES = [
  "Free consultation ($200 value) — Book today!",
  "$50 off your first treatment — Use code GLOW50",
  "15+ years of medical expertise. You're in good hands.",
];

export default function TrustBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-[var(--color-primary)] text-white py-2 text-center text-sm">
      <div className="container mx-auto px-4">
        <p className="animate-fade-in">{MESSAGES[index]}</p>
      </div>
    </div>
  );
}
