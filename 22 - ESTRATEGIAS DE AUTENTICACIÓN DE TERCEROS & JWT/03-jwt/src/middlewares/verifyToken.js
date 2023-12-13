import jwt from "jsonwebtoken";
import { PRIVATE_KEY } from "../jwt/auth.js";
import UserDao from "../daos/user.dao.js";
const userDao = new UserDao();

export const verifyToken = async (req, res, next) => {
  try {
    // req.headers('Authorization')
    const authHeader = req.get("Authorization");
    // 'Bearer gdfgdfgdg16dfg65df4g564dfg¿??=¿?=¿?'
    if (!authHeader) return res.status(401).json({ msg: "Unauthorized" });
    const token = authHeader.split(" ")[1];
    // 'gdfgdfgdg16dfg65df4g564dfg¿??=¿?=¿?'
    const decode = jwt.verify(token, PRIVATE_KEY);
    console.log("decode::", decode); //payload ---> {userId: id de mongo}
    const user = await userDao.getById(decode.userId);
    if (!user) return res.status(401).json({ msg: "Unauthorized" });
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};
