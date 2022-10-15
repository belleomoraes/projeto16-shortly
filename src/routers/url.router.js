import express from "express";
import checkAuthorization from "../middlewares/urls/checkAuthorization.middleware.js";
import { createShortUrl, showFilteredUrl, openUrl, deleteUrl } from "../controllers/url.controller.js";
import validateUrlSchema from "../middlewares/urls/urlValidationSchema.middleware.js";
import isUrlExists from "../middlewares/urls/urlIdExistance.middleware.js";
import isShortUrlExists from "../middlewares/urls/shortUrlExistance.middleware.js";
import checkUrlOwner from "../middlewares/urls/checkUrlOwner.middleware.js";

const router = express.Router();
router.post("/urls/shorten", checkAuthorization, validateUrlSchema, createShortUrl);
router.get("/urls/:id", isUrlExists, showFilteredUrl);
router.get("/urls/open/:shortUrl", isShortUrlExists, openUrl);
router.delete("/urls/:id", checkAuthorization, isUrlExists, checkUrlOwner, deleteUrl);

export default router;
