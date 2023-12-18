import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import { __dirname } from "./utils.js";
import usersRouter from "./routes/users.router.js";
import "./db/dbConfig.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import passport from "passport";
import mongoStore from 'connect-mongo'
import "./passport/jwt.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: 'sessionKey',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 10000
    },
    store: new mongoStore({
      mongoUrl: 'mongodb://127.0.0.1:27017/coder47345',
      ttl: 10,
    }),
  })
)

app.use(passport.initialize());
app.use(passport.session());

app.use("/users", usersRouter);

app.use(errorHandler);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});
