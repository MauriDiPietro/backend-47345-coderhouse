import { Router } from "express";

const router = Router();

import productRouter from "./product.router";

router.use("/products", productRouter);

export default router;
