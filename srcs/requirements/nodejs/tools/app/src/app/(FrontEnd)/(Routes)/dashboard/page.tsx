"use client"



import { jwtDecode, JwtPayload }  from "jwt-decode";
import { logIn, logOut } from "../../redux/featuers/auth-slice";
import  { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useEffect } from 'react';

interface CustomJwtPayload extends JwtPayload {
    username?: string;
}

const dashboard = () => {
    
    const distpatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if  (token) {
            const decoded = jwtDecode<CustomJwtPayload>(token);
            if (decoded.username)
                distpatch(logIn(decoded.username));
        }
        
    }, []);

    
    return (<>
        Welcom to Dashboard
    </>);
}

export default dashboard;