"use client";
import BannerSlide from "@/Components/BannerSlide";
import CardProduct from "@/Components/CardProduct";
import ListCategory from "@/Components/Category";
import RightHeader from "@/Components/RightHeader";
import HomeLayout from "@/Layouts/HomeLayout";
import CategoryServices from "@/services/Category/CategoryService";
import Link from "next/link";
const HomeRoot = () => {
  const { listCategory } = CategoryServices();
  return (
    <HomeLayout>
      <div>
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
        {listCategory?.map((categoryItem, index) => (
          <CardProduct
            key={index}
            next={`c-${index}`}
            pre={`d-${index}`}
            title={categoryItem.name}
            categoryId={categoryItem._id}
          />
        ))}
      </div>
    </HomeLayout>
  );
};

export default HomeRoot;
