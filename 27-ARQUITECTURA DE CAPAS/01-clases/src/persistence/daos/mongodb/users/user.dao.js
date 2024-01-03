import MongoDao from "../mongo.dao.js";
import { UserModel } from "./user.model.js";
import { createHash, isValidPassword } from "../../../../utils.js";

export default class UserMongoDao extends MongoDao {
  constructor() {
    super(UserModel);
  }

  async register(user) {
    try {
      const { email, password } = user;
      const existUser = await this.getByEmail(email);
      if (!existUser)
        return await this.model.create({
          ...user,
          password: createHash(password),
        });
      else return false;
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
      } else return false;
    } catch (error) {
      console.log(error);
    }
  }

  async getByEmail(email) {
    try {
      return await this.model.findOne({ email });
    } catch (error) {
      console.log(error);
    }
  }
}
