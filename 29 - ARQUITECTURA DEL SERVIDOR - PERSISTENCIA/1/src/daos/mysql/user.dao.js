import { UserModel } from "./models/user.model.js";
import "dotenv/config";
import MySqlDao from "./mysql.dao.js";
import jwt from "jsonwebtoken";
import { createHash, isValidPassword } from "../../utils.js";

const SECRET_KEY = process.env.SECRET_KEY_JWT;

export default class UserDaoMySql extends MySqlDao {
  constructor() {
    super(UserModel);
  }

  #generateToken(user) {
    const payload = {
      userId: user.id,
    };
    return jwt.sign(payload, SECRET_KEY, {
      expiresIn: "20m",
    });
  }

  async register(user) {
    try {
      const { email, password } = user;
      const existUser = await this.getByEmail(email);
      if (!existUser) {
        const newUser = await this.model.create({
          ...user,
          password: createHash(password),
        });
        const token = this.#generateToken(newUser);
        return token;
      } else return false;
    } catch (error) {
      console.log(error);
    }
  }

  async login(user) {
    try {
      const { email, password } = user;
      const existUser = await this.getByEmail(email);
      if (existUser) {
        const passValid = isValidPassword(existUser, password);
        if (!passValid) return false;
        else {
          return this.#generateToken(existUser);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getByEmail(email) {
    try {
      const userExist = await this.model.findOne({ where: { email: email } });
      if (!userExist) return false;
      else return userExist;
    } catch (error) {
      console.log(error);
    }
  }
}
