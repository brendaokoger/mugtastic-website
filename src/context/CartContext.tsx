"use client";

import { createContext, useContext, useReducer, useCallback, ReactNode } from "react";
import { CartItem, Product, ProductVariant } from "@/types";

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: "ADD_ITEM"; product: Product; variant?: ProductVariant }
  | { type: "REMOVE_ITEM"; productId: string; variantId?: string }
  | { type: "UPDATE_QTY"; productId: string; variantId?: string; quantity: number }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_CART" }
  | { type: "CLOSE_CART" };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const key = action.variant ? `${action.product.id}-${action.variant.id}` : action.product.id;
      const existing = state.items.find(
        (i) => (i.variant ? `${i.product.id}-${i.variant.id}` : i.product.id) === key
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            (i.variant ? `${i.product.id}-${i.variant.id}` : i.product.id) === key
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
          isOpen: true,
        };
      }
      return {
        ...state,
        items: [...state.items, { product: action.product, quantity: 1, variant: action.variant }],
        isOpen: true,
      };
    }
    case "REMOVE_ITEM": {
      const key = action.variantId ? `${action.productId}-${action.variantId}` : action.productId;
      return {
        ...state,
        items: state.items.filter(
          (i) => (i.variant ? `${i.product.id}-${i.variant.id}` : i.product.id) !== key
        ),
      };
    }
    case "UPDATE_QTY": {
      const key = action.variantId ? `${action.productId}-${action.variantId}` : action.productId;
      if (action.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (i) => (i.variant ? `${i.product.id}-${i.variant.id}` : i.product.id) !== key
          ),
        };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          (i.variant ? `${i.product.id}-${i.variant.id}` : i.product.id) === key
            ? { ...i, quantity: action.quantity }
            : i
        ),
      };
    }
    case "CLEAR_CART":
      return { ...state, items: [] };
    case "TOGGLE_CART":
      return { ...state, isOpen: !state.isOpen };
    case "CLOSE_CART":
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  totalItems: number;
  totalPrice: number;
  addItem: (product: Product, variant?: ProductVariant) => void;
  removeItem: (productId: string, variantId?: string) => void;
  updateQty: (productId: string, variantId?: string, quantity?: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });

  const addItem = useCallback((product: Product, variant?: ProductVariant) =>
    dispatch({ type: "ADD_ITEM", product, variant }), []);

  const removeItem = useCallback((productId: string, variantId?: string) =>
    dispatch({ type: "REMOVE_ITEM", productId, variantId }), []);

  const updateQty = useCallback((productId: string, variantId?: string, quantity: number = 0) =>
    dispatch({ type: "UPDATE_QTY", productId, variantId, quantity }), []);

  const clearCart = useCallback(() => dispatch({ type: "CLEAR_CART" }), []);
  const toggleCart = useCallback(() => dispatch({ type: "TOGGLE_CART" }), []);
  const closeCart = useCallback(() => dispatch({ type: "CLOSE_CART" }), []);

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = state.items.reduce(
    (sum, i) => sum + (i.variant?.price ?? i.product.price) * i.quantity,
    0
  );

  return (
    <CartContext.Provider value={{ ...state, totalItems, totalPrice, addItem, removeItem, updateQty, clearCart, toggleCart, closeCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
