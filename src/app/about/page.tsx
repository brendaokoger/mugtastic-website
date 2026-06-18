import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn the story behind Mugtastic – where personalities pour out.",
};

const values = [
  { icon: "💎", title: "Premium Quality", desc: "Every mug is crafted from high-grade ceramic, built to last and look stunning for years." },
  { icon: "🎨", title: "Creative Expression", desc: "We believe your mug should reflect who you truly are – funny, faithful, fierce, or fabulous." },
  { icon: "💕", title: "Made with Love", desc: "Every order is reviewed and printed with care. Your satisfaction is our obsession." },
  { icon: "🚀", title: "Small Business, Big Heart", desc: "We're a small team with a big dream – to bring joy one mug at a time." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Hero */}
      <div className="relative bg-[#1B2A4A] overflow-hidden py-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#E91E8C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#00B4B4]/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-4">
            Our Story
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Mugtastic was born from one simple idea: your coffee cup should be as unique as you are.
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 mb-10">
          <h2 className="text-3xl font-black text-[#1B2A4A] mb-6">
            Where Personalities Pour Out
          </h2>
          <div className="space-y-5 text-gray-500 leading-relaxed">
            <p>
              Every morning, millions of people reach for their favorite mug. That simple act — wrapping your hands around a warm cup — is intimate, personal, and ritual. We asked ourselves: why should that moment be generic?
            </p>
            <p>
              Mugtastic was created to turn that everyday moment into an expression. Whether you&apos;re boldly faith-filled, hilariously sarcastic, unapologetically boss, or celebrating your culture and community — we make a mug for that.
            </p>
            <p>
              We partner with Printify to ensure every mug is produced with premium-grade ceramic and vibrant, lasting prints. We use Stripe for secure, seamless checkout. And we obsess over every detail of your experience from the moment you land on our site to the moment your mug arrives at your door.
            </p>
            <p className="font-bold text-[#1B2A4A]">
              We&apos;re a small, Black woman-owned business and we appreciate every single order. Thank you for supporting us.
            </p>
          </div>
        </div>

        {/* Values */}
        <h2 className="text-3xl font-black text-[#1B2A4A] mb-6">What We Stand For</h2>
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {values.map(({ icon, title, desc }) => (
            <div key={title} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex gap-4">
              <span className="text-3xl flex-shrink-0">{icon}</span>
              <div>
                <h3 className="font-black text-[#1B2A4A] mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-[#E91E8C] hover:bg-[#C2186F] text-white font-bold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-pink-200 text-sm tracking-wider"
          >
            SHOP THE COLLECTION
          </Link>
        </div>
      </div>
    </div>
  );
}
