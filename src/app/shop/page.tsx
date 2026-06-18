"use client";

import { useState, useMemo } from "react";
import { Filter, SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/shop/ProductCard";
import { products, collections } from "@/lib/products";

const sortOptions = [
  { value: "default", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name", label: "Name A–Z" },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sort, setSort] = useState("default");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

    if (sort === "price-asc") result = [...result].sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") result = [...result].sort((a, b) => b.price - a.price);
    else if (sort === "name") result = [...result].sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [activeCategory, sort]);

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Page header */}
      <div className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-[#1B2A4A] mb-2">Shop All Mugs</h1>
          <p className="text-gray-500">Premium custom mugs for every personality</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters row */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
          {/* Category filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setActiveCategory("all")}
              className={`text-xs font-bold px-4 py-2 rounded-full transition-all duration-200 ${
                activeCategory === "all"
                  ? "bg-[#E91E8C] text-white shadow-lg shadow-pink-200"
                  : "bg-white text-[#1B2A4A] border border-gray-200 hover:border-[#E91E8C] hover:text-[#E91E8C]"
              }`}
            >
              All Products
            </button>
            {collections.slice(0, 5).map((col) => (
              <button
                key={col.id}
                onClick={() => setActiveCategory(col.id)}
                className={`text-xs font-bold px-4 py-2 rounded-full transition-all duration-200 ${
                  activeCategory === col.id
                    ? "text-white shadow-lg"
                    : "bg-white text-[#1B2A4A] border border-gray-200 hover:border-[#E91E8C] hover:text-[#E91E8C]"
                }`}
                style={activeCategory === col.id ? { backgroundColor: col.color } : {}}
              >
                {col.name}
              </button>
            ))}
          </div>

          {/* Sort + count */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <span className="text-sm text-gray-400">{filtered.length} products</span>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-white border border-gray-200 text-[#1B2A4A] text-sm font-semibold pl-4 pr-8 py-2.5 rounded-full cursor-pointer focus:outline-none focus:border-[#E91E8C]"
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <SlidersHorizontal size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Products grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <span className="text-6xl block mb-4">☕</span>
            <p className="text-gray-500 font-medium">No products found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
