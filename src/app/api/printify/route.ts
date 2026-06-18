import { NextRequest, NextResponse } from "next/server";
import { getProducts, createOrder, publishOrder } from "@/lib/printify";

export async function GET() {
  try {
    const products = await getProducts();
    return NextResponse.json(products);
  } catch (err) {
    console.error("Printify GET error:", err);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, ...data } = body;

    if (action === "create_order") {
      const order = await createOrder(data.lineItems, data.address, data.shippingMethod);
      return NextResponse.json(order);
    }

    if (action === "publish_order") {
      const result = await publishOrder(data.orderId);
      return NextResponse.json(result);
    }

    return NextResponse.json({ error: "Unknown action" }, { status: 400 });
  } catch (err) {
    console.error("Printify POST error:", err);
    return NextResponse.json({ error: "Printify operation failed" }, { status: 500 });
  }
}
