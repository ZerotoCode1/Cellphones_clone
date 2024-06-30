"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SourceIcon } from "@/Components/Iconsvg";
import { useStoreCartPriview } from "@/Lib/Store/StorecartPriview";
export interface PropCartItem {
  id: string;
  img: string;
  titleProduct: string;
  price: number;
  salePrice: number;
  quantity: number;
  noneCheck?: boolean;
}
const CartItem = (prop: PropCartItem) => {
  const { img, titleProduct, price, salePrice, quantity, id, noneCheck } = prop;
  const addCart = useStoreCartPriview((state) => state.setAddCartPriview);
  const removeCart = useStoreCartPriview((state) => state.setRemoveCartPriview);
  const caculatePrice = useStoreCartPriview((state) => state.CaculateTotal);
  const handleChecked = (e: any) => {
    if (e.target.checked) {
      addCart({
        id: id,
        img: img,
        titleProduct: titleProduct,
        price: price,
        salePrice: salePrice,
        quantity: quantity,
      });
    } else {
      removeCart(id);
    }
    caculatePrice();
  };
  return (
    <div
      className="bg-[#FFFFFF] rounded-[8px] h-full p-[10px] w-full mb-5"
      style={{ border: "1px solid rgba(145, 158, 171, .239)" }}
    >
      <div className="flex gap-x-10">
        <div className="gap-x-2 flex">
          {!noneCheck && (
            <label className="container-input">
              <input type="checkbox" onChange={handleChecked} />
              <span
                className="checkmark"
                style={{ height: "18px", width: "18px" }}
              ></span>
            </label>
          )}
          <Image width={100} height={100} src={img} alt="" />
        </div>
        <div className="w-full">
          <div className="flex justify-between w-full pr-[35px] mb-2">
            <Link href={"fsfd"} className="hover:underline text-[16px]">
              {titleProduct}
            </Link>
            <span className="cursor-pointer">
              <SourceIcon.Delete />
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span>
              <span className="color-default mr-2">
                {price.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
              <span className="text-[#707070] line-through text-[14px]">
                {salePrice.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
            </span>
            <div className="flex justify-center items-center">
              <span className="flex bg-[#f3f3f3] w-[30px] h-[30px] rounded-[4px] items-center justify-center cursor-pointer">
                -
              </span>
              <span className="w-[30px] h-[30px] flex justify-center items-center">
                {quantity}
              </span>
              <span className="flex bg-[#f3f3f3] w-[30px] h-[30px] justify-center items-center rounded-[4px] cursor-pointer">
                +
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex gap-x-4">
          <SourceIcon.Gift />
          <div>
            <p>Chương tình khuyến mãi</p>
            <ul style={{ listStyleType: "initial", marginLeft: "20px" }}>
              <li>Liên hệ hotline 1800.2097 để được GIÁ ĐẶC BIỆT</li>
            </ul>
          </div>
        </div>
        <div
          className="flex justify-between pt-5 mt-[15px]"
          style={{ borderTop: "1px solid rgba(145, 158, 171, .239)" }}
        >
          <div className="flex gap-x-4">
            <SourceIcon.Protect />
            <span>Bảo vệ toàn diện với Bảo hành mở rộng</span>
          </div>
          <div className="flex text-[#D70017] items-center gap-x-4 cursor-pointer">
            <p className="">chọn gói</p>
            <SourceIcon.MoveRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
