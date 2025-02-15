import { create } from "zustand";
import { TechStack } from "../types/States";

export const useTechStack = create<TechStack>((set) => ({
  id: "",
  setId: (id: string) => set({ id }),
  isDeleteVisible: false,
  setIsDeleteVisible: (isDeleteVisible: boolean) => set({ isDeleteVisible }),
  isModalOpen: false,
  setIsModalOpen: (isModalOpen: boolean) => set({ isModalOpen }),
}));