import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';


export interface authReq extends Request{
    user?:{userID:string}
}

export const auth=(req:authReq, res:Response,next:NextFunction)=>{

    const JWTSECRET = process.env.JWT_SECRET||"";

    const token= req.header("Authorization")?.split(" ")[1];

    if(!token){
         res.status(401).json({message:"Access denied"});
         return;
    }

    try{
        const decoded= jwt.verify(token,JWTSECRET) as {userID: string};

        req.user={userID:decoded.userID};
        next();
    }catch(err){
         res.status(401).json({message:err})
         return 
    }

};