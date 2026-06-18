import Stripe from "stripe";
import { CartItem } from "@/types";

// Placeholder: Initialize Stripe with secret key from environment
export const getStripeInstance = () => {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
  return new Stripe(key, { apiVersion: "2026-05-27.dahlia" });
};

export async function createCheckoutSession(items: CartItem[], successUrl: string, cancelUrl: string) {
  const stripe = getStripeInstance();

  const lineItems = items.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.product.name,
        description: item.variant ? `Variant: ${item.variant.name}` : item.product.description,
        images: [item.product.image].filter(Boolean),
      },
      unit_amount: Math.round((item.variant?.price ?? item.product.price) * 100),
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: successUrl,
    cancel_url: cancelUrl,
    shipping_address_collection: {
      allowed_countries: ["US", "CA"],
    },
    metadata: {
      source: "mugtastic-website",
    },
  });

  return session;
}
