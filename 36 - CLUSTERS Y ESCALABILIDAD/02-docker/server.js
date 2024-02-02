import express from "express";

const app = express();

app.get("/operacion-simple", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 10000; i++) {
    sum += i;
  }
  res.json({
    sum,
    pid: process.pid,
  });
});

app.get("/operacion-compleja", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 50000000; i++) {
    sum += i;
  }
  res.json({
    sum,
    pid: process.pid,
  });
});

app.get("/dead", (req, res) => {
  res.json({ msg: "OK" });
  console.log(`PID => ${process.pid} dead`);
  process.exit(0);
});

const PORT = 8080;

app.listen(PORT, () =>
  console.log(
    `Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`
  )
);
