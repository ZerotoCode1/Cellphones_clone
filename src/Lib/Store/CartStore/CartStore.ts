import { PropCartItem } from "@/app/cart/Components/CartItem";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  lisProDuct: PropCartItem[];
  totalPrice: number;
};
type Action = {
  addToCart: (lisProDuct: PropCartItem) => void;
  deleteCart: (id: string) => void;
  CaculateTotal: () => void;
  decrease: (id: string) => void;
  increase: (id: string) => void;
};

export const useStoreCart = create<State & Action>()(
  persist(
    (set, get) => ({
      lisProDuct: [],
      totalPrice: 0,
      addToCart: (cartitem) =>
        set((state) => {
          const exists = state.lisProDuct.some(
            (product) => product.id === cartitem.id
          );
          if (!exists) {
            return { lisProDuct: [...state.lisProDuct, cartitem] };
          } else {
            return {
              lisProDuct: state.lisProDuct.map((product) =>
                product.id === cartitem.id
                  ? { ...product, quantity: product.quantity + 1 }
                  : product
              ),
            };
          }
        }),
      deleteCart: (id: string) =>
        set((state) => {
          const dataRemove = state.lisProDuct.filter(
            (product) => product.id !== id
          );
          return { lisProDuct: dataRemove };
        }),
      increase: (id) => {
        set((state) => {
          const editQuantity = state.lisProDuct.map((product) =>
            product.id === id
              ? {
                  ...product,
                  quantity: product.quantity + 1,
                }
              : product
          );
          return { lisProDuct: editQuantity };
        });
      },
      decrease(id) {
        set((state) => {
          const dataRemove = state.lisProDuct.map((product) =>
            product.id === id
              ? { ...product, quantity: product.quantity - 1 }
              : product
          );
          return { lisProDuct: dataRemove };
        });
      },
      CaculateTotal: () =>
        set((state) => {
          const totalPrice = state.lisProDuct.reduce((acc, product) => {
            return acc + product.price * product.quantity;
          }, 0);
          return { totalPrice: totalPrice };
        }),
    }),
    { name: "cart", skipHydration: true }
  )
);
