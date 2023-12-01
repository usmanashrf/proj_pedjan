"use client"
import Image, { StaticImageData } from 'next/image'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import  { useState } from 'react'
import SwiperCore from "swiper";
import { ChevronRight , ChevronLeft } from 'lucide-react';
import { SectionData } from '@/assets/data/bussiness-section-data';
import SwiperBox from '@/components/SwiperBox';

const ContentSlider = ({bussinessSectionData,
}: {
  bussinessSectionData: SectionData[];}) => {
    const [swiper, setswiper] = useState<SwiperCore>()

    return (
        <>
            <Swiper
                slidesPerView={1}
                breakpoints={{
                  390: {
                    spaceBetween:20,
                    slidesPerView:2
                  },
                  540: {
                    spaceBetween:30,
                    slidesPerView:3
                  },
                  768: {
                    slidesPerView:4
                  },
                  1024: {
                    spaceBetween:15,
                    slidesPerView:5
                  },
                }}
                onInit={(swiper) => setswiper(swiper)}
            >
              {bussinessSectionData.map((slideData)=> {
                return (
                  <SwiperSlide key={slideData.id} className='max-[390px]:!justify-center max-[390px]:!flex  '>
                    <div className='max-[390px]:!min-w-[230px]'>
                      <SwiperBox imageSrc={slideData.imageSrc}
                      title={slideData.title}
                      no_of_ads={slideData.no_of_ads}
                      />
                    </div>
                </SwiperSlide>
                )
              })}
            </Swiper>
            <div className="flex justify-center items-center space-x-4 mt-10 ">
        <button onClick={() => swiper?.slidePrev()} className="bg-[#EF2C2E] text-white h-9 w-9 flex justify-center items-center rounded-md">
        <ChevronLeft size={19} />
        </button>
        <button onClick={() => swiper?.slideNext()} className="bg-[#EF2C2E] text-white h-9 w-9 flex justify-center items-center rounded-md">
        <ChevronRight size={19} />
        </button>
      </div>

            
        </>
    )
}

export default ContentSlider