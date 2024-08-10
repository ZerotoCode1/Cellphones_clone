import { SourceIcon } from "@/Components/Iconsvg";
import ProductServices from "@/services/Products/Getproduct";
import { Progress } from "antd";
import { useEffect, useState } from "react";
interface Props {
  rattings: Rate;
}
interface Rate {
  ratingCounts: {
    [key: string]: number;
  };
  totalRatings: number;
}

const SaticsRate = (props: Props) => {
  const { rattings } = props;
  return (
    <div>
      {["5", "4", "3", "2", "1"].map((item, index) => {
        if (rattings) {
          const ratingCount = rattings.ratingCounts[item];
          const totalRatings = rattings.totalRatings;

          return (
            <div className="flex items-center space-x-2" key={index}>
              <p className="flex gap-1">
                {item} <SourceIcon.Star />
              </p>
              <div className="flex-1">
                <Progress
                  percent={(ratingCount / totalRatings) * 100}
                  showInfo={false}
                  strokeColor={"#D70018"}
                />
              </div>
              <p>{ratingCount} đánh giá</p>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default SaticsRate;
