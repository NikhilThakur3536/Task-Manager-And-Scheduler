"use client";

import { MainDashboard } from "./components/MainDashboard";
import { NavBar } from "./components/NavBar";
import { useState } from "react";

const Manager = () => {
    const [isFull, setIsFull] = useState<boolean>(true);

    return (
        <div className="flex w-screen h-screen transition-all duration-300">
            <div className={`${isFull ? "w-[18%]" : "w-[6%]"} h-full bg-white border border-gray-300 transition-all duration-300`}>
                <NavBar isFull={isFull} setIsFull={setIsFull} />
            </div>
            <div className={`${isFull ? "w-[82%]" : "w-[94%]"} h-full transition-all duration-300`}>
                <MainDashboard />
            </div>
        </div>
    );
};

export default Manager;
