import React from "react";
import Image from "next/image";
const HeaderBanner = () => {
  return (
    <header>
      <div className="flex bg-[#e9efff] justify-center w-full">
        <Image
          height={30}
          width={0}
          className="min-h-[30px] min-w-[320px]"
          src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/207x30_TopBanner_Homepage_01.2024_Mb_2-01133.svg"
          alt=""
        />
        <Image
          height={30}
          width={0}
          className="min-h-[30px] min-w-[320px]"
          src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/207x30_TopBanner_Homepage_01.2024_Mb_2-02133.svg"
          alt=""
        />
        <Image
          height={30}
          width={0}
          className="min-h-[30px] min-w-[320px]"
          src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/207x30_TopBanner_Homepage_01.2024_Mb_2-03133.svg"
          alt=""
        />
      </div>
    </header>
  );
};

export default HeaderBanner;
