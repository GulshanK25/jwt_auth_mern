import express from "express";
import { registerUser,loginUser,currentUser } from "../controllers/usercontroller.js";
import validateToken from "../middleware/ValidateTokenHandler.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);

export default router;
