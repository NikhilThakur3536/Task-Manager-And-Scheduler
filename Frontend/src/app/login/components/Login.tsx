"use client"

import { InputFields } from "../ui/InputFields";
import { InputFieldsData } from "../data/data";
import { useFormData } from "@/app/customhooks/useFormData";
import { useState } from "react";
import axios from 'axios';

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
            
            const response = await axios.post("http://localhost:3001/auth/signup", {
                email: data.email,
                username: data.username,
                password: data.password,
            });
            localStorage.setItem("userID", response.data.userID);
            console.log("Login successful:", response.data);
            onSubmit(true); 
        } catch (err: any) {
            setError(err.response?.data?.message || "Login failed");
            console.log(error)
        } finally {
            setLoading(false);
        }
    };


    return(
        <div className="relative bg-[#101010] w-screen h-screen flex flex-col items-center">
            <h1 className="w-[60%] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent h-24 font-bold text-5xl text-center p-4">Task Manager & Scheduler</h1>
            <h3 className="font-semibold text-xl text-white/30 w-[60%] h-12 -mt-4 text-center">Streamline your productivity with modern task management</h3>
            <div className="w-[30%] h-[80%] bg-black/20 border-2 border-dashed border-gray-50/20  rounded-2xl p-2 flex flex-col items-center mb-4 ">
                <h2 className=" bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold text-3xl mt-2">Task Manager & Scheduler</h2>
                <h3 className="text-white mb-8">Manage tasks, schedules, and boost your productivity</h3>
                <form className="w-full flex flex-col items-center">
                    {InputFieldsData.map((items, index) => (<InputFields key={index} {...items} value={data[items.name]||""} onChange={dataHandler}/>))}
                </form>
                <hr className="w-[90%] h-1 text-white/30 mt-2 mb-4" />
                <button className="w-[90%] h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl text-center text-white font-bold text-2xl" onClick={handleSignup}>Sign UP</button>
                <div className="w-[90%] flex justify-center items-center mt-4">
                    <h3 className="text-lg text-white ">Already have an account</h3>
                    <span className="text-blue-400 text-lg ml-2 font-semibold">Log In...</span>
                </div>
            </div>
        </div>
    )
}


















