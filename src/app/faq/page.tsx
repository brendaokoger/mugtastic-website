"use client";

import { useState } from "react";
import { ChevronDown, Mail, MessageCircle, Phone } from "lucide-react";
import type { FAQ } from "@/types";

const faqs: FAQ[] = [
  {
    question: "How long does production take?",
    answer: "Most orders are produced within 2-5 business days. Custom designs may take an additional 1-2 days for our team to review and optimize your artwork.",
  },
  {
    question: "What shipping options do you offer?",
    answer: "We offer Standard Shipping (5-8 business days) and Express Shipping (2-3 business days) within the US and Canada. Tracking is provided for all orders.",
  },
  {
    question: "Can I return or exchange my mug?",
    answer: "We stand behind our quality! If your mug arrives damaged or with a print error, we'll replace it free of charge. Custom-designed mugs cannot be returned unless there's a defect.",
  },
  {
    question: "What file types can I upload for custom designs?",
    answer: "We accept PNG, JPG, SVG, and PDF files. For best print quality, use high-resolution images (300 DPI or higher). Our design team reviews every order.",
  },
  {
    question: "Are your mugs dishwasher safe?",
    answer: "Yes! All our mugs are dishwasher safe. For maximum print longevity, we recommend hand washing or using the top rack of your dishwasher.",
  },
  {
    question: "What mugs do you offer?",
    answer: "We currently offer White 11oz ceramic mugs, Color Handle 11oz mugs (available in multiple colors), Black 11oz mugs, and we're adding 15oz mugs soon!",
  },
  {
    question: "Can I order in bulk for businesses or events?",
    answer: "Absolutely! We offer bulk discounts for orders of 10+ mugs. Contact us at hello@mugtastic.com for a custom quote.",
  },
  {
    question: "How do I track my order?",
    answer: "Once your order ships, you'll receive an email with a tracking number. You can also track your order on our website using your order number and email.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently we ship to the US and Canada. International shipping is coming soon! Sign up for our newsletter to be notified.",
  },
  {
    question: "Can I make changes to my order after placing it?",
    answer: "Changes can be made within 2 hours of placing your order. After that, production may have already started. Contact us immediately at hello@mugtastic.com.",
  },
];

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-[#1B2A4A] pr-4">{faq.question}</span>
        <ChevronDown
          size={18}
          className={`text-[#E91E8C] flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50">
          <div className="pt-3">{faq.answer}</div>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setName(""); setEmail(""); setMessage("");
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-black text-[#1B2A4A] mb-3">FAQ & Contact</h1>
          <p className="text-gray-500 text-lg">Got questions? We&apos;ve got answers. And if not, we&apos;re here to help!</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* FAQ list */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black text-[#1B2A4A] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} faq={faq} />
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            {/* Contact methods */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-black text-[#1B2A4A] mb-5">Get In Touch</h3>
              <div className="space-y-4">
                <a
                  href="mailto:hello@mugtastic.com"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-pink-50 hover:bg-pink-100 transition-colors"
                >
                  <div className="w-10 h-10 bg-[#E91E8C] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email us</p>
                    <p className="font-bold text-[#1B2A4A] text-sm">hello@mugtastic.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-teal-50">
                  <div className="w-10 h-10 bg-[#00B4B4] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Response time</p>
                    <p className="font-bold text-[#1B2A4A] text-sm">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-black text-[#1B2A4A] mb-5">Send a Message</h3>
              {sent ? (
                <div className="text-center py-6">
                  <span className="text-4xl block mb-3">✅</span>
                  <p className="font-bold text-[#00B4B4]">Message sent!</p>
                  <p className="text-sm text-gray-500 mt-1">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-gray-500 block mb-1.5 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Your name"
                      className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E91E8C] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 block mb-1.5 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="your@email.com"
                      className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E91E8C] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 block mb-1.5 uppercase tracking-wider">Message</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={4}
                      placeholder="How can we help?"
                      className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E91E8C] transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#E91E8C] hover:bg-[#C2186F] text-white font-bold py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-pink-200 text-sm tracking-wider"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
