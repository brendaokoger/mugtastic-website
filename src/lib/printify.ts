// Placeholder Printify API integration
const PRINTIFY_API_BASE = "https://api.printify.com/v1";

function getHeaders() {
  const token = process.env.PRINTIFY_API_TOKEN;
  if (!token) throw new Error("PRINTIFY_API_TOKEN is not set");
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
}

function getShopId() {
  const id = process.env.PRINTIFY_SHOP_ID;
  if (!id) throw new Error("PRINTIFY_SHOP_ID is not set");
  return id;
}

export async function getProducts() {
  const res = await fetch(`${PRINTIFY_API_BASE}/shops/${getShopId()}/products.json`, {
    headers: getHeaders(),
  });
  if (!res.ok) throw new Error(`Printify getProducts failed: ${res.status}`);
  return res.json();
}

export async function getProduct(productId: string) {
  const res = await fetch(
    `${PRINTIFY_API_BASE}/shops/${getShopId()}/products/${productId}.json`,
    { headers: getHeaders() }
  );
  if (!res.ok) throw new Error(`Printify getProduct failed: ${res.status}`);
  return res.json();
}

export interface PrintifyOrderItem {
  product_id: string;
  variant_id: number;
  quantity: number;
}

export interface PrintifyAddress {
  first_name: string;
  last_name: string;
  email: string;
  address1: string;
  city: string;
  region: string;
  country: string;
  zip: string;
}

export async function createOrder(
  lineItems: PrintifyOrderItem[],
  address: PrintifyAddress,
  shippingMethod: number = 1
) {
  const res = await fetch(`${PRINTIFY_API_BASE}/shops/${getShopId()}/orders.json`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({
      external_id: `mugtastic-${Date.now()}`,
      label: `Mugtastic Order`,
      line_items: lineItems,
      shipping_method: shippingMethod,
      address_to: address,
    }),
  });
  if (!res.ok) throw new Error(`Printify createOrder failed: ${res.status}`);
  return res.json();
}

export async function publishOrder(orderId: string) {
  const res = await fetch(
    `${PRINTIFY_API_BASE}/shops/${getShopId()}/orders/${orderId}/send_to_production.json`,
    { method: "POST", headers: getHeaders() }
  );
  if (!res.ok) throw new Error(`Printify publishOrder failed: ${res.status}`);
  return res.json();
}
