import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import { __dirname } from "./utils.js";
import usersRouter from "./routes/users.router.js";
import "./db/dbConfig.js";
import { configSession } from "./config/config.session.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import passport from "passport";
import "./passport/local.js";
import "./passport/github.js";
import handlebars from "express-handlebars";
import viewsRoutes from "./routes/views.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session(configSession));

app.use(express.static(__dirname + "/public"));
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use(passport.initialize());
app.use(passport.session());

app.use("/users", usersRouter);
app.use("/", viewsRoutes);

app.use(errorHandler);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});
