"use client";

import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const STORAGE_KEY = "lari_stinu_cart";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  color?: string;
  size?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

function readStoredCart() {
  if (typeof window === "undefined") {
    return [] as CartItem[];
  }

  const savedCart = localStorage.getItem(STORAGE_KEY);
  if (!savedCart) {
    return [];
  }

  try {
    return JSON.parse(savedCart) as CartItem[];
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
    return [];
  }
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedItems = readStoredCart();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setItems(storedItems);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized && typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, isInitialized]);

  const addItem = (item: Omit<CartItem, "quantity">) => {
    setItems((previousItems) => {
      const existingItem = previousItems.find((currentItem) => currentItem.id === item.id);

      if (existingItem) {
        return previousItems.map((currentItem) =>
          currentItem.id === item.id
            ? { ...currentItem, quantity: currentItem.quantity + 1 }
            : currentItem
        );
      }

      return [...previousItems, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (id: string) => {
    setItems((previousItems) => previousItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }

    setItems((previousItems) =>
      previousItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
