import { Router } from 'express';
import { checkAuth } from '../middlewares/authJwt.js';
import UserController from '../controllers/user.controllers.js';
import { validateRegister } from '../validators/user.validator.js';
const controller = new UserController();

const router = Router();

// router.get('/search/:id', controller.getById);

router.post('/register', validateRegister, controller.register);

router.post('/login', controller.login);

router.get('/profile', checkAuth, controller.profile);

export default router;

