import { UserModel } from "../models/user.model.js";

export default class UserServices {
  async findByEmail(email) {
    return await UserModel.findOne({ email });
  }

  async register(user) {
    try {
      const { email, password } = user;
      if(email === 'adminCoder@coder.com' && password === 'adminCoder123'){
        return await UserModel.create({...user, role: 'admin'});
      }
      const exists = await this.findByEmail(email);
      console.log(exists);
      if (!exists) return await UserModel.create(user);
      else return false;
    } catch (error) {
      console.log(error);
    }
  }

  async login(email, password) {
    try {
     
      console.log('body', email, password);
      const userExist = await UserModel.findOne({ email, password });
      console.log('login::', userExist);
      if (!userExist) return false;
      else return userExist;
    } catch (error) {
      console.log(error);
    }
  }
}
