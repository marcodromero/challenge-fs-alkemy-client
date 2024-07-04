import { create } from "zustand";
import {
  getBalance
} from "../services/balance";

export const useBalanceStore = create((set, get) => ({
    token: '',
    balance: [],
    setToken: (userToken)=>{
        set({ token: userToken });
    },
    getBalance: async () => {
        const response = await getBalance(get().token);
        const {data, error} = await response.json();
        if(!error){
            set({ balance: data });
        }
    },
    
}))