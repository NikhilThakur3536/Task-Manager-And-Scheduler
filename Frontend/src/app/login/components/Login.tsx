

import { InputFields } from "../ui/InputFields";
import { InputFieldsData } from "../data/data";
import { useFormData } from "@/app/customhooks/useFormData";
import { useState } from "react";

type submition={
    onSubmit:(value: boolean) => void;
}

export const Login= ({onSubmit}:submition) => {

    const initialFormData = Object.fromEntries(
        InputFieldsData.map((item) => [item.name, ""])
    ) as Record<string, string>;

    const {data,dataHandler}=useFormData(initialFormData)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSignup = async () => {
        if (!data.email || !data.username || !data.password) {
            setError("Please fill in all fields.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            console.log(data.email);
            const response = await fetch("http://localhost:3001/auth/signUp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: data.email,
                    username: data.username,
                    password: data.password,
                }),
            });

            const result = await response.json();
            
            if (!response.ok) {
                throw new Error(result.message || "Login failed");
            }

            console.log("Login successful:", result);
            onSubmit(true); // Navigate to the next step
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };


    return(
        <div className="flex justify-center items-center bg-black w-screen h-screen">
            <div className="z-10 absolute inset-0 w-full h-full bg-[radial-gradient(circle,_#9ca3af_1px,_transparent_1px)] bg-[size:14px_14px] opacity-30"></div>        
            <div className="z-20 flex flex-col items-center w-[80%] h-[90%] bg-white rounded-2xl">
                <div>
                    <h2 className="font-k2d text-6xl font-bold mt-4 mb-4">LOGIN</h2>
                </div>
                {InputFieldsData.map((items,index)=>(<InputFields key={index} {...items} value={data[items.name]||""} onChange={dataHandler}/>))}
                <button className=" w-[600px] h-[72px] bg-[#4F27FF] rounded-2xl border border-black text-white font-k2d text-5xl text-bold pl-8 mt-8 transform translate-x-2" onClick={handleSignup}>Select Role</button>
            </div>
        </div>
    )
}