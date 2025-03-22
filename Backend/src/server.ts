import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authroutes from "./routes/authRoutes";
import { Request, Response } from "express";
import dotenv from "dotenv"; 

dotenv.config(); // 

const app = express();
const mongoUrl = process.env.MONGO_URL??"";


app.use(express.json());
app.use(cors());


// Connect to MongoDB
mongoose.connect(mongoUrl)

// Routes
app.use("/auth", authroutes);

app.get("/health",(req:Request,res:Response)=>{
    console.log("hyy")
    console.log(port);
})
const port=process.env.PORT;
app.listen(3001);
