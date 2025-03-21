"use client";

import { useState } from "react";
import { RoleComponent } from "./RoleComponent";
import { RolesData } from "../data/RolesData";

export const RoleSelection = () => {
    const [selectedRole, setSelectedRole] = useState<string | null>(null);

    const handleRoleSelect = (role: string | null) => {
        setSelectedRole(role);
        console.log(selectedRole)
    };

    return (
        <div className="flex justify-center items-center bg-black w-screen h-screen">
            <div className="z-10 absolute inset-0 w-full h-full bg-[radial-gradient(circle,_#9ca3af_1px,_transparent_1px)] bg-[size:14px_14px] opacity-30"></div>        
            <div className="z-20 flex flex-col items-center w-[80%] h-[90%] bg-white rounded-2xl">
                <div>
                    <h2 className="font-k2d text-6xl font-bold mt-4 mb-4">Select Your Role</h2>
                </div>
                <div className="z-20 h-full w-full grid grid-row-4 grid-cols-3 place-items-center gap-x-0">
                    {RolesData.map((items, index) => (
                        <RoleComponent key={index} role={items.role} onRoleSelect={handleRoleSelect} selectedRole={selectedRole} />    
                    ))}
                </div>
            </div>
        </div>
    );
};