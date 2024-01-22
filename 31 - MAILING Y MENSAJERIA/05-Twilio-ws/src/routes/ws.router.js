import { Router } from "express";
import { responseWS, sendWS } from "../controllers/ws.controller.js";

const router = Router();

router.post('/whatsapp', sendWS)
router.post('/inbox', responseWS)

export default router;

