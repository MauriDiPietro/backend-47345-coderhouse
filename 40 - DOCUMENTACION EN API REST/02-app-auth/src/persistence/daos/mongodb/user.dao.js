import MongoDao from "./mongo.dao.js";
import {UserModel} from "./models/user.model.js";
import {createHash, isValidPassword} from '../../../utils.js';
import jwt from 'jsonwebtoken';
import config from "../../../config/config.js";

const SECRET_KEY = config.SECRET_KEY_JWT;

export default class UserDaoMongo extends MongoDao {
  constructor() {
    super(UserModel);
  }

  /**
   * Genera el token del usuario
   * @param {*} user
   * @param {*} timeExp
   * @returns token
   */
  generateToken(user, timeExp) {
    const payload = {
      userId: user._id
    };
    const token = jwt.sign(payload, SECRET_KEY, {
      expiresIn: timeExp,
    });
    return token;
  }

  async register(user) {
    try {
      const { email, password } = user;
      const existUser = await this.model.findOne({email});
      if(!existUser) return await this.model.create({...user, password: createHash(password)})
      else return false;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async login(user){
    try {
      const { email, password } = user;
      const userExist = await this.getByEmail(email); 
      if(userExist){
        const passValid = isValidPassword(userExist, password)
        if(!passValid) return false
        else return this.generateToken(userExist, '15m')
      } return false
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getByEmail(email){
    try {
      const userExist = await this.model.findOne({email}); 
      // console.log(userExist);
      if(userExist) return userExist
      else return false
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async resetPass(user){
    try {
      const { email } = user;
      const userExist = await this.getByEmail(email);
      if(userExist) return this.generateToken(userExist, '1h');
      else return false;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async updatePass(user, pass){
    try {
      const isEqual = isValidPassword(user, pass);  
      if(isEqual) return false;
      const newPass = createHash(pass);
      return await this.update(user._id, { password: newPass }); 
    } catch (error) {
      throw new Error(error.message);
    }
  }

}





