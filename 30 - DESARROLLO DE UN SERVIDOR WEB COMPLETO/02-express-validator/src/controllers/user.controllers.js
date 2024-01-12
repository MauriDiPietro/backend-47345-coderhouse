import Controllers from "./class.controller.js";
import UserService from "../services/user.services.js";
import { createResponse } from "../utils.js";
const userService = new UserService()

export default class UserController extends Controllers{
  constructor(){
    super(userService)
  }

  register = async (req, res, next) => {
    try {
      const newUser = await this.service.register(req.body);
      createResponse(res, 200, newUser);
    } catch (error) {
      next(error.message);
    }
  };

  login = async (req, res, next) => {
    try {
      const userExist = await this.service.login(req.body);
      createResponse(res, 200, userExist);
    } catch (error) {
      next(error.message);
    }
  };

  profile = (req, res, next)=>{
    try {
      const { first_name, last_name, email, role } = req.user;
      createResponse(res, 200, 
        {
          first_name, 
          last_name, 
          email, 
          role
        }
      )
    } catch (error) {
      next(error.message)
    }
  }

}

