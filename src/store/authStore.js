import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: {
    name: "",
    picture: "",
    email: "",
    token: "",
  },
  setUser: (data) => {
    set({ user: data });
  },
  setIsAuthenticated: (value) => {
    set({ isAuthenticated: value });
  },
}));
