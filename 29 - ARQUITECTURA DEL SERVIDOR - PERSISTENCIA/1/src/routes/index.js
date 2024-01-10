import { Router } from "express";

import productRouter from './product.router.js';
import userRouter from './user.router.js';

export default class MainRouter {
    constructor() {
        this.router = Router();
        this.initRoutes();
    }

    initRoutes() {
        this.router.use('/products', productRouter);
        this.router.use('/users', userRouter);
    }

    getRouter() {
        return this.router;
    }
}; 






