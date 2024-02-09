import Services from "../class.services.js";
import factory from "../../persistence/daos/factory.js";
import { sendMail } from "./mailing.service.js";
const { userDao } = factory;

export default class UserService extends Services {
  constructor() {
    super(userDao);
  }

  register = async (user) => {
    try {
      const response = await this.dao.register(user);
      await sendMail(user, "register");
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  login = async (user) => {
    try {
      const userExist = await this.dao.login(user);
      return userExist;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  resetPass = async (user) => {
    try {
      const token = await this.dao.resetPass(user);
      if (token) return await sendMail(user, "resetPass", token);
      else return false;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  updatePass = async (user, pass) => {
    try {
      const response = await userDao.updatePass(user, pass);
      if (!response) return false;
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  };
}
