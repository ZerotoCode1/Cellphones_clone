"use client";
import { CommonForm } from "@/Common/Form";
import { Field, FormikValues, useFormikContext } from "formik";
import React, { use, useEffect } from "react";
import { SourceIcon } from "@/Components/Iconsvg";
import { useStoreCartPriview } from "@/Lib/Store/StorecartPriview";
import { conVertPrice } from "@/Components/Contant/convertdata";
const Payment = () => {
  const cartList = useStoreCartPriview((state) => state.lisProDuct);
  const toTalPrice = useStoreCartPriview((state) => state.totalPrice);

  const { values } = useFormikContext<FormikValues>();
  useEffect(() => {
    if (values?.saleCode) {
      document
        .querySelector(".btn-buy")
        ?.classList.add("bg-[#c41717]", "text-white");
    } else {
      document
        .querySelector(".btn-buy")
        ?.classList.remove("bg-[#c41717]", "text-white");
    }
  }, [values?.saleCode]);
  return (
    <div className="mb-10">
      <div className="component-box min-h-[274px] p-5 flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex-grow">
            <Field
              component={CommonForm.InpurFiled}
              name="saleCode"
              placeholder="Ghi chú khác nếu có"
            />
          </div>
          <button className="bg-[#C0C0C0] w-[110px] h-10 rounded-[5px] text-[#717171] btn-buy">
            Áp dụng
          </button>
        </div>
        <div
          className="flex justify-between rounded-[5px]"
          style={{
            border: "1px solid #1877f2",
            padding: "6px 10px 4px 12px",
          }}
        >
          <span className="text-[#1877f2]">
            Hoặc chọn từ <strong>1</strong> mã giảm giá có sẵn
          </span>
          <SourceIcon.DownSelect fill={"#1877f2"} />
        </div>
        <div className="flex justify-between">
          <span>Số lượng sản phẩm</span>
          <span>{cartList.length}</span>
        </div>
        <div className="flex justify-between">
          <span>Tiền hàng/ tạm tính</span>
          <span>{conVertPrice(toTalPrice)}</span>
        </div>
        <div className="flex justify-between">
          <span>Phí vận chuyển </span>
          <span>Miễn phí</span>
        </div>
        <div style={{ borderBottom: "1px solid #cec6c6" }}></div>
        <div className="flex justify-between">
          <span className="font-bold">
            Tổng tiền{" "}
            <span className="font-normal text-[#7c8691]"> (đã gồm VAT)</span>
          </span>
          <span className="font-bold">{conVertPrice(toTalPrice)}</span>
        </div>
      </div>
      <div>
        <p>Thông tin thanh toán</p>
        <div className="component-box h-[86px] p-5 flex gap-2 cursor-pointer scale-box">
          <SourceIcon.PayCard />
          <div className="flex justify-between w-full items-center">
            <div className="flex-grow">
              <p className="text-[#d70018] font-medium">
                Chọn phương thức thanh toán
              </p>
              <p className="text-[12px] text-[#637381]">
                giảm thêm tới{conVertPrice(200000)}
              </p>
            </div>
            <SourceIcon.DownSelect fill={"#d70018"} />
          </div>
        </div>
      </div>
      <div>
        <p>Thông tin nhận hàng</p>
        <div className="component-box p-5 flex flex-col gap-y-4">
          <div className="flex justify-between">
            <span>Khách hàng</span>
            <span className="font-medium">Quang Phan</span>
          </div>
          <div className="flex justify-between">
            <span>Số điện thoại</span>
            <span className="font-medium">0868896711</span>
          </div>
          <div className="flex justify-between">
            <span>Email</span>
            <span className="font-medium">quang11102002f@gmail.com</span>
          </div>
          <div className="flex justify-between">
            <span>Nhận hàng tại </span>
            <span className="font-medium">Phú Thọ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
