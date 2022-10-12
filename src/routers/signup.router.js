import express from "express";
import signUp from "../controllers/signup.controller.js";
import validateUserSchema from "../middlewares/user/signupValidationSchema.middleware.js";
import isUserExists from "../middlewares/user/userExistance.middleware.js";

const router = express.Router();
router.post("/signup", validateUserSchema, isUserExists, signUp);

export default router;
