"use client"

type props={
    radius:string,
    size:string
}

export const GridBG:React.FC<props>=({radius,size})=>{
    return(
        <div className={`z-1 absolute inset-0 w-full h-full bg-[radial-gradient(circle,_#9ca3af_${radius},_transparent_1px)] bg-[size:${size}] opacity-30`}></div>        
    )
}