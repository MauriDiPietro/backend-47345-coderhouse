import { Router } from "express";
const router = Router();

import productRouter from './product.router.js';

router.use('/products', productRouter);

export default router;
