'use client'

import { AboutSection } from "@/app/home/components/AboutSection";
import { FeatureSection } from "@/app/home/components/FeatureSection";
import { MainLeftSection } from "@/app/home/components/MainLeftSection";
import { MainSectionMobile } from "@/app/home/components/MainSectionMobile";
import { NavBar } from "@/app/home/components/NavBar";
import { PricingSection} from "@/app/home/components/PricingSection";
import { FadingCards } from "@/app/home/ui/FadingCards";
import { FadingCardsArray } from "@/data/Data";

const Layout = () => {
    return (
        <div className="relative w-screen h-screen bg-gray-100 overflow-x-hidden">
        <div className={`z-1 absolute inset-0 w-full h-[115vh] bg-[radial-gradient(circle,_#9ca3af_2px,_transparent_1px)] bg-[size:24px_24px] opacity-30`}></div>        
        <NavBar />
            <section className="w-screen h-[100vh] overflow-hidden">
                <div className="flex w-full h-[100vh] bg-gray-100 mt-4 overflow-hidden">
                    <MainLeftSection />
                    <div className="relative flex z-10 w-[50%] h-full"> 
                        {FadingCardsArray.map((item,index)=>(<FadingCards key={index} {...item}/>))}                       
                        <MainSectionMobile/>
                    </div>
                </div>
            </section>
            <section className=" bg-white flex flex-col w-screen h-[100vh]">
                <AboutSection/>
            </section>
            <section className="w-screen h-[200vh] flex flex-col bg-white justify-center items-center">
              <FeatureSection position={"left"}/>
              <FeatureSection position={"right"}/>  
            </section>
            <section className="relative w-screen h-[200vh]">
                <PricingSection/>

            </section>
        </div>
    );
};

export default Layout;
