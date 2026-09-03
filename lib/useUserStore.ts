import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserResponseData } from "./types/user";

interface StoreType {
  user: UserResponseData | null;
  setUserData: (user: UserResponseData) => void;
  deleteUser: () => void;
}

export const useUserStore = create<StoreType>()(
  persist(
    (set) => ({
      user: null,
      setUserData: (data: UserResponseData) => set({ user: data }),
      deleteUser: () => set({ user: null }),
    }),
    {
      name: "user_data",
    },
  ),
);
