'use client'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { useState } from 'react'
import SwiperCore from "swiper";
import { ChevronRight, ChevronLeft } from 'lucide-react';
import CarBox from '@/components/CarBox';
import { carsDealersData } from '@/assets/data/morecars-dealers-data';
const MoreCarsSwiper = () => {
    const [swiper, setswiper] = useState<SwiperCore>()
  return (
    <div>
    <Swiper className='!h-[90%]  '
      slidesPerView={4}
      spaceBetween={15}
      breakpoints={{
        390: {
          slidesPerView: 2,
          spaceBetween:10,
        },
        688: {
          slidesPerView: 3,
          spaceBetween:15,
        },
        890: {
          slidesPerView: 4,
          spaceBetween:15,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween:15,
        },
      }}
      onInit={(swiper) => setswiper(swiper)}
    >
      {carsDealersData.map((data) => {
        return (

          <SwiperSlide className='' key={data.id}>
            <CarBox year={data.details.year}
              kilometers={data.details.kilometers}
              engine={data.details.engine}
              name={data.name}
              price={data.price}
              imageSrc={data.imageSrc}
              id={data.id}
              imagealtText={data.altText}
            />

          </SwiperSlide>
        )
      })}
    </Swiper>
    <div className="flex justify-center items-center space-x-4 mt-5 ">
        <button onClick={() => swiper?.slidePrev()} className="bg-[#EF2C2E] text-white h-9 w-9 flex justify-center items-center rounded-md">
        <ChevronLeft size={19} />
        </button>
        <button onClick={() => swiper?.slideNext()} className="bg-[#EF2C2E] text-white h-9 w-9 flex justify-center items-center rounded-md">
        <ChevronRight size={19} />
        </button>
      </div>


  </div>
)
}


export default MoreCarsSwiper