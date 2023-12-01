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
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { carVariantsData } from "@/assets/data/car-variants-data";

const CarSlider2 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  return (
<div>
  
</div>
  );
};

export default CarSlider2;
