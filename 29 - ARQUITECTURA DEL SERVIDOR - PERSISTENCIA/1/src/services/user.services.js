import Services from "./class.services.js";
import pkg from 'jsonwebtoken';
const { sign } = pkg;
import 'dotenv/config';
import factory from "../daos/factory.js";
const { userDao } = factory;

const SECRET_KEY = process.env.SECRET_KEY_JWT;

export default class UserService extends Services {
  constructor() {
    super(userDao);
  }

  #generateToken(user) {
    const payload = {
      userId: user.id,
    };
    return sign(payload, SECRET_KEY, { expiresIn: '10m' });
  };

  async register(user) {
    try {
      return await userDao.register(user);
    } catch (error) {
      console.log(error);
    }
  };

  async login(user) {
    try {
      const userExist = await userDao.login(user);
      if(userExist) return this.#generateToken(userExist);
      else return false;
    } catch (error) {
      console.log(error);
    }
  };
}
