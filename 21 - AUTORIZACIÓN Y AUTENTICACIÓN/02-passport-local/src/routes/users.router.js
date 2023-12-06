import { Router } from 'express'
import { registerResponse, loginResponse } from '../controllers/user.controller.js';
import passport from 'passport';

const router = Router()

router.post('/register', passport.authenticate('register'), registerResponse);

router.post('/login', passport.authenticate('login'), loginResponse);


export default router
