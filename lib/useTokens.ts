import { persist } from "zustand/middleware";
import { create } from "zustand";

interface tokens {
  accessToken: string;
  refreshToken: string;
}

interface Tokens {
  tokens: tokens | null;
  setTokens: (tokens: tokens) => void;
}

export const useTokens = create<Tokens>()(
  persist(
    (set) => ({
      tokens: null,
      setTokens: (token: tokens) => set(() => ({ tokens: token })),
    }),
    {
      name: "user_tokens",
    },
  ),
);
