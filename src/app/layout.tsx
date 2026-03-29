import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TrustBar from "@/components/layout/TrustBar";
import FloatingBookingButton from "@/components/conversion/FloatingBookingButton";
import MobileFooter from "@/components/conversion/MobileFooter";
import { CartProvider } from "@/components/shop/CartProvider";
import CartDrawer from "@/components/shop/CartDrawer";
import BookingModal from "@/components/booking/BookingModal";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TranquilGlow Med Spa | Medical-Grade Beauty Treatments",
  description:
    "Rediscover your radiance with FDA-approved treatments, zero downtime, and personalized care. San Francisco's premier medical spa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen antialiased font-[var(--font-body)] bg-white text-gray-900">
        <CartProvider>
          <TrustBar />
          <Header />
          <main className="pt-16 pb-20 md:pb-0">{children}</main>
          <Footer />
          <FloatingBookingButton />
          <MobileFooter />
          <CartDrawer />
          <BookingModal />
        </CartProvider>
      </body>
    </html>
  );
}
