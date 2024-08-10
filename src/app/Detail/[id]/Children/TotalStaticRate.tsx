import { Rate } from "antd";
import React, { useEffect, useState } from "react";
import SaticsRate from "./SaticsRate";
import ProductServices from "@/services/Products/Getproduct";

interface Props {
  productId: string;
}
interface Rateprops {
  ratingCounts: {
    [key: string]: number;
  };
  totalRatings: number;
  averageRating: number;
}
const TotalStaticRate = (props: Props) => {
  const { productId } = props;
  const [rattings, setRattings] = useState<Rateprops | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const res = await ProductServices.getRateStaticPeoduct({
        productId: productId,
      });
      if (res && res.data) {
        setRattings(res.data);
      }
    };
    fetchData();
  }, [productId]);
  return (
    <div
      className="grid grid-cols-10 py-5 min-h-[180px]"
      style={{ borderBottom: "1px solid #ccc" }}
    >
      <div
        className="col-span-3 justify-center items-center flex flex-col gap-y-2"
        style={{ borderRight: "1px solid #ccc" }}
      >
        <p className="text-left">{rattings?.averageRating}</p>
        <Rate
          disabled
          value={Number(rattings?.averageRating)}
          style={{ fontSize: "16px" }}
        />
        <p>{rattings?.totalRatings} đánh giá</p>
      </div>
      <div className="col-span-7 px-12 gap-y-2 flex flex-col">
        <SaticsRate rattings={rattings ?? defaultRate} />
      </div>
    </div>
  );
};

export default TotalStaticRate;
const defaultRate = {
  ratingCounts: {
    "5": 0,
    "4": 0,
    "3": 0,
    "2": 0,
    "1": 0,
  },
  totalRatings: 0,
};
