import pkg from 'jsonwebtoken';
const { verify } = pkg;
import UserDaoMongo from "../daos/mongodb/user.dao.js";
const userDao = new UserDaoMongo();
import 'dotenv/config';

const SECRET_KEY = process.env.SECRET_KEY_JWT;

export const checkAuth = async (req, res, next) => {
  try {
    const authHeader = req.get("Authorization");
    if (!authHeader) return res.status(401).json({ msg: "Unauthorized" });
    const token = authHeader.split(" ")[1];
    const decode = verify(token, SECRET_KEY);
    console.log("TOKEN DECODIFICADO");
    console.log(decode);
    const user = await userDao.getById(decode.userId);
    if (!user) return res.status(400).json({ msg: "Unauthorized" });
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ msg: "Unauthorized" });
  }
};
