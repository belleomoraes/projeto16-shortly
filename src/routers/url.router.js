import express from "express";
import checkAuthorization from "../middlewares/urls/checkAuthorization.middleware.js";
import { shortenUrl, showFilteredUrl } from "../controllers/shortUrl.controller.js";
import validateUrlSchema from "../middlewares/urls/urlValidationSchema.middleware.js";
import isUrlExists from "../middlewares/urls/urlIdExistance.middleware.js";

const router = express.Router();
router.post("/urls/shorten", checkAuthorization, validateUrlSchema, shortenUrl);
router.get("/urls/:id", isUrlExists, showFilteredUrl);
// router.get("/urls/:shortUrl");
// router.delete("/urls/:id");

export default router;
