"use client";

import { createContext, use } from "react";
import { Product } from "@/types";
import { useLocalStorage } from "@mantine/hooks";

interface CartItem extends Product {
  quantity: number;
  size?: keyof Product["sizes"];
  weight?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (
    product: Product,
    quantity: number,
    size: keyof Product["sizes"],
    weight: string
  ) => void;
  removeFromCart: (productId: Product["id"]) => void;
  updateQuantity: (productId: Product["id"], quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getItems: () => CartItem[];
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useLocalStorage<CartItem[]>({
    key: "cart-items",
    defaultValue: [],
  });

  function addToCart(
    product: Product,
    quantity: number,
    size: keyof Product["sizes"],
    weight: string
  ) {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id && item.size === size
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, weight, quantity }
            : item
        );
      }

      return [...prevItems, { ...product, quantity, size, weight }];
    });
  }

  function removeFromCart(productId: Product["id"]) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  }

  function updateQuantity(productId: Product["id"], quantity: number) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }

  function clearCart() {
    setItems([]);
  }

  function getTotalPrice() {
    return items.reduce((total, item) => {
      const price = item.size ? item.sizes[item.size].price : item.price;
      return total + price * item.quantity;
    }, 0);
  }

  function getItems() {
    return items;
  }

  return (
    <CartContext
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getItems
      }}
    >
      {children}
    </CartContext>
  );
}

export function useCart() {
  const context = use(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
