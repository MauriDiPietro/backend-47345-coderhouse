import Services from "../class.services.js";
import factory from '../../persistence/daos/factory.js';
const { userDao } = factory;
import UserRepository from "../../persistence/repository/user.repository.js";
const userRepository = new UserRepository();
import { sendMail } from "./mailing.service.js";

export default class UserService extends Services {
  constructor(){
    super(userDao)
  }

  register = async (user) => {
    try {
      const response = await userDao.register(user);
      await sendMail(user, 'register');
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  login = async (user) => {
    try {
      const userExist = await userDao.login(user);
      return userExist;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  getUserById = async (id) => {
    try {
      const user = await userRepository.getUserById(id);
      if (!user) return false;
      else return user;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  resetPass = async (user) => {
    try {
      const token = await userDao.resetPass(user);
      if(token) return await sendMail(user, 'resetPass', token);
      else return false; 
    } catch (error) {
      throw new Error(error.message);
    }
  }

  updatePass = async (user, pass)=>{
    try {
      const response = await userDao.updatePass(user, pass);
      if(!response) return false;
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }

};

