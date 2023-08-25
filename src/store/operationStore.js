import { create } from "zustand";
import { formatDate } from "../utils/formatDate";
import operationsService from "../services/operations";

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
    const response = await operationsService.getOperations(categoryId);
    set({ operations: response });
  },
  createOperation: async (operationData) => {
    const res = await operationsService.createOperation(operationData);
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
    let res = await operationsService.updateOperation(operationData);
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
    let res = await operationsService.deleteOperation(id);
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
