import { UserModel } from './models/user.model.js';
import { createHash, isValidPassword } from '../utils.js';

export default class UserDao {
  async createUser(user) {
    try {
      const { email, password } = user;
      const existUser = await UserModel.findOne({email});
      if(!existUser){
        if(email === 'adminCoder@coder.com' && password === 'adminCod3r123'){
          return await UserModel.create({
            ...user,
            password: createHash(password),
            role: 'admin'
        });
        } 
          return await UserModel.create({
              ...user,
              password: createHash(password),
          });
        } else return false;
      } catch (error) {
        console.log(error)
        throw new Error(error)
      }
    }


  async loginUser(user){
    try {
      const { email, password } = user;
      const userExist = await UserModel.findOne({email}); 
      // console.log(userExist);
      if(userExist){
        const passValid = isValidPassword(userExist, password)
        if(!passValid) return false
        else return userExist
      } return false
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }

  async getById(id){
    try {
      const userExist = await UserModel.findById(id)
      // console.log(userExist);
      if(userExist){
       return userExist
      } return false
    } catch (error) {
      console.log(error)
      // throw new Error(error)
    }
  }

  async getByEmail(email){
    try {
      const userExist = await UserModel.findOne({email}); 
      // console.log(userExist);
      if(userExist){
       return userExist
      } return false
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }
}
