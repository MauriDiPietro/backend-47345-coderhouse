import { userModel } from './models/user.model.js';
import { createHash, isValidPassword } from '../utils.js';

export default class UserDao {
  async createUser(user) {
    try {
      //! ahora no tomamos todo el body sino que vamos a desestructurar
      const { email, password } = user;
      const existUser = await userModel.findOne({email});
      if(!existUser){
        if(email === 'adminCoder@coder.com' && password === 'adminCoder123'){
          const newUser = await userModel.create({...user, password: createHash(password), role: 'admin'})
          return newUser;
        } else {
          const newUser = await userModel.create({...user, password: createHash(password)})
          return newUser;
        }
      } else {
        return false;
      }
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }

  async loginUser(user){
    try {
      const { email, password } = user;
      // console.log(email);
      const userExist = await this.getByEmail(email); 
      // console.log('dao', userExist);
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
      const userExist = await userModel.findById(id)
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
      const userExist = await userModel.findOne({email}); 
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
