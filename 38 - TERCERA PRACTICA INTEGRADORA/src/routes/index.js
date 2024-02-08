import { Router } from "express";
const router = Router();

import productRouter from './product.router.js';
import userRouter from './user.router.js';

router.use('/products', productRouter);
router.use('/users', userRouter);

export default router;
