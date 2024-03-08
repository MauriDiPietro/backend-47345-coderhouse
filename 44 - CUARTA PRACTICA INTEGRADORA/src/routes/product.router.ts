import { Router } from "express";
import * as controller from '../controllers/product.controllers'
import { validateGetProd, validatePostProd } from "../middlewares/product.validator";

const router = Router()

router.get('/', controller.getAll);
router.post('/', validatePostProd, controller.create);
router.get('/:id', validateGetProd, controller.getById);
router.put('/:id', [validateGetProd, validatePostProd], controller.update);
router.delete('/:id', validateGetProd, controller.remove);

export default router