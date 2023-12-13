import express from "express";
import { __dirname } from "./utils.js";
import usersRouter from "./routes/users.router.js";
import handlebars from "express-handlebars";
import viewsRouter from "./routes/views.routes.js";
import "./db/dbConfig.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());

app.use(express.static(__dirname + "/public"));
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use("/users", usersRouter);
app.use("/", viewsRouter);

app.use(errorHandler);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});
