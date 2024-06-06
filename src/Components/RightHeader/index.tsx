import React from "react";
import Image from "next/image";
import { calc } from "antd/es/theme/internal";

const RightHeader = () => {
  return (
    <div className="w-[219px] max-w-[219px] h-full flex justify-between flex-col">
      {mocData.map((item, index) => (
        <Image
          key={index}
          height={115}
          width={219}
          src={item.banner}
          className="cursor-pointer w-full rounded-[10px] "
          style={{ height: `calc(33.333333% - 10px)` }}
          alt="banner"
        />
      ))}
    </div>
  );
};

export default RightHeader;
const mocData = [
  {
    banner:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/rightbanner-m34-14-5-2024.png",
    link: "",
  },
  {
    banner:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/ipad-pro-m4-2024-20-5-right-banner.png",
    link: "",
  },
  {
    banner:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/s-student-banner-block-home-update (2).jpg",
    link: "",
  },
];
