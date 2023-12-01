import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import sessionFileStore from "session-file-store";
import mainRouter from "./routes/user.routes.js";

const app = express();

const FileStore = sessionFileStore(session)

const fileStoreOptions = {
  store: new FileStore({
    path: './sessions',
    ttl: 120,
    reapInterval: 60
  }),
  secret: '1234',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 120000
  }
}

app.use(express.json());
app.use(cookieParser());

app.use(session(fileStoreOptions));

app.use("/api", mainRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`);
});

export default app;
