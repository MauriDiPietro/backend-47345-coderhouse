import { Router } from "express";
import { register, login } from "../controllers/user.controller.js";
import passport from "passport";
import UserDao from "../daos/user.dao.js";
const userDao = new UserDao();

const router = Router();

router.post("/register", register);

router.post("/login", login);

router.get("/private", passport.authenticate("jwt"), async (req, res) => {
  const { userId } = req.user;
  const user = await userDao.getById(userId);
  // console.log(user)
  if (!user) res.send("Not found");
  else {
    const { first_name, last_name, email, role } = user;
    res.json({
      status: "success",
      userData: {
        first_name,
        last_name,
        email,
        role,
      },
    });
  }
});

router.get("/private2", passport.authenticate("jwt"), (req, res) => {
  // console.log(req.user);
  res.send(req.user);
});

router.get(
  "/private-cookies",
  passport.authenticate("jwtCookies"),
  async(req, res) => {
    const { userId } = req.user;
    const user = await userDao.getById(userId);
    // console.log(user)
    if (!user) res.send("Not found");
    else {
      const { first_name, last_name, email, role } = user;
      res.json({
        status: "success",
        userData: {
          first_name,
          last_name,
          email,
          role,
        },
      });
    }
  }
);

export default router;
