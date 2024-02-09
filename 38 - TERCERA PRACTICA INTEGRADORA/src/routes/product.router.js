import { Router } from 'express';
import ProductController from '../controllers/product.controllers.js';
const controller = new ProductController();

const router = Router();

router.get('/', controller.getAll);

// router.get('/:id', controller.getById);

// router.post('/', controller.create);

/* ------------------------------------ - ----------------------------------- */
// CON DTO
router.post('/', controller.createProd);
router.get('/:id', controller.getProdById);
/* ------------------------------------ - ----------------------------------- */
router.put('/:id', controller.update);

router.delete('/:id', controller.delete);

export default router;




