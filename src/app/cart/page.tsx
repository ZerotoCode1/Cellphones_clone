"use client";
import { BASE_ROUTER } from "@/Components/Contant/apiUrl";
import { SourceIcon } from "@/Components/Iconsvg";
import { useStoreCart } from "@/Lib/Store/CartStore/CartStore";
import { useStoreCartPriview } from "@/Lib/Store/StorecartPriview";
import Link from "next/link";
import { useEffect } from "react";
import CartItem, { PropCartItem } from "./Components/CartItem";
const Cart = () => {
  const toTalPrice = useStoreCartPriview((state) => state.totalPrice);
  const quannity = useStoreCartPriview((state) => state.lisProDuct.length);
  const listProduct = useStoreCart((state) => state.lisProDuct);

  useEffect(() => {
    useStoreCart.persist.rehydrate();
    if (toTalPrice > 0) {
      document
        .querySelector(".btn-buy")
        ?.classList.add("bg-[#c41717]", "text-white");
    } else {
      document
        .querySelector(".btn-buy")
        ?.classList.remove("bg-[#c41717]", "text-white");
    }
    return () => {};
  }, [toTalPrice]);
  return (
    <>
      <div className="">
        <div>
          <div
            className="flex justify-center items-center p-[10px] w-full"
            style={{ borderBottom: "1px solid #e5e5e5" }}
          >
            <div className="absolute left-0">
              <SourceIcon.GoBack />
            </div>
            <p className="text-[18px] font-semibold">Giỏ hàng của bạn</p>
          </div>
          <div className="flex w-full mt-4">
            <label className="container-input flex justify-center items-center">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Chọn tất cả
            </label>
          </div>
          <div>
            {listProduct?.map((item, index) => (
              <>
                <CartItem
                  img={item.img}
                  price={item.price}
                  quantity={item.quantity}
                  salePrice={item.salePrice}
                  titleProduct={item.titleProduct}
                  key={index}
                  id={item.id}
                />
              </>
            ))}
          </div>
        </div>
        <div
          className="flex fixed min-w-[370px] max-w-[600px] bottom-0 w-full justify-between bg-[#FFFFFF] rounded-tl-[5px] rounded-tr-[5px]"
          style={{
            padding: "10px 10px 15px",
            border: "1px solid rgba(145, 158, 171, .239)",
            boxShadow: "0 -4px 20px -1px rgba(40, 124, 234, .15)",
          }}
        >
          <div>
            <p>
              Tạm tính:
              <span className="text-[#D70018] font-bold">
                {toTalPrice.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
            </p>
            <span>Chưa gồm chiết khấu SMember</span>
          </div>
          <Link
            href={
              toTalPrice > 0 ? `${BASE_ROUTER.PAYMENT_INFORE}?tab=Info` : ""
            }
          >
            <button className="bg-[#C0C0C0] w-[110px] h-10 rounded-[5px] text-[#717171] btn-buy">
              Mua ngay {quannity > 0 ? `(${quannity})` : ""}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
