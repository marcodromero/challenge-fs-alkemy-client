import { create } from "zustand";
import {
  getCategories
} from "../services/categories";

export const useCategoryStore = create((set, get) => ({
    categories: [],
    getCategories: async () => {
        const response = await getCategories();
        const {data, error} = await response.json();
        if(!error){
            set({ categories: data });
        }
    },
    
}))