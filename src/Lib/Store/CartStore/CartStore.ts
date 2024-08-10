import { PropCartItem } from "@/app/cart/Components/CartItem";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  lisProDuct: PropCartItem[];
  totalPrice: number;
};
type Action = {
  setAddCartPriview: (lisProDuct: PropCartItem) => void;
  setRemoveCartPriview: (id: string) => void;
  CaculateTotal: () => void;
};

export const useStoreCartPriview = create<State & Action>()(
  persist(
    (set, get) => ({
      lisProDuct: [],
      totalPrice: 0,
      setAddCartPriview: (cartitem) =>
        set((state) => {
          const exists = state.lisProDuct.some(
            (product) => product.id === cartitem.id
          );
          if (!exists) {
            return { lisProDuct: [...state.lisProDuct, cartitem] };
          } else {
            return state;
          }
        }),
      setRemoveCartPriview: (id: string) =>
        set((state) => {
          const dataRemove = state.lisProDuct.filter(
            (product) => product.id !== id
          );
          return { lisProDuct: dataRemove };
        }),
      CaculateTotal: () =>
        set((state) => {
          const totalPrice = state.lisProDuct.reduce((acc, product) => {
            return acc + product.price * product.quantity;
          }, 0);
          return { totalPrice: totalPrice };
        }),
    }),
    { name: "cartPriview", skipHydration: true }
  )
);
