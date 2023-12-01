import React from 'react'
import star from "@/assets/svgs/star.svg"
import location from "@/assets/svgs/location.png"
import Image from 'next/image'
import { CarContentI } from '.'

const CarContent = ({
    title,
    price,
    discountedPrice,
    carProperties,
    remarks,
    datePublished
}: CarContentI) => {
    return (
        <div className='flex flex-col xs1:gap-4 gap-2 w-full md:pt-4 md:pb-1.5 xs1:px-4 px-3 '>
            {datePublished && <div className='text-xs md:absolute top-1 right-2 z-10 text-right'>Date Published: {datePublished.toLocaleString()} </div>}
            <h3 className='sm:text-xl text-lg font-semibold'>{title}</h3>
            <div className='flex flex-col'>
                <div className='flex items-center gap-2'>
                    <h4 className='sm:text-2xl text-xl font-semibold text-primary'>{price.toLocaleString()} kr</h4>
                    <h4 className='sm:text-base text-sm font-light leading-none line-through'>{discountedPrice?.toLocaleString()} €</h4>
                </div>
                <p className='sm:text-xs text-[10px]'>+ Omregistrering</p>
            </div>
            <div className='max-xs1:text-center grid lg:grid-cols-4 grid-cols-3 md:gap-2 gap-4 h-full max-xs1:pb-2 max-xs1:pt-4'>
                {carProperties.VehicleType &&
                    <div>
                        <div className='xs1:text-xs text-[10px]'>Vehicle Type</div>
                        <div className='xs1:text-sm text-xs font-semibold'>{carProperties.VehicleType}</div>
                    </div>
                }
                {carProperties.GearboxType &&
                    <div>
                        <div className='xs1:text-xs text-[10px]'>Gearbox Type</div>
                        <div className='xs1:text-sm text-xs font-semibold'>{carProperties.GearboxType}</div>
                    </div>
                }
                {carProperties.Kilometers &&
                    <div>
                        <div className='xs1:text-xs text-[10px]'>Kilometers</div>
                        <div className='xs1:text-sm text-xs font-semibold'>{carProperties.Kilometers.toLocaleString()} km</div>
                    </div>
                }
                {carProperties.Manufacture_year &&
                    <div>
                        <div className='xs1:text-xs text-[10px]'>Manufacture year</div>
                        <div className='xs1:text-sm text-xs font-semibold'>{carProperties.Manufacture_year}</div>
                    </div>
                }
                {carProperties.Power &&
                    <div>
                        <div className='xs1:text-xs text-[10px]'>HP/kW</div>
                        <div className='xs1:text-sm text-xs font-semibold'>{carProperties.Manufacture_year}</div>
                    </div>
                }
                {carProperties.Doors_number &&
                    <div className='max-xs1:hidden'>
                        <div className='xs1:text-xs text-[10px]'>Doors number</div>
                        <div className='xs1:text-sm text-xs font-semibold'>{carProperties.Doors_number}</div>
                    </div>
                }
                {carProperties.cm3 &&
                    <div className='max-xs1:hidden'>
                        <div className='xs1:text-xs text-[10px]'>cm3</div>
                        <div className='xs1:text-sm text-xs font-semibold'>{carProperties.cm3}</div>
                    </div>
                }
                {carProperties.FuelType &&
                    <div>
                        <div className='xs1:text-xs text-[10px]'>Fuel type</div>
                        <div className='xs1:text-sm text-xs font-semibold'>{carProperties.FuelType}</div>
                    </div>
                }
            </div>
            <div className='flex md:flex-row flex-col lg:justify-between justify-end gap-1 md:items-start w-full lg:pr-2 max-md:gap-3'>
                {remarks &&
                    <div className='basis-5/6 flex items-center xs1:justify-start justify-center flex-wrap gap-2 max-lg:hidden max-md:flex'>
                        {remarks.map((remark, index) => (
                            <div key={index} className='bg-secondary/20 text-secondary xs1:text-[11px] text-[10px] font-medium rounded-lg xs:px-5 px-3.5 py-1.5'>{remark}</div>
                        ))}
                    </div>
                }
                <div className='flex items-center gap-2 max-xs1:place-self-end'>
                    <Image src={star} alt='star' />
                    <div className='flex items-center gap-1'>
                        <Image className='shrink-0' src={location} alt='location' />
                        <p className='text-xs'>Prigrevica</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CarContent