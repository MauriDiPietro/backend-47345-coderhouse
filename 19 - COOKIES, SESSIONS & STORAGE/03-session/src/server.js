import express from "express";
import session from "express-session";
import { validateLogin } from "./middlewares/validateLogin.js";
import { isAdmin } from "./middlewares/isAdmin.js";

const app = express();

app.use(express.json());

const sessionConfig = {
  secret: "1234",
  cookie: { maxAge: 60000 },
  saveUninitialized: true,
  resave: false,
};

app.use(session(sessionConfig));

const users = [
  {
    username: "juan",
    password: "1234",
    admin: true,
  },
  {
    username: "jose",
    password: "12345",
    admin: true,
  },
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const index = users.findIndex(
    (user) => user.username === username && user.password === password
  );
  console.log(index);
  if (index < 0) res.status(401).json({ msg: "No estas autorizado" });
  else {
    const user = users[index];
    req.session.info = {
      loggedIn: true,
      count: 1,
      admin: user.admin,
      username: user.username,
    };
    res.json({ msg: "Bienvenido/a!" });
  }
});

app.get("/session-info", (req, res) => {
  console.log(req.session);
});

app.get("/secret-endpoint", validateLogin, (req, res) => {
  req.session.info.count++;
  res.json({
    msg: "info secreta",
    count: req.session.info.count,
    session: req.session,
  });
});

app.get("/admin-secret-endpoint", validateLogin, isAdmin, (req, res) => {
  req.session.info.count++;
  res.json({
    msg: "info para administradores",
    count: req.session.info.count,
    session: req.session,
  });
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.json({ msg: "sesion destruida" });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});
