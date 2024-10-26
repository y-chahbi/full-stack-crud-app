import { useEffect } from "react";
import useNavigation from "./useNavigation";
import axios from "axios";

const useAlreadylogin = () => {
    const {navigateTo} = useNavigation();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            axios.post('/api/v1.02/auth/session',{token}
                ).then((res) => {
                    if (res.status == 401) {
                        localStorage.removeItem('token');
                        console.log("token removed!");
                    }
                    if (res.status == 200)
                        navigateTo('/dashboard');
                }).catch((error) => {
                    console.log(error);
                });
        } 
    },[]);

}

export default useAlreadylogin;