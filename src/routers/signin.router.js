import express from "express";
import signIn from "../controllers/signin.controller.js";
import validateUserSchema from "../middlewares/user/signinValidationSchema.middleware.js";

const router = express.Router();
router.post("/signin", validateUserSchema, signIn);

export default router;
