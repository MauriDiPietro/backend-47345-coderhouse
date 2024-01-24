import Services from "./class.services.js";
import factory from '../persistence/daos/factory.js';
const { userDao } = factory;

export default class UserService extends Services {
  constructor(){
    super(userDao)
  }

  register = async (user) => {
    try {
      const token = await this.dao.register(user);
      return token;
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
}

