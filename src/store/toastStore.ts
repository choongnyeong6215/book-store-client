import { create } from "zustand";

type ToastType = "info" | "error";

export interface IToast {
  id: number;
  message: string;
  type: ToastType;
}

interface IToastStoreState {
  toasts: IToast[];
  addToast: (message: string, type?: ToastType) => void;
  removeToast: (id: number) => void;
}

const useToastStore = create<IToastStoreState>((set) => ({
  toasts: [],
  addToast: (message: string, type: ToastType = "info") => {
    set((state) => ({
      toasts: [...state.toasts, { message, type, id: Date.now() }],
    }));
  },
  removeToast: (id: number) => {
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    }));
  },
}));

export default useToastStore;
