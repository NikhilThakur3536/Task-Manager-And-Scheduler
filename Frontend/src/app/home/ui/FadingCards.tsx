import { FadingCardsProps } from "@/data/Data"
import { motion } from "framer-motion"

export const FadingCards=({Opacity,delay, icon:Icon,content,heading,progress,y,bg}:FadingCardsProps)=>{
    return(
        <div className=" absolute flex flex-col z-12 w-[80%] h-full gap-6 top-20 ">
            <motion.div className=" flex w-full h-28 bg-white rounded-2xl drop-shadow-lg items-center"
                initial={{y:50, opacity:0}}
                animate={{y:y, opacity:Opacity}}
                transition={{duration:.5, delay:delay, ease:"easeInOut"}}
            >
            <div className={`${bg} w-16 h-16 flex justify-center items-center mx-4 my-2 rounded-3xl`}><Icon size={50} color="white"/></div>
                <div className="flex flex-col ml-6">
                    <h3 className="font-poppins font-semibold text-slate-900 text-3xl">{heading}</h3>
                    <h4 className="font-montserrat  text-slate-500 text-xl">{content}</h4>
                </div>
                <div className="ml-48 mr-2 w-44 h-10 flex justify-center items-center border border-yellow-500/40 bg-yellow-100 rounded-2xl"><h4 className="text-yellow-700 text-2xl">{progress}</h4></div>
            </motion.div>
        </div> 
    )

}