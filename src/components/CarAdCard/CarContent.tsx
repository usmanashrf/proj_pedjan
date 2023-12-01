import React from 'react'
import download_icon from "@/assets/svgs/download-inverted.svg"
import star_chevron_icon from "@/assets/svgs/star-chevron.svg"
import star_house_icon from "@/assets/svgs/start-house.svg"
import xl_icon from "@/assets/svgs/xl.svg"
import Image from 'next/image'
import { CarContentI } from '.'
import eye_icon from "@/assets/svgs/eye.svg"
import edit_icon from "@/assets/svgs/edit-icon.svg"
import pause_icon from "@/assets/svgs/pause.svg"
import trash_icon from "@/assets/svgs/trash.svg"
import tag_icon from "@/assets/svgs/tag.svg"
import { cn } from '@/lib/utils'

const CarContent = ({
    title,
    datePublished,
    tags,
    highlights
}: CarContentI) => {
    return (
        <div className='flex flex-col lg:gap-4 gap-2 w-full md:pt-4 md:pb-1.5 xs1:px-4 xs:px-3 px-2'>
            {datePublished && <div className='lg:text-xs text-[10px] md:absolute top-1 right-2 z-10 text-right'>Date Published: {datePublished.toLocaleString()} </div>}
            <h3 className='lg:text-xl text-base font-semibold'>{title}</h3>
            {/* Highlights */}
            <div className='grid grid-cols-4 lg:gap-4 gap-2 max-lg:max-w-sm max-[500px]:mx-auto max-[500px]:text-center max-sm:mt-4'>
                <div className={('xl:text-[10px] text-[9px] flex flex-col min-[500px]:items-start items-center gap-2')}>
                    <Image className={cn(['w-7/12' , highlights?.ad_in && "bg-white opacity-60 rounded-lg"])} src={download_icon} alt='download_icon' />
                    <p>Highlight the ad in the search</p>
                </div>
                <div className={('xl:text-[10px] text-[9px] flex flex-col min-[500px]:items-start items-center gap-2')}>
                    <Image className={cn(['w-7/12', highlights?.ad_above && "bg-white opacity-60 rounded-lg"])} src={star_chevron_icon} alt='star_chevron_icon' />
                    <p>Highlight the ad above the search</p>
                </div>
                <div className={('xl:text-[10px] text-[9px] flex flex-col min-[500px]:items-start items-center gap-2')}>
                    <Image className={cn(['w-7/12', highlights?.ad_front && "bg-white opacity-60 rounded-lg"])} src={star_house_icon} alt='star_house_icon' />
                    <p>Highlight the ad on the front page</p>
                </div>
                <div className={('xl:text-[10px] text-[9px] flex flex-col min-[500px]:items-start items-center gap-2')}>
                    <Image className={cn(['w-7/12', highlights?.xl_ad && "bg-white opacity-60 rounded-lg"])} src={xl_icon} alt='xl_icon' />
                    <p>Enlarge to XL ad</p>
                </div>
            </div>
            {/* Tags */}
            <div className='flex items-center max-xs:justify-center gap-2 flex-wrap max-[500px]:mx-auto max-sm:mt-2'>
                <div className='flex items-center gap-2 lg:text-sm xs:text-[10px] text-[11px] text-secondary bg-secondary/20 w-fit px-2 py-1 rounded-lg'>
                    {tags.watching}
                    <Image src={eye_icon} alt='eye_icon' />
                </div>
                <div className='flex items-center gap-2 lg:text-sm xs:text-[10px] text-[11px] text-secondary bg-secondary/20 w-fit px-2 py-1 rounded-lg'>
                    ID: {tags.id}
                </div>
                <div className='flex items-center gap-2 lg:text-sm xs:text-[10px] text-[11px] text-secondary bg-secondary/20 w-fit px-2 py-1 rounded-lg'>
                    Stands out: {tags.stands_out}
                </div>
            </div>
            {/* Options */}
            <div className='w-full flex items-center justify-end gap-3 max-sm:mt-4'>
                <div className='w-full max-w-[31px] flex flex-col gap-1'>
                    <div className='w-full max-w-[31px] h-[31px] flex items-center justify-center border border-primary rounded-lg'>
                        <Image src={edit_icon} alt='edit_icon' />
                    </div>
                    <p className='text-[10px] text-center'>edit</p>
                </div>
                <div className='w-full max-w-[31px] flex flex-col gap-1'>
                    <div className='w-full max-w-[31px] h-[31px] flex items-center justify-center border border-primary rounded-lg'>
                        <Image src={pause_icon} alt='pause_icon' />
                    </div>
                    <p className='text-[10px] text-center'>pause</p>
                </div>
                <div className='w-full max-w-[31px] flex flex-col gap-1'>
                    <div className='w-full max-w-[31px] h-[31px] flex items-center justify-center border border-primary rounded-lg'>
                        <Image src={trash_icon} alt='trash_icon' />
                    </div>
                    <p className='text-[10px] text-center'>delete</p>
                </div>
                <div className='w-full max-w-[31px] flex flex-col gap-1'>
                    <div className='w-full max-w-[31px] h-[31px] flex items-center justify-center border border-primary rounded-lg'>
                        <Image src={tag_icon} alt='tag_icon' />
                    </div>
                    <p className='text-[10px] text-center'>sold</p>
                </div>
            </div>
        </div >
    )
}

export default CarContent