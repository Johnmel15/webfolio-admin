import { create } from "zustand";
import { Email, TechStack } from "../types/States";

export const useTechStack = create<TechStack>((set) => ({
  id: "",
  setId: (id: string) => set({ id }),
  isDeleteVisible: false,
  setIsDeleteVisible: (isDeleteVisible: boolean) => set({ isDeleteVisible }),
  isModalOpen: false,
  setIsModalOpen: (isModalOpen: boolean) => set({ isModalOpen }),
}));

export const useEmail = create<Email>((set) => ({
  id: "",
  name: "",
  subject: "",
  date: "",
  message: "",
  email: "",
  
  setId: (id: string) => set({ id }),
  setName: (name: string) => set({ name }),
  setSubject: (subject: string) => set({ subject }),
  setDate: (date: string) => set({ date }),
  setMessage: (message: string) => set({ message }),
  setEmail: (message: string) => set({ message }),

  handleEmail: (id: string, name: string, subject: string, date: string, message: string, email: string) => {
    set({ id, name, subject, date, message, email });
  }
}));
