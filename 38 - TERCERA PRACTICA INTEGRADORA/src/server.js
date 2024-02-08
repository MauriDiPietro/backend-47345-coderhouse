import express from 'express';
import morgan from 'morgan';
import apiRouter from './routes/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import 'dotenv/config'
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookieParser(process.env.SECRET_COOKIES));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use('/api', apiRouter);

app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`SERVER UP ON PORT ${PORT}`));
