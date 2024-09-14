import { PropCartItem } from "@/app/cart/Components/CartItem";
import { toast } from "react-toastify";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  lisProDuct: PropCartItem[];
  totalPrice: number;
};
type Action = {
  addToCart: (lisProDuct: PropCartItem) => void;
  deleteCart: (id: string, keyColor: string, id_version: string) => void;
  CaculateTotal: () => void;
  decrease: (id: string, keyColor: string, id_version: string) => void;
  increase: (
    id: string,
    keyColor: string,
    id_version: string,
    maxQuannity: number
  ) => void;
};

export const useStoreCart = create<State & Action>()(
  persist(
    (set, get) => ({
      lisProDuct: [],
      totalPrice: 0,
      addToCart: (cartitem) =>
        set((state) => {
          const exists = state.lisProDuct.some(
            (product) =>
              product.id === cartitem.id &&
              product.keyColor === cartitem.keyColor &&
              product.id_version === cartitem.id_version
          );
          // const listProduct = useStoreCart((state) => state.lisProDuct);

          console.log(state.lisProDuct, "ioiouuio");
          if (!exists) {
            console.log([...state.lisProDuct, cartitem], "ioiouuio");

            return { lisProDuct: [...state.lisProDuct, cartitem] };
          } else {
            return {
              lisProDuct: state.lisProDuct.map((product) =>
                product.id === cartitem.id &&
                product.keyColor === cartitem.keyColor &&
                product?.id_version === cartitem.id_version
                  ? { ...product, quantity: product.quantity + 1 }
                  : product
              ),
            };
          }
        }),
      deleteCart: (id: string, keyColor: string, id_version: string) =>
        set((state) => {
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
      // increase: (id, keyColor, id_version, maxQuanity) => {
      //   set((state) => {
      //     const editQuantity = state.lisProDuct.map((product) =>
      //       product.id === id &&
      //       product.keyColor === keyColor &&
      //       product.id_version === id_version
      //         ? {
      //             ...product,
      //             quantity:
      //               product.quantity < maxQuanity
      //                 ? product.quantity + 1
      //                 : product.quantity,
      //           }
      //         : product
      //     );
      //     return { lisProDuct: editQuantity };
      //   });
      // },
      increase: (id, keyColor, id_version, maxQuantity) => {
        set((state) => {
          let stockExceeded = false; // Biến để kiểm tra xem số lượng có vượt quá hay không

          const editQuantity = state.lisProDuct.map((product) => {
            if (
              product.id === id &&
              product.keyColor === keyColor &&
              product.id_version === id_version
            ) {
              if (product.quantity >= maxQuantity-1) {
                stockExceeded = true; // Đánh dấu rằng số lượng đã đạt giới hạn
              }
              return {
                ...product,
                quantity:
                  product.quantity < maxQuantity-1
                    ? product.quantity + 1
                    : product.quantity,
              };
            }
            return product;
          });

          if (stockExceeded) {
            toast.error("Số lượng không đủ! Đã đạt mức tối đa.")
          }

          return { lisProDuct: editQuantity };
        });
      },
      decrease(id, keyColor, id_version) {
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
