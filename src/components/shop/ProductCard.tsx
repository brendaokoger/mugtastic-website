"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addItem } = useCart();
  const [wishlist, setWishlist] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, product.variants?.[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-50 flex flex-col">
      {/* Image */}
      <Link href={`/shop/${product.id}`} className="relative block overflow-hidden bg-gray-50" style={{ paddingBottom: "100%" }}>
        <div className="absolute inset-0 flex items-center justify-center">
          {product.image && !product.image.includes("/images/products/") ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-7xl">☕</span>
              <p className="text-xs text-gray-400 font-medium px-4 text-center">{product.name}</p>
            </div>
          )}
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span className="bg-[#E91E8C] text-white text-xs font-bold px-2.5 py-1 rounded-full">
              {product.badge}
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={(e) => { e.preventDefault(); setWishlist(!wishlist); }}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 shadow-sm flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-10 ${wishlist ? "text-[#E91E8C]" : "text-gray-400"}`}
          aria-label="Add to wishlist"
        >
          <Heart size={15} className={wishlist ? "fill-[#E91E8C]" : ""} />
        </button>

        {/* Quick add overlay */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-0 left-0 right-0 bg-[#1B2A4A] text-white text-xs font-bold py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2"
        >
          <ShoppingCart size={14} />
          {added ? "Added!" : "Quick Add"}
        </button>
      </Link>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-1 mb-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} size={11} className="fill-[#F0A500] text-[#F0A500]" />
          ))}
          <span className="text-xs text-gray-400 ml-1">(48)</span>
        </div>

        <Link href={`/shop/${product.id}`}>
          <h3 className="font-bold text-[#1B2A4A] text-sm leading-tight hover:text-[#E91E8C] transition-colors mb-1">
            {product.name}
          </h3>
        </Link>

        <p className="text-xs text-gray-400 mb-3 line-clamp-2 flex-1">{product.description}</p>

        {/* Variants */}
        {product.variants && product.variants.length > 1 && (
          <div className="flex gap-1.5 mb-3">
            {product.variants.slice(0, 3).map((v) => (
              <span
                key={v.id}
                className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded-full border border-gray-100"
              >
                {v.name.split(" ")[0]}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-black text-[#1B2A4A]">${product.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            className={`flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-full transition-all duration-300 ${
              added
                ? "bg-[#00B4B4] text-white"
                : "bg-[#E91E8C] hover:bg-[#C2186F] text-white hover:shadow-lg hover:shadow-pink-200"
            }`}
          >
            <ShoppingCart size={13} />
            {added ? "Added!" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
