import express from "express";
import { __dirname } from "./utils.js";

// console.log(__dirname);

const app = express();

app.use(express.static(__dirname + "/public"));
// app.use(express.static('D:\CODERHOUSE\BACKEND\backend-47345-coderhouse\09 - ROUTER Y MULTER\02-static\src/public'));

app.listen(8080, () => {
  console.log("server ok, puerto 8080");
});
