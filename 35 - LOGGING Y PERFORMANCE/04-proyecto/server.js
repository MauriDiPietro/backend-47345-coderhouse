import express from "express";
import { logger } from "./utils/logger.js";

const app = express();

app.get("/", (req, res) => {
  logger.error("error en el endpoint de prueba");
  res.send("probando logger");
});

const PORT = 8080;

app.listen(PORT, () =>
  logger.info(`Servidor express escuchando en el puerto ${PORT}`)
);
