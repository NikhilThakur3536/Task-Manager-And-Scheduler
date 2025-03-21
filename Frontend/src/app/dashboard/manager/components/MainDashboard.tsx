"use client"

import { InsightsCard } from "../ui/InsightsCard";
import { TittleSection } from "../ui/TittleSection";
import { InsightsDataArr } from "../data/data";

export const MainDashboard= () => {
    return(
        <div className="w-full h-full bg-gray-100/60 px-8">
            
            {/* Tittle */}

            <div className="flex flex-col px-2">
                
                <TittleSection/>
                <div className="flex gap-4 justify-between w-full">
                    {InsightsDataArr.map((items,index)=>(<InsightsCard key={index} {...items}/>))}
                </div>


            </div>
        </div>
    )
}