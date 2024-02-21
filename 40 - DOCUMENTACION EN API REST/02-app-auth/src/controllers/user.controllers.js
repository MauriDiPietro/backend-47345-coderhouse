import Controllers from "./class.controller.js";
import UserService from "../services/user/user.services.js";
const userService = new UserService();
import { HttpResponse } from "../utils/http.response.js";
const httpResponse = new HttpResponse();
import errors from "../utils/errors.dictionary.js";

export default class UserController extends Controllers {
  constructor() {
    super(userService);
  }

  register = async (req, res, next) => {
    try {
      const newUser = await userService.register(req.body);
      return httpResponse.Ok(res, newUser);
    } catch (error) {
      next(error);
    }
  };

  login = async (req, res, next) => {
    try {
      const token = await userService.login(req.body);
      if(!token) return httpResponse.NotFound(res, errors.USER_NOT_FOUND)
      res.cookie('token', token, { httpOnly: true })
       return httpResponse.Ok(res, token);
    } catch (error) {
      next(error);
    }
  };

  profile = (req, res, next) => {
    try {
      const { first_name, last_name, email, role } = req.user;
      return httpResponse.Ok(res, {
        first_name,
        last_name,
        email,
        role,
      });
    } catch (error) {
      next(error);
    }
  };

  getUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await userService.getUserById(id);
      if (!user) return httpResponse.NotFound(res, errors.USER_NOT_FOUND);
      else return httpResponse.Ok(res, user);
    } catch (error) {
      next(error);
    }
  };

  resetPass = async (req, res, next) => {
    try {
      const user = req.user;
      const tokenResetPass = await userService.resetPass(user); //token
      if(tokenResetPass) {
        res.cookie('tokenpass', tokenResetPass) //!seteo el token en una cookie
        return httpResponse.Ok(res, {
          msg: 'Email reset password send OK'
        });
      }
      else return httpResponse.NotFound(res, 'email not send');
    } catch (error) {
      next(error.message);
    }
  };

  async updatePass(req, res, next) {
    try {
      const user = req.user;
      const { pass } = req.body;
      const { tokenpass } = req.cookies;
      if(!tokenpass) return httpResponse.Forbidden(res, errors.TOKEN_NOT_FOUND);
      const updPass = await userService.updatePass(user, pass);
      if(!updPass) return httpResponse.NotFound(res, errors.PASSWORD_EQUAL);
      res.clearCookie('tokenpass');
      return httpResponse.Ok(res, updPass);
    } catch (error) {
      next(error.message);
    }
  }
}
