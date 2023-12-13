import { Router } from "express";
import { register, login } from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = Router();

router.post("/register", register);

router.post("/login", login);

router.get("/private", verifyToken, (req, res) => {
  const { first_name, last_name, email, role } = req.user;
  res.json({
    status: "success",
    userData: {
      first_name,
      last_name,
      email,
      role,
    },
  });
});

export default router;
