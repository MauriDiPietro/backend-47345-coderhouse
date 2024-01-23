import UserDaoMongoDB from "../daos/mongodb/user.dao.js";
import { generateToken } from "../jwt/auth.js";
const userDao = new UserDaoMongoDB();

export const register = async (req, res, next) => {
  try {
    const { first_name, last_name, email, age, password } = req.body;
    const exist = await userDao.getByEmail(email);
    if (exist) return res.status(400).json({ msg: "User already exists" });
    const user = { first_name, last_name, email, age, password };
    const newUser = await userDao.createUser(user);
    res.json({
      msg: "Register OK",
      newUser,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userDao.loginUser({ email, password });
    if (!user) res.json({ msg: "invalid credentials" });
    else{

      const access_token = generateToken(user);
      res
        .header("Authorization", access_token)
        .json({ msg: "Login OK", access_token });
    }
  } catch (error) {
    next(error);
  }
};
