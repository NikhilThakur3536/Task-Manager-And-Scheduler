import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authroutes from "./routes/authRoutes";
import taskroutes from "./routes/taskroutes"
import { Request, Response } from "express";
import "dotenv/config";

const app = express();
const mongoUrl:string= process.env.MONGO_URL||"";


app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Connect to MongoDB
mongoose.connect(mongoUrl)

// Routes
app.use("/auth", authroutes);
app.use("/task",taskroutes)
app.get("/health",(req:Request,res:Response)=>{
    console.log("hyy")
    console.log(port);
})
const port=process.env.PORT;
app.listen(3001);
