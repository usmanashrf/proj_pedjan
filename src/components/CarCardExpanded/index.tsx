import React from 'react'
import CarContent from './CarContent'
import CarSliderWrapper from './CarSliderWrapper'
import { StaticImageData } from 'next/image';

export interface CarContentI {
    title: string;
    price: string | number;
    bgColor?:string
    discountedPrice?: string | number;
    datePublished?: string | Date;
    carProperties: {
        VehicleType: string;
        GearboxType: string;
        Kilometers: string | number;
        Manufacture_year: string;
        Power: string;
        Doors_number: number;
        cm3: string | number;
        FuelType: string;
    };
    remarks?: string[]
}

export interface CarSliderI {
    imageSrc: string | StaticImageData;
    altText?: string;
}

interface CarCardExpanded extends CarContentI {
    carImages: CarSliderI[]
}

const CarCardExpanded = ({
    bgColor,
    title,
    price,
    discountedPrice,
    carProperties,
    remarks,
    carImages,
    datePublished
}: CarCardExpanded) => {
    return (
        <div className={`${bgColor} border border-[#B8B8B8] rounded-lg max-w-4xl max-md:pb-3 `}>
            <CarSliderWrapper carImages={carImages}>
                <CarContent
                datePublished={datePublished}
                    title={title}
                    price={price}
                    discountedPrice={discountedPrice}
                    carProperties={carProperties}
                    remarks={remarks}
                />
            </CarSliderWrapper>
        </div>
    )
}

export default CarCardExpanded