"use client";
import { SourceIcon } from "@/Components/Iconsvg";
import React, { useEffect, useState } from "react";
import CartItem, { PropCartItem } from "./Components/CartItem";
import { useStoreCartPriview } from "@/Lib/Store/StorecartPriview";
import Link from "next/link";
import { BASE_ROUTER } from "@/Components/Contant/apiUrl";

const Cart = () => {
  const toTalPrice = useStoreCartPriview((state) => state.totalPrice);
  const quannity = useStoreCartPriview((state) => state.lisProDuct.length);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (toTalPrice > 0) {
      document
        .querySelector(".btn-buy")
        ?.classList.add("bg-[#c41717]", "text-white");
    } else {
      document
        .querySelector(".btn-buy")
        ?.classList.remove("bg-[#c41717]", "text-white");
    }
    return () => {
      useStoreCartPriview;
    };
  }, [toTalPrice]);
  return (
    <>
      {loading && (
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
              {mockData.map((item, index) => (
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
            <Link href={toTalPrice > 0 ? BASE_ROUTER.PAYMENT_INFORE : ""}>
              <button className="bg-[#C0C0C0] w-[110px] h-10 rounded-[5px] text-[#717171] btn-buy">
                Mua ngay {quannity > 0 ? `(${quannity})` : ""}
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
const mockData: PropCartItem[] = [
  {
    id: "0",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:350:0/q:80/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-z-lip5_1__2.png",
    titleProduct: "iPhone 15 128GB | Chính hãng VN/A-Xanh lá",
    price: 28990000,
    salePrice: 9090000,
    quantity: 2,
  },
  {
    id: "1",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:350:0/q:80/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-a54_1__1.jpg",
    titleProduct: "Samsung Galaxy S24 Ultra 12GB 256GB-Xám",
    price: 16990000,
    salePrice: 9090000,
    quantity: 3,
  },
  {
    id: "2",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:350:0/q:80/plain/https://cellphones.com.vn/media/catalog/product/g/a/galaxy-s24-ultra-xam_1_3.png",
    titleProduct: "Samsung Galaxy Z Flip5 256GB-Xanh lá",
    price: 9090000,
    salePrice: 9090000,
    quantity: 5,
  },
  {
    id: "3",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:350:0/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-128gb-xanh-la.png",
    titleProduct: "Samsung Galaxy A54 5G-Xanh",
    price: 19290000,
    salePrice: 9090000,
    quantity: 1,
  },
];
