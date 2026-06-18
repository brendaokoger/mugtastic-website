import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Confirmed!",
};

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M9 12l2 2 4-4" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="10" stroke="#34D399" strokeWidth="2.5"/>
            </svg>
          </div>

          <h1 className="text-3xl font-black text-[#1B2A4A] mb-3">Order Confirmed!</h1>
          <p className="text-gray-500 mb-2">
            Thank you so much for your order! We&apos;re so excited to mug you up. 🎉
          </p>
          <p className="text-gray-400 text-sm mb-8">
            You&apos;ll receive a confirmation email shortly with your order details and tracking info once it ships.
          </p>

          <div className="bg-[#FAFAF8] rounded-2xl p-5 mb-8 text-left space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xl">📦</span>
              <div>
                <p className="font-bold text-[#1B2A4A] text-sm">Production starts within 24 hours</p>
                <p className="text-xs text-gray-400">Your mug is being prepared with love</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">🚚</span>
              <div>
                <p className="font-bold text-[#1B2A4A] text-sm">Ships in 2-5 business days</p>
                <p className="text-xs text-gray-400">Tracking info sent to your email</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">❤️</span>
              <div>
                <p className="font-bold text-[#1B2A4A] text-sm">Made to order with love</p>
                <p className="text-xs text-gray-400">Thank you for supporting our small business</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/shop"
              className="flex-1 bg-[#E91E8C] hover:bg-[#C2186F] text-white font-bold py-3.5 rounded-full transition-all text-sm tracking-wider text-center"
            >
              SHOP MORE MUGS
            </Link>
            <Link
              href="/"
              className="flex-1 border-2 border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white font-bold py-3.5 rounded-full transition-all text-sm tracking-wider text-center"
            >
              HOME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
