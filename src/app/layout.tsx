import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mugtastic – Where Personalities Pour Out",
    template: "%s | Mugtastic",
  },
  description: "Custom mugs for every mood, memory, milestone, business, celebration, and personality. Premium quality, made to order, fast shipping.",
  keywords: ["custom mugs", "personalized mugs", "funny mugs", "faith mugs", "coffee mugs", "custom gifts"],
  openGraph: {
    siteName: "Mugtastic",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#FAFAF8]">
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
