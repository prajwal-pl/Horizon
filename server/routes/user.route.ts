import express from "express";
import { ViewCars } from "../controllers/user.controller";
const router = express.Router();

router.get("/cars");

export default router;
