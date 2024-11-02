import localFont from 'next/font/local'
import Link from 'next/link'
import React from 'react'
const Mukta = localFont({ src: '../../fonts/Mukta-Regular.ttf' })

export const Links = () => {
  return (
    <div className='border-t-2 border-black border-opacity-10 flex flex-col text-center'>
        <div className={`Logo font-[${Mukta}] font-bold text-2xl text-[var(--primary-color)] my-6`}>
            <Link href={"/"} rel={""}>Uploader</Link>
        </div>
        <div className='Links '>
            <ul className='flex flex-col md:flex-row justify-center'>
                <li className="p-2 font-medium"><Link href={""}>HEIC to JPG</Link></li>
                <li className="p-2 font-medium"><Link href={""}>Disclaimer</Link></li>
                <li className="p-2 font-medium"><Link href={""}>Terms of Service</Link></li>
                <li className="p-2 font-medium"><Link href={""}>Privacy Policy</Link></li>
                <li className="p-2 font-medium"><Link href={""}>Contact Us</Link></li>
                <li className="p-2 font-medium"><Link href={""}>FAQ</Link></li>
                <li className="p-2 font-medium"><Link href={""}>Blogs</Link></li>
                <li className="p-2 font-medium"><Link href={""}>API</Link></li>
            </ul>
        </div>
        <div className='FilesCount my-6 font-bold'>
            Files Count: <span className='text-lg'>564372</span>
        </div>
    </div>
  )
}
