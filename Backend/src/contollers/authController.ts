import jwt from "jsonwebtoken";
import crypt from "bcryptjs";
import { Request, Response } from "express";
import { User } from "../models/userModel";

export const signUp = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, username, password, role } = req.body;

        if (!email || !username || !password) {
            res.status(403).json({ message: "Enter the user credentials" });
            return; // ✅ Ensure function stops execution
        }

        const hashpass = await crypt.hash(password, 10);
        const user = await User.create({ email, username, password: hashpass, role });

        res.status(201).json({ message: "User signed up successfully", userID: user._id });
    } catch (error) {
        console.error("Signup error:", error);

        res.status(500).json({ message: "Internal server error", error: (error as Error).message });
    }
};

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

export const updateRoles = async (req:Request,res:Response)=> {
   const {userID,role} =req.body;
    try{
   if(!role || !userID){
    return res.status(401).json({message:"Role and UserId are required my friend"})
   }
   
   const updateUser = await User.findByIdAndUpdate(userID,{role},{new:true})

   if (!updateUser) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json({ message: "User role updated successfully", user: updateUser });
} catch (error:any) {
  return res.status(500).json({ message: "Failed to update user role", error: error.message });
}
}