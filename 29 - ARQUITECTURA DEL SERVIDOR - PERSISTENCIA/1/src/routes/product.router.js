import { Router } from 'express';
import ProductController from '../controllers/product.controllers.js';
const controller = new ProductController();

const router = Router();

router 
      // .get('/', controller.getAll)
      // .get('/:id', controller.getById)
      .post('/', controller.create)
      .put('/:id', controller.update)
      .delete('/:id', controller.delete)  
      .get('/dto/:id', controller.getProdById)

export default router;




