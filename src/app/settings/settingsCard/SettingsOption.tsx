import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'

interface SettingsOptionI {
    title: string;
    Icon: JSX.Element;
    link: string;
    active?: boolean;
    BoxCss?: string;
    alignCss?: string
}

const SettingsOption = ({ title, Icon, link, active, BoxCss, alignCss }: SettingsOptionI) => {
    return (
        <div className={cn(["relative", active && "max-sm:mb-5", BoxCss])}>
            <Link href={"/settings?active=" + link} className=''>
                <button className={cn([active ? "!bg-[#EDEEF0]" : "", 'hover:bg-[#EDEEF0] px-3 py-2.5 sm:rounded-lg max-sm:rounded-t-lg sm:w-full flex items-center gap-3 font-semibold transition-all duration-300'])}>
                    <div className='w-6 h-6 shrink-0'>
                        {Icon}
                    </div>
                    <span className='max-sm:hidden'>{title}</span>
                </button>
            </Link>
            <div className={cn([alignCss, active ? "" : "hidden", "absolute whitespace-nowrap font-medium bg-[#EDEEF0] px-2 rounded-r-lg rounded-b-lg sm:hidden"])}>{title}</div>
        </div>

    )
}

export default SettingsOption