"use client";

import { NavBarTabs } from "../ui/NavBarTabs";
import { NavBarTabsMainMenuData, NavBarTabsProjectsData, NavBarTabsSettingData } from "../data/data";
import { NavBarSettingSection } from "../ui/NavBarSettingSection";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { motion } from "framer-motion";

type Props = {
    isFull: boolean;
    setIsFull: (bol: boolean) => void;
};

export const NavBar = ({ isFull, setIsFull, }: Props) => {
    return (
        <div className={`flex flex-col w-full h-full bg-white gap-1 transition-all duration-300 gap-2`}>
            
            {/* Navbar Header */}

            <div className="flex w-full h-16 items-center justify-between">
                <h2 className={`font-muli font-semibold text-4xl pl-6 transition-all duration-300 ${!isFull && "hidden"}`}>
                    Monday
                </h2>

                {/* Toggle Button */}

                <div 
                    className={`p-1 rounded-xl bg-gray-100 ${isFull?"mr-6":"ml-6"} border border-gray-300 hover:bg-[rgba(27,114,245,0.32)] cursor-pointer`}
                    onClick={() => setIsFull(!isFull)}
                >
                    {isFull ? (
                        <FaAngleDoubleLeft className="text-gray-600 hover:text-sky-900" size={30} />
                    ) : (
                        <FaAngleDoubleRight className="text-gray-600 pl-1 hover:text-sky-900" size={30} />
                    )}
                </div>
            </div>
            <div className="w-full h-38">
                <h3 className={`font-muli text-lg ml-10 mt-4 transition-all duration-300 ${!isFull && "hidden"}`}>
                    Main Menu
                </h3>
                {NavBarTabsMainMenuData.map((items, index) => (
                    <NavBarTabs key={index} {...items} isFull={isFull}/>
                ))}
                <hr className="w-[80%] text-black rounded-2xl mx-4 mt-1" />
            </div>

            {/* Projects List */}

            <div className="w-full h-46 ">
                <h3 className={`font-muli text-lg ml-10 mt-4 transition-all duration-300 ${!isFull && "hidden"}`}>
                    Projects
                </h3>
                {NavBarTabsProjectsData.map((items, index) => (
                    <NavBarTabs key={index} {...items} isFull={isFull}/>
                ))}
                <hr className="w-[80%] text-black rounded-2xl mx-4 mt-1" />
            </div>

            {/* Settings Section */}

            <div className="flex flex-col w-full h-[5%]">
                {NavBarTabsSettingData.map((items, index) => (
                    <NavBarSettingSection key={index} {...items} isFull={isFull}/>
                ))}
            </div>
        </div>
    );
};
