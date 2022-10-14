import express from "express";
import checkAuthorization from "../middlewares/urls/checkAuthorization.middleware.js";
import showUserData from "../controllers/user.controller.js";

const router = express.Router();
router.get("/users/me", checkAuthorization, showUserData);

export default router;
