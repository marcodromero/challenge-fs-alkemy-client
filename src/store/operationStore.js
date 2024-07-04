import { create } from "zustand";
import { formatDate, formatDateToYMD } from "../utils/formatDate";
import {
  getOperations,
  createOperation,
  updateOperation,
  deleteOperation,
} from "../services/operations";

export const useOperationStore = create((set, get) => ({
  token:'',
  operation: null,
  operations: [],
  message: "",
  filled: false,
  isError: false,
  setToken: (userToken)=>{
     set({ token: userToken });
  },
  resetStates: () => {
    set({ filled: false });
    set({ isError: false });
    set({ message: "" });
  },
  setOperation: (operation) => {
    let { date, ...data } = operation;
    const formattedDate = formatDateToYMD(date);
    data = { ...data, date, formattedDate };
    set({ operation: data });
  },
  getOperations: async (categoryId = undefined) => {
    const token =  get().token;
    const response = await getOperations({categoryId, token});
    const {data, error} = await response.json();
    if(!error){
        set({ operations: data });
    }
  },
  createOperation: async (operationData) => {
    const token =  get().token;
    const response = await createOperation({operationData, token});
    const {error, message} = await response.json();
    if(!error){
      set({ message: "La operación fue agregada a la lista." });
      get().getOperations();
      set({ filled: true });
      set({ isError: false });
    } else {
      set({ message: message});
      set({ isError: true });
    }
  },
  updateOperation: async (operationData) => {
    const token =  get().token;
    let response = await updateOperation({operationData, token});
    const {error, message} = await response.json();
    if(!error){
      set({ message: "La operación fue actualizada." });
      get().getOperations();
      set({ filled: true });
      set({ isError: false });
    } else {
      set({ message: message });
      set({ isError: true });
    }
  },
  deleteOperation: async (id) => {
    const token =  get().token;
    let response = await deleteOperation({id, token});
    const {data, error, message} = await response.json();
    if(!error){
      set({ message: "La operación fue eliminada." });
      get().getOperations();
      set({ filled: true });
      set({ isError: false });
    } else {
      set({ message: message });
      set({ isError: true });
    }
  },
}));
