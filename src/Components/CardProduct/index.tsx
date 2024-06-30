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
interface CardProductProps {
  next: string;
  pre: string;
  title: string;
  autoplay?: number;
  loop?: boolean;
  backgroundSale?: string;
}

const CardProduct = (prop: CardProductProps) => {
  const { next, pre, title, autoplay, loop, backgroundSale } = prop;
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
          {mocData.map((item, index) => (
            <SwiperSlide key={index} className="px-2 max-w-[290px]">
              <CardItem data={item} />
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
const mocData = [
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_1__1_120.png",
    id: "",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png",
    id: "",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-oppo-reno-11-f-2.png",
    id: "",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_d_i_1__1_3.png",
    id: "",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/man-hinh-gaming-e-dra-egm22f75p-22-inch.png",
    id: "",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/man-hinh-xiaomi-a27i-ela5345eu-27-inch.png",
    id: "",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-air-6-m2-11-inch_9_.jpg",
    id: "",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/man-hinh-gaming-philips-24m1n3200za-24-inch-thumbnail.png",
    id: "",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_172_2.png",
    id: "",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/h/u/huawei_1__1_2.png",
    id: "",
  },
];
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
