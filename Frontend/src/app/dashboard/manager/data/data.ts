import { IconType } from "react-icons";
import { MdDashboard } from "react-icons/md";
import { IoAirplane, IoChatboxEllipses } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaProjectDiagram } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";



export type InsightsCardProps={
    heading:string,
    data:number,
    insights:string,
    icon:IconType,
    iconColor:string,
    backgroundColor:string,
}

export type NavBarTabsProps={
    Tab:string,
    icon:IconType,
    isFull?:boolean,
}

export const NavBarTabsMainMenuData:NavBarTabsProps[]=[
    {
        Tab:"Dashboard",
        icon:MdDashboard,
        
    },
    {
        Tab:"Tasks",
        icon:FaTasks,
    },
    {
        Tab:"Team",
        icon:RiTeamFill,
    },
    {
        Tab:"Chat",
        icon:IoChatboxEllipses,
    },
]


export const NavBarTabsProjectsData:NavBarTabsProps[]=[
    {
        Tab:"Project1",
        icon:FaProjectDiagram,
    },
    {
        Tab:"Project1",
        icon:FaProjectDiagram,
    },
    {
        Tab:"Project1",
        icon:FaProjectDiagram,
    },
]

export const NavBarTabsSettingData:NavBarTabsProps[]=[
    {
        Tab:"Settings",
        icon:IoSettingsOutline,
    },
    {
        Tab:"Logout",
        icon:IoIosLogOut,
    }
]

export const RandomTextArr:string[]=[
    "Overview of your team's performance",
    "Number of tasks completed",
    "Top performer in yor team",
    "Tasks list with different pririties",
    "Insights like how much time required to done task",
    "Team member activity status",
]

export const InsightsDataArr:InsightsCardProps[]=[
    {
        heading:"Heading",
        data:23,
        insights:"123",
        icon:IoAirplane,
        backgroundColor:"bg-emerald-100",
        iconColor:"text-emerald-500",
    },
    {
        heading:"Heading",
        data:23,
        insights:"123",
        icon:IoAirplane,
        backgroundColor:"bg-sky-100",
        iconColor:"text-sky-500",
    },
    {
        heading:"Heading",
        data:23,
        insights:"123",
        icon:IoAirplane,
        backgroundColor:"bg-rose-100",
        iconColor:"text-rose-500",
    },
    {
        heading:"Heading",
        data:23,
        insights:"123",
        icon:IoAirplane,
        backgroundColor:"bg-purple-100",
        iconColor:"text-purple-500",
    },
]