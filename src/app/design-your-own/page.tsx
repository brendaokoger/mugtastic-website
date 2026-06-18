"use client";

import { useState, useRef } from "react";
import { Upload, Type, Palette, Image as ImageIcon, ShoppingCart, X, ChevronDown } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { products } from "@/lib/products";
import type { Metadata } from "next";

const MUG_TYPES = [
  { id: "white-11oz", label: "White 11oz", price: 24.99, color: "#ffffff", border: "#e2e8f0" },
  { id: "black-11oz", label: "Black 11oz", price: 26.99, color: "#1a1a1a", border: "#374151" },
  { id: "pink-handle-11oz", label: "Pink Handle 11oz", price: 27.99, color: "#ffffff", handle: "#E91E8C", border: "#e2e8f0" },
  { id: "teal-handle-11oz", label: "Teal Handle 11oz", price: 27.99, color: "#ffffff", handle: "#00B4B4", border: "#e2e8f0" },
  { id: "navy-handle-11oz", label: "Navy Handle 11oz", price: 27.99, color: "#ffffff", handle: "#1B2A4A", border: "#e2e8f0" },
];

const FONTS = ["Inter", "Georgia", "Courier New", "Comic Sans MS", "Impact"];
const TEXT_COLORS = ["#1B2A4A", "#E91E8C", "#00B4B4", "#F0A500", "#7B4FBE", "#FF6B35", "#ffffff"];

