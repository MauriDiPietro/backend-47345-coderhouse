import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import UserController from "../controllers/user.controllers.js";
const controller = new UserController();

const router = Router();

router.post("/register", controller.register);

router.post("/login", controller.login);

router.get("/profile", verifyToken, controller.profile);

export default router;
