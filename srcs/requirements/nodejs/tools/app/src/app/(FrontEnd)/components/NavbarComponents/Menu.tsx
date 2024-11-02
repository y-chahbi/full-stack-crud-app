import Link from 'next/link'
import React, { useState } from 'react'
import { RiArrowDropDownFill } from "react-icons/ri";
import { RiArrowDropUpFill } from "react-icons/ri";
import { SiFireship } from "react-icons/si";
import { GiBackwardTime } from "react-icons/gi";



export const Menu = () => {

    const [Drop, setDrop] = useState(false);
    return (
        <div className={`Menu text-l font-semibold md:flex md:flex-row md:items-center `}>
            <div className='mt-3 md:ml-6 Community_Feed flex flex-row items-center cursor-pointer'
                onClick={() => setDrop(!Drop)}>Community Feed <span>
                    {!Drop ? <RiArrowDropDownFill size={28}/> : <RiArrowDropUpFill size={28}/> }</span></div>
            {Drop && <div className='md:absolute md:top-16 md:bg-white md:border-[1px] md:border-black md:border-opacity-10 md:rounded-md md:py-4 md:px-4'>
                <Link href={"/about-us"}><div className='mt-3 md:mt-0 Recent flex flex-row items-center'><GiBackwardTime /><span className='ml-2'>Recent Images</span></div></Link>
                <Link href={"/about-us"}><div className='mt-3 Traending  flex flex-row items-center'><SiFireship /><span className='ml-2'>Trending Images</span></div></Link>
            </div>}
            <div className='mt-3 md:ml-6 About ' ><Link href={"/about-us"}> About Us</Link></div>
            <div className='mt-3 md:ml-6 API ' ><Link href={"/api"}>API</Link></div>
            <div className='mt-3 md:ml-6 Contact' ><Link href={"/contact-us"}>Contact Us</Link></div>
        </div>
    )
}
