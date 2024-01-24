import Controllers from "./class.controller.js";
import UserService from "../services/user.services.js";
const userService = new UserService()
import { HttpResponse } from "../utils/http.response.js";
const httpResponse = new HttpResponse();

export default class UserController extends Controllers{
  constructor(){
    super(userService)
  }

  register = async (req, res, next) => {
    try {
      const newUser = await this.service.register(req.body);
      return httpResponse.Ok(res, newUser);
    } catch (error) {
      next(error)
    }
  };

  login = async (req, res, next) => {
    try {
      const userExist = await this.service.login(req.body);
      return httpResponse.Ok(res, userExist);
    } catch (error) {
      next(error)
    }
  };

  profile = (req, res, next)=>{
    try {
      const { first_name, last_name, email, role } = req.user;
      return httpResponse.Ok(res, 
        {
          first_name, 
          last_name, 
          email, 
          role
        }
      )
    } catch (error) {
      next(error);
    }
  }

}

