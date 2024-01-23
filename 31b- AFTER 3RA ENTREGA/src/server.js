import './db/database.js';
import express from 'express';
import morgan from 'morgan';
import userRouter from './routes/users.router.js';
import productRouter from './routes/product.router.js';
import cartRouter from './routes/cart.router.js';
import ticketRouter from './routes/ticket.router.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/carts', cartRouter);
app.use('/ticket', ticketRouter);

app.use(errorHandler);

const PORT = 8080;

app.listen(PORT, () => console.log(`SERVER UP ON PORT ${PORT}`));

