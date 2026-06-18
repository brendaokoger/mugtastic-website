"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Jasmine T.",
    rating: 5,
    text: "The quality is amazing and the print came out perfect! My go-to gift for every occasion. I&apos;ve ordered 6 mugs so far!",
    location: "Atlanta, GA",
    avatar: "J",
    color: "#E91E8C",
  },
  {
    name: "Marcus D.",
    rating: 5,
    text: "Exactly what I wanted! Fast shipping and the mug looks even better in person. The colors are so vibrant.",
    location: "Houston, TX",
    avatar: "M",
    color: "#00B4B4",
  },
  {
    name: "Danielle R.",
    rating: 5,
    text: "I ordered a custom mug for my business and my clients love it! Great quality, fast turnaround, and the design team is so helpful.",
    location: "Chicago, IL",
    avatar: "D",
    color: "#7B4FBE",
  },
  {
    name: "Keisha M.",
    rating: 5,
    text: "These mugs are everything! Got the Faith collection and it&apos;s my favorite morning companion. Already ordered three more.",
    location: "Memphis, TN",
    avatar: "K",
    color: "#F0A500",
  },
  {
    name: "Tanya L.",
    rating: 5,
    text: "Bought the wedding mugs for my sister's bridal shower and they were a total hit! Gorgeous quality and shipped so fast.",
    location: "Dallas, TX",
    avatar: "T",
    color: "#FF6B35",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const visible = 3;
  const max = reviews.length - visible;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(max, c + 1));

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#F0A500]" />
            <span className="text-[#F0A500] text-sm font-bold tracking-widest">REVIEWS</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#F0A500]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1B2A4A]">
            Loved By Thousands
          </h2>
          <div className="flex items-center justify-center gap-1 mt-3">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={20} className="fill-[#F0A500] text-[#F0A500]" />
            ))}
            <span className="ml-2 text-gray-500 text-sm font-semibold">4.9 out of 5 · 2,400+ reviews</span>
          </div>
        </div>

        {/* Reviews */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
            {reviews.slice(current, current + visible).map((r, i) => (
              <div
                key={`${r.name}-${i}`}
                className="bg-[#FAFAF8] rounded-3xl p-7 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="fill-[#F0A500] text-[#F0A500]" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                    style={{ backgroundColor: r.color }}
                  >
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-[#1B2A4A] text-sm">{r.name}</p>
                    <p className="text-gray-400 text-xs">{r.location}</p>
                  </div>
                  <div className="ml-auto">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#34D399"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#E91E8C] hover:text-[#E91E8C] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: max + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2.5 bg-[#E91E8C]" : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              disabled={current === max}
              className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#E91E8C] hover:text-[#E91E8C] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
