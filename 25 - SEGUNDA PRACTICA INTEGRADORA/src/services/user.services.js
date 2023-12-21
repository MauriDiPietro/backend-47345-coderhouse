import Services from "./class.services.js";
import UserMongoDao from "../daos/mongodb/users/user.dao.js";
const userDao = new UserMongoDao();
import jwt from "jsonwebtoken";
import "dotenv/config";

const SECRET_KEY_JWT = process.env.SECRET_KEY_JWT;

export default class UserService extends Services {
  constructor() {
    super(userDao);
  }

  #generateToken(user) {
    const payload = {
      userId: user._id,
    };
    return jwt.sign(payload, SECRET_KEY_JWT, { expiresIn: "10m" });
  }

  async register(user) {
    try {
      return await userDao.register(user);
    } catch (error) {
      console.log(error);
    }
  }

  async login(user) {
    try {
      const userExist = await userDao.login(user);
      if(userExist) return this.#generateToken(userExist);
      else return false;
    } catch (error) {
      console.log(error);
    }
  }
}
