import { Router } from "express";
import { sendGmail } from "../controllers/email.controller.js";

const router = Router();

router.post('/gmail', sendGmail)

export default router;

