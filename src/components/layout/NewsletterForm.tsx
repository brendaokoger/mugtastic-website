"use client";

export default function NewsletterForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 bg-white/10 text-white placeholder-gray-400 text-sm px-4 py-3 rounded-full border border-white/20 focus:outline-none focus:border-[#E91E8C] transition-colors"
      />
      <button
        type="submit"
        className="bg-[#E91E8C] hover:bg-[#C2186F] text-white text-sm font-bold px-4 py-3 rounded-full transition-colors flex-shrink-0"
      >
        Subscribe
      </button>
    </form>
  );
}
