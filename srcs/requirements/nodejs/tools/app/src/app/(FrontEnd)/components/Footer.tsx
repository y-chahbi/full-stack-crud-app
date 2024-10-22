import Link from "next/link";

const Footer = () => {
    return (
        <div className="footer w-full flex flex-col">
            <div className="Rights text-sm flex justify-center text-[var(--buttons-color)] opacity-50">
                Powered By Ychahbi All Rights Reserved
            </div>
            <div className="Pages mt-2 flex justify-center">
                <ul className="flex flex-row font-semibold">
                    <li className="mx-1"> <Link href={"/about"}>About us</Link></li>
                    - <li className="mx-1"> <Link href={"/contact"}>Contact Us</Link></li> -
                    <li className="mx-1"> <Link href={"/policy"}>Privacy Policy</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;