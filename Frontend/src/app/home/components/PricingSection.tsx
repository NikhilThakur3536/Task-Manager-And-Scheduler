"use client"

import { GridBG } from "@/app/home/ui/GridBG"
import { PricingCards } from "@/app/home/ui/PricingCards"
import { SectionHeadingBUtton } from "@/app/home/ui/SectionHeadingButton"
import { pricingData} from "@/data/Data"

export const PricingSection=()=>{
    return(
        <div className="flex flex-col items-center">
            <GridBG size="24px_24px" radius="2px"/>
            <div className="z-10 w-[5%] flex justify-center items-center mt-4">
                <SectionHeadingBUtton Heading="Price"/>
            </div>
            <h2 className="z-10 font-poppins text-6xl font-semibold mt-4">Flexible Plants to Suit Every Need.</h2>
            <h3 className="font-montserrat text-md font-semibold mt-8 text-gray-500">Track Your Team's Progress In Real-Time With Easy-To-Read Visuals</h3>
            <div className="flex justify-around w-[80%] h-[30%] mt-10">
                {pricingData.map((plan,index)=>(<PricingCards key={index} {...plan}/>))}
            </div>
        </div>
    )
}