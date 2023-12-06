import UserDao from "../daos/user.dao.js";
const userDao = new UserDao();
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

const strategyOptions = {
  usernameField: "email",
  passportField: "password",
  passReqToCallback: true,
};

const signup = async (req, email, password, done) => {
  try {
    const user = await userDao.getByEmail(email);
    if (user) return done(null, false);
    const newUser = await userDao.createUser(req.body);
    return done(null, newUser);
  } catch (error) {
    console.log(error);
    return done(null, false);
  }
};

const login = async (req, email, password, done) => {
  try {
    // const user = { email, password };
    const userLogin = await userDao.loginUser(req.body);
    if (!userLogin) return done(null, false, { msg: "User not found" });
    return done(null, userLogin);
  } catch (error) {
    console.log(error);
  }
};

const signUpStrategy = new LocalStrategy(strategyOptions, signup);
const loginStrategy = new LocalStrategy(strategyOptions, login);

passport.use("register", signUpStrategy);
passport.use("login", loginStrategy);

//req.session.passport.user
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const user = await userDao.getById(id);
  console.log('deserialize', user);
  return done(null, user);
});
