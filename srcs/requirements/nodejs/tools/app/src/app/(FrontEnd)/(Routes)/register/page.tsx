"use client"

import Link from "next/link";
import { useState } from "react";
import axios from 'axios';
import useNavigation from "../../components/useNavigation";


const Register = () => {

    const {navigateTo} = useNavigation();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [accept, setAccept] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);

    const usernameRegex = /^[a-z]{6,}$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

    const HandelRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        const validationErrors: string[] = [];
        
        if (!usernameRegex.test(username)) {
            console.log("enter", username);
            validationErrors.push('Username Invalid');
        }
        
        if (!emailRegex.test(email)) {
            validationErrors.push('Email is not valid.');
        }
    
        if (!strongPasswordRegex.test(password)) {
          validationErrors.push('Password must be strong');
        }
    
        if (accept == false) {
            validationErrors.push('Accept the terms');
        }
        
        if (validationErrors.length > 0) {
            setErrors(prevState => validationErrors);
        } else {
            setErrors(prev => []);

            try {
                const response = await axios.post('/api/v1.02/auth/register', {
                    username,
                    email,
                    password,
                    accept
                });
                console.log("Response Status is : ", response.status);
                if (response.data.success) {
                    localStorage.setItem('token', response.data.token);
                    navigateTo('/dashboard');
                } else {
                    setErrors(response.data.errors);
                }
            } catch (error) {
                if (axios.isAxiosError(error) && error.response) {
                    setErrors([error.response.data.errors.join(', ')]);
                } else {
                    setErrors(['An unexpected error occurred.']);
                }
            }
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
                <input onChange={(e) => setEmail(Prevstate => e.target.value)} className="border-2 p-2 w-60 my-2 outline-0" type="text" id="email" placeholder="Email"/>
                <input onChange={(e) => setPassword(Prevstate => e.target.value)} className="border-2 p-2 w-60 my-2  outline-0" type="password" id="password" placeholder="Password"/>
                <div className="AceptTerms my-3">
                    <input onChange={() => setAccept(Prevstate => !Prevstate)} type="checkbox" id="Agree" name="checkbox"></input>
                    <label htmlFor="Agree"> <Link href={"/policy"}>I Agree on terms and Policy</Link></label>
                </div>
                <button onClick={HandelRegister} className="p-2 bg-[var(--buttons-color)] text-white w-20 mt-4 rounded-sm"> Register</button>
            </form>
        </div>
    );
}


export default Register;