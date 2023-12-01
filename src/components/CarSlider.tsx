'use client'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { useState } from 'react'
import SwiperCore from "swiper";
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { SectionData } from '@/assets/data/bussiness-section-data';
import SwiperBox from '@/components/SwiperBox';

import CarBox from './CarBox';
import { CarDetails } from '@/assets/data/discount-offer-data';

const CarSlider = ({ data 
}: {
  data: CarDetails[],

}) => {
  const [swiper, setswiper] = useState<SwiperCore>()

  return (
    <div>
      <Swiper
        slidesPerView={2}
        breakpoints={{
          390: {
            spaceBetween: 20,
            slidesPerView: 2
          },
          // 690: {
          //   spaceBetween: 15,
          //   slidesPerView: 3
          // },
          768: {
            slidesPerView: 2,
            spaceBetween:10,
          },
          940: {
            slidesPerView: 3,
            spaceBetween:10,
          },
          1024: {
            spaceBetween: 15,
            slidesPerView: 3
          },
        }}
        onInit={(swiper) => setswiper(swiper)}
      >
        {data.map((data) => {
          return (

            <SwiperSlide className='pt-10 pb-3 pl-2' key={data.id}>
              <CarBox year={data.details.year}
                kilometers={data.details.kilometers}
                engine={data.details.engine}
                name={data.name}
                price={data.price}
                imageSrc={data.imageSrc}
                id={data.id}
                imagealtText={data.altText}
                isDiscount={data.isDiscount}
                isSold={data.isSold}
                discountedPrice={data.discountedPrice}
              />

            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="flex sm:justify-end sm:items-end justify-center items-center  space-x-4  max-sm:mb-10  ">
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

export default CarSlider