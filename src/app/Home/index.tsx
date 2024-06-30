"use client";
import BannerSlide from "@/Components/BannerSlide";
import CardProduct from "@/Components/CardProduct";
import ListCategory from "@/Components/Category";
import { LIST_USER } from "@/Components/Contant/apiUrl";
import RightHeader from "@/Components/RightHeader";
import HomeLayout from "@/Layouts/HomeLayout";
import Services from "@/Lib/Request/Services";
import { useStore } from "@/Lib/Store/Store";
import React, { useEffect } from "react";
import Link from "next/link";
const HomeRoot = () => {
  const fakedata = useStore((state) => state.setListUsers);
  const data = useStore((state) => state.listusers);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Services.get(LIST_USER);
      fakedata(data);
    };
    fetchData();
  }, []);
  console.log(data, "wwwwwwwwwwww");
  return (
    <HomeLayout>
      <div>
        <Link href={"/Detail/2"}>
          <button>navigate</button>
        </Link>
        <div className="flex justify-center gap-4 py-[5px] px-[10px] h-[380px] mb-4">
          <ListCategory />
          <section>
            <BannerSlide />
          </section>
          <RightHeader />
        </div>
        <CardProduct
          next="a"
          pre="b"
          title="Điện thoại nổi bật nhất"
          autoplay={3500}
          loop={true}
          backgroundSale="https://cdn2.cellphones.com.vn/x/media/wysiwyg/background-fs_1.png"
        />
        <div className="h-6"></div>
        <CardProduct next="c" pre="d" title="Lap top xịn nhất" />
      </div>
    </HomeLayout>
  );
};

export default HomeRoot;
