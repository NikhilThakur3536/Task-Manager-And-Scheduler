'use client'

import { SectionHeadingBUtton } from "@/app/home/ui/SectionHeadingButton"
import { DashBoardFeature } from "../ui/DashBoardFeature"
import { AnalyticsInsights } from "../ui/Analytics&Insights"
import { motion } from "framer-motion"

type props={
    position: "left"|"right"
}

export const FeatureSection=({position}:props)=>{
    return(
        <>{ position==="left"?
      <div className="w-[80%] h-[60%] flex mt-8">
        <div className=" flex flex-col w-[50%] mt-12 ">
                <div className="w-[20%] flex justify-center items-center mb-2"><SectionHeadingBUtton Heading={"Feature"}/></div>
          <h2 className="w-[60%] text-5xl font-poppins font-lg font-[400]">Task Dashboard</h2>
                <p className="w-[80%] mt-6 font-poppins text-lg text-gray-600">Stay on top of your productivity with a sleek and intuitive task dashboard! Track your progress, manage tasks efficiently, and visualize your workflow with real-time insights. Whether it's front-end, back-end, pending, or completed tasks, everything is organized at your fingertips.</p>
        </div>
        <div className="relative w-[50%] h-[60%] bg-slate-100 border border-slate-300/60 rounded-xl overflow-hidden">
          <div className={`z-1 absolute inset-0 w-full h-full bg-[radial-gradient(circle,_#9ca3af_1px,_transparent_1px)] bg-[size:14px_14px] opacity-30`}></div>
          <div className=" overflow-hidden">
            <motion.img className="absolute z-40 ml-[150px] transform " src="/images/aboutsectionmobile.png" width={300} height={300} alt="dashboard"
                    initial={{y:400,opacity:0}}
                    whileInView={{y:0,opacity:1}}
                    transition={{duration:.5, ease:"easeOut"}}
            />
          </div>
                <DashBoardFeature/>
        </div>
        </div>:
      <div className="w-[80%] h-[60%] flex">
        <div className="relative w-[50%] h-[60%] bg-slate-100 border border-slate-300/60 rounded-xl">
          <div className={`z-1 absolute inset-0 w-full h-full bg-[radial-gradient(circle,_#9ca3af_1px,_transparent_1px)] bg-[size:14px_14px] opacity-30`}></div>
          <div className="overflow-hidden">
                    <img className="absolute z-40 transform translate-x-1/2 -translate-y-10" src="/images/aboutsectionmobile.png" width={300} height={200} alt="dashboard"/>
          </div>
                <AnalyticsInsights/>        
        </div>
        <div className=" flex flex-col  w-[50%] mt-12 ">
                <div className="w-[20%] flex items-center justify-center self-end mb-2"><SectionHeadingBUtton Heading={"Feature"}/></div>
          <h2 className="w-[80%] text-5xl font-poppins font-lg self-end text-right font-[400]">Analytics &amp; Insights</h2>
          <p className="w-[80%] mt-6 font-poppins text-left self-end text-lg text-gray-600">Unlock the power of data-driven decision-making! Gain deep insights into your performance with advanced analytics. Visualize strengths, track progress, and optimize efficiency with detailed charts and performance metrics designed to help you improve every step of the way.</p>
        </div>
      </div>}
    </>

  )
}
