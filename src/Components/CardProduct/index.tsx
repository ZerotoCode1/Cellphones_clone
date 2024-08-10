"use client";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SourceIcon } from "../Iconsvg";
import CardItem from "./Components/CardItem";
import { useEffect, useState } from "react";
import ProductServices, {
  ResponseProduct,
} from "@/services/Products/Getproduct";
interface CardProductProps {
  next: string;
  pre: string;
  title: string;
  autoplay?: number;
  loop?: boolean;
  backgroundSale?: string;
  categoryId?: string;
}

const CardProduct = (prop: CardProductProps) => {
  const { next, pre, title, autoplay, loop, backgroundSale, categoryId } = prop;
  const [data, setData] = useState<ResponseProduct[]>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ProductServices.getProDuctByCategory({
          limit: 15,
          category_id: categoryId ?? "",
        });
        setData(res.data.data);
      } catch (error) {}
    };
    if (categoryId) {
      fetchData();
    }
  }, [categoryId]);
  return (
    <>
      <div className="px-20 relative">
        <div className="flex justify-between mb-2">
          <h5 className="text-[22px] text-[#444444] font-bold">{title}</h5>
          <div>
            {seoData.map((item) => (
              <>
                <button
                  key={item.id}
                  className="bg-[#f3f4f6] mr-2 px-[10px] py-[5px]"
                  style={{ borderRadius: "10px", border: "1px solid #e5e7eb" }}
                >
                  {item?.title}
                </button>
              </>
            ))}
          </div>
        </div>
        <Swiper
          autoplay={
            autoplay ? { delay: autoplay, disableOnInteraction: false } : false
          }
          loop
          cssMode={true}
          navigation={{ nextEl: `.${next}`, prevEl: `.${pre}` }}
          mousewheel={true}
          keyboard={true}
          slidesPerView={5}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper wrap-swiper "
          style={{
            background: `url("${backgroundSale}") 0% 0% / cover no-repeat`,
          }}
        >
          {data &&
            data.map((item, index) => (
              <SwiperSlide key={index} className="px-2 max-w-[290px]">
                <CardItem productItem={item} />
              </SwiperSlide>
            ))}
        </Swiper>
        <div
          className={`w-[40px] h-[70px] arrow-left ${pre} arrow flex items-center z-10 justify-center`}
          style={{
            borderRadius: "0 100px 100px 0",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
            background: "#FFFFFF",
            opacity: "0.8",
          }}
        >
          <button>
            <SourceIcon.ArowLeft />
          </button>
        </div>
        <div
          className={`w-[40px] h-[70px] arrow-right arrow flex items-center z-10 justify-center ${next}`}
          style={{
            borderRadius: "100px 0 0 100px",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
            background: "#FFFFFF",
            opacity: "0.8",
          }}
        >
          <button>
            <SourceIcon.ArowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default CardProduct;

const seoData = [
  {
    title: "Asus",
    id: "1",
  },
  {
    title: "Apple",
    id: "2",
  },
  {
    title: "XiaoMi",
    id: "3",
  },
  {
    title: "Oppo",
    id: "4",
  },
  {
    title: "Samsung",
    id: "5",
  },
];
