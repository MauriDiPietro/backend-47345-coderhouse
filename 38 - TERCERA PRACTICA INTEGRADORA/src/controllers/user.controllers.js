import Controllers from "./class.controller.js";
import UserService from "../services/user/user.services.js";
const userService = new UserService();
import { HttpResponse } from "../utils/http.response.js";
import errorsDictionary from "../utils/errors.dictionary.js";
const httpResponse = new HttpResponse();

export default class UserController extends Controllers {
  constructor() {
    super(userService);
  }

  register = async (req, res, next) => {
    try {
      const newUser = await this.service.register(req.body);
      return httpResponse.Ok(res, newUser);
    } catch (error) {
      next(error);
    }
  };

  login = async (req, res, next) => {
    try {
      const userExist = await this.service.login(req.body);
      return httpResponse.Ok(res, userExist);
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

  resetPass = async (req, res, next) => {
    try {
      const user = req.user;
      const tokenResetPass = await userService.resetPass(user);
      if (tokenResetPass) {
        res.cookie("tokenpass", tokenResetPass);
        return httpResponse.Ok(res, {
          msg: "Email reset pass send ok",
        });
      } else return httpResponse.NotFound(res, "email not send");
    } catch (error) {
      next(error);
    }
  };

  async updatePass(req, res, next) {
    try {
      const user = req.user;
      const { pass } = req.body;
      const { tokenpass } = req.cookies;
      if (!tokenpass)
        return httpResponse.Forbidden(res, errorsDictionary.TOKEN_NOT_FOUND);
      const updPass = await userService.updatePass(user, pass);
      if (!updPass) return httpResponse.NotFound(res, errorsDictionary.PASSWORD_EQUAL);
      res.clearCookie("tokenpass");
      return httpResponse.Ok(res, updPass);
    } catch (error) {
      next(error.message);
    }
  }
}
