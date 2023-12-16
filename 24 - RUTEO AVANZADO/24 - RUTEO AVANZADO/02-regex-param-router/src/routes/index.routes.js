import { Router } from "express";
import userRouters from "./user.routes.js"
import cartRouters from "./cart.routes.js"
import productsRouters from "./products.routes.js"

const router = Router();

router.use("/user", userRouters);
router.use("/cart", cartRouters);
router.use("/products", productsRouters);

export default router;