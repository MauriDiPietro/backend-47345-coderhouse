import { Router } from "express";
import { sendMailEthereal } from "../controllers/email.controller.js";

const router = Router();

router.post("/send", sendMailEthereal);

export default router;
