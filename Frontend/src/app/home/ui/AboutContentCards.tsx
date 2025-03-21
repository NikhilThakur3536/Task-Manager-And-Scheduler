"use client";

import { Content } from "@/data/Data";
import { AboutContentCardsVariant } from "@/data/variants";

export const AboutContentCards = ({ id,heading,content,variant}:Content & {variant?: keyof typeof AboutContentCardsVariant}) => {
    const styles=AboutContentCardsVariant[variant]
    return (
        <div key={id} className={`flex flex-col w-1/4 mx-2 ${styles.bgColor} border ${styles.borderColor} p-2 rounded-xl shadow-lg ${styles.shadowColor}`}>
            <h3 className={`flex justify-center font-poppins text-xl font-bold ${styles.textColor}`}>{heading}</h3>
            <p className="felx justify-center font-montserrat text-lg text-slate-600 mb-2 text-center">{content}</p>
        </div>
    );
};
