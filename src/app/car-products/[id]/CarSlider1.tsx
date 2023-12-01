"use client";
import React from "react";
import "./styles.css";
import { useState } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { carVariantsData } from "@/assets/data/car-variants-data";
import { MoveLeft, MoveRight } from "lucide-react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const CarSlider1 = () => {
  const [swiper, setswiper] = useState<SwiperCore>();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const [index, setIndex] = useState(0);
  return (
    <div className="flex flex-col gap-y-4 relative">
      {/* Current Slide Index Span */}
      <div  className="absolute z-10 lg:top-28 lg:left-0 md:left-0 md:top-20 sm:left-0 sm:top-24 xs1:left-0 xs1:top-16 left-0 top-10 ">
        <span className="bg-[#EF2C2E] text-white font-semibold px-4 py-1 rounded-r-md text-xs">
          {index + 1}/{carVariantsData.length}
        </span>
      </div>
      {/* Arrows buttons */}
      <div className="absolute z-20 sm:top-6 sm:bottom-32 xs1:top-10 xs1:bottom-20 top-4 bottom-16 flex w-full justify-between items-center  max-sm:mb-10 xs1:pl-2 xs1:pr-2 pl-1 pr-1  ">
        <button
          onClick={() => swiper?.slidePrev()}
          className="bg-[#EF2C2E]/70 text-white h-10 w-10 flex justify-center items-center rounded-full"
        >
          <MoveLeft size={18} />
        </button>
        <button
          onClick={() => swiper?.slideNext()}
          className="bg-[#EF2C2E]/70 text-white h-10 w-10 flex justify-center items-center rounded-full"
        >
          <MoveRight size={18} />
        </button>
      </div>
      <Swiper
        onRealIndexChange={(swiper) => setIndex(swiper.activeIndex)}
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
        onInit={(swiper) => setswiper(swiper)}
      >
        {carVariantsData.map((carData, i: number) => {
          return (
            <SwiperSlide key={i}>
              <div className="relative w-full">
                <Image
                  src={carData.imageSrc}
                  alt={carData.title}
                  className="object-cover "
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          390: {
            spaceBetween: 10,
            slidesPerView: 3,
          },
          590: {
            spaceBetween: 12,
            slidesPerView: 4,
          },

          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },

          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {carVariantsData.map((carData, i: number) => {
          return (
            <SwiperSlide key={i} className="  ">
              <div>
                <Image
                  src={carData.imageSrc}
                  alt={carData.title}
                  height={118}
                  width={158}
                  className="!object-cover  "
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CarSlider1;
