import { Request, Response } from "express";
import { Tasks } from "../models/taskModel";
import { endianness } from "node:os";
import { responseEncoding } from "axios";

export const newTask= async ( req:Request,res:Response )=>{

    const {Task,EndDate,Description,Priority}= req.body;
    if(!Task || !EndDate || !Description ){
        res.status(403).json({ message: "Enter the user credentials" });
    }

}