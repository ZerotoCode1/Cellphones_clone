"use client";
import { popUp } from "@/Common/PopUp";
import { conVertPrice } from "@/Components/Contant/convertdata";
import { SourceIcon } from "@/Components/Iconsvg";
import ChoosePayment from "@/Components/Modal/ChoosePayment";
import { useStoreCartPriview } from "@/Lib/Store/StorecartPriview";
import Image from "next/image";
import { useState } from "react";
import { formAntd } from "@/Common/FormAntd";

const Payment = () => {
  const cartList = useStoreCartPriview((state) => state.lisProDuct);
  const toTalPrice = useStoreCartPriview((state) => state.totalPrice);
  const [choosePayment, setChoosePayment] = useState(false);
  const infoPayment = JSON?.parse(localStorage.getItem("infoPayment") ?? "");
  // useEffect(() => {
  //   if (values?.saleCode) {
  //     document
  //       .querySelector(".btn-buy")
  //       ?.classList.add("bg-[#c41717]", "text-white");
  //   } else {
  //     document
  //       .querySelector(".btn-buy")
  //       ?.classList.remove("bg-[#c41717]", "text-white");
  //   }
  //   return () => {};
  // }, [values?.saleCode]);
  const handleChoosepayment = () => {
    setChoosePayment(true);
  };
  const dataDefalue = JSON?.parse(localStorage.getItem("user") ?? "");

  return (
    <div className="mb-10">
      <div className="component-box min-h-[274px] p-5 flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex-grow">
            <formAntd.InputAntd
              label="Mã giảm giá"
              name="saleCode"
              plaholder="Nhập mã giảm giá"
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
      <div className="mt-[30px]">
        <p className="text-[#212b36] text-[16px] font-medium mb-[10px] uppercase text-left">
          Thông tin thanh toán
        </p>
        <div
          className="component-box h-[86px] p-5 flex gap-2 cursor-pointer scale-box"
          onClick={handleChoosepayment}
        >
          {renderContent()}
        </div>
      </div>
      <div className="mt-[30px]">
        <p className="text-[#212b36] text-[16px] font-medium mb-[10px] uppercase text-left">
          Thông tin nhận hàng
        </p>
        <div className="component-box p-5 flex flex-col gap-y-4">
          <div className="flex justify-between">
            <span>Khách hàng</span>
            <span className="font-medium">{infoPayment?.name}</span>
          </div>
          <div className="flex justify-between">
            <span>Số điện thoại</span>
            <span className="font-medium">
              {infoPayment?.phone ?? dataDefalue?.phone}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Email</span>
            <span className="font-medium">{infoPayment?.mail}</span>
          </div>
          <div className="flex justify-between">
            <span>Nhận hàng tại </span>
            <span className="font-medium">
              {infoPayment?.address || infoPayment?.addressStore}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Người nhận </span>
            <span className="font-medium">{`${
              infoPayment?.recipientName ?? infoPayment?.name
            } ${infoPayment?.phone ?? dataDefalue?.phone}`}</span>
          </div>
        </div>
      </div>
      {popUp.ModalCommon({
        className: "modal-common",
        title: "Chọn phương thức thanh toán",
        children: <ChoosePayment onClose={setChoosePayment} />,
        open: choosePayment,
        width: 600,
        onCancel() {
          setChoosePayment(false);
        },
      })}
    </div>
  );
};

export default Payment;
const renderContent = () => {
  if (localStorage.getItem("payment")) {
    const content = JSON.parse(localStorage.getItem("payment") ?? "");
    if (content) {
      return (
        <>
          <Image
            src={content?.image}
            height={50}
            width={50}
            alt="payment"
            style={{ objectFit: "contain" }}
          />
          <div className="flex justify-between w-full items-center">
            <div className="flex-grow">
              <p className="text-[#212b36] font-medium text-left text-[16px]">
                {content?.name}
              </p>
            </div>
            <div className="flex gap-1">
              <p className="text-[#d70018]">thay đổi</p>
              <SourceIcon.DownSelect fill={"#d70018"} />
            </div>
          </div>
        </>
      );
    }
  } else {
    return (
      <>
        <SourceIcon.PayCard />
        <div className="flex justify-between w-full items-center">
          <div className="flex-grow">
            <p className="text-[#d70018] font-medium text-left">
              Chọn phương thức thanh toán
            </p>
            <p className="text-[12px] text-[#637381]">
              giảm thêm tới{conVertPrice(200000)}
            </p>
          </div>
          <SourceIcon.DownSelect fill={"#d70018"} />
        </div>
      </>
    );
  }
};
const MyInput = ({
  field,
  form,
  ...props
}: {
  field: any;
  form: any;
  [key: string]: any;
}) => {
  return <input {...field} {...props} />;
};
