import { PropCartItem } from "@/app/cart/Components/CartItem";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  lisProDuct: PropCartItem[];
  totalPrice: number;
};
type Action = {
  setAddCartPriview: (lisProDuct: PropCartItem) => void;
  setRemoveCartPriview: (
    id: string,
    keyColor: string,
    id_version: string
  ) => void;
  CaculateTotal: () => void;
  setDefaultCartPriview: () => void;
  increaseCartPrivew: (
    id: string,
    keyColor: string,
    id_version: string,
    maxQuanity: number
  ) => void;
  decreasePriveiew:(id: string, keyColor: string, id_version: string) => void;
};

export const useStoreCartPriview = create<State & Action>()(
  persist(
    (set, get) => ({
      lisProDuct: [],
      totalPrice: 0,
      setAddCartPriview: (cartitem) =>
        set((state) => {
          if (cartitem) {
            return { lisProDuct: [...state.lisProDuct, cartitem] };
          } else {
            return state;
          }
        }),
      setRemoveCartPriview: (
        id: string,
        keyColor: string,
        id_version: string
      ) =>
        set((state) => {
          console.log(id, keyColor, id_version);
          const dataRemove = state.lisProDuct.filter(
            (product) =>
              !(
                product.id === id &&
                product.keyColor === keyColor &&
                product.id_version === id_version
              )
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
      setDefaultCartPriview: () =>
        set((sate) => {
          return { lisProDuct: [], totalPrice: 0 };
        }),
      increaseCartPrivew: (id, keyColor, id_version, maxQuanity) => {
        set((state) => {
          const editQuantity = state.lisProDuct.map((product) =>
            product.id === id &&
            product.keyColor === keyColor &&
            product.id_version === id_version
              ? {
                  ...product,
                  quantity:
                    product.quantity < maxQuanity-1
                      ? product.quantity + 1
                      : product.quantity,
                }
              : product
          );
          return { lisProDuct: editQuantity };
        });
      },
      decreasePriveiew(id, keyColor, id_version) {
        set((state) => {
          const dataRemove = state.lisProDuct.map((product) =>
            product.id === id &&
            product.keyColor === keyColor &&
            product.id_version === id_version
              ? { ...product, quantity: product.quantity - 1 }
              : product
          );
          return { lisProDuct: dataRemove };
        });
      },
    }),
    { name: "cartPriview", skipHydration: true }
  )
);
