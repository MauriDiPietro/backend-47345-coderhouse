import * as userController from "../controllers/user.controller.js";
import { Router } from "express";
const router = Router();

router.post("/create", userController.createUser);
router.get("/", userController.getUsers);

export default router;
