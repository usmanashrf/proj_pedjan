"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import CarSlider from './CarSlider';
import { CarSliderI } from '.';
import gallery from '@/assets/svgs/gallery.svg'
import { cn } from '@/lib/utils';

const CarSliderWrapper = ({ children, carImages }: { children: React.ReactNode, carImages: CarSliderI[] }) => {
    const [openSlider, setopenSlider] = useState(false)
    const [activeImage, setActiveImage] = useState(carImages[0].imageSrc)
    return (
        <div>
            <div className='relative w-full flex flex-col gap-2 '>
                <div className='flex md:flex-row flex-col max-md:gap-2 w-full'>
                    <div className={cn(['relative rounded-lg w-full md:max-w-[280px]'])}>
                        <Image className='rounded-lg relative h-full w-full object-cover' src={activeImage} alt='image'  />
                        <button onClick={() => setopenSlider(!openSlider)} className='bg-primary/20 text-white text-sm flex items-center gap-2 px-3 py-1 rounded absolute z-10 bottom-3 right-2'>
                            <Image src={gallery} alt='gallery' />
                            {carImages.length}
                        </button>
                    </div>
                    {openSlider &&
                        <div className='md:hidden'>
                            <CarSlider
                                ActiveImage={activeImage}
                                setActiveImage={setActiveImage}
                                CarImages={carImages}
                            />
                        </div>
                    }
                    {children}
                </div>
                
                {openSlider &&
                    <div className='max-md:hidden'>
                        <CarSlider
                            ActiveImage={activeImage}
                            setActiveImage={setActiveImage}
                            CarImages={carImages}
                        />
                    </div>
                }
            </div>
        </div>
    )
}

export default CarSliderWrapper