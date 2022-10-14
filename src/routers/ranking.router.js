import express from "express";
import showRanking from "../controllers/ranking.controller.js";

const router = express.Router();
router.get("/ranking", showRanking);

export default router;
