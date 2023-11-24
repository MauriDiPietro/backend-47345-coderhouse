import { Router } from 'express';
import * as controller from '../controllers/pets.controllers.js';

const router = Router();

router.post('/', controller.createPet);     

router.post('/add/:idUser/:idPet', controller.addPetToUser); 

router.get('/:id', controller.getByIdPet);


export default router;

