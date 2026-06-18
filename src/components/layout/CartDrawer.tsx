"use client";

import { useCallback } from "react";
import Link from "next/link";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, isOpen, totalItems, totalPrice, removeItem, updateQty, closeCart } = useCart();

  const handleCheckout = useCallback(async () => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch {
      alert("Checkout unavailable. Please try again later.");
    }
  }, [items]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col transition-transform duration-400 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-[#E91E8C]" size={22} />
            <h2 className="text-lg font-bold text-[#1B2A4A]">
              Your Cart
              {totalItems > 0 && (
                <span className="ml-2 bg-[#E91E8C] text-white text-xs px-2 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </h2>
          </div>
          <button onClick={closeCart} className="p-2 text-gray-400 hover:text-gray-700 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center">
                <ShoppingBag className="text-[#E91E8C]" size={36} />
              </div>
              <p className="text-gray-500 font-medium">Your cart is empty</p>
              <p className="text-sm text-gray-400">Discover our amazing mug collection!</p>
              <Link
                href="/shop"
                onClick={closeCart}
                className="bg-[#E91E8C] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#C2186F] transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item) => {
                const key = item.variant ? `${item.product.id}-${item.variant.id}` : item.product.id;
                const price = item.variant?.price ?? item.product.price;
                return (
                  <div key={key} className="flex gap-4 py-4 border-b border-gray-50">
                    <div className="w-20 h-20 bg-gray-100 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">
                      {item.product.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-3xl">☕</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[#1B2A4A] text-sm leading-tight">{item.product.name}</p>
                      {item.variant && (
                        <p className="text-xs text-gray-500 mt-0.5">{item.variant.name}</p>
                      )}
                      <p className="text-[#E91E8C] font-bold mt-1">${price.toFixed(2)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQty(item.product.id, item.variant?.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#E91E8C] hover:text-[#E91E8C] transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQty(item.product.id, item.variant?.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#E91E8C] hover:text-[#E91E8C] transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                        <button
                          onClick={() => removeItem(item.product.id, item.variant?.id)}
                          className="ml-auto text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600 font-medium">Subtotal</span>
              <span className="text-xl font-bold text-[#1B2A4A]">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-400 mb-4 text-center">Shipping &amp; taxes calculated at checkout</p>
            <button
              onClick={handleCheckout}
              className="w-full bg-[#E91E8C] hover:bg-[#C2186F] text-white font-bold py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-pink-200 text-sm tracking-wider"
            >
              CHECKOUT SECURELY
            </button>
            <Link
              href="/shop"
              onClick={closeCart}
              className="block text-center mt-3 text-sm text-[#1B2A4A] hover:text-[#E91E8C] font-medium transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
