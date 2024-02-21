import { Router } from 'express';
import ProductController from '../controllers/product.controllers.js';
const controller = new ProductController();

const router = Router();

router.get('/', controller.getAll);

// router.get('/:id', controller.getById);

//! con DTO
router.get('/:id', controller.getProdById);

router.post('/', controller.createProd);

router.put('/:id', controller.update);

router.delete('/:id', controller.delete);

export default router;




