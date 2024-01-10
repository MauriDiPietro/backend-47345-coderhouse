import { Router } from 'express';
import UserController from '../controllers/user.controllers.js';
import { checkAuth } from '../middlewares/authJwt.js';
const controller = new UserController();

const router = Router();

router
        .post('/register', controller.register)
        .post('/login', controller.login)
        .get('/profile', checkAuth, controller.profile)

export default router;

