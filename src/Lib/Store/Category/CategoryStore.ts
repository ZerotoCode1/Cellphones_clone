import { ResponseCategory } from "@/services/Category/CategoryService";
import { create } from "zustand";

type State = {
  listCategory: ResponseCategory[];
};
type Action = {
  setListCategory: (listusers: ResponseCategory[]) => void;
};

export const useCategoryStore = create<State & Action>()((set) => ({
  listCategory: [],
  setListCategory: (listCategory) => set({ listCategory }),
}));
