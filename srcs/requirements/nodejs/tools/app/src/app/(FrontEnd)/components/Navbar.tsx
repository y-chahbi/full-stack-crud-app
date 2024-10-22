import Link from "next/link";
import { FaUserPlus } from "react-icons/fa";
import localFont from 'next/font/local'

// Font files can be colocated inside of `pages`
const Mukta = localFont({ src: '../fonts/Mukta-Regular.ttf' })
 

const Navbar = () => {
    return (
        <div className={`Navbar w-full h-20 bg-[var(--primary-color)] flex items-center justify-between ${Mukta}`}>
            <div className="LogoSide w-0 hidden text-[var(--tertiary-color)]">Logo</div>
            <div className="LoginSide w-full text-[var(--tertiary-color)] flex justify-between items-center px-8">
                <div className="Login">
                    <Link href={"/login"} >Login</Link>
                </div>
                <div className="Register">
                    <Link className='bg-[var(--buttons-color)] p-4 flex items-center' href={"/register"} >
                        <FaUserPlus className="size-6 mr-2" /> {" Register"}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;