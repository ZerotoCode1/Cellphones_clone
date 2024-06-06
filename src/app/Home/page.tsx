import BannerSlide from "@/Components/BannerSlide";
import CardProduct from "@/Components/CardProduct";
import ListCategory from "@/Components/Category";
import RightHeader from "@/Components/RightHeader";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex justify-center gap-4 py-[5px] px-[10px] h-[380px] mb-4">
        <ListCategory />
        <div>
          <BannerSlide />
        </div>
        <RightHeader />
      </div>
      <CardProduct
        next="a"
        pre="b"
        title="Điện thoại nổi bật nhất"
        autoplay={3500}
        loop={true}
        backgroundSale="	https://cdn2.cellphones.com.vn/x/media/wysiwyg/background-fs_1.png"
      />
      <div className="h-6"></div>
      <CardProduct next="c" pre="d" title="Lap top xịn nhất" />
    </>
  );
};

export default Home;
