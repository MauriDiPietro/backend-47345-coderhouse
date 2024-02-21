import express from 'express';
import morgan from 'morgan';
import apiRouter from './routes/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import config from './config/config.js';
import cookieParser from 'cookie-parser';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

import { info } from './docs/info.js';

const app = express();

const specs = swaggerJSDoc(info);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

app.use(express.json());
app.use(cookieParser(config.SECRET_COOKIES));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use('/', apiRouter);

app.use(errorHandler);

const PORT = config.PORT;

app.listen(PORT, () => console.log(`SERVER UP ON PORT ${PORT}`));
