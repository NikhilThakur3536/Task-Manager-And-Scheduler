"use client"

import { InputFieldsProps } from "../data/data"
import { CgAdd } from "react-icons/cg";

type InputProps = InputFieldsProps & {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputFields= ({label,placeholder,name,type,value,onChange}:InputProps) =>{
    return(
        <div className="mb-4 w-[90%]">
      <label className="block w-full h-8 mb-1 text-xl text-white">{label}</label>
      <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} className="focus:outline-none bg-slate-300/20 text-white border border-white/20 rounded-2xl w-full h-10 pl-8 placeholder:ml-8 relative"  />
      <CgAdd className="text-white/50 absolute   transform -translate-y-[29px] translate-x-2" size={20} />
    </div>
    )
}