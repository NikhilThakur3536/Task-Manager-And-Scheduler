import express from "express";
import { login, signUp, updateRoles } from "../contollers/authController"; 

const router = express.Router();

router.post("/login", login);
router.post("/signup", signUp);
router.post("/roles",updateRoles)

export default router; 
