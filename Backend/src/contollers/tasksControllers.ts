import { Request, Response } from "express";
import { Tasks } from "../models/taskModel";
import { authReq } from "../middleware/authMiddleware";

export const newTask= async ( req:authReq,res:Response )=>{
    const userID=req.user?.userID||{};
    const {Task,EndDate,Description,Priority}= req.body;
    
    try{
        if(!Task || !EndDate || !Description || !Priority ){
            res.status(403).json({ message: "Enter the user credentials" });
            return;
        }
        const newTask = await Tasks.create({userID:userID,Task:Task,EndDate:EndDate,Description:Description,Priority:Priority})
        res.status(201).json({message:"New Task Creater"});
        console.log(newTask);
    }catch(err){
        console.log("error",err);
        res.status(500).json({message:"Somethign bad happened",err});
    }


}