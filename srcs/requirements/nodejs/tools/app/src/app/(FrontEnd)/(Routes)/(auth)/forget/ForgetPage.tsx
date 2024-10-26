"use client"

import Link from "next/link";
import { useState } from "react";
import axios from 'axios';
import useAlreadylogin from "@/app/(FrontEnd)/components/useAlreadylogin";
import useNavigation from "@/app/(FrontEnd)/components/useNavigation";

interface ResetPageProps {
    setPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const ForgetPage: React.FC<ResetPageProps> = ({setPage}) => {

    // useAlreadylogin();
    // const {navigateTo} = useNavigation();


    const [auth2fa, setAuth2fa] = useState("");
    const [username, setUsername] = useState("");
    const [errors, setErrors] = useState<string[]>([]);

    const usernameRegex = /^[a-z]{6,}$/;
    const twoFactorAuthRegex = /^\d{6}$/;

    const HandelReset = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        const validationErrors: string[] = [];
        
        if (!usernameRegex.test(username)) {
            console.log("enter", username);
            validationErrors.push('Username Invalid');
        }
        
        if (!twoFactorAuthRegex.test(auth2fa)) {
            validationErrors.push('2FA Error!');
        }
        
        if (validationErrors.length > 0) {
            setErrors(prevState => validationErrors);
        } else {
            setErrors(prev => []);
            setPage((PrevState: boolean) => !PrevState);
        }
    }



    return (
        <div className="register page py-40 flex justify-center flex-col items-center">
            <div className="Erros flex justify-center">
                <ul className="flex justify-center flex-col list-disc mb-2">
                    {errors.map((item, index) => {return (<li key={index} className="text-red-600">{item}</li>)})}
                </ul>
            </div>
            <form className=" border-2 border-[rgb(0 0 0 / 12%)] flex rounded-md justify-center items-center flex-col px-20 py-10">
                <input onChange={(e) => setUsername(Prevstate => e.target.value)} className="border-2 p-2 w-60 my-2 outline-0" type="text" id="username" placeholder="Username"/>
                <input onChange={(e) => setAuth2fa(Prevstate => e.target.value)} className="border-2 p-2 w-60 my-2 outline-0" type="text" id="setAuth2fa" placeholder="2FA Code"/>
                <button onClick={HandelReset} className="p-2 bg-[var(--buttons-color)] text-white w-20 mt-4 rounded-sm"> Reset</button>
            </form>
        </div>
    );
}


export default ForgetPage;













