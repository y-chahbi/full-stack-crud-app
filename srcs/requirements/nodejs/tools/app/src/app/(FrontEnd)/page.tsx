"use client"

import { jwtDecode, JwtPayload }  from "jwt-decode";
import  { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { logIn } from './redux/featuers/auth-slice';
import { AppDispatch } from './redux/store';
import { UploadSection } from "./components/UploadSection";

interface CustomJwtPayload extends JwtPayload {
    username?: string;
}





export default function Home() {
    const distpatch = useDispatch<AppDispatch>();
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if  (token) {
            const decoded = jwtDecode<CustomJwtPayload>(token);
            console.log("decoded username : ", decoded.username);
            if (decoded.username)
                distpatch(logIn(decoded.username));
        }
        
    }, []);
    return (
        <div className="Home bg-[var(--tertiary-second-color)]">
            <UploadSection/>
        </div>
    );
}