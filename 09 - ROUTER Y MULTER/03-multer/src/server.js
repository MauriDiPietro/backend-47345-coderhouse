import express from "express";
import userRouter from './routes/user.router.js'; 
import petRouter from './routes/pet.router.js';
// import { loggerMid } from "./middlewares/loggerMid.js";
import morgan from 'morgan';
import { __dirname } from "./utils.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
// app.use(loggerMid);
app.use(morgan('dev'));

app.use('/users', userRouter);
app.use('/pets', petRouter);

const PORT = 8080;

app.listen(PORT, () => console.log(`Server ok on port ${PORT}`));
