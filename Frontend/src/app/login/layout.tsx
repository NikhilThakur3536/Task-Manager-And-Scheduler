"use client"

import { useState } from "react";
import { Login } from "./components/Login";
import { RoleSelection } from "./components/RoleSelection";


const LoginLayout= () => {
    
    const [visible,setVisible]= useState<boolean>(false)

    return(
        <>
        {visible ?(<RoleSelection/>):<Login onSubmit={setVisible}/>}
        </>
    )
}

export default LoginLayout;

