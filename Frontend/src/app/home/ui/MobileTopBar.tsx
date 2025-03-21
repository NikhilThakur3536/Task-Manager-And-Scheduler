import { BsBatteryFull } from "react-icons/bs";
import { FaSignal } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa6";
import { motion } from "framer-motion";

export const MobileTopBar = () => {
    return(
        <motion.div className=" absolute z-40 flex justify-between w-[262px] h-10 left-40 top-14 transform translate-x-2 translate-y-10  rounded-t-2xl"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:.3,delay:.5}}
        >
            <div className="">
                    <h4 className="font-bold transform translate-x-3/4 translate-y-1">9:14</h4>
            </div>
                <div className="flex transform -translate-x-4 translate-y-2 gap-1"
                    
                >
                    <FaSignal size={16}/>
                    <FaWifi size={16}/>
                    <BsBatteryFull size={16}/>
                </div>
        </motion.div>
    )
}