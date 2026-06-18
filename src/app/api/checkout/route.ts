import { NextRequest, NextResponse } from "next/server";
import { createCheckoutSession } from "@/lib/stripe";
import { CartItem } from "@/types";

export async function POST(req: NextRequest) {
  try {
    const { items }: { items: CartItem[] } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "No items in cart" }, { status: 400 });
    }

    const origin = req.headers.get("origin") ?? "http://localhost:3000";

    const session = await createCheckoutSession(
      items,
      `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      `${origin}/shop`
    );

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Checkout error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
