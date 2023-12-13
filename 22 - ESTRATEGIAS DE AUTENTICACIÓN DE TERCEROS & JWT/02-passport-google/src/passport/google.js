import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import UserDao from "../daos/user.dao.js";
const userDao = new UserDao();

//https://console.cloud.google.com
const strategyOptions = {
  clientID:
    "1004164057773-dm0hme4tm2cvfpe9k78rfa7dhah4jb2n.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: "/users/oauth2/redirect/accounts.google.com",
  scope: ["profile", "email"],
  state: true,
};

const registerOrLogin = async (accessToken, refreshToken, profile, done) => {
  console.log(profile);
  const email = profile._json.email;
  const user = await userDao.getByEmail(email);
  if (user) return done(null, user);
  const newUser = await userDao.createUser({
    first_name: profile._json.given_name,
    last_name: profile._json.family_name,
    password: '',
    email,
    image: profile._json.picture,
    isGoogle: true,
  });
  return done(null, newUser);
};

passport.use("google", new GoogleStrategy(strategyOptions, registerOrLogin));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  done(null, id);
});
