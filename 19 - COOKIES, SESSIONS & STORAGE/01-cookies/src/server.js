import express from "express";
import cookieParser from "cookie-parser";

const app = express();

const secretKey = "1234";

app.use(cookieParser(secretKey));
app.use(express.json());

app.get("/set-cookie", (req, res) => {
  res.cookie("idioma", "ingles").json({ msg: "ok" });
});

app.get("/getcookie", (req, res) => {
  console.log(req.cookies);
  console.log(req.signedCookies);
  const { idioma } = req.cookies;
  idioma === "ingles" ? res.send("Hello!") : res.send("Hola!");
});

app.get("/set2", (req, res) => {
  res.cookie("saludo", "hola", { maxAge: 3000 }).json({ msg: "ok" });
});

app.get("/set-signed-cookie", (req, res) => {
  res.cookie("nombre", "Andres", { signed: true }).json({ msg: "ok" });
});

app.get("/clear", (req, res) => {
  res.clearCookie("nombre").json({ msg: "ok" });
});

app.listen(8080, () => console.log("server ok"));
