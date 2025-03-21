"use client"

import { motion } from "framer-motion";
import { MobileTopBar } from "./MobileTopBar";
import { RadarChart } from "./RadarChart";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";



export const AnalyticsInsights = () => {
    return(
        <div className="flex flex-col">
            <div className="absolute -top-10"><MobileTopBar/></div>
            <motion.div className=" z-50 absolute flex  w-[42%] h-12 bg-gray-400/10 top-1/4 left-44 transform -translate-x-1  rounded-2xl border border-gray-300">
                <motion.div className="bg-gray-400/20 rounded-xl w-8 h-[32px] ml-2 my-2 border border-gray-300/50 group "
                    whileHover={{scale:1.2,backgroundColor:"rgb(0, 0, 0)"}}
                >
                    <HiOutlineSquare3Stack3D className="z-60 transform translate-x-1.5 translate-y-1.5 group-hover:text-white"  size={20}/>
                   
                </motion.div>
                <motion.div
                    initial={{scale:0}}
                    whileInView={{scale:1,}}
                    
                >
                    <h3 className="text-gray-900 z-60 ml-2 text-xl mt-2 font-semibold">Performance Insights</h3>
                </motion.div>
            </motion.div>
            <RadarChart/>
        </div>
    )
}