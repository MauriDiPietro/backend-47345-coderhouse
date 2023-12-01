import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import mainRouter from "./routes/user.routes.js";
import "./db/connection.js";
import { connectionString } from "./db/connection.js";

const app = express();

const mongoStoreOptions = {
  store: MongoStore.create({
    mongoUrl: connectionString,
    ttl: 120,
    crypto: {
      secret: '1234'
    }
  }),
  secret: "1234",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 120000,
  },
};

app.use(express.json());
app.use(cookieParser());

app.use(session(mongoStoreOptions));

app.use("/api", mainRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`);
});

export default app;
