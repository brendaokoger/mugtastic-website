import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/shop/ProductCard";
import { featuredProducts } from "@/lib/products";

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#E91E8C]" />
              <span className="text-[#E91E8C] text-sm font-bold tracking-widest">TRENDING NOW</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1B2A4A]">Featured Mugs</h2>
          </div>
          <Link
            href="/shop"
            className="hidden sm:inline-flex items-center gap-2 text-[#E91E8C] font-bold hover:text-[#C2186F] transition-colors text-sm tracking-wider group"
          >
            VIEW ALL
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-[#E91E8C] font-bold text-sm tracking-wider"
          >
            VIEW ALL PRODUCTS
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
