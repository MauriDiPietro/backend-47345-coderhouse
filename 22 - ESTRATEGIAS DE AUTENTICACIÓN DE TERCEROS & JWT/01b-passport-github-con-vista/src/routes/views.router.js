import { Router } from "express";
const router = Router();
import { isAuth } from "../middlewares/isAuth.js";

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/profile", isAuth, (req, res) => {
  console.log("req.user", req.user);
  const user = req.user.toObject();
  res.render("profile", { user });
});

export default router;
