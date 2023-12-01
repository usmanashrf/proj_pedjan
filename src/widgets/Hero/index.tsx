import Image from 'next/image'
import React, { useState } from 'react'
import Hero_Cover from "@/assets/images/hero Cover.png"
import { Lora } from 'next/font/google'
import Tab from './Tab'
import HeroSearchBox from './HeroSearchBox'
import HeroSelectedFiltersBox from './HeroSelectedFiltersBox'

const lora = Lora({ subsets: ["latin"] })

const Hero = () => {

    return (
        <div>
            {/* Hero Background */}
            <Image className='max-lg:min-h-[350px] max-sm:min-h-[280px] max-h-[420px] w-full absolute left-0 right-0 object-cover' src={Hero_Cover} alt='Hero_Cover' />
            {/* Hero Text */}
            <div className='pt-8'>
                <div className={`relative py-6 w-fit`}>
                    <div className='relative z-20 flex flex-col gap-2'>
                        <h1 className={`${lora.className} z-20 lg:text-[50px] md:text-[42px] sm:text-[36px] text-3xl leading-tight font-semibold`}>Find Your <span className='text-primary'>Dream Car</span>  Here</h1>
                        <h4 className='lg:text-lg sm:text-base text-sm z-20'>Search from 70,862 cars</h4>
                    </div>
                    <span className='absolute bg-white w-full h-full top-0 -left-20 sm:blur-[50px] blur-[60px]'></span>
                </div>
            </div>
            {/* Hero Box */}
            <HeroSearchBox />
        </div>
    )
}

export default Hero