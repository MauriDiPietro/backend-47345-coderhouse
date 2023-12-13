import { Router } from 'express'
import { register, login, privateRoute, loginFront } from '../controllers/user.controller.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = Router()

router.post('/register', register);

router.post('/login', login);

router.get('/private', verifyToken, privateRoute);

router.post('/loginfront', loginFront);


export default router;
