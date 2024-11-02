"use client"

import Link from "next/link";
import { HiMenuAlt2 } from "react-icons/hi";
import localFont from 'next/font/local'
import { useState } from "react";
import { MobileMenu } from "./NavbarComponents/MobileMenu";
import { Menu } from "./NavbarComponents/Menu";
import { SignUp_Login } from "./NavbarComponents/SignUp_Login";

// Font files can be colocated inside of `pages`
const Mukta = localFont({ src: '../fonts/Mukta-Regular.ttf' })

const Navbar = () => {

    const [ShowMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <div className="md:w-full md:flex md:justify-center">
            <div className="Navbar bg-[var(----tertiary-second-color)] flex flex-row items-center justify-between px-4 py-4 border-b-[1px] border-[#2a42501f] md:w-[1200px]">
                <div className="Logo font-[${Mukta}] font-bold text-2xl text-[var(--primary-color)] md:w-1/6">
                    <Link href={"/"} rel={""}>Uploader</Link>
                </div>
                <div className={`Menu cursor-pointer md:hidden`} onClick={() => setShowMobileMenu(!ShowMobileMenu)}>
                    <HiMenuAlt2 size={32}/>
                </div>
                <div className="DesktopMenu hidden md:flex md:justify-between w-5/6 md:items-center">
                    <Menu />
                    <SignUp_Login/>
                </div>
                {ShowMobileMenu && <MobileMenu state={setShowMobileMenu}/>}
            </div>
        </div>
    );
}

export default Navbar;