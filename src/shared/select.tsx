"use client"
import React, { useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { ChevronDown, Euro } from 'lucide-react'
import { cn } from '@/lib/utils'

type OptionI = {
    label: string | number,
    value: string | number
}

interface SelectI {
    InitialValue: OptionI;
    Options: OptionI[];
    EuroIcon?: boolean;
    name:string;
    TriggerCss? : string;
}

const Select = ({
    InitialValue,
    Options,
    EuroIcon = false,
    name,
    TriggerCss
}: SelectI) => {

    const [active, setactive] = useState<OptionI>(InitialValue)
    const [open, setOpen] = useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <div onClick={() => setOpen(true)} className={cn([TriggerCss,'w-full select-none cursor-pointer flex items-center justify-between border border-[#B8B8B8] rounded-lg md:py-4 py-3 px-3'])}>
                    <input name={name} value={active.label} className='w-full cursor-pointer outline-none xs:text-sm text-xs' readOnly type="text" />
                    {EuroIcon ?
                        <Euro size={20} strokeWidth={1.5} />
                        :
                        <ChevronDown size={20} strokeWidth={1.5} />
                    }
                </div>
            </PopoverTrigger>
            <PopoverContent className='border rounded-md overflow-hidden'>
                <ul className='flex flex-col gap-2 text-sm px-3 py-3'>
                    {Options.map((item, i: number) => (
                        <li key={i} onClick={() => {
                            setactive(item);
                            setOpen(false);
                        }} className='cursor-pointer'>
                            {item.label}
                        </li>
                    ))}
                </ul>
            </PopoverContent>
        </Popover>
    )
}

export default Select