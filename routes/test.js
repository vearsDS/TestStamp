import express from "express";
import * as controller from "../controller/test.js";

const router = express.Router();

router.get("/apaajabole", async (req, res) => controller.apaAjaBole(req, res));
router.get("/weatherApp", async (req, res) => controller.weatherApp(req, res));

export default router;
