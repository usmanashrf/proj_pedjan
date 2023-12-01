import Image from 'next/image'
import React from 'react'
import Logo from "@/assets/images/Logo.png"
import Link from 'next/link'
import { ChevronDown, Menu, Search } from 'lucide-react'
import notification_icon from "@/assets/svgs/notification.svg"
import star_icon from "@/assets/svgs/star.svg"
import chat_icon from "@/assets/svgs/Chat.svg"
import profile_icon from "@/assets/svgs/profile.svg"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {
    return (
        <header className='bg-white sticky z-50 top-0'>
            <div className='flex items-center justify-between container lg:px-8 px-4 sm:py-2 py-4'>
                <Link href={"/"}>
                    <Image className='max-sm:w-24 max-lg:w-36 object-cover' src={Logo} alt='Logo' />
                </Link>
                <div className='flex items-center gap-9'>
                    <div className='cursor-pointer group relative flex justify-center max-lg:hidden'>
                        <Link href={"/search"} className='group-hover:text-primary transition-all duration-300 flex items-center gap-1.5'>
                            Search <ChevronDown size={18} strokeWidth={1} />
                        </Link>
                        <div className='hidden group-hover:block absolute top-6 shadow-lg p-4 bg-white rounded-lg'>
                            <div className='flex items-center text-sm gap-2 py-2 px-2 border border-slate-300 rounded-md'>
                                <Search size={18} strokeWidth={1} />
                                <input className='outline-none' placeholder='Search...' type='text' />
                            </div>
                        </div>
                    </div>
                    <Link className='hover:text-primary transition-all duration-300 max-lg:hidden' href={"/news"}>News & Guides</Link>
                    <button className='bg-primary hover:bg-red-600 text-white px-8 py-2 rounded-md transition-all duration-300'>Sell</button>
                </div>
                <div className='flex items-center'>
                    <div className='flex items-center'>
                        <div className='flex items-center mx-0.5 max-sm:hidden'>
                            <Image src={notification_icon} alt='notification_icon' />
                            <ChevronDown size={20} strokeWidth={1.5} />
                        </div>
                        <Image className='mx-3 max-sm:hidden' src={star_icon} alt='star_icon' />
                        <Link href={"/settings"}>
                            <Image className='mx-1' src={chat_icon} alt='chat_icon' />
                        </Link>
                        <Link href={"/settings"}>
                            <Image className='mx-3 sm:hidden' src={profile_icon} alt='profile_icon' />
                        </Link>
                        <button className='mx-3 bg-secondary hover:bg-[#132d5e] lg:text-base text-sm text-white lg:px-12 px-8 py-3 rounded-md transition-all duration-300 max-sm:hidden'>Login</button>
                    </div>
                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild className='lg:hidden'>
                            <Menu size={28} strokeWidth={1} />
                        </SheetTrigger>
                        <SheetContent className='max-xs:!w-full'>
                            <div className='flex flex-col gap-4 mt-8'>
                                <div className='flex max-sm:text-sm flex-col gap-1.5 w-full'>
                                    <label htmlFor="Search">Search</label>
                                    <div className='flex items-center text-sm gap-2 py-2 px-2 border border-slate-300 rounded-md'>
                                        <Search className='shrink-0' size={18} strokeWidth={1} />
                                        <input className='outline-none' type='text' />
                                    </div>
                                </div>
                                <Link className='max-sm:text-sm hover:text-primary transition-all duration-300' href={"/news"}>News & Guides</Link>
                                <div className='flex items-center justify-between mx-auto w-full sm:hidden'>
                                    <div className='flex items-center mx-0.5'>
                                        <Image src={notification_icon} alt='notification_icon' />
                                        <ChevronDown size={20} strokeWidth={1.5} />
                                    </div>
                                    <Image className='mx-3' src={star_icon} alt='star_icon' />
                                </div>
                                <button className='bg-secondary hover:bg-[#132d5e] sm:text-base text-sm text-white py-2 rounded-md transition-all duration-300'>Login</button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

export default Header