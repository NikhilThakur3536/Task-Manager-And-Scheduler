import express from "express";
import { newTask,delTask } from "../contollers/tasksControllers";
import { auth } from "../middleware/authMiddleware";


const router = express.Router();

router.post("/newtask",auth,newTask)
router.delete("/deletetask",delTask)


export default router; 
