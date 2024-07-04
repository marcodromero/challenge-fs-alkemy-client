import { create } from "zustand";
import { loginRequest, registerUser, validateToken } from "../services/auth";

export const useAuthStore = create((set, get) => ({
  isAuthenticated: false,
  token:'',
  message: "",
  isError: false,
  setUser: (data) => {
    set({ user: data });
  },
  setToken: (userToken)=>{
     set({ token: userToken });
  },
  clearErrorMessage: ()=>{
    set({message:""});
    set({isError: false});
  },
  setIsAuthenticated: (value) => {
    set({ isAuthenticated: value });
  },
  validateToken:async()=>{
      const token = localStorage.getItem('token');
      if(token){
        let response = await validateToken(token);
        const {data, error} = await response.json();
        if(!error){
            set({token: data.token })
            set({isAuthenticated: true})
        }
      }
  },
  loginRequest: async ({email, password}) => {
  const response = await loginRequest({email, password});
  const {data, error, message} = await response.json();
  if(!error){
    localStorage.setItem("token", get().token);
    get().setToken(data.token);
    get().clearErrorMessage();
    set({ isAuthenticated: true });
    set({isError: false});
  }else{
    set({ message: message });
    set({isError: true});
  }
  },
  logout: ()=>{
    localStorage.removeItem('token');
    set({token: '' })
    set({isAuthenticated: false})
  },
  registerUser:async ({email, password}) => {
    let response = await registerUser({email, password});
    const {data, error, message} = await response.json()
    if(!error){
      set({message: "El usuario ha sido registrado exitosamente."})
      set({isError: false});
    }else{
      set({ message: message});
      set({isError: true});
    }
    
  }
}));
