import React from 'react'
import SettingsCard, { SettingOptions } from './settingsCard'
import { ChevronRightIcon, ChevronUp } from 'lucide-react'
import Select from '@/shared/select'
import CarCardAd from '@/components/CarAdCard'
import SettingsOption from './settingsCard/SettingsOption'
import { SettingAdsData } from '@/assets/data/SettingAdsData'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const Settings = ({ searchParams }: { searchParams: { active: string } }) => {

    const active = (searchParams && searchParams.active && searchParams.active !== "") ? searchParams.active : "active-ads"

    return (
        <main>
            <div className='mt-4'>
                {/* Back to Top Button */}
                <a href={"#"} className='max-2xl:hidden'>
                    <button className='fixed right-6 bottom-1/4 flex items-center gap-3 bg-primary text-white px-3 py-2 rounded-lg'>
                        <ChevronUp size={20} /> Back to top
                    </button>
                </a>
                {/* Top Nav */}
                <div className='flex sm:flex-row flex-col sm:items-center sm:justify-between gap-3 py-2'>
                    <div className='font-medium text-secondary flex items-center gap-1'>
                        <span>endrebil.no</span>
                        <ChevronRightIcon size={20} strokeWidth={1.5} />
                        <span>Settings</span>
                    </div>
                    <div className='bg-white rounded-lg mr-0 ml-auto'>
                        <Select
                            TriggerCss='!py-2.5'
                            name='standard-sorting'
                            InitialValue={{ label: "Standard Sorting", value: "" }}
                            Options={[
                                { label: "Standard Sorting", value: "" },
                                { label: "Sort 1", value: "Sort 1" },
                                { label: "Sort 2", value: "Sort 2" },
                                { label: "Sort 3", value: "Sort 3" },
                            ]}
                        />
                    </div>
                </div>
                <div className='grid lg:grid-cols-12 grid-cols-1 gap-4 w-full'>
                    {/* Left Side Settings */}
                    <div className='lg:col-span-3 col-span-1 lg:max-w-xs max-sm:hidden'>
                        <SettingsCard activeOption={active} />
                    </div>
                    {/* Right Car Side */}
                    <div className={cn([active !== "" && "lg:col-span-9 col-span-1 bg-white border border-stroke rounded-lg sm:p-4 p-2.5"])}>
                        {/* Settings on small Screens */}
                        <div className='w-full grid grid-cols-7 gap-1 pb-4 sm:hidden'>
                            {SettingOptions.map((option, index: number) => {
                                return (
                                    <SettingsOption
                                        key={index}
                                        title={option.title}
                                        Icon={option.icon}
                                        link={option.link}
                                        active={active === option.link}
                                        BoxCss={SettingOptions.length === index + 1 ? "w-full h-full flex flex-col items-end" : ""}
                                        alignCss={SettingOptions.length === index + 1 ? "right-0 bottom-0 !rounded-l-lg !rounded-r-none" : ""}
                                    />
                                )
                            })}
                        </div>
                        {/* Cars Ads */}
                        {active === "active-ads" &&
                            <div className='w-full flex flex-col gap-4'>
                                {SettingAdsData.map((data, index: number) => (
                                    <CarCardAd
                                        key={index}
                                        title={data.title}
                                        datePublished={data.datePublished}
                                        tags={data.tags}
                                        carImages={data.carImages}
                                        adsPage={data.adsPage}
                                        adsPlace={data.adsPlace}
                                        bgColorCss={data.bgColorCss}
                                        highlights={data.highlights}
                                    />
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Settings