"use client";
import { SourceIcon } from "@/Components/Iconsvg";
import Image from "next/image";
import path from "path";
import { useState } from "react";
import { toast } from "react-toastify";

interface Props {
  onClose: any;
}
const ChoosePayment = (props: Props) => {
  const [choosePayment, setChoosePayment] = useState<number>();
  const handleClick = (item: any) => {
    setChoosePayment(item?.id);
  };
  const handleSubmit = () => {
    mocdata.map((item) => {
      if (choosePayment === item.id) {
        localStorage.setItem("payment", JSON.stringify(item));
      }
    });
    props.onClose(false);
    toast.success("Chọn phương thức thanh toán thành công", {
      position: "top-center",
    });
  };
  return (
    <div className="relative ">
      <div
        className="flex flex-col gap-4 p-5 overflow-y-auto overflow-hidden "
        style={{ maxHeight: "calc(100vh - 345px)" }}
      >
        {mocdata.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item)}
            className="bg-[#FFFFFF] rounded-[10px] px-[15px] py-[10px] flex gap-[15px] cursor-pointer justify-center items-center hover:bg-[#ffdada]"
            style={{
              border: `1px solid  ${
                choosePayment === item?.id ? "red" : "rgba(145, 158, 171, .239)"
              }   `,
              transition: ".1s ease",
              minHeight: "72px",
            }}
          >
            <Image src={item?.image} height={50} width={50} alt="payment" />
            <div className="flex justify-between flex-grow">
              <p
                className="font-semibold"
                style={{ color: choosePayment === item.id ? "#d70018" : "" }}
              >
                {item?.name}
              </p>
              {choosePayment === item.id ? <SourceIcon.IconCheck /> : <></>}
            </div>
          </div>
        ))}
      </div>
      <div
        className="bg-[#FFFFFF] h-20 p-5 w-full z-10"
        style={{
          boxShadow: "0 -4px 10px -1px rgba(40,124,234,.15)",
          borderBottomLeftRadius: "15px",
          borderBottomRightRadius: "15px",
        }}
      >
        <button
          className="w-full h-full bg-[#d70018] text-center text-[#FFFFFF] font-medium rounded-[5px] "
          onClick={handleSubmit}
        >
          Xác nhận
        </button>
      </div>
    </div>
  );
};

export default ChoosePayment;
const mocdata = [
  {
    id: 1,
    name: "Thanh toán tại cửa hàng",
    image:
      "https://cdn2.cellphones.com.vn/x400,webp,q100/media/payment-logo/COS.png",
    path: "storePayment",
  },
  {
    id: 2,
    name: "VnPay",
    image: "https://cdn2.cellphones.com.vn/x/media/logo/gw2/vnpay.png",
    path: "vnpaypayment",
  },
  {
    id: 3,
    name: "Thanh toán qua ví điện Momo",
    image: "https://cdn2.cellphones.com.vn/x/media/logo/gw2/momo_vi.png",
    path: "momopayment",
  },
  {
    id: 4,
    name: "Thanh toán qua ZaloPay",
    image: "https://cdn2.cellphones.com.vn/x/media/logo/gw2/zalopay.png",
    path: "zalopayment",
  },
  {
    id: 5,
    name: "ShopeePay",
    image: "https://cdn2.cellphones.com.vn/x/media/logo/gw2/shopeepay.png",
    path: "momopayment",
  },
  {
    id: 6,
    name: "Chuyển khoản qua mã ngân hàng",
    image:
      "https://cdn2.cellphones.com.vn/x400,webp,q100/media/wysiwyg/QRCode.png",
    path: "momopayment",
  },
];
