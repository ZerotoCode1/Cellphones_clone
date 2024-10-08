import { Avatar, Rate } from "antd";
import React, { use, useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import ProductServices, {
  RequestRateProduct,
} from "@/services/Products/Getproduct";
import AuthServices from "@/services/Auth/AuthService";
import moment from "moment";
import Image from "next/image";
interface Props {
  productId: string;
  numberRate: any;
}
const Ratting = (props: Props) => {
  const { productId, numberRate } = props;
  const [rate, setRate] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      const body = {
        productId: productId,
        numberRate: numberRate?.star ?? "",
        image: numberRate?.hasImage === false ? "" : true,
      };
      try {
        const res = await ProductServices.getRateProduct(body);
        if (res && res?.data) {
          setRate(res?.data);
        }
      } catch (err) {}
    };
    fetchData();
  }, [productId, numberRate]);

  return (
    <div className="">
      {rate.map((item: any, index: number) => (
        <div key={index}>
          <User userId={item?.user} createdAt={item?.createdAt} />
          <div className="ml-[65px]">
            <div className="flex gap-4 mb-2">
              <Rate
                disabled
                value={item?.rating}
                style={{ fontSize: "14px" }}
              />
            </div>
            <p className="text-left mb-3">{item?.comment}</p>
            <img src={item?.image} width={50} height={50} alt="ẻwrew" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ratting;
const User = ({
  userId,
  createdAt,
}: {
  userId: { image: string; name: string };
  createdAt: string;
}) => {
  return (
    <div className="flex items-center gap-4">
      <Avatar size={50} icon={<UserOutlined />} src={userId?.image} />
      <div className="flex gap-4">
        <p className="min-w-[125px] text-left">{userId?.name}</p>
        <p>{moment(createdAt).format("DD-MM-YYYY")}</p>
      </div>
    </div>
  );
};
