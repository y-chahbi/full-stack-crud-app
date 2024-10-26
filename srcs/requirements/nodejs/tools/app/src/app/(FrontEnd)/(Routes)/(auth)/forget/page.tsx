"use client"

import React, { useState } from "react";
import ResetPage from "./ResetPage";
import ForgetPage from "./ForgetPage";

const Forget = () => {
    const [Page, setPage] = useState<boolean>(false);;

    console.log(Page);
    return (
        Page ? <ResetPage/> : <ForgetPage  setPage={setPage}/>
    );
}


export default Forget;













