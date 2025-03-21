"use client"

import { MobileNavBarIcons } from "@/app/home/ui/MobileNavBarIcons";
import Image from "next/image"
import { iconArr } from "@/data/Data";
import { FaSignal } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { CiBatteryFull } from "react-icons/ci";
import { MobileDashCards } from "@/app/home/ui/MobileDashCards";
import { MobileDashCardsDatAarr } from "@/data/Data";
import { motion } from "framer-motion";





export const MainSectionMobile=()=>{
    return(
        <>
        <div className=" absolute z-30 w-[50%] flex flex-col justify-between top-48 left-36 transform translate-y-1.5 -translate-x-2">
            <div className="flex w-full justify-between">
                <div className="font-poppins text-xl font-semibold text-black ml-6">
                    9:14
                </div>
                <div className=" flex gap-1 justiy-between pr-10">
                    <FaSignal color="black" size={20}/>
                    <FaWifi color="black" size={20}/>
                    <CiBatteryFull color="black" size={20}/>
                </div>
            </div>
            <div className=" flex flex-col content-center mt-8 w-full transform translate-x-1 gap-4">
                {MobileDashCardsDatAarr.map((items,index)=>(<MobileDashCards key={index} {...items}/>))}
            </div>
        </div>
        <div className="z-20 h-[100vh] ml-12 transform translate-x-4 -translate-y-8">
            <Image src='/images/longmobile.png' alt="right section image" width={500} height={100} />
        </div>
        <motion.div 
            className=" z-30 bottom-10 left-32 transform translate-x-4 z-21 absolute bg-black w-[45%] h-[50px] rounded-3xl flex justify-around gap-2"
            initial={{opacity:0}}
            animate={{opacity:1}}
        >
            {iconArr.map((icon,index)=>(<MobileNavBarIcons  key={index} {...icon}/>))} 
        </motion.div>
        </>
    )
}