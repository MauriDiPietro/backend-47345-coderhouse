import { Router } from 'express';
import * as controller from '../controllers/users.controllers.js';

const router = Router();

router.post('/file', controller.createFileCtr);

router.get('/all', controller.getAllCtr);

router.get('/', controller.getByNameCtr);

router.get('/id/:id', controller.getByIdCtr);

router.get('/email/:email', controller.getByEmailCtr);

router.post('/', controller.createCtr);

router.put('/:id', controller.updateCtr);

router.delete('/:id', controller.deleteCtr);

export default router;