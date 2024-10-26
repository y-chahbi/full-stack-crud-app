"use client"

import Link from "next/link";
import { useState } from "react";
import axios from 'axios';
import useAlreadylogin from "@/app/(FrontEnd)/components/useAlreadylogin";
import useNavigation from "@/app/(FrontEnd)/components/useNavigation";



const ResetPage = () => {

    useAlreadylogin();
    const {navigateTo} = useNavigation();


    const [SecondPassword, setSecondPassword] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<string[]>([]);

    const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;


    const HandelReset = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("hello");
        const validationErrors: string[] = [];
        
        if (!strongPasswordRegex.test(password)) {
            validationErrors.push('Password Weak!');
        }
        
        if (!strongPasswordRegex.test(SecondPassword)) {
            validationErrors.push('Password Not The Same');
        }
        
        if (SecondPassword != password) {
            validationErrors.push('Password Not The Same');
        }

        if (validationErrors.length > 0) {
            setErrors(prevState => validationErrors);
        } else {
            setErrors(prev => []);
            // try {
            //     const response = await axios.post('/api/v1.02/auth/register', {
            //         username,
            //         email,
            //         password,
            //         accept
            //     });
            //     if (response.data.success) {
            //         localStorage.setItem('token', response.data.token);
                    navigateTo('/dashboard');
            //     } else {
            //         setErrors(response.data.errors);
            //     }
            // } catch (error) {
            //     if (axios.isAxiosError(error) && error.response) {
            //         setErrors([error.response.data.errors.join(', ')]);
            //     } else {
            //         setErrors(['An unexpected error occurred.']);
            //     }
            // }
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
                <input onChange={(e) => setSecondPassword(Prevstate => e.target.value)} className="border-2 p-2 w-60 my-2 outline-0" type="password" id="password" placeholder="Password"/>
                <input onChange={(e) => setPassword(Prevstate => e.target.value)} className="border-2 p-2 w-60 my-2 outline-0" type="password" id="SecondPasswd" placeholder="Repeat Password"/>
                <button onClick={HandelReset} className="p-2 bg-[var(--buttons-color)] text-white w-20 mt-4 rounded-sm"> Change</button>
            </form>
        </div>
    );
}


export default ResetPage;













