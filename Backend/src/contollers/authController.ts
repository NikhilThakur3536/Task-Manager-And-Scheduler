import jwt from "jsonwebtoken";
import crypt from "bcryptjs";
import { Request, Response } from "express";
import { User } from "../models/userModel";

export const signup= async (req:Request,res:Response)=>{
    const {email,username,password}=req.body

    if(!email||!username||!password){
        res.status(403).json({message:"enter the suer credentials"})
    }

    const hashpass= await crypt.hash(password,10);
    const user= await User.create({email,username,password:hashpass});

    res.status(201).json({message:"User signed up successfuly"})

}

export const login= async (req:Request,res:Response)=>{
    try{
        const {email,password}=req.body;
        
        const user =await User.findOne({email});

        if (!user) {
            res.status(401).json({ message: "User not found" });
            return;
        }

        const isMatch= await crypt.compare(password,user.password??"")

        if(!isMatch){
            res.status(403).json({message:"Incorrect email or password"})
            return;
        }
        const token= jwt.sign({id:user._id.toString()},"nikhilthakur3536123@#$")

         res.json({message:"success",token});   
         return;
    }catch(err){
        res.status(403).json({message:"loagin unseccessfull"});
        return;
    }
}
