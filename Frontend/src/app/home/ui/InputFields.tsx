"use client"

type data={
  label:string,
  placeholder:string,
  type:string
}

export const InputFields:React.FC<data>=({label,placeholder,type})=>{
    return(
        <>
            <div className="mb-8 mt-4">
                <div className=" pl-2 text-2xl font-poppins font-[400] text-white">{label} </div>
                <input className=" w-full h-[52px] bg-white outline-none pl-4 rounded-lg mb-4" placeholder={placeholder} type={type}/>
            </div>
        </>
    )
}