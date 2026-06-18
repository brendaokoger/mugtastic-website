"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Search, User, Menu, X, ChevronDown } from "lucide-react";
import MugtasticLogo from "@/components/ui/MugtasticLogo";
import { useCart } from "@/context/CartContext";

const navItems = [
  { label: "HOME", href: "/" },
  {
    label: "SHOP",
    href: "/shop",
    dropdown: [
      { label: "All Products", href: "/shop" },
      { label: "White 11oz Mug", href: "/shop?type=white-11oz" },
      { label: "Color Handle Mug", href: "/shop?type=color-handle" },
      { label: "Black 11oz Mug", href: "/shop?type=black-11oz" },
    ],
  },
  {
    label: "COLLECTIONS",
    href: "/collections",
    dropdown: [
      { label: "Funny & Unfiltered", href: "/collections/funny-unfiltered" },
      { label: "Faith & Inspiration", href: "/collections/faith-inspiration" },
      { label: "Boss & Business", href: "/collections/boss-business" },
      { label: "Black Excellence", href: "/collections/black-excellence" },
      { label: "Pet Lovers", href: "/collections/pet-lovers" },
      { label: "Holiday & Seasonal", href: "/collections/holiday-seasonal" },
      { label: "Wedding & Anniversary", href: "/collections/wedding-anniversary" },
      { label: "Survivor Strong", href: "/collections/survivor-strong" },
    ],
  },
  { label: "CUSTOM MUGS", href: "/design-your-own" },
  { label: "ABOUT US", href: "/about" },
  { label: "CONTACT", href: "/faq" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { totalItems, toggleCart } = useCart();

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-40 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <MugtasticLogo className="scale-90 origin-left" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-xs font-bold text-[#1B2A4A] hover:text-[#E91E8C] tracking-wider transition-colors"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown size={12} />}
                </Link>

                {item.dropdown && openDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 min-w-[200px] z-50">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2.5 text-sm text-[#1B2A4A] hover:text-[#E91E8C] hover:bg-pink-50 transition-colors font-medium"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button aria-label="Search" className="hidden sm:flex p-2 text-[#1B2A4A] hover:text-[#E91E8C] transition-colors">
              <Search size={20} />
            </button>
            <button aria-label="Account" className="hidden sm:flex p-2 text-[#1B2A4A] hover:text-[#E91E8C] transition-colors">
              <User size={20} />
            </button>
            <button
              aria-label={`Cart (${totalItems} items)`}
              onClick={toggleCart}
              className="relative p-2 text-[#1B2A4A] hover:text-[#E91E8C] transition-colors"
            >
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#E91E8C] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <Link
              href="/design-your-own"
              className="hidden md:inline-flex items-center gap-2 bg-[#E91E8C] hover:bg-[#C2186F] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-pink-200 tracking-wider"
            >
              DESIGN YOURS
            </Link>
            <button
              className="lg:hidden p-2 text-[#1B2A4A]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 px-2 text-sm font-bold text-[#1B2A4A] hover:text-[#E91E8C] tracking-wider border-b border-gray-50"
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 pb-1">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm text-gray-600 hover:text-[#E91E8C]"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/design-your-own"
              onClick={() => setMobileOpen(false)}
              className="mt-3 bg-[#E91E8C] text-white text-sm font-bold py-3 rounded-full text-center tracking-wider"
            >
              DESIGN YOUR MUG
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
