import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import { User } from "../models/userModel";
import { authReq } from "../middleware/authMiddleware";
import "dotenv/config";

const JWTSECRET=process.env.JWT_SECRET||"";

export const signUp = async (req: Request, res: Response) => {
    try {
        const { email, username, password, role } = req.body;

        if (!email || !username || !password) {
            res.status(403).json({ message: "Enter the user credentials" }); 
            console.log("Enter the user credentials");
            return;
        }

        const hashpass = await bcrypt.hash(password, 10);
        const user = await User.create({ email, username, password: hashpass, role });

        res.status(201).json({ message: "User signed up successfully", userID: user._id });
        await user.save();
        return;
    } catch (error) {
        console.error("Signup error:", error);

        res.status(500).json({ message: "Internal server error", error: (error as Error).message });
        return;
    }
};

export const login= async (req:Request,res:Response)=>{
    try{
        const {email,password}=req.body;
        
        const user =await User.findOne({email});

        if (!user) {
            console.log("user not found")
            res.status(401).json({ message: "User not found" });
            return;
        }
        console.log(password)
        const isMatch= await bcrypt.compare(password.trim(),user.password?.trim()??"")
        console.log(user.password)
        console.log(isMatch)
        if(!isMatch){
            res.status(403).json({message:"Incorrect email or password"})
            return;
        }
        console.log("jwt",JWTSECRET)
        const token= jwt.sign({userID:user._id.toString()},JWTSECRET)

         res.json({message:"success",token});   
         return;
    }catch(err){
        console.log("test",err)
        res.status(403).json({message:"loagin unseccessfull"});
        return;
    }
}

export const updateRoles = async (req:authReq, res: Response) => {
    console.log("Received Request Body:", req.body);
    const { role } = req.body;
    const {userID}= req.user ||{}
  
    try {
      if (!role || !userID) {
         res.status(401).json({ message: "Role and UserId are required" });
         return;
      }
  
      const updateUser = await User.findByIdAndUpdate(userID, { role }, { new: true });
  
      if (!updateUser) {
         res.status(404).json({ message: "User not found" });
         return;
      }
  
       res.status(200).json({ message: "User role updated successfully", user: updateUser });
       return;
    } catch (error: any) {
       res.status(500).json({ message: "Failed to update user role", error: error.message });
       return;
    }
  };