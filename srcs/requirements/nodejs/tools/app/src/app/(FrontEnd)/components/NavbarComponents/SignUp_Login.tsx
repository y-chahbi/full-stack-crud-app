import React from 'react'
import { PiSignInThin } from "react-icons/pi";
import { HiUserAdd } from "react-icons/hi";
import Link from 'next/link';




export const SignUp_Login = () => {
    return (
        <div className={`text-black flex flex-col md:flex-row md:items-center`}>
            <Link href={"/signin"} rel={""} className='border-2 md:mr-4 rounded-md border-[var(--primary-color)] p-3 md:p-2 text-[var(--primary-color)]'>
                <div className='SignIn flex flex-row items-center justify-center'>
                    <PiSignInThin size={22}/>
                    <span className='ml-1'>Sign in</span>
                </div>
            </Link>
            <Link href={"/register"} rel={""} className='mt-2 md:mt-0 rounded-md bg-[var(--primary-color)] p-3 md:p-2 text-[white]'>
                <div className='SignUp flex flex-row items-center justify-center'>
                        <HiUserAdd size={22}/>
                        <span className='ml-1'>Create Account</span>
                </div>
            </Link>
        </div>
    )
}
