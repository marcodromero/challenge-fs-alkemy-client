import { create } from "zustand";
import { formatDate } from "../utils/formatDate";
import {
  getOperations,
  createOperation,
  updateOperation,
  deleteOperation,
} from "../services/operations";

export const useOperationStore = create((set, get) => ({
  operation: null,
  operations: [],
  message: "",
  filled: false,
  error: false,
  resetStates: () => {
    set({ filled: false });
    set({ error: false });
    set({ message: "" });
  },
  setOperation: (operation) => {
    let { date, ...data } = operation;
    const formattedDate = formatDate(date);
    data = { ...data, date, formattedDate };
    set({ operation: data });
  },
  getOperations: async (categoryId = undefined) => {
    const response = await getOperations(categoryId);
    set({ operations: response });
  },
  createOperation: async (operationData) => {
    const res = await createOperation(operationData);
    if (res.ok) {
      set({ message: "La operación fue agregada a la lista." });
      get().getOperations();
      set({ filled: true });
      set({ error: false });
    } else {
      set({ message: await res.json() });
      set({ error: true });
    }
  },
  updateOperation: async (operationData) => {
    let res = await updateOperation(operationData);
    if (res.ok) {
      set({ message: "La operación fue actualizada." });
      get().getOperations();
      set({ filled: true });
      set({ error: false });
    } else {
      set({ message: await res.json() });
      set({ error: true });
    }
  },
  deleteOperation: async (id) => {
    let res = await deleteOperation(id);
    if (res.ok) {
      set({ message: "La operación fue eliminada." });
      get().getOperations();
      set({ filled: true });
      set({ error: false });
    } else {
      set({ message: await res.json() });
      set({ error: true });
    }
  },
}));
