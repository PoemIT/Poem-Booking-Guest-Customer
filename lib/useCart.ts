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

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (dish, price, adons = null, specification, quantity = 1) => {
        set((state) => {
          const existing = state.items.find((item) => item.dish.id === dish.id);

          if (existing) {
            const totalAdonsPrice = existing.adons?.reduce(
              (sum, addon) => sum + Number(addon.price),
              0,
            );

            const MealPrice = totalAdonsPrice
              ? existing.dish.price + totalAdonsPrice
              : existing.dish.price;

            return {
              items: state.items.map((item) =>
                item.dish.id === dish.id
                  ? {
                      ...item,
                      adons: adons,
                      specifications: specification,
                      price: String(MealPrice * existing.quantity),
                      quantity: item.quantity + quantity,
                    }
                  : item,
              ),
            };
          }

          return {
            items: [
              ...state.items,
              { dish, quantity, price, adons, specification },
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
          items: state.items.map((item) =>
            item.dish.id === dishId
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item,
          ),
        }));
      },

      decrement: (dishId) => {
        set((state) => ({
          items: state.items
            .map((item) =>
              item.dish.id === dishId
                ? { ...item, quantity: item.quantity - 1 }
                : item,
            )
            .filter((item) => item.quantity > 0),
        }));
      },

      updateQuantity: (dishId, quantity) => {
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter((item) => item.dish.id !== dishId)
              : state.items.map((item) =>
                  item.dish.id === dishId ? { ...item, quantity } : item,
                ),
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
