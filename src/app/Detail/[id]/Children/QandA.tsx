import { SourceIcon } from "@/Components/Iconsvg";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import Image from "next/image";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const QandA = () => {
  return (
    <div className="rounded-[10px]">
      <div className="flex gap-4">
        <div className="flex-1  relative">
          <TextArea
            rows={10}
            placeholder="Xin mời để lại câu hỏi của bạn"
            maxLength={6}
            className="pl-[100px] p-4 min-h-[200px] max-h-[350px]"
          />
          <Image
            className="absolute top-12 left-0"
            src="https://account.cellphones.com.vn/_nuxt/img/Shipper_CPS3.77d4065.png"
            alt="account"
            height={100}
            width={100}
          />
        </div>
        <button className="gap-2 text-[#fff] w-[70px] h-10 bg-[#d70018] rounded-[8px] flex items-center justify-center">
          <SourceIcon.SendQuestion />
          Gửi
        </button>
      </div>
      <div className="mt-2 pt-4" style={{ borderTop: "1px solid #f5f5f5" }}>
        <div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 justify-center items-center">
              <Avatar
                size={50}
                icon={<UserOutlined />}
                src={
                  "https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/452929873_505312828679907_7938665184643238205_n.jpg?stp=dst-jpg_s600x600&_nc_cat=1&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGcEtQtLPl_US4gqMPvmffOelIFB9JWuE56UgUH0la4Tjzy9A69WpH0NDq2fXOmh_4FRY-cZvE5M1V6e7gQrR_L&_nc_ohc=k0gVTyqqmNsQ7kNvgFfO_T1&_nc_ht=scontent.fhan19-1.fna&oh=00_AYBbmp5JcNEdzf6gcMdgD8Hw8S2FmVl3VMJTNDTR992xJg&oe=66ABCE96"
                }
              />
              <p className="font-semibold">Phan Bá Quang</p>
            </div>
            <p className="flex gap-1 items-center justify-center">
              <Clock /> 11/10/2002
            </p>
          </div>
          <div
            className="px-5 py-3 rounded-[8px] ml-[50px]"
            style={{
              boxShadow:
                "0 1px 2px 0 rgba(60,64,67,.1),0 2px 6px 2px rgba(60,64,67,.15)",
            }}
          >
            <p>
              Cho mình hỏi mình muốn mua ip13 128gb khu vực vĩnh phúc, mình đủ
              22t, muốn mua trả góp thì sẽ trả trước bao nhiêu, mỗi tháng góp
              bao nhiêu và trả góp thì mình có dc áp dụng thêm ưu đãi giảm giá
              nào nữa ko b
            </p>
            <p className="text-right flex justify-end items-center gap-2 text-[#d70018]">
              <SendQuestion /> Trả lời
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QandA;
const Clock = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
    >
      <path
        id="clock"
        d="M7.72,8.78,5.25,6.31V3h1.5v2.69L8.78,7.72ZM6,0a6,6,0,1,0,6,6A6,6,0,0,0,6,0ZM6,10.5A4.5,4.5,0,1,1,10.5,6,4.5,4.5,0,0,1,6,10.5Z"
        fill="#707070"
      ></path>
    </svg>
  );
};

const SendQuestion = (props: any) => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="12"
      viewBox="0 0 12 10.8"
    >
      <path
        id="chat"
        d="M3.48,8.32V4.6H1.2A1.2,1.2,0,0,0,0,5.8V9.4a1.2,1.2,0,0,0,1.2,1.2h.6v1.8l1.8-1.8h3A1.2,1.2,0,0,0,7.8,9.4V8.308a.574.574,0,0,1-.12.013H3.48ZM10.8,1.6H5.4A1.2,1.2,0,0,0,4.2,2.8V7.6H8.4l1.8,1.8V7.6h.6A1.2,1.2,0,0,0,12,6.4V2.8a1.2,1.2,0,0,0-1.2-1.2Z"
        transform="translate(0 -1.6)"
        fill="#D70018"
      ></path>
    </svg>
  </>
);
