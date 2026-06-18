export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  variants?: ProductVariant[];
  badge?: string;
  colors?: string[];
}

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  image?: string;
  color?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  variant?: ProductVariant;
  customization?: Customization;
}

export interface Customization {
  text?: string;
  font?: string;
  color?: string;
  imageUrl?: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
  textColor: string;
  slug: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