export default function DesignYourOwnPage() {
  const { addItem } = useCart();
  const [step, setStep] = useState(1);
  const [mugType, setMugType] = useState(MUG_TYPES[0]);
  const [text, setText] = useState("");
  const [font, setFont] = useState(FONTS[0]);
  const [textColor, setTextColor] = useState(TEXT_COLORS[0]);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const selectedMug = MUG_TYPES.find((m) => m.id === mugType.id) ?? MUG_TYPES[0];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setUploadedImage(url);
  };

  const handleAddToCart = () => {
    const customProduct = {
      ...products[0],
      id: `custom-${Date.now()}`,
      name: text ? `Custom Mug: "${text.slice(0, 30)}"` : "Custom Designed Mug",
      price: mugType.price,
      description: `Custom ${mugType.label} mug`,
    };
    addItem(customProduct, { id: mugType.id, name: mugType.label, price: mugType.price });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-[#1B2A4A] mb-2">Design Your Own Mug</h1>
          <p className="text-gray-500">Create a one-of-a-kind mug that&apos;s totally you</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Preview */}
          <div className="lg:sticky lg:top-28">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-sm font-bold text-gray-400 tracking-widest mb-6 uppercase">Preview</h2>

              {/* Mug visualization */}
              <div className="flex items-center justify-center py-8">
                <div className="relative">
                  {/* Mug body */}
                  <div
                    className="w-52 h-64 rounded-3xl shadow-xl flex items-center justify-center border-2 overflow-hidden"
                    style={{
                      backgroundColor: selectedMug.color,
                      borderColor: selectedMug.border,
                    }}
                  >
                    <div className="text-center px-6 w-full">
                      {uploadedImage && (
                        <div className="mb-3">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={uploadedImage} alt="Upload" className="w-24 h-24 object-cover rounded-xl mx-auto" />
                        </div>
                      )}
                      {text ? (
                        <p
                          className="text-base font-bold leading-snug break-words"
                          style={{ fontFamily: font, color: textColor }}
                        >
                          {text}
                        </p>
                      ) : (
                        <div className="border-2 border-dashed border-gray-200 rounded-xl py-6 px-4">
                          <p className="text-gray-300 text-xs font-medium">Your design appears here</p>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Handle */}
                  <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-9 h-18 border-4 rounded-r-full border-l-0"
                    style={{
                      borderColor: (selectedMug as { handle?: string }).handle ?? selectedMug.border,
                      height: "72px",
                    }}
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="bg-gray-50 rounded-2xl p-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 font-medium">{mugType.label}</span>
                  <span className="text-xl font-black text-[#1B2A4A]">${mugType.price.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!text && !uploadedImage}
                className={`w-full mt-4 flex items-center justify-center gap-2 font-bold py-4 rounded-full transition-all duration-300 text-sm tracking-wider ${
                  added
                    ? "bg-[#00B4B4] text-white"
                    : !text && !uploadedImage
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-[#E91E8C] hover:bg-[#C2186F] text-white hover:shadow-xl hover:shadow-pink-200"
                }`}
              >
                <ShoppingCart size={18} />
                {added ? "Added to Cart!" : "Add to Cart"}
              </button>
              {!text && !uploadedImage && (
                <p className="text-xs text-gray-400 text-center mt-2">Add text or upload an image to continue</p>
              )}
            </div>
          </div>

          {/* Design tools */}
          <div className="space-y-6">
            {/* Step 1: Choose mug */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-black text-[#1B2A4A] mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-[#E91E8C] text-white rounded-full text-xs font-black flex items-center justify-center">1</span>
                Choose Your Mug Style
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {MUG_TYPES.map((mug) => (
                  <button
                    key={mug.id}
                    onClick={() => setMugType(mug)}
                    className={`flex items-center gap-3 p-3 rounded-2xl border-2 transition-all duration-200 text-left ${
                      mugType.id === mug.id
                        ? "border-[#E91E8C] bg-pink-50"
                        : "border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-xl border flex-shrink-0 shadow-inner"
                      style={{ backgroundColor: mug.color, borderColor: mug.border }}
                    >
                      {(mug as { handle?: string }).handle && (
                        <div className="w-full h-full flex items-center justify-end pr-1">
                          <div className="w-2 h-6 rounded-r-full border-2" style={{ borderColor: (mug as { handle?: string }).handle, borderLeft: "none" }} />
                        </div>
                      )}
                    </div>
                    <div>
                      <p className={`text-sm font-bold ${mugType.id === mug.id ? "text-[#E91E8C]" : "text-[#1B2A4A]"}`}>
                        {mug.label}
                      </p>
                      <p className="text-xs text-gray-400">${mug.price.toFixed(2)}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Add text */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-black text-[#1B2A4A] mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-[#00B4B4] text-white rounded-full text-xs font-black flex items-center justify-center">2</span>
                <Type size={16} />
                Add Your Text
              </h3>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={120}
                rows={3}
                placeholder="Type your message, quote, name, or saying..."
                className="w-full border-2 border-gray-100 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#E91E8C] transition-colors resize-none"
              />
              <p className="text-xs text-gray-400 mt-1 text-right">{text.length}/120</p>

              {/* Font picker */}
              <div className="mt-4">
                <p className="text-xs font-bold text-gray-500 mb-2 tracking-wider uppercase">Choose Font</p>
                <div className="relative">
                  <select
                    value={font}
                    onChange={(e) => setFont(e.target.value)}
                    className="w-full appearance-none border-2 border-gray-100 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#E91E8C] transition-colors cursor-pointer"
                    style={{ fontFamily: font }}
                  >
                    {FONTS.map((f) => (
                      <option key={f} value={f} style={{ fontFamily: f }}>{f}</option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Text color */}
              <div className="mt-4">
                <p className="text-xs font-bold text-gray-500 mb-2 tracking-wider uppercase">Text Color</p>
                <div className="flex gap-2 flex-wrap">
                  {TEXT_COLORS.map((c) => (
                    <button
                      key={c}
                      onClick={() => setTextColor(c)}
                      className={`w-8 h-8 rounded-full border-2 transition-transform ${
                        textColor === c ? "scale-125 border-gray-400" : "border-white shadow-md"
                      }`}
                      style={{ backgroundColor: c }}
                      aria-label={`Color ${c}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Upload image */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-black text-[#1B2A4A] mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-[#F0A500] text-white rounded-full text-xs font-black flex items-center justify-center">3</span>
                <ImageIcon size={16} />
                Upload Photo or Logo
              </h3>

              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />

              {uploadedImage ? (
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={uploadedImage} alt="Upload preview" className="w-full h-40 object-cover rounded-2xl" />
                  <button
                    onClick={() => setUploadedImage(null)}
                    className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md text-gray-600 hover:text-red-500 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => fileRef.current?.click()}
                  className="w-full border-2 border-dashed border-gray-200 rounded-2xl py-8 flex flex-col items-center gap-3 hover:border-[#E91E8C] hover:bg-pink-50 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-gray-100 group-hover:bg-pink-100 rounded-full flex items-center justify-center transition-colors">
                    <Upload size={20} className="text-gray-400 group-hover:text-[#E91E8C] transition-colors" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-gray-600 group-hover:text-[#E91E8C] transition-colors">
                      Click to upload image
                    </p>
                    <p className="text-xs text-gray-400 mt-1">PNG, JPG, SVG up to 10MB</p>
                  </div>
                </button>
              )}
              <p className="text-xs text-gray-400 mt-3">
                Upload photos, logos, signatures, or artwork. Our team will optimize it for print.
              </p>
            </div>

            {/* Notes */}
            <div className="bg-[#FFF8F0] rounded-3xl p-6 border border-orange-100">
              <div className="flex gap-3">
                <span className="text-2xl flex-shrink-0">💡</span>
                <div>
                  <p className="font-bold text-[#1B2A4A] text-sm mb-1">Design Tips</p>
                  <ul className="text-xs text-gray-500 space-y-1 list-disc list-inside">
                    <li>Use high-resolution images (300+ DPI) for best print quality</li>
                    <li>Keep text concise — shorter phrases look bolder on mugs</li>
                    <li>Dark text works best on white mugs; light text on dark mugs</li>
                    <li>Our team reviews every order before printing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
