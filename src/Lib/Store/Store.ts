import { create } from "zustand";

type State = {
  listusers: any[];
};
type Action = {
  setListUsers: (listusers: any[]) => void;
};

export const useStore = create<State & Action>()((set) => ({
  listusers: [],
  setListUsers: (listusers) => set({ listusers }),
}));
