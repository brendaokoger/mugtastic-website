import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  "Add Your Text",
  "Choose Your Colors",
  "Upload Images",
  "Preview & Order",
];

export default function DesignYourOwn() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#F0F4FF] to-[#FFF0F8] rounded-[2.5rem] overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            {/* Left: Visual */}
            <div className="relative p-10 flex items-center justify-center min-h-[320px]">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E91E8C]/5 via-transparent to-[#7B4FBE]/5" />

              {/* Design preview mockup */}
              <div className="relative">
                {/* Mug shape */}
                <div className="relative w-52 h-64 bg-white rounded-3xl shadow-2xl flex items-center justify-center border border-gray-100">
                  <div className="text-center px-6">
                    <div className="w-28 h-28 border-2 border-dashed border-[#E91E8C]/40 rounded-2xl flex items-center justify-center mx-auto mb-3 bg-pink-50">
                      <div className="text-center">
                        <span className="text-3xl block">🎨</span>
                        <span className="text-xs text-[#E91E8C] font-bold mt-1 block">Your Design</span>
                        <span className="text-xs text-gray-400 block">Here</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-2 bg-gradient-to-r from-[#E91E8C] to-[#FF6B35] rounded-full w-full" />
                      <div className="h-2 bg-[#1B2A4A]/10 rounded-full w-3/4 mx-auto" />
                    </div>
                  </div>
                  {/* Handle */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-8 h-16 border-4 border-[#E91E8C] rounded-r-full border-l-0" />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -left-8 bg-[#F0A500] text-white text-xs font-black px-3 py-2 rounded-full shadow-lg rotate-[-12deg]">
                  Text ✍️
                </div>
                <div className="absolute -bottom-3 -right-6 bg-[#00B4B4] text-white text-xs font-black px-3 py-2 rounded-full shadow-lg rotate-[8deg]">
                  Colors 🎨
                </div>
                <div className="absolute top-1/4 -right-10 bg-[#7B4FBE] text-white text-xs font-black px-3 py-2 rounded-full shadow-lg rotate-[5deg]">
                  Photos 📷
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div className="p-10 lg:p-14">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#E91E8C]" />
                <span className="text-[#E91E8C] text-xs font-bold tracking-widest">CUSTOM MUGS</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-[#1B2A4A] leading-tight mb-3">
                Make It{" "}
                <span className="block" style={{ background: "linear-gradient(135deg, #E91E8C, #FF6B35)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Uniquely You!
                </span>
              </h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Add names, quotes, photos, logos, or funny sayings. The possibilities are endless! Create the perfect mug that shows exactly who you are.
              </p>

              <ul className="space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#E91E8C] flex-shrink-0" size={20} />
                    <span className="font-semibold text-[#1B2A4A]">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/design-your-own"
                className="group inline-flex items-center gap-2 bg-[#E91E8C] hover:bg-[#C2186F] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-pink-200 text-sm tracking-wider"
              >
                DESIGN YOUR MUG
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
