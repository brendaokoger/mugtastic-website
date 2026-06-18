import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { collections, products } from "@/lib/products";
import ProductCard from "@/components/shop/ProductCard";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return collections.map((col) => ({ slug: col.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const col = collections.find((c) => c.slug === slug);
  return {
    title: col?.name ?? "Collection",
    description: col?.description,
  };
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="text-6xl block mb-4">☕</span>
          <h2 className="text-2xl font-black text-[#1B2A4A] mb-2">Collection not found</h2>
          <Link href="/collections" className="text-[#E91E8C] font-bold hover:underline">View All Collections</Link>
        </div>
      </div>
    );
  }

  const collectionProducts = products.filter((p) => p.category === collection.id);
  const allProducts = collectionProducts.length === 0 ? products : collectionProducts;

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Hero */}
      <div className="relative py-16 overflow-hidden" style={{ backgroundColor: collection.color }}>
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-15" style={{ backgroundColor: collection.textColor }} />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: collection.textColor }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-sm font-medium mb-6 opacity-80 hover:opacity-100 transition-opacity"
            style={{ color: collection.textColor }}
          >
            <ArrowLeft size={16} />
            All Collections
          </Link>
          <h1 className="text-5xl font-black mb-3" style={{ color: collection.textColor }}>
            {collection.name}
          </h1>
          <p className="text-lg opacity-80" style={{ color: collection.textColor }}>
            {collection.description}
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {collectionProducts.length === 0 && (
          <div className="bg-yellow-50 border border-yellow-100 rounded-2xl px-6 py-4 mb-8 text-sm text-yellow-700 font-medium">
            More products coming soon! Showing our full catalog for now.
          </div>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
