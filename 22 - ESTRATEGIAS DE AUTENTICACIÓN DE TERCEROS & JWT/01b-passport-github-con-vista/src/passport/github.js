import { Strategy as GithubStrategy } from "passport-github2";
import passport from "passport";
import UserDao from "../daos/user.dao.js";
const userDao = new UserDao();

const strategyOptions = {
  clientID: "Iv1.c166a54620005122",
  clientSecret: "3e599fd8586091897bfe92473132d1ca7e159663",
  callbackURL: "http://localhost:8080/users/github",
};

const registerOrLogin = async (accessToken, refreshToken, profile, done) => {
  console.log(profile);
  const email = profile._json.email;
  const user = await userDao.getByEmail(email);
  if (user) return done(null, user);
  const newUser = await userDao.register({
    first_name: profile._json.name,
    email,
    image: profile._json.avatar_url,
    isGithub: true,
  });
  return done(null, newUser);
};

passport.use("github", new GithubStrategy(strategyOptions, registerOrLogin));
