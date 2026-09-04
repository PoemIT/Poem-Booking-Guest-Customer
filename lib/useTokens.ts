import { persist } from "zustand/middleware";
import { create } from "zustand";

export interface tokens {
  accessToken: string;
  refreshToken: string;
}

interface Tokens {
  tokens: tokens | null;
  setTokens: (tokens: tokens) => void;
  deleteTokens: () => void;
}

export const useTokens = create<Tokens>()(
  persist(
    (set) => ({
      tokens: null,
      setTokens: (token: tokens) => set(() => ({ tokens: token })),
      deleteTokens: () => set(() => ({ tokens: null })),
    }),
    {
      name: "user_tokens",
    },
  ),
);
