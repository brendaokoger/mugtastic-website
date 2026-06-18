"use client";

import Link from "next/link";
import { ArrowRight, Pencil } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#FAFAF8] overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-40 translate-x-1/2 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-40 -translate-x-1/3 translate-y-1/4" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-yellow-100 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-pink-50 text-[#E91E8C] text-xs font-bold px-4 py-2 rounded-full mb-6 border border-pink-100">
              <span className="w-2 h-2 bg-[#E91E8C] rounded-full animate-pulse" />
              New Designs Every Week
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-[#1B2A4A] leading-[1.05] mb-4">
              Say it your way.{" "}
              <span className="block" style={{ background: "linear-gradient(135deg, #E91E8C, #FF6B35)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                We&apos;ll mug it.
              </span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Custom mugs for every mood, memory, milestone, business, celebration, and personality. Perfect for gifts, keepsakes, and everyday inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/shop"
                className="group inline-flex items-center justify-center gap-2 bg-[#E91E8C] hover:bg-[#C2186F] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-pink-200 hover:-translate-y-0.5 text-sm tracking-wider"
              >
                SHOP MUGS
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/design-your-own"
                className="group inline-flex items-center justify-center gap-2 border-2 border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-sm tracking-wider"
              >
                <Pencil size={16} />
                CREATE YOUR OWN
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-12 justify-center lg:justify-start">
              {[
                { value: "10K+", label: "Happy Customers" },
                { value: "500+", label: "Unique Designs" },
                { value: "4.9★", label: "Average Rating" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-black text-[#E91E8C]">{value}</div>
                  <div className="text-xs text-gray-400 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mug showcase */}
          <div className="relative flex items-center justify-center">
            {/* Background circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50" />
            </div>

            {/* Floating mugs placeholder */}
            <div className="relative w-full max-w-sm mx-auto">
              {/* Main mug */}
              <div className="relative z-10 mx-auto w-56 h-64 bg-white rounded-3xl shadow-2xl flex items-center justify-center border border-gray-100 animate-float">
                <div className="text-center px-6">
                  <div className="text-6xl mb-3">☕</div>
                  <p className="text-sm font-black text-[#1B2A4A] leading-tight">BOSS LADY</p>
                  <p className="text-xs font-bold text-[#E91E8C]">Building My Empire</p>
                </div>
                {/* Handle */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-8 h-16 border-4 border-[#E91E8C] rounded-r-full border-l-0" />
              </div>

              {/* Left mug */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-36 h-44 bg-[#00B4B4] rounded-2xl shadow-xl flex items-center justify-center z-0 rotate-[-8deg]">
                <div className="text-center px-3">
                  <p className="text-xs font-black text-white leading-tight">I CAN DO ALL THINGS</p>
                  <div className="w-8 h-0.5 bg-white/50 my-1 mx-auto" />
                  <p className="text-xs text-white/80">Phil. 4:13</p>
                </div>
              </div>

              {/* Right mug */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-36 h-44 bg-[#1B2A4A] rounded-2xl shadow-xl flex items-center justify-center z-0 rotate-[8deg]">
                <div className="text-center px-3">
                  <p className="text-xs font-black text-white leading-tight">NICE UNTIL PROVEN</p>
                  <p className="text-sm font-black text-[#E91E8C]">NAUGHTY</p>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-2 bg-[#F0A500] text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg rotate-12">
                NEW!
              </div>
              <div className="absolute -bottom-2 -left-4 bg-[#E91E8C] text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg -rotate-6">
                BESTSELLER ★
              </div>
            </div>
          </div>
        </div>

        {/* Feature pills */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: "💎", title: "High Quality", desc: "Premium mugs made to last" },
            { icon: "✏️", title: "Custom Made", desc: "Design it your way" },
            { icon: "🎁", title: "Perfect for Gifting", desc: "Birthdays, holidays & more" },
            { icon: "🚚", title: "Fast Shipping", desc: "Quick production & delivery" },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex items-center gap-3 bg-white rounded-2xl px-4 py-4 shadow-sm border border-gray-50">
              <span className="text-2xl">{icon}</span>
              <div>
                <p className="text-sm font-bold text-[#1B2A4A]">{title}</p>
                <p className="text-xs text-gray-400">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
