"use client"
import React from 'react'
import Image, { StaticImageData } from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { useState } from 'react'
import SwiperCore from "swiper";
import { CarSliderI } from '.';

const CarSlider = ({ CarImages, ActiveImage, setActiveImage }: {
    CarImages: CarSliderI[],
    ActiveImage?: string | StaticImageData;
    setActiveImage: React.Dispatch<React.SetStateAction<string | StaticImageData>>
}) => {

    const [swiper, setswiper] = useState<SwiperCore>()

    return (
        <div>
            <Swiper
                spaceBetween={5}
                slidesPerView={3}
                breakpoints={{
                    1024: { slidesPerView: 7 },
                    768: { slidesPerView: 6 },
                    640: { slidesPerView: 5 },
                    480: { slidesPerView: 4 },
                }}
                onInit={(swiper) => setswiper(swiper)}
            >
                {CarImages.map((image, i: number) => (
                    <SwiperSlide onClick={() => setActiveImage(image.imageSrc)} key={i} className='w-full h-full cursor-pointer'>
                        <Image className='rounded-lg w-full h-full object-contain' src={image.imageSrc} alt={image.altText ? image.altText : 'image'} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CarSlider