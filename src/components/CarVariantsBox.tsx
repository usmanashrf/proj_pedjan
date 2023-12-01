import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Fordcarimage from "@/assets/images/ford-car.png"

const CarVaientsBox = ({imageSrc, title} : {imageSrc: StaticImageData, title: string}) => {
  return (
    <div>
        <Image src={imageSrc} alt={title} height={750} width={750}  />
    </div>
  )
}

export default CarVaientsBox