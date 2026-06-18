"use client";

import { useState, use } from "react";
import Link from "next/link";
import { ShoppingCart, Star, ArrowLeft, Heart, Shield, Truck, RefreshCw } from "lucide-react";
import { products } from "@/lib/products";
import { useCart } from "@/context/CartContext";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  const { addItem, toggleCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="text-6xl block mb-4">☕</span>
          <h2 className="text-2xl font-black text-[#1B2A4A] mb-2">Mug not found</h2>
          <Link href="/shop" className="text-[#E91E8C] font-bold hover:underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addItem(product, selectedVariant);
    }
    setAdded(true);
    setTimeout(() => { setAdded(false); toggleCart(); }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/shop" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#E91E8C] transition-colors text-sm font-medium mb-8">
          <ArrowLeft size={16} />
          Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl p-8 shadow-sm border border-gray-50">
          {/* Image */}
          <div className="relative bg-gray-50 rounded-2xl overflow-hidden min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <span className="text-9xl block mb-4">☕</span>
              <p className="text-gray-400 text-sm">{product.name}</p>
            </div>
            {product.badge && (
              <div className="absolute top-4 left-4 bg-[#E91E8C] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                {product.badge}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <div className="flex items-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={16} className="fill-[#F0A500] text-[#F0A500]" />
              ))}
              <span className="text-sm text-gray-500 ml-2">4.9 (48 reviews)</span>
            </div>

            <h1 className="text-3xl font-black text-[#1B2A4A] mb-3">{product.name}</h1>
            <p className="text-gray-500 mb-6 leading-relaxed">{product.description}</p>

            <div className="text-3xl font-black text-[#E91E8C] mb-6">
              ${(selectedVariant?.price ?? product.price).toFixed(2)}
            </div>

            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <p className="text-sm font-bold text-[#1B2A4A] mb-3">Choose Your Style</p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border-2 ${
                        selectedVariant?.id === v.id
                          ? "border-[#E91E8C] bg-pink-50 text-[#E91E8C]"
                          : "border-gray-200 text-gray-600 hover:border-[#E91E8C]"
                      }`}
                    >
                      {v.name}
                      {v.price !== product.price && (
                        <span className="ml-1 text-xs opacity-70">(${v.price.toFixed(2)})</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-sm font-bold text-[#1B2A4A] mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center font-bold text-gray-600 hover:border-[#E91E8C] hover:text-[#E91E8C] transition-all"
                >
                  -
                </button>
                <span className="w-8 text-center font-bold text-lg text-[#1B2A4A]">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center font-bold text-gray-600 hover:border-[#E91E8C] hover:text-[#E91E8C] transition-all"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 font-bold py-4 rounded-full transition-all duration-300 text-sm tracking-wider ${
                  added
                    ? "bg-[#00B4B4] text-white"
                    : "bg-[#E91E8C] hover:bg-[#C2186F] text-white hover:shadow-xl hover:shadow-pink-200"
                }`}
              >
                <ShoppingCart size={18} />
                {added ? "Added to Cart!" : "Add to Cart"}
              </button>
              <button className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#E91E8C] hover:text-[#E91E8C] transition-all flex-shrink-0">
                <Heart size={20} />
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: <Shield size={16} />, label: "Secure Checkout" },
                { icon: <Truck size={16} />, label: "Fast Shipping" },
                { icon: <RefreshCw size={16} />, label: "Easy Returns" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1.5 bg-gray-50 rounded-xl py-3 px-2 text-center">
                  <span className="text-[#00B4B4]">{icon}</span>
                  <span className="text-xs font-semibold text-gray-600">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
