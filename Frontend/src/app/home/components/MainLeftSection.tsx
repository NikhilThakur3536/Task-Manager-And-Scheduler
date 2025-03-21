'use client';

import { ProgressBar } from "@/app/home/ui/ProgressBar";

export const MainLeftSection= ()=>{
    return(
        <div className=" flex justify-center items-center w-[50%] h-full bg-gray-100">
                        <div className="z-10 flex flex-col w-[70%] h-[99%] bg-white rounded-xl border-1 border-slate-100 drop-shadow-lg">
                            <ProgressBar duration={5} />
                            <div><h1 className="font-bold text-4xl font-poppins ml-8 mt-6">Supercharge Team’s<br/> Productivity,<br/>Simplify Task <br/>Management Today</h1></div>
                            <div>
                                <ul className=" font-k2d font-[500] text-lg text-slate-600 ml-8 mt-8">
                                    <li>✅ Role-Based Dashboards for Managers & Employees</li>
                                    <li>✅ Progress Tracking & Performance Insights</li>
                                    <li>✅ Gamification to Reward Top Performers</li>
                                    <li>✅ Seamless Leave Management & Tracking</li>
                                    <li>✅ Smart Task Prioritization & Automation</li>
                                </ul>
                            </div>
                            <div className="w-full h-auto flex ml-6 mt-8">
                                <button className=" w-[30%] h-[40px] bg-green-200 rounded-3xl border-2 drop-shadow-md"><span className="font-poppins font-[700] text-lg"> Get Started</span></button>
                            </div>
                        </div>
                    </div>

    )
}