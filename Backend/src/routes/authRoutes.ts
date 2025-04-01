import express from "express";
import { login, signUp, updateRoles } from "../contollers/authController"; 
import { auth } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/roles",auth,updateRoles)
router.post("/login",login);
router.post("/signup", signUp);

export default router; 
