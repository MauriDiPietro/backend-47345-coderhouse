import express, { Request, Response } from "express";
import { dbConnection } from "./config/db.connection";
import { errorHandler } from "./middlewares/error.handler";
import apiRouter from "./routes/index";

const app = express();

app.use(express.json());

dbConnection().then(() => console.log("Connected to database"));

app.use("/api", apiRouter);

app.use(errorHandler);

app.listen(8080, () => console.log("listening on port 8080"));
