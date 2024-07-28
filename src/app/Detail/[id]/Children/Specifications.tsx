import { popUp } from "@/Common/PopUp";
import React, { useState } from "react";
import DetailSpecification from "./DetailSpecification";

interface Props {
  numberTechnical: [];
}

const Specifications = (props: Props) => {
  const { numberTechnical } = props;
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const handleShowDetail = () => {
    setShowDetail(!showDetail);
  };
  return (
    <div>
      <div
        className="max-w-[338px] px-4 py-3 rounded-[10px]"
        style={{
          boxShadow:
            "0 1px 2px 0 rgba(60, 64, 67, .1), 0 2px 6px 2px rgba(60, 64, 67, .15)",
        }}
      >
        <h5 className="text-[22px] text-[#444444] font-bold text-left mb-3">
          Thông số kỹ thuật
        </h5>
        <div
          className="rounded-[10px] max-h-[450px] overflow-hidden"
          style={{ border: "1px solid #e5e7eb" }}
        >
          {numberTechnical.map((item: any, index) => (
            <>
              <div
                className="grid grid-cols-2 w-full p-2 text-left"
                style={{ backgroundColor: index % 2 ? "" : "#f2f2f2" }}
              >
                <div>{item.technical}</div>
                <div>{item.describe}</div>
              </div>
            </>
          ))}
        </div>
        <button
          className="rounded-[10px] h-[35px] mt-[12px] w-full"
          onClick={handleShowDetail}
          style={{
            boxShadow:
              "0 1px 2px 0 rgba(60,64,67,.1),0 2px 6px 2px rgba(60,64,67,.15)",
          }}
        >
          xem cấu hình chi tiết
        </button>
      </div>
      {popUp.ModalCommon({
        className: "modal-common",
        title: "Thông số kỹ thuật",
        children: <DetailSpecification numberTechnical={numberTechnical} />,
        open: showDetail,
        width: 500,
        onCancel() {
          setShowDetail(false);
        },
      })}
    </div>
  );
};

export default Specifications;
