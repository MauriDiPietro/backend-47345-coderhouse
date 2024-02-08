import { Router } from 'express';
import { checkAuth } from '../middlewares/authJwt.js';
import UserController from '../controllers/user.controllers.js';
const controller = new UserController();

const router = Router();

// router.get('/search/:id', controller.getById);

router.post('/register', controller.register);

router.post('/login', controller.login);

router.get('/profile', checkAuth, controller.profile);

// router.get('/:id', controller.getUserById);

export default router;

