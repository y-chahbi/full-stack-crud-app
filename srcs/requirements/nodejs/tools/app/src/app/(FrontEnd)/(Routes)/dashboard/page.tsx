"use client"

import { ReduxProvider } from "../../redux/featuers/provider";
import { useAppSelector } from "../../redux/store";


const dashboard = () => {
    const username = useAppSelector((state) => state.authReducer.value.username);
    return (
        <ReduxProvider>

            Welcom to Dashboard {username} 
        </ReduxProvider>
    );
}

export default dashboard;