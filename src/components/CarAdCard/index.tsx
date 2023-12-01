import React from 'react'
import CarContent from './CarContent'
import CarSliderWrapper from './CarSliderWrapper'
import { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';

export interface CarContentI {
    title: string;
    datePublished?: string | Date;
    tags: {
        watching: string | number;
        id: string | number;
        stands_out: string | number;
    }
    highlights?: {
        ad_in : boolean;
        ad_above : boolean;
        ad_front : boolean;
        xl_ad : boolean
    };
}

export interface CarSliderI {
    imageSrc: string | StaticImageData;
    altText?: string;
}

interface CarCardAdI extends CarContentI {
    carImages: CarSliderI[];
    adsPage: string;
    adsPlace: string;
    bgColorCss?: string;
}

const CarCardAd = ({
    title,
    carImages,
    datePublished,
    tags,
    adsPage,
    adsPlace,
    bgColorCss = "bg-[#EDEEF0]",
    highlights
}: CarCardAdI) => {
    return (
        <div className={cn([bgColorCss, 'border w-full border-[#B8B8B8] rounded-lg max-w-4xl max-md:pb-3'])}>
            <CarSliderWrapper carImages={carImages}>
                <CarContent
                    datePublished={datePublished}
                    title={title}
                    tags={tags}
                    highlights={highlights}
                />
            </CarSliderWrapper>
            <div className='xs:text-base text-xs font-semibold px-3 py-3 border-t rounded-lg border-stroke mt-2'>
                Your ad is on the <span className='text-primary'>{adsPage} page of the search</span>, on the <span className='text-primary'>{adsPlace} place</span>! Highlight it and accelerate sales!
            </div>
        </div>
    )
}

export default CarCardAd