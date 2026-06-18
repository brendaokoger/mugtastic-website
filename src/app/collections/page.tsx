import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { collections } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections",
  description: "Browse all Mugtastic collections – from Funny & Unfiltered to Faith & Inspiration, Boss & Business, and more.",
};

const collectionEmojis: Record<string, string> = {
  "funny-unfiltered": "😂",
  "faith-inspiration": "✝️",
  "boss-business": "💼",
  "black-excellence": "✊",
  "pet-lovers": "🐾",
  "holiday-seasonal": "🎄",
  "wedding-anniversary": "💍",
  "survivor-strong": "💪",
  "design-your-own": "🎨",
};

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-black text-[#1B2A4A] mb-3">All Collections</h1>
          <p className="text-gray-500 text-lg max-w-md mx-auto">
            Find the perfect mug that speaks your personality
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((col) => (
            <Link
              key={col.id}
              href={`/collections/${col.slug}`}
              className="group relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ backgroundColor: col.color }}
            >
              <div className="relative p-8 min-h-[220px] flex flex-col justify-between">
                {/* Decorative circles */}
                <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-15" style={{ backgroundColor: col.textColor }} />
                <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full opacity-10" style={{ backgroundColor: col.textColor }} />

                <div className="relative">
                  <span className="text-5xl block mb-4">{collectionEmojis[col.id] ?? "☕"}</span>
                  <h2 className="text-2xl font-black leading-tight mb-2" style={{ color: col.textColor }}>
                    {col.name}
                  </h2>
                  <p className="text-sm opacity-75" style={{ color: col.textColor }}>
                    {col.description}
                  </p>
                </div>

                <div
                  className="inline-flex items-center gap-2 mt-6 font-bold text-sm py-2.5 px-5 rounded-full bg-black/20 group-hover:bg-black/30 transition-colors w-fit"
                  style={{ color: col.textColor }}
                >
                  EXPLORE COLLECTION
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
