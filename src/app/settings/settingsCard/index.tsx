import Image from 'next/image'
import React from 'react'
import profile_icon from "@/assets/svgs/Profile Circle.svg"
import messages_icon from "@/assets/svgs/messages.svg"
import search_icon from "@/assets/svgs/search star.svg"
import star_icon from "@/assets/svgs/star.svg"
import dollar_icon from "@/assets/svgs/dollar.svg"
import setting_icon from "@/assets/svgs/setting.svg"
import SettingsOption from './SettingsOption'

const SettingsCard = ({ activeOption }: { activeOption: string }) => {
    return (
        <div className='flex flex-col items-center gap-4 px-4 py-4 w-full bg-white border border-[#B8B8B8] rounded-lg'>
            <div className='w-full flex lg:flex-col gap-4 lg:justify-center items-center'>
                <div className='w-full flex lg:flex-row justify-between items-center gap-4 lg:max-w-[200px] max-w-[180px]'>
                    <Image className='w-[57px] h-[56px] bg-secondary/5 rounded-full' src={profile_icon} alt='profile_icon' />
                    <button className='text-sm w-full max-w-[110px] bg-secondary px-2 py-2 text-white rounded-lg'>Edit profile</button>
                </div>
                <p className='xl:text-sm lg:text-xs text-base'>pedja.novokmet023@gmail.com</p>
            </div>
            <div className='w-full flex lg:flex-col flex-row'>
                <div className='flex flex-col gap-1 w-full lg:border-y border-stroke py-1.5 max-lg:pr-3'>
                    {SettingOptions.slice(0, 2).map((option, index: number) => (
                        <SettingsOption
                            key={index}
                            title={option.title}
                            Icon={option.icon}
                            link={option.link}
                            active={activeOption === option.link}
                        />
                    ))}
                </div>
                <div className='flex flex-col max-lg:border-x border-stroke gap-1 w-full py-1.5 max-lg:px-3'>
                    {SettingOptions.slice(2, 5).map((option, index: number) => (
                        <SettingsOption
                            key={index}
                            title={option.title}
                            Icon={option.icon}
                            link={option.link}
                            active={activeOption === option.link}
                        />
                    ))}
                </div>
                <div className='flex flex-col gap-1 w-full lg:border-t border-stroke py-1.5 max-lg:pl-3'>
                    {SettingOptions.slice(5).map((option, index: number) => (
                        <SettingsOption
                            key={index}
                            title={option.title}
                            Icon={option.icon}
                            link={option.link}
                            active={activeOption === option.link}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}

export const SettingOptions = [
    {
        title: 'Active ads',
        icon: <div className='w-6 h-6 rounded-full border-[3px] border-[#1A8F51]'></div>,
        link: "active-ads"
    },
    {
        title: 'Inactive ads',
        icon: <div className='w-6 h-6 rounded-full border-[3px] border-primary'></div>,
        link: "inactive-ads"
    },
    {
        title: 'Messages',
        icon: <Image src={messages_icon} alt='messages_icon' />,
        link: "messages"
    },
    {
        title: 'My searchs',
        icon: <Image src={search_icon} alt='search_icon' />,
        link: "my-searchs"
    },
    {
        title: 'Saved Ads',
        icon: <Image src={star_icon} alt='star_icon' />,
        link: "saved-ads"
    },
    {
        title: 'Credits',
        icon: <Image src={dollar_icon} alt='dollar_icon' />,
        link: "credits"
    },
    {
        title: 'Settings',
        icon: <Image src={setting_icon} alt='setting_icon' />,
        link: "settings"
    },
]

export default SettingsCard