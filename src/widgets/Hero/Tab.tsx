"use client"
import Input from '@/shared/input'
import Select from '@/shared/select'
import { ChevronDown, ChevronUp, Plus, Search } from 'lucide-react'
import React, { useState } from 'react'
export interface TabI {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Tab = ({open, setOpen}: TabI) => {
    const buttonText = open ? "Close filters" : "More filters";
    const icon = open ? <ChevronUp size={22} strokeWidth={1.5} /> : <ChevronDown size={22} strokeWidth={1.5} />;


    const [PaymentType, setPaymentType] = useState<"buy" | "leasing">("buy")

    return (
        <div className='flex lg:flex-row flex-col justify-center lg:p-8 md:p-5 p-4 lg:gap-8 gap-4'>
            <div className='lg:w-4/5 flex flex-col gap-x-3 xs:gap-y-4 gap-y-3'>
                {/* Top Section */}
                <div className='flex sm:flex-row flex-col gap-x-3 xs:gap-y-4 gap-y-3'>
                    <div className='flex max-xs:flex-wrap w-full gap-x-3 xs:gap-y-4 gap-y-3'>
                        {/* Make */}
                        <div className='flex-1'>
                            <Select
                                name='Make'
                                InitialValue={{ label: "Make", value: "" }}
                                Options={[
                                    { label: "Make", value: "" },
                                    { label: "Make 1", value: "Make 1" },
                                    { label: "Make 2", value: "Make 2" },
                                ]}
                            />
                        </div>
                        {/* Model */}
                        <div className='flex-1'>
                            <Select
                                name='Model'
                                InitialValue={{ label: "Model", value: "" }}
                                Options={[
                                    { label: "Model", value: "" },
                                    { label: "Model 1", value: "Model 1" },
                                    { label: "Model 2", value: "Model 2" },
                                ]}
                            />
                        </div>
                        {/* Variant */}
                        <div className='xs:flex-1 w-full'>
                            <Input name="variant" InitialValue='Variant' />
                        </div>
                    </div>
                    {/* Add Vehicle Button */}
                    <div className=''>
                        <button className='w-full whitespace-nowrap flex items-center justify-center gap-2 bg-secondary hover:bg-white hover:text-secondary border hover:border-secondary xs:text-sm text-xs font-medium text-white md:py-4 xs:py-3 py-3.5 px-3 rounded-lg transition-all duration-300'>
                            <Plus className='max-xs:w-[15px] h-fit' size={18} strokeWidth={2} />  Add another vehicle
                        </button>
                    </div>
                </div>

                {/* Middle Section */}
                <div className='flex md:flex-row flex-col gap-x-3 xs:gap-y-4 gap-y-3'>

                    <div className='flex gap-x-3 xs:gap-y-4 gap-y-3'>
                        {/* Price From */}
                        <div className='max-md:w-full'>
                            <Select
                                name='price_from'
                                EuroIcon={true}
                                InitialValue={{ label: "Price from", value: "" }}
                                Options={[
                                    { label: 200, value: 200 },
                                    { label: 300, value: 300 },
                                ]}
                            />
                        </div>
                        {/* Price To */}
                        <div className='max-md:w-full'>
                            <Select
                                name='price_to'
                                EuroIcon={true}
                                InitialValue={{ label: "Price up to", value: "" }}
                                Options={[
                                    { label: 200, value: 200 },
                                    { label: 300, value: 300 },
                                ]}
                            />
                        </div>
                    </div>

                    <div className='flex max-sm:flex-wrap gap-x-3 xs:gap-y-4 gap-y-3'>
                        <div className='max-sm:w-full flex gap-x-3 xs:gap-y-4 gap-y-3'>
                            {/* Year From */}
                            <div className='max-sm:w-full'>
                                <Select
                                    name='year_from'
                                    InitialValue={{ label: "Year from", value: "" }}
                                    Options={[
                                        { label: "2021", value: "2021" },
                                        { label: "2022", value: "2022" },
                                        { label: "2023", value: "2023" },
                                    ]}
                                />
                            </div>
                            {/* Year To */}
                            <div className='max-sm:w-full'>
                                <Select
                                    name='year_to'
                                    InitialValue={{ label: "Year up to", value: "" }}
                                    Options={[
                                        { label: "2021", value: "2021" },
                                        { label: "2022", value: "2022" },
                                        { label: "2023", value: "2023" },
                                    ]}
                                />
                            </div>
                        </div>
                        <div className='max-sm:w-full flex gap-3'>
                            {/* Vehicle type*/}
                            <div className='max-sm:w-full max-xs:w-1/2'>
                                <Select
                                    name='vehicle_type'
                                    InitialValue={{ label: "Vehicle Type", value: "" }}
                                    Options={[
                                        { label: "Car", value: "car" },
                                        { label: "Bus", value: "bus" },
                                    ]}
                                />
                            </div>
                            {/* Fuel Type */}
                            <div className='xs:hidden max-xs:w-1/2'>
                                <Select
                                    name='fuel_type'
                                    InitialValue={{ label: "Fuel Type", value: "" }}
                                    Options={[
                                        { label: "Fuel Type 1", value: "Fuel Type" },
                                        { label: "Fuel Type 2", value: "Fuel Type" },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className='grid md:grid-cols-5 grid-cols-2 gap-x-3 xs:gap-y-4 gap-y-3'>
                    {/* Fuel Type */}
                    <div className='col-span-1 max-xs:hidden'>
                        <Select
                            name='fuel_type'
                            InitialValue={{ label: "Fuel Type", value: "" }}
                            Options={[
                                { label: "Fuel Type 1", value: "Fuel Type" },
                                { label: "Fuel Type 2", value: "Fuel Type" },
                            ]}
                        />
                    </div>
                    {/* Payment Type */}
                    <div className='md:col-span-3 col-span-2'>
                        <div className='whitespace-nowrap flex xs:text-sm text-xs border border-[#B8B8B8] rounded-lg overflow-hidden'>
                            <div className='md:py-4 py-3 px-3 w-full'>Payment Type</div>
                            <button onClick={() => setPaymentType("buy")} className={`${PaymentType === "buy" ? "bg-secondary text-white" : "text-secondary"} w-full md:py-4 py-3 px-3 flex items-center justify-center text-center select-none outline-none rounded-lg font-medium transition-all duration-300`}>Buy</button>
                            <button onClick={() => setPaymentType("leasing")} className={`${PaymentType === "leasing" ? "bg-secondary text-white" : "text-secondary"} w-full md:py-4 py-3 px-3 flex items-center justify-center text-center select-none outline-none rounded-lg font-medium transition-all duration-300`}>Leasing</button>
                        </div>
                    </div>
                    {/* City Code Type */}
                    <div className='col-span-1 max-md:col-start-2 max-md:row-start-1 max-xs:col-span-2'>
                        <Input name="city_code" Placeholder='City or ZIP Code' />
                    </div>
                </div>

            </div>

            {/* Right Buttons Section */}
            <div className='lg:w-1/5 grid lg:grid-cols-1 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-x-3 xs:gap-y-4 gap-y-3'>
                <button className='max-sm:col-span-2 max-xs:col-span-1 hover:bg-white hover:text-primary border hover:border-primary w-full rounded-lg flex gap-2 items-center justify-center bg-primary text-white xs:text-sm text-xs font-medium md:py-4 xs:py-3 py-3.5 transition-all duration-300'>
                    <Search size={16} strokeWidth={2} />  5.221.456 results
                </button>
                <button className='hover:bg-secondary hover:text-white w-full border border-secondary text-secondary rounded-lg xs:text-sm text-xs font-medium md:py-4 xs:py-3 py-3 transition-all duration-300'>Save Search</button>
                <button onClick={() => setOpen(!open)} className='hover:bg-secondary hover:text-white flex gap-1 items-center justify-center w-full border border-secondary text-secondary rounded-lg xs:text-sm text-xs font-medium md:py-4 xs:py-3 py-[9px] transition-all duration-300'>
                    {buttonText} {icon} 
                </button>
            </div>
        </div>
        
    )
}

export default Tab