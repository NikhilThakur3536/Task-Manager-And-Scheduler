import { BulletList } from "./BulletList"
import { SectionHeadingBUtton } from "./SectionHeadingButton"
import { PricingPlan } from "@/data/Data";

export const PricingCards = ({ heading, price, tagline, buttonheading, features, fill,fillb }: PricingPlan) => {
    return (
        <div className="z-10 w-[400px] h-[500px]">
            <div className="flex flex-col w-[95%] h-full rounded-xl border-2 border-gray-400/50 bg-white overflow-hidden drop-shadow-lg">
                <h3 className="font-poppins font-semibold text-4xl mt-2 mb-4 ml-4">{heading}</h3>
                <h3 className="font-poppins font-bold text-6xl mt-2 mb-2 ml-4">{price}</h3>
                <h4 className="font-montserrat text-gray-400 text-sm mb-10 ml-4">{tagline}</h4>
                <div className="w-[90%] mx-4"><SectionHeadingBUtton Heading={buttonheading} fillb={fill} /></div>
                <BulletList fill={fill} features={features} />
            </div>
        </div>
    );
};
