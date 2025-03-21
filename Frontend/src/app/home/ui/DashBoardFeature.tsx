"use client"

import { FeatureMobiDashData } from "../data/data";
import { BarChart } from "./Chart";
import { FeatureMobiDash } from "./FeatureMobiDash";
import { motion } from "framer-motion";
import { MobileTopBar } from "./MobileTopBar";

export const DashBoardFeature = () => {
    return (
        <>
            <MobileTopBar />
            <div className="absolute w-[260px] grid grid-cols-2 z-50 ml-28 transform translate-x-14 translate-y-32 p-1 gap-2">
                {FeatureMobiDashData.map((props, index) => (
                    <div className="gap-0" key={index}>
                        <FeatureMobiDash {...props} />
                    </div>
                ))}
            </div>
            <motion.div
                className="absolute z-50 w-[40%] h-[40%] bg-white rounded-xl top-[300px] left-44 transform translate-x-6 translate-8"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 360, opacity: 1 }}
                transition={{ duration: 0.3, bounce: 100, delay:.5 }}
            >
                <BarChart />
            </motion.div>
        </>
    );
};
