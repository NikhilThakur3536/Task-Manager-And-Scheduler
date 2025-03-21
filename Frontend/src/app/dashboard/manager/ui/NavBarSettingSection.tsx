"use client";

import { NavBarTabsProps } from "../data/data";

export const NavBarSettingSection = ({ Tab, icon: Icon,isFull }: NavBarTabsProps) => {
    
    const isLogout = Tab === "Logout";

    return (
        <div className="relative flex flex-col w-full h-12">
            <div className="flex w-full h-full pl-8 mt-8 rounded-xl cursor-pointer transform translate-x-[-5px]">
                <Icon className={`absolute transform translate-y-2 ${isLogout ? "text-red-600" : ""}`} size={30} />
                {isFull&&
                    <span className={`p-2 pl-10 font-muli text-2xl ${isLogout ? "text-red-600" : ""}`}>
                        {Tab}
                    </span>}
            </div>
        </div>
    );
};
