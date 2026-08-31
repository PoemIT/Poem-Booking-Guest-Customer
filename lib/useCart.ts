// lib/stores/useCartStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { adon, Dish } from "@/lib/types";

export interface CartItem {
  dish: Dish;
  quantity: number;
  adons?: adon[] | null;
  specifications?: string;
  price: string;
}

interface CartState {
  items: CartItem[];
  addItem: (
    dish: Dish,
    price: string,
    adons?: adon[] | null,
    specification?: string,
    quantity?: number,
  ) => void;
  removeItem: (dishId: string) => void;
  increment: (dishId: string) => void;
  decrement: (dishId: string) => void;
  updateQuantity: (dishId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

// Shared helper: unit price = base dish price + sum of addon prices
function getUnitPrice(item: CartItem): number {
  const addonsTotal =
    item.adons?.reduce((sum, addon) => sum + Number(addon.price), 0) ?? 0;
  return item.dish.price + addonsTotal;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (dish, price, adons = null, specification, quantity = 1) => {
        set((state) => {
          const existing = state.items.find((item) => item.dish.id === dish.id);

          if (existing) {
            const newQuantity = existing.quantity + quantity;
            const unitPrice = getUnitPrice({ ...existing, adons });

            return {
              items: state.items.map((item) =>
                item.dish.id === dish.id
                  ? {
                      ...item,
                      adons,
                      specifications: specification,
                      quantity: newQuantity,
                      price: String(unitPrice * newQuantity),
                    }
                  : item,
              ),
            };
          }

          return {
            items: [
              ...state.items,
              {
                dish,
                quantity,
                price,
                adons,
                specifications: specification,
              },
            ],
          };
        });
      },

      removeItem: (dishId) => {
        set((state) => ({
          items: state.items.filter((item) => item.dish.id !== dishId),
        }));
      },

      increment: (dishId) => {
        set((state) => ({
          items: state.items.map((item) => {
            if (item.dish.id !== dishId) return item;

            const newQuantity = item.quantity + 1;
            const unitPrice = getUnitPrice(item);

            return {
              ...item,
              quantity: newQuantity,
              price: String(unitPrice * newQuantity),
            };
          }),
        }));
      },

      decrement: (dishId) => {
        set((state) => ({
          items: state.items
            .map((item) => {
              if (item.dish.id !== dishId) return item;

              const newQuantity = item.quantity - 1;
              const unitPrice = getUnitPrice(item);

              return {
                ...item,
                quantity: newQuantity,
                price: String(unitPrice * newQuantity),
              };
            })
            .filter((item) => item.quantity > 0),
        }));
      },

      updateQuantity: (dishId, quantity) => {
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter((item) => item.dish.id !== dishId)
              : state.items.map((item) => {
                  if (item.dish.id !== dishId) return item;

                  const unitPrice = getUnitPrice(item);

                  return {
                    ...item,
                    quantity,
                    price: String(unitPrice * quantity),
                  };
                }),
        }));
      },

      clearCart: () => set({ items: [] }),

      totalItems: () =>
        get().items.reduce((sum, item) => sum + item.quantity, 0),

      totalPrice: () =>
        get().items.reduce(
          (sum, item) => sum + item.dish.price * item.quantity,
          0,
        ),
    }),
    {
      name: "cart-storage", // localStorage key
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
