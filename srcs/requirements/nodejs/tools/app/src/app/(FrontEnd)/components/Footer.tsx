import Link from "next/link";
import { Links } from "./FooterComponents/Links";
import { CopyRights } from "./FooterComponents/CopyRights";

const Footer = () => {
    return (
        <div className="Footer">
            <Links/>
            <CopyRights/>
        </div>
    );
}

export default Footer;