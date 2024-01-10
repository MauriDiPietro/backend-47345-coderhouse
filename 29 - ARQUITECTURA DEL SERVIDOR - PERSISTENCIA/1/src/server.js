import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import MainRouter from './routes/index.js';
const mainRouter = new MainRouter();
import { errorHandler } from './middlewares/errorHandler.js';
import 'dotenv/config';

const app = express();

app
    .use(json())
    .use(urlencoded({extended: true}))
    .use(morgan('dev'))

    .use('/api', mainRouter.getRouter())

    .use(errorHandler)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`SERVER UP ON PORT ${PORT}`));
