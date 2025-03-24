"use client"

import { InputFieldsProps } from "../data/data"

type InputProps = InputFieldsProps & {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputFields= ({label,placeholder,name,type,value,onChange}:InputProps) =>{
    return(
        <div className="w-[794px] flex flex-col item-center">
            <h3 className="font-k2d  font-bold text-2xl mb-2 mt-4 transform translate-x-14">{label}</h3>
            <input className=" w-[700px] h-[72px] bg-[#C5C5C5] rounded-2xl border border-black text-white text-xl pl-8 transform translate-x-14 placeholder:pl-4 placeholder:text-xl placeholder:text-white" type={type} name={name} placeholder={placeholder} onChange={onChange} value={value}/>
        </div>
    )
}