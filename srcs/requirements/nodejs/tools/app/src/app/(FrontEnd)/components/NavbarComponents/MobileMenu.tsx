import React from 'react'
import { GrClose } from "react-icons/gr";
import { SignUp_Login } from './SignUp_Login';
import { Menu } from './Menu';


export const MobileMenu = ({state}: any) => {
    return (
        <div className='MobileMenu bg-[black] bg-opacity-30 w-screen h-screen fixed right-0 top-0'>
            <div className='container-menu bg-[white] w-11/12 h-screen'>
                <div className='Close text-black flex justify-end p-4'>
                    <div className='close cursor-pointer' onClick={() => {state((prevState: any) => !prevState)}}><GrClose size={28}/></div>
                </div>
                <div className='SignDetails px-4'>
                    <SignUp_Login/>
                </div>
                <div className='Border my-9 pb-11 border-t-2 border-b-2 border-black border-opacity-10'>
                    <div className='Menu px-4'>
                        <Menu/>
                    </div>
                </div>
            </div>
        </div>
    )
}
