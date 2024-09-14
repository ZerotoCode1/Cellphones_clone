"use client";
import servicesInstance from "@/Lib/Request/Services";
import { useEffect, useState } from "react";
import CardOrder from "./components/CardOrder";
import "./style.css";

const UserSystem = () => {
  const [loading, setloading] = useState(false);
  const [dataPayment, setdataPayment] = useState<any>();
  const [activeOption, setActiveOption] = useState<number>(0);
  const [filterData, setFilterData] = useState<any>();
  const fetchData = async () => {
    const user = JSON?.parse(localStorage?.getItem("user") ?? "");
    try {
      const res = await servicesInstance.get(
        `getDataPayment?limit=1000000&userId=${user?.userId}`
      );
      if (res?.data?.data) {
        setdataPayment(res.data.data);
      } else {
        setdataPayment([]);
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (dataPayment?.length > 0 && activeOption !== 0) {
      const res = dataPayment.filter(
        (data: any) => data?.status == activeOption
      );
      setFilterData(res);
    } else {
      setFilterData(dataPayment);
    }
  }, [activeOption, loading]);
  return (
    <div className="cps-container">
      <div className="block-homepage-menu">
        <div className="block-homepage-menu__content is-flex is-justify-content-space-around">
          <div className="content__item is-flex is-flex-direction-column is-align-items-center">
            <p className="item__content title">{dataPayment?.length}</p>
            <p className="item__content text">đơn hàng</p>
          </div>
          <div className="content__item is-flex is-flex-direction-column is-align-items-center">
            <p className="item__content title">0đ</p>
            <p className="item__content text">Tổng tiền tích luỹ</p>
          </div>
        </div>
      </div>
      <div className="thumbs-wrapper is-flex">
        {chooseOptions.map((option, index) => (
          <div
            key={option}
            className={`thumb-item ${
              index === activeOption ? "swiper-slide-thumb-active" : ""
            }`}
            onClick={() => setActiveOption(index)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="max-h-[61vh] overflow-y-auto">
        {(filterData ?? dataPayment)?.map((item: any) => (
          <div key={item?._id}>
            <CardOrder item={item} setloading={setloading} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserSystem;
const chooseOptions = [
  "Tất cả",
  "Chờ xác nhận",
  "Đã xác nhận",
  "Đang vận chuyển",
  "Đã giao hàng",
  "Đã huỷ",
];
