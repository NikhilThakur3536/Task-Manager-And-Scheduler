"use client"

import Image from "next/image"
import { CiBatteryFull } from "react-icons/ci"
import { FaSignal, FaWifi } from "react-icons/fa6"
import { IoMdSearch } from "react-icons/io";
import { AboutSectionMobileChart } from "./Chart";


export const AboutSectionMobile=()=>{
    return(
        <div>
            <Image className=" absolute z-20 ml-8 transform -translate-y-20" src="/images/aboutsectionmobile.png" width={403} height={700} alt="mobile"/>
            <div className="z-30 absolute flex justify-between w-[348px] h-fit-content py-2 rounded-t-4xl left-14 top-14 transform translate-x-3 -translate-y-1">
                <div className="font-poppins text-xl font-semibold text-black ml-6 transform -translate-y-1">
                    9:14
                </div>
                <div className=" flex gap-1 justiy-between pr-10">
                    <FaSignal color="black" size={20}/>
                    <FaWifi color="black" size={20}/>
                    <CiBatteryFull color="black" size={20}/>
                </div>
            </div>
            <div className="absolute flex flex-col items-center z-50 w-[344px] h-[500px] bg-white left-18 top-28 transform translate-x-16 rounded-4xl">
                <div className=" flex justify-around w-[90%] h-[35px] rounded-xl bg-slate-100 border border-slate-300">
                    <input placeholder="Search here" type="text" className=" outline-none bg-slate-100/20 text-black placeholder:text-black border border-slate-300 my-1 pl-8 rounded-lg"/>
                    <div className="w-[32px] h-[30px] p-1 rounded-xl bg-slate-100 transofrm translate-y-[1.5px] border border-slate-300"><IoMdSearch color="black" size={20} className=""/></div>
                </div>
                <div className="w-fit-content h-fit-content p-2  bg-white drop-shadow-lg mt-8 border border-slate-300 rounded-lg"><AboutSectionMobileChart/></div>

            </div>
        </div>
    )
}