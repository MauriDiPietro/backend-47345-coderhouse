import { Router } from "express";
import { sendWS } from "../controllers/ws.controller.js";

const router = Router();

router.post('/whatsapp', sendWS)

export default router;

