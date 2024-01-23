import { Router } from "express";
import * as controller from "../controllers/cart.controllers.js";

const router = Router();

router.get("/", controller.getAll);

router.get("/:id", controller.getById);

router.post("/", controller.create);

router.put("/:id", controller.update);

router.delete("/:id", controller.remove);

router.post("/:idCart/products/:idProd", controller.addProdToCart);

router.delete("/:idCart/products/:idProd", controller.removeProdToCart);

router.put("/:idCart/products/:idProd", controller.updateProdQuantityToCart);

router.delete("/clear/:idCart", controller.clearCart);

export default router;
