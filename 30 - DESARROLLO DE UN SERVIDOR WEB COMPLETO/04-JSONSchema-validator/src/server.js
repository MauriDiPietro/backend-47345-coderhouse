import express from 'express';
import morgan from 'morgan';
import apiRouter from './routes/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(errorHandler);
app.use(morgan('dev'));

app.use('/api', apiRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`SERVER UP ON PORT ${PORT}`));
