"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SourceIcon } from "@/Components/Iconsvg";
import { useStoreCartPriview } from "@/Lib/Store/StorecartPriview";
import { useStoreCart } from "@/Lib/Store/CartStore/CartStore";
import ProductServices, {
  ResponseProductById,
} from "@/services/Products/Getproduct";
export interface PropCartItem {
  id: string;
  img: string;
  titleProduct: string;
  price: number;
  salePrice: number;
  quantity: number;
  noneCheck?: boolean;
  id_version: string;
  keyColor: string;
  nameVersion?: string;
  colorVersion?: string;
}
const CartItem = (prop: PropCartItem) => {
  const {
    img,
    titleProduct,
    price,
    salePrice,
    quantity,
    id,
    keyColor,
    id_version,
  } = prop;
  const pathName =
    window.location.pathname === "/cart/payment-info" ? false : true;
  const addCart = useStoreCartPriview((state) => state.setAddCartPriview);
  const removeCart = useStoreCartPriview((state) => state.setRemoveCartPriview);
  const caculatePrice = useStoreCartPriview((state) => state.CaculateTotal);
  const increaseCartPrivew = useStoreCartPriview(
    (state) => state.increaseCartPrivew
  );
  const decreasePriveiew = useStoreCartPriview(
    (state) => state.decreasePriveiew
  );

  const deleteCart = useStoreCart((state) => state.deleteCart);
  const increase = useStoreCart((state) => state.increase);
  const decrease = useStoreCart((state) => state.decrease);
  const listProduct = useStoreCart((state) => state.lisProDuct);
  const [data, setData] = useState<ResponseProductById>();
  const [maxQuanity, setMaxQuanity] = useState();

  const handleChecked = (e: any) => {
    const productAdd = listProduct.find(
      (item) =>
        item.id === id &&
        item.keyColor === keyColor &&
        item.id_version === id_version
    );
    if (productAdd) {
      productAdd.img =
        data?.versionColor.find((item) => {
          if (item?.name === keyColor) {
            return item.image;
          }
        })?.image ?? "";
      productAdd.nameVersion = data?.version.find(
        (item) => item._id === id_version
      )?.nameVersion;
      if (e.target.checked) {
        addCart(productAdd);
      } else {
        removeCart(id, keyColor, id_version);
      }
    }
    caculatePrice();
  };
  const hanDleteCart = () => {
    deleteCart(id, keyColor, id_version);
    caculatePrice();
  };
  const handleIncrease = () => {
    if (maxQuanity) {
      increase(id, keyColor, id_version, maxQuanity);
      increaseCartPrivew(id, keyColor, id_version, maxQuanity);
    }
    caculatePrice();
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      decrease(id, keyColor, id_version);
      decreasePriveiew(id, keyColor, id_version);
    }
    caculatePrice();
  };
  const fetchData = async () => {
    try {
      const res = await ProductServices.getProDuctById({
        _id: id,
      });
      if (res?.data) {
        setData(res.data);
        setMaxQuanity(
          res?.data?.version
            .find((v) => v._id === id_version)
            ?.quannity.find((v) => v[keyColor])?.[keyColor]
        );
      }
    } catch (error) {}
  };
  useEffect(() => {
    if (id && id_version && keyColor) {
      fetchData();
    }
  }, [id, id_version, keyColor]);
  console.log(maxQuanity, "sdfhsdjkhfjsd");
  return (
    <div
      className="bg-[#FFFFFF] rounded-[8px] h-full p-[10px] w-full mb-5"
      style={{ border: "1px solid rgba(145, 158, 171, .239)" }}
    >
      <div className="flex gap-x-10">
        <div className="gap-x-2 flex gap-[35px]">
          {/* {!noneCheck && (
            <label className="container-input-custom">
              <input type="checkbox" onChange={handleChecked} />
              <span
                className="checkmark-custom custom_checkbox relative"
                style={{ height: "18px", width: "18px" }}
              ></span>
            </label>
          
          )} */}
          {pathName && (
            <input
              type="checkbox"
              className="custom-control-input"
              value="true"
              id="__BVID__32"
              onChange={handleChecked}
            ></input>
          )}
          <label className="custom-control-label"></label>
          <img
            width={100}
            height={100}
            src={
              data?.versionColor.find((item) => {
                if (item?.name === keyColor) {
                  return item.image;
                }
              })?.image
            }
            alt="anh3"
          />
        </div>
        <div className="w-full">
          <div className="flex justify-between w-full pr-[35px] mb-2">
            <Link href={"fsfd"} className="hover:underline text-[16px]">
              {` 
                ${titleProduct}
                ${
                  data?.version.find((item) => item._id === id_version)
                    ?.nameVersion
                } - ${keyColor}
                  `}
            </Link>
            {pathName && (
              <span className="cursor-pointer" onClick={hanDleteCart}>
                <SourceIcon.Delete />
              </span>
            )}
          </div>
          <div className="flex justify-between items-center">
            <span>
              <span className="color-default mr-2">
                {(price * quantity).toLocaleString("vi-VN", {
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
              {pathName && (
                <span
                  className="flex bg-[#f3f3f3] w-[30px] h-[30px] rounded-[4px] items-center justify-center cursor-pointer"
                  onClick={handleDecrease}
                >
                  -
                </span>
              )}
              <span className="w-[30px] h-[30px] flex justify-center items-center flex-row">
                {quantity}
              </span>
              {pathName && (
                <span
                  className="flex bg-[#f3f3f3] w-[30px] h-[30px] justify-center items-center rounded-[4px] cursor-pointer"
                  onClick={handleIncrease}
                >
                  +
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex gap-x-4">
          <SourceIcon.Gift />
          <div>
            <p className="text-left">Chương tình khuyến mãi</p>
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
