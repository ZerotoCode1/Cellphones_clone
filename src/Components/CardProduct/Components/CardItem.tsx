"use client";
import React from "react";
import Image from "next/image";
import { Rate } from "antd";
import SaleImg from "../../../../public/Card/sale.png";
import { SourceIcon } from "@/Components/Iconsvg";
import { ResponseProduct } from "@/services/Products/Getproduct";
import { useRouter } from "next/navigation";
interface CardItemProps {
  productItem: ResponseProduct;
}
const CardItem = (prop: CardItemProps) => {
  const { productItem } = prop;
  const router = useRouter();
  const handleDetail = () => {
    router.push(`/Detail/${productItem._id}`);
  };
  const image = productItem?.image[0]?.split(",")[0];
  return (
    <>
      <div
        style={{
          boxShadow:
            "0 1px 2px 0 rgba(60,64,67,.1),0 2px 6px 2px rgba(60,64,67,.15)",
        }}
        className="bg-[#FFFFFF] h-[435px] rounded-[15px] p-[10px] relative min-w-[248px]"
      >
        <div className="absolute top-[-1px] left-[-5px]">
          <Image height={31} width={80} src={SaleImg} alt="" />
          <span className="absolute top-0 text-center w-full text-[#FFFFFF] font-bold text-[11px] leading-[25px]">
            Giảm 15%
          </span>
        </div>
        <div className="absolute top-[-1px] right-0 w-[63px] h-[21px] rounded-[5px] px-[5px] py-[2px] border-solid border-[#0c53b7] border-[1px]">
          <p className="text-[9px] font-semibold text-[#0c53b7] ">Trả góp 0%</p>
        </div>
        <div onClick={handleDetail} className="cursor-pointer">
          <div className="text-center min-h-[170px] mt-[10px]">
            <Image
              height={161}
              width={161}
              className="m-auto"
              src={image}
              alt=""
              style={{ minHeight: "161px" }}
            />
          </div>
          <div className="h-65px min-h-[65px] max-h-[65px]">
            <p className="text-[14px] font-semibold ">
              {productItem.productName}
            </p>
          </div>
          <p>
            <span className="text-[16px] text-[#d70018] font-bold">
              {productItem.price}
            </span>
            <span className="text-[14px] text-[#707070] font-semibold line-through ml-2">
              18900000
            </span>
          </p>
          <div className="h-[48px] bg-[#f3f4f6] w-full rounded-[5px] overflow-hidden p-[5px]">
            <p className="text-[12px]">
              Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6
              tháng
            </p>
          </div>
        </div>
        <div className="flex justify-between absolute bottom-[10px]">
          <Rate
            className="flex "
            allowHalf
            defaultValue={4.5}
            style={{ color: "#f59e0b", fontSize: "18px", marginRight: "4px" }}
            disabled
          />
          <p className="flex">
            <span className="mr-2">Yêu thích</span>
            <SourceIcon.Heart />
          </p>
        </div>
      </div>
    </>
  );
};

export default CardItem;
