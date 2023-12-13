import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import { __dirname } from "./utils.js";
import usersRouter from "./routes/users.router.js";
import "./db/dbConfig.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import passport from "passport";
import "./passport/local.js";
import "./passport/github.js";
import "./passport/google.js";
import { configSession } from "./config/config.session.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session(configSession));

app.use(errorHandler);
app.use(passport.initialize());
app.use(passport.session());

app.use("/users", usersRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});
