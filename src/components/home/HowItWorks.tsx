const steps = [
  {
    step: "01",
    icon: "☕",
    title: "Choose a Mug",
    desc: "Browse our collection of premium 11 oz and 15 oz ceramic mugs. Pick your style, size, and color handle.",
    color: "#E91E8C",
  },
  {
    step: "02",
    icon: "✏️",
    title: "Customize It",
    desc: "Add your text, upload a photo, choose colors and fonts. Make it completely yours.",
    color: "#00B4B4",
  },
  {
    step: "03",
    icon: "🔒",
    title: "Checkout Securely",
    desc: "Complete your purchase through our secure Stripe-powered checkout. Fast and safe.",
    color: "#F0A500",
  },
  {
    step: "04",
    icon: "📦",
    title: "We Print & Ship It",
    desc: "Your custom mug is printed and shipped directly to your door. Trackable, reliable, fast.",
    color: "#7B4FBE",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#1B2A4A] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#E91E8C]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#00B4B4]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#E91E8C]" />
            <span className="text-[#E91E8C] text-sm font-bold tracking-widest">SIMPLE PROCESS</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#E91E8C]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white">How It Works</h2>
          <p className="text-gray-400 mt-3 max-w-md mx-auto">
            From design to doorstep in 4 easy steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ step, icon, title, desc, color }, i) => (
            <div key={step} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px z-0" style={{ background: `linear-gradient(to right, ${color}40, transparent)` }} />
              )}

              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 z-10">
                {/* Step number */}
                <div className="text-xs font-black tracking-widest mb-4" style={{ color }}>
                  STEP {step}
                </div>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4"
                  style={{ backgroundColor: `${color}20` }}
                >
                  {icon}
                </div>

                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>

                {/* Accent dot */}
                <div className="absolute top-6 right-6 w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
