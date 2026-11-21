
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export interface CartItem {
  productId: string;
  slug: string;
  name: string;
  image: string | null;
  variantId: string;
  variantName: string;
  sku: string;
  price: number;
  currency: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  cartCount: number;
  subtotal: number;
  isLoaded: boolean;
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  removeItem: (variantId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "nexa-poker-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(STORAGE_KEY);

      if (savedCart) {
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed)) {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setItems(parsed);
        }
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, isLoaded]);

  const addItem = useCallback(
    (newItem: Omit<CartItem, "quantity">, quantity = 1) => {
      if (quantity < 1) return;

      setItems((currentItems) => {
        const existing = currentItems.find(
          (item) => item.variantId === newItem.variantId
        );

        if (existing) {
          return currentItems.map((item) =>
            item.variantId === newItem.variantId
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        }

        return [...currentItems, { ...newItem, quantity }];
      });
    },
    []
  );

  const updateQuantity = useCallback(
    (variantId: string, quantity: number) => {
      if (quantity < 1) return;

      setItems((currentItems) =>
        currentItems.map((item) =>
          item.variantId === variantId ? { ...item, quantity } : item
        )
      );
    },
    []
  );

  const removeItem = useCallback((variantId: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.variantId !== variantId)
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const value = useMemo(
    () => ({
      items,
      cartCount,
      subtotal,
      isLoaded,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
    }),
    [
      items,
      cartCount,
      subtotal,
      isLoaded,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
    ]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
