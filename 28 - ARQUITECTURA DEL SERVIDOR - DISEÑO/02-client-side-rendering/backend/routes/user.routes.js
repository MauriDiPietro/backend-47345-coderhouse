import express from 'express';
import { createUser, getUserById, loginUser, getUsers, logout, getUser } from '../controllers/user.controller.js';
const router = express.Router();
import {verifyToken} from '../middlewares/verifyToken.js';
import {refreshToken} from '../controllers/user.controller.js'

router.post('/signup', createUser);
router.post('/login', loginUser);
router.get('/home/:id', verifyToken, getUserById);
router.get('/home', getUser);
router.get('/token', refreshToken);
router.get('/', verifyToken, getUsers);
router.delete('/logout', logout);

export default router;

