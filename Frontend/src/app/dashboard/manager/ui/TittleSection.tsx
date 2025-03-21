"use client"

import { useState,useEffect } from "react"
import { RandomTextArr } from "../data/data"
import { motion } from "framer-motion"

export const TittleSection = () => {

    const [currentText,setCurrentText]=useState<string>(RandomTextArr[0])

    useEffect(()=>{
        const interval=setInterval(()=>{
            const randomText=Math.floor(Math.random()*RandomTextArr.length);
            setCurrentText(RandomTextArr[randomText])
        },2000);
        return()=>clearInterval(interval)
    },[]);

    return (
        <div className=" w-full h-24 py-3 px-4">
            <h1 className="text-3xl font-muli font-semibold text-slate-600">Heading</h1>
            <motion.h3 className="text-lg font-muli text-slate-400"
                key={currentText}
                initial={{opacity:0,y:5}}
                animate={{opacity:1,y:0}}
                exit={{opacity:0,y:-5}}
                transition={{duration:.5,ease:"easeInOut"}}
            >
                {currentText}
            </motion.h3>
        </div>
    )
}