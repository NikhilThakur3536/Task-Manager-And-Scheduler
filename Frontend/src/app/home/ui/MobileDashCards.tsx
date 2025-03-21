"use client"

import { MobileDashCardsData } from "@/data/Data"
import { MobileDashCardsVariants } from "@/data/variants"
import { motion } from "framer-motion";

export const MobileDashCards=({icon:Icon,heading,content,text,variant,delay}:MobileDashCardsData & { variant?: keyof typeof MobileDashCardsVariants })=>{
    const styles=MobileDashCardsVariants[variant];
    return(
            <motion.div 
                className={` relative w-[90%] h-24 border ${styles.borderColor} rounded-xl`}
                initial={{scale:0,opacity:0}}
                animate={{opacity:1,scale:1}}
                transition={{duration:1,delay:delay,ease:"easeIn"}}
                whileHover={{scale:1.1}}
            >
                <div className={`felx flex-col ${styles.bgColor} h-full px-4`}>
                    <h3 className="font-poppins text-lg font-semibold">{heading}</h3>
                    <h4 className="font-muli text-2xl font-semibold">{content}</h4>
                    <h6 className="font-montserrat txt-lg text-slate-400">{text}</h6>
                </div>
                <div className={`absolute w-fit-content h-fit-content ${styles.iconBg} ${styles.iconColor} rounded-full px-2 py-2 left-72 top-4 transform translate-y-1 border ${styles.iconBorder}`}>
                    <Icon size={30}/>
                </div>
            </motion.div>
    )
}