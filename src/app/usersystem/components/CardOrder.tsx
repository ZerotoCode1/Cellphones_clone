import React from "react";
import "./style.css";
import { conVertPrice } from "@/Components/Contant/convertdata";
import dayjs from "dayjs";
import servicesInstance from "@/Lib/Request/Services";
import { toast } from "react-toastify";

const CardOrder = ({ item, setloading }: any) => {
  const data = item?.item?.[0];
  const getStatusClass = () => {
    switch (item?.status) {
      case 3:
        return "in-progress";
      case 4:
        return "delivering";
      case 5:
        return "cancelled";
      default:
        return ""; // Trả về lớp mặc định nếu không khớp với bất kỳ trạng thái nào
    }
  };
  const getNameStatus = () => {
    switch (item?.status) {
      case 3:
        return "Đang vận chuyển";
      case 4:
        return "Đã giao hàng";
      case 5:
        return "Đã huỷ";
      default:
        return ""; // Trả về lớp mặc định nếu không khớp với bất kỳ trạng thái nào
    }
  };
  const cancelOrder = async (value: number) => {
    try {
      const res = await servicesInstance.put("updatePayment", {
        status: value,
        _id: item?._id,
      });
      const cancel = await servicesInstance.post("refundpayment", {
        orderID: item?.orderId,
        priceRefund: item?.amount,
      });
      if (cancel?.data) {
        console.log(cancel?.data, "status");
        toast.success("Hoàn tiền thành công");
      }
      if (res?.data) {
        setloading((pre: any) => !pre);
        toast.success(
          value == 5
            ? "Huỷ đơn hàng thành công"
            : value === 4
            ? "Nhận hàng thành công"
            : ""
        );
      }
    } catch (error) {}
  };
  return (
    <div>
      <div className="block-order-item">
        <div className="order-item is-flex">
          <div className="order-item__img">
            <img
              src={data?.img}
              alt="cps-product"
              loading="lazy"
              width={110}
              height={110}
            />
          </div>
          <div className="order-item__info is-flex is-flex-direction-column">
            <div className="info__title button__order-detail">
              <span>
                {data?.titleProduct} {`( ${data?.nameVersion ?? ""})`} -{" "}
                {data?.keyColor}
              </span>
              <p>{dayjs(item?.createdAt).format("DD/MM/YYYY")}</p>
            </div>
            <div className="is-flex is-align-items-center"></div>
            {item?.item?.length > 1 && (
              <div className="info__sub-title mr-2">
                và {item?.item?.length - 1} sản phẩm khác
              </div>
            )}
            {item?.status !== 1 && item?.status !== 2 ? (
              <div className="flex">
                <div>
                  <div
                    className={`order-status ${getStatusClass()} min-w-[120px] text-center`}
                  >
                    {getNameStatus()}
                  </div>
                </div>
                {item?.status === 3 && (
                  <div className="flex">
                    <button
                      className="btn-cancel mt-[5px] min-w-[170px]"
                      onClick={() => cancelOrder(4)}
                    >
                      Xác nhận lấy hàng
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex">
                <button
                  className="btn-cancel mt-[5px]"
                  onClick={() => cancelOrder(5)}
                >
                  Huỷ đơn
                </button>
              </div>
            )}

            <div className="info__group is-flex is-justify-content-space-between">
              <div className="price">{conVertPrice(item?.amount)} </div>
              <div className="group-btn-info is-flex">
                <div className="btn-info">Xem chi tiết</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOrder;
