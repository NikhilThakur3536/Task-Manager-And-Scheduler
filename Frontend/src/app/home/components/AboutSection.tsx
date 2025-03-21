import { AboutContentCards } from "@/app/home/ui/AboutContentCards"
import { SectionHeadingBUtton } from "@/app/home/ui/SectionHeadingButton"
import { ContentData } from "@/data/Data";
import { AboutSectionMobile } from "@/app/home/ui/AboutSectionMObile";
import { BarChart } from "@/app/home/ui/Chart";
import { motion } from "framer-motion";


export const AboutSection=()=>{
    return(<>
                <div className=" flex items-center justify-center mt-2">
                    <SectionHeadingBUtton Heading={"About"}/>
                </div>
                <div className=" mt-2 flex justify-center items-center">
                    <h2 className=" font-poppins text-4xl font-[700]">Get Your Work Done In A Flow</h2>
                </div>
                <div className=" flex items-center justify-center w-full h-[55%] mt-4">
                    <div className=" relative flex w-[80%] h-full bg-slate-100 rounded-lg border border-slate-400/30 overflow-hidden ">
                    <div className="z-10 absolute inset-0 w-full h-full bg-[radial-gradient(circle,_#9ca3af_1px,_transparent_1px)] bg-[size:14px_14px] opacity-30"></div>        
                    <AboutSectionMobile/>
                    <motion.div className="absolute z-20 w-[50%] h-[90%] my-4 ml-[550px] bg-white rounded-3xl p-4 drop-shadow-xl border border-slate-300"
                        initial={{y:0}}
                        animate={{y:[0,10,0]}}
                        transition={{duration:6,repeat:Infinity, ease:"easeInOut"}}        
                    >
                        <BarChart/>
                    </motion.div>
                    </div>
                </div>
                <div className=" w-screen h-[30%] flex justify-center my-4 drop-shadow-lg">
                    <div className="flex justify-around w-[80%]">
                    {ContentData.map((content,index)=>(<AboutContentCards key={index} {...content} />))}
                    </div>

                </div>
            </>
    )
}