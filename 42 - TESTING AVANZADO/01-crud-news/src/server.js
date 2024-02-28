import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import newsRouter from './routes/news.routes.js';
import { logger } from './logs/news.logs.js';
import { reqLog } from './middlewares/reqLog.js';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

import { info } from './docs/info.js';

const app = express();

const specs = swaggerJSDoc(info);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(reqLog);

app.use('/news', newsRouter);

const PORT = 8080;

const server = app.listen(PORT, () =>
  logger.info(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));

export default app;