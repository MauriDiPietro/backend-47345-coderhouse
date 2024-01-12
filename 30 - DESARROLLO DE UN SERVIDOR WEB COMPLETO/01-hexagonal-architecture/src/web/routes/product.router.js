import { Router } from 'express';
import ProductControllers from '../controllers/product.controllers.js';
const controller = new ProductControllers();

const router = Router();

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.post('/', controller.create);

router.put('/:id', controller.update);

router.delete('/:id', controller.delete);

export default router;