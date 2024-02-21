import { Router } from "express";
const router = Router();

import productRouter from './product.router.js';
import userRouter from './user.router.js';
import viewRouter from './view.router.js';

router.use('/api/products', productRouter);
router.use('/api/users', userRouter);
router.use('/', viewRouter);

export default router;
