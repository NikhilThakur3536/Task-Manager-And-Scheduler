"use client"

import { motion } from "framer-motion";
import { InsightsCardProps } from "../data/data";
import { useState,useEffect } from "react";

export const InsightsCard = ({heading,data,insights,icon:Icon,backgroundColor,iconColor}:InsightsCardProps) => {
    
    const [deg,setDeg]=useState<number>(0)

    useEffect(()=>{
        const deg=0;
        const interval =setInterval(()=>{
            setDeg(prev=>(prev+30)%360);
        },300)
        return ()=>clearInterval(interval)
    },[])
    
    return (
        <div className="relative "> 
            <motion.div className="md: z-10 relative flex flex-col w-72 h-36 rounded-lg border border-gray-300 bg-white py-4 px-2"
                whileHover={{ boxShadow: "0px 3px 2px rgba(105, 104, 104, 0.2)",rotateX:2,rotateZ:2,rotateY:2 }}
            >
                <h2 className="md:font-muli text-xl text-gray-600 font-semibold mt-1    ml-2">
                    {heading}
                </h2>   
                <h3 className="md:font-muli text-4xl text-gray-500 font-bold ml-2 mt-1">
                    {data}
                </h3>
                <h3 className="md:font-muli text-xl text-gray-600 font-semibold mt-1 ml-2">
                    {insights}
                </h3>
                <div className={`absolute md:w-fit-content h-fit-content p-2 rounded-xl ${backgroundColor} right-6 top-10`}>
                    <Icon className={`${iconColor}`} size={50}/>
                </div>
                
            </motion.div>
            <div className={`absolute w-62 h-38 rounded-lg -inset-[1px] `}
                style={{
                    background: `conic-gradient(from ${deg}deg at 50% 50%, red 0%, yellow 25%, green 50%, blue 75%, red 100%)`
                  }}
            />
        </div>
    )
}