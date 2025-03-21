"use client"

import { motion } from "framer-motion"
import { useEffect,useState } from "react"
import { FaBrain } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { GrDeploy } from "react-icons/gr";

type ProgressBarIconProps={
    duration:number,
}

export const ProgressBar=({duration}:ProgressBarIconProps)=>{
    const [progress,setProgress]=useState(0);

    useEffect(()=>{
        const interval=setInterval(() => {
            setProgress((prev)=>{
                if(prev>=100){
                    return 0;
                } 
                return prev+25;
        });
        }, (duration*1000)/duration);

        return ()=>clearInterval(interval);
    },[])
    return(
            <div className="  relative flex w-[60%] h-[22px] bg-sky-100 mt-14 ml-8 rounded-xl ">
                <motion.div className="bg-rose-300 h-full rounded-xl"
                    initial={{width:0, rotate:0}}
                    animate={{width:`${progress}%`, rotate:360}}
                    transition={{duration:.5,ease:"linear"}}
                    >
                </motion.div>
                {progress<=25 && progress!=0 &&(
                    <div className="bg-black w-[42px] h-[42px] rounded-full -translate-y-12 -translate-x-2">
                        <FaBrain  className=" transform translate-y-1.5 translate-x-1.5 text-teal-400" size={30}/>                        
                    </div>
                )}
                {progress<=50 && progress>25 &&(
                    <div className="bg-black w-[42px] h-[42px] rounded-full -translate-y-12 -translate-x-2">
                        <IoCodeSlash className=" transform translate-y-1.5 translate-x-1.5" color="yellow" size={30}/>                        
                    </div>
                )}
                {progress<=75 && progress>50 &&(
                    <div className="bg-black w-[44px] h-[44px] rounded-full -translate-y-12 -translate-x-2">
                        <GrDeploy  className=" text-sky-400 transform translate-y-1.5 translate-x-1.5" size={30}/>                        
                    </div>
                )}
            </div>
    )
}