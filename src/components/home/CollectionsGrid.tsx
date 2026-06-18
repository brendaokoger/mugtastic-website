"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { collections } from "@/lib/products";

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

export default function CollectionsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#E91E8C]" />
            <span className="text-[#E91E8C] text-sm font-bold tracking-widest">BROWSE</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#E91E8C]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1B2A4A]">
            Shop By Collection
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="h-1 w-8 bg-[#E91E8C] rounded-full" />
            <div className="h-1 w-4 bg-[#F0A500] rounded-full" />
            <div className="h-1 w-2 bg-[#00B4B4] rounded-full" />
          </div>
        </div>

        {/* Collections grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {collections.map((col, i) => {
            const isLarge = i === 0 || i === 8;
            return (
              <Link
                key={col.id}
                href={`/collections/${col.slug}`}
                className={`group relative rounded-3xl overflow-hidden card-hover ${
                  isLarge ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
                style={{ backgroundColor: col.color }}
              >
                {/* Content */}
                <div className="relative p-6 min-h-[160px] flex flex-col justify-between">
                  <div>
                    <span className="text-4xl block mb-3">
                      {collectionEmojis[col.id] ?? "☕"}
                    </span>
                    <h3 className="font-black text-lg leading-tight" style={{ color: col.textColor }}>
                      {col.name}
                    </h3>
                    <p className="text-xs mt-1 opacity-80" style={{ color: col.textColor }}>
                      {col.description}
                    </p>
                  </div>
                  <div
                    className="inline-flex items-center gap-1 mt-4 text-xs font-bold py-2 px-4 rounded-full bg-black/20 w-fit group-hover:bg-black/30 transition-colors"
                    style={{ color: col.textColor }}
                  >
                    SHOP NOW
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Decorative circle */}
                  <div
                    className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-20"
                    style={{ backgroundColor: col.textColor }}
                  />
                  <div
                    className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-10"
                    style={{ backgroundColor: col.textColor }}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-[#E91E8C] font-bold hover:text-[#C2186F] transition-colors text-sm tracking-wider group"
          >
            VIEW ALL COLLECTIONS
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
