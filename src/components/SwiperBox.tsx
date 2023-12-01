import Image, { StaticImageData } from 'next/image'
import React from 'react'

const SwiperBox = ({imageSrc, title, no_of_ads} : {imageSrc: StaticImageData, title: string, no_of_ads: number }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white max-w-[225px] rounded-md">
    <div className="relative w-full flex items-center justify-center py-5 ">
    <span className='absolute left-0 top-3 z-5 bg-[#EF2C2E] text-white text-sm px-2 xs:px-[3px] xs1:px-[5px] sm:px-[5px] md:px-[7px] lg:px-2 rounded-r-md py-1'>{no_of_ads} Ads</span>
        <Image
        src={imageSrc}
        alt={title}
        className="rounded-t-md"
        />
    </div>
    <div className="bg-[#003087] text-white w-full p-3 text-center rounded-b-md shrink-0 text-sm font-semibold">
      {title}
    </div>
  </div>
  )
}

export default SwiperBox