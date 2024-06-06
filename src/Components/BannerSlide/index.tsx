"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  EffectFade,
  Autoplay,
  FreeMode,
  Thumbs,
} from "swiper/modules";
const BannerSlide = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [delay, setDelay] = useState(3500);
  const handleClick = (index: number) => {
    const element = document.querySelectorAll(".styleTitle");

    if (element) {
      element.forEach((tab, index) => {
        tab.addEventListener("click", () => {
          element.forEach((element) => {
            element.classList.remove("choose-slide");
          });
          tab.classList.add("choose-slide");
        });
      });
    }
    // setDelay(6000);
    // setTimeout(() => {
    //   setDelay(3500);
    // }, 5000);
  };
  return (
    <>
      <Swiper
        effect={"fade"}
        spaceBetween={10}
        navigation={true}
        autoplay={{ delay: delay, disableOnInteraction: false }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay, EffectFade]}
        className="mySwiper2 w-[670px] h-[290px]"
      >
        {mocData.map((item, index) => (
          <SwiperSlide key={index}>
            <Image src={item?.img} alt="" height={290} width={670} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={(swiper: any) => setThumbsSwiper(swiper)}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        autoplay={{ delay: delay, disableOnInteraction: false }}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper w-[670px] h-[80px] border-swiper"
      >
        {mocData.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`styleTitle`}
            onClick={() => handleClick(index)}
          >
            <p className="cursor-pointer text-center">{item.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BannerSlide;
const mocData = [
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/iphone-15-pro-max-nang-cap-camera.jpg",
    title: "iPhone 13 128GB | Chính hãng VN/A",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/690-300-max.jpg",
    title: "iPhone 14 256GB | Chính hãng VN/A",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/Asus_sliding.2_new.jpg",
    title: "iPhone 11 128GB | Chính hãng VN/A",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/vivo-v-30-e-sliding-18-6-2024.png",
    title: "iPhone 15 128GB | Chính hãng VN/A",
  },
];
