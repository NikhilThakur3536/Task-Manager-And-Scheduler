import express from "express";
import { newTask } from "../contollers/tasksControllers";
import { auth } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/newtask",auth,newTask)


export default router; 
