import { AiOutlineHome } from "react-icons/ai";
import { FaRegCalendar } from "react-icons/fa6";
import { TbFileAnalytics } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { IconType } from "react-icons";
import { MdOutlineDownloading } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { LuLoaderPinwheel } from "react-icons/lu";
import { IoMdAnalytics } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";


export type Feature = {
    id: number;
    text: string;
};


export type PricingPlan = {
    heading: string;
    price: string;
    tagline: string;
    buttonheading: string;
    fill: "Yes" | "No";
    fillb:"Yes" | "No";
    features: Feature[];
};


export const pricingData: PricingPlan[] = [
    {
        heading: "Free",
        price: "$300",
        tagline: "Buy And Enjoy Now",
        buttonheading: "Start For Free",
        fill: "No",fillb: "No",
        features: [
            { id: 1, text: "Feature 1" },
            { id: 2, text: "Feature 2" }
        ]
    },
    {
        heading: "Pro",
        price: "$600",
        tagline: "Upgrade for More Features",
        buttonheading: "Go Pro",
        fill: "Yes",fillb: "Yes",
        features: [
            { id: 1, text: "Advanced Feature 1" },
            { id: 2, text: "Advanced Feature 2" }
        ]
    },
    {
        heading: "Enterprise",
        price: "$900",
        tagline: "Best for Businesses",
        buttonheading: "Get Started",
        fill: "No",fillb: "No",
        features: [
            { id: 1, text: "Premium Feature 1" },
            { id: 2, text: "Premium Feature 2" }
        ]
    }
];



export type Content={
    id:number,
    heading:string,
    content:string,
    variant: "purple"|"blue"|"green"
}

export const ContentData:Content[]=[
    {id:11, content:"tay organized effortlessly with our intuitive dashboard, where tasks are visually managed and prioritized at a glance.", heading:"Task Dashboard",variant:"blue"},
    {id:12, content:"Foster seamless teamwork with shared spaces that allow real-time updates, task delegation, and synchronized progress tracking.", heading:"Collaborative Team Spaces",variant:"green"},
    {id:13, content:"Gain valuable insights into productivity trends and performance metrics to optimize workflows and achieve more.", heading:"Analytics & Insights",variant:"purple"}
]


export type IconProps={
    icon:IconType,
    label:string
}


export const iconArr:IconProps[]=[{icon:AiOutlineHome,label:"Home"},{icon:FaRegCalendar,label:"Calendar"},{icon:TbFileAnalytics,label:"Analytics"},{icon:CgProfile,label:"Profile"}]

export type FadingCardsProps={
    Opacity:number,
    delay:number,
    icon:IconType,
    heading:string,
    content:string,
    progress:string,
    y:number,
    bg:string,
}

export const FadingCardsArray:FadingCardsProps[]=[
    {
        Opacity:1,
        delay:0,
        icon:MdOutlineDownloading,
        heading:"Heading ",
        content:"Content",
        progress:"In Progress",
        y:0,  
        bg:"bg-purple-700"
    },
    {
        Opacity:.5,
        delay:.6,
        icon:BsFillLightningChargeFill,
        heading:"Heading ",
        content:"Content",
        progress:"In Progress",
        y:130,
        bg:"bg-rose-700"     
    },
    {
        Opacity:.4,
        delay:.7,
        icon:LuLoaderPinwheel,
        heading:"Heading ",
        content:"Content",
        progress:"In Progress",
        y:260,
        bg:"bg-emerald-700"    
    },
    {
        Opacity:.3,
        delay:.8,
        icon:MdDashboard,
        heading:"Heading ",
        content:"Content",
        progress:"In Progress",
        y:390,
        bg:"bg-cyan-700"         
    },
    {
        Opacity:.2,
        delay:.9,
        icon:IoMdAnalytics,
        heading:"Heading ",
        content:"Content",
        progress:"In Progress",
        y:520,
        bg:"bg-yellow-700"     
 
    }
]

export type MobileDashCardsData={
    heading:string,
    content:string
    icon:IconType,
    text:string,
    delay:number,
    variant: "purple"|"blue"|"emerald"|"fuchsia"
}


export const MobileDashCardsDatAarr:MobileDashCardsData[]=[
    {
        heading:"Task Completed",
        content:"124+",
        icon:IoBarChartSharp,
        text:"24 more to be done",
        variant: "purple",
        delay:0
    },
        {
            heading:"Frontend Project",
            content:"424+   ",
            icon:IoBarChartSharp,
            text:" In Progress",
            variant: "emerald",
            delay:.3
        },
        {
            heading:"Heading 1",
        content:"12345",
        icon:IoBarChartSharp,
        text:"In Progress",
        variant: "blue",
        delay:.5
        },

        {
            heading:"Heading 1",
            content:"12345",
            icon:IoBarChartSharp,
            text:"In Progress",
            variant: "fuchsia",
            delay:.5

        }
]