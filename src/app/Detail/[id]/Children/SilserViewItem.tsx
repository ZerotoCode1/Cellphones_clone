// "use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import { SourceIcon } from "@/Components/Iconsvg";
interface SilserViewItemProps {
  image: string[];
  versionColor: [{ name: string; image: string }];
  activerColorVersion: number;
  vdeo?: string;
}
const SilserViewItem = (props: SilserViewItemProps) => {
  const { image, versionColor, activerColorVersion, vdeo } = props;
  const [activeImage, setActiveImage] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const mainSwiperRef = useRef(null);
  useEffect(() => {
    if (mainSwiperRef.current) {
      // @ts-ignore
      mainSwiperRef.current.swiper.slideTo(activeImage + 1);
    }
  }, [activeImage]);
  useEffect(() => {
    const indexActive = vdeo ? 1 : 0;
    setActiveImage(image.length + activerColorVersion + indexActive);
  }, [activerColorVersion, image.length, vdeo]);
  return (
    <div>
      <Swiper
        ref={mainSwiperRef}
        style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          marginLeft: "0px",
        }}
        spaceBetween={10}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 max-h-[398px] w-[780px] flex justify-start ml-0 relative"
      >
        <div
          className="swiper-next absolute left-0 top-[45%] h-[60px] w-[30px] flex items-center justify-center prev z-10"
          style={{
            borderRadius: "0 100px 100px 0",
            backgroundColor: "rgba(0,0,0,.3)",
            boxShadow: "0 0 4px 0 rgba(0,0,0,.2)",
          }}
        >
          <button>
            <SourceIcon.ArowLeft fill={"#fff"} width={14} height={18} />
          </button>
        </div>
        <div
          className="swiper-prve absolute right-0 top-[45%] h-[60px] w-[30px] flex items-center justify-center next z-10"
          style={{
            borderRadius: "100px 0 0 100px",
            backgroundColor: "rgba(0,0,0,.3)",
            boxShadow: "0 0 4px 0 rgba(0,0,0,.2)",
          }}
        >
          <button className="">
            <SourceIcon.ArowRight fill={"#fff"} width={14} height={18} />
          </button>
        </div>
        {vdeo && (
          <SwiperSlide className="w-full h-full">
            <iframe
              width="780px"
              height="398px"
              src={vdeo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </SwiperSlide>
        )}
        {image.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="text-center w-full justify-center">
              <img src={item} alt="" className="m-auto" />
            </div>
          </SwiperSlide>
        ))}
        {versionColor.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="text-center w-full justify-center">
                <img src={item.image} alt="" className="m-auto" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        // @ts-ignore
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={12}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-3 h-[60px]  gap-x-2 text-center"
      >
        {vdeo && (
          <SwiperSlide>
            <div
              className={`box-slide-view flex items-center flex-col p-4 ${
                activeImage === -1 ? "box-slide-view-active" : ""
              }`}
              onClick={() => setActiveImage(-1)}
            >
              <Icon />
              <p>video</p>
            </div>
          </SwiperSlide>
        )}
        {image.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`box-slide-view ${
                activeImage === index ? "box-slide-view-active" : ""
              }`}
              onClick={() => setActiveImage(index)}
            >
              <Image
                src={item}
                alt=""
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
        {versionColor.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className={`box-slide-view ${
                  activeImage === index + image.length
                    ? "box-slide-view-active"
                    : ""
                }`}
                onClick={() => setActiveImage(image.length + index)}
              >
                <Image
                  src={item.image}
                  alt=""
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SilserViewItem;
const Icon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
      stroke="#292D32"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>{" "}
    <path
      d="M9.09998 12V10.52C9.09998 8.60999 10.45 7.83999 12.1 8.78999L13.38 9.52999L14.66 10.27C16.31 11.22 16.31 12.78 14.66 13.73L13.38 14.47L12.1 15.21C10.45 16.16 9.09998 15.38 9.09998 13.48V12Z"
      stroke="#292D32"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
);
